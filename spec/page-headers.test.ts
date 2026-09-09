import { readFileSync, readdirSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { describe, expect, it } from "vitest";

// Every page on the site opens the same way: a full-bleed illustrated band
// carrying the page's one and only h1. That is the header pattern a reader
// meets on the home page, so a lecture, a studio, a brief, a policy page and
// the 404 owe them the same thing --- an index page that renders no heading at
// all, or a detail page that renders two competing h1s, is a page a reader
// arrives at without being told where they are.
//
// Slide decks are a different artefact with their own chrome, and /api is
// data, so both stay out of scope.

const distDir = resolve("dist");

const pageFiles = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      return ["_astro", "pagefind", "decks", "api"].includes(entry.name) ? [] : pageFiles(path);
    }
    return entry.isFile() && entry.name.endsWith(".html") ? [path] : [];
  });

const pages = pageFiles(distDir)
  .map((path) => ({ route: relative(distDir, path), html: readFileSync(path, "utf8") }))
  .sort((a, b) => a.route.localeCompare(b.route));

const textOf = (html: string): string =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

const heroOf = (html: string): string | undefined =>
  html.match(/<section[^>]*\bclass="[^"]*\bat-hero\b[^"]*"[\s\S]*?<\/section>/)?.[0];

describe("page headers", () => {
  it("finds pages to check", () => {
    expect(pages.length, "no built pages found — run the build first").toBeGreaterThan(20);
  });

  it("gives every page exactly one h1", () => {
    for (const { route, html } of pages) {
      const count = (html.match(/<h1\b/g) ?? []).length;
      expect(count, `${route} has ${count} h1 elements`).toBe(1);
    }
  });

  it("puts that h1 in an illustrated hero band", () => {
    for (const { route, html } of pages) {
      const hero = heroOf(html);
      expect(hero, `${route} has no hero band above its content`).toBeDefined();
      expect(hero, `${route}'s hero band carries no h1`).toMatch(/<h1\b/);

      const title = textOf(hero!.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "");
      expect(title.length, `${route}'s hero band has an empty title`).toBeGreaterThan(0);
    }
  });

  it("describes the illustration in every hero band", () => {
    for (const { route, html } of pages) {
      const hero = heroOf(html)!;
      const tag = hero.match(/<img\b[^>]*>/i)?.[0];
      expect(tag, `${route}'s hero band has no image`).toBeDefined();

      const alt = tag!.match(/\balt="([^"]*)"/i)?.[1] ?? "";
      expect(
        alt.trim().length,
        `${route}'s hero image alt is too thin to describe it: "${alt}"`,
      ).toBeGreaterThan(20);
    }
  });

  // A band per page is the pattern; a band that is the same picture on every
  // page is wallpaper. Each top-level section gets its own illustration, so a
  // reader can tell from the header alone whether they are in the lectures,
  // the studios, the briefs or the policies.
  it("draws a different illustration for each section of the site", () => {
    const sectionOf = (route: string): string => {
      const [first] = route.split("/");
      return first.endsWith(".html") ? first.replace(/\.html$/, "") : first;
    };
    const bySection = new Map<string, Set<string>>();
    for (const { route, html } of pages) {
      const src = heroOf(html)!.match(/<img\b[^>]*\bsrc="([^"]*)"/i)?.[1] ?? "";
      const section = sectionOf(route);
      if (!bySection.has(section)) bySection.set(section, new Set());
      bySection.get(section)!.add(src);
    }
    const sections = [...bySection.keys()];
    expect(sections.length, `only found sections: ${sections.join(", ")}`).toBeGreaterThan(4);

    const shared = [...bySection.entries()].flatMap(([section, srcs]) =>
      [...srcs].map((src) => ({ section, src })),
    );
    const owners = new Map<string, string[]>();
    for (const { section, src } of shared) {
      owners.set(src, [...(owners.get(src) ?? []), section]);
    }
    for (const [src, sectionList] of owners) {
      expect(
        new Set(sectionList).size,
        `${src} is the header illustration for more than one section: ${sectionList.join(", ")}`,
      ).toBe(1);
    }
  });
});
