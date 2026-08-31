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

## 2026-08-31 — Teaching team

Fleshed out `/people/`: rewrote the two starter entries as real people and added
three more, so the cast is a convenor, three tutors and a visiting critic.

- **Marisol Quaye** — Course convenor. Land-value capture research, ex-strategic
  planning unit. Weeks 1–3 and the Week 12 capstone review.
- **Idris Fenn** — Studio tutor, mobility. Transport modelling background;
  Weeks 5–6 and the peak-load stress test.
- **Nadia Ilkhom** — Studio tutor, infrastructure. Water engineer; owns Week 7,
  which is the one week with a real deck.
- **Tobias Wren** — Studio tutor, fiscal and public realm. Weeks 8–9.
- **Sunniva Marek** — Visiting critic, external practice. Juries only.

Each tutor owns a named stretch of the semester rather than being
interchangeable staff, so the people page and the twelve-week arc corroborate
each other instead of just coexisting. Bios reference the three metrics and the
weekly deliverable format, which keeps the studio thesis present on a page that
would otherwise be a staff directory.

Every bio uses they/them. Assigning gendered pronouns to invented staff off the
back of invented names is a guess with no upside, and a course site is exactly
the register where the neutral default reads as normal rather than as a
statement.

**Closes the coherence gap flagged in the policies entry.** The policies page
sends students to a "Course Convenor" and warns that the "Visiting Critic" does
not take student email; both roles now exist and say the same thing. The people
index links into `/policies/#where-to-ask-what` so the routing table is one
click away, and the visiting critic's contact line matches the policy verbatim.

Two supporting changes:

- **`roleLabels` moved into `src/site-config.ts`.** `PeopleGrid.astro` and
  `people/[slug].astro` each carried their own copy of the same map, which is
  how a grid and a detail page drift apart. Both now import it, along with
  `roleOrder`. The labels are also now the studio's own words — `guest` renders
  as "Visiting critic", not the theme's "Guest lecturer".
- **`people/index.mdx` gained an intro.** A bare grid does not tell a student
  who to go to for what; two sentences and a link to the routing table do.

TDD again: `spec/people.test.ts` written first, red on two of three. Contracts:
every role the policies page sends students to is actually filled (matched on
the rendered label, which is what a student reads, not the machine role);
every person has a contact line, since the home page promises "how to reach
them"; no person page still carries a starter marker or placeholder prose.

Verified in Chrome at 1920×1080 and 390×844 — grid, a person page, and the
mobile single-column stack. 0 elements outside the viewport at 390.
`pnpm check` green (7 tests).

**Blocked:** `src/content/people/marisol-quaye.avif` and `idris-fenn.avif` are
starter artwork and `pnpm check:evidence` fails on both. The entries no longer
reference them, so they are orphaned files on disk. They need deleting (the
evidence check explicitly allows a deleted file, and an image-free treatment is
what PLAN §5 proposed) or replacing with commissioned portraits. Deletion was
blocked by the permission classifier — raised with the user.

## 2026-08-31 — Portraits

Replaced the starter portraits with five made for this site, one per person.
`pnpm check:evidence` no longer flags any people artwork.

**Tried a text-to-image model first and rejected it.** Pollinations needs no key,
which is why it was the first stop, but its only available model is `sana`, and
across three prompt framings it returned painterly output with gradients, paper
borders, off-palette red lips and dark backgrounds — and it collapsed to
substantially the same face on every seed. Five of those would have been
off-brand *and* would have read as exactly the AI slop the brief penalises.

**Hand-authored SVG instead, rasterised to AVIF** (`scripts/make-portraits.ts`,
committed so the artwork is reproducible rather than a mystery binary). The
brand is three flat colours and a halftone, which vector shapes hit exactly and
a diffusion model does not. Palette sampled off the starter artwork so the new
portraits sit in the same print: paper `#f6eedd`, gold `#c69f57`, ink `#17150f`.

Construction is one template — angular ten-sided head, gold shadow plane down
one half, halftone in the shadow, backdrop block — varied per person by hair
silhouette (cropped / bob / volume / tied / swept), glasses, which way the
shadow falls, and where the backdrop block sits. The point is that the grid
reads as one commissioned set rather than five unrelated images.

Two iterations against the rendered output rather than the source:
1. The nose ran from y=300 down the centre seam and read as a scar across the
   cheek. Moved it below the brow line and onto the shadow side.
2. The "tied" bun polygon collided with the ear. Bun is now a circle drawn
   *behind* the head, and that variant drops the ear.

**Also had to change the person page layout.** The theme's `heroImage` is a wide
full-bleed band with a dark scrim; handed a square portrait it cropped the face
out entirely and left a strip of collar. Portraits now render inline at 220px
beside the details list, which is the size they were drawn for. Flex-wrapped, so
it stacks on mobile.

