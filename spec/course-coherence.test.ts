import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// This is the machine-checkable half of “twenty-odd pages that have to agree”.
// The API is the rendered course graph, so these checks survive a change of
// Astro components or source-file organisation.

interface ApiNode {
  id: string;
  type: string;
  title: string;
  description: string;
  related?: string[];
  meta?: Record<string, unknown>;
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as {
  nodes: ApiNode[];
};

const byId = new Map(api.nodes.map((node) => [node.id, node]));
const lectures = api.nodes
  .filter((node) => node.type === "lectures")
  .sort((a, b) => Number(a.meta?.week) - Number(b.meta?.week));
const sessions = api.nodes.filter((node) => node.type === "sessions");
const assessments = api.nodes.filter((node) => node.type === "assessments");

// These are deliberately course-specific. They are the promises an agent must
// preserve while expanding or rewriting the weekly content. Change this list
// when the course idea changes; do not replace it with a generic word-count
// test, which would allow plausible-sounding but unrelated pages through.
const weeklyAnchors: Record<number, RegExp> = {
  1: /site|terrain|grid/i,
  2: /block|street|walk/i,
  3: /zoning/i,
  4: /amenity|density|upzon/i,
  5: /transit|headway|spine/i,
  6: /traffic|road|peak|lane/i,
  7: /utility|water|sewage|power|infrastructure/i,
  8: /budget|tax|fiscal|cutback/i,
  9: /public realm|park|plaza/i,
  10: /hazard|pollution|climate|resilien/i,
  11: /model|land.?value|displacement|ownership/i,
  12: /comprehensive|capstone|jury/i,
};

const weekOf = (node: ApiNode): number => Number(node.meta?.week);
const counterpart = (node: ApiNode, type: "lectures" | "sessions"): ApiNode | undefined =>
  api.nodes.find((candidate) => candidate.type === type && weekOf(candidate) === weekOf(node));

describe("course coherence", () => {
  it("keeps one lecture and one studio in every teaching week", () => {
    expect(lectures.length).toBe(12);
    expect(sessions.length).toBe(12);
    expect(new Set(lectures.map(weekOf)).size).toBe(lectures.length);
    expect(new Set(sessions.map(weekOf)).size).toBe(sessions.length);

    for (const lecture of lectures) {
      const studio = counterpart(lecture, "sessions");
      expect(studio, `week ${weekOf(lecture)} has no studio counterpart`).toBeDefined();
    }
  });

  it("makes each lecture/studio pair point at one another", () => {
    for (const lecture of lectures) {
      const studio = counterpart(lecture, "sessions");
      expect(studio).toBeDefined();
      expect(lecture.related, `${lecture.id} has no related links`).toContain(studio!.id);
      expect(studio!.related, `${studio!.id} has no related links`).toContain(lecture.id);
    }
  });

  it("keeps every assessment attached to the studio it is due in", () => {
    for (const assessment of assessments) {
      const studio = counterpart(assessment, "sessions");
      expect(studio, `${assessment.id} has no studio in week ${weekOf(assessment)}`).toBeDefined();
      const due = String(assessment.meta?.due).slice(0, 10);
      const studioDate = String(studio?.meta?.date).slice(0, 10);
      expect(due, `${assessment.id} is due ${due}, not on its studio date`).toBe(studioDate);
      expect(assessment.related).toContain(studio!.id);
    }
  });

  it("keeps the course graph free of dangling references", () => {
    for (const node of api.nodes) {
      for (const related of node.related ?? []) {
        expect(byId.has(related), `${node.id} links to missing node ${related}`).toBe(true);
      }
    }
  });

  it("keeps each week's lecture and studio on its declared course subject", () => {
    for (const lecture of lectures) {
      const anchor = weeklyAnchors[weekOf(lecture)];
      expect(anchor, `no course anchor declared for week ${weekOf(lecture)}`).toBeDefined();
      const studio = counterpart(lecture, "sessions")!;
      expect(
        anchor.test(`${lecture.title} ${lecture.description}`),
        `${lecture.id} drifted from its weekly anchor`,
      ).toBe(true);
      expect(
        anchor.test(`${studio.title} ${studio.description}`),
        `${studio.id} drifted from its weekly anchor`,
      ).toBe(true);
    }
  });
});

// The audit that produced AUDIT.md found four defects of one shape: a session
// asking students to arrive with an artefact no earlier session produced. The
// structural checks above cannot see that, because the graph edges, the dates
// and the weekly subjects were all correct in every one of those cases. This
// is the mechanical half of that class — the save-file chain, which is the
// artefact the whole semester is carried in.
describe("the save-file chain", () => {
  const sessionSource = (week: number): string => {
    const file = readdirSync(resolve("src/content/sessions")).find((name) =>
      name.startsWith(String(week).padStart(2, "0") + "-"),
    );
    expect(file, `no session file for week ${week}`).toBeDefined();
    return readFileSync(resolve("src/content/sessions", file!), "utf8");
  };

  const savedWeeks = (text: string): number[] =>
    [...text.matchAll(/<student ID>-w(\d{2})/g)].map((match) => Number(match[1]));

  it("never asks a week to open a save a later week produces", () => {
    for (const studio of sessions) {
      const week = weekOf(studio);
      for (const referenced of savedWeeks(sessionSource(week))) {
        expect(
          referenced,
          `${studio.id} refers to <student ID>-w${String(referenced).padStart(2, "0")}, which does not exist yet in week ${week}`,
        ).toBeLessThanOrEqual(week);
      }
    }
  });

  it("hands every week's save forward to the week that opens it", () => {
    for (const studio of sessions) {
      const week = weekOf(studio);
      const own = String(week).padStart(2, "0");
      expect(
        savedWeeks(sessionSource(week)),
        `${studio.id} never names its own <student ID>-w${own}, so nothing carries out of it`,
      ).toContain(week);

      // Each week either opens the previous week's save or is the first week.
      if (week > 1) {
        const opensSomething = savedWeeks(sessionSource(week)).some((w) => w < week);
        const nextOpensThis = week < 12 && savedWeeks(sessionSource(week + 1)).includes(week);
        expect(
          opensSomething || nextOpensThis,
          `week ${week}'s save is an orphan: it opens nothing earlier and nothing later opens it`,
        ).toBe(true);
      }
    }
  });

  it("only issues a reference checkpoint in the week that supplies it", () => {
    for (const studio of sessions) {
      const week = weekOf(studio);
      for (const [, refWeek] of sessionSource(week).matchAll(/kerrow-ref-w(\d{2})/g)) {
        expect(
          Number(refWeek),
          `${studio.id} reads kerrow-ref-w${refWeek}, which is not this week's issued checkpoint`,
        ).toBe(week);
      }
    }
  });
});
