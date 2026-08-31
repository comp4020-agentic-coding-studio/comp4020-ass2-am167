# PLAN: SLOP2418 — Urban Design Studio: Foundations of the Good City

Status: draft for review. Nothing in this plan has been implemented yet.

## 1. Concept

**Working title:** *Urban Design Studio: Foundations of the Good City*
**Tagline:** "A planning-school studio, run entirely on Cities: Skylines II."

**Thesis (the one idea explored all semester):** what makes a city good is a
systems problem with no single right answer — every design move (a zoning
choice, a transit line, a tax rate) trades one metric against another
(land value, mobility, fiscal health, livability), and the studio's job is to
make students feel those tradeoffs directly rather than be lectured about
them. The course is structured as a real planning-school design studio —
site analysis, client brief, weekly builds, formal critique — except every
"site" is a save file, and "site visits" happen inside the simulation. The
register never breaks: this reads as an actual studio syllabus, not a bit
about one.

**Register:** played completely straight, in the voice of a real design-school
studio handbook (studios are one of the most earnest genres in academia —
juries, charrettes, all-nighters, pin-ups — which is exactly what makes total
commitment funnier than a wink). The comedy is structural, not line-by-line:
nowhere does the site acknowledge that the "site" is fictional.

**Confirmed: named directly.** The studio's tool is *Cities: Skylines II*,
named explicitly throughout — the same way a real studio syllabus would name
Rhino, ArcGIS or SketchUp as the software of record. Weekly briefs and studio
sessions can reference its actual systems (the district-based service-radius
model, the new economy/resource-chain system, day-night and weather, its
specific traffic-AI behaviour) rather than staying generic — that specificity
is worth more to the voice than the small brand-adjacency risk it trades
away, and this is a non-commercial student assignment referencing the tool
it used, not an endorsement claim.

