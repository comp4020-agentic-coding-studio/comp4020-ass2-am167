import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// The published spec for this deliverable requires "assessment that adds up to
// 100%". That is the first test here. The rest guard the studio's own promise:
// the course claims all semester that design is a tradeoff between three named
// metrics, and says students are marked against exactly those. If a brief is
// marked on something else, the thesis is decoration rather than the contract
// it is presented as.

// The three metrics Week 1 establishes and every later week returns to.
const METRICS = ["fiscal performance", "mobility performance", "livability"];

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface WeightedCriterion {
  name: string;
  weight: number;
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as {
  nodes: ApiNode[];
};

const assessments = api.nodes
  .filter((node) => node.type === "assessments")
  .map((node) => ({
    id: node.id,
    week: Number(node.meta?.week),
    weight: Number(node.meta?.weight),
    marking: node.meta?.marking as
      | { mode: "weighted"; criteria: WeightedCriterion[] }
      | { mode: "holistic"; description: string }
      | undefined,
  }))
  .sort((a, b) => a.week - b.week);

const studioWeeks = new Set(
  api.nodes.filter((node) => node.type === "sessions").map((node) => Number(node.meta?.week)),
);

// The card image and the page hero are the two places the theme renders an
// illustration; a nav logo or a footer mark is chrome, not content, so this
// looks at the content region only.
function imageAlts(html: string): string[] {
  const body = html
    .replace(/<header[\s\S]*?<\/header>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "");
  return [...body.matchAll(/<img\b[^>]*>/gi)]
    .map((tag) => tag[0].match(/\balt="([^"]*)"/i)?.[1] ?? "")
    .filter((alt) => alt.trim().length > 0);
}

// The grid's own illustrations. Every page also opens with a full-bleed hero
// band (see spec/page-headers.test.ts), and that band sits outside `<main>`
// beside the nav, so counting cards has to look inside `<main>` rather than at
// everything that isn't chrome --- otherwise the index page's own header
// illustration reads as a fourth brief.
function gridImageAlts(html: string): string[] {
  return imageAlts(html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "");
}

describe("assessment", () => {
  it("adds up to 100%", () => {
    const total = assessments.reduce((sum, assessment) => sum + assessment.weight, 0);
    expect(
      total,
      `weights: ${assessments.map((a) => `${a.id} ${a.weight}`).join(", ")}`,
    ).toBe(100);
  });

  it("marks every weighted brief against the three metrics the course names", () => {
    const weighted = assessments.filter((a) => a.marking?.mode === "weighted");
    expect(weighted.length, "no weighted brief to check the metrics against").toBeGreaterThan(0);

    for (const assessment of weighted) {
      const criteria = (assessment.marking as { criteria: WeightedCriterion[] }).criteria;
      const named = criteria.map((criterion) => criterion.name.toLowerCase());
      for (const metric of METRICS) {
        expect(
          named.some((name) => name.includes(metric)),
          `${assessment.id} is not marked on ${metric} — its criteria are: ${named.join(", ")}`,
        ).toBe(true);
      }
    }
  });

  it("falls due in a week that actually runs a studio to pin up in", () => {
    for (const assessment of assessments) {
      expect(
        studioWeeks.has(assessment.week),
        `${assessment.id} is due in week ${assessment.week}, which runs no studio`,
      ).toBe(true);
    }
  });

  // The three briefs escalate in scale --- one cell, then a district, then the
  // whole city --- and the illustrations are meant to carry that, not just
  // decorate the page. One shared stock image on all three would satisfy a
  // bare "has an image" check while telling a student nothing, so each brief
  // brings its own picture and its own description of it.
  it("illustrates every brief, on its card and at the head of its own page", () => {
    const cardAlts = gridImageAlts(readFileSync(resolve("dist/assessments/index.html"), "utf8"));
    expect(
      cardAlts.length,
      `the assessment grid shows ${assessments.length} briefs but ${cardAlts.length} images`,
    ).toBe(assessments.length);

    const heroAlts = assessments.map((assessment) => {
      const page = readFileSync(resolve(`dist/${assessment.id}/index.html`), "utf8");
      const [alt] = imageAlts(page);
      expect(alt, `${assessment.id} has no illustration above its brief`).toBeTruthy();
      return alt as string;
    });

    for (const alt of [...cardAlts, ...heroAlts]) {
      expect(alt.length, `"${alt}" is too thin to describe an image`).toBeGreaterThan(20);
    }
    expect(new Set(cardAlts).size, "two briefs share a card illustration").toBe(cardAlts.length);
    expect(new Set(heroAlts).size, "two briefs share a page illustration").toBe(heroAlts.length);
  });
});
