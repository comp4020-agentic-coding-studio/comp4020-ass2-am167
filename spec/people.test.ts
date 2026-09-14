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

// The five portraits are generated from one construction (scripts/make-portraits.ts),
// which is what makes the grid read as a set --- and also what lets two people
// collapse into the same face when only the backdrop or the facing differs
// between them. Comparing whole images cannot see that: a flipped gold block
// moves enough pixels to hide an identical head. So compare the head region
// only, and against the other portrait mirrored as well as upright, because a
// mirrored twin is still the same person to anyone reading the page.
const cardSources = [
  ...peopleHtml.matchAll(/<img[^>]*class="at-card-image"[^>]*>/g),
].map((match) => {
  const src = match[0].match(/src="([^"]+)"/)?.[1] ?? "";
  return { src, name: src.split("/").pop()?.split(".")[0] ?? src };
});

// Mean absolute greyscale difference per pixel, 0 (identical) to 255. Portraits
// that differ only in hair length score in the low twenties; genuine twins score
// under 15. 25 sits above the first and well under a deliberately distinct pair.
const MIN_FACE_DIFFERENCE = 25;

const faceSample = async (src: string, mirrored: boolean): Promise<Buffer> => {
  const { default: sharp } = await import("sharp");
  const square = await sharp(resolve(`dist${src.replace(/^\/[^/]+/, "")}`))
    .resize(800, 800, { fit: "fill" })
    .png()
    .toBuffer();
  const head = sharp(square).extract({ left: 180, top: 56, width: 440, height: 480 });
  return await (mirrored ? head.flop() : head)
    .resize(64, 64, { fit: "fill" })
    .greyscale()
    .raw()
    .toBuffer();
};

const meanAbsoluteDifference = (a: Buffer, b: Buffer): number => {
  let total = 0;
  for (let i = 0; i < a.length; i++) total += Math.abs(a[i] - b[i]);
  return total / a.length;
};

describe("teaching team portraits", () => {
  it("gives every person a face of their own", async () => {
    expect(cardSources.length, "no portraits on the people page").toBeGreaterThan(1);

    const upright = new Map<string, Buffer>();
    const mirrored = new Map<string, Buffer>();
    for (const { src, name } of cardSources) {
      upright.set(name, await faceSample(src, false));
      mirrored.set(name, await faceSample(src, true));
    }

    for (let i = 0; i < cardSources.length; i++) {
      for (let j = i + 1; j < cardSources.length; j++) {
        const a = cardSources[i].name;
        const b = cardSources[j].name;
        const difference = Math.min(
          meanAbsoluteDifference(upright.get(a)!, upright.get(b)!),
          meanAbsoluteDifference(upright.get(a)!, mirrored.get(b)!),
        );
        expect(
          difference,
          `${a} and ${b} share a portrait (face difference ${difference.toFixed(1)}, need ${MIN_FACE_DIFFERENCE})`,
        ).toBeGreaterThan(MIN_FACE_DIFFERENCE);
      }
    }
  });
});
