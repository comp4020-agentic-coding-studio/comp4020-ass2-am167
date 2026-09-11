import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as {
  nodes: ApiNode[];
};

const lectures = api.nodes
  .filter((node) => node.type === "lectures")
  .sort((a, b) => Number(a.meta?.week) - Number(b.meta?.week));

describe("lecture delivery", () => {
  it("publishes a complete lecture page and deck for every teaching week", () => {
    expect(lectures).toHaveLength(12);

    for (const lecture of lectures) {
      const week = Number(lecture.meta?.week);
      const slug = "week-" + String(week).padStart(2, "0");
      expect(lecture.meta?.slides, lecture.id).toBe("/decks/" + slug + "/");
      const lectureHtml = readFileSync(resolve("dist/lectures/" + slug + "/index.html"), "utf8");
      expect(lectureHtml, lecture.id).not.toMatch(/STARTER_CONTENT|Scheduled but not yet written/);

      // A lecture is thin when it is missing the work, not when it is short.
      // Every lecture owes the reader the same four things: the standing
      // sections, theory mapped onto named simulation mechanics, and a week
      // whose decision is stated as a trade between two of the three metrics.
      // Padding a page cannot satisfy any of these; a page-length threshold
      // would have been satisfied by all of them.
      for (const section of [
        "The argument",
        "What you will learn",
        "Theory into practice",
        "The decision this week",
        "Into the studio",
        "Assessment connection",
      ]) {
        expect(lectureHtml, lecture.id + " is missing its " + section + " section").toContain(
          ">" + section + "<",
        );
      }

      const simulationRows = [...lectureHtml.matchAll(/<tr>/g)].length;
      expect(
        simulationRows,
        lecture.id + " maps too little theory onto simulation mechanics",
      ).toBeGreaterThanOrEqual(4);

      const decision = lectureHtml.slice(lectureHtml.indexOf(">The decision this week<"));
      const traded = ["fiscal performance", "mobility performance", "livability"].filter((metric) =>
        decision.toLowerCase().includes(metric),
      );
      expect(
        traded.length,
        lecture.id + " does not name two metrics its decision trades between",
      ).toBeGreaterThanOrEqual(2);
      expect(
        existsSync(resolve("dist/decks/" + slug + "/index.html")),
        slug + " deck is missing",
      ).toBe(true);
    }
  });

  it("keeps the course evidence vocabulary visible in every deck", () => {
    for (let week = 1; week <= 12; week += 1) {
      const slug = "week-" + String(week).padStart(2, "0");
      const deckPath = resolve("dist/decks/" + slug + "/index.html");
      expect(existsSync(deckPath), slug + " deck is missing").toBe(true);
      const html = readFileSync(deckPath, "utf8");
      expect(html, slug + " does not distinguish its evidence").toMatch(
        /direct readout|derived measure|worked hypothetical/i,
      );
    }
  });
});

// Durations are read from the delivered instructions, not a duplicate fixture.
it("fits the capstone's five moves inside five minutes in both teaching formats", () => {
  const studio = readFileSync("src/content/sessions/12-final-jury.md", "utf8");
  const deck = readFileSync("src/decks/week-12.deck.mdx", "utf8");
  for (const [text, pattern] of [[studio, /—\s*(\d+)\s+seconds/g], [deck, /\| (\d+) s \|/g]] as const) {
    const durations = [...text.matchAll(pattern)].map((match) => Number(match[1]));
    expect(durations).toHaveLength(5);
    expect(durations.reduce((sum, value) => sum + value, 0)).toBeLessThanOrEqual(300);
  }
});

it("reconciles the published utility chronology before calling a checkpoint overloaded", () => {
  const sheet = readFileSync("src/pages/resources/index.mdx", "utf8");
  const rows = [...sheet.matchAll(/\| (Baseline|First completion|Second completion) \| ([\d,]+) \| ([\d,]+) \| ([^|]+) \|/g)];
  expect(rows).toHaveLength(3);
  for (const [, , demandText, capacityText, interpretation] of rows) {
    const demand = Number(demandText.replaceAll(",", ""));
    const capacity = Number(capacityText.replaceAll(",", ""));
    expect(interpretation).toContain(`${Math.abs(capacity - demand)} u ${demand > capacity ? "shortfall" : "headroom"}`);
  }
  const deck = readFileSync("src/decks/week-07.deck.mdx", "utf8");
  expect(deck).toContain("adds 198 u: draw reaches 1,340 u against 1,200 u installed");
});

it("balances the resource worksheet's 22% cut without spending the protected utilities", () => {
  const sheet = readFileSync("src/pages/resources/index.mdx", "utf8");
  const rows = [...sheet.matchAll(/\| (Transit|Education|Healthcare|Parks and recreation) \| ([\d,]+) \| ([\d,]+) \| ([\d,]+) \|/g)];
  expect(rows).toHaveLength(4);
  let before = 0, cut = 0;
  for (const [, , a, b, c] of rows) {
    const values = [a, b, c].map((value) => Number(value.replaceAll(",", "")));
    expect(values[0] - values[1]).toBe(values[2]);
    before += values[0]; cut += values[1];
  }
  expect(cut / before).toBe(0.22);
  expect(sheet).toContain("total allocated spending falls from ₡31,900 to ₡27,500");
  expect(before + 6800 + 5100).toBe(31900);
  expect(before - cut + 6800 + 5100).toBe(27500);
});
