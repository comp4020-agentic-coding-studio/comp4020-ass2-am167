import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// The policies page sends students to named roles --- a Course Convenor for
// briefs, marks, extensions and adjustments, a Visiting Critic who turns up at
// assessed juries --- and the home page promises the people page says "how to
// reach them". These tests hold the site to both.

interface ApiNode {
  id: string;
  type: string;
  title: string;
  meta?: Record<string, unknown>;
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as {
  nodes: ApiNode[];
};

const people = api.nodes.filter((node) => node.type === "people");
const peopleHtml = readFileSync(resolve("dist/people/index.html"), "utf8");
const peopleText = (peopleHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "")
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ")
  .trim();

describe("teaching team", () => {
  it("fills every role the policies page sends students to", () => {
    expect(peopleText).toMatch(/course convenor/i);
    expect(peopleText).toMatch(/visiting critic/i);
  });

  it("says how to reach every person on it", () => {
    expect(people.length, "no people published").toBeGreaterThan(0);
    for (const person of people) {
      const contact = person.meta?.contact;
      expect(
        typeof contact === "string" && contact.trim().length > 0,
        `${person.title} has no contact line`,
      ).toBe(true);
    }
  });

  it("ships real entries rather than the starter placeholders", () => {
    for (const person of people) {
      const page = readFileSync(resolve(`dist/${person.id}/index.html`), "utf8");
      expect(page, `${person.title} still carries the starter marker`).not.toContain(
        "STARTER_CONTENT",
      );
      expect(page, `${person.title} is still the placeholder entry`).not.toMatch(
        /Replace this entry/i,
      );
    }
  });
});
