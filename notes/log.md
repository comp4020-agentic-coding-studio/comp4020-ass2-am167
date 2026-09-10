## 2026-09-05 — Fix mobile assessment-label overflow in PR 3

Adversarial review of PR 3 (semester timeline restyle) found that at 390×844
the assessment labels ("A1 · 25%" etc.) were wider than their week column,
visually bisected by the dashed census/drop-date rules and bleeding into
neighbouring columns. The PR's own last-child right-align hack only redirected
the overflow rather than containing it, and was fragile besides (relied on the
final DOM child always being a week cell, not a marker).

Fixed in `SemesterTimeline.astro`: gave `.st-assessment-slot` explicit
`inset-inline: 0` (was relying on implicit flex abspos-centering) so it's
pinned to its own column's width, then let `.st-assessment-label` wrap
(`flex-wrap`, `white-space: normal` on mobile) instead of forcing `nowrap`.
Removed the `:last-child` special case entirely — no longer needed once
labels are contained to their own column. Verified via rendered Chrome
screenshots + `getBoundingClientRect()` at both 1920×1080 and 390×844: labels
now sit fully inside their own column and no longer cross the dashed marker
lines. `pnpm check` stayed green throughout.

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

## Outstanding state written down (PLAN.md §11)

Ran `pnpm check:evidence` to enumerate what is unfinished rather than listing
it from memory, and wrote the result into PLAN.md as a new §11, split by
whether an item blocks the published spec or is only a plan item. Also fixed
PLAN's stale header ("Nothing in this plan has been implemented yet") and
resolved §10's open questions against what actually got built, leaving only
the artwork one open.

The gate's output turned up two things I would not have listed unprompted:
`PROCESS.md` cites two commit hashes (`a1b2c3d`, `e4f5a6b`) that do not exist
in this repo, and `src/decks/week-01.deck.mdx` is still the starter deck —
which is spec-blocking, not merely untidy, since the spec requires one real
deck linked from a lecture page. The link is real and the deck behind it is
not, which is exactly the kind of gap a green `pnpm check` will never show.

Also confirmed `src/assets/images/` is gone entirely: the hero and social card
were deleted rather than replaced. The evidence check accepts a deleted starter
image, so this passes — but it means the site currently ships with no hero and
no social card, which should be a decision rather than a leftover.

## Studio session plans written (notes/studio-plans.md)

Twelve detailed studio plans, one per session, so the session bodies can be
written without re-deriving the course. 4,816 lines. Same job for the studios
that `notes/lecture-plans.md` does for the lectures.

Fanned out to four subagents, three weeks each, grouped by arc and tutor
(1–3 Quaye; 4–6 Fenn + first pin-up; 7–9 Ilkhom/Wren + second pin-up; 10–12
resilience/critique/jury). Each wrote its own part file; merged and deduped
here.

The thing that made parallel work possible was writing the **metric spine**
first, by hand, before spawning anything. The twelve studios are one save file
read twelve times — Week 4 upzones the land values Week 3 produced, Week 8's
cutback bites Week 7's networks, and Week 11's whole content is the
land-value curve since Week 1. Four agents inventing readings independently
would have guaranteed Week 11 contradicting Weeks 1–10. So the preamble fixes
one row per week — population, fiscal balance, mobility, livability, what
moved — and every agent wrote prose around fixed numbers. Verified afterwards:
every week cites its own spine value and the previous week's, and Week 11
benchmarks against Week 9 rather than Week 10, which is the "an event is not a
trend" rule holding without being policed.

The arc the spine encodes: siting on Halstead Reach in Week 1 buys fiscal
performance, and Weeks 2–10 pay for it. Each week has one metric moving the
wrong way. Week 11 is the deliberate exception where all three read as
improved — which is the week's subject, because the model has no field for
what that cost.

Each week's plan carries a ready-to-paste `spec:` block (3–5 lines; all twelve
landed on 5). That closes a PLAN.md §11 item — no studio or brief declares a
`spec:`, and `SpecList` renders nothing without one, so the gap was invisible
on the page.

### Two things the merge caught

**A duplicate name for the same ground.** Week 3's agent coined "Ombersley
Works" for the industry on Ombersley Flats; `notes/lecture-plans.md` already
calls it the **Pellow industrial cells** in five places. Two names for the
ground that causes the Week 7 failure and sits in the Week 10 flood envelope
would have desynced the deck from the studio pages. Resolved to the lecture
doc's name — 13 replacements — and added to the canon table so it stays
resolved. Capping each agent at three coined proper nouns and requiring a
"New canon introduced" section is what made this findable at all; without it
the collision would have surfaced when someone wrote Week 10's page.

**`notes/lecture-plans.md` is stale on assessments.** It predates the change
from four assessments (15/20/25/40, with a Mobility Plan in Week 6) to three
(25/25/50), and its "one discrepancy to resolve" note still points at
`src/content/assessments/final-project.md`, which does not exist. The stale
numbers appear in its calendar table and in every per-week *Assessment hooks*
section. Replaced that note with a correction banner giving the real split and
saying plainly that the numbers below it are wrong. Did not rewrite the
per-week sections — the banner is cheaper and the content files remain
authoritative.

Also added a canon index to the preamble listing every name the twelve plans
coin, so a future writer reuses a name instead of inventing a synonym.

`pnpm check` green (14 tests, 40 pages) — nothing in `src/` changed; this is
planning material only.

## Cohort-size continuity audit on the three resumed weeks

Weeks 6, 9 and 12 were written by agents that had been killed by an API error
and resumed from a compressed recap, so I went back to check they were not
weaker than the nine written in one pass.

On the proxy measures they are not: 6 and 9 are the two longest sections in the
doc, 12 is mid-pack, and their run sheets are among the best in it. My first
read — that they were theory-light — was wrong: weeks 8, 10 and 11 were written
without interruption and cite no theorists either. Session plans in this doc are
operational; theory lives in `notes/lecture-plans.md`.

The real damage was continuity, and one fact in particular. **Week 4 fixes the
cohort at sixteen** — two rounds of eight, and a visiting critic who "addresses
the wall as one wall rather than as sixteen plans" — and my recap never
mentioned it. Both resumed jury weeks silently halve the cohort: Week 9's jury
walk fits eight plans, Week 12 holds eight twenty-minute defences. Week 12's
open questions even asserted that the design lab's fifteen machines were "the
only cohort bound anywhere in the site", which Week 4 contradicts outright.

Worth recording that this is not purely a resume artefact. Week 8 was written
without interruption and gives 25 minutes for "each machine in turn for three
minutes", which is eight machines, not sixteen. Parallel authoring made the
cohort a fact nobody owned.

Fixed: Week 6 repaired in full (415 → 471 lines, arithmetic now closes for
sixteen, spine readings unchanged). Week 8's desk crit round rewritten to draw
eight machines and pair the rest.

Not fixed, and flagged in place: Weeks 9 and 12. Both now carry an "UNRESOLVED,
AND IT BLOCKS THE PAGE" bullet at the head of their open questions, stating the
defect, the arithmetic, and the options. Week 12's is a format decision, not a
tweak — sixteen twenty-minute defences need 160 minutes the block does not
have — so the bullet costs the four realistic ways out rather than picking one.
Week 9's points at Week 4's two-rounds-of-eight shape as the likely answer.

The split-and-reassemble method is worth keeping: the doc was split to one file
per week, the round-trip verified byte-identical before any agent touched it,
and reassembly was mechanical. Three agents could then edit without racing.

`pnpm check` green (14 tests, 40 pages).

## Weeks 9 and 12 resolved; week 6's finished repair merged

Both jury weeks now process the cohort of sixteen.

**Week 9** takes Week 4's shape — two rounds of eight, either side of the
recess — with the walk clock cut from six minutes to four. Sixteen at six is
ninety-six minutes of walking, which would have cost either the three pulled
plans or Marek's summing-up. Four across two rounds is sixty-four and fits
inside the 14:00–15:45 the rest of the section already anchors on: the hang
still closes at 13:25, the jury still sits at 14:00, the wall still comes down
at 15:45. The three keep their round at six minutes each. What four minutes
will not carry is a plan that has to be explained before it can be defended,
which is arguably the point, but the residual squeeze — ninety seconds for the
student's claim against Week 4's two minutes — is left as the open question.

**Week 12** could not be fixed by arithmetic. Sixteen twenty-minute defences
need 320 minutes against a block of 180, and twenty minutes is the slot the
studio has used since Week 4 — the capstone is not the week to shorten it. So
the final jury splits into two parallel rooms, eight under Quaye in Studio
2.14 and eight under Marek in 2.16, opening together and closing together.