**Course code:** `SLOP2418` — second-year undergraduate (`2`), keeping the
fixed `418` suffix. A "foundations" studio reads most naturally as a
student's first specialised design studio — after a general first-year
gateway course, but before advanced/capstone studios — which is exactly how
real design and planning programs sequence their studios ("Studio
I: Foundations" is a real course-naming convention). It also fits the title
better than a professional-postgraduate register would.

**Session / year:** keep the template's `Semester 1`, `2027`,
`2027-02-22`–`2027-05-28`.

**Tags (2–3, 2–24 chars each):** `urban design`, `systems thinking`,
`studio`

**Homepage description (80–300 chars, to tune during writing):** "A design
studio for people who want to learn city planning the way planners actually
learn it — by building one, badly, in public, then defending every choice at
crit." (draft — will land in range once finalised)

## 2. Voice and style guardrails

- Every page reads as a genuine studio syllabus for a genuine second-year
  planning program — briefs, crits, and deliverables named the way real
  studio courses name them (pin-up, jury, charrette, desk crit).
- Draw on real, citable urban-design theory each week — Jane Jacobs, Euclidean
  zoning history, induced demand, transit-oriented development, the 15-minute
  city — mapped explicitly onto a simulation mechanic, not asserted in the
  abstract.
- Establish the "competing metrics" framing in Week 1 and keep returning to
  the same named metrics all semester (see §4's grading logic) — that
  repetition is what makes it a studio with one thesis, not twelve unrelated
  lectures.
- Assessment briefs, session pages and the policies page all use the same
  studio register — no page is allowed to be "the funny one."
- No real cities, real developers, or real planning disasters as case
  studies — invented districts and composite scenarios only.

## 3. The twelve weeks

**Calendar.** Teaching runs Mondays from `2027-02-22`, interrupted by a
two-week mid-semester break after Week 6. So Weeks 1–6 are `02-22` … `03-29`,
and Weeks 7–12 resume `04-19` … `05-24`. Sessions and assessments use the same
calendar as their week's lecture. `spec/calendar.test.ts` asserts this shape.

Each week pairs a lecture (the theory + its mapped mechanic) with a studio
session (the build, critique, or stress-test). Twelve of each clears
"twelve dated teaching weeks" and the ~20-page target well on its own.

| Wk | Lecture: theory → mechanic | Studio session |
|----|---|---|
| 1 | Site Analysis and the Blank Map — terrain, climate and constraint as the first design move | Site selection; first road grid; a "site walkthrough" of the simulation's terrain |
| 2 | The Grid vs. the Organic Street — Hippodamus's grid vs. the medieval street vs. the Radburn superblock | Lay out a neighbourhood's block pattern; desk crit on walkability |
| 3 | Zoning and the Myth of Separation — Euclidean zoning's history vs. mixed-use design | Zone the first district; compare land value against commute distance |
| 4 | Density and the 15-Minute City — transit-oriented density, amenity radius | Upzone around a central amenity — **Assessment 1 (Neighbourhood Unit Plan) due** |
| 5 | Moving People: Transit-Oriented Design — headways, network legibility, the transfer penalty | Design a transit spine for the district |
| 6 | Traffic Engineering and Its Discontents — induced demand, the one-way-street "fix" | Stress-test the district's road network under peak load — **Assessment 2 (Mobility Plan) due** |
| 7 | Infrastructure You Don't See — water, sewage, power as capacity-constrained networks | Build/upgrade utility networks; resolve a designed service-failure scenario — **real deck week** |
| 8 | Fiscal Realism: Taxes, Budgets and the Limits of Growth — land value capture, service funding tradeoffs | Balance a district budget under an imposed service cutback |
| 9 | Parks, Plazas and the Public Realm — Jacobs's "eyes on the street," the third place | Design the district's public realm — **Assessment 3 (Public Realm & Infrastructure Plan) due** |
| 10 | Resilience: Hazards, Pollution and Climate | Stress-test the district against a disaster/hazard scenario |
| 11 | What the Model Can't Show You — land ownership, displacement, informal housing, political contest, all abstracted out of the simulation | Read the district's land-value history since Week 1 against what that curve hides |
| 12 | Capstone Review: The Comprehensive Plan | Final jury — **Capstone (Comprehensive City Plan) due** |

**The one real deck:** Week 7 (Infrastructure). Utility networks are
naturally slide-rich — capacity curves, network diagrams, a failure-cascade
walkthrough — and it's the week with the most legitimately technical content
to present formally.

**Week 11** is the studio's one explicit critique-of-the-tool week — framed
as normal studio pedagogy (knowing your model's limits is part of design
literacy), not as the site breaking its own register.

## 4. Assessments (weights sum to 100, per spec)

Each weighted assessment is graded against the same three named metrics
established in Week 1 — so the "competing tradeoffs" thesis is literally
what students are marked against, not just a lecture topic.

| # | Title | Week / due | Weight | Marking |
|---|---|---|---|---|
| 1 | Neighbourhood Unit Plan | Wk 4 | 15% | weighted — fiscal performance 30 / mobility performance 30 / livability 40 |
| 2 | Mobility Plan | Wk 6 | 20% | weighted — mobility performance 50 / fiscal performance 25 / livability 25 |
| 3 | Public Realm & Infrastructure Plan | Wk 9 | 25% | weighted — livability 45 / fiscal performance 30 / mobility performance 25 |
| 4 | Comprehensive City Plan (capstone) | Wk 12 | 40% | holistic — judged as a whole against all three metrics plus resilience, per Week 10–11 |

Each brief poses the problem as a blockquote, names the deliverable format
(a set of in-simulation screenshots + a short defence memo, in the spirit of
a real studio pin-up), and states its criteria — same shape as the template's
`assignment-1.md`.

## 5. People / teaching team

Studio format supports a genre-appropriate pair: a **Studio Director**
(runs the semester, sets the briefs) and a **Visiting Critic** (guest juror
who appears at pin-ups — a real design-school convention). Proposal: keep
the no-photo treatment from the earlier draft — text-only staff pages are a
legitimate minimalist choice and remove a real production dependency, but
flagged as an open question since studio courses conventionally do show
faculty photos (§10).

## 6. Imagery (hero + social card)

Both `hero-home.avif` and `card.png` must be replaced or deleted (starter
hashes are checked). Proposal: new artwork in the existing two-ink
risograph style (gold/black) — an isometric or plan-view city grid, echoing
the studio's design-drawing register rather than the bureaucracy motif from
the earlier draft. Implementation-time task, flagged as a dependency here.

## 7. Policies page

Same studio register, doing real content work:
- A late-work policy framed around studio culture's own norm — a pin-up has
  a fixed time because the jury is assembled, not because of an arbitrary
  deadline — which is both accurate to real design education and gives the
  policy real teeth.
- An academic-integrity clause addressing how much of a submitted build may
  be studio-critiqued collaborative work vs. individual authorship, mirroring
  real studio-culture debates about crit-driven iteration.
- A tools/process-disclosure clause, since the site itself is built with an
  agentic coding tool — kept brief, in the same straight voice.

## 8. Custom spec tests (`spec/*.test.ts`, ours to write)

- assessment `weight` values across the collection sum to exactly 100
- every week 1–12 has both a `sessions` and a `lectures` entry (no gaps)
- at least one lecture has a non-empty `slides` field, and that deck file
  exists and is non-placeholder (no `STARTER_CONTENT` marker)
- every weighted assessment's `marking.criteria` weights sum to 100
  (already schema-enforced, but worth a coherence assertion at the content
  level too — e.g. that all three named metrics appear somewhere across the
  weighted assessments)
- `courseMeta.code` matches `SLOP6\d{3}` and ends in the assigned `418`
- policies page exists and contains no `STARTER_CONTENT` marker

Left to the crit (not mechanically checkable): whether the studio voice
actually holds, and whether the metrics tradeoff is legible to a reader
rather than just asserted.

## 9. Risks and mitigations

- **Reads as a straight (if slightly quirky) planning course, with the
  simulation layer invisible.** Mitigated by naming the studio deliverable
  format explicitly every week (in-simulation screenshots + defence memo)
  and by grounding every lecture's theory in a named mechanic, not leaving
  the mechanic implicit.
- **Voice drift across 20+ pages.** Mitigated by the guardrails in §2 and by
  writing each week's lecture, session and (where relevant) assessment brief
  in one pass, using the same three named metrics throughout.
- **Trademark/brand exposure from naming a specific commercial game.**
  Accepted per §1 — named directly as the studio's tool of record, framed as
  attribution rather than endorsement.
- **Hero/card imagery is a real production task**, not just copy — flagged
  in §6.

## 10. Open questions before implementation

1. Happy with `SLOP2418` / undergraduate studio register, or prefer a
   different level?
2. Keep the no-photo treatment for staff (§5), or source/generate portraits
   — studios conventionally show faculty?
3. Any of the twelve week topics you want swapped, reordered, or cut?
4. Any objection to the assessment split (15/20/25/40), titles, or the
   three named grading metrics (fiscal performance / mobility performance /
   livability)?
5. Hero/card image direction (§6) — isometric city-grid artwork, or
   something else?
