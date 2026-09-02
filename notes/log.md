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
