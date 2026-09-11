# Deep audit — SLOP2418 against the Assignment 2 spec

Date: 2026-09-11. Audited at commit `b30e3497`, against the published brief and
spec pulled live from
`https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/api/assessments/assignment-2.json`
and the course-wide assessment page (`/topics/assessment/`).

Method: fourteen fresh Sonnet reviewers, each given the published brief, spec,
rubric and band descriptors plus one slice of the site, and instructed to be
adversarial and to report nothing if their slice held up. Four covered the
lectures (weeks 1–3, 4–6, 7–9, 10–12), four the studios (sessions 1–3, 4–6,
7–9, 10–12), and six the page-level slices (home + course record, assessments,
policies + resources + 404, people + listing pages, decks, process evidence +
harness). Every finding below that is marked **verified** was re-checked
against the source by the main agent; findings the main agent could not
reproduce are marked as such and should be treated with suspicion.

**Status: all findings below are fixed except §4.8's broken `PROCESS.md`
sentence, which is the author's own writing to repair.** See §9 for what
changed and what was deliberately not changed. The findings are left written in
the present tense, as they were found, so a future reader can see what the
audit actually caught rather than only the repairs.

---

## 1. Spec compliance — every line

| Spec line | State | Evidence |
| --- | --- | --- |
| Deployed and live at its public Pages URL by the deadline, working at both marking viewports | **Not verified here** — deployment is out of scope for this audit (CLAUDE.md forbids publishing without explicit instruction). Viewport behaviour verified locally: see §2. | — |
| One niche course under a `SLOPxxxx` code keeping the repo's three digits, across twelve dated teaching weeks | **Pass** | `src/course-config.ts`: `SLOP2418`, level 2 matching the code's first digit, `2027-02-22`–`2027-05-28`. 12 lectures + 12 studios, each dated on a Monday, one two-week break after Week 6. |
| At least one lecture carries a real deck, linked from its page | **Pass** — twelve decks exist, all linked via `slides:` frontmatter. Deck depth assessed in §5.6. | `src/decks/week-01…12.deck.mdx`; `astromotion` reports 12 decks, no structural violations. |
| Assessment that adds up to 100% | **Pass** | 25 + 25 + 50 = 100, asserted by `spec/assessment.test.ts`. Weights and dates cross-check against every lecture and session that restates them. |
| Own checks in `spec/`, protecting the course's promises; `pnpm check` and `pnpm check:evidence` pass | **Pass** | 9 test files, 41 tests, all green (38 at audit time; see §9). `check:evidence` green: 9 cited commits resolve. Check quality assessed in §5.7. |
| Evidence of process in the repo: `PROCESS.md`, `CLAUDE.md`, a commit history that grew with the work | **Pass with defects** — see §5.7. `PROCESS.md` is 616 words against a 400–600 guide and carries one broken sentence. | 80 commits, 2026-08-30 → 2026-09-11, distributed across every day in the window (3, 8, 15, 6, 12, 8, 11, 5, 2, 9, 1). |

No spec line is failed. The three highest-value findings in this audit are all
inside the *response* and *process* criteria rather than the spec gates.

## 2. Artefact criterion — mechanical state

All checks green and pristine, with zero warnings:

- `pnpm build`: 52 pages, no accessibility violations, all internal links
  respect base, no broken links, 12 decks structurally clean, course API
  33 nodes / 18 edges.
- `pnpm check`: 9 test files, 41 tests, all passing (38 at audit time).
- `pnpm check:evidence`: passes; 9 cited commits resolve.

Viewport verification (`pnpm preview` on port 4324, Chrome via `agent-browser`,
device emulation not window resizing, `innerWidth`/`innerHeight` asserted):

- **390×844, all 52 pages**: no visible element escapes the viewport outside a
  sanctioned `overflow-x: auto` wrapper. `scrollWidth === 390` everywhere. The
  sweep filtered out `display: none` subtrees and elements inside scrollable
  ancestors, so this is not the naive `scrollWidth === clientWidth` check that
  cannot see a clipped layout.
- **1920×1080, six marker-path pages** (home, `lectures/week-07`,
  `sessions/08-budget-under-cutback`, `assessments/02-…`, `policies`,
  `decks/week-03`): no overflow.
- Wide content tables sit inside `div.at-table-wrap` with `overflow-x: auto`
  and are genuinely scrollable (measured: `clientWidth` 354, `scrollWidth` 426
  on `lectures/week-07`). This is the correct pattern, not a defect.
- Decks fall back to a linear **Reading view** at phone width (`.reveal` is
  `display: none`); the reading view's tables fit inside 390px. This is a
  deliberate and working mobile affordance.

No artefact-criterion defect found. Deep testing (keyboard-only, resize
mid-interaction, slow connection — the HD descriptor for this criterion) was
not run; per CLAUDE.md that is on-request work.

## 3. Blocking findings

These are stated facts that are wrong, self-contradictory, or ask a student for
evidence the course cannot produce.

### 3.1 Week 10's own table lists five overlays, then calls them four — twice

**verified.** `src/content/lectures/week-10.md:60`.

> | McHarg's stacked constraint layers before siting | The ground pollution, air pollution, noise, water and fire-hazard info views, read in sequence over the same district | **The four overlays** disagree about where the good land is; the intersection of **all four** is much smaller than any one of them |

Five views named, "four" twice in the adjacent cell of the same row. It sits
directly under the page's own *Evidence standard* callout promising that "named
interface fields are direct readouts" — the precision breaks in the one place
the page claims precision. Two words fix it.

The same page also names the view inconsistently: `fire-risk` at line 25 (the
learning objective) versus `fire-hazard` at lines 60, 61, 97 and 102. The
learning objective's list ("pollution, water, wind and fire-risk" — four items)
also does not match the table's list for the identical McHarg point (five
items).

### 3.2 "Arterial" is presented as a Cities: Skylines II road tier; it is not

**verified.** `src/content/lectures/week-02.md:63` and
`src/decks/week-02.deck.mdx:112`.

> | Radburn's superblock and cul-de-sac | Road hierarchy — small road, medium road, **arterial** — and the traffic AI's pathfinding cost | … |

CS2's actual road-size categories are Small Roads, Medium Roads, Large Roads
and Highways. "Arterial" is generic traffic-engineering vocabulary, not a game
tier, and naming it as the third rung of *the game's* hierarchy also silently
drops the real fourth tier. Note the distinction: uses of "arterial" as
planning language elsewhere (`week-04.md:36,62`, `week-05.md:57`,
`week-06.md:21`, `decks/week-08.deck.mdx:242,263`) are correct and should not
be touched — Perry really did put arterials on the boundary. Only the two
places that present it as a CS2 road-hierarchy tier are wrong.

### 3.3 Session 6 offers "signal retiming" as a runnable instrument; vanilla CS2 has no signal-timing control, and the studio bans the mod that adds one

**verified.** `src/content/sessions/06-peak-load-stress-test.md:77–80`.

> Then choose one instrument: **signal retiming**, reallocating a lane to
> transit, shorter trips through mixed use, or peak pricing. The model cannot
> implement the last one; record that limitation instead of simulating it.

By disclaiming only peak pricing, the text asserts the other three are
implementable in-session. Vanilla CS2 has no traffic-light phase or cycle
editor; the only route to one is a third-party mod, and
`sessions/01-site-selection.md:13` forbids "simulation-altering mods". So the
instrument is neither native nor permitted under the studio's own rules.
("Reallocating a lane to transit" is fine — that is the road upgrade tool.)

### 3.4 Session 5's spec demands per-address evidence the course does not issue until Week 11

**verified.** `src/content/sessions/05-transit-spine.md:17` versus the same
file's body and `src/pages/resources/index.mdx:20`.