The cost is real and the section states it rather than hiding it: no single
juror watches all sixteen defences live. Three things carry the weight — both
chairs read all sixteen memos before the draw, since they were lodged at 12:00;
the chairs swap rooms for the last two slots of each set, so every student is
seen by both; and the close is joint. The alternatives are costed in the open
questions, including the one that was cleanest and rejected — an extended or
second session — because it moves the calendar and `spec/calendar.test.ts`
asserts that shape.

**Week 6's agent finished after I had already merged its interim state**, and
its final pass caught a continuity defect I had shipped without: Week 6 let
each student choose whether their `w06` save held the widened corridor, but
Weeks 7, 8 and 11 all read against a widened one — Week 7 attributes 11.2→10.9
to the Wickstead widening bedding in, and Week 11 has the whole cohort write an
objection to it. The branch is now inverted: everybody widens, and
`<student ID>-w06-pre` holds the un-widened counterfactual. It also rebuilt the
argument round as four groups of four, made the instrument menu written rather
than spoken so sixteen choices fit fifteen minutes, and wrote the across-break
protocol that Week 7's "what students arrive with" had been assuming without
Week 6 ever setting it up.

That is the second time the two-agent split produced a fact nobody owned. The
first was the cohort; this one was the state of the save. Both were invisible
to every mechanical check and only showed up on a cross-week read.

`pnpm check` green (14 tests, 40 pages).

## 2026-09-01 — Adversarial review of all lecture plans

Ran three fresh Luna reviews across Weeks 1–4, 5–8 and 9–12, then checked the
findings against the full plan, the course canon and current official Cities:
Skylines II documentation. Review only: no lecture body, studio page, brief,
policy, people entry or deck was built or edited.

Verdict: the twelve-week theory arc is promising, but the plans are not safe to
produce. Exact datasets have no versioned reference save; direct readouts,
derived measures and worked hypotheticals are repeatedly conflated; Week 7's
capacity-limited water trunk conflicts with the documented no-capacity pipe
model; and Week 10's flood scenario is not a documented vanilla disaster.
Week 11's model-limits argument is the strongest plan and also exposes the
problem in the other eleven: their precision exceeds their evidence.

Recorded the full findings and release gate in
`notes/lecture-adversarial-review.md`. Revised only
`notes/lecture-plans.md`: marked it not approved for production, added an
evidence-labelling rule, corrected 25/25/50 assessment data and Monday
deadlines, removed the deleted Mobility Plan from Weeks 5–6, and corrected the
Week 7 deck status. The unresolved mechanics remain visible rather than being
replaced with more invented numbers; they require a pinned game version and a
reproducible save or a redesigned teaching premise.

`pnpm check` green (14 tests, 40 pages; zero errors, warnings or hints).

## 2026-09-01 — Drop subagents from the harness

Removed the Parallel implementation section from `CLAUDE.md` (and the matching
`AGENTS.md` copy). Subagents were stalling, so the harness now says to avoid
spawning them unless we're doing adversarial review. Independent pieces get
done in-session; the adversarial-review pass still fans out to fresh reviewer
agents.

- Added `spec/course-coherence.test.ts`: the built course graph now checks
  lecture/studio reciprocity, assessment-to-studio dates, dangling references,
  and an explicit weekly subject anchor. Added an adversarial prospective-
  student review protocol to `CLAUDE.md` because enrolment appeal needs human
  judgement, not a synthetic score.

## 2026-09-02 — Lecture-review corrections: evidence and canon

Turned the adversarial review's methodological finding into the lecture plan's
default rule: bare UI fields are direct evidence, formulas and protocols are
derived evidence, and every fixed scenario value remains a worked hypothetical
until a pinned-build evidence pack identifies its save, state, run and source.
Added a week-by-week place/use register, fixed the Kerrow corridor north–south,
made Ludworth Bench the named shelf on Verrall Ridge, kept the Pellow cells
industrial, settled Week 5 on a six-stop bus with four vehicles, and replaced
the unsupported Week 10 flood premise with a documented forest-fire load case.

## 2026-09-02 — Adversarial review of all studio plans

Ran three fresh adversarial reviews across Weeks 1–4, 5–8 and 9–12, then
collated their factual, pedagogical, timing, assessment and continuity findings
in `notes/studio-adversarial-review.md`. Review only: no studio plan, session
body, assessment brief or policy was revised. The plans remain not approved for
production pending an evidence pack, a coherent save/source chain, authoritative
assessment briefs and structural repairs to Weeks 2, 4, 7–8, 10 and 12.

## 2026-09-02 — Restrict subagents to cheap models

Updated `CLAUDE.md` so the adversarial-review exception may spawn only Luna in
Codex or Sonnet in Claude Code. The restriction applies only to subagents.

## 2026-09-02 — Studio-review corrections into plans and briefs

Applied `notes/studio-adversarial-review.md`. Review found: missing evidence
pack; weekly bodies ignoring their own evidence labels; studio sessions
inventing A1–A3 requirements; contradictory personal/reference save chain;
jury/lab rules disagreed with policies (15 machines vs 16 live saves; 13:00 vs
14:00; 6/4/15/20 minute clocks); Weeks 2, 4, 7–8, 10 and 12 structurally
unsafe; Week 10 flood not a vanilla mechanic; Week 7 boil-notice fiction;
authorship disappearing mid-semester; formulaic crit.

Changed: wrote A1–A3 briefs as sole submission authority; added a week-by-week
save/source matrix and standing jury/lab operations to `notes/studio-plans.md`;
Week 2 uses issued populated 80/160 checkpoints and path-count; Week 3 intake
upstream, Scheme B a counterfactual, separate pollution overlays; Weeks 4/9/12
are jury-only with production before the deadline; Week 7 production/treatment
checkpoints, no boil notice, neither facility forced onto the personal save;
Week 8 bus arithmetic 24÷3=8 min and ₡1,200/bus; Week 9 money bridge and
associated plaza/tree points; Week 10 rewritten as staged forest-fire
checkpoints on Verrall Ridge/Thackray Cut; Week 11 ten saves plus pre-extracted
series; Week 12 roster hang, Friday memo pre-read, 15-minute slots, no chair
swap, named panel, separate mode-share denominators. Policies now name the
sixteenth workstation (tutor station), 21:00 unassessed upload, brief-override
clocks, and Week 9 chaired by the tutor of record. Session bodies remain
placeholders; the evidence pack itself is still not in the repo.

## 2026-09-02 — Studio-review leftovers: Week 11 finish and Week 12 redesign

Review still blocking: missing evidence pack; leftover “eleven weekly saves”;
Week 11 extracting two series in 35 minutes; causal “move that produced it”;
Week 12 hang-before-draw, noon-memo unread by 12:50, chair-swap as moderation,
invented artefact list, 20-minute/14:00 clocks, additive 48% non-car share.

Changed: Week 11 plotting uses the pre-extracted pack throughout, personal
saves as recovery, Farrant Row from `kerrow-ref-w04` / `-w04`, association not
attribution, same 0–100 scale as the lecture. Week 12 body now matches the A3
brief: roster hang then draw, Friday memo pre-read, 13:00 / 15 min in two rooms
with a 14:00 pause, Quaye/Marek/Fenn/Ilkhom/Wren booked, no chair swap, metric
card permitted, spatial evidence required, separate mode-share denominators,
reserve/link as a worksheet forecast, fourth question on `d3` vs `recovered`.
Lecture Week 9/12 clocks and Marek’s bio aligned to the briefs. Evidence pack
still missing (expected). Session pages still STARTER_CONTENT.

## 2026-09-03 — Lecture pages expanded from the reviewed plans

Replaced all twelve lecture placeholders with complete teaching pages drawn
from the revised lecture plans: argument, learning outcomes, theory anchors,
simulation mapping, weekly decision, studio hand-off and assessment connection.
Every page now links its matching Week 01–12 deck route and states the standing
direct-readout / derived-measure / worked-hypothetical evidence rule beside the
mechanic mapping, so fixed scenario values cannot silently read as game output.

Added a focused lecture-delivery contract first and confirmed it red against
the starter state. It requires twelve substantial lecture pages, twelve linked
and built decks, and the evidence vocabulary in every deck.

## 2026-09-03 — Twelve-deck lecture system

Built every planned lecture as a deck: 194 slides across Weeks 1–12, including
speaker notes. Replaced the plans' diagram-writing instructions with 24 shared
inline-vector schematics for the Kerrow Basin, street networks, catchments,
transit, utility cascades, public realm and land-value history. A single
component now carries the place names and drawing language across the semester.

The deck theme is a Kerrow Basin drawing board: cream sheet, black built fabric
and gold site/flow information, with Public Sans for instruction and Roboto
Mono for evidence labels. Impact, quote and tradeoff slides vary the surface
without leaving the two-ink register. Dense late-semester tables use a compact
handbook setting; long reading lists were separated from the teaching claim.

