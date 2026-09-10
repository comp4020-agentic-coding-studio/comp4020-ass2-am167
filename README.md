# SLOP2418 — Urban Design Studio: Foundations of the Good City

A COMP4020 Assignment 2 course-site prototype: an Astro build on
`astro-theme-slop`, deploying to GitHub Pages. The deployed site is what gets
marked, not this repo.

**Course:** a second-year design studio that treats *Cities: Skylines II* as a
legitimate planning tool. Students keep one district in a continuous save for
twelve weeks, make zoning, transit and budget decisions in it, and defend them
at three juries. Improving fiscal performance, mobility or livability usually
means giving something else up — they are marked on recognising and defending
that trade-off.

**Code / session:** `SLOP2418` · Semester 1 · 2027 (`2027-02-22`–`2027-05-28`)

The design argument, how it was built, and the agent harness are in
[`PROCESS.md`](PROCESS.md), [`PLAN.md`](PLAN.md) and [`CLAUDE.md`](CLAUDE.md)
respectively. The brief and marking environment live on the
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/).

## What's built

| Surface | Contents |
| --- | --- |
| Lectures | Twelve weeks (`src/content/lectures/`), each with a linked deck in `src/decks/` |
| Studios | Twelve paired sessions (`src/content/sessions/`) — students see them as Studios |
| Assessment | Three briefs at 25% / 25% / 50% (`src/content/assessments/`) |
| People | Convenor, three studio tutors, visiting critic (`src/content/people/`) |
| Policies / resources | Studio handbook pages under `src/pages/policies/` and `src/pages/resources/` |
| Spec | Course-coherence, calendar, assessments, lectures, people, policies, page headers, semester timeline — plus the shipped `data-integrity` baseline |

Custom components include the semester timeline on the home page, listing grids,
and the deck reader. Site-wide chrome and illustrated title bands go through
`src/layouts/PageLayout.astro`.

## Quick start

```sh
mise install       # Node and pnpm versions from mise.toml
pnpm install
pnpm dev             # http://localhost:4321/<repo>/
pnpm check           # typecheck + build + spec tests
pnpm check:evidence  # final submission gate
```

The dev server serves under the repo base path, so use
`http://localhost:4321/<repo>/` — bare `http://localhost:4321` is a 404.

`mise` is what tutor support reproduces runtime problems with; any other
manager is fine if it matches `mise.toml`.

## Working in this repo

- Keep `pnpm dev` running while editing; kill servers you start when finished.
- Before pushing, run `pnpm check`. Links, evidence and secrets also run in CI;
  run the links check locally against a fresh `pnpm build` + `pnpm preview`.
- The rendered page is the truth — verify in a browser (`agent-browser`), not
  from a mental model of the markup.
- Treat a red check as authoritative. Never edit
  `spec/data-integrity.test.ts`; fix the implementation when it fails.
- Internal links must be relative to the current page (e.g. `./about/`), never
  root-absolute, except where the theme already rewrites markdown/MDX links.
  Do not use `./` as a self-link on the repo-root page — GitHub Pages serves the
  base path without a trailing slash and that form 404s; use a fragment instead.
- Never publish or deploy unless explicitly asked.

## Spec and coherence

`pnpm check` runs typecheck, the production build and every `spec/*.test.ts`.
The build itself runs axe, internal-link checks (including base-path handling),
dangling content-ref detection, deck compilation and the generated course API.

`spec/course-coherence.test.ts` is the executable course contract: weekly
lecture/studio pairing, assessment dates, and one subject anchor per week.
Change `weeklyAnchors` first when the course idea moves, then make the pages
agree. Do not weaken it to word counts or boilerplate detection.

`pnpm check:evidence` is the ship gate (process citations, required reflection,
and Assignment 2 starter-content / imagery rules). CI adds the secret scan and
deploy.

Mechanical green is necessary backpressure, not proof the course is worth
taking — substantial content drafts still need adversarial review (see
`CLAUDE.md`).

## Platform notes

Still on the Slop University stack: four content collections (`sessions`,
`assessments`, `lectures`, `people`), `src/course-config.ts` as the course
record, `src/site-config.ts` for nav/branding/session labels, and a versioned
`dist/api/` emitted every build for the programs catalogue.

- **Collection keys are addresses.** `sessions/01-site-selection` is the file,
  the page, the JSON node and the `related:` ref. Renaming one means renaming
  all of them. Broken refs fail the build.
- **Session labels** in `src/site-config.ts` control student-facing language
  (`Studio` / `Studios`); the collection key stays `sessions`.
- **Base path** comes from `GITHUB_REPOSITORY` or the `origin` remote via
  `scripts/pages-base.ts`. Hand-written root-absolute `href`s in `.astro`
  files skip that handling and 404 on Pages.
- **Decks** are `.deck.mdx` under `src/decks/`, rendered by
  [astromotion](https://github.com/ANUcybernetics/astromotion). Link them from
  lecture pages; they are not content-collection nodes.
- **Pre-commit** (`.githooks/`) blocks commit-shaped API keys; installed by
  `pnpm install`.

Further process notes live in `notes/log.md`; reflection instructions in
`reflections/README.md`.
