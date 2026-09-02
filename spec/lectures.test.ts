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
      expect(lectureHtml.length, lecture.id + " lecture page is too thin").toBeGreaterThan(8_000);
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