Mechanical browser QA covered all 194 slides at 1920×1080 and 390×844 by
measuring every visible child against its slide's clipping box. Initial
overflows in Weeks 4, 10, 11 and 12 were corrected; the repeat audit found zero.
Lecture pages for Weeks 1, 7 and 12 were also checked at both viewports with no
horizontal overflow. No adversarial content review was run, as this pass is the
production pass and the requested review comes later.

## 2026-09-03 — Studio pages, Weeks 1–4

Replaced the first four studio placeholders from the reviewed production plans.
The pages now establish the Kerrow baseline and evidence labels, commit the
80/160 m block test, compare the separated and adjacent zoning branches, and
run Assessment 1 as a jury rather than an afternoon build. Added the plans'
exact `spec:` contracts and the missing Week 1–2 lecture graph edges.

## 2026-09-03 — Studio pages, Weeks 5–8

Built the transit charrette, induced-demand stress test, utilities clinic and
cutback studio from their production plans. Preserved the straight six-stop bus,
the 11.2/8.9/10.7 checkpoint sequence, the production-versus-treatment premise
without unsupported hydraulic claims, and the corridor budget ritual with its
exact spoken form. Reference rows and worksheet allocations are labelled at the
point of use rather than presented as native UI or universal student results.

## 2026-09-03 — Studio pages, Weeks 9–12

Completed the two assessed-jury pages and the fire, model-limits and final-jury
sequence. The Week 9 wall now exposes the cost-per-associated-point arithmetic;
Week 10 uses staged forest-fire checkpoints and the event-versus-trend rule;
Week 11 plots the pre-extracted 0–100 series and drafts the omissions appendix;
Week 12 gives the two-room 13:00/15-minute jury protocol without duplicating the
capstone brief. All four pages carry their reviewed `spec:` contracts.

## 2026-09-03 — Studio-page mechanical and viewport verification

Confirmed all twelve studio routes render with their intended titles, full
bodies and five or six spec lines. `astro check` is pristine, and the six
established course suites outside the in-progress lecture-deck contract pass
19/19. Checked every studio route at 1920×1080 and 390×844 in the production
preview: exact viewports, no horizontal overflow or clipped descendants, and
clean console/network state on the final mobile jury page. The full `pnpm
check` remains blocked by the separate lecture work: the new lecture contract
expects twelve deck routes, while the current build produces none.

## 2026-09-03 — Studio section shell cleanup

Removed the template-authoring instructions from the public studio index and
replaced them with the course's continuous-save premise. Reworded the shared
spec preamble so it accurately covers preparation, recorded evidence and jury
defence rather than describing every line as something brought to the room.

## 2026-09-03 — Adversarial review of the twelve studio pages

Ran a fresh, context-isolated adversarial review of all twelve studio session
pages (not the planning notes) against the flagged handoff issues plus an
independent pass. Confirmed and fixed the three seeded problems: Week 2 asked
for an 08:00 traffic-volume overlay and close-one-link volume readings on a
district with no zoned population, which cannot produce an honest volume
reading; both spec lines and the "what to bring" section now ask for the
path-count/frontage evidence the plan actually supports. Week 4's spec had
students arrive on `-w03` while the body told them to leave with (and already
have) `-w04`, with no in-room step that would produce it; the spec now matches
the plan's premise that the upzoning and clinic branches are pre-deadline
homework, arriving on `-w04`. Weeks 11 and 12 stated the land-value curve,
four-block uplift, jury land-value figures and the ₡186,000 reserve as flat
fact with no reference-scenario qualifier, unlike every other week; added the
same hedge used since Week 2.

The reviewer's independent pass found nine further problems, all fixed:
Weeks 11 and 12 both cited a "Week 4 Farrant Row household mix," but Week 4
never established Farrant Row — it upzoned Pelling Cross; Farrant Row is a
Week 7 utility site. Both references now point at Pelling Cross. Week 12's
jury guarantees a question about a ₡186,000 fiscal reserve and a proposed
"Kerrow cross-town link," neither mentioned anywhere in Weeks 1–11; added a
seed paragraph to Week 8 introducing both, so the capstone question isn't the
first time either concept appears. Weeks 9 and 12 were missing the save-chain
instruction naming which save a student arrives with (`w08` and `w11`
respectively) — added explicit "open this save" lines to both. Week 10 cited
"Week 9's 11.1-minute trend," a figure Week 9's page never stated; added the
travel-time reading to Week 9's take-away list. Tightened the Week 7→8
utility-increment wording so "protecting" the increments reads unambiguously
as a budget allocation rather than implying they were already built. Week 6
cited peak/off-peak travel times without naming the off-peak clock time,
breaking the Week 1 convention that every reading names its observation
window; both times are now named (08:00 / 14:00). Week 7's evidence-label list
had drifted from Week 1's four-term taxonomy ("overlay" instead of "manual
observation"); reverted to the standing wording. `pnpm check` stayed pristine
throughout (0 errors, 0 warnings, 21/21 spec tests).

## 2026-09-03 — Adversarial review of the twelve lecture decks

Ran a fresh, context-isolated adversarial review of the **lecture decks**
(`src/decks/week-*.deck.mdx`, ~194 slides), not the lecture reference pages,
against a handoff list of seeded and suspected problems plus an independent
pass. Confirmed and fixed:

- **Week 7 arithmetic/pipe-pressure.** A worked hypothetical implied the
  district's water trunk was capacity-limited in a way that conflicts with
  the documented no-capacity pipe model; reworded to the production-vs-
  treatment premise the studio pages already carry, with no invented
  hydraulic ceiling.
- **Week 10 flood-vs-fire regression.** A leftover flood-scenario slide had
  crept back into the deck after the studio-plan rewrite to a forest-fire
  load case (Verrall Ridge / Thackray Cut); replaced to match.
- **Week 5–6 tram-vs-bus canon drift.** Slides still described a tram where
  the settled canon (and the studio pages) run a six-stop bus with four
  vehicles; corrected across both decks.
- **Week 12 fabricated "Ondrey escarpment."** No such place exists in the
  Kerrow Basin gazetteer; replaced with Ludworth Bench, the real named shelf
  on Verrall Ridge established in the lecture-review pass.
- **Evidence-labelling gaps.** Added the standing direct-readout / derived-
  measure / worked-hypothetical labels to slides in Weeks 6, 7 and 8 that
  stated striking numeric outcomes without one.
- **Source quotations.** Verified every direct quotation attributed to a
  named theorist against the actual text; none were fabricated, but citation
  details were tightened where loose.
- **Dense/illegible tables.** Weeks 9, 10 and 11 carried tables too dense for
  a projected slide; reset to the deck's compact handbook table style.
- **Lecture-page vs. deck duplication.** Trimmed sections repeated near-
  verbatim between a week's `.md` reference page and its `.deck.mdx`, so the
  deck teaches and the page is the leave-behind, not two copies of one text.
- **Diagram overlap bugs in `CourseDiagram.astro`** (task #12, mechanical,
  found by reading the SVG source's coordinates against each label's
  position/x-span, not by screenshot): `utility-network` label collision;
  `cascade-sequence` box text overflowing its 185×80 box at 24px (dropped to
  15px for the eight `.tiny` labels); `basin`'s "Thackray Cut" label sitting
  on top of the heavy rail line it was meant to sit beside (repositioned).
  Also spot-checked `pollution`, `braess`, `capacity-curve`, `cascade-ring`,
  `amenity-radius`, `radburn`, `tuckwell` and others for the same class of
  bug by coordinate arithmetic; no further overlaps found.

### Tooling finding, worth keeping: `agent-browser` cannot verify SVG `<text>` inside a reveal.js slide

While chasing what first looked like a `radburn`-diagram text bug, established
that `agent-browser` screenshots do **not** reliably render SVG `<text>`
elements inside `CourseDiagram.astro`'s diagrams once reveal.js's slide-scale
CSS transform is applied — while `<path>`/`<rect>` shapes in the same SVG
always render correctly. Symptom: text present in the DOM with correct
computed styles and coordinates, but at 1920×1080 it is frequently invisible
in the captured pixels, and at other viewports it renders tiny and clustered
near the diagram's top-left rather than at its true scaled position. This
reproduced identically on two different diagrams (`radburn` and `basin`) and
was not fixed by a forced resize-repaint. A diagram (`basin`) that had
screenshotted cleanly in an earlier session later showed the same failure
with no source change in between — confirming this is a capture-pipeline
artifact of headless Chromium under CDP, not a content or CSS bug.
Consequence: **diagram label placement must be verified by coordinate
arithmetic against the SVG source (line/shape geometry vs. text x/y and
span), not by `agent-browser` screenshot.** The fixes above were made and
confirmed that way. Screenshot verification in this pass covered page
structure, non-SVG text, and layout/overflow only, per the viewport check
below — not SVG-internal diagram labels.

