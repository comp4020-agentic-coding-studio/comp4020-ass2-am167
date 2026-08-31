import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

// The policies page is the one place course-wide rules live, so an assessment
// brief, a studio session or a lecture can point at a rule instead of restating
// it. These tests guard that promise: the page is real, it covers the areas the
// rest of the site defers to it on, and every deep link into it lands somewhere.

const distDir = resolve("dist");
const policiesHtml = readFileSync(join(distDir, "policies/index.html"), "utf8");

const mainOf = (html: string): string =>
  html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "";

const textOf = (html: string): string =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

const headingsOf = (html: string): { id: string; text: string }[] =>
  [...html.matchAll(/<(h[1-6])\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/\1>/g)].map((match) => ({
    id: match[2],
    text: textOf(match[3]),
  }));

const htmlFiles = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === "_astro" ? [] : htmlFiles(path);
    return entry.isFile() && entry.name.endsWith(".html") ? [path] : [];
  });

const policiesMain = mainOf(policiesHtml);
const policiesText = textOf(policiesMain);
const policiesHeadings = headingsOf(policiesMain);

// Each area the site is entitled to defer to this page on, matched against
// heading text so the wording can change without the contract moving.
const requiredAreas: { area: string; pattern: RegExp }[] = [
  { area: "late work", pattern: /\blate\b|\bdeadline|\bpin-?up\b/i },
  { area: "extensions", pattern: /\bextension/i },
  { area: "academic integrity and authorship", pattern: /\bintegrity\b|\bauthorship\b|\bplagiar/i },
  { area: "use of generative tools", pattern: /\bgenerative\b|\bAI\b|\bassistant/i },
  { area: "getting help", pattern: /\bhelp\b|\bsupport\b|\bask\b|\badjust/i },
];

describe("policies page", () => {
  it("ships real content rather than the starter placeholder", () => {
    expect(policiesHtml).not.toContain("STARTER_CONTENT");
    expect(policiesText).not.toMatch(/Replace this page/i);
    expect(policiesText.length).toBeGreaterThan(2000);
  });

  it("covers every area the rest of the site can defer to it on", () => {
    const headingText = policiesHeadings.map((heading) => heading.text).join(" | ");
    for (const { area, pattern } of requiredAreas) {
      expect(pattern.test(headingText), `no heading covers ${area} — headings: ${headingText}`).toBe(
        true,
      );
    }
  });

  it("resolves every deep link the site makes into a policies anchor", () => {
    const ids = new Set(policiesHeadings.map((heading) => heading.id));
    const links = htmlFiles(distDir).flatMap((file) => {
      const source = readFileSync(file, "utf8");
      return [...source.matchAll(/href="[^"]*\/policies\/#([^"]+)"/g)].map((match) => ({
        file,
        anchor: match[1],
      }));
    });

    expect(links.length, "no page deep-links into the policies page").toBeGreaterThan(0);
    for (const { file, anchor } of links) {
      expect(ids.has(anchor), `${file} links to #${anchor}, which no policies heading defines`).toBe(
        true,
      );
    }
  });
});
