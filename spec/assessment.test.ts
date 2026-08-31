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
});
