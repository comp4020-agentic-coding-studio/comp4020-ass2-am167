import { readFileSync } from "node:fs";
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
  12: /comprehensive|capstone|jury|plan/i,
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