Spec line: *"You calculate which **issued sample addresses** fall within 400 m
walking distance along the street network, and name those that do not."*

The only walking-distance evidence the session body actually works with is an
aggregate: *"The reference alignment puts 62% of sampled residents within 400 m
walking distance along the street network. That leaves 38% outside it."* And
the resources page, which enumerates exactly what is issued per week, reserves
that device for a different week entirely: *"**Week 11** supplies the address
sample and land-value normalization sheet."* Week 11's lecture corroborates
that per-address sampling is introduced there for the first time. A student
following Week 5 as written has no address list to name anything from.

### 3.5 Session 1 requires an economy-panel baseline no room step produces, on a save that should not have one

**verified.** `src/content/sessions/01-site-selection.md:89` versus lines
31–45 and the spec at line 14.

Exit requirement: *"Leave with the untouched save, the one-page report, and
these baselines: **−₡2,400/month against a ₡75,000 opening grant**; 1.2 km at
1.8%; 4.1 km at 6.2%; land value 14 on the Reach and 22 on the Ridge."*

The road and land-value figures trace to described room steps (the road tool at
15:00, the land-value overlay at 14:55). The fiscal pair does not: the room
sequence opens natural resources, water, wind, terrain and outside connections,
then land value, then the road tool. No step opens the economy panel.
Compounding it, the session's own spec fixes the save as *"loaded in a new save,
not regenerated, with **no roads placed**"* — a save with nothing built has
nothing generating a recurring monthly deficit. `₡75,000` and `₡2,400` appear
nowhere else in `src/`.

### 3.6 Session 2 requires a "named dwelling address" that no step establishes, and Session 3 depends on it

**verified.** `src/content/sessions/02-block-pattern.md:18,89` versus
`03-zoning-the-district.md:15`.

Session 2's spec and its exit list both require *"one named dwelling address"*.
Nothing in "What to bring", "What happens in the room", "The paired test" or
"The one question" instructs a student to pick, name or record one — the room
sequence covers presentations, redundancy testing, the `kerrow-ref-w02-*`
reference pair, four desk-crit rotations, and zoning the personal quarter.

Session 3 then builds its headline tradeoff on that missing artefact: *"You have
chosen one dwelling by address in your quarter, and every commute distance you
quote this week is measured from it."* This is the one evidence-chain break in
the audit that propagates into a later week's assessed reading.

### 3.7 Session 10 requires the personal save "at the recovered state"; nothing in the session recovers it, and Session 11 demands it

**verified.** `src/content/sessions/10-hazard-scenario.md:27–28,58,85–87` versus
`11-reading-the-land-value-curve.md:23`.

The only thing the session ever does to the student's own district is branch it,
untouched, *before* anything is loaded: *"Before opening any of them, branch the
personal district as `<student ID>-w10-pre`. **There is no 19-day live run.**"*
Everything subsequently loaded is an issued reference checkpoint —
`kerrow-ref-w10-d0`, `-d3`, `-d6`, and at 14:40 *"load `-recovered`"*, which by
the naming pattern established two paragraphs earlier is the issued file, not
the student's.

Yet the exit list reads: *"Leave with `<student ID>-w10` **at the recovered
state**, `-w10-pre`, the two-column fault sheet, three named screenshots and the
costed exposure statement. Copy **both saves** off-machine."* "Both saves"
confirms two files are expected, but only `-w10-pre` has a described origin. No
step advances, damages or recovers the personal district.

Session 11 then makes it a hard prerequisite: *"Bring `<student ID>-w10` at the
recovered state and all ten weekly saves from `w01` to `w10`."* This is the
second instance of the §3.6 pattern, and the more consequential one — it sits at
the Week 10 → 11 hinge, the last handoff before the capstone.

Fix is small: either state plainly that the issued `-recovered` checkpoint is
saved as the student's own `<student ID>-w10` record, or drop the recovered-state
framing and have Week 11 ask only for `-w10-pre` plus the fault sheet and
exposure statement, which the session does produce.

### 3.8 "Wind" appears as a first-class info view inside a testable `spec:` block

**verified.** `src/content/sessions/10-hazard-scenario.md:13,23,46`.

This is the §5.4 `polish` item escalated, because in Session 10 it is not
descriptive prose — it is a spec line and an in-room instruction that treats
wind as a panel a student opens and stacks:

> spec: *"You arrive with the Week 9 save and the **fire-hazard, wind and
> electricity views** already checked over your own district."*
> body: *"Begin by **stacking** the fire-hazard, wind, power-transmission and
> Thackray Cut geometry."*

Confirmed against the CS2 wiki: wind speed and direction are an optional terrain
overlay *inside* the Electricity, Industrial and Air Pollution views. There is
no Wind view to open, close or stack. Listing it as a peer of Fire & Rescue and
Electricity, in a `spec:` line a student is meant to satisfy, is the one place
this error asks for an action that cannot be performed. Three reviewers flagged
the wind claim independently, in three different slices.

## 4. Substantive findings

These cost marks on *response* or *process* without being factually wrong.

### 4.1 The home page promises a weekly studio pin-up; nine of twelve weeks are desk crits

**verified.** `src/pages/index.astro:82–84`.

> Twelve teaching weeks, **one lecture and one studio pin-up each**, a two-week
> break after Week 6, and **three assessed juries** along the way.

The sentence contradicts itself — "pin-up each" against "three juries" — and
contradicts the rest of the site. `policies/index.mdx:67` names three distinct
formats: *"Attendance at the crit — desk crit, pin-up or jury, whichever the
week calls it — is expected in all twelve studio sessions."* Only sessions 04
and 09 contain the word "pin-up"; session 12 is a jury; the other nine are desk
crits. This is on the first screen a marker reads, and it is checkable in one
click through to Sessions.

### 4.2 Week 3's lecture sells the zoning scheme as the student's own bet; the session commits Scheme A for everyone

**verified.** `src/content/lectures/week-03.md:17,73–77` versus
`src/content/sessions/03-zoning-the-district.md:16,81–84`.

Lecture: *"the zoning scheme **students choose** this week is a decision about
which of those two costs they would rather carry"* and *"Both are buildable this
week; only one can be defended without naming what it cost."*

Session: *"You build **Scheme A (separated, the assessed branch)** in the
assessed save and Scheme B (adjacent, a counterfactual) in a sandbox"* …
*"**commit Scheme A** to `<student ID>-w03`."*

Every student commits the identical scheme. Assessment 1 then asks memos to
cite "the Week 3 scheme" (singular), consistent with the fixed outcome. A
marker reading only the lecture page — which is exactly the ten-minute read
pattern — will believe students choose.

The lectures-1–3 reviewer extended this into a broader claim worth recording:
of the semester's first three named tradeoffs, Week 1's site choice is also
cohort-fixed and openly says so (*"The cohort continues on Halstead Reach"*),
leaving Week 2's 80 m/160 m block dimension as the only one of the three that
genuinely forks per student. Week 1's version is honestly disclosed on both
pages, so it is not a contradiction — but for a course whose pitch is that
every decision costs *the person who made it*, two of the opening three
decisions are argued on paper rather than enacted.

### 4.3 The resources page is the one place the site drops its register and calls itself a prototype

**verified, and deliberate.** `src/pages/resources/index.mdx:22`.

> **About this fictional course:** the share, lab and enrolment arrangements
> above describe how SlopU would run the studio; **this prototype** does not
> operate an LMS or distribute runnable game-save binaries. … **A real
> delivery** must issue and validate the version manifest and resource pack
> before requiring a live run.

Every other evidentiary hedge on the site stays in genre — the *Evidence
standard* callout repeated in all twelve lectures reads as studio rigour about
provenance ("direct readout" versus "worked hypothetical"). This paragraph
instead addresses a marker, not a student.