One YAML trap: the alt text contains a colon ("A two-ink portrait in flat gold
and black on cream: an angular bust…"), which a plain scalar reads as a mapping.
Build failed with "a multiline key may not be an implicit key". Folded block
scalars (`photoAlt: >-`) throughout.

Verified at 1920×1080 and 390×844 — grid and a detail page, both viewports,
0 elements outside the viewport at 390. `pnpm check` green (7 tests).

## Lectures: all twelve panels stood up

Created `src/content/lectures/week-03.md` … `week-12.md` and rewrote the
frontmatter of the two starter entries, so the lectures listing now renders
twelve cards in week order instead of two. Titles and one-line descriptions
come straight from PLAN.md §3 — theory named, then the mechanic it maps onto.

**Panels only, deliberately.** Each body is a one-line placeholder behind a
`STARTER_CONTENT` marker. That keeps `pnpm check:evidence` red until the
lectures are actually written, which is the honest state: the schedule exists,
the content does not. `pnpm check` is green (7 tests, 29 pages) because the
evidence gate is a separate, ship-time check.

Dates are the twelve Mondays from `2027-02-22`, so Week 12 lands `2027-05-10`
— inside the `endDate` of `2027-05-28` that `data-integrity` asserts against.

Teaching assignments follow what each staff page already claims as its remit,
rather than round-robin: Marisol Quaye (convenor) takes 1, 3, 4, 11, 12; Idris
Fenn the mobility weeks 2, 5, 6; Nadia Ilkhom infrastructure and resilience,
7 and 10; Tobias Wren budget and public realm, 8 and 9. Sunniva Marek is a
guest juror whose page says they appear at pin-ups only, so they lecture in no
week.

Moved the `assessments/assignment-1` related edge off Week 2 and onto Week 4,
where PLAN.md actually has that assessment due. Week 2 keeps its session edge.

Two things left as-is and worth naming: the `slides:` deck is still on Week 1
while PLAN.md §3 wants the real deck in Week 7 (moving it means moving
`src/decks/week-01.deck.mdx`, not just the frontmatter), and the prose at the
top of `src/pages/lectures/index.mdx` is still starter copy.

Verified at 1920×1080 and 390×844 in Chrome via device emulation: 12 cards
both times, two columns on desktop, one on mobile, 0 elements outside the
390px viewport.

## Mid-semester break folded into the calendar

Teaching breaks for two weeks after Week 6, so Weeks 7–12 moved back fourteen
days: Week 7 is now `2027-04-19` and Week 12 `2027-05-24`, still inside the
`2027-05-28` `endDate` that `data-integrity` guards.

Added `spec/calendar.test.ts` rather than just editing six dates. The break is
invisible from any single page — it only exists as the relationship between
twelve dates — which is exactly the kind of thing that drifts silently when
sessions and assessments get written against the same weeks later. Three
assertions: every week 1–12 present exactly once, every lecture on a Monday,
and exactly one gap that isn't seven days, positioned after Week 6 and lasting
twenty-one.

Checked it actually bites by putting Week 7 back to `04-05` and rebuilding:
`expected [ 'week 7 → 21 days' ] to deeply equal [ 'week 6 → 21 days' ]` — the
failure names the week the break moved to, not just "a date is wrong". Restored
and green: 10 tests across 4 files.

Calendar recorded in PLAN.md §3 so the sessions and assessments inherit it.

## Studios: all twelve panels, paired to their lectures

Twelve entries in `src/content/sessions/`, one per teaching week, titled and
described from PLAN.md §3's studio column. Bodies are one-line placeholders
behind `STARTER_CONTENT`, same as the lectures — the schedule is real, the
content is not, and `check:evidence` should keep saying so.

**Test first, this time properly.** Extended `spec/calendar.test.ts` with a
pairing assertion before writing any studio, and watched it fail with
`expected [ 1, 2 ] to deeply equal [ 1, 2, 3, … ]` — the two starter sessions
against the twelve weeks the lectures already claim. The assertion is that
each week has both a lecture and a studio *on the same date*, so the two
collections are checked against each other rather than each being internally
consistent on its own. A week that teaches a lecture and never runs the studio
is a week the course claims and does not deliver, and nothing else in the
suite would have caught it.

**Renamed the two starter sessions** (`01-getting-started`, `02-first-review`)
to `01-site-selection` and `02-block-pattern`, because the slug is in the URL
and "getting started" is not what week 1 of this studio does. That meant
repointing the `related:` refs in the week 1 and 2 lectures — `reference()`
validates those at build time, so a stale ref is a build failure rather than a
silent 404, which is the right trade.

**Graph edges declared from the studio side** for weeks 3–12; weeks 1–2 keep
theirs on the lecture, which was already committed. Edges are undirected, so
declaring both ends would duplicate. 14 edges, 32 nodes.

**Sunniva Marek is on weeks 4, 6, 9 and 12 only** — their people page says
their feedback arrives at the jury in exactly those weeks, so the assessed
pin-ups list them alongside the week's tutor and no other studio does. Checked
the week 4 detail page renders both, plus the edge to the week 4 lecture.

Verified at 1920×1080 and 390×844: 12 cards both, 0 elements outside the 390px
viewport. `pnpm check` green — 11 tests, 39 pages.

**Tooling note:** `astro preview stop` reported "No preview server is running"
while a detached `astro preview` was still holding port 4323. Had to find it
with `lsof -nP -iTCP:4323 -sTCP:LISTEN` and kill the pid directly. Worth
checking the port, not the command's word for it.

## 2026-09-01 — Lecture slide plans, all twelve weeks

Wrote `notes/lecture-plans.md`: one detailed plan per lecture, specified so a
future agent can build a deck without re-deriving the course. 191 slides
planned across twelve weeks (14–18 each), Week 7 deepest at 18 since it is the
semester's one real deck.

Each week fixes: the argument in one sentence, 3–4 checkable outcomes, theory
anchors with real citations, a theory→mechanic mapping table, the week's
tradeoff named in two of the three studio metrics, the slide-by-slide content
(actual bullet text, actual table rows, diagrams described tightly enough to
draw in the two-ink palette, speaker notes), the studio hand-off, assessment
hooks, and open questions left to the deck writer.

**Ran four subagents in parallel**, three weeks each, against a shared brief
(`/tmp/slop-plans/_BRIEF.md`) carrying the register rules, the teaching team,
the calendar, the assessments and the output template. Parallelism was worth it
— four × ~90k tokens of drafting in the wall-clock of one — but it costs
coherence, and the reconciliation was real work, not a formality:

- Three agents independently invented a name for the same low-lying south-east
  district: Ombersley Flats (wks 1, 3), Dunnett Flats (wk 7), Brayfoot Flats
  (wks 10, 12). Same referent in all three — Week 7 even says "Dunnett Flats
  was rezoned for growth in Week 3", which is Week 3's Ombersley. Normalised to
  Ombersley Flats, the Week 1 canon-setter. Two escaped the first pass because
  the name straddled an 80-column line break; caught with a multiline `perl
  -0pi`, not `sed`.
- Currency drifted: weeks 7–9 write `₡6,800/month`, everyone else gives bare
  figures. Left the figures alone and recorded `₡` as the convention in the
  canon section, since rewriting numbers risks breaking arithmetic that the
  plans work out on the slide.
- Geography otherwise converged rather than collided, because the brief happened
  to seed "Halstead Reach" and "the Kerrow corridor". Cheap insurance; worth
  seeding proper nouns deliberately next time rather than by accident.

Added a header and a **Shared canon** section on top of the twelve: how to use
the file, the non-negotiable register, the three metrics and where each is read,
the calendar, the deck mechanics astromotion actually supports, and the Kerrow
Basin gazetteer that the twelve weeks now agree on.

**Surfaced, not fixed:** `src/content/assessments/final-project.md` is still the
starter brief — 60%, due 2027-05-28 — while PLAN.md §4 and every plan here
assume the capstone is 40% and due Week 12. Flagged in the canon section; the
content file is what the site renders, so one of the two has to move.

Plans only. No deck built, no lecture body written, `STARTER_CONTENT` markers
all still in place. `pnpm check` green (39 pages, 11 tests).

## Assessment: three briefs, and the metrics thesis made checkable

Checked the published spec before building rather than working from PLAN.md.
This repo is `comp4020-ass2`, and that deliverable's only assessment line is
"assessment that adds up to 100%" — no count is mandated. So three (two plans
plus a large capstone) is a design choice, not a requirement, and PLAN.md §4's
original four became three at 25/25/50.

**Wrote the failing test first.** `spec/assessment.test.ts` asserts the spec
line (weights sum to exactly 100) plus two coherence claims the build cannot
see. The metrics one failed as intended against the starter content:
`assessments/assignment-1 is not marked on fiscal performance — its criteria
are: response to the brief, quality of execution`. That is the assertion worth
having: the site claims all semester that design trades livability against
fiscal and mobility performance, and *says students are marked on exactly
those three*. Without the test that claim is decoration — the schema only
checks criteria sum to 100, not what they are named. Third test: no assessment
falls due in a week that runs no studio, because a pin-up needs a room.

**Dropping the Week 6 Mobility Plan had consequences elsewhere**, which is the
real cost of a content change in a linked site. The Week 6 studio still said
"Assessed pin-up: the mobility work of the last two weeks", and Sunniva
Marek's people page still promised jury feedback in "Weeks 4, 6, 9 and 12".
Both fixed. Nothing mechanical would have caught either — they are prose
claims about a fact that moved.

Slugs are the deliverables (`01-neighbourhood-unit-plan`, …), not
`assignment-1`/`final-project`, so the URL says what the thing is. Repointed
the Week 4 lecture's ref. Assessments declare their own edge to the studio
they pin up at; 16 edges now.

Also replaced the assessment index's body copy, which was still the template's
instruction to its own reader ("Weights should sum to 100.") rendering as
visible page text.

Due times: `+11:00` for the March brief and `+10:00` for the May ones — DST
ends 4 April 2027, and the starter's own timestamps used that convention.

Verified at 1920×1080 and 390×844: 3 cards, 0 elements outside the viewport.
Checked a brief's detail page at 390 too, since the marking table is the thing
most likely to overflow there — right edge 372 of 390, criteria intact.
`pnpm check` green: 14 tests, 40 pages.