### Verification

`rm -rf dist && pnpm build` then `pnpm check`: exit 0, 0 errors, 0 warnings,
7/7 test files, 21/21 tests, no broken links, no accessibility violations.

Viewport pass in actual Chrome via `agent-browser` device emulation, fresh
`pnpm preview` build, page identity curl-checked first: homepage, the Week 10
lecture page (including its theory list and simulation-mapping table area),
and the Week 1 deck title slide, at both 1920×1080 and 390×844. All clean —
no horizontal overflow, nav collapses to a mobile menu, deck chrome and
non-SVG slide text render correctly. SVG diagram-label legibility was **not**
re-verified visually, per the tooling finding above; those fixes rest on
source-geometry verification and `pnpm check`.

## 2026-09-03 — Cross-course consistency check: studio fixes vs. lecture decks

Handoff instruction from the studio adversarial review was to check
lecture/studio cross-consistency once the lecture-deck review landed
(`cf34a0b9`), particularly Weeks 2, 4, 5, 6, 10. Diffed that commit against
the studio pages fixed earlier the same day (`88e29a2f`) rather than
re-running a full review, since the specific risk was the two passes
correcting the same claim in opposite directions.

Weeks 4, 5, 6 and 10 check out: the lecture-deck pass's own fixes (bus canon,
Ludworth Bench, the fire-load scenario, Week 7's no-pressure model) already
match the studio pages, and neither Week 4 deck nor lecture page carries the
stale `w03` save reference the studio fix removed.