`notes/log.md:1394` shows this was a considered call ("the fictional course
share is explicitly not a working LMS"), made to avoid promising a share folder
and save binaries that do not exist. That is a real tension, not an oversight:
the anti-fabrication instinct is right, and the register break is the price.
The finding stands because the same honesty can be had in-genre — name the
reference outcomes as worked hypotheticals prepared for teaching and tell
students to match the technicians' published checksum, without the words
"fictional", "prototype" and "a real delivery".

### 4.4 The lectures index has no framing prose — pure logistics on the page a marker uses to pick weeks

**verified.** `src/pages/lectures/index.mdx:12`.

The entire prose block above the twelve-card grid is times, dates, the break,
what to bring, and an upload deadline. Nothing about the arc: why Week 7
(infrastructure) follows Week 6 (traffic), or the three-metric thesis the rest
of the site organises itself around. The sessions index one file over at least
gestures at continuity (*"decisions made in one room become the constraints,
comparisons and jury questions in the next"*); the lectures index does not do
even that. This is the page a marker reads to decide whether the semester has a
shape before clicking into "a few non-adjacent weeks".

### 4.5 Marisol Quaye's bio omits Week 11, which she solely teaches

**verified.** `src/content/people/marisol-quaye.md:4–5,33–34` versus
`src/content/lectures/week-11.md:10` and
`src/content/sessions/11-reading-the-land-value-curve.md:10`.

Her card says she *"chairs the Week 4 and Week 12 juries"*; her body says she
*"takes the Week 1 and Week 3 lectures … and chairs the Week 4 pin-up and the
Week 12 capstone review."* She is the **only** named teacher on both the Week 11
lecture (*"What the Model Can't Show You"*) and the Week 11 studio, and Week 11
is arguably the most thematically loaded week in the course. Her own page is
silent on it. Every other staff-to-week mapping checked out exactly (Idris
Fenn 2/5/6, Nadia Ilkhom 7/10, Tobias Wren 8/9, Sunniva Marek juries 4/9/12),
and no person is orphaned in either direction — this is the one gap.

### 4.6 Session 9's jury callback can only draw from the first half of the roster

**verified.** `src/content/sessions/09-public-realm-build.md:55–61`.

> At 14:00 the jury walks the **first eight** plans in roster order, then the
> second eight **after a recess**. … **During the recess**, Tobias Wren and
> Sunniva Marek choose three plans they disagree about. Those return for six
> minutes each before the whole room.

"The recess" is the one named a sentence earlier, between the two halves. If
callbacks are chosen during it, only the first eight are eligible, and there is
no second recess after the last eight. A second-half presenter has no path to
the six-minute return, and the "three plans they disagree about" are drawn from
eight, not sixteen — in a session whose identity is precisely clocked, fair jury
time.

### 4.7 Session 4 declares land value a livability reading; Weeks 3 and 8 treat it as fiscal

**verified.** `src/content/sessions/04-upzoning-the-amenity-core.md:67–68`.

> **Livability moved the wrong way.** Happiness fell from 72% to 69%, even as
> land value rose from 24 to 31. **Both are livability readings**; quoting
> either one alone reports half a metric.

Session 3 puts land value on the fiscal side: *"Strict separation lifted land
value and **balanced the books** by lengthening every trip."* Week 8's whole
lecture is land value as fiscal capture: *"Public investment creates land value
that a district can recapture."*

Underlying this: the site never publishes a canonical statement of which panel
each of the three metrics is read in. Week 1's learning objective promises
students will *"name where each one is read in the simulation"*, and
`policies/index.mdx:140` names the three metrics, but no page fixes the mapping.
That is why a load-bearing overlay can be assigned to two different metrics in
different weeks without any check noticing. The honest reading is that land
value is genuinely dual — it feeds both desirability and rate take — in which
case the flat assertion "both are livability readings" is the thing to soften,
and a short canonical definition somewhere would prevent a recurrence.

### 4.8 `PROCESS.md` carries a broken sentence, in the document graded on legibility

**verified.** `PROCESS.md:33–34`.

> The assessments had to follow the same argument: if students were learning to
> make trade-offs, the marking criteria had to assess those decisions. **The
> agent `spec/assessment.test.ts` to fail first, and it did.**

Missing verb — presumably "wrote" or "was told to write". Introduced in the
rewrite commit `5f79a411`. This is the single most damaging item in the audit
relative to its cost to fix: process is 45%, this file is the whole of it, and
the defect reads as a dropped edit rather than prose.

Three smaller items in the same file:

- **Word count 616** against the spec's 400–600 guide. There is no word-limit
  penalty and under 3% over is not "badly overshoots", so this is a note, not a
  defect.
- **`b9162255` does not support the claim it is attached to.** *"Splitting
  twelve lecture plans across four agents produced four drafts in roughly the
  time it took to write one, so I added that approach to the harness
  ([`b9162255`])."* The commit adds the generic *Parallel implementation*
  section to `CLAUDE.md` and contains no mention of twelve lecture plans, four
  agents, or timing. It supports the second half of the sentence (the harness
  change) but not the efficiency claim, which is inherently uncitable. The
  anecdote itself is real — `notes/log.md:291,395` records "Ran four subagents
  in parallel, three weeks each". Worth noting the narrative does resolve
  correctly later: that `CLAUDE.md` section is no longer present, replaced by
  *"Avoid spawning subagents unless we're doing adversarial review"*, which
  line 61–63 cites (`4d06839c`).
- **The "less successful" topic sentence undersells its own best evidence.** The
  paragraph opens by calling parallel agents "less successful", then describes a
  speed win, then describes three genuine cross-agent continuity failures (three
  district names, a cohort-size contradiction across three weeks, all checks
  still green) and a deliberate refusal to decide Week 12's format under time
  pressure. That is the account's strongest demonstration of "failures diagnosed
  at the harness level rather than retried" — the HD descriptor — and the topic
  sentence buries it.

The strongest passage, by contrast, does clear the HD bar, and is worth
protecting in any edit:

> Reviewers missed things too. A fresh reviewer checked every number on my
> rewritten home page against its source and approved it. When I reread it, I
> told the agent it was slop: the numbers were correct, but the sentences were
> difficult to follow without already knowing the course. … I ended up with
> tests holding consistency, reviewers holding accuracy, and my own judgement on
> whether the writing was worth reading.

That names a failure of the review process itself, diagnoses why, and states
the resulting three-layer model. That is "how you knew the result was right
before accepting it", not "I ran a review and it passed".

### 4.9 `README.md` points a reader at `PLAN.md` for "how it was built"; `PLAN.md` describes a repo that no longer exists

**verified, with a correction to the reviewer's reasoning.** `README.md:16–18`.

> The design argument, how it was built, and the agent harness are in
> [`PROCESS.md`](PROCESS.md), [`PLAN.md`](PLAN.md) and [`CLAUDE.md`](CLAUDE.md)
> respectively.

`PLAN.md` still opens *"Status: partly built. … every page body is still a
placeholder"* and its §11 still says `pnpm check:evidence` is *"red —
deliberately"*, that *"`PROCESS.md` is still template boilerplate"* and that it
cites two hashes that do not exist. None of that is true of the shipped repo. A
marker following the README's own pointer lands on a stale planning snapshot
that contradicts the site.

The reviewer additionally claimed `PLAN.md` "was written once and never touched
again". **That is wrong** — `git log -- PLAN.md` shows seven commits, the last
being `b4416637`. The staleness is real; the "never touched" reasoning is not.

### 4.10 Three of five staff bios use the same rhetorical move in the same slot

**verified.** `idris-fenn.md:21`, `marisol-quaye.md:19–25`,
`tobias-wren.md:19–21`.

Each ends its opening career sentence with a factual clause punctured by an
ironic `which`-clause: *"…**which they describe as** 'being paid to tell people
their arterial widening would not work…'"*; *"…**which turns out to be** a less
cheerful story than the corridor's brochures suggested"*; *"…**which they
maintain** is a shorter journey than it sounds."* Idris and Tobias additionally
open with the identical numeral ("six years") for two different careers.
Individually each line is good; stacked, the set reads as one template applied
five times rather than five voices. This is the only place in the audit where a
voice finding held up — no reviewer found generated-filler cadence anywhere in
the twelve lectures, twelve studios, three briefs or the policies page.

### 4.11 No hardware floor is stated anywhere on the site

**verified.** `policies/index.mdx:225` says only *"Cities: Skylines II, which
needs a reasonably capable machine. You do not need to own one."*
`resources/index.mdx:18` directs students to *"Materials / Setup"* for the exact
version — a folder that exists only as in-universe reference. A repo-wide grep
for GPU/RAM/CPU/system-requirement terms across `src/pages/` and `src/content/`
returns nothing. A student installing at home has no floor to check against.

Whether this matters is a judgement call: the site's position is that the lab
provides machines and technicians own the build, which is internally coherent
and dodges a number that would date. But "bring-your-own is first"
(`policies/index.mdx:228`) makes the self-installing student the *default*, and
that student gets no answer.

### 4.12 `week-09.md` uses "Deliverable C" as a term defined only inside the deck

**verified.** `src/content/lectures/week-09.md:92` cites *"**Deliverable C**"*.
The A/B/C labels exist only in `src/decks/week-09.deck.mdx:57–59`; the
assessment page lists the same three items as unlettered bullets. A reader who
stays on the lecture page — the stated ten-minute skim pattern — hits an
unanchored label.

## 5. Slice-by-slice verdicts

### 5.1 Lectures 1–3
Citations spot-checked and accurate throughout: Geddes, McHarg, Lynch (both
books), Henry George, Hippodamus/Aristotle, Jacobs (both the short-blocks and
mixed-primary-uses attributions match her actual condition ordering),
Stein & Wright/Radburn, Alexander, Hillier & Hanson, Howard, *Euclid v. Ambler*
(the "pig in the parlor" quote is verbatim and correctly attributed to
Sutherland at 272 U.S. 388), Perry, Duany/Plater-Zyberk/Speck. No invented or
misattributed source. CS2 zoning palette, building levels 1–5 and named info
views correct apart from §3.2. Numeric continuity lecture → session →
assessment unusually tight. Findings: §3.2, §4.2.

### 5.2 Lectures 4–6
Holds up well. The escalation is combinatorial, not relabelled repetition: Wk3
trades livability/mobility, Wk4 livability/fiscal, Wk5 mobility/fiscal, Wk6
mobility/livability. Every citation verified real and correctly attributed
(Downs 1962, Duranton & Turner 2011, Braess 1968, Wardrop 1952, Buchanan 1963,
Thomson 1977, Mogridge 1990, Calthorpe 1993, Lynch 1960, Walker 2011, Vuchic
2005, Cervero & Kockelman 1997, Perry 1929, Moreno et al. 2021, Jacobs 1961);
the reviewer specifically tried to break the Jacobs "Ch. 7 and Ch. 11" citation
and confirmed it correct. Arithmetic that matters is right, including the
traffic-noise 10·log₁₀(1.5) ≈ 1.8 dB and the saturation-flow capacity maths.
Week 6 explicitly flags its own deck/studio divergence, which is the behaviour
the rest of the site should copy.

Two findings, both small:

- **`substantive`, verified.** `week-04.md:80` calls the pre-deadline homework
  *"both **twelve-month** clinic branches"*. `grep -rn "twelve-month" src/`
  returns exactly one hit — this line. Everywhere else the same homework is
  *"three-cell"*: `assessments/01-neighbourhood-unit-plan.md:90` (*"the issued
  three-cell scaffold"*), `sessions/04-upzoning-the-amenity-core.md:19` (*"the
  issued three-cell clinic branches"*), and the Week 4 deck (*"a catchment
  shared by three cells"*). Nothing in the course runs a simulated year per
  branch; the deck's clinic figures are static monthly arithmetic. One word.
- **`polish`, verified.** `decks/week-05.deck.mdx` prices vehicles at a flat
  ₡1,150/vehicle/month (1×1,150 … 5×5,750, exact multiples);
  `sessions/05-transit-spine.md:65` allocates *"₡4,800/month"* to a four-vehicle
  service, where the line predicts ₡4,600. Both are explicitly labelled worked
  worksheet figures, and no marker cross-multiplies two pages — but it is a real
  slip. Either 4,600, or a clause noting a fixed depot component.

### 5.3 Lectures 7–9
The strongest slice in the audit. No blocking finding. The escalation is real:
Week 7 is a diagnostic clinic with no personal stakes, Week 8 a forced
publicly-declared cut carrying no assessment weight, Week 9 an assessed jury
worth 25% with a visiting critic and a four-minute defence. CS2 claims were
checked against game documentation and are accurate, including the three most
falsifiable ones — per-education-level residential tax rates, the budget panel's
four zone-type revenue lines, and service sliders at ~80% reducing delivered
output rather than only cost. Citations all real and correctly attributed
(Star, Hughes, Perrow, Tarr, Graham & Marvin; George, Stiglitz/Arnott, Tiebout,
Vickrey, Shoup; Jacobs, Whyte, Oldenburg, Gehl, Alexander), including Whyte's
"one linear foot of sitting space per thirty square feet", Alexander's Pattern
61/106 numbers, and the Henry George theorem's actual authors (Arnott & Stiglitz
1979).

Two items worth recording because they will otherwise be re-flagged:

- **Halstead Reach vs Ockley Green plazas is not a contradiction.** Halstead
  Reach is the cohort's build site, established Week 1; Ockley Green is a
  reference site reused for worked numbers across Weeks 8, 9 and 11. The
  convention is applied consistently site-wide.
- **`polish`, verified.** `week-08.md`'s one-line studio summary says
  *"protecting both **funded** utility increments"*, while
  `sessions/08-budget-under-cutback.md` says *"the exercise does not assume
  either was built"* — funding them is Line zero of the exercise itself. Not a
  factual contradiction, just an imprecise tense that pre-empts the session's
  own sequencing.

Finding: §4.12.

### 5.4 Lectures 10–12
The closing arc genuinely closes. Week 10 reburns the Week 1 rejected site
(Verrall Ridge / Ludworth Bench), turning a Week 1 aside into a Week 10 load
case. Week 11 is the payoff of the Henry George / land-value thread Week 1
seeds, not a bolted-on ethics week; its upzone/hold tradeoff is a rare case of
one biting on the readout itself (*"livability reads as rising too"* when it
should not — a deliberate critique of the simulation's own metrics). Week 12's
five-move walkthrough and "fourth question" force synthesis of all three
metrics, and require Week 11's omissions appendix at the front of the memo.
Citations all verified real and correctly represented, including Marcuse's
four-form displacement typology and Lynch's five-dimension/two-meta-criterion
framework.

Findings: §3.1, plus one `polish` — **"wind" is treated as a standalone info
view** (`week-10.md:25,61,97,102`; also `week-01.md:60` and
`sessions/01-site-selection.md:33`, which opens *"five views … natural
resources, water, wind, terrain, outside connections"*). Confirmed against the
CS2 wiki independently of the reviewer: wind speed and direction are an optional
terrain overlay *inside* the Electricity, Industrial and Air Pollution views,
not a view of their own. "Fire Hazard" is likewise the headline metric inside
the Fire & Rescue view, and "power transmission" is shorthand for Electricity —
both defensible as shorthand. "Wind" as its own toggleable view is the one claim
here a student could not act on. Two reviewers flagged this independently.

### 5.5 Studios
Covered in §3.3–3.6, §4.6 and §4.7. What holds across all twelve:

- **The save chain is unbroken end to end**: w01 (untouched) → w02 (Brayhurst
  zoned) → w03 (Scheme A) → w04 → w05 → w06 → w07 → w08 → w09 (*"exactly as
  submitted"*, per session 10) → w12, with each session opening what the last
  one saved under the same naming convention.
- **The tradeoffs bite with real, opposite-direction numbers**, not
  instructions to "consider" them: Session 1's ₡ cost delta against a
  land-value gap between two numbered sites; Session 2's 38%→24% walk share
  against ₡310/month-per-1,000-residents upkeep; Session 3's 3.2 km/one
  crossing against 0.8 km/no crossing; Session 4's happiness 72→69 against land
  value 24→31; Session 5's fiscal balance +₡2,100 → +₡400; Session 6's
  11.2 → 8.9 → 10.7-minute partial-refill trajectory; Session 8's 22% cut
  forcing the bus fleet 4→3 and the headway 6→8 minutes (arithmetic correct);
  Session 9's ₡2,540/month new spend against a protected ₡5,100 treatment line.
- **No duplicate session.** Sessions 5 and 6 were specifically probed as the
  most likely pair — transit-line design and headway/subsidy arithmetic versus
  road-capacity/induced-demand diagnosis, different metric pairings. Genuinely
  different work.
- **Sessions 7–9 disclaim mechanics the game does not model** (pipe pressure,
  boil notices, backflow) rather than inventing them — the opposite of the
  §3.3 failure mode, and the pattern the rest of the site should follow.

One `polish` in session 8: *"three captioned screenshots"* with no named
subjects, where session 7 enumerates its four exactly (*"both availability
views, the river-pollution overlay and the facility-cost comparison"*). A
student can infer the three; it is not stated.

One `substantive` in session 12: **the jury schedule has no slack for the
changeover it requires, on hardware it constrains.** `12-final-jury.md:28,31,
38–39,93–96`. Eight students per room × 15 minutes = exactly 120 minutes,
filling 13:00–15:00 with nothing left over. But the session specifies *"Test
**the one presenting machine** in each room and open every save during the
hang"*, the order draw happens at 12:50 — after the 12:15–12:50 pre-check window
closes, so a late-drawn student's save cannot stay loaded — and each presenter
must, immediately before standing up, *"Open `<student ID>-w11` and continue it
as `<student ID>-w12`. Pause it at 08:00 and full district extent. Pre-check the
views."* That is a per-student load-and-pause of a semester-deep save on a
shared machine, with zero minutes reserved for it. Week 9's jury handles the
same problem explicitly (*"four minutes, **with changeover inside the clock**"*)
despite facing the easier constraint. *"Each defence is fifteen minutes, not
twenty"* reads as a deliberate tightening; the tightening removed the slack the
changeover needs.

One `substantive` in session 2 worth listing separately from §3.6:
**"Sallow Head" is an orphan proper noun.** `02-block-pattern.md:24` refers to
*"the 1.2 km **Sallow Head**–Dunthorpe spur"*. The 1.2 km figure identifies it as
Session 1's Halstead Reach → Dunthorpe route, built as homework between weeks —
but `grep -rn "Sallow" src/` returns exactly this one line in the whole repo.
Every other place name in the course (Halstead Reach, Ludworth Bench, Thackray
Cut, Ombersley Flats, Pellow cells, Hessel Row, Brayhurst quarter, Pelling
Cross, Kerrow corridor) is introduced once and reused. A student reading Week 1
then Week 2 has no way to know this is the road they just built.

### 5.6 Decks
**All twelve clear the "real deck" bar.** Each has a distinct structure, a
recognisable build (survey → theory → worked numbers → named tradeoff →
assessment/jury payoff) and a point it arrives at — an `_class: impact` or
`_class: banner` tradeoff-of-the-week slide in every deck except Week 12, which
closes on its own *"The tradeoff, named"* impact slide. None reads as a bulleted
restatement of its lecture page: the decks carry the arithmetic, diagram and
table load while the lecture pages carry citations and studio logistics. Weeks
7, 9, 11 and 12 have the most load-bearing tables (reverse-salient cascade
arithmetic, the plaza-versus-squares costing, the Toulmin six-field structure)
and could not be flattened to a list without losing their comparative force.

**Not templated.** Slide counts range 14–18, section headings differ, and
`CourseDiagram` usage ranges from 0 to 6 calls per deck. `theme.css` applies one
shared visual identity across all twelve by design (its own comment: *"The rule
is shared by all 12 decks."*) — shared styling, not shared content structure.

**Diagrams are accurate and earn their place.** All 22 distinct `kind="…"`
values used across the twelve decks have a matching case in
`CourseDiagram.astro`; none falls through to the "Diagram unavailable" fallback.
Each diagram's caption ties the drawing to a claim the surrounding prose makes,
and `value-history` in Week 11 is explicitly labelled a *derived measure*
("reconstructed from named weekly saves, not emitted by the game") — the
evidence-labelling convention holding even inside a diagram.

One finding, and it is the sharpest of the audit's factual items because it is
checkable by counting:

- **`blocking`, verified. Week 9's lecture page cites the wrong deck slides, in
  the one paragraph a marker is most likely to spot-check.**
  `src/content/lectures/week-09.md:88–93`:

  > … slides **3, 14, 15 and 16** are the brief, the central decision, the
  > tradeoff and the jury's questions respectively. **Livability 45** is carried
  > by slides 5 to 13; **fiscal 30** by the upkeep figures on slides **8, 13 and
  > 14** …; **mobility 25** by the footpath-connection argument on slide **15**.

  Independently enumerated `src/decks/week-09.deck.mdx` (frontmatter stripped,
  headings extracted): 3 = *"Assessment 2, walked"* ✓; 14 = *"Alexander, with
  the numbers"*; 15 = *"One plaza, or eleven squares"*; 16 = *"Livability
  against fiscal performance, at ₡310 a month"*; 17 = *"Five things the jury
  will ask"*. So the central decision is slide 15, not 14; the tradeoff is 16,
  not 15; the jury's questions are 17, not 16 — the citation is off by one from
  slide 14 onward, and the actual jury-questions slide is never cited. The
  fiscal citation is worse than off-by-one: slides 8, 13 and 14 are Whyte's
  sittable-space table, Gehl's taxonomy plus the 19:00 protocol, and Alexander's
  dimension rule — **none carries a monetary figure**. Every cost in the week
  (₡96,000/₡72,600 build, ₡6,800/₡3,410 upkeep) is on slide 15, verified by
  reading the slide. And the footpath-connection sentence attributed to slide 15
  is on slide 16.

  Fix: cite 3, 15, 16, 17; move the fiscal citation to 15; move the
  footpath-connection citation to 16. Better still, write them as slide
  *names* rather than numbers, so a future reorder cannot silently break the
  lecture page again — the same fragility produced this defect.

One item the reviewer called blocking that is **ambiguous rather than wrong**,
recorded so it is not over-corrected: `week-12.md:88` says the chosen position
*"becomes the plan's headline claim on **slide 6**"*, while
`decks/week-12.deck.mdx:114` says the claim goes on *"**slide one** of your
pin-up"*. Deck slide 6 is *"The six fields, filled in"* — the worked example
where the claim is in fact demonstrated — so read as a deck reference the
sentence is correct. Read as a reference to the student's own pin-up, which
"the plan's … claim" invites, it contradicts the deck's table. It is worth
disambiguating (drop the number, or say "slide one of your pin-up"), but it is
not a factual error.

### 5.7 Process evidence and harness
Covered in §4.8 and §4.9. What holds:

- **All nine citations resolve and, with the one exception in §4.8, accurately
  represent their commits.** Each was diffed against the sentence attached to
  it. `cf34a0b9`, `7c130251` and `b4416637` are unusually precise — the commit
  messages themselves carry the exact numbers the prose paraphrases (sixteen
  students, the four-minute clock, the Ondrey escarpment). `be5bc71a` was
  checked against its pre-image: the deleted `assignment-1.md` frontmatter
  really did carry *"Response to the brief (60) / Quality of execution (40)"*.
- **Nothing claimed to be in the harness is absent from it.** The
  `weeklyAnchors`-first rule is at `CLAUDE.md:25–27`; the rejected alternatives
  ("word counts and boilerplate detection") are independently forbidden at
  `CLAUDE.md:27–29`; `spec/course-coherence.test.ts` does what the prose says.
  The "what I left out" claim is corroborated by the harness itself, not just
  asserted.
- **The spine the brief asks for is present and explicit** — a course-design
  decision, the `CLAUDE.md` rule and `spec/` check that encode it, and the
  check that was deliberately rejected.
- **The commit history is credible.** 80 commits over 13 days, distributed
  daily, with substantive messages that read like incident reports rather than
  "update files". `spec/data-integrity.test.ts` has exactly one commit against
  it — the initial one — so the never-edit rule was honoured, not just
  asserted.
- **One structural consequence to note, not a defect.** `CLAUDE.md` forbids
  committing a red state, so the history is a sequence of already-green
  checkpoints. `PROCESS.md`'s TDD claim ("to fail first, and it did") has no
  red-state commit to point to by design: `be5bc71a` adds the test and the
  passing implementation together. A marker following citations into the
  history will not find the failing state anywhere. Worth a clause in
  `PROCESS.md` acknowledging that the harness's own rule makes the red state
  unciteable.

**Check quality.** Strongest: `spec/course-coherence.test.ts`'s `weeklyAnchors`
table — a real, falsifiable per-week promise that fails the instant two weeks
converge on one topic, which is exactly the failure mode the brief names.
Runner-up: `spec/lectures.test.ts`'s arithmetic checks
(`"reconciles the published utility chronology"`,
`"balances the resource worksheet's 22% cut without spending the protected
utilities"`) re-derive numbers quoted in prose from the source tables and assert
they match — a check built in response to the bug `cf34a0b9` found, i.e. a
failure fixed at the harness level.

Two weaknesses in the suite:

- **`spec/lectures.test.ts`'s `lectureHtml.length > 8_000`** is a raw
  HTML-length threshold sitting next to a `STARTER_CONTENT` check that already
  does the real work. It is a gameable, content-blind proxy of exactly the kind
  `CLAUDE.md` warns against.
- **`weeklyAnchors[12]` is `/comprehensive|capstone|jury|plan/i`** — found by
  the main agent, not a reviewer. The `plan` alternative is so generic that
  almost any text in a planning course satisfies it, so for week 12 the anchor
  barely constrains anything. Verified that both week-12 pages already match on
  `comprehensive`/`capstone`/`jury`, so dropping `|plan` costs nothing and
  restores the check's teeth.

Nothing else in the suite is tautological or trivially satisfiable:
`assessment.test.ts` goes past the 100% sum to check the three named metrics
appear in every weighted brief's criteria; `calendar.test.ts` asserts the
Monday-only shape and exactly one two-week break; `policies.test.ts` checks
every deep link into a `/policies/#anchor` across the whole built site resolves
to a real heading.

### 5.8 Assessments
**No findings.** The tightest-argued part of the site. Every number, deadline
and named artefact in the three briefs is corroborated elsewhere: defence
lengths (6/4/15 min) are each explicitly reconciled against the ordinary
five-minute crit protocol at `policies/index.mdx:206–209`; word caps
(800/1,200/1,600), hang windows, screenshot lists with caption requirements,
and save-file naming are all exact. Every criterion traces to a named week's
teaching and the site says so explicitly rather than leaving it implicit
(A1's 40/30/30 mapped to Week 4 deck slides; A2's 45/30/25 mirrored in Weeks 8
and 9). Every artefact demanded — reverse-salient card, corridor budget sheet,
signed unfunded list, omissions appendix, the Toulmin
claim/grounds/warrant/qualifier/rebuttal structure — is taught before it is
required. Nothing assessed is untaught. The escalation is real: A3 adds
holistic marking, a Toulmin structure, a hazard-resilience question tied to
Week 10, and an equity appendix, so it is more than A1+A2 at larger scale.

The one thing the reviewer would improve is cosmetic and it declined to raise
as a defect: `MarkingModel.astro` is a bare weight table with no per-criterion
descriptor of its own, relying on the prose above it and the policies page. In
context the page reads fine.

### 5.9 Policies, resources, 404
Findings: §4.3, §4.11, plus one `polish` — **the 404 body has no studio
vocabulary at all** (`src/pages/404.md:11–15`), while its own hero alt text
(*"A transit corridor leaves a miniature district and ends at a striped
construction barrier"*) carries flavour the copy never picks up. Lowest-priority
item in the audit.

What holds, and holds well: the five student questions tested (late work, missed
jury, group vs individual, save corruption, mods and assets, AI use, integrity
when an algorithm laid out your roads) are answered specifically and with
course-specific teeth. The authorship section — *"advice taken is advice
named"*, the district-is-yours rule — is the strongest writing on the page and
is exactly the niche, non-boilerplate policy the brief rewards. Every
cross-check against the briefs, sessions and people pages came back consistent:
jury chairs, the 6/4/15-minute defence overrides, the 22% cut and its
arithmetic, the ₡186,000 reserve, the fine-weather/polygon evidence protocol,
and the marking-band language all match exactly across pages. The
"worked hypothetical" evidence-labelling convention running through all twelve
lectures and the resources page is a genuine throughline tying policy back to
the systems thesis.

### 5.10 Home page and course record
Findings: §4.1, plus one `polish` — **"You will be assigned a district and a
save file in week one"** (`src/pages/index.astro:37`). Week 1 has the cohort
survey two sites and converge (*"The cohort continues on Halstead Reach"*), and
`policies/index.mdx:138` says *"Everyone in this studio builds on the same site"*.
What is individually theirs is the save file, not a distinct district.
"Assigned" slightly overclaims; "settle on a site and start a save file" matches
the mechanic.

What holds: the **Wickstead tradeoff example** (11.2 → 8.9 → 10.7 minutes, two
to four lanes) is reproduced verbatim and consistently in `week-06.md` and
`sessions/06-peak-load-stress-test.md` — a genuine falsifiable worked example
carrying the thesis rather than asserting it, and the strongest thing on the
page. Marisol Quaye's quote is word-for-word her people page. The three metrics
are used identically site-wide. Assessment weights, dates and break placement on
the timeline match the content frontmatter exactly. `course-config.ts`'s
description is 239 chars (in the 80–300 bound), level 2 matches "second-year",
and the code matches the resources page's share naming. Hardware/ownership is
correctly deferred to policies rather than restated — subject to §4.11.

### 5.11 People and listing pages
Findings: §4.5, §4.10. The twelve lecture titles and twelve studio titles read
as two designed sequences with no near-duplicate pair (site → grid → zoning →
density → transit → traffic → infrastructure → fiscal → public realm →
resilience → model limits → capstone). Even the thinnest bio (Sunniva Marek,
the visiting critic) does real work: it explains why a critic with no stake in
the semester is structurally useful rather than just naming her firm.

## 6. What the reviewers tried to break and could not

Recording these so a future agent does not re-run them:

- **Citations.** Roughly forty real-world citations across twelve lectures were
  individually checked against the literature by four independent reviewers.
  Zero invented, zero misattributed. Several were probed specifically as likely
  fabrications (Jacobs's chapter numbers, the Henry George theorem's authorship,
  Whyte's sitting-space ratio, Alexander's pattern numbers, the *Euclid* quote
  and its author) and all held.
- **Assessment arithmetic and cross-page numbers.** Weights, due dates, defence
  clocks, word caps, the 22% cut, the ₡186,000 reserve, the fleet-from-headway
  formula, the dB calculation, the saturation-flow capacity maths — all
  internally consistent. The only arithmetic slip found in the whole audit is
  the ₡4,800/₡4,600 worksheet line in §5.2.
- **Prose voice.** No reviewer found generated-filler cadence in the twelve
  lectures, twelve studios, three briefs, policies page or home page. The only
  voice finding that held is the three-bio template tic in §4.10.
- **Session duplication.** Probed at every adjacent pair, hardest at 5/6.
  None found.
- **Orphan or ghost staff.** Every `teachers:` id resolves; every person is
  referenced from at least one lecture or session.
- **Register discipline.** The site never acknowledges the course is fictional
  anywhere except the one paragraph in §4.3. The fictional admin model
  (convenor-by-email, convenor-discretion extensions, missed-jury-marked-from-
  memo) was probed and is internally consistent — `notes/log.md:1045–1060`
  records it being correctly rejected as intentional fiction on a previous pass
  rather than a bug, and that judgement still stands.

## 7. Findings the main agent could not reproduce

Two reviewer claims were checked and rejected. Recording them so a future agent
does not act on them:

- **"`PLAN.md` was written once and never touched again."** False.
  `git log -- PLAN.md` shows seven commits, last `b4416637`. The staleness in
  §4.9 is real; this reasoning about it is not.
- **Week 12's "slide 6" as a flat contradiction.** See §5.6 — it is ambiguous,
  not wrong.

One reviewer also declined to raise `MarkingModel.astro`'s bare weight table as
a defect after reading it in page context, and one declined to report a
suspected four-way pollution-overlay error in Session 3 because it could not
verify the claim with enough confidence. Both calls look right.

## 8. Honest summary

No spec line fails. Both gates are green and the build is pristine. Both marking
viewports are clean across all 52 pages. The curriculum genuinely holds together
— the save chain is unbroken across twelve weeks, the tradeoffs are backed by
opposite-direction numbers rather than asserted, the citations are real, the
assessments mark what the course teaches, and the register does not break. This
site has clearly been reviewed hard already, and most of what four lecture
reviewers and four studio reviewers went looking for was not there.

What the audit did find falls into three groups, in descending order of what it
would cost at marking:

1. **One broken sentence in `PROCESS.md`** (§4.8). Process is 45%, this file is
   the whole of it, and the defect is a dropped verb. Cheapest fix, largest
   exposure.
2. **Eight factual or evidence-chain breaks in the weekly content**
   (§3.1–3.8, §5.6) — Week 10's five-overlays-called-four, the "arterial" road
   tier, Session 6's signal retiming, Session 5's phantom address list, Session
   1's economy baseline, Session 2's unestablished dwelling address, Session
   10's unrecoverable "recovered state", wind-as-a-view inside a `spec:` line,
   and Week 9's off-by-one deck citations. Each is one to three sentences to
   fix. The three that matter most are the ones that propagate: Session 2 → Week
   3's assessed commute reading, Session 10 → Session 11's hard prerequisite,
   and Week 9's deck citations because a marker who opens the deck can count.
3. **Two first-screen inconsistencies** (§4.1, §4.4) — the home page's weekly
   pin-up claim and the lectures index's missing arc — both on pages a
   ten-minute marker read lands on first.

Three patterns worth naming, because they are more useful than the individual
items:

- **Most of group 2 is a promise made on one page that another page cannot
  keep.** That is exactly the class of defect `spec/course-coherence.test.ts`
  was built for, and it catches the structural version (graph edges, dates,
  subject drift) but not the semantic version — an artefact required in week N
  that week N−1 never produced. If one thing were added to the harness rather
  than the content, it would be a check that every `spec:` line's named
  artefact appears in some prior session's own room sequence or exit list. That
  single check would have caught §3.4, §3.5, §3.6 and §3.7.
- **Numeric slide citations are load-bearing and unprotected.** Week 9's
  citation is wrong, Week 12's is ambiguous, and nothing in `spec/` ties a
  lecture page's "slide N" to the deck's actual slide N. A check mapping
  cited slide numbers to deck headings would close a defect class that will
  recur on any deck reorder.
- **The wind info-view error was found independently by three reviewers in
  three different slices** (§3.8, §5.4, and the assessments reviewer as an
  aside), which is the strongest signal in the audit that it is real and not a
  reviewer artefact. It appears in `week-01.md:60`,
  `sessions/01-site-selection.md:33`, and `week-10.md` and
  `sessions/10-hazard-scenario.md` at multiple lines — one fix, five or six
  sites.

What this audit does **not** claim: that the course is uninteresting, that the
voice is generated, that the weeks repeat, that the assessments are unmoored
from the teaching, or that the process account is unevidenced. Four lecture
reviewers and four studio reviewers went looking for each of those specifically
and did not find them. The defects above are a list of small repairs to a
coherent course, not symptoms of a broken one.

---

## 9. What was fixed

All findings above are repaired except §4.8's first item. Grouped by what the
repair actually was, because the shape of the fix says more than the list.

### Wrong facts about the simulation

- **§3.1** `week-10.md`: "The four overlays"/"all four" → five, matching the
  five views the same cell names. The learning objective now enumerates the
  same five and uses `fire-hazard` throughout, retiring `fire-risk`.
- **§3.2** `week-02.md`: the CS2 road hierarchy row now reads "small road,
  medium road, large road, highway". The generic planning uses of "arterial"
  elsewhere were left alone, and so was `decks/week-02.deck.mdx:112` — on a
  second read that line is Alexander's tree-versus-semilattice vocabulary
  ("a road hierarchy of arterial, collector and local street is a tree"), not a
  claim about the game's tiers. The audit over-reported that one.
- **§3.3** `sessions/06`: "signal retiming" replaced with converting Wickstead
  to a roundabout, a road-tool move the unmodded build supports. The session now
  disclaims two limitations rather than one, and says why signal phasing is not
  on the list — the build exposes no timing control and the mod that adds one is
  outside the studio's settings. Turning the gap into taught content rather than
  deleting it.
- **§3.8, §5.4** wind: every place that treated it as a first-class info view
  now reads it where it actually lives. `sessions/10` spec and body,
  `sessions/01` room sequence, `sessions/03` spec and prep, `week-01.md`,
  `week-03.md`, `week-10.md` (three sites) and `decks/week-01.deck.mdx`. Nine
  edits, one error. Verified against the CS2 wiki, not just the reviewers.

### Evidence a student was asked for and could not produce

- **§3.4** `sessions/05` spec: the phantom "issued sample addresses" line is now
  a per-stop 400 m catchment measurement stated against the reference
  alignment's 62% — which is what the session body actually supports.
- **§3.5** `sessions/01`: added a 15:30 room step that opens the economy panel
  and records the opening grant, and the exit baseline now reads "a ₡75,000
  opening grant against a flat monthly line" instead of inventing a
  −₡2,400/month deficit on a save with nothing built. The flatness is now the
  teaching point: Week 1 is the zero.
- **§3.6** `sessions/02`: added the step that produces the named dwelling
  address, said out loud at the desk so the room witnesses it, with the reason
  it cannot be re-chosen later. Week 3's assessed commute reading now has a
  defined origin.
- **§3.7** `sessions/10`: the 14:40 step now saves the issued `-recovered`
  checkpoint out as the student's own `<student ID>-w10`, and says why — their
  district was never run through the fire. `sessions/11`'s prerequisite now
  names that same file.

### Promises one page made that another could not keep

- **§4.1** home page: "one lecture and one studio pin-up each" → one studio
  session each, nine desk crits and three assessed (Week 4 pin-up, Week 9 jury,
  Week 12 final jury). The self-contradiction with "three assessed juries" in
  the same sentence is gone.
- **§4.2** `week-03.md`: the lecture no longer sells a choice the session
  forecloses. It now states that the cohort commits the separated scheme so
  everyone carries the same cost, and that the work is naming the cost you were
  handed against the sandbox alternative you built and did not keep. Honest
  about the mechanic, and arguably a better teaching point than the fiction was.
- **§4.7** `sessions/04`: "Both are livability readings" → land value is read on
  the fiscal side, as Weeks 3 and 8 do, and the two numbers are the trade
  showing up in two places rather than halves of one metric. Now consistent with
  the session's own stated livability-against-fiscal tradeoff.
- **§4.12** `week-09.md`: "Deliverable C" replaced with "the costed budget line
  the brief asks for", so the lecture page no longer depends on a label defined
  only inside the deck.
- **§5.2** `week-04.md`: "twelve-month clinic branches" → "three-cell", matching
  the assessment brief, the session and the deck.
- **§5.3** `week-08.md`: "both funded utility increments" → "once the room funds
  them as Line zero", no longer pre-empting the session's own sequencing.

### Numbers

- **§5.6** `week-09.md`'s deck citations were the worst of these: off by one from
  slide 14 on, with the fiscal figures attributed to three slides carrying no
  monetary figure. Rewritten to cite slides **by name** rather than number, so
  the next deck reorder cannot silently break it again. The other eight numeric
  slide citations in the repo (weeks 4, 11, 12) were enumerated and verified
  correct — week 9 was the only wrong one.
- **§5.6** `week-12.md`: the ambiguous "slide 6" now reads "first sentence of
  the memo, slide one of the pin-up", matching the deck's own Toulmin table.
- **§5.2** `sessions/05`: the ₡4,800 worksheet allocation is **kept** — it is
  also the canonical figure on the resources page's worksheet, and the stated
  ₡3,700 net subsidy depends on it. Changing it to ₡4,600 as the reviewer
  suggested would have broken both. Reconciled the other way instead: the text
  now says the ₡4,800 is four vehicles at the deck's ₡1,150 line rate plus ₡200
  of depot overhead, and tells students to quote the worksheet total rather than
  the per-vehicle multiple.

### Runnability

- **§4.6** `sessions/09`: the jury now breaks for ten minutes between the halves
  and chooses the three callbacks *after* the second eight, drawn from all
  sixteen. The text says why the choice sits at the end. Added ~15 minutes to a
  session with no stated end time.
- **§5.5** `sessions/12`: slots are now eighteen minutes apart — fifteen yours,
  three changeover — with the reason (eight semester-deep saves loading in turn
  on one machine per room). Eight slots run 13:00–15:24 and the joint close gets
  the rest of the hour. The fifteen minutes of *content* is untouched, so the
  "Your fifteen minutes" protocol and `spec/lectures.test.ts`'s 280-second
  capstone check still hold. Putting the changeover inside the fifteen, as first
  drafted, would have broken both.
- **§5.5** `sessions/08`: the three captioned screenshots are now named (fiscal
  view, land-value view, the branch's 08:00 reading), matching session 7's
  specificity.

### Voice, register and orientation

- **§4.3** `resources/index.mdx`: the "About this fictional course" paragraph is
  rewritten in-genre as "On the reference figures". It keeps every bit of the
  anti-fabrication honesty — worked hypotheticals, match the checksum, name your
  save and build, a figure whose provenance you cannot name is not evidence —
  without the words "fictional", "prototype" or "a real delivery". The site no
  longer breaks register anywhere.
- **§4.4** `lectures/index.mdx`: added the arc. Three movements, what each does,
  and the note that no week introduces a metric the others do not use. Verified
  every claim in it against the content, and corrected one on the way: the Week 6
  widening holds its saving for three in-game weeks and then hands most of it
  back, rather than giving it back within three.
- **§4.5** `marisol-quaye.md`: Week 11 added to both the card and the bio, tied
  to her land-value research, which is what makes her the right person for it.
- **§4.10** two of the three `which`-clause bios recast (Marisol, Tobias).
  Idris's is the strongest of the three and was left.
- **§4.11** `resources/index.mdx`: a hardware floor for self-installers —
  six-core CPU, 8 GB RAM, 6 GB discrete GPU, SSD — with why it matters (the
  day-night and weather passes the later weeks depend on) and a pointer to the
  technicians for the current number. `policies/index.mdx` now links to it,
  since "bring-your-own is first" makes that student the default.
- **§5.9** `404.md`: one clause tying the copy to its own construction-barrier
  illustration.
- **§4.9** `README.md`: no longer points at `PLAN.md` for "how it was built".
  `PLAN.md` now carries a superseded-snapshot banner saying its status notes
  describe the repo mid-build, and pointing at `PROCESS.md`, `README.md` and
  `notes/log.md` instead. The reviewer's claim that `PLAN.md` had one commit was
  wrong (it has seven), but the staleness was real.

### Harness

Three changes, each verified by mutation rather than by passing:

- **`spec/lectures.test.ts`**: the `lectureHtml.length > 8_000` proxy is gone.
  In its place, every lecture must carry its six standing sections, at least
  four theory→mechanic rows in its simulation-mapping table, and at least two of
  the three named metrics inside "The decision this week". Padding satisfies
  none of those; the old threshold was satisfied by all of them. Confirmed the
  new check fails for its own reason under each of three separate mutations to a
  built page, and passes when restored.
- **`spec/course-coherence.test.ts`**: `weeklyAnchors[12]` drops `|plan`. Both
  Week 12 pages already match on `comprehensive`/`capstone`/`jury`, so the
  generic token cost nothing to remove and was weakening the only anchor that
  guards the capstone week.
- **`spec/course-coherence.test.ts`**: a new `the save-file chain` block, the
  mechanical half of the recommendation in §8. Three checks: no week may open a
  save a later week produces, every week must name its own save and connect to
  the chain, and a `kerrow-ref-wNN` checkpoint may only be read in week NN.
  Verified against three mutations (forward reference, orphaned save, wrong
  checkpoint week). This is the class of defect that produced §3.4 through
  §3.7 — four findings the previous harness could not see.

`pnpm check` is now **41 tests across 9 files**, up from 38, and green. Build
pristine. `pnpm check:evidence` green. Re-swept the twenty changed pages at
390×844 and six at 1920×1080 in Chrome under device emulation: no overflow, no
clipping. Screenshots of the rewritten lectures index at both viewports are in
`notes/audit-2/`.

### Deliberately not changed

- **§4.8's broken sentence in `PROCESS.md`.** The brief calls that file "your
  own account, written by you for a reader". Repairing the prose there is the
  author's job, not an agent's. Its other two items — 616 words against the
  400–600 guide, and the `b9162255` citation supporting only half its sentence —
  are left with it for the same reason.
- **`decks/week-02.deck.mdx:112`**, per the §3.2 note: the audit misread generic
  planning vocabulary as a game claim.
- **`sessions/05`'s ₡4,800**, per the §5.2 note: the reviewer's suggested fix
  would have broken two other pages.
- **Deep testing** — keyboard-only, resize mid-interaction, slow connection.
  Per `CLAUDE.md` that is on-request work, and it was not requested.
