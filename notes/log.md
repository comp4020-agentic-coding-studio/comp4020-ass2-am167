## 2026-08-31 — Policies page

Wrote the first real content page after the home page: `src/pages/policies/index.mdx`,
replacing the starter placeholder.

Nine sections, all in the studio register from PLAN.md §2:
pin-up deadline, extensions, authorship/integrity, standard map and simulation
settings, save-file discipline, generative tools, conduct at crit, equipment and
adjustments, and a "where to ask what" routing table.

Design decisions worth recording:

- **The late-work rule is derived from the format, not bolted on.** A pin-up has
  a fixed time because a jury is assembled for one afternoon, so the page splits
  the deadline into two clocks (artefact vs. defence) and says what an extension
  can and cannot move. This gives the policy a reason a student can check,
  rather than an arbitrary penalty schedule.
- **Academic integrity is written against the studio's actual problem.** Crit is
  collaborative by design, so "your work must be uninfluenced by others" is
  incoherent here. The section draws the line at authorship instead: one save
  file per student, advice taken must be named in the memo, imports declared.
- **"The standard map and simulation settings" carries the course thesis.** The
  three named metrics (fiscal performance / mobility performance / livability)
  only compare if everyone builds on the same site — so the no-mods rule is a
  consequence of the marking scheme, not IT policy.

TDD, per CLAUDE.md: wrote `spec/policies.test.ts` first and confirmed all three
tests red before writing content. Contracts asserted:
1. the page is real (no `STARTER_CONTENT`, not the placeholder prose, >2000 chars
   of body text);
2. it has a heading covering every area the rest of the site can defer to it on
   (late work, extensions, integrity, generative tools, help) — matched by regex
   over heading text so wording can move without the contract moving;
3. every `/policies/#anchor` deep link anywhere in `dist/` resolves to a heading
   id that exists. Non-vacuous already: the page cross-links its own sections.

Two fixes found by looking rather than assuming:

- The frontmatter `description` isn't markdown-processed, so `---` rendered
  literally as "studio --- pin-up" in the lead paragraph. Swapped for a real em
  dash (matching `final-project.md`'s frontmatter).
- Root-absolute links in MDX (`/assessments/`) **are** base-prefixed by the
  theme — confirmed against the built HTML, same as the starter `404.md` does.
  So the codebase idiom is fine here; no relative-path rewrite needed.

Verified in Chrome at 1920×1080 and 390×844 (`pnpm preview` on port 4323,
title checked before screenshotting). No horizontal overflow at 390: every
`h1/h2/p/li/table/td/th/code/a` in `main` measured inside the viewport bounds
(0 violations), and the routing table sits in the theme's `.at-table-wrap` at
354px with no clipping. `pnpm check` green.

Open coherence dependency: the page names a **Course Convenor** and a **Visiting
Critic**, and links to `/people/`, which still holds starter people. The people
page needs rewriting to match before this is coherent to a marker.

(Initial draft said "Studio Director" throughout; changed to "Course Convenor"
on request mid-task.)