**Week 2 did not.** `src/decks/week-02.deck.mdx` still described the
unzoned-network exercise as reading a live traffic-volume overlay
("read the traffic volume overlay... Volume will already be uneven",
close-one-link as "before-and-after volume readings", "screenshot the
traffic volume overlay at 08:00") — the exact claim the studio page fix
replaced with path-count/route-count evidence, because an empty network has
no local origins and so no honest volume to show. The deck predates that
studio fix and the lecture-deck review's own pass didn't cross-check against
it. Reworded the three affected slides (configuration-predicts-movement,
close-one-link procedure and table, "Before Tuesday" checklist) to path-count
and route-count language matching `02-block-pattern.md`. `pnpm check` stayed
pristine (0 errors, 0 warnings, 21/21 tests).

## 2026-09-03 — Reflection: lecture-deck adversarial review, worth citing in PROCESS.md

Flagging this task for the process write-up: the full lecture-deck
adversarial-review arc (fresh reviewer pass against handoff notes plus an
independent pass, fixes across all twelve `.deck.mdx` files and lecture
pages, a full `CourseDiagram.astro` overlap audit, both marked viewports,
log, commit, push) ran close to two hours of wall-clock/agent time across
several context compactions, and was time well spent rather than churn.

Why it worked: mechanical `pnpm check` would never have caught the Week
5–6 tram-vs-bus canon drift, the fabricated "Ondrey escarpment," or Week 7's
arithmetic conflicting with the documented pipe model — all three need a
reader applying outside knowledge (the game's actual mechanics, the course's
own settled canon) against prose, which is exactly what the adversarial-
review step in `CLAUDE.md` exists for. The one real time-sink in the two
hours was a tooling artifact (`agent-browser` failing to reliably render SVG
`<text>` under reveal.js's slide-scale transform) rather than the content
work itself; recognising it as a dead end took a controlled, repeatable
comparison rather than accepting the first screenshot as ground truth, and
is recorded separately as a memory/feedback note so it doesn't cost a second
session the same hour. The final closeout (rebuild, full check, both
viewports, diff review) turned up nothing new wrong, which is itself a
signal the fixes made along the way were sound rather than needing a
last-minute scramble.

## 2026-09-03 — Adversarial review of assessment briefs' content

Spawned a fresh reviewer (no shared context) against the three assessment
briefs, the assessments index, `policies/index.mdx`, and sessions 04/09/12,
told explicitly to attack for contradictions, weekday/timezone/weight
arithmetic, cross-page consistency and gradability. It also checked the real
COMP4020 Assignment 2 spec's "assessment that adds up to 100%" requirement
(25+25+50, satisfied).

Two must-fix findings, both real:

1. **Assessment 3's jury gave the Visiting Critic (Sunniva Marek) sole
   marking-chair authority over Studio 2.16**, contradicting her role
   everywhere else on the site — `policies/index.mdx` ("Course Convenor
   chairs Weeks 4 and 12; Week 9 is chaired by the tutor of record"),
   `people/index.mdx` ("a visiting critic ... who sits on the jury ... and
   nowhere else"), her own bio (`role: guest`, "not a member of the teaching
   team"), and Assessments 1 and 2 themselves (where she only ever "sits as
   Visiting Critic"). The bug was systemic, not a typo: it was corroborated
   in `sessions/12-final-jury.md` and `decks/week-12.deck.mdx`. Fixed by
   giving Studio 2.16 to Tobias Wren as chair (mirroring the Week 9
   tutor-of-record pattern) with Nadia Ilkhom sitting, and having Marek
   circulate between both rooms as Visiting Critic, chairing neither — across
   the assessment brief, the session page, the deck, and a clarifying
   sentence added to `policies/index.mdx` explaining the two-room split.
2. **Assessment 2's brief claimed "sole authority" over the defence** but
   never mentioned the recess return round in `sessions/09-public-realm-
   build.md` (three plans the chair and Visiting Critic disagree about come
   back for six more minutes). Added one paragraph to the brief's Defence
   section stating that round is discussion, not extra marked time, so the
   "sole authority" claim stays true.

Also fixed two gradability gaps the reviewer flagged as polish: Assessment 3
had no word limit on its defence memo (added 1,600 words, appendix excluded)
despite Assessments 1 and 2 both capping theirs, and its save requirement
didn't state the 08:00 pause time its own screenshot captions require (added
explicitly, matching `sessions/12-final-jury.md`).

Everything the reviewer checked and found already correct: all four due-date
weekdays against the real 2027 calendar, DST offset boundaries, marking-
criteria weights per brief (40+30+30, 45+30+25), cohort/room arithmetic, the
A2 cost-per-happiness-point math, and every one of Assessment 3's forward
references into Weeks 8/10/11 — none orphaned. `pnpm check` stayed pristine
(0 errors, 0 warnings, 7/7 test files, 21/21 tests) after all fixes.

## 2026-09-03 — Home page rewrite: too generic, not a reason to enrol

User feedback: the home page was too simple and gave no reason a prospective
student would want to enrol over any other studio course. `src/pages/index.astro`
had the mechanics ("you keep a district all semester," "no build gets all
three metrics") but no concrete evidence and no hook.

Rewrote it to pull three verbatim facts already established elsewhere on the
site into a single narrative: the Week 6 Wickstead widening's travel-time arc
(11.2 → 8.9 → 10.7 minutes, from `sessions/06-peak-load-stress-test.md`),
Marisol Quaye's "you cannot draw anybody choosing to ride it" quote (from her
people-page bio), and the Week 1 standing rule that a plan claiming all three
metrics improved has not been read carefully (from
`sessions/01-site-selection.md`). Added a one-line lede up top and a new "Why
simulate it" section built around the quote and standing rule.

Spawned a fresh Sonnet reviewer (no shared context) to fact-check every new
number/quote against its source and attack the page as a skeptical
prospective student. It confirmed all three borrowed facts were exact
matches, including the three-week-hold / six-week-refill sequence on the
Wickstead numbers, and found no contradiction against `policies/index.mdx` or
`course-config.ts`. Real findings, both fixed:

1. The "Who it is for" section invented an unsourced prerequisite
   ("a first-year planning or urban studies gateway course") that appears
   nowhere else on the site — a specific, falsifiable-sounding claim with no
   backing. Removed the invented gateway-course detail, kept "second-year
   students" (which does match `course-config.ts`'s `level: 2`).
2. No hook line before the reader reaches the Wickstead paragraph. Added a
   one-sentence lede right under the tag pills: "You will build something
   that works. Then a jury who was not in the room when you decided will ask
   what stopped working because of it."
3. "screenshot by screenshot, tradeoff by tradeoff" was flagged as reaching
   for punchiness with a stacked parallel construction, out of step with the
   plain numbers-first voice elsewhere. Cut back to "screenshot by
   screenshot."

The reused Marisol quote (identical to her bio) was flagged as a minor risk
of reading like padding but left as-is — a home page repeating a person's own
pull quote before a reader has visited their page is normal, not a
contradiction. `pnpm check` stayed pristine (0 errors, 0 warnings, 14/14 test
files, 42/42 tests) after the fixes, and both marked viewports (1920×1080,
390×844) were checked in Chrome via `agent-browser` against `pnpm preview`.

User called the Wickstead paragraph "pure slop" on a follow-up read, and they
were right: "drifting to 10.7 by week six" collides with "In Week 6 you widen
it" earlier in the same sentence, so a careful reader can misread it as the
road failing in the same course week it was built, when the six weeks are
in-game (simulated) time elapsed after the widening, not a later course week.
The adversarial reviewer's fact-check confirmed the numbers were accurate but
did not catch this because it checked values, not readability against a
first-time reader. Also cut two decorative metaphors doing no explanatory
work ("the travel time you bought erode," "a claim with a half-life").
Rewrote to state explicitly "six in-game weeks" and lead with the mechanism
(drivers who'd been avoiding the jam come back) rather than a metaphor.
`pnpm check` stayed pristine after the fix; no re-screenshot taken since this
was a wording correction to an already-verified layout, not a structural
change.

## 2026-09-03 — Home page tense: present vs. future for a prospective reader

User pushed back again: the "What you will do" section was written in present
tense ("you are assigned," "you make the call") even though this is the intro
page, addressed to someone who hasn't enrolled yet — its own heading already
said "What you will do." Converted that section and the Wickstead example to
future tense for the personal narrative ("you will be assigned," "you will
widen"), while deliberately leaving general/standing facts in present tense
(no build gets all three metrics; the widening genuinely helps; "Who it is
for"'s audience description) — mixing future-for-events and present-for-
standing-truths is normal in English and matches how the rest of the site
already reads.

Spawned a second fresh Sonnet reviewer against the converted page. It found
the numbers/quotes still checked out, but caught three real problems:

1. "and the studio will make you report both numbers" broke tense with its
   own coordinate clause (a present-tense standing-fact sentence) —
   reverted that clause to present ("makes you report").
2. The "Why simulate it" closing sentence had a category mismatch (a jury
   is not "someone") and a dangling "them" with no clear antecedent.
   Rewrote as "every jury afterward spends its afternoon checking whether
   you read your own numbers as carefully as you are asking it to."
3. The Wickstead paragraph stated one traffic-return mechanism as settled
   fact, when `sessions/06-peak-load-stress-test.md` treats it as one of
   four unaudited hypotheses students must test — ironic given the same
   sentence praises the studio for not stopping at a flattering number.
   Softened to "likely because." Also swapped the imperative "Run the
   simulation forward six in-game weeks" for a declarative "Six in-game
   weeks later," which had read as a mood shift out of place in the
   narration.

`pnpm check` stayed pristine (0 errors, 0 warnings, 14/14 test files, 42/42
tests) after these fixes.

## 2026-09-03 — Adversarial review of the policies page vs. the real course's handbook

Asked a fresh Sonnet subagent (no shared context) to compare
`src/pages/policies/index.mdx` against the real COMP4020 course's own admin
content, pulled live via the `comp4020:handbook` skill's API (`ai-use-and-
integrity`, `assessment`, `code-of-conduct`, `communication`, `enrolment`,
`ethics`, `participation`, `studio-crit-model`). It reported 8 findings; I
verified each against primary sources — the page itself, the assessment
briefs, session files and people bios — before acting, since this repo's
studio (Cities: Skylines II district design, pin-ups, a Visiting Critic) is
deliberately a different fiction from the real agentic-coding course and is
not obligated to mirror its actual administrative machinery.

**Rejected as intentional, internally-consistent fiction, not bugs:**
1. Comms model ("Course Convenor, by email" for briefs/marks/extensions/
   adjustments) vs. the real course's Ed-only, no-direct-email policy —
   Marisol Quaye's own bio (`people/marisol-quaye.md`) already establishes
   "Briefs, marks, extensions and adjustments come to me and to nobody
   else," with her email listed. Consistent with itself; just a different
   fictional administrative model.
2. Extensions granted by convenor discretion vs. the real course's ANU-set
   ECA process — same bio confirms this is this studio's own established
   rule, not an oversight.
3. "Miss the jury and your plan is marked from the memo alone" vs. the real
   course's zero-for-a-missed-crit rule — `sessions/12-final-jury.md` already
   states, in the studio's own voice, "a missed jury is marked from the memo
   and boards without a live defence." The subagent compared against the
   real course's rule instead of this repo's own established fiction.
4. Per-artefact generative-tools disclosure line vs. the real course's
   one-time blanket AI-use declaration — a legitimate different policy
   choice for a different (game-design) practice, not a contradiction
   anywhere in this repo.
   Also checked and confirmed correct: root-absolute links (`/assessments/`,
   `/sessions/`, `/people/`) — Astro's build already rewrites these under the
   deployed base path (verified in `dist/policies/index.html`), so the
   general CLAUDE.md caution about root-absolute links doesn't apply to
   MDX-authored links here.

**Fixed as genuine internal defects:**
1. **"Attendance at pin-ups is expected in all twelve studio sessions"**
   overreached the studio's own terminology — only Weeks 4 and 9 are
   pin-ups, Week 12 is a jury, and ordinary weeks (`sessions/02-block-
   pattern.md`, `08-budget-under-cutback.md`) are desk crits. Reworded to
   "the crit --- desk crit, pin-up or jury, whichever the week calls it."
2. **Self-contradictory lost-save clause**: the page said a machine dying
   "when you were keeping the backups the studio asks for" was grounds for
   an extension — but if the backups were kept, the save was not actually
   lost, which is the opposite of what the sentence needed to argue.
   Rewrote it to locate the harm correctly: kept backups mean the save
   survives, so what an extension covers is the lost time getting back onto
   a working machine, not the (non-existent) data loss.
3. **Undefined term used before its section**: "a registered access
   adjustment" appeared in Save files, sixty lines before Equipment defines
   "registered accessibility adjustments" — different phrasing, no forward
   link. Unified the term and added a link to
   `/policies/#equipment-access-and-adjustments`.
4. **Ambiguous room reference**: the Equipment section named "the tutor
   station in Studio 2.14" for the cohort's 16th save without saying how
   2.14 relates to "the design lab" it was just introduced alongside, when
   2.14 is established elsewhere (`people/marisol-quaye.md`, all three
   assessment briefs) as the desk-crit/jury room, not the lab. Added a
   clause naming it as that same room, distinct from the design lab.

`pnpm check` stayed pristine (0 errors, 0 warnings, 7/7 test files, 21/21
tests) after all fixes; no heading `id`s changed, so the deep-link test in
`spec/policies.test.ts` still resolves.

## 2026-09-04 — Semester-at-a-glance timeline on the home page

Added `<SemesterTimeline />` between the "Who it is for" prose and the
"Where to go next" cards, per a request to mimic a real widget from the
COMP4020 course site (with the "today" indicator explicitly dropped, since a
static prototype has no live current date to mark).

Design decisions:

- **Pure data mapping, TDD'd separately from the component.** `src/lib/
  semester-timeline.ts` (`buildSemesterTimeline`, `weekBoundaryFor`) takes
  the three content collections (lectures, sessions, assessments) plus two
  calendar dates and produces one ordered `TimelineCell[]` — weeks, the
  mid-semester break, enrolment-date markers — interleaved correctly. Wrote
  `spec/semester-timeline.test.ts` first (8 tests covering marker/break
  ordering, assessment-week labelling regardless of input order, and the
  no-assessment-this-week case) since interleaving order is exactly the kind
  of thing that's easy to get subtly wrong without a test.
- **Census/drop-by dates are invented but real data, not omitted.** Neither
  date is published anywhere in this course's content collections. Rather
  than skip the enrolment markers the reference widget has, added census
  (2027-03-12, before Week 4's pin-up) and last-day-to-drop (2027-04-30,
  before Week 9's pin-up) as plausible ANU-calendar-consistent constants in
  the component, with a comment explaining they're invented-but-consistent
  rather than sourced.
- **No horizontal scroll at either marked viewport.** The track is
  `overflow-x: auto` as a safety net, but every fix below aimed at making
  the full 15-cell row (12 weeks + break + 2 markers) fit inside the content
  column without scrolling, since `agent-browser get box` turned out to be
  scroll-offset-insensitive — it reports static document-layout coordinates
  regardless of an ancestor's current scroll position, so it can't verify
  scrolled-to content is actually reachable. Designing away the need to
  scroll sidesteps that verification gap entirely.

Visual verification at both marked viewports (1920×1080, 390×844 via
`agent-browser`, against `pnpm preview`) found two real clipping bugs that
`pnpm build` and the data-mapping tests couldn't catch:

1. **Desktop: nowrap assessment labels forced flex-items wider than their
   basis.** `.st-cell { flex: 1 0 3.25rem }` let a nowrap "A1 · 25%" label
   push those three columns past 3.25rem (flex-shrink was 0), widening the
   whole 15-column row past the 48rem content column with no visible
   scroll affordance. Fixed by pulling the label out of flex-sizing and
   switching cells to `flex: 1 1 0; min-width: 1.75rem` (shrinkable).
2. **Mobile: grid overflow, then a separate last-column label overflow.**
   First pass at a `max-width: 480px` media query still left the row ~20px
   wider than its clip box (caught by comparing `.st-cell`'s right edge to
   the track's right edge via `get box`, not by `scrollWidth===clientWidth`,
   which reports clean on an `overflow-x:auto` container regardless).
   Shrank `.st-cell` min-width down to 0.55rem to fit the grid, which
   surfaced a second, subtler bug: the last week's (Week 12/A3) absolutely-
   positioned, centred label still overhung the clip edge by ~5.5px even
   with the grid itself flush, because centring a wide label over a narrow
   flex item pushes its edge past the item's own bounds. Fixed structurally
   — converted the label from absolutely-positioned single-line text to an
   in-flow two-line stack inside a fixed-height slot, which can't escape
   its flex item's width the way absolute centring could — plus a small
   `padding-inline-end` on the track so the last label's residual overhang
   lands in reserved padding rather than past the container's edge.

`pnpm check` stayed pristine (0 errors, 0 warnings, 8/8 test files, 29/29
tests) after all fixes.

## 2026-09-04 — Policies page: tiled layout

Restructured `src/pages/policies/index.mdx` into a card grid, on request, so
the page reads as nine distinct tiles instead of one long scroll of H2
sections — matching the `Card`/`CardGrid` visual language already used on the
home page and the assessments index. Prose is unchanged; this is layout only.

New component `src/components/PolicyCard.astro` wraps the theme's existing
`.at-card`/`.at-card-body`/`.at-card-title` classes (confirmed these are
plain global CSS, not private to `Card.astro`) but, unlike `Card.astro`,
takes an explicit `id` prop and puts it on the heading element itself. This
was necessary because `Card.astro` has no `id` prop at all — it relies on
callers not needing anchors. The policies page's headings are load-bearing:
`spec/policies.test.ts` and three other pages (`assessments/*`,
`people/index.mdx`, and the page's own self-links) deep-link into
`/policies/#<id>`, so switching to a component-rendered heading would have
silently dropped every one of those anchors if `id` weren't threaded through
by hand. Removed the `##` markdown headings from each section (title is now
a prop, not parsed markdown) so there's exactly one mechanism producing each
heading id — otherwise rehype-slug and the hand-set `id` would compete.

The one section that doesn't suit a narrow card — "Where to ask what", which
is a lookup table, not a rule — gets a `wide` prop on `PolicyCard` that sets
`grid-column: 1 / -1`, so it spans the full row instead of squeezing a table
into a ~20rem column.

Verified after `pnpm build`: all 9 H2 ids plus the H1 are byte-for-byte
unchanged in `dist/policies/index.html`, `pnpm check` is pristine (7/7 files,
21/21 tests, no broken links), and visual check at both 1920×1080 and 390×844
in Chrome confirms the grid collapses to a single column on mobile with no
clipped content (checked table and card children against bounding boxes, not
just `scrollWidth`, since `.at-card` sets `overflow: hidden`).

## 2026-09-04 — Adversarial review of the tiled policies page, two real fixes

Before committing, ran an adversarial review with a fresh general-purpose
agent (no shared context with the drafting session, per CLAUDE.md) against
`src/pages/policies/index.mdx` and `src/components/PolicyCard.astro`. It
found two real defects the mechanical checks couldn't see, plus two minor
ones. Both real defects are fixed; this is what changed and why.

**Dead whitespace from row-height stretching.** The theme forces sibling
`.at-card`s in the same grid row onto a shared `subgrid` (`grid-row: span 2;
grid-template-rows: subgrid` in `astro-theme-university/styles/
components.css`), so a short card and a long one paired in the same row get
stretched to equal height. That's fine for `Card.astro`'s short, near-
uniform nav blurbs, but this page's sections range from ~90 to 300+ words —
"Generative tools" was measured stretching to 928px to match "Save files and
version discipline" in the same row, leaving ~130px of empty bordered box.
Fixed with two scoped rules on `.policy-card`: `grid-row: auto;
grid-template-rows: auto` to opt out of the subgrid, and (found only by
checking computed styles, not just reasoning about the CSS) `align-self:
start`, because CSS Grid stretches items to their row's height by default
even without subgrid — the first fix alone left cards still silently
matching heights in pairs. Also had to confirm empirically that the scoped
override actually beats the theme's rule despite equal selector specificity
(0,2,0 both) — it does, because Astro emits the component's `<style>` before
the theme's external stylesheet in `<head>`, but same-specificity source-
order reasoning is easy to get backwards, so I verified computed `height` in
a real browser via `agent-browser` rather than trusting the cascade math.
Confirmed after the fix: cards in the same row now report different
heights matched to their own content (e.g. 622px vs 928px).

**Missing "#" permalink anchors.** Every other heading on the site goes
through the theme's `rehype-slug` + `rehype-autolink-headings` pipeline
(`astro-theme-university/markdown.ts`), which appends a hover-reveal,
aria-hidden `<a class="at-heading-anchor">#</a>` for copying a section link.
`PolicyCard`'s heading is rendered directly in the `.astro` template, not
parsed as MDX prose, so it bypassed that pipeline entirely — the policies
page, the one page on the site most dependent on shareable per-section
anchors, was the only page where readers couldn't copy a section's link.
`spec/policies.test.ts` didn't catch this because it only checks that ids
exist and resolve, not that the copy-link affordance is present. Fixed by
hand-adding the same anchor markup (`href="#{id}"`, `aria-hidden="true"`,
`tabindex="-1"`, class `at-heading-anchor`) inside each card's heading,
matching the theme's convention exactly. Verified in built output (10
`at-heading-anchor` elements: H1 + 9 cards, was 1 before) and confirmed via
computed style that it stays hidden until hover, matching every other
heading on the site.

Also trimmed the unused `headingLevel` prop from `PolicyCard` (no call site
ever used `"h3"` — dead speculative flexibility) since a reviewer flagged it
and the project's convention is against unrequested generality.

The review's other findings — that reusing a nav-card visual pattern for
non-navigational reference content is a category tension, since policies
cross-reference each other in ways link-out nav cards don't — were judged
correct as an observation but not a defect to fix: `PolicyCard` renders a
plain `<div>`, not an `<a>`, and the theme's hover/pointer affordances are
scoped to `a.at-card:hover` only, so it doesn't visually lie about being
clickable. Left as-is; noted here so the tradeoff isn't silently lost.

Re-ran `pnpm check` after both fixes: 29/29 files, 91/91 tests, pristine.
Re-verified both viewports in Chrome via `agent-browser` after the fix (not
just re-trusting the earlier pass, since the CSS changed materially).

## Adversarial review: assessments pages and people page

Audited git history first to find what had not yet been through adversarial
review. Lecture reference pages, the assessments section, and the people
page had no prior adversarial-review log entry (deck slides, home page,
studio session pages, and policies-vs-handbook had all been reviewed).
Ran two fresh, context-isolated reviewer subagents (Sonnet, no shared
context with the drafting history) against the three assessment briefs and
the people page + 5 bios, instructed to be adversarial rather than
encouraging.

**Assessments review findings, and fixes:**

1. **Chair-authority contradiction, Week 4.** The assessment brief
   described "two concurrent bays" for the Week 4 pin-up with only one
   chair named (Marisol Quaye) and Sunniva Marek explicitly established
   site-wide as never chairing — leaving one bay with no chair of record.
   The paired session page (`sessions/04-upzoning-the-amenity-core.md`)
   had the identical contradiction, since both describe the same jury.
   Fixed both to one bay run in two sequential rounds of eight, with
   Marisol chairing both rounds and Marek sitting as Visiting Critic
   throughout — rather than inventing a second chair, since Week 4's
   established cast is only Marisol and Sunniva.
2. **Redundant marking restatement.** Assessments 01 and 02 (weighted
   marking) repeated the criteria/weights numbers in prose in the body
   "## Marking" section, verbatim duplicating what the `marking:`
   frontmatter already states and `MarkingModel.astro` already renders as
   a table. Removed the redundant numbers from the prose in both, keeping
   only the qualitative marking guidance the table can't express.
   Assessment 03 uses holistic marking with genuinely distinct prose, so
   left as-is.
3. **Missing `spec:` contract.** Every session page renders a "what a
   marker checks" bullet list via `<SpecList>` from a `spec:` frontmatter
   field; no assessment page had one, despite the assessment template
   already wiring in the same component (rendering nothing for all three
   briefs). Added a `spec:` array to all three assessment briefs, each
   drafted from facts already stated in that same brief's body — no new
   invented requirements.
4. **Buried second deadline, Week 12.** The capstone brief's intro line
   ("This brief is the sole authority...") gave no signal that a "Two
   clocks" section further down established two separate deadlines
   (Friday memo, Monday artefact), inviting a student who stops reading
   at the intro to miss the earlier one. Added a sentence directing the
   reader to "Two clocks" immediately.

**People-page review findings, and fixes:**

5. **Contact-hours vs. calendar contradiction.** Three bios (Marisol,
   Idris, Nadia) gave a specific weekday/time for "the studio" or "desk
   crits" that didn't match `spec/calendar.test.ts`'s Monday-only teaching
   calendar — e.g. Idris's contact line implied Wednesday/Friday studio
   sessions when Idris's actual teaching weeks (2, 5, 6) are all Mondays.
   Reframed each as explicit drop-in/office hours, distinct from the
   official Monday session, rather than flattening all three to identical
   text and losing each tutor's voice.
6. **Teaching-credit mismatch with the session/lecture records.** Two bios
   claimed lecture credit not borne out by `content/lectures/*.md`
   frontmatter: Marisol's bio claimed "Week 1-3 lectures" but Week 2's
   lecture is Idris's; Idris's bio omitted Week 2 despite teaching it;
   Nadia's bio claimed "the one lecture in the semester with slides" and
   Week 7 only, omitting Week 10 (also hers per `sessions/10-*.md`).
   Corrected all three bios to match the session/lecture frontmatter
   exactly (Marisol: Weeks 1 and 3; Idris: Weeks 2, 5 and 6; Nadia: Weeks
   7 and 10).
   Tobias Wren's bio was checked and already correct — no change needed.
   One flagged item (root-absolute internal links on the people page) was
   *not* acted on: a prior adversarial review (see above, policies-vs-
   handbook entry) already established this is a genuine site-wide
   authoring convention that Astro's build correctly rewrites under the
   deployed base path, confirmed again here by grepping the same pattern
   across `index.astro`, the grid components, and `policies/index.mdx`.

`pnpm check` is pristine after all fixes (0 errors, 0 warnings, 7/7 test
files, 21/21 tests, 51 pages built, no broken links, no accessibility
violations). No layout/CSS/structural change was made — all fixes are prose
and frontmatter content, including a new `spec:` block already handled by
the existing `SpecList`/`MarkingModel` components — so no viewport
verification was needed.

## 2026-09-04 — Assignment 2 audit

Created a separate audit worktree at eb7746e at the owner's request. Read the
published Assignment 2 brief/spec and all lecture, studio, assessment and people
sources. Recorded submission readiness and cross-page contradictions in AUDIT.md.
The baseline pnpm check passes 29 tests; check:evidence fails on the unchanged
PROCESS template and example citations. Findings remain findings, without editing
course behavior or the student's personal process account.

## 2026-09-05 — Audit verification and report

Completed the production-browser sweep: 51 routes and 194 slides at both marking
viewports. Documented phone deck readability with measurements and screenshots;
rejected false positives for scrollable tables and an image still decoding.
A fresh adversarial reviewer supported the first nine content findings; added
explicit deck weekday corroboration without misclassifying staff office hours.
Final AUDIT.md records 15 findings, spec status, reproduction evidence and limits.
Rechecked with the specified Node 24 runtime: 29 tests and all build checks pass.
PROCESS.md remains untouched and the existing evidence-gate failure is reported.
## 2026-09-04 — Semester timeline visual alignment

Compared the live COMP4020 timeline in Chrome and read the assignment 2 brief
and spec. Worked from current main in `fix/semester-timeline`, in a separate
worktree as requested. Restyled the existing timeline with full-height week
bands, a shaded double-width break, three spaced marker rows, larger assessment
dots with inline labels beneath, and horizontal enrolment labels above dashed
rules. Kept the existing calendar mapping and SlopU palette. This is a visual
change with existing mapping coverage; no curriculum rewrite or new behaviour.

Validation: `pnpm check` passed with zero warnings, 29 tests, 51 pages, no
broken links or accessibility violations. Chrome production-preview screenshots
at 1920×1080 and 390×844 confirmed the layout; mobile DOM bounds showed no
out-of-bounds labels or dots and no clipping containers. Preview used confirmed
port 4322 after an initial startup timeout during concurrent build load; retry
started cleanly. `pnpm check:evidence` still fails on the pre-existing PROCESS.md
template and fake citation hashes; left the student's account untouched and
disclosed this baseline issue in the PR.
## 2026-09-05 — Homepage course imagery

Added a wide local SVG hero and three image-led homepage navigation cards,
following the reference course site's visual hierarchy without borrowing its
artwork. The illustrations use the course's cream, gold, ink and red palette to
show the actual studio premise: a city plan, a route under test, an assessment
map and a teaching team around the shared plan. Every image has descriptive alt
text; assets are local so GitHub Pages deployment does not depend on an external
image host.

## 2026-09-05 — PR 4 audit repairs against newer main

Merged current main into the existing audit branch, retaining its new artwork
and timeline layout and both log histories. Reconciled lecture preparation with
studio clocks, kept both Week 7 utilities funded through Week 9, and moved the
capstone decision before Friday’s memo. Corrected the 340-second walkthrough to
280 seconds plus 20 for transitions; its focused test first failed at 340.
Separated hypothetical arithmetic from captured evidence and household aggregates
from tracked departures. Added discoverable access/worksheet guidance and marking
bands; the fictional course share is explicitly not a working LMS. PROCESS.md
remains the student’s account and publication is outside this PR update.

## 2026-09-05 — Adversarial review of audit repairs

A fresh Luna reviewer found residual deck weekdays, denied weekly uploads,
a second unsupported household-departure claim and unlabelled homepage figures.
Replaced those instructions, clarified the Week 11 decision/final-artifact
window, and labelled the home example hypothetical. Their Week 9/11 count
findings overlapped fixes already underway. Added arithmetic checks against the
published allocation and utility chronology, rather than another keyword gate.
The phone reader derives its content from compiled slides; Chrome confirms
390×844, 16px body text and all reading sections exposed, rather than a scaled
6px slide canvas. Final layout inspection follows the complete content draft.

## 2026-09-05 — Repair verification and PR update

Node 24 pnpm check passes with no diagnostics: 52 pages, build accessibility,
base paths, links and deck checks, 33 tests in the shared checkout (one belongs
to the concurrent illustration task). Chrome measured all twelve decks at both
marked viewports: no clipped text or page overflow; phone minimum text 16px.
Contents and lecture-return links work. Stopped visual testing when requested.
Evidence gate still reports the personal PROCESS template and two example SHAs;
left that account untouched. Updated AUDIT.md with per-finding disposition and
limits. Preserved the other agent's assessment artwork changes outside our index.

## 2026-09-05 — Assessment imagery

Added illustrations to the three assessment briefs, on both the index card and
the head of each brief page, extending the homepage pattern from PR 5. The
concept is scale escalation: Week 4 is one residential cell with its amenity
core and walking radius, Week 9 is a district with the utility networks in
cutaway beneath it, Week 12 is the whole district with the corridor and all
three metrics read at once. So the pictures track the course argument rather
than decorating it.

Six SVGs, not three. The card frame is 16:9 and the page hero crops to about
5.2:1 at 1920 and 1.1:1 at 390, so one drawing cannot serve both without being
badly cropped in one of them. Cards stay cream to match the PR 5 cards; heroes
are dark-field because the theme overlays a white h1 on them.

Schema: `heroImage`/`cardImage` via Astro's `image()` on the assessments
collection, each requiring alt text through a `superRefine`, mirroring how
`people` already guards `photo`/`photoAlt`. TDD — the new
`spec/assessment.test.ts` case asserts an illustration with distinct,
non-trivial alt text on every card and every brief page, and it failed for
the right reason before the wiring existed.

Two things the checks could not have told me. First, the first hero pass used
cream art like the cards; the theme's white hero title was then unreadable over
pale gold. The homepage never actually uses a hero image band — PR 5 put its
illustration inline in the content column — so this was a new pattern, not a
copied one. Redrew the heroes dark-field and measured the crop safe zone
(viewBox x 425–1175, y 160–460) so the subject survives both viewports.
Second, `agent-browser` renders the hero title wrong mid `fade-up` animation:
the capture showed dark text while computed style reported white at opacity 1.
Disabled animations before trusting any screenshot, which is the same class of
artifact as the SVG-text issue noted earlier.

Also hit a race with the concurrent PR 4 session: a build at 11:10 flagged
`../resources/` on the lectures index as broken and I retargeted it, but that
page was created at 11:14. Reverted; the link was never broken.

Validation: `pnpm check` green, 52 pages, 33 tests, no broken links, no
accessibility violations, no warnings. Verified all three briefs and the index
in Chrome at 1920×1080 and 390×844 against the confirmed preview port 4341,
with viewport set by emulation and `innerWidth`/`innerHeight` asserted.

## Page headers on every page, and the nav row that wrapped

Two reported problems, one shared cause: the top of every page was wrong.

**The nav.** The search trigger was dropping onto a second line, which is where
the "noticeable gap between the header and the start of content" came from ---
the bar was 9rem tall instead of 6.5rem, with an empty second row under it. Not
a viewport quirk: measured in Chrome at 1920, brand 290px + six links 546px +
trigger 45px + two 1.5rem gaps came to ~936px inside an 864px (48rem) content
column, so it never fit at *any* width, and `.at-nav-inner`'s `flex-wrap: wrap`
wrapped rather than tightened. The theme sizes that row for a compact brand
mark --- the ANU stacked lockup on the reference site is 128px wide --- and
Slop's horizontal lockup is 6.46:1. Fixed in a new `src/styles/site.css`
(registered through the theme's `brandCss` hook, so it loads unlayered on every
page and beats `@layer at.components`): logo to 2rem, nav gap to `md`, link gap
to `xs`, and `nowrap` so the links row scrolls behind the theme's own edge fade
instead of wrapping the bar. 837px in 864px. The bar is 117px again, exactly
the `--at-nav-height` that `scroll-padding-top` already assumed, so in-page
`#anchor` targets stop landing under the sticky header --- a second bug the
wrap had been causing on the policies page's deep links.

A follow-up the first measurement missed: at 700px the trigger was shrinking to
33px, an off-square button with a 20px icon inside it. Pinned the brand and the
icon buttons `flex: none` so shortfall goes to the links row, which is the one
part of the bar built to absorb it.

**The headers.** Only the three assessment briefs had the illustrated title
band the reference course site puts on every section page. Auditing the built
output turned up worse than a missing image: `assessments/`, `lectures/` and
`people/` rendered **no h1 at all** (they set `heroTitle` but no `heroImage`,
and the theme only renders the band when it has both), and all twelve lecture
pages rendered **two** --- the layout's title plus a `# The argument` opening
the body. Wrote `spec/page-headers.test.ts` first: exactly one h1 per page,
inside a hero band, with an image whose alt is more than 20 characters, and a
different illustration per section. It failed on 4 of 5 assertions, which is
the shape of the problem.

Then drew seven illustrations in the existing flat-SVG house style (dark board
`#17150f`, cream/gold/rust) --- lectures, studios, assessments, people,
policies, resources, 404 --- and wired heroes through every route, promoted
`course-hero.svg` to the home band, demoted the twelve lecture body h1s to h2,
and gave `policies` and `resources` the `heroTitle` they never had. The home
page moved from `ContentLayout` to `BaseLayout`: it is the one page whose
`<title>` and hero heading want to differ, since the catalogue record set at
hero scale runs to five lines before it says anything.

`spec/assessment.test.ts` then failed --- correctly. It counted illustrations
in everything that was not `<header>`/`<footer>`/`<nav>`, so the index's own
header band read as a fourth brief. Scoped that one count to `<main>` (the band
sits outside it) rather than weakening the assertion; the per-brief hero checks
still read the whole document.

The crop safe zone recorded in the PR 5 entry above earned its keep. `cover`
on a 2.58:1 source shows only the vertical middle on desktop, and I still lost
three things to it on the first pass and had to fix them: the home readout
panel lost its top line, the policies `12:00` label sat below the crop, and the
resources branch stack overran both edges. A fourth was not a crop problem at
all --- the assessments legend collided with the white hero title, because the
title starts at the content column's left edge, about x 455 in viewBox units.
Narrowed it to `A1 25% / A2 25% / A3 50%`.

Skipped adversarial review by design: this is a layout and asset change, not a
content draft, so CLAUDE.md routes it to viewport verification instead. No
course prose changed except the home page's opening block.

Validation: `pnpm check` green --- 0 errors, 0 warnings, 0 hints, 38 tests, 52
pages, no broken links, no accessibility violations --- and
`pnpm check:evidence` clean. Verified in Chrome against the confirmed preview
port 4399 at 1920×1080 and 390×844 (viewport by emulation, `reduced-motion` set
so the hero fade could not skew a contrast read), plus 1024 and 700 to see the
nav row hold at one line and hand overflow to the scrolling links row.

## Policies page: cards out, prose in

The ten policy sections were `PolicyCard`s in a two-column `CardGrid`, so the
page read as a wall of boxes rather than as the one continuous document it is.
Unwrapped them into ordinary `##` sections and deleted `PolicyCard.astro`,
which had no other caller.

The thing to preserve was the anchors. `PolicyCard` set its heading `id` by
hand precisely so other pages could deep-link into it, and six of those links
are live --- `#marking-bands`, `#extensions`, `#enrolment-dates`,
`#save-files-and-version-discipline`, `#equipment-access-and-adjustments` and
`#where-to-ask-what`, from the three briefs, the semester timeline and the
people page. The theme runs `remark-custom-heading-id`, so each heading pins
its old id with `{#...}` rather than trusting slug generation to land on the
same string. `spec/policies.test.ts` is the guard that made this cheap to do:
it already checked that every `/policies/#anchor` on the site resolves to a
heading id on this page, and that the required policy areas are still covered
by heading text. All 11 ids are in the built output.

Left the frontmatter alone. A concurrent session is redrawing the
illustrations and has an uncommitted `heroImageAlt` edit on this file; that
line is theirs, so this commit touches only the body. The two edits are
different hunks and will merge, but the file overlaps, so whoever commits
second reconciles.

Validation: `pnpm check` green --- 0 errors, 0 warnings, 0 hints, 38 tests, 52
pages, no broken links, no accessibility violations. Read the page in Chrome at
1920×1080 and 390×844 on preview port 4401, entering by `#anchor` rather than
scrolling so the jump offset got exercised too; the routing table stays inside
the theme's `.at-table-wrap` at 354px on mobile, no horizontal overflow.

### 2026-09-10 — Architectural SVG artwork

Remade all 17 course illustration assets as a coordinated set of architectural
models and drafting-table scenes. Kept the Slop palette, used shaded building
faces and planted streets to give the city imagery depth, and gave resources,
policies, teaching and assessments their own compositions. Updated image
alternatives to describe the replacement scenes. No curriculum changes; visual
verification applies rather than a content adversarial review. User requested
no commit and a dev server left running for review.

Final validation: `pnpm check` passed with 38 tests, 52 built pages, zero
warnings/errors, and clean link/accessibility checks. The first sandboxed build
could not resolve Google Fonts; reran with network access and confirmed clean
output. Checked the illustration set in Chrome and eight page types at
1920×1080 and 390×844 on confirmed preview port 4322; headings fit both widths.
Corrected streets protruding beyond the model base. Left the requested dev
server on 4321; stopped the separate verification preview. Nothing committed.

### 2026-09-10 — Distinguish the three assessment illustrations

User found A1–A3 too similar. Replaced the shared city-model composition with
three different visual structures in both heroes and cards: A1 is a circular
neighbourhood around a shared amenity; A2 is an exploded street/utility stack;
A3 is a dense city-wide river-and-transit map. Updated their image alternatives.

Validation: 38 tests pass, zero build/typecheck warnings or errors. Viewed the
assessment cards together and the three individual heroes in Chrome at both
1920×1080 and 390×844, using confirmed preview port 4322. The distinct circle,
exploded layers and river map remain recognisable at card size. No commit;
review dev server remains on 4321.

### 2026-09-10 — Refresh development image metadata

The review server returned HTTP 500 with a raw assessment image path reaching
Astro's image renderer. Restarting our dev process restored HTTP 200 and resolved
image metadata without source changes. Likely caused by production builds
rewriting Astro's shared content state while dev remained active. After future
build/preview checks, restart dev before handing its URL back for review.

Follow-up verification caught a separate image-endpoint failure: Astro reported
MissingSharp although importing the installed Sharp package directly succeeded.
Explicitly externalised Sharp in Vite SSR so Node loads its native module.
Confirmed all three assessment SVGs decode successfully in the live browser
(they failed decoding before this configuration change). This is an image
runtime fix, not a visual/layout change.

## 2026-09-10 — Rewrite README for current site state

Replaced the template README (starter/placeholder framing, empty CLAUDE.md,
STARTER_CONTENT-first evidence story) with a project README for the built
SLOP2418 studio: course thesis, what's shipped (12+12 weeks, decks, three
briefs, cast, policies/resources, spec suite), quick start, working rules,
coherence harness pointer, and a shortened platform section that still
documents collections, base path, decks and checks.
