# SLOP2418 — studio session plans

**Purpose.** One detailed plan per studio session, written so a future agent can
write the session's page body (`src/content/sessions/NN-*.md`) without
re-deriving the course. Each week below fixes what the session is for, what
students arrive with, how the three hours are spent minute by minute, the exact
readings taken, the crit questions asked, the `spec:` lines the page must carry,
and what leaves the room. Where a plan gives run-sheet text, a table row, a crit
question or a spec line, **that is the content to use, not a suggestion of the
kind of content to invent.**

**Companion doc.** `notes/lecture-plans.md` does the same job for the twelve
lectures. Read the matching lecture plan before writing a session — the pairing
is the pedagogy, and the session is where the lecture's claim gets tested.

**Status.** Plans only. All twelve session bodies in `src/content/sessions/` are
still `STARTER_CONTENT` placeholders, and no session declares a `spec:`.

## How to use this file

1. Read the register notes and the canon below before writing a word. The voice
   is the deliverable; the content is the vehicle.
2. Take the week you are writing. Its **What the session is for** sentence is
   the test every paragraph has to pass.
3. Write the body of `src/content/sessions/NN-<slug>.md`, remove the
   `STARTER_CONTENT` comment, and add the `spec:` array the plan supplies.
   Apply any **Frontmatter deltas** the plan lists.
4. `pnpm check` proves the page builds and the graph edges resolve. It does not
   prove the session reads as a studio. Read the rendered page.

## Register — non-negotiable

Played completely straight, in the voice of a real design-school studio
handbook. The comedy is structural, never line-by-line. Nowhere does the
material acknowledge that the site is a save file rather than land. No winks, no
puns, no self-aware asides. *Cities: Skylines II* is named the way a real
syllabus names Rhino or ArcGIS: as the software of record, matter-of-factly,
with its actual systems cited as ordinary course content.

Sessions are named the way real studios name them — desk crit, pin-up, jury,
charrette, clinic. A session page is an instruction to a student who has to turn
up and do the work: it says what to bring, what happens in the room, what is
being looked at, and what they leave with. It is not a summary of a topic.

No real cities, real developers or real planning disasters as case studies;
invented districts and composite scenarios only.

## The three metrics

Named in Week 1 and returned to every week after, in these words:

| Metric | What it measures | Where it is read |
|---|---|---|
| **fiscal performance** | whether the district pays for the services it demands | budget panel, per-district income and outlay |
| **mobility performance** | whether people can get where they are going, at the times they go | traffic and transit info-views, travel-time readouts |
| **livability** | whether the place is worth being in once you have arrived | happiness, land value, service coverage, pollution overlays |

They are also the marking criteria for every weighted assessment, so a session
that forces a tradeoff between two of them is forcing something a student will
be marked on.

## Assessment structure — the correct numbers

**Three assessments, 25 / 25 / 50.** `notes/lecture-plans.md` predates this
change and its calendar table still says four at 15/20/25/40; where the two docs
disagree, the content files in `src/content/assessments/` are authoritative and
this table matches them.

| # | Title | Due | Weight | Marking |
|---|---|---|---|---|
| 1 | Neighbourhood Unit Plan | Wk 4, 2027-03-15 12:00 | **25%** | weighted — livability 40 / fiscal 30 / mobility 30 |
| 2 | Public Realm and Infrastructure Plan | Wk 9, 2027-05-03 12:00 | **25%** | weighted — livability 45 / fiscal 30 / mobility 25 |
| 3 | Comprehensive City Plan (capstone) | Wk 12, 2027-05-24 12:00 | **50%** | holistic |

There is no Mobility Plan and no `final-project`. Week 6 stress-tests the
network but nothing is submitted on the day.

## Calendar and teaching pattern

Mondays from 2027-02-22, with a two-week mid-semester break after Week 6.
**Lecture 10:00–11:00; studio 13:00–16:00, Studio 2.14**, same day. Pin-up
weeks (4, 9) and the final jury (12) use the same three-hour block.

| Wk | Date | Studio session | Tutor(s) | Paired lecture | Due |
|----|------|---|---|---|---|
| 1 | 2027-02-22 | Site Selection and the First Grid | Marisol Quaye | Site Analysis and the Blank Map | |
| 2 | 2027-03-01 | Block Pattern and the Walkability Desk Crit | Idris Fenn | The Grid vs. the Organic Street | |
| 3 | 2027-03-08 | Zoning the First District | Marisol Quaye | Zoning and the Myth of Separation | |
| 4 | 2027-03-15 | Upzoning the Amenity Core | Marisol Quaye, Sunniva Marek | Density and the 15-Minute City | **A1 (25%)** |
| 5 | 2027-03-22 | Designing the Transit Spine | Idris Fenn | Moving People | |
| 6 | 2027-03-29 | Peak-Load Stress Test | Idris Fenn | Traffic Engineering and Its Discontents | |
| 7 | 2027-04-19 | Utilities Clinic | Nadia Ilkhom | Infrastructure You Don't See | |
| 8 | 2027-04-26 | Budget Under Cutback | Tobias Wren | Fiscal Realism | |
| 9 | 2027-05-03 | The Public Realm Build | Tobias Wren, Sunniva Marek | Parks, Plazas and the Public Realm | **A2 (25%)** |
| 10 | 2027-05-10 | Hazard Scenario | Nadia Ilkhom | Resilience | |
| 11 | 2027-05-17 | Reading the Land-Value Curve | Marisol Quaye | What the Model Can't Show You | |
| 12 | 2027-05-24 | Final Jury | Marisol Quaye, Sunniva Marek | Capstone Review | **Capstone (50%)** |

Sunniva Marek is the Visiting Critic and appears only at the three assessed
sessions — Weeks 4, 9 and 12. A tutor who is not listed for a week is not in the
room that week.

## Shared canon — the Kerrow Basin

One site, issued in Week 1, carried to the capstone. A session that renames it
breaks eleven other weeks, so treat this as fixed.

| Feature | What it is |
|---|---|
| **Kerrow Basin** | the standard map issued in Week 1. The River Kerrow runs north-west to south-east; prevailing wind is WNW. |
| **Halstead Reach** | the flat north-east terrace, roughly 4 × 2 km, fertile soil, gradient under 2%. The semester's primary build site. |
| **Verrall Ridge** | south-west, rising ~90 m over 1.5 km, ore in the flank, 4.1 km from the interchange. The costly alternative siting in Week 1. |
| **Ombersley Flats** | south-east, downwind and downstream of the whole basin, floodable. Zoned in Week 3, the site of the Week 7 service failure and the Week 10 flood. |
| **Thackray Cut** | the only westward road gradient off the Reach, 6.2%. |
| **Dunthorpe interchange** | highway connection, north edge, 1.2 km from the Reach. |
| **Kerrow corridor** | the main north–south arterial. Widened in Week 6; its last four blocks are Week 11's case. |
| **Tuckwell Bend** | the river bend the low-lying Ombersley blocks sit inside. |
| **the Pellow cells** | the industrial area zoned on Ombersley Flats in Week 3 — downwind, downstream, flat and cheap. Its outflow is on the Kerrow below the cells. Cause of the Week 7 service failure, and inside the Week 10 flood envelope. Named this way in `notes/lecture-plans.md` too; never "Ombersley Works". |
| Weeks 4–6 places | Pelling Street, Denton Hill, Barrow Fields, Wickstead junction |
| Weeks 7–9 places | Ockley Green, Wensley Bank pumping station, Farrant Row |

**Standing conventions**, set in Week 1 and assumed by every later week:

- Readings are trends, not moments. Every reading is taken at **in-game 08:00**
  and the memo says so.
- **A plan claiming all three metrics improved has not been read carefully.**
- Saves are `<student ID>-w<NN>`, one per week, one off-machine copy.
- Currency is **₡** throughout (`₡6,800/month`). Never a bare figure, never `$`.
- Land value is the **land value index, 0–100**, district mean unless a
  sub-area is named.

## Canon introduced by the session plans

Beyond the Kerrow Basin table above, the twelve plans below coin these. They are
listed here so a writer can see the whole vocabulary at once and reuse a name
rather than invent a synonym. Each week's own "New canon introduced" section is
the definition of record.

| Introduced | Name | What it is |
|---|---|---|
| Wk 1 | **Ludworth Bench** | the one shelf broad enough to hold a settlement on Verrall Ridge, ~90 m up, windward — the tempting alternative the cohort turns down |
| Wk 1 | **Sallow Head** | where the Dunthorpe spur meets the north-west corner of Halstead Reach; the studio's distance datum |
| Wk 2 | **Brayhurst quarter** | the first residential quarter on the Reach, north of the rail line, running east from Sallow Head |
| Wk 2 | **Hessel Row** | a street at the Brayhurst quarter's eastern edge; its 480 × 480 m block is the tested block for the 80 m / 160 m walk-share pair, and the parallel back street in Week 6's one-way proposal |
| Wk 3 | **the Pellow cells** | the Ombersley Flats industry — also in the canon table above, because Weeks 7, 10 and 12 all act on it |
| Wk 4 | **Pelling Cross** | the Pelling Street / Halstead crossing at the centre of the amenity core |
| Wk 5 | **Marle Row** | the mid-line stop on the northern blocks of the Denton Hill–Barrow Fields spine |
| Wk 7 | **the reverse-salient card** | the signed A5 card each student completes at the clinic, naming the network element that failed first |
| Wk 8 | **the corridor budget sheet** | the studio's shared, dated record of every funding decision; Week 9 adds a cost-per-point column to it |
| Wk 8 | **the unfunded list** | the student's own signed standing record of what they chose not to fund |
| Wk 10 | **the Tuckwell crossings** | the two river bridges serving Ombersley Flats, out for four in-game days in the flood |
| Wk 12 | **Kerrow cross-town link** | the proposed east–west connection from the Kerrow corridor to the Pellow cells; the only use of the ₡186,000 reserve that moves the Ombersley land-value figure |

Weeks 6, 9 and 11 coin nothing and run entirely on existing canon. Week 10's own
section re-defines the Pellow cells; Week 3 is where they are introduced.

## The metric spine — fixed readings, weeks 1–12

**This table is canon.** Every session plan and every session body quotes from
it rather than coining figures. It is the studio's single save file read twelve
times. Note that the arc is deliberate: fiscal performance is bought in Week 1
by siting on the Reach, and the rest of the semester pays for that in livability
and mobility, week by week.

| Wk | Population / households | Fiscal — monthly balance | Mobility — 08:00 travel time, transit share | Livability — happiness, land value index | What moved, and why |
|---|---|---|---|---|---|
| 1 | 0 / 0 | −₡2,400/mo against a ₡75,000 opening grant | no trips yet; fixed distances recorded: Reach→Dunthorpe 1.2 km at 1.8%, Ridge→Dunthorpe 4.1 km via Thackray Cut at 6.2% | unimproved land value: Reach **14**, Ridge **22**; no happiness reading | Nothing yet — Week 1 sets the zero. The cohort sites on Halstead Reach, buying fiscal performance and deferring the livability bill. |
| 2 | 1,180 / 460 | −₡1,900/mo | 4.2 min; transit 0%; **walk share 31%** | happiness 68%, land value 17 | Fine 80 m grid beats the 160 m superblock on walk share (38% vs 24% in the tested block) and costs ₡310/mo more per 1,000 residents in road upkeep. **Fiscal down, mobility up.** |
| 3 | 3,600 / 1,410 | **+₡900/mo** — first surplus | 6.8 min (worse); transit 0%; walk share 22% (down from 31) | happiness 72%, land value 24 | Strict Euclidean separation lifted land value and balanced the books by lengthening every trip. Industry goes to Ombersley Flats — downwind, downstream, and cheap. **Mobility down.** |
| 4 | 6,900 / 2,650 | +₡2,100/mo | 5.9 min (recovered); transit 0%; walk share 34% | happiness **69%** (down); land value 31 district mean — **core 48, edge 19** | The mixed-use amenity core at Pelling Street recovered mobility and lifted the mean, at the cost of happiness in the core blocks (noise) and a land-value gradient that is now visible on the overlay. **Livability splits — it moves both ways depending where you read it.** |
| 5 | 9,400 / 3,600 | **+₡400/mo** | 5.4 min; **transit 11%**; 62% of residents within 400 m of a stop | happiness 73%, land value 34 | The Denton Hill–Barrow Fields spine runs at a 6-minute headway: ₡4,800/mo to operate, ₡1,100/mo recovered in fares. Mobility and livability bought with fiscal. **Fiscal down.** |
| 6 | 12,800 / 4,900 | +₡1,800/mo (growth outran the subsidy) | **peak 11.2 min**, off-peak 5.6; Kerrow corridor at **118% capacity**; Wickstead junction is the failure point; transit 14% | happiness 66% (down), land value 33 (flat) | Widening Wickstead from two lanes to four dropped peak to 8.9 min for three in-game weeks, then it refilled to 10.7. Induced demand, measured on the studio's own save. **Mobility briefly up, then back; livability down.** |
| 7 | 16,100 / 6,200 | +₡900/mo — Wensley Bank pumping station upgrade costs ₡6,800/mo | peak 10.9 min; transit 15% | happiness **61%**; land value 34 district — **Ombersley 11, collapsed**; Farrant Row on a boil notice | The cascade: the water intake sits downstream of the Ombersley outflow, a Week 3 zoning decision detonating four weeks later. Sewage backflow at Tuckwell Bend, treatment over capacity, six in-game days of contaminated supply. **Livability down hard, fiscal down.** |
| 8 | 18,400 / 7,100 | **+₡3,400/mo**, forced — a 22% service-budget cut is imposed on the district | peak 11.8 min (worse); transit **11%** — headway stretched 6→10 min to save ₡1,900/mo | happiness **58%**; land value 31; Ockley Green park maintenance at 60% | Everything except fiscal went down, on purpose. The only week where the metric that improves is the one nobody in the room wanted. |
| 9 | 20,900 / 8,050 | +₡1,200/mo | peak 11.1 min; transit 13%; walk share 29% (up from 24) | happiness **67%** (up); land value 36 | Livability bought back with fiscal — and the pin-up asks whether it was bought or designed. The Ockley Green plaza returned 4 happiness points for ₡2,200/mo; the Farrant Row street trees returned 3 for ₡340/mo. |
| 10 | 22,600 / 8,700 | **−₡14,200 for the month** — emergency response plus lost rates | peak 13.6 min during the event; two Ombersley bridges out for 4 in-game days | happiness troughs at **41%** on day 3; 1,340 dwellings inside the flood envelope; treatment offline 6 days | A 1-in-50 flood at Tuckwell Bend with a WNW pollution plume behind it. Recovery to week-normal by day 19 without intervention. What **broke** was Ombersley — Week 3's zoning again. What merely **looked alarming** was the district-wide happiness dip. |
| 11 | 24,100 / 9,300 | +₡2,600/mo | peak 10.4 min; transit 16% | happiness 69%; land value **39** | The curve: district mean **14 (Wk 1) → 39 (Wk 11), +179%**. The last four blocks of the Kerrow corridor went **12 → 61**. This is the one week where all three metrics read as improved — which is the week's entire subject, because the model has no field for what that cost. |
| 12 | 25,400 / 9,800 | +₡2,900/mo; cumulative reserve ₡186,000 | peak 10.2 min; transit 17%; walk share 31% | happiness 70%; land value 40 mean — **core 66, Ombersley 18** | The semester argued as one position. Every figure above is defensible against the week it came from, or it is not defended at all. |

**Reading the spine.** Weeks 2–9 each have one metric moving the wrong way and
the plan should name it in those words. Week 10's readings are an event, not a
trend, and must never be quoted as the district's state. Week 11 is the
deliberate exception to the "all three improved" rule, and Week 12 aggregates.

---

## Week 1 — Site Selection and the First Grid

**Date:** 2027-02-22 · **Studio:** 13:00–16:00, Studio 2.14 ·
**Tutor(s):** Marisol Quaye · **Paired lecture:** Site Analysis and the Blank Map · **Assessment:** none

### What the session is for, in one sentence

You will read the Kerrow Basin as five separate overlays before you are allowed
to draw anything on it, and leave having chosen the ground your district sits on
for the next eleven weeks and said out loud which metric that choice bought and
which one it deferred.

### What students arrive with

The morning lecture is at 10:00 the same day, so this is the one week where
almost nothing can be carried in from prior work. What has to be true by 13:00:

- *Cities: Skylines II* installed and running on the machine you will use all
  semester, on the studio settings: no simulation-altering mods, no unlimited
  money, no unlock-all. The metrics are comparative and only compare across
  identical ground.
- The **Kerrow Basin** standard map loaded in a new save. Not regenerated —
  the map is issued, not rolled. If you regenerated it, you are on a different
  site from everybody else and every reading you take this semester is
  incomparable.
- **No roads placed.** Not one. The session's first two hours depend on the map
  being untouched, and a student who has already spurred off the **Dunthorpe
  interchange** will spend the overlay exercise reading their own decision back
  to themselves.
- The three metrics written down from the 10:00 lecture — *fiscal performance*,
  *mobility performance*, *livability* — with the panel each is read in. Quaye
  will ask for the panel, not the definition.
- Somewhere to write. The site report is produced during the session, not after
  it, and it is a one-page document with five screenshots in it.
- An off-machine destination for the save file — a drive, a share, an account.
  Week 11 reads your land-value history back from the Week 1 save, so the save
  discipline set at 15:55 today is load-bearing for a session ten weeks away.

Nothing is submitted this week and nothing is marked. The site report produced
today is the document Assessment 1 gets read against in Week 4.

### Run sheet

| Time | Segment | What happens | Who runs it |
|---|---|---|---|
| 13:00–13:15 | Studio opening | The semester's shape in ten minutes: one save, one district, twelve weeks. The rule that today produces no roads, and why. | Quaye |
| 13:15–13:30 | Machine check | Everyone loads the standard map together. Settings verified at the desk. Anyone with a regenerated map restarts here. | Quaye |
| 13:30–14:20 | Overlay walk-through, layers 1–3 | Natural resources, then water, then wind. One view at a time, view closed before the next opens. One screenshot and one written sentence per layer. | Quaye |
| 14:20–14:55 | Overlay walk-through, layers 4–5 | Terrain and contour, then outside connections. Same protocol. | Quaye |
| 14:55–15:00 | The stack | Five layers put together on the board. Two candidate sites emerge and are named: Halstead Reach, Ludworth Bench. | Quaye |
| 15:00–15:40 | The road tool opens — to measure, not to build | The tool is unlocked for its length and gradient readout only. Both routes to Dunthorpe measured. Nothing is confirmed. | Quaye |
| 15:40–15:55 | Round the room | Each student, one sentence: settlement area, metric bought, metric paid with. No discussion, no defence, next student. | Quaye |
| 15:55–16:00 | Conventions and close | The save convention and the 08:00 reading convention are set and written down. | Quaye |

**The overlay walk-through (13:30–14:55)** is run as a strict sequence and the
order is not negotiable: **natural resources, water, wind, terrain, outside
connections**. One info view is open at a time. You look at that layer, you
screenshot it, you write one sentence saying what this layer *rules out*, and
only then does the next view open. The sentence is the work — "fertile soil
across most of the terrace" is an observation; "anything I zone on the terrace
forfeits the fertile soil under it" is a finding. The land value overlay is
explicitly not in the sequence and is not opened until 14:55. At hour zero it is
nearly flat and reading it first teaches students that the site has no structure
worth surveying.

**The road tool opens at 15:00, and it opens to measure.** This is the segment
that most often goes wrong, so it is worth being blunt: the tool is available
for its length and gradient readout, and a student who ends the session with
road placed and confirmed has lost the exercise. Drag the tool from **Sallow
Head** to the Dunthorpe interchange and read 1.2 km at 1.8%. Drag it from
**Ludworth Bench** down through **Thackray Cut** and read 4.1 km at 6.2%. Then
escape out of the tool. The numbers go on the site report; the road does not go
on the map.

**The round of the room at 15:40** is one sentence each and Quaye will cut you
off at two. The form is fixed: *"I am siting on X. I am buying Y and paying with
Z."* Twenty-odd students, forty seconds each. The point is that the sentence is
said in front of witnesses in Week 1 and quoted back at you in Week 4.

### The exercise

The map is issued and loaded. The River Kerrow enters north-west and leaves
south-east; the prevailing wind is WNW; the highway comes in at the north edge
to the Dunthorpe interchange and the rail line enters from the east and runs
along the terrace. That is everything the site tells you before you open an info
view, and it is already enough to name the two candidates the session tests.

**Layer 1, natural resources.** Fertile soil across most of Halstead Reach —
the flat north-east terrace, roughly 4 × 2 km, gradient under 2%. Ore in the
flank of **Verrall Ridge** to the south-west. Forest on the upper slopes. The
finding students should write is not "there are resources" but the forfeit:
every hectare of the terrace you zone is fertile soil taken out of production,
and every dwelling on Ludworth Bench sterilises ore under it. Quaye's line here
is that the site charges you for building on it before you have spent anything.

**Layer 2, water.** Flow direction north-west to south-east. Everything drains
towards **Ombersley Flats** in the south-east, which is downstream of the entire
basin. Students should note the direction as an arrow on the site report, not as
a word — Week 3 places a water intake and a sewage outflow on this river and the
arrow is the only thing that makes those two placements distinguishable from
each other.

**Layer 3, wind.** WNW, steady. Ombersley Flats is downwind of the whole basin;
Ludworth Bench, on the south-west flank of the ridge, is on the windward side
and has the cleanest air on the map. This layer is the one students most often
skip, because at hour zero there is no pollution to see. The correct reading is
prospective: this is the layer that says which ground *can absorb* a nuisance
you have not created yet.

**Layer 4, terrain and contour.** The Reach is under 2% across its whole extent.
The ridge rises about 90 m over 1.5 km, and Ludworth Bench is the one shelf on
it broad enough to hold a settlement — quiet, high, with a view over the entire
basin. Thackray Cut, at 6.2%, is the only westward road gradient off the Reach.
Students should be made to sit with what 6.2% means: it is drivable, it is
buildable, and it is the gradient every service vehicle, every delivery and
every commuter takes twice a day if the settlement is on the Bench.

**Layer 5, outside connections.** Highway at the north edge, 1.2 km from the
Reach at Sallow Head. Rail entering from the east, running the length of the
terrace. This layer prices the site's first cost: the distance from your first
dwelling to the point where the map connects to everywhere else.

**The stack, at 14:55.** Now the land value overlay opens, once, and the two
unimproved readings go on the report: **Reach 14, Ridge 22**. This is the moment
the exercise turns. The ridge is worth more before anybody has done anything to
it, and it will keep that head start — Week 11 reads the district's land-value
curve from this figure forward, and a district that starts at 22 is measuring
its whole semester against a different base than one that starts at 14.

**The measurement segment, 15:00.** Reach to Dunthorpe: **1.2 km at 1.8%**.
Ludworth Bench to Dunthorpe via Thackray Cut: **4.1 km at 6.2%**. Then the
arithmetic Quaye wants on the board, done out loud and not by the tutor: the
Bench needs roughly three and a half times the road length, on gradient, plus
water lifted about 90 m, plus a second service point because one coverage radius
on the Reach reaches most of a first settlement and one on the Bench does not.
None of that is a one-off. All of it appears in the economy panel every month
from the first month, and the opening grant is **₡75,000** against a standing
**−₡2,400/mo** before a single resident arrives.

**The cohort sites on Halstead Reach.** Not unanimously and not because the
Bench is wrong — the Bench is the better place to live and the overlays say so
in three different ways. The Reach is chosen because the arithmetic done at
15:20 is unanswerable at a population of zero with a ₡75,000 grant: the district
that balances its books early is the district that survives to Week 4 with
anything left to spend. What the cohort is buying is fiscal performance. What
it is deferring is the livability bill, and the deferral is the spine of the
whole semester — Weeks 4, 8 and 11 are all, in different ways, the invoice.

### Readings taken this week

| Reading | Where it is read | This week's value | Against last week |
|---|---|---|---|
| Population / households | information panel | 0 / 0 | — this is the zero |
| Monthly balance | economy panel, monthly balance | −₡2,400/mo against a ₡75,000 opening grant | — this is the zero |
| 08:00 travel time | travel-time readout | no trips yet — nothing is built and nobody lives here | — this is the zero |
| Transit share | public transport panel | no lines, no reading | — this is the zero |
| Reach → Dunthorpe | road tool length and gradient readout, at 15:00 | 1.2 km at 1.8% | fixed for the semester |
| Ludworth Bench → Dunthorpe, via Thackray Cut | road tool length and gradient readout, at 15:00 | 4.1 km at 6.2% | fixed for the semester |
| Unimproved land value, Halstead Reach | land value overlay, opened once at 14:55 | **14** | — this is the zero |
| Unimproved land value, Verrall Ridge | land value overlay, opened once at 14:55 | **22** | — this is the zero |
| Happiness | well-being readout | no reading — nobody lives here | — this is the zero |

Nothing moved the wrong way this week, because nothing has moved at all. Week 1
sets the zero, and the entry on the site report against every metric is the
value above with the note *baseline, 08:00, unimproved*. The two distances and
the two land-value figures are the four numbers this session exists to fix: they
are quoted in Week 2's upkeep argument, in Week 3's commute table, and in Week
11's land-value curve, where the district mean is read as a movement from
**14** and not from anywhere else. Write them down correctly today or spend Week
11 arguing from a number you cannot source.

### The tradeoff the session forces

**Fiscal performance against livability**, and it is forced by where the first
road goes rather than by anything the road does. Halstead Reach is 1.2 km from
the interchange at 1.8%, on ground that needs no terracing, with no pumping lift
and one service coverage point reaching most of a first settlement. Ludworth
Bench is 4.1 km away at 6.2% through Thackray Cut, needs water lifted about 90
m, needs two service points to cover the same population, and sterilises ore
under whatever is built on it. Against that: the Bench reads 22 on the
unimproved land value index against the Reach's 14, sits windward of every
nuisance the basin will ever generate, and has the highest land-value ceiling on
the map. It is not the sentimental choice. It is the choice with the better
livability readings from month one and for every month after.

The mechanism that makes this a trade rather than a preference is that both
costs are *monthly*. The 2.9 km of extra road is not a one-off construction
charge that amortises away; it is road upkeep charged by length in the economy
panel every month from the month it is placed until Week 12. The pumping lift is
a per-month energy and maintenance line. The second service point is a second
building with a second operating cost. Meanwhile the Bench's land-value
advantage is also monthly — it is a rate base — but it only pays once there are
buildings on it paying rates, which is Week 3 at the earliest. So the district
that sites on the Bench carries a structural deficit through the exact weeks
when the opening grant is being spent on everything else.

The choice cannot be deferred because Week 2 lays a block pattern and Week 3
zones it, and both are built off the first road. There is no version of this
studio where the site decision is revisited in Week 5 — the save is continuous,
and moving the settlement means abandoning eleven weeks of readings that were
taken somewhere else. Quaye's framing at the board: *this is the only decision
in the semester you make with no data and it is the decision that constrains
every subsequent one.* Which is why the session spends two hours on overlays
before it spends thirty minutes on the answer.

### At the crit

There is no formal crit this week — the equivalent is the round of the room at
15:40 and the desk conversations during the measurement segment. Quaye's
questions, at the desk, in order of how often they get asked:

- What does this site cost you per month, before anybody lives on it? Give me
  the figure off the economy panel, not an impression.
- You have chosen the Reach. Which of the three metrics did that buy you, and
  which one did you pay with?
- Say that again as one sentence with both metrics named in it.
- You have chosen the Bench. Who is paying the pumping and the second service
  point in month one, when the population is zero?
- Your report says the ridge has better air. Better than what? There is no
  pollution on this map yet — what layer told you that, and what does it rule
  out rather than what does it show?
- The unimproved land value on the Bench is 22 and on the Reach is 14. When
  does that eight-point difference start paying you, and what is the balance
  doing in the meantime?
- You have zoned nothing. What population are you sizing this first road for,
  and what does the monthly line look like when that population actually
  arrives?
- Which layer did you read first, and did you open the land value overlay before
  14:55? Show me the order of the screenshots.
- What has the site already forfeited under the ground you have chosen?

The failure mode Quaye is watching for is the student who names a site without
naming a cost — the answer that treats the Reach as obviously correct because
it is flat, or the Bench as obviously correct because the views are better. Both
sites are defensible. Neither is defensible without the arithmetic. She will
keep asking which metric was traded, in those words, until it is named, and a
student who answers "both, really, it's balanced" gets asked a fourth time. The
second failure mode is subtler and shows up on the report rather than in the
room: five screenshots with five descriptions and no findings. A description of
a layer is not a survey. Geddes's rule for the week is *survey before plan*, and
a survey that rules nothing out has not been done.

### What leaves the room

- **The save**, named `<student ID>-w01`, with the standard map loaded, the
  settlement area chosen, and **no roads placed and confirmed**. One copy on the
  machine, one copy off it. Both before you leave the building.
- **The site report**, one page: five screenshots in the session's order —
  natural resources, water, wind, terrain, outside connections — each with one
  sentence saying what that layer rules out. Not what it shows. What it rules
  out.
- **The four baseline figures**, recorded on the report with the note *taken at
  08:00, unimproved*: monthly balance −₡2,400/mo against the ₡75,000 grant;
  Reach → Dunthorpe 1.2 km at 1.8%; Ludworth Bench → Dunthorpe 4.1 km at 6.2%;
  unimproved land value Reach 14, Ridge 22.
- **The settlement sentence**, written on the report in the form said aloud at
  15:40: the site, the metric bought, the metric paid with.
- **The two conventions**, written down: saves are `<student ID>-w<NN>`, one per
  week, one off-machine copy; every reading all semester is taken at **in-game
  08:00** and the memo says so.

The report is due at the start of Week 2's session, brought to the desk. It is
not uploaded and not marked. It is cited in the Assessment 1 defence memo in
Week 4, so a report written carelessly today costs its author in three weeks
rather than this one.

### `spec:` lines

```yaml
spec:
  - "Cities: Skylines II is installed on the machine you will use all semester, with no simulation-altering mods, no unlimited money and no unlock-all."
  - "The Kerrow Basin standard map is loaded in a new save, not regenerated, with no roads placed."
  - "You can name the three metrics — fiscal performance, mobility performance, livability — and say which panel each one is read in."
  - "You have somewhere off this machine to put a save file, and you can put one there today."
  - "You have blank paper or a document open for the one-page site report, which is produced during the session and not afterwards."
```

### Page body plan

Target 450–700 words. Suggested split in brackets.

1. **## Before you arrive** [~90 words] — the map is issued and not regenerated;
   the settings; no roads placed. One sentence saying the lecture is at 10:00
   the same morning and the three metric names come from it.
2. **## What happens in the room** [~180 words] — the run sheet in prose, not as
   a table. The five info views in their fixed order, one at a time, closed
   before the next opens. The road tool unavailable until 15:00 and then
   available only to measure. The land value overlay held back until 14:55 and
   why.
3. **## The two sites** [~150 words] — Halstead Reach and Ludworth Bench set
   against each other with the four canon figures: 1.2 km at 1.8% against 4.1 km
   at 6.2% through Thackray Cut, unimproved land value 14 against 22, plus the
   ~90 m pumping lift and the second service point. State that both are
   defensible and that the indefensible answer is the one given without the
   arithmetic.
4. **## The tradeoff** [~90 words] — fiscal performance against livability, in
   those words, with the reason the choice cannot be deferred: Week 2 lays block
   pattern off the first road and the save is continuous.
5. **## The conventions this session sets** [~80 words] — the save name, the
   off-machine copy, the 08:00 reading convention, and the studio rule that a
   plan claiming all three metrics improved has not been read carefully.
6. **## What you leave with** [~60 words] — the save, the one-page report, the
   four baseline figures, the settlement sentence. Due at the desk in Week 2.

Do not restate the title, date, tutor or related links — the page renders all
four. Do not restate the `spec:` list in the body; `SpecList` renders it beneath
the body with its own preamble.

### Frontmatter deltas

- **Add** `related:` — the file is missing it. It should carry:

  ```yaml
  related:
    - lectures/week-01
  ```

- Remove the `<!-- STARTER_CONTENT: ... -->` comment when the body is written.
- Add the `spec:` array above.
- Do not touch `title`, `description`, `week`, `date` or `teachers`.

### Hand-off

Week 2 receives a settlement area on Halstead Reach, a save at `<student
ID>-w01` with no roads confirmed, and the four baseline figures every later
reading is compared against. Idris Fenn's session cannot start without the
settlement area fixed, because the block pattern is laid inside it and the road
upkeep argument is made against the 1.2 km spur from Sallow Head to Dunthorpe.
The 08:00 convention set at 15:55 today is what makes Week 2's before-and-after
volume readings comparable at all.

Toward **Assessment 1, the Neighbourhood Unit Plan** (Wk 4, 2027-03-15 12:00,
25%): nothing is assessed this week, but the site report is the evidence the
defence memo cites when it explains why the unit is where it is, and the
settlement sentence said aloud at 15:40 is the claim the memo has to make good
on. The livability criterion carries 40 of the 100 marks in that brief, and the
livability position taken by siting on the Reach rather than the Bench was taken
today — the memo either owns that or is marked as though it did not notice.

### New canon introduced

- **Ludworth Bench** — the one shelf broad enough to hold a settlement on the
  south-west flank of Verrall Ridge, about 90 m above the basin floor, windward
  and quiet; the specific ground the Week 1 alternative siting refers to.
- **Sallow Head** — the point at the north-west corner of Halstead Reach where
  the Dunthorpe spur meets the terrace. The studio's fixed datum: every distance
  quoted on the Reach all semester is measured from here.

### Open questions for the writer

- Whether the round of the room at 15:40 is written into the page body as a
  named segment students are told to prepare a sentence for, or left as
  something that happens to them. Telling them produces better sentences and
  costs the exercise its bite.
- How hard to press the Ludworth Bench case on the page. The cohort sites on the
  Reach and the page knows that, but if the Bench reads as a straw man the whole
  semester's arc loses its cost. The two land-value figures do most of the work
  if they are given prominence; the risk is that the body becomes an argument
  rather than an instruction.
- Whether the site report's five sentences are specified as *what this rules
  out* on the page or only in the session. The constraint is the entire
  pedagogical content of the exercise and it is one clause long, so it probably
  belongs on the page.
- Whether the body names Ludworth Bench at all or says "the ridge shelf". A
  named place is quotable in Week 11; an unnamed one costs the canon nothing.

---

## Week 2 — Block Pattern and the Walkability Desk Crit

**Date:** 2027-03-01 · **Studio:** 13:00–16:00, Studio 2.14 ·
**Tutor(s):** Idris Fenn · **Paired lecture:** The Grid vs. the Organic Street · **Assessment:** none

### What the session is for, in one sentence

You will commit to a block dimension in metres for the first residential quarter
on Halstead Reach, get the first population and walk-share readings out of it,
and defend the dimension at desk crit against one question — what is it actually
like to walk here — with before-and-after numbers rather than a description of
them.

### What students arrive with

- **The save**, carried in as `<student ID>-w01`, opened and continued rather
  than restarted. The settlement area on Halstead Reach fixed. The 1.2 km spur
  from **Sallow Head** to the **Dunthorpe interchange** may be placed by now;
  nothing else.
- **The Week 1 site report**, printed or on screen, with the five layer
  screenshots and the four baseline figures on it: −₡2,400/mo against the
  ₡75,000 grant, Reach → Dunthorpe 1.2 km at 1.8%, unimproved land value Reach
  **14**, Ridge **22**.
- **One residential quarter laid out, unzoned**, at one block dimension you have
  chosen and can state in metres. Not a sketch and not a mood — a road network
  placed in the save with a number attached to it.
- **The unzoned 08:00 traffic volume screenshot.** Layout built, nothing zoned,
  simulation run, volume overlay read at 08:00. This is the space-syntax test
  from the lecture and it works precisely because nothing has been zoned into
  the network yet.
- **The close-one-link before-and-after**, run at home: volume on every link at
  08:00, busiest link deleted, volume read again at 08:00 the following in-game
  day. Both readings, as numbers.
- **The road upkeep line** from the economy panel, and the road metres per
  dwelling you have derived from it. Fenn's standing instruction: bring the save
  file, not a screenshot of the save file, and bring the figures, not a
  description of the figures.

A student arriving without the before-and-after numbers is sent to get them and
loses the first desk crit rotation. This is announced in Week 1 and it is not a
threat.

### Run sheet

| Time | Segment | What happens | Who runs it |
|---|---|---|---|
| 13:00–13:10 | Studio opening | The week's one question stated: what is it actually like to walk here. The rule that the answer is a number. | Fenn |
| 13:10–13:45 | Two-minute pin-ups | Every student, unzoned layout plus 08:00 volume overlay, two minutes, standing. Block dimension in metres, and the one decision you are least sure about. | Fenn |
| 13:45–14:15 | Close-one-link, run live | The redundancy test repeated in the room on three volunteered layouts, projected. Before-and-after volume read at 08:00 both times. | Fenn |
| 14:15–14:50 | Zone the quarter | Low-density residential painted to the layout, simulation run forward, first population and walk-share readings taken. | students, at the desk |
| 14:50–15:10 | The paired test, in sandbox | The same tested block re-laid at 160 m in a sandbox save and zoned identically. Walk share read on both. | students, at the desk |
| 15:10–15:45 | Walkability desk crit | Rotating, four desks at a time. One question, asked of every layout: what is it actually like to walk here. | Fenn |
| 15:45–15:55 | Numbers on the board | Every student's walk share, road metres per dwelling and upkeep delta written up in one table. The cohort sees its own spread. | Fenn |
| 15:55–16:00 | Wash-up | Block dimension committed in metres and written into the save's notes. Week 3 zones into it. | Fenn |

**The two-minute pin-ups (13:10–13:45)** are timed and Fenn ends them at two
minutes mid-sentence. You show the layout and the 08:00 volume overlay, you say
the block dimension in metres, and you name the one decision you are least sure
about. That last item is not modesty theatre — it is what the desk crit
rotation gets organised around at 15:10.

**Zoning the quarter (14:15–14:50)** is the segment that surprises students who
read the lecture's pre-work as "zone nothing". Zone nothing was the instruction
for the *unzoned* redundancy test, which needs an empty network. Once that test
is done and read, the quarter gets low-density residential painted to its
frontage and the simulation is run forward to a stable population. This is where
the week's readings come from: without residents there is no walk share and no
happiness figure, and the block dimension argument is unfalsifiable. Zone
residential only. Commercial, industry and the whole use question are Week 3's
business and painting them today makes this week's walk share incomparable with
everybody else's.

**The paired test (14:50–15:10)** is the week's controlled comparison and it
runs in a *sandbox* save, never the assessed one. Take the tested block — the
480 × 480 m square on **Hessel Row**, at the eastern edge of the **Brayhurst
quarter** — and re-lay it at 160 m spacing with the same residential zoning and
the same population target. Read walk share on both. Sandbox saves are never
marked and are the fastest way in the studio to find out how a system behaves
before you commit to it.

### The exercise

The lecture asked one question with a numeric answer: how far apart should two
parallel streets be. The session makes you answer it in metres, in the save,
where the answer has a monthly price.

**The layout.** The first residential quarter on Halstead Reach is the
**Brayhurst quarter** — the ground north of the rail line, running east from
Sallow Head along the terrace. Its extent is not fixed by the studio; you draw
it. What is fixed is that the whole of the semester's residential development
starts inside it, and Weeks 4 to 6 will put named things into it, so a quarter
drawn too tight to grow is a Week 4 problem you are creating in Week 2. Use the
road tool's grid mode and its snapping increments, and notice that the tool
makes a regular layout faster to draw than an irregular one — the block
dimension you pick in the first two minutes propagates across the entire quarter
because repeating it is cheaper than varying it. That is a tool behaviour with a
design consequence and it should be noticed rather than obeyed.

**The unzoned volume read.** Before anything is painted, run the simulation and
open the traffic info view's volume overlay at 08:00. Volume is already uneven.
Nothing has been zoned, so nothing about land use is producing that unevenness —
it is configuration alone, which is the entire claim of space syntax and the
reason the studio measures a layout before it zones into it. Screenshot it. The
links carrying volume on an empty network are the links that will be carrying
your commute in Week 3 and failing in Week 6.

**Close one link.** Note volume on every link at 08:00. Delete the busiest one.
Read the overlay again at 08:00 the following in-game day. On a fine grid the
trips redistribute across three or four parallel routes and volume rises
modestly on several links. On a superblock they go nowhere: the trips that used
the deleted link are re-routed to the remaining collector mouths, a queue forms
at the mouth and it does not clear. This is Alexander's tree-versus-semilattice
diagram made operational on your own save, and it is the single most useful
thing in the session, because the link you lose in Week 8 to a budget cut or in
Week 10 to a flood is a link nobody chose to lose.

**The paired test, at Hessel Row.** The controlled comparison the week turns on.
One 480 × 480 m block, laid twice, zoned identically, run to the same
population. At **80 m** spacing the walk share in that block reads **38%**. At
**160 m** it reads **24%**. Fourteen points of walk share, from nothing but the
distance between two parallel streets. The mechanism is not mysterious and
students should be able to state it: short blocks put almost every zoning cell
on a frontage and give a pedestrian a turn every 80 m, so the walking route
between two points approximates the straight line between them. Long blocks
leave a core the zoning tool cannot reach and force the pedestrian around the
perimeter, so the same 200 m of separation becomes a 400 m walk. Nobody decides
not to walk. The layout decides for them.

**The price.** The fine grid lays close to double the road length per dwelling,
and road upkeep is charged by length, every month, from the month it is placed.
Read it off the economy panel and normalise it: the 80 m grid costs **₡310/mo
more per 1,000 residents in road upkeep** than the 160 m superblock. That figure
is the whole fiscal content of the week and it is the one students should be
able to produce without looking it up, because Week 8 imposes a budget cut on a
district carrying it.

**The district readings.** With the quarter zoned low-density residential and
run forward, the district reads **1,180 residents in 460 households**, an 08:00
travel time of **4.2 minutes**, transit share **0%** — there are no lines yet —
a district walk share of **31%**, happiness **68%**, and a land value index of
**17**, up from the unimproved **14** recorded in Week 1. Note carefully that
the district walk share of 31% and the tested block's 38% are two different
measurements at two different scales, and conflating them is the most common
error on the Week 2 record sheet. The 38/24 pair is the paired test in one
block. The 31% is what the whole district does once the quarter is populated.

### Readings taken this week

| Reading | Where it is read | This week's value | Against last week |
|---|---|---|---|
| Population / households | information panel | 1,180 / 460 | from 0 / 0 |
| Monthly balance | economy panel, monthly balance | −₡1,900/mo | from −₡2,400/mo — deficit narrowed |
| Road upkeep delta, 80 m against 160 m | economy panel road upkeep line, normalised per 1,000 residents | **₡310/mo more per 1,000 residents** on the fine grid | new reading — no Week 1 equivalent |
| 08:00 travel time | travel-time readout, in-game 08:00 | 4.2 min | first reading — Week 1 had no trips |
| Transit share | public transport panel | 0% | unchanged — no lines exist |
| Walk share, district | mobility readout, in-game 08:00 | **31%** | first reading |
| Walk share, Hessel Row block at 80 m | mobility readout on the tested block, 08:00 | **38%** | paired test, assessed save |
| Walk share, Hessel Row block at 160 m | mobility readout on the tested block, 08:00 | **24%** | paired test, sandbox save |
| Happiness | well-being readout | 68% | first reading |
| Land value index, district mean | land value overlay | 17 | from 14 unimproved |

**Fiscal down, mobility up.** Say it in those words and then say where the
fiscal loss actually is, because the balance line does not show it: −₡2,400/mo
became −₡1,900/mo and the deficit *narrowed*. It narrowed because 1,180
residents in 460 households are now paying rates, which has nothing to do with
the block dimension. The fiscal cost of the decision is the **₡310/mo more per
1,000 residents in road upkeep** that the fine grid carries against the
superblock that was not built — a permanent, per-capita, monthly charge that
scales with every resident added between now and Week 12. It is a counterfactual
and it is still a real number: it is read off the economy panel in the sandbox
and off the economy panel in the assessed save, and the difference is the price
of fourteen points of walk share. **A plan claiming all three metrics improved
has not been read carefully** — and this week's temptation is exactly that
claim, because happiness reads 68%, land value has moved 14 → 17, walk share is
31% and the deficit is smaller than it was. Three of those are real. The fourth
is growth paying for itself once, in the one week where the population is small
enough for that to happen.

### The tradeoff the session forces

**Mobility performance against fiscal performance**, forced by the number of
metres between two parallel streets. Route redundancy is bought with road
length: four routes between most pairs of points instead of one, a blocked link
that redistributes instead of failing, and a pedestrian who gets a turn every 80
m instead of every 160. Every metre of that is charged in the road upkeep line
every month for the rest of the semester. The fine grid buys fourteen points of
walk share in the tested block and pays ₡310/mo per 1,000 residents for it,
forever, at every population the district ever reaches.

The mechanism worth naming is that road length is not overhead bolted onto the
dwellings — road length is what *produces* the dwellings, because zoning cells
attach to road frontage to a limited depth. That is why the trade is not
obvious and why students get it backwards. The superblock does not simply cost
less; it costs less *and* leaves a core the zoning tool cannot reach, so the
saving is partly an admission that some of the land inside the block is not
doing anything. The honest comparison is not upkeep per kilometre but upkeep per
dwelling on frontage, which is why the board table at 15:45 normalises
everything per 1,000 residents.

The choice cannot be deferred because Week 3 paints zoning onto this frontage
and Week 6 runs the peak-load stress test against this network. Neither is a
layout you can redraw: zoning follows the roads, and by Week 6 the district is
at 12,800 residents with the **Kerrow corridor** at 118% capacity, and a
district whose block pattern has no redundancy fails that test in Week 6 for a
decision made today. The livability side of this — through-traffic on
residential frontage, the noise overlay landing on the blocks that face it —
is real and is deliberately not the headline trade, because students who lead
with livability stop measuring. Name it, place it, move on.

### At the crit

The walkability desk crit runs 15:10–15:45, four desks at a time, and Fenn asks
one question in nine different ways:

- What is it actually like to walk here? Not the layout — the walk. Pick a front
  door and walk it.
- Before and after. Your busiest link at 08:00 before you deleted it, your
  busiest link at 08:00 after. Two numbers, now.
- You have said the grid redistributes. Redistributes onto what, and by how
  much? Give me the volume on the three links that took the load.
- Your walk share in the tested block is 38% at 80 m. What did the same block
  read at 160 m, and what did the difference cost you in the upkeep line?
- Road metres per dwelling, off the economy panel. Not estimated — derived. Show
  me the two figures you divided.
- You are converting that to one-way to fix the queue. Bring me the
  before-and-after volume, or don't do it.
- Where is the dead core in this layout, and how many cells is the zoning tool
  not reaching?
- You said at pin-up this was the decision you were least sure about. You have
  had two hours. Are you still unsure, and what did you measure in the
  meantime?
- Commit the dimension. In metres. Say the number.

The failure mode Fenn is watching for is the layout defended as a picture: the
student who drew a grid because grids look like plans, or curved the streets
because a curve looks considered, and who has a description where a number
should be. Their standing position is that the first network you draw is a
diagram of your assumptions rather than a plan, and the fastest way to find out
which assumption is wrong is to run it at 08:00 and watch where it fails. The
second failure mode is the fix proposed without a measurement behind it — the
one-way conversion, the extra lane, the roundabout at the collector mouth. Fenn
will not argue with any of them. They will ask for the before-and-after numbers,
and the conversation ends there until the numbers exist.

### What leaves the room

- **The save**, `<student ID>-w02`, with the Brayhurst quarter laid out at the
  committed dimension and zoned low-density residential. One off-machine copy.
- **The sandbox save**, kept but never submitted, carrying the 160 m version of
  the Hessel Row block. Keep it — Week 6 wants a comparison network and rebuilding
  it costs an hour.
- **The block dimension, in metres**, written into the save notes and into the
  record sheet. This is the artefact Week 3 cannot start without.
- **The close-one-link before-and-after**, both volume readings at 08:00, as
  numbers on the record sheet.
- **The paired-test pair**: walk share 38% at 80 m, 24% at 160 m, in the tested
  block on Hessel Row, with the ₡310/mo per 1,000 residents upkeep delta beside
  them.
- **This week's district readings** on the record sheet, every one noted as
  taken at in-game 08:00: 1,180 / 460, −₡1,900/mo, 4.2 min, transit 0%, walk
  share 31%, happiness 68%, land value 17.
- **Three screenshots at the agreed views**: unzoned traffic volume at 08:00,
  post-deletion traffic volume at 08:00, and the zoned quarter with the land
  value overlay on.

Everything above is due at the desk at the start of Week 3. Nothing is uploaded
and nothing is marked.

### `spec:` lines

```yaml
spec:
  - "One residential quarter is laid out in your Week 1 save at a block dimension you can state in metres."
  - "You bring the traffic volume overlay at in-game 08:00 for that layout with nothing zoned into it."
  - "You bring the close-one-link readings as two numbers: volume at 08:00 before the busiest link was deleted, and volume at 08:00 the following day after it was."
  - "You bring the road upkeep figure from the economy panel and the road metres per dwelling you derived from it, with both figures you divided."
  - "You can state the block dimension you chose in metres and say what you were trying to buy with that number."
```

### Page body plan

Target 450–700 words. Suggested split in brackets.

1. **## What to bring** [~110 words] — the Week 1 save continued, the quarter
   laid out unzoned at a stated dimension, the 08:00 volume screenshot, the
   close-one-link before-and-after as numbers, the road upkeep line. One
   sentence: bring the figures, not a description of the figures.
2. **## What happens in the room** [~150 words] — two-minute pin-ups, the
   redundancy test run live on three layouts, zoning the quarter to get a
   population, the sandbox at 160 m, the rotating desk crit, the board table.
3. **## The paired test** [~140 words] — the Hessel Row block laid at 80 m and
   at 160 m: walk share 38% against 24%, at ₡310/mo more per 1,000 residents in
   road upkeep. The mechanism in one sentence — short blocks put a turn every
   80 m and the walk approximates the straight line; long blocks send the
   pedestrian around the perimeter.
4. **## What the readings said** [~110 words] — the district row: 1,180 / 460,
   −₡1,900/mo, 4.2 min, transit 0%, walk share 31%, happiness 68%, land value
   17. Then **Fiscal down, mobility up**, with the explanation that the deficit
   narrowed on growth while the layout's fiscal cost is the ₡310/mo per 1,000.
   Quote the studio rule verbatim.
5. **## The one question** [~90 words] — what is it actually like to walk here,
   and the fact that the acceptable answer is a walked route with a number on
   it. The before-and-after rule for any proposed fix.
6. **## What you leave with** [~60 words] — the committed dimension in metres,
   the save, the sandbox, the readings, the three screenshots.

Do not restate the title, date, tutor or related links, and do not repeat the
`spec:` list — the page renders all of them around the body.

### Frontmatter deltas

- **Add** `related:` — the file is missing it. It should carry:

  ```yaml
  related:
    - lectures/week-02
  ```

- Remove the `<!-- STARTER_CONTENT: ... -->` comment when the body is written.
- Add the `spec:` array above.
- Do not touch `title`, `description`, `week`, `date` or `teachers`.

### Hand-off

Week 3 receives a committed block dimension in metres, the Brayhurst quarter
built and zoned low-density residential at 1,180 residents, and a frontage
inventory — how many cells the layout actually presents to a road, which is the
hard limit on how much of anything Week 3 can paint. Marisol Quaye's session
zones into this network and cannot begin without it; a student arriving in Week
3 with an uncommitted dimension spends the first half hour laying road instead
of zoning. Week 3 also inherits the unzoned volume overlay as its control: the
links that carried volume on an empty network are the links the commute lands on
once uses are separated.

Toward **Assessment 1, the Neighbourhood Unit Plan** (Wk 4, 2027-03-15 12:00,
25%): the mobility criterion at 30 marks is read directly off the block
structure committed today, and the fiscal criterion at 30 marks is read off the
upkeep it generates. The paired test is the evidence the defence memo uses to
show the dimension was chosen rather than defaulted to — 38% against 24% at
₡310/mo per 1,000 residents is an argument; "a fine grid was adopted for
walkability" is not.

### New canon introduced

- **Brayhurst quarter** — the first residential quarter on Halstead Reach, north
  of the rail line and running east from Sallow Head. Its boundary is drawn by
  the student, not fixed by the studio; everything residential the semester
  builds starts inside it.
- **Hessel Row** — a street at the eastern edge of the Brayhurst quarter. The
  480 × 480 m block around it is the studio's tested block, laid at both 80 m
  and 160 m for the paired walk-share test.

### Open questions for the writer

- The lecture's Slide 8 and Slide 10 test the superblock at **240 m**; the spine
  fixes the paired test at **160 m**. The session plan above uses 160 m because
  the spine is canon. Whether the page acknowledges the discrepancy — "the
  lecture's 240 m fragment does not fit inside the tested block, so the studio
  runs 160 m" — or silently uses 160 m is a real choice, and the lecture deck is
  unwritten, so it could also be fixed there instead.
- Whether the page tells students to zone in the session or lets it happen.
  The lecture's pre-work says zone nothing, which is correct for the unzoned
  redundancy test and wrong for the rest of the afternoon. If the page does not
  resolve this explicitly, a third of the room will arrive believing zoning is
  forbidden and will not have a population reading to defend.
- Whether the sandbox 160 m block is required of everyone or run once on the
  projector. Requiring it gives every student their own paired figures and costs
  twenty minutes of a three-hour session; running it once gives the cohort one
  shared pair and a weaker crit.
- How much of the livability consequence — through-traffic on residential
  frontage, the noise overlay against the land value overlay on the same blocks
  — to put on the page, given Week 3 owns the pollution overlays and Week 9 owns
  the public realm.

---

## Week 3 — Zoning the First District

**Date:** 2027-03-08 · **Studio:** 13:00–16:00, Studio 2.14 ·
**Tutor(s):** Marisol Quaye · **Paired lecture:** Zoning and the Myth of Separation · **Assessment:** none — the Assessment 1 brief is issued in this session

### What the session is for, in one sentence

You will paint a use onto every cell of the block pattern you committed to last
week, build the separated and the adjacent scheme side by side, and put land
value against commute distance for one named front door until you can say which
of the two costs your district is better able to carry.

### What students arrive with

- **The save**, carried in as `<student ID>-w02`, with the **Brayhurst quarter**
  laid out at the committed block dimension and zoned low-density residential at
  **1,180 residents in 460 households**.
- **The block dimension in metres**, written into the save notes. The session
  zones into this network and cannot start without it.
- **Last week's readings** on the record sheet, all at in-game 08:00:
  −₡1,900/mo, 4.2 min, transit 0%, walk share 31%, happiness 68%, land value 17.
- **The paired-test figures** — walk share 38% at 80 m against 24% at 160 m in
  the Hessel Row block, at ₡310/mo more per 1,000 residents in road upkeep. Week
  3 quotes them when it explains what happened to walk share.
- **The unzoned 08:00 volume overlay** from Week 2. It is this week's control:
  the links that carried volume on an empty network are the links the commute is
  about to land on.
- **The wind info view findable in under ten seconds, and the prevailing
  direction known.** WNW, from the Week 1 site report. If half the room cannot
  produce the direction, the pollution comparison is meaningless and the first
  fifteen minutes go on recovering it instead of on zoning.
- **A sandbox save** ready to branch. The second scheme is built in it.
- **One named dwelling** in the Brayhurst quarter, chosen before you arrive. An
  address, not an average. Every commute figure this week is measured from that
  front door.

### Run sheet

| Time | Segment | What happens | Who runs it |
|---|---|---|---|
| 13:00–13:15 | Opening — the palette | The zoning palette walked through as what it is: a use-based code with one mixed-use exception. Every cell you can paint names a use. | Quaye |
| 13:15–13:55 | Scheme A, in the assessed save | Residential on the terrace, commercial strip on the Brayhurst collector, industry in the Pellow cells. Run forward. | students, at the desk |
| 13:55–14:25 | Scheme B, in sandbox | Same block layout, same population: mixed housing on the two main frontages, corner cells, industry on the eastern edge of the Reach at 0.8 km. | students, at the desk |
| 14:25–14:50 | Utilities pass | Water, sewage and power placed far enough to service the district at its current size. Costed off the economy panel. Not designed — Week 7's clinic does that. | students, at the desk |
| 14:50–15:05 | Overlay round | Ground, air and noise pollution read on both schemes at 08:00, then traffic volume on both at 08:00. Four screenshots. | Quaye |
| 15:05–15:35 | Land value against commute | The board table built live: land value index and home-to-work distance from one named dwelling, both schemes, every desk contributing a row. | Quaye |
| 15:35–15:50 | Commit, and the round of the room | One scheme committed to the assessed save. Each student, one sentence: which metric was traded. | Quaye |
| 15:50–16:00 | Assessment 1 issued | The Neighbourhood Unit Plan brief handed out and read in the room. Due Week 4, 2027-03-15, 12:00. 25%. | Quaye |

**The two schemes (13:15–14:25)** are both built and both read, and the studio
does not indicate a preference before 15:05. Scheme A is the separated scheme
and it goes in the assessed save because it is the one most of the room will
commit to; Scheme B is the adjacent scheme and it goes in a sandbox. Sandbox
saves are never marked. Building both is forty minutes of work and it is the
only way the 15:05 table has two columns in it.

**The utilities pass (14:25–14:50)** is deliberately short. The district needs a
water source, a sewage outflow and power, and it needs them at the scale it is
at now — 3,600 residents, not 25,000. Place them, read the monthly cost off the
economy panel, and move on. The full treatment of water, waste and their
capacities is the Week 7 utilities clinic with Nadia Ilkhom, and anyone who
spends half an hour here optimising a pumping arrangement is doing Week 7's
exercise four weeks early and will not have a scheme to commit at 15:35.

**The board table (15:05–15:35)** is the session's actual content. Two columns,
Scheme A and Scheme B, and four rows: land value index at the district mean,
land value index at the eastern blocks, home-to-work distance from the named
dwelling, and 08:00 travel time. Every desk reads its own four figures out and
Quaye writes them up. The cohort's spread is the teaching: the room discovers
that the answer is not unanimous, and that the two schemes are not better and
worse but differently expensive.

### The exercise

You have a block layout with 1,180 people living in it. This week you say what
goes in the rest of it, and the palette makes that a decision about use whether
you want it to be or not — residential by density, row housing, mixed housing,
commercial low and high, office, industry. There is no cell you can paint that
does not name a use, which is worth saying out loud: the software ships a
use-based code, and Euclid would recognise it.

**Scheme A — separated.** Residential stays on the terrace north of the rail
line. Commercial goes as one strip on the Brayhurst collector at the quarter's
edge. Industry goes to **the Pellow cells**, on Ombersley Flats in the south-east
of the basin. The reasoning is the ordinary reasoning and it is worth writing
out in full, because it is the reasoning almost every student produces
independently: the Flats are downwind under a WNW prevailing wind and downstream
on the Kerrow, so ground, air and water pollution leave the map rather than
landing on housing; the ground is flat and cheap and nobody is competing for it;
and the land under it is the only land in the basin that has no better use.
Against that, the Works sits about 3.2 km from the nearest dwelling across the
river, so the district buys a bridge and an arterial to it, and every worker and
every freight movement makes that crossing twice a day on the one link that
exists. Build it, price the crossing off the economy panel, and note the figure.

**Scheme B — adjacent.** Same block layout, same population. Mixed housing on
the two main frontages of the quarter with commerce beneath the dwellings, plus
corner cells where two blocks meet. Industry on the eastern edge of the Reach,
0.8 km from the nearest dwelling, no crossing. The commute collapses and the
walk share holds. Then open the ground pollution overlay and read the footprint
on the eastern blocks you zoned last week, and open the air overlay and watch a
plume of exactly the same size as the Ombersley plume sit on housing instead of
leaving the map. The plumes are the same size. The difference is siting relative
to wind and flow, which is the entire content of Howard's ring drawn on this
map.

**The utilities.** With the district at 3,600 residents the water and sewage
requirement is straightforward and the placement is a cost exercise rather than
a design one. The outflow goes on the Kerrow below the Works — the shortest
possible run from the industrial area and the treatment plant, on ground the
district has already bought. The district intake goes on the river below the
Flats, and the main runs back to the district inside the arterial alignment
Scheme A has just paid for: no new easement, no second river crossing, no trench
the district has not already dug. Utilities in a corridor you have already
bought is the cheapest infrastructure decision available in the session, and at
a monthly balance that has only just crossed into surplus it is the only one
that does not need arguing for. Power comes off the existing
connection. Read the monthly cost, note it on the record sheet, and leave the
capacities alone — Week 7's clinic takes water and waste properly, with the
loads a district four times this size actually generates.

**The named dwelling.** Pick one front door in the Brayhurst quarter, by
address, and measure home-to-work from it under both schemes. Under Scheme A it
is about 3.2 km with one crossing and one route. Under Scheme B it is about 0.8
km with several routes, depending on the block dimension committed last week. An
average commute distance is a number nobody has to defend. A named front door is
a number somebody lives behind, and it is what Quaye will ask for at 15:20.

**What the district does.** With Scheme A committed and run forward, the
district reaches **3,600 residents in 1,410 households** and the monthly balance
crosses into surplus for the first time at **+₡900/mo**. Land value lifts to
**24** and happiness to **72%** — strict use separation put no pollution on any
dwelling, and both readings say so. And 08:00 travel time goes from 4.2 minutes
to **6.8**, and walk share falls from 31% to **22%**, because separation
lengthened every trip in the district at once. The district is richer, cleaner
and happier, and it takes half again as long to get anywhere in it.

### Readings taken this week

| Reading | Where it is read | This week's value | Against last week |
|---|---|---|---|
| Population / households | information panel | 3,600 / 1,410 | from 1,180 / 460 |
| Monthly balance | economy panel, monthly balance | **+₡900/mo — first surplus** | from −₡1,900/mo |
| 08:00 travel time | travel-time readout, in-game 08:00 | **6.8 min** | from 4.2 min — worse |
| Transit share | public transport panel | 0% | unchanged — no lines exist |
| Walk share, district | mobility readout, in-game 08:00 | **22%** | from 31% — down nine points |
| Happiness | well-being readout | 72% | from 68% |
| Land value index, district mean | land value overlay | 24 | from 17 |
| Home-to-work, named dwelling, Scheme A | measured route from the chosen address | ~3.2 km, one crossing, one route | new reading |
| Home-to-work, named dwelling, Scheme B | measured route from the chosen address, sandbox | ~0.8 km, several routes | new reading |

**Mobility down.** Say it in those words. Travel time went 4.2 → 6.8 minutes and
walk share went 31% → 22%, and neither is a congestion problem — the district
has 3,600 people in it and nothing is queuing. The trips got longer because the
code put the destinations further away. Strict Euclidean separation lifted land
value and balanced the books by lengthening every trip, and it did it the same
week the district posted its first surplus, which is why this is the week the
studio rule earns its place: **a plan claiming all three metrics improved has
not been read carefully.** The temptation is acute here because two of the three
genuinely did improve, and improved for reasons the student can honestly claim
credit for. The nine points of walk share are the bill, and they are paid at
every population the district reaches from now on.

### The tradeoff the session forces

**Livability against mobility performance**, forced by where the industry goes.
Sited in the Pellow cells, the industrial area's ground, air and water pollution
leave the map instead of landing on housing: the ground pollution overlay over
the Brayhurst quarter reads clean, land value lifts to 24, happiness lifts to
72%. Sited on the eastern edge of the Reach at 0.8 km, the commute collapses to
under a kilometre with no crossing and the walk share holds near 31% — and the
ground pollution overlay puts a measurable footprint on the eastern blocks
zoned last week, with an air plume of identical size sitting on housing rather
than clearing the map boundary.

The mechanism is distance, and distance is charged twice. Once in the traffic
volume overlay, where every work trip in Scheme A crosses the same collector
mouth and the same bridge in the same two windows of the day, and once in what
that concentration does to everything downstream of it in the schedule — Week 5
runs a transit spine at ₡4,800/mo to operate partly because Week 3 built a
district where the trips are long enough to be worth carrying. Scheme B's costs
are diffuse and land on livability, where they are harder to buy back: a
pollution footprint on a residential block is not fixed by adding capacity, and
the land value it suppresses stays suppressed.

The choice cannot be deferred because Assessment 1 is due next Monday at 12:00
and the unit it asks for sits inside whichever scheme is in the assessed save at
15:35 today. It also cannot be half-taken. A district that puts industry in
the Pellow cells and then zones a second industrial cell on the eastern edge
"for local employment" has bought the crossing, the arterial and the pollution
footprint, and Quaye will find it on the overlay in Week 4. Commit to one
scheme, in the assessed save, before you leave.

### At the crit

Quaye takes the desks from 15:05 while the board table is being built, then
runs the room from 15:35. The questions:

- Land value against commute distance. Your two figures, from the named
  dwelling, both schemes. Read them out.
- Which front door did you measure from? Give me the address, not the mean.
- Your land value went 17 to 24. What did that cost, and where do I read the
  cost?
- Walk share went 31 to 22. Which of the three metrics is that, and did you
  trade it or did it happen to you?
- Say that again with the metric named.
- Your commercial strip is on the collector at the quarter's edge. How far is it
  from the furthest dwelling that has to use it, and what happens to that
  building if the answer is too far?
- You have painted mixed housing on the main frontages. What did the ground
  pollution overlay do to the eastern blocks, and what did it do to their land
  value?
- The surplus is ₡900 a month. What is it going to be when the population you
  have zoned for actually arrives, and what are you planning to spend it on?
- You are claiming the separated scheme is better. Better on which metric, and
  which one did you pay with?

The failure mode Quaye is watching for is the scheme presented as having no
cost. Both schemes have been defended successfully at this studio's juries and
the answer the jury will not accept is the one that claims the choice was free.
She will keep asking which metric was traded, in those words, until it is
named — and the student who says "the separated scheme is just better for
livability" gets asked what happened to the 08:00 travel time, and then gets
asked again, and the crit does not move on. The second failure mode is the
average: a student who has measured commute distance across the district rather
than from one front door has produced a number that cannot be wrong and
therefore cannot be argued with, which makes it useless at a crit.

### What leaves the room

- **The save**, `<student ID>-w03`, with one scheme committed, the district
  zoned, and the utilities placed and costed. One off-machine copy.
- **The sandbox save** carrying the uncommitted scheme. Keep it. Week 4's
  amenity core argument is easier to make against a version of the district that
  did the opposite thing.
- **Four screenshots at 08:00**: ground pollution and traffic volume, for each
  scheme.
- **The named dwelling's two commute figures** — one address, both schemes,
  distance and route count.
- **This week's readings** on the record sheet, every one noted as taken at
  in-game 08:00: 3,600 / 1,410, +₡900/mo, 6.8 min, transit 0%, walk share 22%,
  happiness 72%, land value 24.
- **A one-line statement of which scheme was committed and which metric it
  traded**, written on the record sheet in the same form as Week 1's settlement
  sentence.
- **The Assessment 1 brief**, issued at 15:50. Neighbourhood Unit Plan, due
  Monday 2027-03-15 at 12:00, **25%**, marked livability 40 / fiscal 30 /
  mobility 30. Read Perry before you read the brief.

### `spec:` lines

```yaml
spec:
  - "Your Week 2 save opens with the Brayhurst quarter built at a committed block dimension and zoned low-density residential."
  - "You can open the wind info view and state the map's prevailing wind direction without looking it up."
  - "You have chosen one dwelling by address in your quarter, and every commute distance you quote this week is measured from it."
  - "You build both the separated and the adjacent zoning scheme, the second one in a sandbox save, and read ground pollution and traffic volume on each at in-game 08:00."
  - "You bring a sandbox save you are willing to build a second, uncommitted zoning scheme in."
```

### Page body plan

Target 450–700 words. Suggested split in brackets.

1. **## What to bring** [~100 words] — the Week 2 save with the quarter zoned,
   the committed dimension, the wind direction, a sandbox save, and one dwelling
   chosen by address.
2. **## What happens in the room** [~130 words] — the palette walked through,
   both schemes built, the utilities pass, the overlay round, the board table,
   the commit, the brief issued at 15:50.
3. **## The two schemes** [~150 words] — Scheme A separated, industry in
   the Pellow cells, 3.2 km and one crossing, no pollution at the dwellings.
   Scheme B adjacent, 0.8 km and several routes, a measurable footprint on the
   eastern blocks. Both plumes the same size; the difference is siting relative
   to wind and flow.
4. **## The utilities pass** [~60 words] — water, sewage and power placed to
   service the district at its current size and costed off the economy panel.
   Outflow below the Works; intake below the Flats, with its main running inside
   the arterial alignment Scheme A already paid for — no new easement, no second
   crossing. Do not use "shortest pipe run" as the reason; on this map it is not
   true and a careful reader will check. State it as the cost exercise it is and
   pass straight to the next section. **The body places both, prices both, and comments on neither.**
   No character raises the question and gets waved off; nothing is flagged,
   deferred or reassured about. The one forward reference permitted is the
   ordinary scheduling note that Week 7's clinic takes utilities properly.
5. **## What the readings said** [~110 words] — 3,600 / 1,410, +₡900/mo first
   surplus, 6.8 min, walk share 22%, happiness 72%, land value 24. Then
   **Mobility down**, and the studio rule quoted verbatim.
6. **## The tradeoff, and what you commit** [~90 words] — livability against
   mobility performance, the named front door, and the instruction to commit one
   scheme before leaving because Assessment 1 is due Monday at 12:00.

Do not restate the title, date, tutor or related links, and do not repeat the
`spec:` list — the page renders all of them around the body.

### Frontmatter deltas

None — the frontmatter is correct as it stands. `related: [lectures/week-03]`
is already present. Remove the `<!-- STARTER_CONTENT: ... -->` comment when the
body is written and add the `spec:` array above. Do not touch `title`,
`description`, `week`, `date` or `teachers`.

### Hand-off

Week 4 receives a district of 3,600 in 1,410 households, one zoning scheme
committed, a first surplus of ₡900/mo to spend, and a walk share of 22% that
somebody has to get back. Quaye's Week 4 session upzones the amenity core at
Pelling Street with Sunniva Marek in the room, and it is buying back exactly
what this week gave away: the 6.8-minute travel time recovers to 5.9 and walk
share to 34% because mixed use is reintroduced at one location rather than
across the district. Week 4 cannot make that argument unless Week 3 committed
to separation cleanly and measured what it cost.

Toward **Assessment 1, the Neighbourhood Unit Plan** (Wk 4, 2027-03-15 12:00,
25%, marked livability 40 / fiscal 30 / mobility 30): the brief is issued in
this session and the unit it asks for sits inside the scheme committed at 15:35.
The livability criterion is read largely off the pollution and service-coverage
consequences of that scheme; the mobility criterion is read off the commute
distances it generates, measured from the named dwelling; the fiscal criterion
is read off the ₡900/mo surplus and what it was spent on. Weeks 1, 2 and 3 hand
the brief three things between them: the ground (Week 1's settlement sentence),
the network (Week 2's committed block dimension and its ₡310/mo per 1,000
upkeep delta) and the code (this week's scheme and the nine points of walk share
it cost).

Two things placed this week are picked up later and the writer should know it
even though the page must not say it. The district intake sits downstream of the
Ombersley outflow, which is the Week 7 cascade — the utilities clinic finds the
water intake below the outflow, Farrant Row goes on a boil notice, and happiness
falls to 61%. And the low blocks at the Pellow cells sit inside Tuckwell Bend,
which is the Week 10 flood envelope. Both are consequences of a zoning decision
made this week for cost reasons that were correct at the time, on a checklist
that measured pollution at the dwellings and distance to work, and found both
acceptable.

### New canon introduced

- **The Pellow cells** — the industrial area zoned on Ombersley Flats in Week 3;
  downwind, downstream, flat and cheap. Their outflow is on the Kerrow below
  the cells. The site of the Week 7 service failure and inside the Week 10
  flood envelope. *Name carried in from `notes/lecture-plans.md` (Week 10),
  which already calls this ground the Pellow industrial cells — the studio and
  the lecture must name it the same thing.*

### Open questions for the writer

- Whether the district intake is named on the page or described by position
  ("on the river below the Flats"). Unnamed is safer for the register — a named
  intake invites a reader to look at it — and Week 7's writer owns Wensley Bank
  and may want to name it themselves.
- Whether Scheme A's river crossing is given as a costed figure or left for
  students to price in the economy panel. Pricing it live is better studio
  practice and makes the board table at 15:05 slower to reach; the spine fixes
  no figure for it either way, so if the page gives one it is coining a number
  that Weeks 4–12 may then have to honour.
- Whether the Assessment 1 brief being issued at 15:50 is on the session page at
  all, given the assessment page carries the brief and the due date. A one-line
  cross-reference is probably right; restating the weighting on the session page
  risks the two drifting apart, and `notes/lecture-plans.md` is already stale on
  exactly that.
- How to write the utilities pass so it reads as short because it is
  unimportant, rather than short because something is being withheld. The
  register does not wink, and the sentence "Week 7's clinic takes utilities
  properly" is doing the entire job — it has to sound like a timetable, not a
  promise.

---
## Week 4 — Upzoning the Amenity Core

**Date:** 2027-03-15 · **Studio:** 13:00–16:00, Studio 2.14 ·
**Tutor(s):** Marisol Quaye (chair), Sunniva Marek (visiting critic) · **Paired lecture:** Density and the 15-Minute City · **Assessment:** A1 — Neighbourhood Unit Plan, 25%, uploaded 12:00, pinned up 13:00, defended at this session

### What the session is for, in one sentence

You defend the cell you have drawn in front of somebody who was not there when
you drew it, and you say out loud which two of the three metrics you traded to
get it.

### What students arrive with

- The save `<student ID>-w03`, loaded and advanced to in-game 08:00. Not a
  screenshot of it. The save is opened at the wall when a juror asks a question
  the screenshots cannot answer, and a student who has only images answers
  nothing.
- **Assessment 1 uploaded by 12:00** — the screenshot set and the defence memo
  of no more than 800 words. The upload closes at 12:00; the studio opens at
  13:00. There is one hour between them and it is for hanging, not for writing.
- The printed plan at A3, at minimum: the cell at Perry's dimensions with the
  district-tool boundary visible, the amenity core at Pelling Cross, and the
  Kerrow corridor drawn where it actually runs relative to your boundary.
- The three required views, printed and hung, not left in the upload: the Land
  Value info view over the cell; the coverage radius of **every** service
  building you sited, each captured with the building selected; the traffic
  volume layer of the Traffic info view showing the Kerrow corridor along the
  cell boundary.
- Week 3's readings, carried on the standard sheet: **+₡900/mo**, **6.8 min** at
  08:00, transit 0%, walk share **22%**, happiness **72%**, land value index
  **24**. These are the numbers your plan is claiming to have moved.
- The Week 3 decisions the plan is acting on: strict Euclidean separation of
  uses across Halstead Reach, and industry sited on Ombersley Flats — downwind,
  downstream and cheap. Both are still in the save. Neither is reopened today.
- Two figures written on the front of the memo where a juror can find them
  without reading it: what the cell costs per month, and what the cell returns
  per month. Both come off the budget panel's per-district income and outlay.

### Run sheet

| Time | Segment | What happens | Who runs it |
|---|---|---|---|
| 13:00–13:15 | Hanging and the charge | Work goes up on the long wall in submission order. The chair reads the charge: the marking criteria, the six-minute clock, and the rule about work that is not on the wall. | Quaye |
| 13:15–14:05 | Jury round one | Eight plans, six minutes each, held to the clock. Two minutes standing, four minutes of questions. | Quaye, Marek |
| 14:05–14:15 | Recess; jury confers at the wall | The room leaves. The jurors walk the eight and agree what the wall has in common, which becomes the visiting critic's round. | Quaye, Marek |
| 14:15–15:05 | Jury round two | The remaining eight plans, same clock, same shape. | Quaye, Marek |
| 15:05–15:25 | The visiting critic's round | Marek addresses the wall as one wall rather than as sixteen plans, and asks what sixteen people did identically without deciding to. | Marek |
| 15:25–15:45 | The metric round | Every student, in turn, names the two metrics their plan traded and points at where on their sheet that trade is visible. One sentence each. | Quaye |
| 15:45–16:00 | Wash-up and hand-off | The core-versus-edge land value split is read off the wall as a cohort result. What Week 5 receives. Marks return in ten working days. | Quaye |

**Hanging, 13:00–13:15.** The wall is hung in submission order, not by
preference, so nobody chooses to go last. Each plan gets a 1.2 m bay: the A3
plan at the top, the three required views beneath it in a row, and the two
figures — monthly cost, monthly return — written on a card at the bottom of the
bay in a hand a juror can read from two metres. **Work that is not on the wall
at 13:00 is marked from the 12:00 upload alone.** Nothing is deducted for that
and nothing is added either: the plan is read, the criteria are applied, and the
questions that would have moved it out of the middle band are not asked, because
there is nobody at the bay to answer them. This is not a penalty clause. It is
a description of what a jury can and cannot do.

**The six-minute clock.** Two minutes standing, then four minutes of questions,
and the chair calls time mid-sentence if the two minutes runs long. Two minutes
is enough for three things and not four: what the cell is, what the shortfall
was, and which move you used to close it. Students who spend the two minutes
describing the plan get four minutes of questions about the parts they did not
reach. The clock is not adversarial; it is the same two minutes a plan gets when
it is presented anywhere outside a school, and the lecture said so at 10:00.

**The metric round, 15:25–15:45.** Sixteen sentences in twenty minutes. This is
the segment students think is a formality and it is the one the chair schedules
first. A student who can say *I traded livability against fiscal performance,
and it is visible in the clinic siting on the Kerrow corridor* has done the
thing the marking criteria are for. A student who says *I balanced all three*
is asked again, and asked again after that, and the transcript of that exchange
is what the chair reads when the mark is close to a band boundary.

### The exercise

The morning's lecture ended on slide 13: two moves that each close a monthly
shortfall of roughly ₡1,300 on a Perry cell, and no siting that gets both. The
session is where the cohort finds out that the two moves do not merely cost
different amounts — they move different metrics, in different directions, and
the overlay shows it.

**Upzoning the frontage at Pelling Cross.** Pelling Cross is the Pelling
Street / Halstead crossing at the middle of the cell, and it is the point every
radius in this week's work is struck from. With the zoning tool, the frontage
blocks either side of Pelling Street are taken from low density residential to
**mixed housing**, and the two blocks behind them to **medium density
residential**, stepping down to the existing low density at the cell edge. That
is roughly +1,400 residents inside the 400 m circle. Watch two things as the
buildings come in: the ground-floor tenancies on Pelling Street and whether
they hold their level, and the residential demand bars, which will tell you
whether you have added density the district wanted or density it did not.

**Testing the radius rather than drawing it.** The 400 m and 1,200 m circles
are trivial to draw and they are not the exercise. Select each service building
in turn and read the coverage radius the model actually draws for it — the
elementary school first, because Perry's whole diagram is arranged around it.
On flat ground the school's radius covers the cell. Struck from Pelling Cross
towards the rising ground at Denton Hill, the 1,200 m circle is not a circle:
the walk gives out before the distance does, and the model's pedestrian pathing
will show you cims routing round the gradient rather than up it. Record where
the western arc actually falls. It is not where your compass put it, and the
gap between the two is the most useful thing on your sheet.

**The clinic, which is the decision.** Sited inside the cell, the clinic sits an
eleven-minute walk from the furthest dwelling and the cell carries its whole
upkeep. Moved onto the Kerrow corridor as a catchment shared between three
cells, the cell's share of that upkeep falls by about two-thirds and the
deficit closes — and the eleven-minute walk becomes a twenty-four-minute walk,
which is to say it becomes a car trip. Build it both ways. Advance twelve
in-game months on each. Bring both monthly balance figures to the wall. The
jury does not care which one you chose; it cares whether you can say what the
other one would have cost.

**The noise overlay, which is where the week turns.** After the frontage
upzoning has settled, open the noise pollution overlay across the Pelling Cross
blocks and then the happiness reading beneath it. The mixed-use core did what
the lecture said it would: mobility recovered, the mean land value rose, and the
blocks nearest the amenity got noisier and less happy. The Land Value info view
over the whole cell now shows a gradient rather than a field, and both ends of
that gradient are your plan. Read the core blocks and the edge blocks
separately and write both numbers down. A single district mean, this week, is
not a reading — it is an average of two different districts.

**What the arterial is doing.** Perry put through movement on the boundary and
never through the interior. Open the traffic volume layer and check whether the
Kerrow corridor has stayed on your boundary or found a line through the middle
of your cell. If your interior streets are carrying corridor traffic, the
mobility criterion is being marked on a network you did not design, and the
jury will find it in the third question.

### Readings taken this week

All readings at in-game 08:00, on the save carried in as `<student ID>-w03` and
saved out as `<student ID>-w04`.

| Reading | Where it is read | This week's value | Against last week |
|---|---|---|---|
| Population / households | city information panel | 6,900 / 2,650 | 3,600 / 1,410 |
| Monthly balance | budget panel, per-district income and outlay | **+₡2,100/mo** | +₡900/mo |
| Travel time, 08:00 | travel-time readout, city information panel | **5.9 min** | 6.8 min |
| Transit share | Transportation Overview | 0% | 0% |
| Walk share | Transportation Overview, mode split | **34%** | 22% |
| Happiness | happiness overlay, district | **69%** | 72% |
| Land value index, district mean | Land Value info view | **31** | 24 |
| Land value index, Pelling Cross core blocks | Land Value info view, core blocks only | **48** | not separated |
| Land value index, cell edge blocks | Land Value info view, edge blocks only | **19** | not separated |

**Livability is the metric that moved the wrong way.** Happiness fell from 72%
to 69%, and it fell in the blocks nearest the thing that made the district
better — the noise of a working high street, in the dwellings closest to it.
The awkward part is that livability's other reading rose: the district mean land
value went 24 to 31. Both are livability. A student who quotes the mean and not
the happiness has reported half of one metric and called it a result, and a
student who quotes the happiness and not the mean has done the same thing in the
other direction. Mobility recovered — 6.8 min to 5.9 — and fiscal performance
improved, +₡900 to +₡2,100. That is two of three up and one split, and it is
worth saying the studio rule in the room before somebody writes the memo
sentence that breaks it: **a plan claiming all three metrics improved has not
been read carefully.** The core reads 48 and the edge reads 19. That gradient
is not a defect in the reading. It is the plan.

### The tradeoff the session forces

**Livability against fiscal performance**, and the instrument is the clinic.
Inside the circle it is a service the cell cannot yet fund at 2,650 households;
the walk works and the balance sheet does not. Shared across three cells on the
Kerrow corridor, the cell's share of ₡2,400/mo upkeep falls to about ₡800, the
shortfall closes, and the amenity that made the fifteen-minute claim true has
left the fifteen minutes. There is no third siting. The lecture put both
options on one slide precisely so that nobody could arrive at the jury claiming
not to have known there was a choice.

The mechanism, stated without the moral: a service building's upkeep is charged
whole and its coverage radius is drawn from where it stands. Sharing the upkeep
means sharing the radius, and a radius shared between three cells is centred on
none of them. The upzoning at Pelling Cross is the same tradeoff run the other
way — it closes the same ₡1,300 by adding rate-paying residents rather than by
subtracting upkeep, and it pays in happiness in the core blocks and in a school
that reaches capacity with a catchment that has not been redrawn. Either move
closes the number. Neither move is free, and the memo is where you say which
one you bought.

The choice cannot be deferred because the mark is today. But it also cannot be
deferred inside the save: the clinic's siting sets the coverage radius that
Week 5's stop catchments are drawn against, and the frontage upzoning sets the
density the transit spine will or will not have anybody to carry. A cell that
has not decided by 16:00 today decides by default in Week 5, when the line is
routed past whatever is there.

### At the crit

**Marisol Quaye, chairing:**

- Which two of the three metrics did you trade against each other, and where on
  this wall is that decision visible? Point at it.
- What does the cell cost per month, and what does it return per month? Two
  figures. Not a description of the figures.
- You have closed a shortfall of about ₡1,300 a month. Which of the two moves
  did you use, and what would the other one have cost you? I want the number you
  did not choose.
- Your district mean is 31. Your core reads 48 and your edge reads 19. Who pays
  the rates on the 19, and what do they get for them?
- Happiness went 72% to 69% in the core blocks. Name the metric that moved the
  wrong way. — *(and, after "it's complicated", again: name it.)*
- You upzoned the frontage and the land value went up. Your residential rate
  slider is still at the default. So who captured the increment — the district,
  or the frontage?

**Sunniva Marek, visiting critic:**

- Who does the school catchment exclude? Perry's diagram does not answer that,
  and I cannot find the place in yours where it is answered either.
- It is year ten. The cell's population has changed and the school has not.
  What on this wall is the first thing you would change, and can it actually be
  changed, or is it a road?
- I have your screenshots and twenty minutes, which is about what a plan gets
  before somebody decides about it. Nothing in front of me says what happens on
  the 19-index edge. Was that a decision, or an omission?
- Sixteen of you have drawn a cell. Not one of you has drawn what is on the
  other side of the boundary. Why is that the same drawing sixteen times?

**The failure mode the jury is watching for** is the plan that closed the
number without recording which move closed it. It looks finished from two
metres: the balance is positive, the mean land value is up, the views are all
hung. It falls apart on the second question, because the two figures on the card
were transcribed from the panel rather than reasoned to, and the student cannot
say what the alternative siting would have cost. A beautiful bay with an unnamed
tradeoff marks in the middle band and no higher, and the metric round at 15:25
is the last chance the studio gives anyone to move out of it.

### What leaves the room

- The save `<student ID>-w04`, plus the off-machine copy, saved before you leave
  the machine and not after.
- Two branch saves from the clinic comparison, kept for one week:
  `<student ID>-w04-clinic-in` and `<student ID>-w04-clinic-shared`, each
  advanced twelve in-game months, with the monthly balance figure from each
  written on the readings sheet.
- The nine readings above, recorded on the standard sheet, with the core and
  edge land value entered as separate rows. A sheet with one land value row is
  returned to the student to complete before they leave.
- The three required views, taken down from the wall and re-uploaded if any was
  reprinted or corrected during the session, by 17:00 the same day.
- One line, written on your readings sheet at the wall during the metric round
  and initialled by the chair: the two metrics you traded, and the element of
  the plan where the trade is visible.
- Nothing else is submitted. Assessment 1 closed at 12:00. Marks and written
  comments return in ten working days.

### `spec:` lines

```yaml
spec:
  - "Your Neighbourhood Unit Plan is uploaded by 12:00 on 15 March and hanging on the wall by 13:00."
  - "You arrive with the save `<student ID>-w03` loaded and advanced to in-game 08:00, not a screenshot of it."
  - "Your hung set includes the Land Value info view over the cell, the coverage radius of every service building you sited, and the traffic volume layer along the Kerrow corridor boundary."
  - "The card at the bottom of your bay states what the cell costs per month and what it returns per month, as two figures in ₡."
  - "You name, out loud at the jury, which two of the three metrics your plan traded and the element of the plan where that trade is visible."
```

### Page body plan

Target 450–700 words. The page already renders the title, the date, the spec
list, the teaching team and the related links, so the body opens on the room and
never restates any of those.

1. **`## The jury`** (~120 words) — what kind of room this is: sixteen bays, six
   minutes each, two rounds, a visiting critic who has not seen the work before
   and a chair who has seen all of it. One sentence on the recess and why the
   room leaves.
2. **`## Before 13:00`** (~90 words) — the upload closes at 12:00 and the wall
   is hung by 13:00; what goes in the bay and in what order; the rule about work
   that is not on the wall, stated plainly and without threat.
3. **`## What you upzone`** (~160 words) — Pelling Cross, the frontage to mixed
   housing and the blocks behind to medium density, the radius read off the
   selected building rather than drawn with a compass, and the western arc that
   is not where the compass put it. The clinic comparison as the decision.
4. **`## The readings`** (~110 words) — the six or seven readings a student takes
   today, with the core-and-edge land value split called out as two rows rather
   than one, and the sentence naming livability as the metric that moved the
   wrong way.
5. **`## The tradeoff`** (~100 words) — livability against fiscal performance,
   the clinic as the mechanism, and the studio rule quoted once in full.
6. **`## What you leave with`** (~70 words) — the save, the branch saves, the
   initialled line about the traded pair, the 17:00 re-upload if anything was
   corrected, and the ten working days.

### Frontmatter deltas

Add the five-line `spec:` array above and delete the `STARTER_CONTENT` comment.

`related:` needs **no change**. It already carries `lectures/week-04`, which is
the paired lecture. The assessment edge is also already correct and already
renders: `src/content/assessments/01-neighbourhood-unit-plan.md` declares
`related: - sessions/04-upzoning-the-amenity-core`, and
`RelatedContent.astro` resolves related entries **undirected** — declared,
embedded or incoming — via `getRelatedEntries`. So the Neighbourhood Unit Plan
already appears in this session page's Related block without a reciprocal entry,
and adding `assessments/01-neighbourhood-unit-plan` to this file would only
duplicate an edge the graph already has. Do not add it.

Do not touch `title`, `description`, `week`, `date` or `teachers`. The
`teachers` array correctly lists both `marisol-quaye` and `sunniva-marek`, which
is the only session in weeks 4–6 with two.

### Hand-off

Week 5 receives a cell with a settled amenity core, a decided clinic siting, and
— this is the part that matters to Idris Fenn — a land value gradient reading 48
at Pelling Cross and 19 at the edge. That gradient is the density profile the
transit spine will be routed through, and it is why the alignment question next
week is not symmetrical: one end of the line has 48-index frontage and 34% walk
share, and the other end does not. Students also carry the coverage radii read
off the selected service buildings, because the 400 m stop catchments in Week 5
are drawn against those, not against fresh circles.

To the brief, the direction is unusual and worth stating: **this session does
not feed Assessment 1, it defends it.** The plan closed at 12:00 and nothing
built or discovered after 13:00 changes the artefact. What the session
contributes is the record of the defence — the answer to the traded-pair
question, initialled on the readings sheet during the metric round, and the
transcript of the six minutes at the bay. Those are what the chair reads when a
mark sits on a band boundary. The session hands the brief a defended plan or an
undefended one, and that is the whole of its contribution.

### New canon introduced

- **Pelling Cross** — the Pelling Street / Halstead crossing at the centre of
  the Halstead Reach cell; the survey point every amenity radius in Week 4 is
  struck from, and the address of the mixed-use amenity core.

### Open questions for the writer

- The run sheet assumes a cohort of sixteen and two rounds of eight at six
  minutes. Confirm against the actual enrolment before writing the page: at
  twenty the rounds do not fit inside three hours, and either the visiting
  critic's round at 15:05 or the metric round at 15:25 has to be cut. Cut the
  critic's round if you must; the metric round is load-bearing for the mark.
- `notes/lecture-plans.md` slide 15 says Assessment 1 pins up "Friday at 12:00".
  It does not. `src/content/assessments/01-neighbourhood-unit-plan.md` gives
  `due: 2027-03-15T12:00:00+11:00`, which is the Monday, and the studio runs
  13:00 the same day. This plan is written to the content file. If the Week 4
  deck is ever built from lecture-plans, that slide needs the same correction —
  and so does its stated weight, which is wrong.
- The lecture's cell-scale arithmetic (₡7,133 upkeep, ≈₡5,800 rate take, ≈₡1,300
  shortfall) is quoted for a Perry cell of about 5,000 residents on the shared
  baseline. The studio's save reads 6,900 residents at Week 4. Decide whether
  the session page quotes those cell-scale figures at all, or sends students to
  their own budget panel and keeps only the ₡1,300 as the target to close.
- Whether the "not on the wall at 13:00" rule belongs on the session page, the
  assessment page, or both. It reads as a threat on the assessment page and as
  a description of the room on the session page; putting it in both risks
  sounding like a policy the studio is anxious about.

---

## Week 5 — Designing the Transit Spine

**Date:** 2027-03-22 · **Studio:** 13:00–16:00, Studio 2.14 ·
**Tutor(s):** Idris Fenn · **Paired lecture:** Moving People: Transit-Oriented Design · **Assessment:** none due

### What the session is for, in one sentence

You build the Denton Hill–Barrow Fields spine, set a headway you can defend
with arithmetic rather than preference, and find out what the district's balance
sheet paid for it.

### What students arrive with

- The save `<student ID>-w04`, loaded and advanced to in-game 08:00. Idris takes
  the save or takes nothing; a screenshot of a save cannot be run at a different
  headway.
- Week 4's readings on the standard sheet: **+₡2,100/mo**, **5.9 min** at 08:00,
  transit **0%**, walk share **34%**, happiness **69%**, land value **31**
  district mean with the **Pelling Cross core at 48** and the **cell edge at
  19**. The 48 and the 19 are the two numbers the alignment argument is about.
- The coverage radii read off the selected service buildings last week. The 400 m
  stop catchments today are drawn against those, not against fresh circles.
- **Two candidate alignments for the same corridor, drawn before you arrive** —
  on tracing over the A3 plan, or as two saved transit-line drafts. Each needs a
  round-trip running time including layover, and a stop count. One line is not
  two alignments, and a student with one spends the charrette drawing the second
  instead of testing either.
- The lecture's formula, which you will be asked for from memory: **vehicles
  required = round-trip time ÷ headway, rounded up.**
- Assessment 1 is with the markers. Nothing in it is reopened this week, and no
  part of today's work is retrofitted into it. If your clinic siting was wrong,
  it is wrong in a submitted document and correct in the save from 16:00 today.

### Run sheet

| Time | Segment | What happens | Who runs it |
|---|---|---|---|
| 13:00–13:10 | Reading-in | The Week 4 close is read off each machine and written on the sheet before anything is drawn. Nobody draws a line in the first ten minutes. | Fenn |
| 13:10–13:35 | Chalk talk at the board | Round-trip time, headway, fleet, average wait, monthly operating cost. Five quantities, one formula, worked live on two students' alignments. | Fenn |
| 13:35–14:20 | Alignment charrette | The two alignments are pinned side by side and costed against each other: round trip, fleet at a common headway, residents inside 400 m, riders per vehicle-hour. | Fenn |
| 14:20–15:05 | Build and run | One alignment is drawn in the save with the transit line tool, the fleet set, and three in-game months advanced with the Transportation Overview open. | students, Fenn roving |
| 15:05–15:35 | Desk crit in pairs | Pairs swap machines and read each other's Overview aloud: fleet, passengers, operating cost, waiting count per stop. | Fenn |
| 15:35–15:50 | Coverage round | The 400 m overlay goes up across the district and the cohort answers one question together: who is outside it. | Fenn |
| 15:50–16:00 | Wash-up | The traded pair named out loud, one sentence each. What Week 6 needs from today's save. | Fenn |

**The chalk talk, 13:10–13:35.** No slides; it is done at the board on two
students' actual alignments, chosen at the reading-in because their round trips
differ. The five quantities are written up and never rubbed out: round-trip
time, headway, fleet, average wait (half the headway), monthly operating cost.
Then the formula, once. The point of doing it on real alignments is that the
fleet number falls out as an integer with a rounding step, and the rounding step
is where a 24-minute round trip at a 7-minute headway quietly becomes four
vehicles rather than three-and-a-half — which is to say the headway you can
afford is not continuous, and choosing 6 rather than 7 costs nothing you were
not already paying.

**The alignment charrette, 13:35–14:20.** Two alignments, pinned side by side,
costed in four columns and nothing else: round trip in minutes, fleet at a
common headway, residents within 400 m of any stop, projected riders per
vehicle-hour. Idris will not let the comparison run in prose. The lecture's
slide 12 gave the studio baseline for the two shapes — the straight run along
Pelling Street at a 24-minute round trip and six stops, against the loop up
Denton Hill at 38 minutes and eleven — and both columns are defensible. The
charrette's job is to make each student say which of the four numbers decided
it for them. "Both, a bit" is not an answer and Idris will ask for the number.

**Build and run, 14:20–15:05.** Forty-five minutes is enough for one alignment
built properly and three in-game months, and it is not enough for two. Choose
before 14:20. The alignment you do not build stays on tracing, gets
photographed, and comes to the desk crit as an exhibit — Idris asks for its
round trip and its fleet, and a student who abandoned it without costing it has
made a decision they cannot describe.

### The exercise

**The line, and where its ends are.** The spine runs **Denton Hill to Barrow
Fields**, named for its ends because Lynch's terminus rule is a legibility rule
and the studio applies it: a line called Denton Hill–Barrow Fields is a line a
rider can hold in their head, and a line called the Western Route is not. Six
stops on the studio's alignment: **Denton Hill** at the foot of the rising
ground, **Marle Row**, **Pelling Cross**, **Halstead**, **Wickstead**, and
**Barrow Fields** at the employment end. The terminus at Denton Hill is at the
foot of the hill and not on it. That is the ridership alignment, and it is a
choice with a cost that the coverage round at 15:35 will make you look at.

**Setting the headway.** The round trip including layover is 24 minutes. At a
**6-minute headway** the formula gives 24 ÷ 6 = **four vehicles**, and the
Transportation Overview books the line at **₡4,800/mo** to operate. Against
that, fares recover **₡1,100/mo** — a recovery ratio of about 23%, and a net
subsidy of ₡3,700/mo carried by a district that had ₡2,100 of monthly headroom.
Six minutes is not a comfortable number. It is chosen because the lecture's
threshold is real: below about a 12-minute headway riders stop consulting a
timetable and start turning up, and that behavioural change is worth more than
the minutes it saves. Six buys the change with margin. Twelve buys it exactly and
loses it the first time a vehicle is delayed.

**Zoning the station areas, which is the half students skip.** Calthorpe's
station area is a 600 m walk with density stepping down from the stop, and it is
a zoning project, not a transit project. Inside 600 m of Pelling Cross and
Halstead, take the frontage to mixed housing and the second rank to medium
density; step down to low density towards the 600 m edge. Then watch, in the
building level-up thresholds, **where** the buildings level up. If they level up
nearest the Kerrow corridor rather than nearest the stop, the stop is not the
thing organising the land and you have built a bus shelter inside a road
frontage. Note the two radii the studio uses and do not confuse them: **600 m is
the zoning band** and **400 m is the coverage reading** — five minutes on foot at
80 m per minute, which is what the district reports as "within reach of a stop".

**Reading the Overview honestly.** Open the Transportation Overview and read
four things per line: vehicles assigned, passengers carried, monthly operating
cost, and waiting passengers per stop. The fourth is the one that lies. A long
queue at Pelling Cross looks like success on a projector and is a fleet shortage
in the balance sheet — the demand is real, the service is not meeting it, and
the operating cost does not move either way. A queue that never clears between
08:00 and 09:00 is not evidence the line is popular. It is evidence you set the
headway from the budget rather than from the round trip.

**Marle Row, and why stop spacing cannot be settled stop by stop.** Marle Row
serves the northern blocks and boards about forty riders in the peak hour, while
roughly nine hundred ride past it. Every stop shortens somebody's walk by up to
200 m — 2.5 minutes, weighted at Vuchic's 2.5 for out-of-vehicle time, worth
about six perceived minutes — and lengthens everybody's ride by about 25 seconds
of dwell and deceleration. Run that arithmetic on Marle Row and it resolves
against the stop. Run it on every stop in turn and it resolves against every
stop, which is the tell that the question is wrong at that scale. The stop
spacing and the routing are the same decision, and both are settled for the line
or not at all. Students may keep Marle Row. They may not keep it silently.

**What the line does to the trip.** The 08:00 travel time comes down from 5.9 to
**5.4 min**, transit share arrives at **11%** from nothing, and **62%** of
residents are within 400 m of a stop. Happiness lifts to **73%** and the land
value mean to **34**. Every one of those is bought, and the budget panel says by
what.

### Readings taken this week

All readings at in-game 08:00, on the save carried in as `<student ID>-w04` and
saved out as `<student ID>-w05`.

| Reading | Where it is read | This week's value | Against last week |
|---|---|---|---|
| Population / households | city information panel | 9,400 / 3,600 | 6,900 / 2,650 |
| Monthly balance | budget panel, per-district income and outlay | **+₡400/mo** | +₡2,100/mo |
| Line operating cost | Transportation Overview, line detail | **₡4,800/mo** | no line |
| Fare revenue | Transportation Overview, line detail | **₡1,100/mo** | no line |
| Headway | Transportation Overview, line detail | **6 min** | no line |
| Travel time, 08:00 | travel-time readout, city information panel | **5.4 min** | 5.9 min |
| Transit share | Transportation Overview, mode split | **11%** | 0% |
| Residents within 400 m of a stop | 400 m stop-catchment overlay | **62%** | 0% |
| Happiness | happiness overlay, district | **73%** | 69% |
| Land value index, district mean | Land Value info view | **34** | 31 |

**Fiscal performance is the metric that moved the wrong way.** The monthly
balance went from +₡2,100 to **+₡400**, and the spine is why: ₡4,800/mo out
against ₡1,100/mo recovered is a net ₡3,700/mo the district did not previously
carry. That is more than the ₡1,700 the balance actually lost, and the
difference is growth — 2,500 more residents than last week, returning roughly
₡2,000/mo in rates against a subsidy of ₡3,700. So the line is affordable this
week because the district grew this week, which is a different sentence from the
line being affordable. Mobility improved (5.9 to 5.4, transit 0% to 11%) and
livability improved on both of its readings (happiness 69% to 73%, land value 31
to 34). Two up and one down, and the rule holds as usual: **a plan claiming all
three metrics improved has not been read carefully.** This week it is easy to
name because it is a single line in the budget panel with the line's name on it.

### The tradeoff the session forces

**Mobility performance against fiscal performance.** Every vehicle added to the
Denton Hill–Barrow Fields spine buys every rider on it a reduction in average
wait, and commits the district to that vehicle's upkeep for as long as the line
runs. The arithmetic is brutally simple and that is what makes it a tradeoff
rather than an optimisation: halving the wait always doubles the fleet, because
the fleet is the round trip divided by the headway. There is no alignment, no
stop spacing and no clever geometry that breaks that ratio. Legibility is free;
frequency is not.

The mechanism, without the moral: the operating cost is indifferent to whether
the service works. It is charged per vehicle per month whether the vehicle
carries four hundred riders or four. Fare revenue moves with ridership;
operating cost does not move at all. So the district's exposure on this line is
fixed at ₡4,800/mo the moment the fourth vehicle is assigned, and everything the
student can influence afterwards — the zoning inside 600 m, the stop spacing,
whether the buildings level up towards the stop — moves only the ₡1,100 side.
That asymmetry is the reason the station-area zoning is not optional decoration.
It is the only lever on the half of the ledger that responds to design.

The choice cannot be deferred because the fleet is the thing Week 6 will attack.
Downs–Thomson says the equilibrium speed of car travel on a corridor with a
competing service is set by the door-to-door speed of that service. A line at a
6-minute headway sets a fast bar; a line cut to two vehicles to save money sets
a slow one, and the corridor settles to whichever bar exists. A student who
economises on the fleet today has decided next week's peak travel time, and will
find out on 29 March that they decided it without meaning to.

### At the crit

**Idris Fenn:**

- Round-trip time, headway, fleet. Three numbers, in that order, before you say
  anything else about the line.
- Your headway is six minutes. What was the average wait before the line existed
  and what is it now? Minutes. Not "better".
- ₡4,800 out and ₡1,100 in. Give me the recovery ratio, and then give me what
  the district's monthly balance read the week before you drew this.
- 62% of residents within 400 metres. Who is the 38%? And did you decide that,
  or did the alignment decide it for you while you were looking at the round
  trip?
- Marle Row. Boardings in the peak hour, and riders carried past it. If you
  cannot give me both, you have not opened the Overview, you have looked at it.
- You have four vehicles. Take one away. New headway, new average wait, and the
  ridership you would expect to lose. Now put it back and tell me what the extra
  vehicle bought per ₡100 of upkeep.
- Show me the alignment you did not build. Round trip, and fleet at the same
  headway. If it is not costed, you did not reject it, you just stopped drawing
  it.
- Land value went 31 to 34 and happiness went 69 to 73. Which of those is this
  line and which of those is last week's upzoning still settling? Before and
  after, per block, not district-wide.
- There is a queue at Pelling Cross that has not cleared since 08:00. Tell me
  whether that is demand or a fleet shortage, and tell me which reading
  distinguishes them.
- Name the metric that moved the wrong way.

**The failure mode Idris is watching for** is the line reported as an
improvement with the operating cost left out — a mode-split figure of 11% quoted
as a result with no adjacent number saying what 11% cost. It arrives most often
from the students who did the best design work, because the design did work and
the panel says so in three places, and the fourth place is a single line in the
budget panel that nobody screenshot. The second failure mode is the queue read
as popularity. Both are the same error: reading the views that flatter the line
and not the one that prices it.

### What leaves the room

- The save `<student ID>-w05`, plus the off-machine copy. This save must not be
  overwritten before 29 March; Week 6 opens on it.
- The ten readings above on the standard sheet, with the line's operating cost
  and fare revenue entered as two separate rows. A single "net" figure is
  returned to be split.
- Three screenshots: the Transportation Overview line detail showing fleet,
  passengers and operating cost; the 400 m stop-catchment overlay across the
  district; the Land Value info view over the two station areas at Pelling Cross
  and Halstead.
- A photograph of the alignment you did not build, with its round trip and its
  fleet at your chosen headway written on the tracing in your hand.
- **The transit baseline for Week 6**, written into your process log today and
  not reconstructed later: the line's daily passenger count, its fleet, and its
  headway. Week 6 will take riders off this line and you will need to know how
  many there were.
- One sentence, said out loud at the wash-up and written on the sheet: the two
  metrics you traded, and the vehicle count where the trade is visible.
- Nothing is submitted. There is no assessment due in Week 5 and none due in
  Week 6; the next brief is Assessment 2 in Week 9.

### `spec:` lines

```yaml
spec:
  - "You arrive with the save `<student ID>-w04` loaded and advanced to in-game 08:00, not a screenshot of it."
  - "You bring two candidate alignments for the Denton Hill–Barrow Fields spine, each with its round-trip running time and its stop count."
  - "The headway you set is stated together with the arithmetic that produced it: round-trip time divided by headway, rounded up to whole vehicles."
  - "You record the line's monthly operating cost and its fare revenue as two separate figures in ₡, read off the Transportation Overview."
  - "You can say what share of residents falls within 400 m of a stop, and name which residents do not."
```

### Page body plan

Target 450–700 words. The page already renders the title, the date, the spec
list, the teaching team and the related links; the body opens on the line and
never restates any of those.

1. **`## What the spine has to do`** (~110 words) — the corridor, its two ends
   named for places, and the claim the line is making: that 62% of the district
   will be within five minutes' walk of it. One sentence on why the ends are
   named the way they are.
2. **`## Before you draw`** (~80 words) — the save loaded and advanced, two
   alignments already on tracing with round trips, and the formula from memory.
   The reading-in at 13:00 and why nobody draws in the first ten minutes.
3. **`## The two alignments`** (~170 words) — straight along Pelling Street
   against the loop up Denton Hill; the four columns they are costed in; the
   terminus at the foot of the hill and the 38% that decision leaves outside
   400 m. Marle Row and the stop-spacing arithmetic as the worked example.
4. **`## Setting the headway`** (~130 words) — 24-minute round trip, six minutes,
   four vehicles, ₡4,800/mo against ₡1,100/mo, and the 12-minute behavioural
   threshold. The station-area zoning inside 600 m as the only lever on the
   revenue side.
5. **`## The readings`** (~100 words) — the readings taken, the queue-versus-
   demand warning, and the sentence naming fiscal performance as the metric that
   moved the wrong way with the studio rule quoted once.
6. **`## What you leave with`** (~70 words) — the save that must survive to 29
   March, the three screenshots, the photographed alignment, and the transit
   baseline written into the process log.

### Frontmatter deltas

Add the five-line `spec:` array above and delete the `STARTER_CONTENT` comment.

`related:` needs **no change**. It already carries `lectures/week-05`, which is
the paired lecture and the only edge this session should have. There is no
assessment edge in either direction and there should not be one: nothing is due
in Week 5, and `notes/lecture-plans.md` slide 14 is wrong to announce a
"Mobility Plan" opening this week — there is no such assessment. Assessment 2 is
the Public Realm and Infrastructure Plan, due Week 9, and this session must not
link to it or mention it as opening.

Do not touch `title`, `description`, `week`, `date` or `teachers`. `teachers`
correctly lists `idris-fenn` alone; Sunniva Marek is not in the room this week
and must not be added.

### Hand-off

Week 6 receives the line, which is the only reason Week 6 works. Downs–Thomson
needs a competing service on the corridor before a widening can be shown to
settle at that service's door-to-door speed, and without the spine the peak-load
stress test is a road experiment with no counterfactual. Specifically, Week 6
inherits the fleet of four, the 6-minute headway, the ₡4,800/mo operating cost
and the daily passenger count written into the process log today — the modal
component of next week's refill is measured as a fall against that count. It
also inherits the 38% who are outside 400 m, most of them on the upper slope of
Denton Hill, because those are the households whose commute cost falls when the
corridor is widened and who therefore show up in the land-use component.

No brief is fed this week. The next assessed pin-up is Week 9, and the corridor
designed today is carried to it through Weeks 6, 7 and 8 rather than submitted.
Students who want the work to count should keep the readings sheet intact: the
Week 9 brief is marked on livability at 45, and the before-and-after this line
established is the earliest evidence any of them will have of a livability gain
they can price.

### New canon introduced

- **Marle Row** — the mid-line stop on the northern blocks of the Denton Hill–
  Barrow Fields spine; boards about forty riders in the peak hour against roughly
  nine hundred carried past it, and is the worked example for why stop spacing
  cannot be settled stop by stop.

### Open questions for the writer

- The spine table gives the line's operating cost as **₡4,800/mo** and the
  lecture's slide 8 costs a vehicle at ₡1,150/mo, which does not multiply to
  ₡4,800 at four vehicles. Do not silently resolve this to ₡1,200. Either the
  lecture's per-vehicle figure is a tram figure from an earlier and smaller
  save, or the ₡4,800 includes depot overhead the per-vehicle rate does not.
  Decide which, say it once on the page if it needs saying, and take ₡4,800 as
  the reading either way — the spine is canon and the slide is not.
- The lecture leaves the mode undecided (tram or bus) and flags that every figure
  in its slide 8 and slide 12 tables changes with it. The session page has to
  commit, because "vehicles assigned" reads differently for a tram than for a
  bus and students will be at the machine. Pick one and use it in every sentence.
- The ~₡2,000/mo of growth revenue used above to reconcile +₡2,100 to +₡400 is an
  estimate from the population delta, not a spine reading. Either sanity-check it
  against the budget panel on the shared save and quote it, or drop the figure
  and say only that growth partly offset the subsidy.
- Whether the coverage round at 15:35 states the 38% as a cohort result or lets
  each student find their own. The cohort version lands harder and takes four
  minutes; the individual version is better teaching and takes fifteen, which is
  the whole segment.

---

## Week 6 — Peak-Load Stress Test

**Date:** 2027-03-29 · **Studio:** 13:00–16:00, Studio 2.14 ·
**Tutor(s):** Idris Fenn · **Paired lecture:** Traffic Engineering and Its Discontents · **Assessment:** none due — nothing is submitted this week

### What the session is for, in one sentence

You load the district at 08:00, find the junction the whole network is waiting
on, widen it, and stay in the room long enough to watch the relief disappear.

### What students arrive with

- The save `<student ID>-w05`, loaded and advanced to in-game 08:00, with the
  Transportation Overview already open. Not a screenshot of either. A student who
  overwrote last week's save in the intervening days cannot run the session and
  spends it reading over a neighbour's shoulder, which Idris permits and does not
  soften.
- **The transit baseline written into the process log last week**: the Denton
  Hill–Barrow Fields spine's daily passenger count, its fleet of four, and its
  6-minute headway. These are the before-figures for the modal component and they
  cannot be recovered once the branch has run.
- Week 5's readings on the standard sheet: **+₡400/mo**, **5.4 min** at 08:00,
  transit **11%**, **62%** of residents within 400 m of a stop, happiness
  **73%**, land value **34**. The 5.4 is the number the session is about to
  double.
- The lecture's two pieces of arithmetic, from memory, because they are run at
  the machine and not looked up: **effective capacity per lane = saturation flow
  × green ratio**, and the elasticity of vehicle-kilometres with respect to
  lane-kilometres, which the literature puts at close to 1.0.
- Squared paper or a spreadsheet with the decomposition table already ruled up —
  four rows (spatial, temporal, modal, land use), a vehicles-per-hour column, and
  a column for which info view each row is read in. Ruling it up during the
  session costs you the relief window.
- Nothing to hand in. Assessment 1 is marked and returned or returning;
  Assessment 2 is not due until Week 9. Arrive with the save and the log, and
  arrive on time, because the 08:00 hold starts at 13:10 and it is not repeated.

### Run sheet

| Time | Segment | What happens | Who runs it |
|---|---|---|---|
| 13:00–13:10 | Reading-in | The before-figures are written on the sheet with nothing touched: 08:00 peak travel time, off-peak travel time, volume-to-capacity at Wickstead, the line's daily passengers, volume on Hessel Row. Pens down after ten minutes. | Fenn |
| 13:10–13:30 | The 08:00 hold | Every machine advances to in-game 08:00 and holds. Nobody builds. The room watches the corridor load for twenty minutes of wall-clock time and describes what it sees. | Fenn |
| 13:30–14:00 | Failure-point walk-through | One save goes on the projector and the Traffic info view is walked north to south along the Kerrow corridor, junction by junction, while the other fifteen follow the same walk on their own machines, until the cohort agrees where the queue originates rather than where it is longest. | Fenn |
| 14:00–14:20 | The widening | The pre-widening district is saved off first. Then Wickstead's corridor approaches go from two lanes to four, on the save every student carries forward. The first-morning reading is taken immediately. | students, Fenn roving |
| 14:20–15:00 | Six in-game weeks | Three in-game weeks advanced and read, then three more advanced and read. The same reading, three times, on the same junction. | students, Fenn roving |
| 15:00–15:30 | The argument round | Four groups of four, one row of the decomposition each, then all four rows to the board as one table: a figure against each and the view it was read in. Contested rows are re-read live on a group member's machine. | Fenn |
| 15:30–15:45 | The instrument menu | The lecture's four instruments go back up with their costs. Every student writes the one they will argue for and the single number that would tell them it worked; a show of hands sorts the room and Idris takes one named defence per instrument. | Fenn |
| 15:45–16:00 | Wash-up and the break protocol | The 150-word position statements go on the wall as students reach it. Sixteen traded-pair sentences, thirty seconds apiece. Then the break protocol, issued on one page and walked through. | Fenn |

**The 08:00 hold, 13:10–13:30.** Twenty minutes of wall-clock time with the
simulation running at in-game 08:00 and the build tools untouched. This is the
segment students find hardest and it is the one the session is named for. The
instruction is to describe, out loud when asked, what the network is doing: where
the first queue forms, whether it forms at the junction or two junctions
upstream, whether it clears between vehicle platoons, and what the Kerrow
corridor's parallel route through the Brayhurst quarter is carrying while it
happens. Idris will interrupt a student who reaches for the road tool. The reason
for the discipline is in Nadia Ilkhom's territory and gets said anyway: you
cannot tell what a network is doing from a still, and the difference between a
junction that is over capacity and a junction that is receiving a queue from
somewhere else is only visible in motion.

**The widening, 14:00–14:20.** The district is saved off before anything is
built — `<student ID>-w06-pre`, the un-widened state, which is not opened again
this afternoon — because the point of the afternoon is the comparison, and a
district you have already widened cannot be read as a district you have not.
Then, on the working save, the corridor approaches at Wickstead go from two
lanes to four. **Everybody widens.** The un-widened district is a record, not an
option: Weeks 7, 8 and 11 are all played on a corridor that was widened on 29
March, and a student who carries the pre-widening state forward as this week's
save is reading a different city from the rest of the room for the remaining six
weeks. Take the first-morning reading the moment the road opens, before
advancing anything. That number is real and it is also the number every widening
in the world is justified on, which is the whole of slide 8. Before you advance a
single in-game day, write down the long-run peak volume the elasticity predicts
from the capacity you have just added, worked from the volume you measured at the
reading-in and not from any figure on a slide, and write the volume ÷ capacity
that goes with it. At 15:00 you will compare that prediction against four rows
you read off your own save, and the prediction is more useful for having been
wrong than for having been skipped.

**Six in-game weeks, 14:20–15:00.** Three in-game weeks, read, then three more,
read. Forty minutes of wall-clock time for six weeks of simulated time, which is
tight and is meant to be: the relief window is roughly three in-game weeks wide
and a student who advances six weeks in one go will find the refill and never see
the relief, which is a worse lesson because it looks like the widening simply
failed. It did not fail. It worked, and then the network noticed.

**The argument round, 15:00–15:30.** There is one table to build and sixteen
people to build it with, so the room splits into four groups of four and each
group takes one row — spatial, temporal, modal, land use. Five minutes at the
machines for each group to pull its figure off its own members' saves, then five
minutes a row at the board: the figure, the info view it was read in, and the
number defended against the other twelve. A contested row is re-read live on a
group member's machine rather than argued about in the abstract. The last five
minutes are the total, set against the prediction written at 14:20. If the four
rows sum to much less than the capacity that was added, the honest conclusion is
that a row is missing rather than that a row is small, and the row that is
missing is almost always land use.

**The instrument menu, 15:30–15:45.** The lecture's closing menu goes back up
with its costs against it — retiming the Wickstead signal to raise its effective
green ratio; reallocating one existing lane to transit; shortening the trips by
mixing uses in the station areas, which is Week 4's instrument and a zoning
project rather than a road project; and pricing the peak, which the model cannot
do. Four instruments, three of them available. Every student writes down the one
they will argue for and the single number that would tell them it worked, which
takes three minutes and is theirs to keep. Then a show of hands sorts the room
by instrument and Idris takes one named defence from each group, so sixteen
choices are heard in the time four arguments take. Nobody is asked to speak
twice.

**The statement, and when it is actually written.** The 150-word position
statement is not written in the last fifteen minutes; it is drafted at the
machine between 14:20 and 15:00, in the gaps while the in-game weeks advance,
because the evidence half of it can be written before the instrument is chosen.
The instrument line goes on at 15:30. Statements go up as students reach the wall
at 15:45, which takes no segment time at all, and the wash-up then spends its
first eight minutes on sixteen traded-pair sentences at thirty seconds apiece,
held to it the way the six-minute clock was held to in Week 4. The break protocol
is the last four minutes and it is issued on one page rather than dictated: it
has six items on it and nobody writes down six things correctly in the last
minutes of the last session before a fortnight off.

### The exercise

**Find the failure point before you fix anything.** The 08:00 travel time reads
**11.2 min** against **5.6 min** off-peak. Nothing about the network changed
between Week 5 and Week 6 except that 3,400 more people moved into it, and the
off-peak figure is the proof: at 5.6 the network is fine, and at 11.2 it is not,
on the same roads. The Traffic info view's traffic volume layer puts the Kerrow
corridor at **118% capacity** and the failure point at the **Wickstead
junction**. Do not take 118% on trust — the lecture gave you the method, so run
it: read the signal's effective green ratio off the junction, multiply the
standard saturation-flow figure by it to get capacity per lane, multiply by the
lanes, and divide the peak volume you measured at the reading-in by the result.
You should land above 1.0. A student who cannot reconstruct the ratio cannot
argue about anything that happens after 14:00, because every claim in the second
half of the session is a claim about a ratio.

The walk-through matters because the longest queue is not the failure point. The
queue is longest a few hundred metres upstream of Wickstead, on the corridor,
and the instinct is to widen where the vehicles are stationary. Wardrop's first
principle is what is actually happening: every agent takes the least-cost route
available and re-costs it when the network changes, so the queue is an
equilibrium artefact and the constraint is the throughput at the stop line. Fix
the queue and you move the queue. Fix the stop line and something else happens,
which is what the branch is for.

**Widen it.** Two lanes to four on the corridor approaches. On the first morning
the 08:00 peak drops to **8.9 min** and holds there for about **three in-game
weeks**. Then it refills to **10.7 min** and stays. The corridor is wider, the
signal is unchanged, the population has not jumped, and the travel time has
come back to within half a minute of where it started. That is induced demand,
measured on the studio's own save, inside one session, and it is the only time in
the semester the studio gets to watch a mechanism it will spend the rest of the
year arguing about.

**Then decompose it.** The refill has four sources and every one of them is
independently observable, which is why the argument round at 15:00 is an argument
rather than a lecture. *Spatial:* the Brayhurst quarter's back-street route,
Hessel Row chief among it, empties within about three simulated days of the wider
approaches opening — read the traffic volume layer on Hessel Row, not on the
corridor. *Modal:* the Denton Hill–Barrow Fields spine loses riders to the road
it now competes with; read the daily passenger count in the Transportation
Overview against the figure in your process log. *Temporal:* the shoulder of the
peak thins as the corridor becomes quick enough to leave at 08:00 again; read
volume by hour across 07:00–09:00 and watch the 07:00–08:00 band fall while the
08:00–09:00 band rises. *Land use:* households take up sites further out once the
commute cost falls; read the residential demand bars and new occupancy at the
Denton Hill edge, which is where the 38% who are outside 400 m of a stop live.
Four rows, a figure against each, and they sum to roughly what the elasticity
literature predicts. Students who want to dispute the conclusion have to dispute
a row, and at the board they are invited to.

**The one-way "fix", which someone will propose.** Every year at about 15:10 a
student proposes converting the corridor and Hessel Row into a one-way pair,
because it doubles the effective green time on each and looks free. It is not
free and it is not exempt: the same elasticity applies to the capacity it
creates, so it buys a smaller relief for the same three weeks, and it does it by
putting corridor traffic through the Brayhurst quarter's residential frontage
permanently. Idris's answer is the one in their bio and it is not rhetorical:
bring the before-and-after numbers. Volume, capacity, volume ÷ capacity, on both
streets, before and after, and the frontage land value on Hessel Row alongside.
The proposal is allowed. It is allowed on a save of its own, with numbers.

**What the four lanes cost the frontage.** With the widening settled, open the
noise pollution overlay along the widened frontage and the Land Value info view
under it. The carriageway is wider by two lanes for good; the pedestrian crossing
is longer by the same amount for good; the traffic noise is up by a little, and
"a little" is the point, because noise rises with the logarithm of volume and the
land value moves anyway. This is the lecture's second capacity and it is worth
naming in the room: the corridor's vehicular capacity went up and its
environmental capacity — the volume above which the street's other functions stop
working — did not move, because it is a property of the frontage rather than of
the carriageway. Watch the ground-floor tenancies on the widened frontage and
whether they hold their level. **Happiness reads 66%**, down from
73%, and the **land value index reads 33**, flat against 34. That is a livability
loss that does not come back, sitting next to a mobility gain that already did.

**The instrument that is not available.** The model has no congestion-pricing
mechanism. Nothing anyone argues from this save file can rest on one, and the
correct response to that is not an apology — it is a note in the position
statement about which arguments this evidence can carry. Week 11 is given over to
that question and this is the first week it bites.

### Readings taken this week

All readings at in-game 08:00 unless the row says otherwise, on the save carried
in as `<student ID>-w05` and saved out as `<student ID>-w06`.

| Reading | Where it is read | This week's value | Against last week |
|---|---|---|---|
| Population / households | city information panel | 12,800 / 4,900 | 9,400 / 3,600 |
| Monthly balance | budget panel, per-district income and outlay | **+₡1,800/mo** | +₡400/mo |
| Travel time, 08:00 peak | travel-time readout, city information panel | **11.2 min** | 5.4 min |
| Travel time, off-peak | same readout, held off-peak | **5.6 min** | not separated |
| Kerrow corridor at Wickstead, volume ÷ capacity | Traffic info view, traffic volume layer | **118% capacity** | not recorded |
| Failure point | Traffic info view, walked junction by junction | **Wickstead junction** | none identified |
| Transit share | Transportation Overview, mode split | **14%** | 11% |
| Happiness | happiness overlay, district | **66%** | 73% |
| Land value index, district mean | Land Value info view | **33** | 34 |
| Peak after widening, first morning | travel-time readout, on the branch | **8.9 min** | — |
| Peak after three in-game weeks | travel-time readout, on the branch | **8.9 min**, holding | — |
| Peak after the refill | travel-time readout, on the branch | **10.7 min** | — |

**Livability is the metric that moved the wrong way.** Happiness fell from 73%
to **66%** and the land value index went **34 to 33**, which is flat — and flat,
in a district that has added 3,400 residents and a wider arterial, is a fall
disguised as a hold. Fiscal performance improved, +₡400 to **+₡1,800**, and it
improved for a reason nobody in the room designed: growth outran the transit
subsidy. The ₡4,800/mo line costs exactly what it cost last week and there are
now 12,800 people paying rates against it. Mobility is the interesting case and
must be reported carefully rather than tidily: it moved the wrong way between
weeks (5.4 to 11.2 at 08:00), then the right way inside the session (11.2 to
8.9), then most of the way back (8.9 to 10.7). Anybody writing that up as an
improvement is describing a three-week window as a state. This is the week the
studio rule earns its keep, so say it in full before the position statements are
written: **a plan claiming all three metrics improved has not been read
carefully.** The corollary this week is narrower and harder — a plan claiming one
metric improved has to say for how long.

### The tradeoff the session forces

**Mobility performance against livability.** The instrument is the two extra
lanes at Wickstead, and the asymmetry is the entire subject: the mobility gain
was 2.3 minutes off the peak for three in-game weeks, and the livability cost is
two lanes of carriageway, a longer crossing, more noise and a frontage whose
ground-floor tenancies stop holding their level, all of it permanent. No amount
of care in the detailing reverses that ratio, because the two things are not
paid for out of the same account. Capacity is bought once and decays; carriageway
is bought once and stays.

The mechanism, without the moral: the pathfinder is not simulating traffic, it is
simulating choice. Every agent costs the routes available and takes the cheapest,
and re-costs when the network changes. So a widening never hands the existing
traffic a faster trip — it lowers the cost of one route until enough traffic has
moved onto it that the costs are level again. The four sources in the
decomposition are just four different populations noticing the same price cut.
And the equilibrium the corridor settles at is not set by the road at all:
Downs–Thomson says it is set by the door-to-door speed of the competing service,
which means the spine built last week is the thing that decides where 10.7
lands. A student who saved money last week by cutting the fleet set this week's
number before they knew there was a number.

The choice cannot be deferred, and this week that is literal rather than
pedagogical. The two extra lanes are in the district when the studio breaks for
two weeks and they are in the district when it comes back. Weeks 7 through 12
are all played on a corridor that was widened on 29 March. There is no session
between now and Week 12 that revisits the road hierarchy, so the road hierarchy
is settled today by whoever was at the machine at 14:00 — four weeks before the
capstone is mentioned again, and by a cohort that will spend the next fortnight
somewhere else.

### At the crit

**Idris Fenn** asks these while roving, three or four at each machine, which is
what sixteen machines and the hour from 14:00 to 15:00 allow. The retrospective
ones — where the peak finally landed, the rule read back, and the instrument you
are arguing for — are asked at the board and at the instrument menu instead,
where the whole room hears the answer.

- Peak and off-peak, in minutes, before you touched anything. Two numbers, and
  then tell me what the difference between them rules out.
- The corridor read 118% of capacity. Show me the multiplication — saturation
  flow, green ratio, capacity per lane, lanes. I do not want the percentage, I
  want where it came from.
- You widened Wickstead from two lanes to four. The peak went to 8.9. Where is it
  now, and how many in-game weeks did it take to get there?
- Off-peak was 5.6 before you built and the network did not change off-peak. So
  say precisely what you fixed, and for whom.
- Four sources, four figures, and the view you read each one in. If you have
  three, the missing one is land use and it is on the Denton Hill edge — go and
  find it.
- Your line's daily passenger count, before and after. If it fell, tell me what
  you did about the fleet, and then tell me what that did to the average wait,
  and then tell me what Downs–Thomson says that does to the corridor.
- Hessel Row. Volume before, volume after. And if you converted it to a one-way
  pair, the same two numbers on both streets plus the frontage land value,
  because I said in the first week that I would ask.
- Land value and happiness on the widened frontage, before and after. Now name
  the metric that moved the wrong way.
- Somebody in this room is about to write a statement saying every metric
  improved. Read the rule back to me, and then read your own numbers back to me.
- Three instruments left, two weeks off. Which one are you arguing for when you
  come back, and what is the single number that would tell you it worked?

**The failure mode Idris is watching for** is the student who advanced six
in-game weeks in one action, read 10.7, and concluded the widening did nothing.
That is the wrong lesson and it is wrong in a way that survives into the
capstone, because a widening that "did nothing" is a design error you avoid,
while a widening that worked and was consumed is a mechanism you have to plan
around. The second failure mode is the decomposition with three rows. Land use
is the row students drop, it is the slowest of the four to appear, and it is the
only one that keeps growing after the studio stops watching.

### What leaves the room

- The save `<student ID>-w06` — the district as it actually stands, four lanes at
  Wickstead and the refill in it — plus the off-machine copy, taken before you
  leave the machine. This save opens Week 7 after a two-week gap and no
  reconstruction is possible.
- The pre-widening save `<student ID>-w06-pre`, kept and not overwritten. It is
  the only file that holds the district at 11.2 minutes on two lanes, it is the
  counterfactual every claim about the widening is measured against, and Week 11
  asks for the Week 6 record of this junction by name.
- The twelve readings above on the standard sheet, with the three peak figures —
  **11.2 / 8.9 / 10.7** — entered as three separate rows and each labelled with
  the in-game date it was taken.
- The completed decomposition table: four rows, a vehicles-per-hour figure
  against each, the info view each was read in, and a total.
- Three screenshots: the traffic volume layer at 08:00 before and after the
  widening, taken from the same camera position; the noise pollution overlay
  along the widened frontage; the Transportation Overview line detail showing the
  passenger count after the branch has run.
- **A position statement of no more than 150 words, pinned to the wall at
  15:45 and left there.** It is not marked and it is not collected. It says what
  the room's own evidence supports about adding capacity to this corridor, and
  which of the four instruments the student will argue for. This is the session's
  output: nothing is submitted this week, deliberately, because the thing being
  produced is an argument the cohort holds rather than an artefact the cohort
  hands over.
- One sentence at the wash-up: the two metrics you traded, and the lane count
  where the trade is visible.

**Across the break.** The studio does not meet again until Monday 19 April, and
the one-page protocol issued at 15:45 has two halves.

**What crosses**, in written form, because nobody remembers a travel-time figure
for a fortnight:

1. The save `<student ID>-w06` under its week name, with the off-machine copy,
   and it comes back **unrepaired** — nothing built, demolished, rezoned or
   re-sliderd in the two weeks off. Week 7's clinic does not work on a district
   that has been quietly tidied over the break, and a student who tidies theirs
   is out of step with every reading the room takes.
2. The three peak figures and the completed decomposition, in the process log.
3. The instrument named at 15:30, written down with the single number that would
   tell you it worked.

**What is done over the break.** All of it is Week 7's pre-session work, none of
it is optional, and it is set going now rather than on 19 April because the
failure Nadia's clinic opens on has to have already happened before the room sits
down:

4. Open `<student ID>-w06` and, **before you unpause**, write down the water,
   sewage and electricity headroom as three percentages of installed capacity,
   read off the production-versus-consumption bar in each info view. On paper.
5. Then let the district run **six in-game days at 1× without touching a single
   tool**, and save that state as `<student ID>-w07-pre`. That is the save Week 7
   opens and the save its readings come off. Do not intervene during the run,
   however alarming it gets. Note, at the moment you notice it and not
   reconstructed afterwards, the in-game day you first thought something was
   wrong; if nothing struck you as wrong, write *"nothing"*, which is a
   legitimate answer and one the room needs to be honest.
6. Re-read and print your Week 3 zoning memo at A4 — the paragraph in which you
   sent industry to Ombersley Flats. You will be asked to read your own sentence
   back on 19 April.

Idris also asks the room before it leaves, on Nadia Ilkhom's behalf, for one
volunteer to have their save on the projector at 13:20 on 19 April; Nadia
confirms by email during the break, because a save put up cold wastes ten minutes
of the room's time. Week 7 opens on a different network — water, sewage and power
with Nadia — and the connection is genuine rather than decorative: congestion and
outage are the same capacity curve read at different tolerances, and this cohort
has just spent an afternoon at the top of one.

### `spec:` lines

```yaml
spec:
  - "You arrive with the save `<student ID>-w05` loaded and the Transportation Overview open, not a screenshot of either."
  - "Before you change anything, you record the 08:00 peak travel time, the off-peak travel time, and the volume-to-capacity ratio at the Wickstead junction."
  - "The widening's peak travel time is on your readings sheet as three rows — the first morning, three in-game weeks on, and after the refill — each labelled with the in-game date it was taken."
  - "Your decomposition table names the four sources of the traffic that refilled the widened junction, with a vehicles-per-hour figure against each and the info view it was read in."
  - "You leave a position statement of no more than 150 words on the wall and an off-machine copy of `<student ID>-w06`."
```

### Page body plan

Target 450–700 words. The page already renders the title, the date, the spec
list, the teaching team and the related links; the body opens on the hold and
never restates any of those.

1. **`## The 08:00 hold`** (~120 words) — twenty minutes with the simulation
   running and the build tools untouched; what to describe while it runs; why the
   longest queue is not the failure point. One sentence on Idris interrupting
   anyone who reaches for the road tool.
2. **`## Before you touch anything`** (~90 words) — the five before-figures, the
   pens-down rule at 13:10, and the 118% reconstructed from saturation flow and
   green ratio rather than taken on trust.
3. **`## Widening Wickstead`** (~150 words) — the pre-widening save set aside,
   two lanes to four, everybody widens, 8.9 on the first morning, three in-game
   weeks of relief, then 10.7. The warning about advancing six weeks in one
   action.
4. **`## Where the traffic came from`** (~140 words) — the four rows, named, with
   the view each is read in and Hessel Row as the spatial one. The one-way
   proposal and the numbers it has to arrive with.
5. **`## The argument round`** (~80 words) — four groups of four, one row each,
   the contested row re-read live, the instrument menu including the one the
   model cannot support, and the 150-word statement as the session's only output.
6. **`## Across the break`** (~110 words) — the save unrepaired with its
   off-machine copy, the three peak figures in the log, the named instrument, and
   then the break work in the order it is done: three headroom percentages
   written down before unpausing, six unattended in-game days saved as
   `<student ID>-w07-pre`, the day-you-noticed note, and the Week 3 memo printed.

### Frontmatter deltas

Add the five-line `spec:` array above and delete the `STARTER_CONTENT` comment.

`related:` needs **no change**. It already carries `lectures/week-06`, the paired
lecture, and that is the only edge this session should have. There is no
assessment edge in either direction and none must be added: nothing is submitted
in Week 6, no assessment declares this session in its `related`, and
`notes/lecture-plans.md` slide 16 is wrong to say a "Mobility Plan" pins up this
Friday — there is no such assessment and no Week 6 submission. The next brief is
Assessment 2, the Public Realm and Infrastructure Plan, in Week 9.

Do not touch `title`, `description`, `week`, `date` or `teachers`. `teachers`
correctly lists `idris-fenn` alone; Sunniva Marek attends only the three assessed
sessions and must not appear here.

### Hand-off

Week 7 receives a district of 12,800 on a corridor that has been widened and has
already refilled, and — more usefully for Nadia Ilkhom — a cohort that has just
watched a capacity curve behave. The framing carries directly: every network in
this city has a capacity curve, and the difference between Week 6 and Week 7 is
only what failure looks like at the top of one. On the road it is a queue, which
is annoying and self-correcting. On the water network it is an outage, which is
neither. It also receives two saves rather than one — `<student ID>-w06`,
unrepaired, and `<student ID>-w07-pre`, the six unattended in-game days that
Week 6's break protocol sets going — plus the three headroom percentages read
before that run was unpaused and the note of the day the student first thought
something was wrong. Those are Week 7's opening twenty minutes, and they cannot
be reconstructed on 19 April, which is why they are set on 29 March. Week 7 also
receives the thing Week 6 could not fix and did not touch:
the Pellow cells decision from Week 3 is still in the save, downwind and
downstream, and nothing done to the road hierarchy this afternoon has any bearing
on it.

No brief is fed this week and no brief is due. What Week 6 hands forward instead
is evidence: the three peak figures, the decomposition, and the position
statement. Assessment 2 in Week 9 is marked on livability at 45, and the
frontage material from this session — noise, crossing time, ground-floor
tenancies failing to hold their level on a widened street — is the exact kind of
exhibit that criterion wants. The capstone in Week 12 is where the corridor
decision made at 14:00 today becomes load-bearing and is no longer revisable,
which is worth saying to the room before they leave, once, without dramatising
it.

### New canon introduced

None. The session runs on Pelling Street, Denton Hill, Barrow Fields and the
Wickstead junction from the Weeks 4–6 canon row, on the Kerrow corridor from the
shared canon, on Pelling Cross and Marle Row from Weeks 4 and 5, and on the
Brayhurst quarter and Hessel Row from Week 2 — Hessel Row serving as the parallel
back-street route that empties when the corridor widens, and as the counter-flow
street in the one-way proposal. The Pellow cells reference in the hand-off is
Week 3's name, used as issued.

### Open questions for the writer

- **The corridor's orientation is genuinely unresolved and this session cannot
  dodge it.** The shared canon table calls the Kerrow corridor "the main
  north–south arterial", while `notes/lecture-plans.md` draws it east–west along
  the northern boundary in the Week 4 slide 11 diagram and then treats Pelling
  Street and the corridor as the same widened street in the Week 6 slides 12–13.
  This plan takes the canon as authoritative: the corridor runs north–south,
  Pelling Street is the internal high street running east–west, Wickstead is
  where they cross at the eastern end of Pelling Street, and the widening is of
  the corridor's approaches. Confirm that reading before writing the page,
  because the frontage that pays the livability cost depends on it.
- The spine says the widening goes "from two lanes to four", and this plan writes
  it exactly that way. The lecture's own worked example is a different
  intervention on a different and smaller save — two lanes each way to three —
  and its slide 2 before/day-1/day-30 table narrates a widening carried out in
  Week 5's session, which this studio did not do. Do not import the lecture's
  veh/h figures onto this week's save. Send students to their own Traffic info
  view and keep 118%, 11.2, 8.9 and 10.7 as the only travel-time and capacity
  numbers the page states.
- The save-naming convention in the shared canon is one save per week,
  `<student ID>-w<NN>`. This session needs a branch, and the plan uses
  `<student ID>-w06-wickstead`. Decide whether the suffix is permitted or whether
  the branch is named some other way, and make Week 4's two clinic branches use
  the same rule — they currently use the same shape.
- Whether the 150-word position statement stays anonymous on the wall or carries
  the student's name. Anonymous gets sharper statements and makes the instrument
  round at 15:30 harder to run, since Idris cannot ask a specific student to
  defend a specific line.

---
## Week 7 — Utilities Clinic

**Date:** 2027-04-19 · **Studio:** 13:00–16:00, Studio 2.14 ·
**Tutor(s):** Nadia Ilkhom · **Paired lecture:** Infrastructure You Don't See ·
**Assessment:** none due this week; Assessment 2 (Public Realm and
Infrastructure Plan, 25%) is due Week 9 and its fiscal argument starts here

### What the session is for, in one sentence

You will find the failure that has been sitting in your save file since Week 3,
say out loud which in-game day you first noticed it and which in-game day the
capacity bar had already gone red, and buy back the water without buying back
the water quality.

### What students arrive with

- **The Week 6 save, restored, unrepaired.** `<student ID>-w06`, taken at the
  end of the Week 6 session and copied off-machine as the policies page
  requires. Restore it from the off-machine copy if the machine has been
  reimaged over the break. Nothing built, demolished, rezoned or re-sliderd
  during the two weeks off. The clinic does not work on a district that was
  quietly tidied.
- **The pre-run save, `<student ID>-w07-pre`.** Before the session, open
  `-w06`, unpause at 1× speed, and let the district run **six in-game days**
  without touching a single tool. Save at the end of day six. This is the save
  you open at 13:00 and it is the save the readings come off. Do not intervene
  during the run, however alarming it gets. What happens during those six days
  is the session.
- **The three headroom percentages, written down before the run.** Water,
  sewage and electricity, each as a percentage of installed capacity, read off
  the production-versus-consumption bar in each info-view **before** you unpause.
  The Week 7 lecture's four bands of headroom are the scale you write them
  against. Bring them on paper.
- **A one-line note of the in-game day you first noticed something wrong**,
  written during the six-day run, at the moment you noticed and not
  reconstructed afterwards. If nothing struck you as wrong, write *"nothing"* —
  that is a legitimate and common answer and the room needs it to be honest.
- **Week 6's readings, re-read.** Peak travel time 11.2 min, off-peak 5.6, the
  Kerrow corridor at 118% capacity with Wickstead junction as the failure
  point, transit share 14%, happiness 66%, land value index 33, balance
  +₡1,800/mo. You will be asked to subtract from these numbers in the first
  half-hour, so know them rather than looking for them.
- **The Week 3 zoning memo, re-read.** Specifically the paragraph in which you
  justified sending industry to Ombersley Flats. The words *downwind*,
  *downstream* and *cheap* are in most of them. Bring it printed at A4; you
  will read your own sentence back at the crit.
- **The Week 7 lecture's slide 9 figure**, printed or open on a second screen —
  the Kerrow corridor drawn as a network, with the Farrant Row outfall upstream
  of the Kerrow intake. The clinic assumes you have that figure in front of you
  and does not redraw it.
- Headphones off, notification feed visible, water and sewage info-views open
  at 13:00. Nadia starts the room on time.

### Run sheet

| Time | Segment | What happens | Who runs it |
|---|---|---|---|
| 13:00–13:20 | Opening round: the day you noticed | Every student states two in-game days out loud — the day they first noticed something wrong, and the day the water capacity bar first went red. Nadia writes both columns on the board. The gap is the lecture's whole argument, measured on the room's own saves. | Nadia Ilkhom |
| 13:20–13:55 | Cascade walk-through | One volunteered save on the projector, water info-view and water-pollution overlay both open. The eight steps of the lecture's cascade run live, paused at each, with the room asked what the readout showed and on which day. | Nadia Ilkhom |
| 13:55–14:35 | Clinic round one — booked slots | Students work their own networks at their own machines. Nadia takes booked eight-minute slots in roster order, one machine at a time, and the task at each is the same: find your reverse salient and say what you thought the network was doing. | Nadia Ilkhom, at each machine in turn |
| 14:35–14:45 | Break | Machines stay unpaused where students have set them running; nobody builds during the break. | — |
| 14:45–15:15 | The upgrade | The second pumping unit goes in at Wensley Bank. Run six more in-game days. Take the week's readings at in-game 08:00 on the sixth day and enter them on the readings sheet. | Students, at their own machines |
| 15:15–15:40 | Clinic round two — the plant | The restored load arrives at the Farrant Row treatment plant, which is now over capacity. Nadia walks the room through what the sewage info-view and the water-pollution overlay are showing. **Nothing is fixed.** The over-capacity plant is costed, recorded and left running. | Nadia Ilkhom |
| 15:40–15:52 | Reverse-salient cards | Each student fills in and signs a reverse-salient card: the one component holding their district's water capacity, its installed number, its current load, and the monthly cost of the next increment. | Students |
| 15:52–16:00 | Wash-up and hand-off | Saves taken as `<student ID>-w07`, cards handed in, off-machine copies confirmed. Nadia states what Week 8 will do to the number on the card. | Nadia Ilkhom |

**The opening round is the session's argument and it takes twenty minutes
because it has to be unhurried.** The two columns Nadia writes on the board are
headed *noticed* and *red*. In most cohorts the median gap is three to four
in-game days and a third of the room writes *nothing* in the first column. Do
not soften this and do not let students revise their answer once they hear
somebody else's. The board stays up for the rest of the session and the crit
questions point at it.

**The cascade walk-through needs a volunteer, and the volunteer needs telling
in advance.** Nadia asks at the end of the Week 6 session and confirms by email
during the break, because a save put on the projector cold wastes ten minutes
of the room's time on finding the info-view. The projected save is run at 1×
with the notification feed deliberately hidden, so the only thing the room can
read is the capacity bar. Pause at each of the eight steps and ask the same two
questions: *what does the readout say, and what would you have done if you were
watching this one?*

**Clinic round one is a clinic, not a desk crit, and the difference matters.**
Students are working at their machines the whole forty minutes. Nadia arrives
at each in turn, sits down, and does not look at the plan — only at the
production-versus-consumption bars and the pipe graph. Slots are booked on the
sheet at the door in eight-minute blocks and run to the clock. A student who is
not ready when their slot comes round loses it to the next name; there is no
second pass. Book the slot even if nothing on your network looks broken. That
is when the eight minutes is worth most, and it is the standing advice on
Nadia's page.

### The exercise

Open `<student ID>-w07-pre`. Before anything else, open the **water info-view**
and read the production-versus-consumption bar. It is red, and it has been red
since a medium-density residential block completed on the eastern edge of
**Ombersley Flats** during the six-day run. District draw crossed the **Wensley
Bank pumping station**'s installed capacity on that frame. Nothing about the
map changed, no notification fired for four days, and the bar has been the only
honest readout in the file the whole time.

Trace the trunk main outward from Wensley Bank with the water info-view's pipe
overlay on. Delivered pressure holds through **Halstead Reach** and **Ockley
Green**, tapers across Ombersley Flats, and reaches zero short of **Farrant
Row** — which added no demand at all and is simply furthest along the graph.
This is the shape the lecture drew on slide 12 and it is worth looking at on
your own save rather than accepting from the deck: the blocks that lose water
are not the blocks that caused the shortfall.

Now switch to the **sewage info-view** and then to the **water-pollution
overlay**, and follow the water backwards rather than forwards. The **Farrant
Row treatment plant** is receiving more than it can treat and is discharging
partially treated effluent at the **Farrant Row outfall**, which sits on the
Kerrow upstream of the **Kerrow intake** that Wensley Bank draws from. Sewage
has backed up at **Tuckwell Bend**, where the low-lying Ombersley blocks sit
inside the river bend and the gradient runs the wrong way. Six in-game days of
contaminated supply are already behind you. **Farrant Row is on a boil notice.**

The causal chain you are asked to write down, in this order, is not a chain
about pipes. Industry went to Ombersley Flats in **Week 3** because it was
downwind, downstream and cheap. Downstream of what was never asked. The
outfall that serves it discharges above the intake, and the pumping station's
capacity was never revisited against the zoning envelope that rezoning
implied. That decision is four weeks old, it was invisible in every readout a
student habitually checks, and it was legible in the capacity bar from the day
it was made.

**The upgrade.** At 14:45, place the second pumping unit at Wensley Bank. It
costs **₡6,800 a month** and it is the single largest new line the district has
taken on all semester. Run six more in-game days at 1× and take the week's
readings at in-game **08:00** on the sixth day, per the studio's standing
convention. Water pressure is restored along the whole trunk main. Farrant Row
has water again.

**Farrant Row's boil notice does not lift, and this is the part of the session
that people misread.** The pump fixed pressure. Pressure was never the quality
problem. The intake is still downstream of the outfall, the plant is still over
capacity, and restoring full flow to the districts has restored full load to
the plant — so the discharge is now worse than it was while Farrant Row was
dry. The correct engineering move made the receiving water worse, on the same
afternoon, on your own save. Record the plant's load against its capacity, and
record that the boil notice is still in force at the 08:00 reading.

**What you do not do this week.** You do not upgrade the Farrant Row treatment
plant. It would cost **₡5,100 a month** on top of the pump and the district is
carrying +₡900 a month. You do not rezone Ombersley Flats, you do not demolish
the industry, and you do not move the intake. You cost the plant upgrade, you
write it on the reverse-salient card as the next increment, and you leave the
ground exactly as damaged as you found it. Week 8 will decide whether that
₡5,100 is ever funded, and Week 10 will visit the same bend of the river.

### Readings taken this week

All readings at in-game **08:00** on the sixth day after the pump goes in,
against the Week 6 session's readings.

| Reading | Where it is read | This week's value | Against last week |
|---|---|---|---|
| Population / households | district information panel | 16,100 / 6,200 | 12,800 / 4,900 |
| Monthly balance | budget panel, per-district income and outlay | **+₡900/mo** | +₡1,800/mo — down ₡900 |
| Wensley Bank pumping station, monthly upkeep | budget panel, water and sewage line | **₡6,800/mo** | new line — did not exist in Week 6 |
| Farrant Row treatment plant upgrade | costed, not placed | ₡5,100/mo if funded | not costed in Week 6 |
| Peak travel time | traffic info-view, travel-time readout | 10.9 min | 11.2 min — improved by 0.3 |
| Transit share | transit info-view | 15% | 14% — up 1 point |
| Happiness, district mean | happiness readout | **61%** | 66% — down 5 points |
| Land value index, district mean | land value info-view | 34 | 33 — up 1 point |
| Land value index, **Ombersley Flats** | land value info-view, sub-area selection | **11 — collapsed** | not read as a sub-area in Week 6; this is the first week it is recorded separately |
| Water supply, Farrant Row | water info-view and notification log | **boil notice, in force** | none in Week 6 |
| Contaminated supply | water-pollution overlay, notification log | six in-game days | none in Week 6 |
| Treatment plant load against capacity | sewage info-view, production-versus-consumption bar | over capacity, discharging | within capacity in Week 6 |

**A plan claiming all three metrics improved has not been read carefully.**
This week two moved the wrong way. **Livability** moved the wrong way hardest:
happiness fell five points to 61% and Ombersley Flats' land value collapsed to
11. **Fiscal performance** moved the wrong way as well, from +₡1,800 to +₡900,
because the pump's ₡6,800 a month is a permanent line taken on to buy back
something the district already had in Week 6.

**Mobility performance is the metric this week does not touch**, and that is
worth stating rather than fudging into the tradeoff. Peak travel time improved
by 0.3 minutes and transit share rose a point, both as the Wickstead widening
finished bedding in. Utility failures are the one class of failure in this
studio that leaves the road network entirely alone. Do not claim credit for the
mobility numbers this week; you did not do anything to earn them.

**The two land-value readings are the pair to argue from.** The district mean
went *up* one point, to 34, in the week Ombersley Flats fell to 11. The mean
rose because Halstead Reach and Ockley Green kept growing and Ombersley is a
small share of the district. A student reading only the district mean this week
would report a good week. The sub-area reading is the one that is true, and
from this week on the readings sheet carries both.

### The tradeoff the session forces

**Fiscal performance against livability**, and it is forced by a single number:
how much headroom you are willing to pay for at Wensley Bank and at the Farrant
Row treatment plant before the demand that justifies it exists. The mechanism
is the shape of the capacity curve. Service quality is flat against load until
somewhere around 95% of installed capacity and then it falls off a cliff, which
means the entire period during which buying headroom is cheap is also the
entire period during which buying headroom looks like waste. There is no point
on the curve at which the readout tells you to spend the money and the district
still looks fine.

You are paying ₡6,800 a month this week for capacity you could have had in
Week 3 at the same monthly cost and no boil notice, no six days of
contaminated supply, no collapsed sub-area. The money is identical; what
differs is that the district now also carries the livability damage. That is
what deferral bought: nothing, at full price, plus interest paid in a metric
that is not fiscal.

**The choice cannot be deferred again, and this is the part students argue
with.** The plant upgrade is ₡5,100 a month against a balance of +₡900. It is
not affordable this week on any reading. But the reason it is not affordable is
that the pump was not bought four weeks ago, and the reason the pump was not
bought four weeks ago is that the balance looked fine. The same sentence will
be available next week, and the week after, and each time it will be true and
each time it will be the reason the number gets worse. Write the ₡5,100 down
now, unfunded, in the form of words that makes it impossible to pretend next
week that nobody knew. That written line is what Week 8 acts on.

### At the crit

Nadia works the room in booked slots and asks, at each machine, some subset of
these. Every one of them is a question about what you believed the network was
doing.

- On which in-game day did you think the water was fine? Open the save to that
  day and show me the capacity bar you were not looking at.
- You wrote *nothing* in the first column. What were you looking at instead for
  six days?
- Point at the component that sets this district's water capacity. Not the
  system — the component. What is its installed number and what is its load?
- You added distribution pipe in Ombersley in Week 5. What did you think that
  bought you?
- Read me the sentence from your Week 3 memo where you sent industry to
  Ombersley Flats. What did *downstream* mean when you wrote it, and downstream
  of what?
- Farrant Row added nothing to the load and lost water first. What did you think
  the trunk main was doing between Ockley Green and Farrant Row?
- The pump is in and Farrant Row still has a boil notice. What did you expect
  the pump to fix, and where did that expectation come from?
- Your treatment plant went over capacity the moment you restored pressure.
  Did you predict that before you placed the pump, or after you read the bar?
- If I hand you ₡5,100 a month right now, what do you buy, and how do you know
  it is the right increment rather than the visible one?
- What is the next component that will do this to you, and what is its
  headroom this morning?

**The failure mode Nadia is watching for** is the student who has already
narrated the cascade fluently and cannot show her the readout it came off. The
lecture supplies the whole story — reverse salient, tight coupling, the plume,
the intake — and a well-read student can reproduce it at the desk without
having opened a single info-view on their own save. Nadia's counter is that
every question above ends in *show me*, and the answer has to be a number on
this district's readout on a named in-game day. A confident account of a
cascade that the student cannot locate in their own file is the worst outcome
of the week, because it will pass unnoticed until Week 10 opens the same save
under load.

### What leaves the room

- **The save**, `<student ID>-w07`, taken at 15:52 with the second pumping unit
  in and the treatment plant left over capacity. One off-machine copy before
  you leave the building, per the save discipline on the policies page. Do not
  repair the plant at home; Week 8 assumes this state and Week 10 assumes what
  Week 8 does to it.
- **The pre-run save**, `<student ID>-w07-pre`, kept as well and not
  overwritten. It is the only file that holds the district mid-cascade and
  Week 11 will want it.
- **The readings sheet** for Week 7, all twelve rows filled, taken at in-game
  08:00 on the sixth day, with the district-mean and Ombersley Flats land value
  entered as two separate rows.
- **The reverse-salient card**, signed, handed to Nadia before you leave:
  component, installed capacity, current load, headroom as a percentage, and
  the monthly cost of the next increment. Nadia photographs the set and returns
  them at the start of Week 8.
- **Four screenshots**, captioned with the in-game day and the words *08:00*:
  the water info-view showing the production-versus-consumption bar; the
  water-pollution overlay showing the plume between the outfall and the intake;
  the land value info-view with Ombersley Flats selected, reading 11; the
  budget panel showing the ₡6,800 line.
- **One written line, unfunded**, in the form: *"The Farrant Row treatment
  plant upgrade costs ₡5,100 a month. I have not funded it, and the metric that
  is paying for that is livability."* This line is carried into Week 8 and is
  the first thing entered on the corridor budget sheet.

All of it uploaded by **21:00 the same day**. The clinic's material is worth
nothing a week later; the point is that it was recorded on the day it was read.

### `spec:` lines

```yaml
spec:
  - "You arrive with your Week 6 save restored unmodified and a second save taken after six unattended in-game days of run-on, named `<student ID>-w07-pre`."
  - "You bring water, sewage and electricity headroom written down as three percentages of installed capacity, read before you unpaused the run."
  - "You can name the single component that sets your district's water capacity, and give its installed capacity and its current load as numbers."
  - "You leave with the Wensley Bank second pumping unit placed, the Week 7 readings taken at in-game 08:00, and Ombersley Flats' land value recorded separately from the district mean."
  - "You leave one written line naming the Farrant Row treatment plant upgrade, its monthly cost, and the fact that you have not funded it."
```

### Page body plan

The page already renders the title, the date, the spec list, the teaching team
and the related content, so the body must not repeat any of them. Target
**450–700 words**.

1. **`## Before you come`** — roughly 140 words. The two saves: `-w06` restored
   unmodified, and the six-day unattended run-on saved as `-w07-pre`. The three
   headroom percentages written down before unpausing. The one-line note of the
   day you noticed, written during the run. The Week 3 memo printed.
2. **`## What has already happened`** — roughly 120 words. Stated in the past
   tense as fact, not as a scenario: the block completed, draw crossed capacity,
   pressure fell at the far end of the main, Farrant Row is on a boil notice,
   six in-game days of contaminated supply, the outfall is upstream of the
   intake, and the zoning decision behind it is four weeks old.
3. **`## In the room`** — roughly 160 words. The opening round and the two
   columns on the board. The cascade on the projector. Clinic slots booked in
   eight-minute blocks and run to the clock, with the standing advice to book
   even when nothing looks broken.
4. **`## What you build`** — roughly 130 words. The second pumping unit at
   Wensley Bank, ₡6,800 a month, six days of run-on, readings at 08:00. Then
   the flat statement that the boil notice does not lift and why, and the
   explicit instruction not to touch the treatment plant, the zoning or the
   intake.
5. **`## What you take away`** — roughly 90 words. Save, readings sheet,
   reverse-salient card, four captioned screenshots, the unfunded line, 21:00.

Keep the register flat throughout. The section that carries the week is section
2, and it works only if it is written as a maintenance report rather than as a
twist.

### Frontmatter deltas

None — the frontmatter is correct as it stands. `src/content/sessions/07-utilities-clinic.md`
already carries `related: [lectures/week-07]`, and `title`, `description`,
`week`, `date` and `teachers` are settled. The only change to the file is
replacing the `STARTER_CONTENT` body, removing the comment, and adding the
`spec:` array above.

### Hand-off

Week 8 receives a district carrying a brand-new ₡6,800 a month against a
balance of +₡900, a treatment plant running over capacity, a boil notice still
in force at Farrant Row, a sub-area reading of 11 at Ombersley, and one written
line naming a ₡5,100 a month upgrade that nobody has funded. That line is the
first item on Week 8's agenda and the first entry on the corridor budget sheet,
because the cheapest cut available to a student under next week's imposed
cutback is to reverse or defer exactly what was bought this afternoon. Week 8
opens by refusing it, on the record, and the refusal only means something
because this week's readings are in the file.

Toward **Assessment 2 — Public Realm and Infrastructure Plan (25%, due Week 9)**:
this session produces the infrastructure half of that title. The reverse-salient
card, the ₡6,800 line, the ₡5,100 unfunded line and the plume screenshot are the
evidence that brief's **fiscal 30** criterion is marked on, and the boil notice
and the Ombersley sub-area reading are what its **livability 45** criterion has
to account for. This week hands the brief a costed, unresolved infrastructure
position. It does not hand it a solution, and the brief does not ask for one.

### New canon introduced

- **the reverse-salient card** — the signed A5 card each student completes at
  the end of the clinic naming the one component that sets their district's
  water capacity, with its installed capacity, current load, headroom
  percentage and the monthly cost of the next increment. Handed in weekly from
  Week 7 onward.

Borrowed from `notes/lecture-plans.md` rather than coined here, and not in the
Kerrow Basin canon table: **Farrant Row treatment plant**, **Farrant Row
outfall**, **Kerrow intake**. All three are compounds on canon place names and
are used unchanged.

### Open questions for the writer

- The six-day unattended run-on is set as pre-session work, which assumes every
  student has the game on a machine they control during the break. If the
  studio has to accommodate lab-only access, the alternative is that Nadia
  issues the advanced state and the room loses the *noticed / red* board, which
  is the best twenty minutes of the session. Decide before the page is written,
  because the "Before you come" section changes completely.
- **₡5,100 a month for the Farrant Row treatment plant upgrade is the one cost
  figure this arc adds beyond the metric spine.** It is not a metric reading and
  it never enters the balance, because it is never funded — but it recurs in
  Weeks 8, 9 and 10 and should be checked against whatever the other weeks
  coin before the pages are written.
- The Week 7 lecture plan prices deferring the pump upgrade at ₡4,500 a month on
  its slide 12, which contradicts the spine's ₡6,800. The session plan uses
  ₡6,800 throughout. Either the lecture's slide is corrected or the session
  page should avoid citing the lecture's figure at all.
- Whether the boil notice at Farrant Row is a discrete simulation state the page
  can name as a readout, or a studio convention layered over the water-pollution
  overlay. The plan treats it as a readout in the notification log; if it is a
  convention, say so once in Week 7 and it holds for Weeks 8 to 10.

---

## Week 8 — Budget Under Cutback

**Date:** 2027-04-26 · **Studio:** 13:00–16:00, Studio 2.14 ·
**Tutor(s):** Tobias Wren · **Paired lecture:** Fiscal Realism ·
**Assessment:** none due this week; Assessment 2 (Public Realm and
Infrastructure Plan, 25%) is due next week and arrives with the budget you set
this afternoon

### What the session is for, in one sentence

This afternoon you will make your district's fiscal performance the best it has
been all semester by making it a worse place to live and harder to get around,
and before you leave you will stand at your own machine and say out loud, in a
form of words the room writes down, what you have chosen not to fund.

### What students arrive with

- **The Week 7 save, `<student ID>-w07`, unrepaired.** Second pumping unit in
  at Wensley Bank, ₡6,800 a month on the water and sewage line, Farrant Row
  treatment plant still over capacity and discharging, boil notice still in
  force. If you upgraded the plant over the week, you are not in this session's
  starting state and the readings will not compare with the room's.
- **The unfunded line from Week 7**, written out: *"The Farrant Row treatment
  plant upgrade costs ₡5,100 a month. I have not funded it, and the metric that
  is paying for that is livability."* Bring it on paper. It is entered on the
  corridor budget sheet in the first fifteen minutes and it does not come off
  again this semester.
- **The reverse-salient card**, returned to you by Nadia at the start of the
  session, with your district's water headroom on it as of last Monday.
- **Week 7's readings**, all twelve rows: balance +₡900/mo, peak 10.9 min,
  transit share 15%, happiness 61%, land value index 34 district mean and
  **11 at Ombersley Flats**. You will subtract from four of these before 16:00.
- **The fiscal readout and the land value info-view open before 13:00.** This
  is Tobias's standing instruction and it is on their page: budget questions in
  this studio go badly otherwise. Second screen if you have one, land value on
  the left.
- **Your district's full service outlay, itemised, on one page.** Every monthly
  line: water and sewage, electricity, garbage, healthcare, education, police
  and fire, parks and recreation, transit operations, road upkeep. Line name and
  monthly figure, totalled at the bottom. Written before the session, not
  during it. **You cannot find 22% of a number you have not added up**, and the
  first twenty-five minutes of the session assume you have.
- **One prediction, written and sealed before any slider moves**: which line
  you expect to cut, and which of the three named metrics you expect it to
  cost. The session compares that sentence against the readout at four
  simulated weeks, and the gap between them is the most useful thing most
  students take out of the afternoon.

### Run sheet

| Time | Segment | What happens | Who runs it |
|---|---|---|---|
| 13:00–13:10 | The number | Tobias states the cutback: **22% off the district's monthly service outlay**, effective this session, not negotiable, not modelled as a proposal. No discussion of where it came from. | Tobias Wren |
| 13:10–13:25 | Line zero — the refusal | The room's cheapest available cut is to reverse last week's pump or defer the treatment plant permanently. Both are put on the table properly, costed, and refused out loud. The refusal is the first entry on the corridor budget sheet. | Tobias Wren |
| 13:25–13:50 | Charrette — find the 22% on paper | In pairs, at the table, sliders untouched. Each student builds a closure on paper from their own itemised outlay and names the metric each line lands on. | Students, in pairs |
| 13:50–14:30 | At the machines | Apply the closure. Run four in-game weeks at 1×. Do not adjust anything during the run. | Students |
| 14:30–14:40 | Break | Machines left running; nothing built. | — |
| 14:40–15:05 | Desk crit round — prediction against readout | Eight machines drawn from the roster, three minutes each, in front of whoever is standing there. The sealed prediction is opened and read against what the readout actually did. The other eight do the same exercise in pairs, out loud, and Tobias takes the other half next week. | Tobias Wren |
| 15:05–15:40 | **On the record** | The roster round. Each student stands at their own machine and states their unfunded line aloud in the set form. Tobias enters it on the corridor budget sheet as they speak. No discussion, no response from the room. | Tobias Wren |
| 15:40–15:52 | The sheet, read back | Tobias reads the whole corridor's unfunded lines back to the room in one continuous pass, without comment. | Tobias Wren |
| 15:52–16:00 | Wash-up and hand-off | Saves as `<student ID>-w08`, unfunded lists signed and photographed, and the one instruction that matters for next Monday: the pin-up is funded from this sheet. | Tobias Wren |

**Line zero is the session's spine and it is deliberately taken first.** Every
student's spreadsheet will, within about four minutes, arrive at the same
answer: the cheapest 22% in the district is to switch the new Wensley Bank unit
down and never fund the ₡5,100 plant upgrade. Tobias does not dismiss it. It is
costed on the board — the saving is real, it is immediate, and it is the
largest single number available. Then the room is walked back through last
Monday's readings: six in-game days of contaminated supply, a boil notice, a
sub-area at 11. The refusal is stated in the form *"We are not paying for this
cut with the water"*, and it goes on the corridor budget sheet above every
other line, dated, before a single student touches a slider. Everything after
that is a choice made inside a fence.

**The charrette is on paper because sliders are faster than thought.** Twenty-five
minutes at the table, in pairs, with the itemised outlay and a pen. Each pair
works both districts, not one. The output is a list: line, current monthly
figure, cut monthly figure, saving, and the named metric — **fiscal
performance**, **mobility performance** or **livability** — that the cut lands
on. A closure that reaches 22% without a metric named against every line is not
finished, and Tobias will not look at it at the machine.

**The on-the-record round is the week's core ritual and it is specified to the
sentence.** See the section below; the run sheet allocates thirty-five minutes
to it and that is not padding. It runs at roughly ninety seconds a student in
roster order, and the room stays silent throughout.

### The exercise

**The cut is 22% and the cut is not yours.** Tobias states it at 13:00 as a
fact about the district's circumstances, in the same register a real studio
uses to tell a room that the client has lost the site: it has happened, the
reasons are not the afternoon's business, and the work now is what you do about
it. Nobody in the room voted for it, nobody can argue it down, and it does not
scale to how well your district has been performing. Twenty-two per cent off
your total monthly service outlay, in force by the end of the session.

**What is imposed is the amount. What is chosen is the composition, and that is
the whole design problem.** This distinction has to be held clearly or the
session collapses into either a maths exercise or a grievance. The 22% is
arithmetic. Which lines carry it, in what proportion, and which parts of the
district feel it are three design decisions with three different answers, and
they are decisions of exactly the kind the studio marks.

Work from your itemised outlay. The lines the room converges on, and the two
the readings record, are these.

**The transit spine.** The Denton Hill–Barrow Fields spine has run at a
six-minute headway since Week 5. Stretching it to **ten minutes saves ₡1,900 a
month** in operating cost and is the single largest cut available that does not
touch the water. Open the transit line panel, set the headway, and watch what
follows over the four-week run: transit share falls from 15% to **11%**, the
trips that leave the bus arrive on the Kerrow corridor as cars, and peak travel
time goes from 10.9 minutes to **11.8**. The corridor was already the failure
point in Week 6. It has not been widened again; it has simply been given the
traffic back.

**Ockley Green.** Park maintenance goes to **60%**. This is the cheap-looking
cut, and the funding-response curve from the lecture is the reason it is not:
below roughly 85% of default funding a maintenance slider is not a discount but
a threshold device, and the attractiveness contribution falls well before
anything in the park looks different. Take a street-level screenshot of Ockley
Green today, at 60%, and keep it. Next Monday you will be arguing about a plaza
in this park, and the argument has to start from a park the district stopped
maintaining.

**Everything else is yours to compose**, within the fence set at line zero.
Healthcare and education coverage retreating from Farrant Row is available and
is livability. Garbage collection is available and is livability arriving
slowly enough to be mistaken for a zoning problem in three weeks' time. The
residential tax rate is on the panel and it is not a service cut — it does not
count toward the 22%, and reaching for it is the most common way a student
spends twenty minutes not doing the exercise.

**Run four in-game weeks and take the readings at in-game 08:00.** Then open
your sealed prediction. Most students predict correctly which line they will
cut and incorrectly which metric will move most, because the cut lands on the
metric they were watching and the revenue effect lands on the one they were
not. The balance goes to **+₡3,400 a month** — the strongest fiscal performance
the district has recorded in eight weeks, and a smaller improvement than the
gross saving, because happiness fell to **58%** and the land value index fell
to **31**, and three of the district's four revenue lines are functions of land
value. The cut destroyed some of its own saving on the way through. Do not
compute that difference as a figure; describe the mechanism in the memo, which
is what it is for.

### Readings taken this week

All readings at in-game **08:00**, four simulated weeks after the closure is
applied, against Week 7.

| Reading | Where it is read | This week's value | Against last week |
|---|---|---|---|
| Population / households | district information panel | 18,400 / 7,100 | 16,100 / 6,200 |
| Monthly balance | budget panel, per-district income and outlay | **+₡3,400/mo** | +₡900/mo — up ₡2,500 |
| Service-budget cut applied | budget panel, total monthly service outlay | **22%**, imposed | not applicable — imposed this week |
| Transit headway, Denton Hill–Barrow Fields spine | transit line panel | **10 min** | 6 min — stretched by 4 |
| Saving from the headway stretch | budget panel, transit operating line | **₡1,900/mo** | new this week |
| Peak travel time | traffic info-view, travel-time readout | **11.8 min** | 10.9 min — worse by 0.9 |
| Transit share | transit info-view | **11%** | 15% — down 4 points |
| Happiness, district mean | happiness readout | **58%** | 61% — down 3 points |
| Land value index, district mean | land value info-view | 31 | 34 — down 3 points |
| Ockley Green park maintenance | parks and recreation budget slider | **60%** | 100% |
| Farrant Row treatment plant upgrade | corridor budget sheet, unfunded | ₡5,100/mo, still unfunded | unfunded in Week 7 |
| Wensley Bank pumping station | budget panel, water and sewage line | ₡6,800/mo, protected at line zero | ₡6,800/mo |

**A plan claiming all three metrics improved has not been read carefully.**
This week two of the three moved the wrong way and they moved the wrong way on
purpose. **Mobility performance** moved the wrong way: peak travel time to 11.8
minutes and transit share down to 11%, both direct consequences of the
four-minute headway stretch. **Livability** moved the wrong way: happiness to
58%, land value to 31, Ockley Green maintained at 60%. The metric that improved
is **fiscal performance**, from +₡900 to +₡3,400.

**This is the only week in the semester where the metric that improves is the
one nobody in the room wanted.** Every other week's readings can be defended as
a tradeoff somebody chose to make. This week's cannot. The +₡3,400 is not an
achievement, it is a receipt, and a memo that presents it as an achievement has
misread its own numbers. Say what it cost, in the two metrics it cost it in,
and say who decided — which is nobody in this room.

### The tradeoff the session forces

**Mobility performance against livability, with fiscal performance held fixed
as the binding constraint.** That shape is deliberately different from Week 7's
and from Week 9's, and the difference is the point. In the other two weeks the
budget is a variable the design moves. This week the budget is a wall and the
design is the only thing left that can move.

The mechanism is the composition of the closure. Twenty-two per cent has to
come out somewhere, and the district's service outlay contains exactly two
large, cuttable, non-water lines: the transit operating budget and the coverage
services — healthcare, education, parks. Take the whole 22% out of transit and
the headway goes past ten minutes, load factor climbs, the bus stops being
worth waiting for, and every abandoned bus trip reappears as a car on the
Kerrow corridor at the same hour. Take the whole 22% out of coverage and
services retreat from Farrant Row, which is the district's furthest edge on
every graph the studio has drawn this semester, and happiness falls where the
coverage leaves. **Fiscal performance reads +₡3,400 either way.** That is what
makes the composition a design decision and not an accounting one.

**It cannot be deferred because the deferral is the thing that is fenced off.**
The one closure that would let a student avoid choosing between mobility and
livability is the water — reversing the Wensley Bank unit or writing off the
treatment plant for good. That is genuinely the cheapest 22% on any student's
page and the room refuses it at 13:10 with the previous Monday's readings on
the board. Once line zero is written, there is no composition left that does
not name one of the two metrics as the one you are choosing to be worse at.
Every student finds this out in the charrette, and it is the reason the
charrette is twenty-five minutes rather than ten.

### At the crit

Tobias takes each machine for three minutes in the 14:40 round, prediction open
on the desk, and asks some subset of these. Every one of them is the same
question — what did it cost per unit of the thing it bought — pointed at a
different line.

- The headway stretch saved ₡1,900 a month. Four points of transit share left.
  What is that per point, and would you have paid it if I had quoted it that way?
- You cut Ockley Green's maintenance to 60%. Name the monthly saving, then tell
  me what the district bought with it.
- Your closure takes 14% out of coverage and 8% out of transit. Why that ratio
  and not the other way round? Show me the number that decided it.
- Your prediction says the cut costs mobility. Your readout says happiness fell
  three points as well. Where did those three points come from, in a line item?
- Peak travel time went from 10.9 to 11.8. Which of your cuts owns the 0.9, and
  how much of it did you buy per ₡100 saved?
- The balance is up ₡2,500 and your gross saving is larger than that. What
  happened to the difference, and which revenue line is it sitting in?
- Farrant Row lost coverage. Farrant Row is also on a boil notice and reads 11
  on the land value overlay at Ombersley next door. What is the cumulative
  monthly saving you have taken out of that end of the district since Week 7?
- You protected the Wensley Bank line at line zero. What is that protection
  costing you per month, and what is it buying that you can point at on a
  readout today?
- Which one of the three metrics is your best number this week, and who in this
  room asked for it?

**The failure mode Tobias is watching for** is the student who has closed the
22% cleanly and cannot say what it cost, because they cut the lines with the
smallest apparent consequences rather than the lines they had an argument
about. That student produces the tidiest spreadsheet in the room and the
weakest memo, and it shows up next Monday as a public realm plan funded out of
cuts nobody can defend. The secondary failure mode is the student who reads
+₡3,400 as good news. Tobias's response to both is the same and it is on the
record at 15:05: say the sentence, and hear yourself say it.

### On the record — the ritual, specified

This is the week's core device and it is written out because it fails if it is
improvised.

**Timing.** 15:05 to 15:40, after the desk crit round, before the wash-up.
Roughly ninety seconds a student, roster order, no volunteers and no passing.

**Position.** The student stands at their own machine, with the budget panel
open on screen behind them, facing the room. Not at the front. The room turns
to face them.

**The form of words is fixed** and Tobias corrects deviations, because the
whole value of the ritual is that every sentence in the room has the same
shape and can therefore be compared:

> *"I have cut ⟨line⟩ from ⟨figure⟩ to ⟨figure⟩ a month. What I have chosen
> not to fund is ⟨item⟩. The metric that is paying for it is ⟨fiscal
> performance / mobility performance / livability⟩, and this week it reads
> ⟨figure⟩."*

Each student says as many of these as their closure has lines, in descending
order of saving. Every student's first sentence is the same one, carried in
from Week 7 and stated again here: *the Farrant Row treatment plant upgrade
costs ₡5,100 a month, I have not funded it, and the metric that is paying for
it is livability.*

**Two documents are written as it happens.** Tobias enters each line on the
**corridor budget sheet** — the studio's shared, dated record of every
student's closure, one column per student, which Week 9 costs the public realm
against and Week 12 reads end to end. The student simultaneously writes the
same sentences on their own **unfunded list**, a standing single-page document
that gains lines in Weeks 8, 9, 10, 11 and 12 and is never edited backwards.
Sign and date it at the bottom of the round.

**The room does not respond.** No discussion, no questions, no reassurance, no
laughter, and Tobias does not comment between students. This is the one
rule most likely to be broken and it is the one that matters: the ritual works
because saying it aloud to a silent room is uncomfortable, and every softening
move the room makes takes that away. Tobias asks exactly one follow-up, and only
where a saving has been stated without a purpose: **"And what did that buy?"**
The honest answer this week is always *nothing — it was not spent, it was
kept*, and the student has to say so.

**The read-back at 15:40** is Tobias reading the corridor budget sheet's
unfunded column aloud in one continuous pass, without attribution and without
comment, and then stopping. Nothing follows it except the wash-up. A cohort of
that many identical sentences is the argument; adding to it weakens it.

### What leaves the room

- **The save**, `<student ID>-w08`, with the closure applied and four in-game
  weeks run. One off-machine copy before you leave. Do not restore anything
  over the week: next Monday's pin-up is marked against a district running on
  this budget.
- **The readings sheet** for Week 8, all twelve rows, taken at in-game 08:00
  four simulated weeks after the closure.
- **Your unfunded list**, signed and dated, photographed by Tobias at 15:52 and
  kept by you. It is a standing document; you bring it to every remaining
  session and it is an appendix to the Week 9 memo.
- **Your closure, entered on the corridor budget sheet**, in the studio's
  shared copy. Every line you proposed next week has to be funded from this
  column, and the jury has the sheet.
- **The opened prediction**, with a two-sentence note on where it was wrong.
  This is the paragraph most likely to earn marks in the Week 9 memo's fiscal
  section, because it is evidence of a budget that was reasoned rather than
  found.
- **Three screenshots**, captioned with the words *08:00*: the budget panel
  showing the total service outlay after the cut; the transit line panel showing
  the ten-minute headway; a street-level view of Ockley Green at 60%
  maintenance, taken today, for comparison next Monday.

All of it uploaded by **21:00 the same day**. The Assessment 2 brief is due at
12:00 next Monday and it has to be funded from this sheet, so leaving the
budget half-recorded costs you the weekend.

### `spec:` lines

```yaml
spec:
  - "You arrive with your full monthly service outlay itemised on one page and totalled, written before the session."
  - "You arrive with a sealed one-line prediction naming the budget line you expect to cut and the metric you expect it to cost."
  - "You apply a closure worth 22% of your district's service outlay without reducing the Wensley Bank pumping station line."
  - "You state your unfunded lines aloud in the set form and enter them on both the corridor budget sheet and your own signed unfunded list."
  - "You leave with Week 8's readings taken at in-game 08:00 four simulated weeks after the closure, including the ten-minute headway and Ockley Green at 60%."
```

### Page body plan

The page already renders the title, the date, the spec list, the teaching team
and the related content, so the body must not repeat them. Target **450–700
words**.

1. **`## The cut`** — roughly 100 words. Twenty-two per cent off the monthly
   service outlay, in force from this session, not negotiable and not scaled.
   Then the distinction the whole session rests on, stated once and plainly:
   the amount is imposed, the composition is yours, and the composition is the
   design problem.
2. **`## Before you come`** — roughly 110 words. Week 7 save unrepaired, the
   unfunded line on paper, the itemised outlay totalled, the fiscal readout and
   land value info-view open, the sealed prediction.
3. **`## Line zero`** — roughly 100 words. The cheapest cut in the district is
   the water, it is costed properly at 13:10, and it is refused. Everything
   after is chosen inside that fence.
4. **`## In the room`** — roughly 140 words. Paper charrette in pairs, then the
   machines, then the prediction opened at the desk crit. Then the
   on-the-record round: the fixed sentence quoted in full as a block quote, the
   two documents, and the rule that the room does not respond.
5. **`## What you take away`** — roughly 90 words. Save, readings, signed
   unfunded list, the corridor budget sheet column, the opened prediction,
   three screenshots, 21:00, and the line that next Monday's plan is funded from
   this column.

The block-quoted sentence in section 4 is the page's centre of gravity and
should be the only quoted material on it.

### Frontmatter deltas

None — the frontmatter is correct as it stands.
`src/content/sessions/08-budget-under-cutback.md` already carries
`related: [lectures/week-08]`, and `title`, `description`, `week`, `date` and
`teachers` are settled. The existing `description` already names the
on-the-record device, so the body should not restate it in its opening line.
The only change to the file is replacing the `STARTER_CONTENT` body, removing
the comment, and adding the `spec:` array above.

### Hand-off

Week 9 receives a district at +₡3,400 a month with a ten-minute headway, a park
maintained at 60%, happiness at 58% and land value at 31 — the worst livability
reading of the semester — plus a shared corridor budget sheet that says, in
every student's own words, what the district stopped paying for. That sheet is
the constraint on next Monday's pin-up: every public space proposed in
Assessment 2 has to carry a monthly figure funded out of the column with that
student's name on it, and an unfunded plaza loses marks under the brief's
fiscal 30 rather than under its livability 45. The +₡3,400 is also the only
reason there is any money to spend next week, which is the uncomfortable
continuity between the two sessions and should be said out loud in the Week 9
wash-up rather than left implied.

Toward **Assessment 2 — Public Realm and Infrastructure Plan (25%, due Week 9)**:
this session produces the brief's budget. Not an aspirational one — a funded
one, with a named source for every ₡ and a signed list of what was given up to
free it. The **fiscal 30** criterion is marked almost entirely on material
generated this afternoon, and the unfunded list is the appendix that makes the
rest of the memo checkable.

### New canon introduced

- **the corridor budget sheet** — the studio's shared, dated record of every
  student's budget closure and unfunded lines, one column per student, opened
  in Week 8 and carried to Week 12. Tobias Wren keeps it; the jury has it at
  every assessed pin-up.
- **the unfunded list** — the student's own signed single-page standing
  document naming, week by week from Week 8 onward, what they chose not to
  fund and which metric is paying for it. Never edited backwards; an appendix to
  every memo from Assessment 2 on.

### Open questions for the writer

- The Week 8 lecture plan frames the week as closing an imposed **₡9,000 a
  month deficit** by choosing among five costed options, several of them tax
  moves. The studio session's instrument is a **22% service-budget cut** that is
  imposed rather than chosen. These are not the same exercise, and the ₡9,000
  figure does not appear anywhere in the metric spine. The session plan uses the
  22% framing throughout and does not quote ₡9,000; either the lecture plan is
  reconciled to it or the session page must be written so a student reading both
  is not left holding two different numbers.
- Whether the 22% is 22% of the *total* service outlay or 22% off *each* service
  line. The plan assumes the former, which makes composition the design problem;
  the latter would be a simpler session and a much duller one, and would make
  line zero impossible to hold.
- Whether the on-the-record round is recorded — voice, video, or written only.
  The plan specifies written on two documents and spoken to the room. If it were
  recorded, the conduct-at-crit and generative-tools sections of the policies
  page would both need to be checked before the page says so.
- How the corridor budget sheet is physically kept: a wall-mounted sheet in
  Studio 2.14, a shared spreadsheet, or both. It has to be legible to a visiting
  critic who arrives twenty minutes before the Week 9 jury, which argues for the
  wall.

---

## Week 9 — The Public Realm Build

**Date:** 2027-05-03 · **Studio:** 13:00–16:00, Studio 2.14 ·
**Tutor(s):** Tobias Wren, Sunniva Marek (visiting critic) ·
**Paired lecture:** Parks, Plazas and the Public Realm ·
**Assessment:** **Assessment 2 — Public Realm and Infrastructure Plan, 25%**,
artefact due 12:00; hung on the wall from 13:00; jury sits 14:00

### What the session is for, in one sentence

You will hang the plan you have been building since the break on a wall, stand
next to it while two people who are not obliged to be kind to it work out
whether your district got better because you designed something or because you
spent money, and answer what each point of happiness cost you per month.

### What students arrive with

- **The artefact, uploaded by 12:00.** Screenshots and defence memo, per the
  Assessment 2 brief. This is the policies page's artefact clock and this
  session does not move it: work uploaded after 12:00 loses five percentage
  points per calendar day, weekends included, and is not marked at all past five
  days. If you can see that coming, what you want is an extension, asked for in
  writing before the deadline, not a penalty.
- **The printed set, in your hand at 13:00.** The wall is hung from your own
  prints and the studio does not print for you. Screenshots at A3, captioned,
  every caption carrying the in-game day and the words **08:00** except the
  street-level night views, which carry **19:00** and the weather state. Memo
  printed and pinned, not on a screen — the visiting critic reads the wall, not
  your laptop.
- **The save**, `<student ID>-w09`, taken before you left home and matching what
  is on the wall. The jury may ask for a readout to be opened live at the tutor
  machine and the save has to be the one the screenshots came off.
- **Your unfunded list**, signed, with the Week 8 lines on it, pinned to the
  wall as the memo's last sheet. It is not optional and it is not an appendix
  the jury skips. If your plan spends money, this is the document the jury reads
  next.
- **Your column of the corridor budget sheet**, or a printed copy of it. Every
  public space on your wall carries a monthly figure, and every one of those
  figures is funded from the closure you set on 26 April. An unfunded plaza
  costs marks under the brief's **fiscal 30**, not under its livability 45,
  which is not where students expect to lose them.
- **Week 8's readings** for the *against last week* column: balance +₡3,400/mo,
  peak 11.8 min, transit share 11%, walk share 24%, happiness 58%, land value
  index 31, Ockley Green maintained at 60%.
- **One 19:00 observation, written before today.** Stand in one existing space
  in your own district at 19:00 in fine weather, count the people in it, and
  write the count down at the time. Gehl's separation of necessary from optional
  activity is the reason: the 08:00 count would be the same across a car park.
  A count with no time of day and no weather state attached to it is not
  evidence and the jury will not treat it as evidence.
- Pins, and enough of them. Two hundred students' worth of pins have never once
  been in Studio 2.14 at the same time.

### Run sheet

| Time | Segment | What happens | Who runs it |
|---|---|---|---|
| 13:00–13:25 | Hanging | The wall opens. Students hang their own sheets in roster order along the long wall, memo at the right-hand end of each set, unfunded list last. **The hang closes at 13:25** and nothing goes up after it. | Students |
| 13:25–13:45 | Silent read | The whole cohort reads the whole wall, end to end, in silence. No talking, no explaining, no standing next to your own sheets. The jurors read at the same time and take notes. | Tobias Wren |
| 13:45–14:00 | The jury is framed | Tobias states the afternoon's question in one sentence and puts the cost-per-happiness-point comparison on the board before any student speaks. Sunniva Marek is introduced and states what they have and have not seen. | Tobias Wren, Sunniva Marek |
| 14:00–14:50 | Jury round one — the walk | The jury walks the wall in order. **Six minutes a plan**, at its own sheets: two minutes for the student's single claim, four for the jury. Timed, and the timer is visible. | Tobias Wren, Sunniva Marek |
| 14:50–15:00 | Break; the jury confers | The room breaks. The jurors confer at the wall and pull **three plans** for extended defence, chosen for what they disagree about rather than for quality. | Tobias Wren, Sunniva Marek |
| 15:00–15:30 | Jury round two — the pulled plans | Ten minutes each, in front of the whole cohort, on the three pulled plans. This is where the cost-per-point comparison is worked all the way through on real numbers. | Tobias Wren, Sunniva Marek |
| 15:30–15:45 | Marek sums up | The visiting critic speaks to the wall as a whole for fifteen minutes, uninterrupted, and does not take questions. | Sunniva Marek |
| 15:45–15:55 | Wash-up | Readings entered, cost-per-point column added to the corridor budget sheet, the wall comes down and goes home with its owner. | Tobias Wren |
| 15:55–16:00 | Hand-off | One instruction for next Monday, stated twice: keep the save exactly as submitted. | Tobias Wren |

**The silent read is twenty minutes and it is enforced.** It is the only time
in the semester the cohort reads each other's work without its author standing
next to it explaining what it was supposed to mean, which is precisely the
condition the jury will judge it under and precisely the condition a plan meets
in practice. Students find it uncomfortable and try to fill it. Tobias's job
during it is to say nothing and to stop other people saying things.

**Round one is a walk, not a series of presentations.** The jury moves; the
cohort follows; the student stands at their own sheets when the jury reaches
them and sits down when it moves on. Six minutes is short on purpose and the
timer is visible on purpose. Two minutes to state the plan's single claim — one
claim, not a tour of the wall — and four minutes of questions. A student who
spends the two minutes describing what is in the screenshots has spent them,
and the jury will still have four.

**Round two is the teaching.** Three plans, ten minutes each, in front of
everybody, chosen because the two jurors disagreed about them at the break. The
cohort is not an audience here: Tobias will put a question from the room to the
student under crit and expect it answered. This is where the plaza and the
street trees get compared out loud with the monthly figures on the board, and
where the phrase *cost per happiness point* stops being a slogan and becomes a
division.

### What happens to work that is not on the wall at 13:00

Three different failures, three different consequences, and they are not the
same failure.

**Uploaded on time, not printed.** The artefact was in by 12:00, so the
policies page's lateness rule does not apply and no marks are lost to it. But
the wall is the evidence and the jury reads the wall. A plan that arrives
without prints is defended at the end of round one from the tutor machine, out
of order, with the jury reading it cold on a screen for the first time. It
costs you nothing on paper and roughly ten minutes of a critic's attention in
practice, which is most of what the twenty-five per cent is.

**Not uploaded by 12:00.** The policies page governs: five percentage points
per calendar day, weekends included, nothing marked past five days. Ask for an
extension in writing before the deadline and it costs you nothing; ask
afterwards and you are arguing about what you could have foreseen. **You still
present at 14:00.** The defence cannot be submitted late because there is
nothing to submit it to, and the jury is booked for one afternoon with a
visiting critic in the building for that afternoon and no other.

**Not in the room at all.** Your plan is marked from the memo alone, which means
the memo has to answer, unprompted, every question the room would have asked
you. Most memos do not. Turn up.

Arriving after 13:25 with prints in your hand is the one case with no rule
attached to it, because the hang has closed and there is nowhere to put them.
Hang at 13:00.

### The exercise

Today is a jury, not a build session. The work described below was done in the
week between the cutback and the pin-up, and the session page has to say so
plainly, because the most common way to fail this week is to arrive expecting
three hours in which to make something.

**What the week's work was.** You spent a district running at +₡3,400 a month —
the strongest fiscal reading of the semester and one nobody in the room asked
for — on the cheapest livability available. Two interventions carry the
readings and both are on the wall.

**The Ockley Green plaza.** A shaped, enclosed public square in the park the
district stopped maintaining eight days ago, built at the frontage rather than
behind it, level with the footpath and open along it. It costs **₡2,200 a month**
and it returned **four points of happiness**. It is the thing on your wall that
photographs well, and Alexander's Pattern 61 is the number to check it against
before you claim it works as a room: much past about eighteen metres across and
it stops being one. Ockley Green's park maintenance slider is the other half of
this line and the jury will ask where it is set today.

**The Farrant Row street trees.** Trees along the frontage at the far end of
the district — the end that lost water first in Week 7, the end that has been on
a boil notice since, the end coverage retreated from last Monday. They cost
**₡340 a month** and they returned **three points of happiness**. Nobody
photographs street trees.

**The footpath connections, and the mobility numbers you did not pay for.**
Completing the footpath links across the district is a mobility spend recorded
against a livability benefit, and it is where this week's best argument lives.
Walk share went from 24% to **29%**. The trips that moved onto footpaths came
off the Kerrow corridor, peak travel time fell from 11.8 minutes to **11.1**,
buses on the Denton Hill–Barrow Fields spine ran faster in the same traffic, and
transit share recovered from 11% to **13%** — **with the headway still at ten
minutes.** You did not restore the headway. You could not afford to. The transit
recovery this week was bought by the public realm work, not paid for, and a memo
that claims it as a transit decision is claiming something the budget panel
contradicts.

**What you did not do, and what the jury knows you did not do.** The Farrant Row
treatment plant is still over capacity. The ₡5,100 a month it needs is still on
your unfunded list, in your handwriting, dated 26 April. Ombersley Flats still
reads 11 on the land value overlay. The boil notice is still in force. You found
₡2,540 a month this week. The visiting critic will have read both documents
before 14:00 and will ask you about the gap between them, and the honest answers
to that question are all defensible. The dishonest one — that the plan is about
the public realm and the infrastructure is a separate matter — is not, and it is
the answer the brief is designed to catch: the two halves are on one brief
because they come out of one monthly budget.

**The 19:00 evidence.** The readout can find a failed space and cannot confirm a
successful one; it cannot tell four hundred people crossing a plaza from four
hundred people sitting in it. So the overlay is the screening tool and the
street-level view at 19:00 in fine weather is the evidence, in that order, and
both are on the wall. If you walked your own plaza at 19:00 and nobody was in
it, that is the finding, and it belongs in the memo above your best screenshot.

### Readings taken this week

All readings at in-game **08:00**, against Week 8. The 19:00 pedestrian counts
are evidence for the memo and are not metric readings; they are recorded
separately and never entered in this table.

| Reading | Where it is read | This week's value | Against last week |
|---|---|---|---|
| Population / households | district information panel | 20,900 / 8,050 | 18,400 / 7,100 |
| Monthly balance | budget panel, per-district income and outlay | **+₡1,200/mo** | +₡3,400/mo — down ₡2,200 |
| Ockley Green plaza, monthly upkeep | budget panel, parks and recreation line | **₡2,200/mo** | new line this week |
| Farrant Row street trees, monthly upkeep | budget panel, parks and recreation line | **₡340/mo** | new line this week |
| Peak travel time | traffic info-view, travel-time readout | **11.1 min** | 11.8 min — improved by 0.7 |
| Transit share | transit info-view | **13%** | 11% — up 2 points |
| Transit headway, Denton Hill–Barrow Fields spine | transit line panel | 10 min, unchanged | 10 min |
| Walk share | pedestrian readout | **29%** | 24% — up 5 points |
| Happiness, district mean | happiness readout | **67%** | 58% — up 9 points |
| Land value index, district mean | land value info-view | **36** | 31 — up 5 points |
| Land value index, Ombersley Flats | land value info-view, sub-area selection | 11 — unchanged | 11 |
| Farrant Row treatment plant upgrade | corridor budget sheet, unfunded | ₡5,100/mo, still unfunded | unfunded in Weeks 7 and 8 |

**A plan claiming all three metrics improved has not been read carefully.**
This week the metric that moved the wrong way is **fiscal performance**: from
+₡3,400 a month to +₡1,200, a fall of ₡2,200. Livability improved nine points of
happiness and five of land value; mobility performance improved on every reading
the studio takes. Only one number went backwards and it is the one that was
briefly, uncomfortably, the district's best.

That is the shape of the week and it is the shape of the crit. **Livability was
bought back with fiscal performance.** Whether it was *bought* or *designed* is
what the jury is for, and the two are distinguishable: the plaza cost ₡550 a
month per happiness point and the street trees cost roughly ₡113. Both bought
points. Only one of them is an argument.

Note also the two points nobody can account for. The plaza returned four and the
trees returned three; happiness rose nine. Two points are unattributed. The
strongest memos on the wall name them and say where they think they came from —
restored park maintenance, the footpath links, the water having been back for
three weeks — and the weakest ones quietly claim all nine for the plaza.

### The tradeoff the session forces

**Livability against fiscal performance**, and unusually for this studio the
tradeoff was made last week rather than this afternoon. The money spent today
exists only because the district was cut by 22% on 26 April. You are spending a
surplus that was created by stretching a bus headway to ten minutes and
maintaining a park at 60%, and then spending part of it on a plaza in that park.
Say that sequence out loud once, in the memo, before the jury says it for you.
It is not a contradiction — a district that cuts and then reinvests is doing an
ordinary and defensible thing — but a memo that does not notice the sequence has
not read its own budget.

The mechanism is cost per unit, and it is the only mechanism this week. Public
realm is the cheapest livability on the district's budget, which means it is the
one place where a small monthly figure moves a metric visibly, which means it is
the one place where the ratio between money and effect is legible enough to be
argued about. ₡2,200 a month bought four points at ₡550 each. ₡340 a month
bought three points at about ₡113 each. The street trees are close to five times
more efficient per point and they are at the end of the district that has been
losing everything since Week 7. The plaza is in the middle of the district, in a
park, next to the amenity core, and it is what the wall is full of.

**It cannot be deferred because the brief is due at midday and the wall closes
at 13:25.** But there is a harder reason, and it is the one round two exists to
put in front of three students. The ₡2,540 a month spent this week is not
abstract money; it is 50% of the ₡5,100 a month that has been sitting unfunded
on every student's own signed list since the treatment plant went over capacity
three weeks ago. You did not have to spend it on the plant. You did have to
know, when you spent it, that you were choosing a plaza over a plant, and to be
able to say why in one sentence. The unfunded list is pinned to the wall for
exactly this reason: it makes the choice checkable by somebody who was not in
the room when it was made.

### At the crit

Two jurors, two different questions, and the difference is the point of having
a visiting critic at all. Tobias Wren was in the room on 26 April and watched
every one of these budgets get set. Sunniva Marek has never seen this district
before 12:00 today.

**Tobias Wren**, on the walk and in round two:

- Your plaza bought four happiness points at ₡550 a month each. Your street
  trees bought three at about ₡113. Tell me what the extra ₡437 a point bought,
  and do not say *quality*.
- Happiness went up nine points. Four are the plaza and three are the trees.
  Where are the other two, and which budget line pays for them?
- Which of these spaces would you cut first if I took ₡1,000 a month off you
  right now, and what is the cost per point of the one you kept?
- Walk share went from 24 to 29 and peak travel time improved 0.7 minutes. What
  did you spend on the footpaths, and what is that per point of walk share?
- Transit share recovered two points with the headway still at ten minutes. What
  bought that, and how much of it can you put a monthly figure against?
- Point at the line on your corridor budget sheet column that pays for the
  ₡2,200. Now read me the line above it, which is what you cut to have it.
- You are at +₡1,200 a month. At this rate of spend, how many weeks of public
  realm do you have left, and what happens in Week 12 when you need a number to
  defend?

**Sunniva Marek**, once each, in round two and in the summing-up:

- Three weeks ago this studio wrote down, in each of your own handwriting, that
  the treatment plant needed ₡5,100 a month and you were not funding it. This
  week you found ₡2,540 a month. I have read your memo twice and I cannot find
  the sentence where you changed your mind. Show me where it is, or tell me
  there isn't one.
- I have two documents from you: a plan that says this district got better, and
  a signed list of what it stopped paying for. Which one should I believe, and
  why is only one of them in colour?
- Nobody on this wall has proposed doing nothing to Ombersley Flats and saying
  so. Why is that not on anybody's plan, given that it is what every one of you
  did?

**The failure mode the jury is watching for** is a plan whose argument is in the
student's head and not in the work. Tobias will find it by asking for a figure
the memo does not contain; Marek will find it faster, because they were not at
the desk crit where it made sense to everyone. The specific version of it this
week is the beautiful plaza with no cost-per-point anywhere near it — a wall of
19:00 screenshots, a memo about the third place, and no answer to *how much*.
The second version is the memo in two halves, public realm and then
infrastructure, with nothing joining them: that memo has not noticed that both
halves come out of one monthly budget, which is the single thing the brief is
built to test.

### What leaves the room

- **The mark**, in due course, against **livability 45 / fiscal 30 / mobility 25**.
  Written feedback follows; nothing about the mark is given at the wall.
- **The save**, `<student ID>-w09`, **exactly as submitted**. This is the one
  instruction Tobias states twice at 15:55. Week 10 takes this district under
  hazard load and it assumes the jury's version, not a version repaired over the
  weekend. Do not fix the treatment plant tonight because a critic mentioned it.
- **Your wall**, taken down at 15:45 and carried home. It goes back up in Week 12
  next to the capstone, and a set of prints that has been folded into a bag is
  visibly a set of prints that has been folded into a bag.
- **The readings sheet** for Week 9, all twelve rows at in-game 08:00, plus the
  19:00 pedestrian counts recorded separately with their weather state.
- **The cost-per-point column**, added to your corridor budget sheet column
  during the wash-up: every public space you funded, its monthly figure, the
  happiness points attributed to it, and the division. It is two minutes of
  arithmetic and it is the number Week 11 reads the whole semester against.
- **Your unfunded list, updated before you leave**, with this week's line on it.
  For most students that line is the same one it has been since 26 April, now
  three weeks old, and writing it a third time is the intended experience.
- **One sentence, written at the wash-up**, naming what you would spend the next
  ₡500 a month on and what it would return per point. Week 11 opens with it.

### `spec:` lines

```yaml
spec:
  - "Your screenshots and defence memo are uploaded by 12:00 and your printed set is on the wall before the hang closes at 13:25."
  - "Every public space on your wall carries a monthly upkeep figure funded from your column of the corridor budget sheet."
  - "Your signed unfunded list is pinned as the last sheet of your memo, with the Week 8 lines still on it."
  - "You can state the cost per happiness point of each space you built, as a division you did rather than a claim you make."
  - "You bring one pedestrian count taken at 19:00 in fine weather, written down at the time, with the time and weather state recorded next to it."
```

### Page body plan

The page already renders the title, the date, the spec list, the teaching team
and the related content — including the link to the Assessment 2 brief, which
reaches this page through its own `related:` edge — so the body must not repeat
any of them. Target **450–700 words**.

1. **`## The deadline and the wall`** — roughly 110 words. Two clocks: the
   artefact at 12:00, the wall from 13:00, the hang closing at 13:25, the jury
   sitting at 14:00. What happens in each of the three ways work fails to be on
   the wall, with the lateness rule deferred to the policies page rather than
   restated as a new one.
2. **`## What is on the wall`** — roughly 110 words. Printed screenshots
   captioned with in-game day and 08:00, the 19:00 street-level views with their
   weather state, the memo pinned not screened, the unfunded list as the last
   sheet, and the monthly figure against every space.
3. **`## How the jury runs`** — roughly 150 words. Silent read, the walk at six
   minutes a plan with a visible timer, the three pulled plans at ten minutes,
   Marek's fifteen minutes. One line on what the visiting critic has and has not
   seen, since that is the whole reason they are in the room.
4. **`## The question`** — roughly 130 words. Cost per happiness point, worked
   on the two named spaces: ₡2,200 a month for four points, ₡340 a month for
   three. Then the harder half — the ₡5,100 that is still unfunded — stated as a
   question the jury will ask rather than as an accusation.
5. **`## What you take away`** — roughly 80 words. The save exactly as
   submitted, stated twice; the wall carried home for Week 12; the readings; the
   cost-per-point column; the updated unfunded list.

Section 4 carries the page. Keep the arithmetic visible — the divisions written
out, not just the results — because the whole claim of the week is that this is
a calculation a student can do and mostly does not.

### Frontmatter deltas

None — the frontmatter is correct as it stands.
`src/content/sessions/09-public-realm-build.md` already carries
`related: [lectures/week-09]` and both teachers, `tobias-wren` and
`sunniva-marek`.

**On the assessment edge, reported precisely:** the session's own frontmatter
does **not** list the assessment. The edge is declared in the other direction,
by `src/content/assessments/02-public-realm-and-infrastructure-plan.md`, which
carries `related: [sessions/09-public-realm-build]`. This is sufficient and
nothing needs adding: `getRelatedEntries` in
`astro-course-university/content-helpers.js` resolves related entries
undirected — declared, embedded *or incoming* — so the `RelatedContent`
component on the session page already renders a link to the Public Realm and
Infrastructure Plan. Adding a reciprocal `related:` entry to the session would
be redundant, and the body must not hand-write a link to the brief.

### Hand-off

Week 10 receives the district exactly as the jury saw it: +₡1,200 a month, a
ten-minute headway, happiness at 67%, land value at 36 — and Ombersley Flats
still at 11, the Farrant Row treatment plant still over capacity, and ₡5,100 a
month still unfunded on every signed list in the cohort. Nothing about this
afternoon repaired the ground damaged in Week 7, and the Hazard Scenario is
written on the assumption that nobody did. That is why the instruction to keep
the save exactly as submitted is stated twice: a student who spends the weekend
upgrading the plant arrives at a flood the session was not designed against and
learns less from it than the student who did nothing. Week 11 then reads the
whole land-value curve back from Week 1, and the cost-per-point column added
today is the row it reads this week by.

This session **is** Assessment 2 — Public Realm and Infrastructure Plan (25%),
so it does not feed a brief, it delivers one. What it hands forward instead is
the mark's evidence base and one habit: every public space in the Week 12
capstone is now expected to arrive with a monthly figure and a cost per unit of
the thing it bought, because this is the afternoon on which the cohort found out
that the question gets asked and that *it felt like the right scale* is not an
answer to it.

### New canon introduced

**None.** Week 9 runs entirely on existing canon — Ockley Green and the Ockley
Green plaza, Farrant Row and the Farrant Row street trees, the Farrant Row
treatment plant, Ombersley Flats, the Kerrow corridor, and the Denton Hill–Barrow
Fields spine — and on the two artefacts coined in Week 8.

Carried forward rather than coined here: **the corridor budget sheet** and **the
unfunded list** (both Week 8), and **the reverse-salient card** (Week 7). The
**cost-per-point column** is an added column on the corridor budget sheet, not a
separate artefact, and should be written as such.

### Open questions for the writer

- **UNRESOLVED, AND IT BLOCKS THE PAGE: the run sheet processes eight plans
  and the cohort is sixteen.** Week 4 fixes the cohort at sixteen and says so
  three ways — "two rounds of eight, six minutes each", a recess between them,
  and a visiting critic who "addresses the wall as one wall rather than as
  sixteen plans". This section was drafted after an interrupted run and lost
  that fact: "Jury round one — the walk", 14:00–14:50 at six minutes a plan,
  fits eight. Sixteen needs a hundred minutes at that clock, which the block
  does not have alongside the silent read, the conference, the three pulled
  plans and Marek's summing-up. Resolve it before the page is written: adopt
  Week 4's two-rounds-of-eight shape either side of the 14:50 break, or shorten
  the walk clock and say what that costs. Do not write the page against a
  cohort of eight.
- The Assessment 2 brief at
  `src/content/assessments/02-public-realm-and-infrastructure-plan.md` is still
  `STARTER_CONTENT`. This session names deliverables — captioned screenshots, a
  printed memo, a monthly figure per space, the unfunded list as an appendix —
  which the brief has not yet declared. Write the brief first, or write this
  page so it points at the brief for the deliverable list rather than
  out-specifying it.
- **The policies page says the defence happens in front of "the Course Convenor,
  your cohort, and in assessed weeks a Visiting Critic".** Marisol Quaye is the
  convenor and is not in the room in Week 9 under the calendar's rule that a
  tutor not listed for a week is not there. This plan has Tobias Wren chair.
  Either the policies page's sentence is loosened to "the studio tutor of
  record", or Week 9's teaching team changes — and it cannot change, because it
  is asserted by tests.
- Whether the 19:00 fine-weather pedestrian count is a *requirement* of the
  Assessment 2 brief or a studio protocol the jury merely expects. This plan
  puts it in the `spec:` as something the student brings, which is the stronger
  reading. If the brief ends up silent on it, the spec line should soften to
  match the brief rather than the brief being read against the session page.

---
## Week 10 — Hazard Scenario

**Date:** 2027-05-10 · **Studio:** 13:00–16:00, Studio 2.14 ·
**Tutor(s):** Nadia Ilkhom · **Paired lecture:** Resilience: Hazards, Pollution and Climate · **Assessment:** none

### What the session is for, in one sentence

Run the flood your district was never designed for, and leave the room able to
say — with a reading against each — which of this afternoon's numbers is a
fault you built and which is a number that fixed itself.

### What students arrive with

- The save `<student ID>-w09`, carried forward from the public realm build, and
  the off-machine copy of it. Nothing is rebuilt this week; the district that
  turns up is the district that gets flooded.
- Last week's readings, in the studio's standing form: +₡1,200/mo, peak
  11.1 min, transit 13%, walk share 29%, happiness 67%, land value 36 district
  mean. These are the trend the event gets measured against, and they are the
  last trend readings anyone takes before Week 11.
- The Week 9 build itself — the Ockley Green plaza and the Farrant Row street
  trees — still in place and still costing ₡2,200/mo and ₡340/mo respectively.
  Neither is touched today; both are inside the area the plume crosses.
- The five hazard info views already checked over their own district, in the
  order the lecture gave them: water, wind, ground pollution, noise, fire
  hazard. A student who opens the water overlay over Ombersley Flats for the
  first time at 13:20 spends the session doing site analysis instead of running
  the event.
- The Week 3 zoning drawing, printed at A3. Not the current zoning overlay —
  the drawing made in Week 3, when the Flats were zoned. The session needs the
  decision, not its consequence.
- The Week 7 restoration record: what was repaired at Wensley Bank after the
  backflow, what was left at reduced capacity, and the ₡6,800/mo the upgrade
  has been costing since. Most records have a gap in them, and the gap is the
  point.
- The hazard handout, issued at the end of the lecture. It carries the water
  source rate, the duration, and the day-by-day reading schedule. It is the
  same handout for everyone; the district it lands on is not.

### Run sheet

| Time | Segment | What happens | Who runs it |
| --- | --- | --- | --- |
| 13:00–13:10 | Set-up and save discipline | Branch the pre-event save, name it, verify the off-machine copy | Nadia Ilkhom |
| 13:10–13:35 | Overlay walk-through | The five hazard layers stacked over Ombersley Flats; the flood envelope drawn and the dwellings inside it counted | Nadia Ilkhom |
| 13:35–14:15 | The event, days 0–6 | The load case applied; readings taken at in-game 08:00 on each of days 0 to 6 | students, at the machine |
| 14:15–14:25 | Clinic round | Nadia at the desks for anyone whose event has not started, or has not stopped | Nadia Ilkhom |
| 14:25–15:00 | Run-on to day 19 | The district runs to recovery with no intervention, readings continuing at 08:00 | students, at the machine |
| 15:00–15:30 | Fault charrette | The two-column board: what broke, what looked alarming. Every entry carries a reading | Nadia Ilkhom, whole room |
| 15:30–15:50 | Desk crit round | Nadia at each desk against the two columns and the exposure statement | Nadia Ilkhom |
| 15:50–16:00 | Wash-up and the quoting rule | The rule stated, written down, and applied to one figure from each student's sheet | Nadia Ilkhom |

**The set-up segment is not administrative.** Everyone takes a branch save named
`<student ID>-w10-pre` before anything is applied, and it goes off-machine
before the load case does. The event is destructive and it is meant to be; the
branch exists so a student who mis-applies the handout can re-run the afternoon
rather than argue about it. The save that carries into Week 11 is
`<student ID>-w10`, taken at day 19 — not the pre-event branch, and not day 3.

**The run-on is the segment students want to cut, and it is the one the session
is built on.** Nothing is repaired between day 6 and day 19. No emergency
budget, no re-zoning, no bridge rebuild ahead of the simulation's own repair,
no reaching for the terraforming tool. The instruction is to sit and read. What
comes back on its own is not a design achievement and does not belong in a
plan; what does not come back is the finding. A student who intervenes has
bought a district that recovered and lost the only measurement that would have
told them which half was which.

**The fault charrette runs on the board at the front, in two columns, and no
entry goes up without a reading beside it.** "Ombersley flooded" is not an
entry. "Both Tuckwell crossings out for four in-game days; peak travel time
13.6 min against a trend of 11.1" is an entry. The left column — what broke —
should be short and specific and should mostly be Week 3 and Week 7 coming back
round. The right column — what looked alarming — should be longer than students
expect, and every item in it should have day 19 written next to it.

### The exercise

The load case is applied to the running district, not to a scenario copy. The
handout gives the water source setting and the six-day duration; everybody
applies the same one, at the same in-game hour, so that twenty districts are
answering the same question. This is not a mod and it is not a simulation
alteration in the sense the studio policies rule out: it is a documented
setting, applied identically across the cohort, on top of a district each
student built themselves. Declare it in the memo alongside everything else.

Before it is applied, the flood envelope gets drawn. Open the water info view
over Tuckwell Bend, run the water simulation up to the handout's level with the
district paused, and mark the extent on the A3 print. Then switch to the
residential overlay and count what is inside the line. In the reference district
it is **1,340 dwellings**, and every one of them was zoned in Week 3 by the
person now counting them. The count is the session's first reading and the only
one taken before the event starts.

The event itself is six in-game days, read at 08:00 each morning. Four systems
fail, and they fail in an order worth watching rather than a heap:

**The crossings go first.** Both Ombersley river crossings at Tuckwell Bend are
out for **four in-game days**. Every trip that used them re-routes onto the
Kerrow corridor, which was already the district's constraint in Week 6 at 118%
of capacity, and the peak travel time reads **13.6 min** during the event
against a trend of 11.1. Watch the roads info view rather than the traffic
one — the failure is topological, not volumetric. Two crossings is one crossing
plus a spare, and the district has been running on a spare since Week 3.

**Treatment goes second.** The plant is over capacity within a day and
**offline for six days**, which is the same duration it was down in Week 7 and
for a related reason: the Ombersley outflow still sits upstream of the intake,
and the Week 7 works raised capacity without changing the order of the two
buildings on the watercourse. Open the water and sewage panel and the water
pollution info view side by side. Neither building reports a fault at any point
in the six days. The fault is only visible in the overlay and in the health
figure, which is the general lesson: read overlays, not tooltips.

**The plume goes third.** The Pellow cells at the head of the Flats are
inundated, and the ground pollution accumulated under them since Week 3 is
mobilised. On the prevailing WNW wind, the air pollution overlay carries it
east-south-east across the residential blocks below the industrial ground —
which is to say across the 1,340 dwellings, on top of the water they are
already standing in. Take the air pollution reading at 08:00 on day 3 with the
wind arrow visible in the frame; the screenshot is worth more than the number.
The ground pollution stain does not clear at day 19, and does not clear in Week
11 or Week 12 either. Note that now, because it is the one thing in this
afternoon that will still be on the overlay at the jury.

**Happiness goes fourth, and it goes everywhere.** The district-wide happiness
figure troughs at **41%** on day 3 — not in Ombersley, district-wide, including
blocks that never got wet. Then it comes back. By day 19 the district reads at
its week-normal level with nothing spent on it. The month's balance is
**−₡14,200**, which is emergency response plus the rates that did not arrive
from 1,340 flooded dwellings, and it is a month, not a rate.

Then the two columns. **What broke** is Ombersley: a zoning decision taken in
Week 3, on ground that was downwind, downstream and cheap, and a network that
was restored in Week 7 to the capacity it had rather than the capacity it
needed. Both were legible three weeks and seven weeks before this afternoon, in
readouts students already had open. **What looked alarming** is the
district-wide happiness dip, the notification cluster, the emergency spend, and
the peak travel figure — every one of which resolved without a design move.
Sorting the afternoon into those two columns is the whole exercise. The
district does not need fixing where it recovered on its own; it needs fixing
where it did not, and the two are not the same set of red numbers.

The Ombersley decision itself is taken at the desk before anyone leaves, costed
from the budget panel, and written into the exposure statement. Withdraw the
Flats — dezone, hold the ground as floodway and park, lose the rate base and
keep the trunk upkeep. Or defend them — raise the ground with the terraforming
tools, oversize the pumping, keep the zoning, and carry the exposure forward at
lower frequency and higher consequence. Both are defensible. An uncosted one is
not, and neither is one that stays undecided until the night before the jury.

### Readings taken this week

Readings are taken at in-game 08:00, as every week. This week they are taken at
08:00 **on each day of the event**, which is a different kind of reading and is
recorded as one.

| Reading | Where it is read | This week's value | Against last week |
| --- | --- | --- | --- |
| Dwellings inside the flood envelope | Water info view against the residential overlay, district paused, before the event | **1,340** | First reading — the envelope has never been drawn before, though the dwellings have been there since Week 3 |
| Monthly balance | Budget panel, per-district income and outlay | **−₡14,200 for the month** | Week 9 trend was +₡1,200/mo. Not a comparison: one is a rate, the other is a month with an emergency in it |
| Peak travel time | Traffic info view, 08:00, days 0–6 | **13.6 min during the event** | Week 9 trend was 11.1 min peak. An event reading; it is not the district's peak |
| River crossings in service | Roads info view, Tuckwell Bend | **Two Ombersley bridges out, 4 in-game days** | No crossing has been out in any previous week; there is nothing to compare it to |
| District happiness | Happiness info view, 08:00 day 3 | **Troughs at 41%** | Week 9 trend was 67%. A trough is a moment, and this one has a date on it |
| Treatment capacity | Water and sewage panel | **Offline 6 days** | Week 7 lost six in-game days to contaminated supply on the same watercourse ordering |
| Recovery | Happiness and service coverage, 08:00 day 19 | **Back to week-normal by day 19, without intervention** | The only reading this week that is about the district rather than about the event |
| Transit share | Public transport info view | **Not taken** | No trend reading is taken in an event week. The next transit reading is Week 11 |
| Land value | Land value info view | **Not taken** | Same. The next land value reading is Week 11, and Week 11 is where the curve gets read |

The metric that moved the wrong way this week is all three of them, and that is
the finding rather than the result. Fiscal performance, mobility performance
and livability all read down at once, which has not happened in any week since
Week 1 and does not happen in a trend. A week where every metric moves the same
direction is the signature of an event; a week where one moves against the
others is the signature of a design decision. That is why the two rows at the
bottom of the table are blank on purpose. There is no honest district-scale
transit or land value reading to take in the middle of a six-day treatment
outage, and taking one anyway is the error this session exists to prevent.

**The quoting rule, stated in full and written into every student's sheet
before they leave:** no reading from Week 10 is quoted as the district's state.
The 41% is a trough on day 3 of an event, not the district's happiness; the
13.6 min is a peak under two closed crossings, not the district's peak; the
−₡14,200 is a month, not a monthly balance. Week 10's numbers are quotable in
exactly one form — *"under the Week 10 load case, the district read X on day
N, and read Y again by day 19"* — and any other form is a misreading. A
capstone that reports 41% happiness as a district figure has answered a
question nobody asked and will be marked as having misread its own exercise.

### The tradeoff the session forces

**Fiscal performance against livability**, and the mechanism is the rate base
under 1,340 dwellings. Withdrawing the Flats takes forty-one blocks of
residential rates off the ledger permanently and leaves the water and heating
trunk that serves them in the budget, still costing its upkeep and now serving
floodway. Livability rises across the northern half of the Reach — the park
entry, the air and noise readings downwind, the health figure that has been
carrying Ombersley since Week 7. Defending them holds the rates, holds
livability where it is, and adds capital plus a permanent pumping line to the
outlay. Neither route improves both. There is no third route in which the
ground is both earning and empty.

The mechanism that makes defending harder than it looks is the one the lecture
named: raise the ground and the land value overlay in the Flats rises within a
few simulated years, rising land value pulls higher-density redevelopment, and
higher density on defended ground is the exposure the defence was bought to
remove — at a larger consequence, because the protection has to fail before
anyone finds out. The honest version of the defend route therefore carries a
zoning cap on the protected ground, which gives back part of the rate-base
argument that justified defending it. Students who derive that cap themselves
apply it in the capstone; students who are told it quote it.

The choice cannot be deferred because the capstone is two weeks away and the
hazard section of a comprehensive plan is not a description of the flood, it is
a position on the ground. Ombersley reads 11 at Week 7 and will read 18 at the
jury, against a core of 66. Whichever route is taken this afternoon is the
reason for that number, and the jury will ask for the arithmetic rather than
the intention. A plan that shows a district with no hazard section is read as a
plan that did not open the overlays; a plan that has one but no decision in it
is read as a plan that opened them and looked away.

### At the crit

Nadia runs the desk crit round against the two columns and the exposure
statement, and asks, at each desk:

- Put the day 3 sheet and the day 19 sheet next to each other. Which of those
  two is your district?
- Both crossings went at the same time. What did you think the network was
  doing when you left the Ombersley approach on two bridges and no third route?
- The treatment plant was offline for six days. It was six days in Week 7 as
  well. What did you change between then and now — give me the capacity number,
  not the intention.
- Happiness went to 41 on day 3 and came back on its own by day 19. Name one
  thing you would have spent money on for that number, and tell me what it
  would have bought that day 19 did not give you for nothing.
- 1,340 dwellings inside the envelope. When did that number become true — this
  week, or Week 3?
- If the pumps had held and the crossings had gone anyway, what fails second?
  Trace it for me on the overlay, not from memory.
- What is the annual cost of the difference between the capacity you have and
  the capacity that would have carried this fortnight? You have the budget
  panel open; I will wait.
- You are going to put one figure from today into your capstone. Which figure,
  and say me the whole sentence you are putting around it.

The failure mode Nadia is watching for is the passive sentence. "The river
flooded", "the plant went down", "the bridges were lost" — three findings with
no designer in them, and the jury reads all three as evasions, correctly. The
second failure mode is the mirror of it: a student who has decided the whole
afternoon was a fault, puts every red number in the left column, and proposes to
spend the reserve on a district-wide happiness problem that fixed itself in
sixteen days.

### What leaves the room

- `<student ID>-w10-pre` — the branch save taken before the load case, off-machine.
- `<student ID>-w10` — the assessed save at **day 19**, off-machine. This is the
  save Week 11 opens.
- The **event log**: one row per in-game day, days 0 to 19, each row carrying
  the 08:00 reading for balance, peak travel time, crossings in service,
  happiness and treatment status. Studio pro forma, on the handout.
- The **fault sheet**: the two columns, transcribed from the board, every entry
  carrying its reading. Broke on the left, looked alarming on the right, and
  the day 19 value written against every item on the right.
- Three screenshots, at the agreed views: the flood envelope over the
  residential overlay with the dwelling count visible; the air pollution info
  view at 08:00 day 3 with the wind direction in frame; the roads info view
  with both crossings out.
- The **exposure statement** — one paragraph, naming the route taken on
  Ombersley Flats, its cost from the budget panel, and the metric it was bought
  with, in the metrics' own words.
- All of it uploaded by **Tuesday 12:00**, before the desk crits. The event log
  is the item people leave behind and the item Week 11 cannot proceed without.

### `spec:` lines

```yaml
spec:
  - "You arrive with the Week 9 save and its five hazard info views already checked over your own district."
  - "You take a pre-event branch save and an off-machine copy before the load case is applied."
  - "You record a reading at in-game 08:00 for each of the nineteen days, and you do not intervene between day 6 and day 19."
  - "Your fault sheet separates what broke from what recovered, and every entry on it carries the reading it is based on."
  - "Every Week 10 figure you quote afterwards names the day it was taken on and the day 19 value beside it."
```

### Page body plan

Target 450–700 words. Suggested split in brackets.

1. **## Before you come** [≈90 words] — the Week 9 save, the five overlays
   checked over your own district, the Week 3 zoning drawing at A3, the Week 7
   restoration record. One line saying that nothing is built this week.
2. **## The load case** [≈110 words] — what is applied, that it is identical
   across the cohort, the pre-event branch save, and the six days. The flood
   envelope drawn and counted before anything is applied.
3. **## The three hours** [≈120 words] — the run sheet in prose, with the
   run-on to day 19 given its own sentence and the no-intervention instruction
   stated as an instruction.
4. **## What you read** [≈130 words] — the daily 08:00 schedule, the four
   systems in the order they fail, and the readings that are deliberately not
   taken.
5. **## Broke, or looked alarming** [≈120 words] — the two columns, with
   Ombersley on one side and the district-wide happiness dip on the other, and
   the rule that no entry goes up without a reading.
6. **## The quoting rule** [≈70 words] — short, blunt, and last, because it is
   the sentence students need in Week 12. Give the one permitted quoting form
   verbatim.

Do not restate the date, the tutor, the paired lecture or the spec list; the
page renders all four. The Ombersley withdraw/defend decision belongs inside
section 5, not as its own heading — it is a finding of the sort, not a seventh
topic.

### Frontmatter deltas

None — the frontmatter is correct as it stands. `teachers: [nadia-ilkhom]`
matches the calendar, and `related: [lectures/week-10]` is already declared, so
the pairing edge resolves without an addition. Add the `spec:` array above and
remove the `STARTER_CONTENT` comment; change nothing else.

### Hand-off

Week 11 receives `<student ID>-w10` at day 19 — a district that has been
through an event and come out of it, with a ground pollution stain at the head
of Ombersley Flats that has not cleared and will not clear before the jury. It
also receives the event log, which is the only place the studio's land value
record has a gap in it: no land value reading is taken in Week 10, so Week 11's
curve runs Week 9 to Week 11 across the break and has to say so when it is
plotted. More usefully, Week 11 receives a cohort that has just been made to
distinguish a number from a state, which is the same discipline the land-value
curve needs applied to it in the opposite direction.

For the capstone, this session supplies the first half of the jury's fourth
question — whether the district still holds up under the hazards of Week 10.
What it hands over is the exposure statement, the fault sheet and the day 19
readings; what it does not hand over is a hazard section already written. The
brief asks for a position on the ground at Tuckwell Bend, costed. This session
produces the costing and the decision; the plan has to make the argument.

### New canon introduced

- **Pellow cells** — the industrial cells at the head of Ombersley Flats,
  zoned in Week 3, whose accumulated ground pollution is mobilised by the
  flood. *Carried in from `notes/lecture-plans.md` (Week 10, slides 6 and 9)
  rather than coined here; reused so the lecture and its studio name the same
  ground.*
- **The Tuckwell crossings** — the two river bridges serving Ombersley Flats
  across Tuckwell Bend, both out for four in-game days. Named only so the
  spine's "two Ombersley bridges" has something to be called at the desk.

### Open questions for the writer

- The handout's water source setting is described here but not given a value.
  Either the studio ships a hazard file with the setting baked in, or the
  handout prints the number — but a cohort applying twenty different levels
  cannot compare event logs, and the fault charrette depends on comparison.
- Whether the day 0–19 event log is a studio pro forma on paper or a
  spreadsheet uploaded with the save. Paper survives the room better; the
  capstone quotes from it three weeks later, which argues for the file.
- The session assumes the district is not repaired between day 6 and day 19.
  Decide whether the simulation's own automatic repair of the crossings counts
  as intervention — it is written here as the simulation's business, not the
  student's, and the page should say so in one sentence rather than leave the
  room to discover it at 14:40.
- Whether the Ombersley withdraw/defend decision is taken in the save this
  afternoon or only costed and written. Written here as costed-and-written,
  with the build move deferred, so that Week 11 reads a curve produced by
  eleven weeks of decisions rather than one taken twenty minutes ago.

---

## Week 11 — Reading the Land-Value Curve

**Date:** 2027-05-17 · **Studio:** 13:00–16:00, Studio 2.14 ·
**Tutor(s):** Marisol Quaye · **Paired lecture:** What the Model Can't Show You · **Assessment:** none

### What the session is for, in one sentence

Plot the land-value curve you have been raising since Week 1, and leave the
room with it written down — in the memo, in the metrics' own words — what that
curve cost, given that the curve has no field for it.

### What students arrive with

- The save `<student ID>-w10`, at day 19, and the off-machine copy.
- **All eleven weekly saves**, `-w01` to `-w10`, on the machine and openable.
  This is the week the save discipline is for. A student with one rolling save
  has a screenshot and a memory; a student with eleven has a semester of
  evidence, and the difference shows up in the first forty minutes.
- The weekly land value readings already recorded: 14, 17, 24, 31, 34, 33, 34,
  31, 36, — , 39. The gap at Week 10 is correct and stays a gap.
- The Week 1 pin-up screenshots, for the unimproved reading over the Reach, and
  the **Week 4 pin-up screenshots**, which are the only surviving record of the
  household mix at Farrant Row before the amenity core went in. Nobody
  photographed Farrant Row on purpose in Week 4. It is in the corner of the
  land value overlay shot, and that is what students will be reconstructing
  from.
- The Week 6 file on the Wickstead junction widening: the before-and-after peak
  figures, 11.2 to 8.9 to 10.7, and the note on what it cost.
- The Week 10 fault sheet and exposure statement, because the Flats decision
  taken last week is one of the inputs to the curve's last segment and will be
  asked about.
- Squared paper and a pencil. The curve gets plotted by hand before anybody
  opens a chart. It takes four minutes and it is the difference between reading
  a shape and reading a colour.

### Run sheet

| Time | Segment | What happens | Who runs it |
| --- | --- | --- | --- |
| 13:00–13:10 | Set-up | Eleven saves open in sequence; the curve sheet issued; the Week 10 gap explained | Marisol Quaye |
| 13:10–13:45 | Plotting | The eleven readings plotted by hand, district mean and corridor on the same axes | students, at the desk |
| 13:45–14:15 | Attribution charrette | Every segment of the curve attributed to the studio move that produced it, at the board | Marisol Quaye, whole room |
| 14:15–14:45 | The corridor at the terminus | The last four Kerrow blocks read in the land value info view, with the household and rent readouts beside it | students, at the machine |
| 14:45–15:05 | The Farrant Row trace | Week 4 screenshots against the Week 11 readout; what the model records and what it does not | students, at the machine |
| 15:05–15:25 | The four-block decision | Upzone or hold, taken at the desk, and the memo sentence drafted in full | students, Marisol at the desks |
| 15:25–15:50 | Omissions appendix | Drafted to its four headings, half a page, in the room | students, Marisol at the desks |
| 15:50–16:00 | Wash-up | Three sentences read aloud from three desks; the all-three-improved rule restated | Marisol Quaye |

**The attribution charrette is the segment that makes the rest of the afternoon
possible.** The curve goes up on the board as a shape, and then the room fills
in what produced each segment: Week 3's separation and the first surplus, the
Pelling Street amenity core in Week 4, the Denton Hill–Barrow Fields spine in
Week 5, the Ockley Green plaza chain in Week 9. Then the two segments that go
the wrong way, which are the useful ones — Week 6, where the Wickstead widening
bought nothing the overlay could see, and Week 8, where a 22% service cut and
park maintenance at 60% took three points off the mean. Every segment gets a
studio move against it or it gets a question mark, and a question mark is a
result too: a rise nobody in the room can attribute is a rise the plan cannot
claim.

**The four-block decision and the memo sentence are drafted in the session, out
loud, not taken home.** The sentence is the one thing from this afternoon that
lands in the capstone verbatim, and it is the sentence students otherwise write
at midnight next Sunday, badly. Marisol takes it desk by desk and hands it back
until it names a metric, a direction and a population.

### The exercise

The curve first, and it is plotted before it is discussed. Eleven readings,
Week 1 to Week 11, district mean, on squared paper: **14, 17, 24, 31, 34, 33,
34, 31, 36, —, 39**. The gap is Week 10, where no district land value reading
was taken because the district was six days into a treatment outage, and the
line is drawn through the gap as a dashed segment rather than closed up. Then
the same axes carry a second line: the last four blocks of the Kerrow corridor,
at the southern terminus, which read **12** in Week 1 and read **61** today.
The district mean rose **+179%** in eleven weeks. Those four blocks rose by a
factor of five.

Read the curve as an achievement first, because it is one. Land value in this
simulation is a computed field over the map, and it responds to service
coverage, transit access, park and plaza proximity and density, and negatively
to noise and pollution. Every one of those inputs is something this studio
installed with public money. The curve is not a market discovering something
about the Reach; it is a ledger of the capital programme, expressed as a
colour, and it is the instrument that told you the Week 9 plaza chain landed
and the Week 6 widening did not. It stays in the capstone and it stays being
useful.

Then the second half of using it, which is the reason this session exists.
Open the land value info view over the four corridor blocks and put the
household and rent readouts beside it. The overlay will give a value for every
tile. It will not give an owner for any of them, because there is no landholder
entity in the model — land value is an attribute of a tile, and the tile cannot
be held, borrowed against, assembled, optioned, sat on or sold. The forty-nine
index points that arrived at those four blocks arrived from investment the
district's rates paid for, and outside the model there is always an answer to
who received them. Inside it there is not. So a plan that claims the corridor
was good value for the public is making a claim its own evidence cannot reach,
and has to argue it another way or not make it.

**The Farrant Row trace** runs next, and it is the afternoon's slowest twenty
minutes. Open the Week 4 save and read the household mix at Farrant Row off the
pin-up screenshot. Then open the Week 11 save and read it again. The counts do
not match, and the households that are not there did not leave through anything
the model recorded — the simulation replaces a household that can no longer
afford a unit with one that can, silently, and reports the result as occupancy.
It has a homelessness figure and that figure will pick up a fraction of it.
There is no field for the rest. Marcuse's four forms of displacement are the
right frame here: direct last-resident displacement is partly visible; direct
chain, exclusionary and displacement pressure are invisible in any count of who
currently lives somewhere, and a count of current residents is the only kind of
count this model keeps.

The lecture's worked figures for its own reference corridor — the low-wealth
household count falling while total households rise, against a district
homelessness figure in the tens — are a **worked example, not a studio
reading**, and are rebuilt from each student's own save rather than copied.
Directions will agree across the cohort. Magnitudes will not, and the districts
where they disagree are worth ten minutes at the front of the room.

**The Wickstead exercise** takes fifteen of the corridor minutes and is a
writing exercise, not a machine one. In Week 6 the junction was widened from
two lanes to four. Peak dropped from 11.2 to 8.9 for three in-game weeks and
refilled to 10.7. Now write the objection: who, outside the model, objects to
that widening, on what grounds, and at what point in the process. The save has
no representation of any of it — a zoning or road change takes effect the
moment it is drawn, with no notification period, no submission, no hearing, no
vote, no appeal and no developer with interests of their own. The consequence
for the capstone is specific and it is about sequencing: "stage two follows
stage one" is a claim about the model, and "stage two requires stage one to
have been approved" is a claim about a plan. Every timeline in the capstone is
currently the first kind.

None of this is an argument against the instrument, and the session says so in
those terms. A linear-elastic frame analysis does not represent material
behaviour past the elastic range, creep, connection slip, construction sequence
or residual stress. The engineer does not stop using it. They use it for what
it covers and carry the list for everything else, and nobody calls that
scepticism — they call it competence. This afternoon produces the studio's
version of that list, to the four headings the lecture gave, and it goes at the
front of the capstone memo rather than the back.

### Readings taken this week

Readings are taken at in-game 08:00. **The comparison column is Week 9, not
Week 10** — Week 10's figures are event readings under the quoting rule and
comparing a trend against them would report a recovery as an improvement.

| Reading | Where it is read | This week's value | Against last week |
| --- | --- | --- | --- |
| Monthly balance | Budget panel, per-district income and outlay | **+₡2,600/mo** | Week 9 trend +₡1,200/mo — up. Week 10 was a month, not a rate, and is not the comparison |
| Peak travel time | Traffic info view, 08:00 | **10.4 min** | Week 9 trend 11.1 min — down, which is better |
| Transit share | Public transport info view | **16%** | Week 9 13% — up; first reading since the event |
| Happiness | Happiness info view, 08:00 | **69%** | Week 9 67% — up |
| Land value, district mean | Land value info view, district extent | **39** | Week 9 36 — up. Week 1 unimproved was 14: **+179% over eleven weeks** |
| Land value, last four Kerrow blocks | Land value info view, corridor southern terminus | **61** | Week 1 12 — a factor of five, against the district's factor of under three |
| Population / households | District panel | **24,100 / 9,300** | Week 9 20,900 / 8,050 |
| Farrant Row household mix | Week 4 pin-up screenshot against the current readout | Reconstructed by each student | The count does not match, and the difference is not in any field the model keeps |

No metric moved the wrong way this week. **That is the subject of the session,
not an exemption from the rule.** The studio's standing convention — a plan
claiming all three metrics improved has not been read carefully — holds
everywhere in this semester except here, and it holds here too once you ask the
right question of it. Fiscal performance, mobility performance and livability
all read up against Week 9, and every one of those readings is true. The
reading that would have moved the wrong way is a reading of who the district
improved for, and there is no panel that computes it. Livability in this model
is computed over the households present when it is read, so a district can
raise it by improving conditions, by replacing its residents, or by any mixture
of the two, and the figure comes back the same. The rule survives Week 11 in a
sharper form: **a week where all three metrics improve is a week to go looking
for the metric you do not have.**

Note the symmetry with last week, because the jury will use it. In Week 10
every metric moved the wrong way at once and the finding was that it was an
event, not a district. In Week 11 every metric moved the right way at once and
the finding is that it is a district measured on one set of fields. Both weeks
are the same lesson about reading, arriving from opposite directions.

### The tradeoff the session forces

**Mobility performance against livability**, and the decision is the last four
blocks at the southern end of the Kerrow corridor — currently medium density,
currently holding the largest remaining concentration of low-wealth households
on the Reach, and currently the reason the spine's ridership sits at 16% rather
than higher. Upzone them and the density arrives inside an existing 400 m stop
catchment, which is the only place ridership has responded all semester.
Mobility performance rises and it rises measurably. Hold them and ridership
stays where it is and the spine's operating subsidy stays where it is, which is
a fiscal cost the student then owns.

The reason this decision sits in Week 11 rather than Week 5 is what happens to
the second metric. Upzone, and the simulation will report **livability rising
as well**. Land value rises at 61 and above, rent rises with it, the remaining
low-wealth households leave or surface in the homelessness figure, and the
corridor's livability is then computed over the households that are there
afterwards. Both numbers go up. The trade still happened, and the model has no
display for it, because the population the trade fell on is not in the set the
metric is computed over.

So the studio requires the trade to be recorded by hand, and the mechanism —
not the moral — is what gets written. A student who upzones writes that mobility
performance was bought with the livability of a population the metric no longer
contains, and says how many households that was in their own save. A student
who holds writes that they declined a measurable mobility gain and states what
the spine's subsidy costs fiscal performance as a result. Either is defensible
at the jury. The unrecorded one is not, and it is unrecorded plans, not wrong
ones, that the fourth question at the jury is aimed at.

### At the crit

Marisol takes the desks from 15:05 and asks the standing question with the
model on the other end of it:

- Your district mean went from 14 to 39. Which of the three metrics did you
  trade to get it?
- You are about to tell me nothing was traded, because all three read up. Fine.
  Tell me instead which reading would have shown the trade, and which panel it
  would have been on.
- Those four blocks read 12 in Week 1 and 61 now. Who holds them? Point at the
  thing in the model that holds them.
- Read me the Farrant Row count from your Week 4 screenshot, then read me this
  week's. Where does your plan say the difference went?
- The Wickstead widening. Who objected? Show me where the save records it, and
  if it does not, tell me what your Week 6 timeline is actually a timeline of.
- Which of your claims rests on a figure the model computes rather than a
  behaviour it observes? Pick the one you are least comfortable putting under
  that heading.
- You have a number for everything except the thing that would decide this.
  What is the number you would need, and who would have to go and collect it?
- Say the sentence. Not the paragraph, not the appendix — the one sentence that
  goes in the memo naming what you traded. I will keep asking until you name it.

The failure mode Marisol is watching for is the swerve into either ditch. One
is the student who spends the afternoon deciding the model is not to be trusted
and arrives at the jury with no figures at all, which is a worse plan than the
one they started with. The other is "the model doesn't really handle that",
offered as a way of not answering — a sentence that sounds like the appendix
and does the opposite of what the appendix is for. The appendix is where you
say what the model does not handle **and what you concluded anyway**. A memo
with an honest appendix is marked better than a memo with a flattering one, and
the jury has read a great many flattering ones.

### What leaves the room

- `<student ID>-w11`, off-machine, plus the eleven weekly saves kept intact —
  they are cited in the capstone and the jury may ask to see one open.
- **The curve sheet**: both lines plotted by hand, district mean and corridor,
  the Week 10 gap dashed, and every segment annotated with the studio move that
  produced it or with a question mark.
- **The Farrant Row trace**: the Week 4 count, the Week 11 count, and one
  sentence on where the plan says the difference went.
- **The Wickstead objection**: half a page, in the objector's terms, with a
  line naming what the save does and does not represent of it.
- **The memo sentence** on the four-block decision, drafted in full, naming the
  metric, the direction and the population.
- **The omissions appendix**, drafted to its four headings — who holds the land
  whose value this plan raised; which households present in Week 1 are not
  present in Week 12; which claims rest on a computed figure rather than an
  observed behaviour; what an objector would object to and what the plan's
  answer is. Half a page, two or three sentences per heading, a figure wherever
  there is one.
- Screenshots at the agreed views: the land value info view at district extent,
  and the same view at the corridor terminus with the four blocks in frame.
- Uploaded by **Tuesday 12:00**. The appendix is read at Tuesday's desk crits
  and is a required section of the capstone memo, so a draft that arrives at
  the jury unread has skipped its only review.

### `spec:` lines

```yaml
spec:
  - "You arrive with all eleven weekly saves openable on the machine, not one rolling save."
  - "You plot the district land-value curve by hand from your own weekly readings, with Week 10 left as a gap."
  - "Every segment of your curve is annotated with the studio move that produced it, or marked as unattributed."
  - "You leave with one written sentence naming what the four-block decision traded, which metric it moved, and which population it moved for."
  - "Your omissions appendix is drafted to all four headings before you leave the room."
```

### Page body plan

Target 450–700 words. Suggested split in brackets.

1. **## Before you come** [≈100 words] — eleven saves, the weekly readings, the
   Week 1 and Week 4 pin-up screenshots, the Week 6 Wickstead file, squared
   paper. Say plainly that this is the week the save discipline was for.
2. **## Plotting the curve** [≈110 words] — the eleven readings, the Week 10
   gap and why it stays a gap, the corridor's second line, 14 → 39 and 12 → 61.
   Read as an achievement.
3. **## What the curve is made of** [≈110 words] — the inputs land value
   responds to, all of them publicly funded, the curve as a ledger of the
   capital programme, and the attribution charrette.
4. **## What it does not record** [≈130 words] — no landholder, the Farrant Row
   trace, displacement the model cannot count, unzoned land that stays empty,
   and the Wickstead objection with no representation in the save. Keep this
   the same register as the rest: a list of what the instrument covers, of the
   kind any discipline that models keeps.
5. **## The four blocks** [≈90 words] — the decision, both numbers going up,
   and the sentence the student writes by hand.
6. **## The appendix** [≈70 words] — the four headings, half a page, drafted in
   the room, at the front of the capstone memo.

Do not restate the date, tutor, paired lecture or spec list. Do not open the
page on the limits material — sections 1 to 3 have to establish that the curve
is a real achievement, or section 4 reads as a complaint instead of a method.

### Frontmatter deltas

None — the frontmatter is correct as it stands. `teachers: [marisol-quaye]`
matches the calendar, and `related: [lectures/week-11]` is already declared.
Add the `spec:` array above and remove the `STARTER_CONTENT` comment.

### Hand-off

Week 12 receives a cohort that has already written the hardest paragraph in the
capstone memo. The omissions appendix, the four-block memo sentence and the
attributed curve go in more or less as drafted, and the curve sheet is the
evidence behind the second move of the jury walk-through — the land value
overlay at district extent, which is the slide the jury asks "who captured
this" against. Week 12 also receives the Week 10 exposure statement, because
the two weeks answer the two halves of the same question.

For the capstone specifically, this session supplies the second half of the
jury's fourth question — whether the plan is honest about what the simulation
was never able to show it. What it hands over is the appendix drafted to four
headings, the Farrant Row trace, and one sentence naming a trade the metrics do
not display. What it does not hand over is a position: the appendix says what
the plan cannot see, and the plan still has to decide what to do about it.

### New canon introduced

None.

### Open questions for the writer

- Whether the studio issues the eleven land value readings as a printed table
  or requires students to reconstruct all eleven from their own saves. The
  reconstruction is worth more and costs the first forty minutes; the printed
  table guarantees the charrette starts on time. Written here as
  reconstruct-from-your-own, with the studio's figures as the check.
- The Farrant Row trace assumes the Week 4 household mix is legible in the
  corner of a Week 4 pin-up screenshot taken for another purpose. If the
  studio's pin-up view does not in fact capture it, the trace needs either a
  new required Week 4 screenshot — which changes Week 4's brief — or a
  reconstruction from the Week 4 save instead, which is slower but safe.
- How hard the page presses on the informal-housing point. The model builds
  nothing on unzoned, unserviced land under any level of demand, which is a
  large omission with a large number attached to it, but the session's own
  evidence for it is a negative. One paragraph, stated as a limit on what the
  plan may claim, is probably the right weight; a section is too much.
- Whether the "all three improved" exception is stated on the session page or
  left to the plan. It is stated here, because a student who meets it cold at
  the jury reads it as having broken a rule rather than as having found the
  week the rule was written for.

---

## Week 12 — Final Jury

**Date:** 2027-05-24 · **Studio:** 13:00–16:00, Studio 2.14 ·
**Tutor(s):** Marisol Quaye, Sunniva Marek (visiting critic) · **Paired lecture:** Capstone Review: The Comprehensive Plan · **Assessment:** Comprehensive City Plan (50%, holistic) — artefact due 12:00, defended from 13:00

### What the session is for, in one sentence

Stand up in front of a jury that has not watched you build anything, and argue
twelve weeks of district decisions as one position — with the trade named in a
sentence, the Week 10 exposure costed, and the appendix at the front.

### What students arrive with

- **The artefact, already lodged by 12:00.** The defence memo, including the
  omissions appendix drafted in Week 11 and placed at the front, and the
  in-simulation screenshots at the agreed views. Nothing about the afternoon
  changes the artefact; the clock on it has already run out.
- The save at the plan's final year, **paused, at full district extent**, open
  on the presenting machine and not on a laptop that has to be plugged in
  during the changeover.
- The five info views from the walk-through sequence pre-checked **on the
  presenting machine**, in order, before 13:00. An overlay that takes eleven
  seconds to draw takes eleven seconds out of a twenty-minute slot.
- The three metric readings memorised, not looked up: +₡2,900/mo, 08:00 peak
  10.2 min, happiness 70%. If a student has to open a panel to find their own
  livability figure, the room notices and the jury draws the obvious inference.
- **The corridor budget sheet** and **the unfunded list** from Week 8, both
  still current. The unfunded list is the single most useful piece of paper in
  the room: it is a written record of what the district decided it could not
  afford and when, and it turns "I ran out of time" into a dated decision.
- The Week 10 **exposure statement** and **fault sheet**, and the Week 11
  **curve sheet** and **Farrant Row trace**. These are the evidence behind the
  jury's fourth question and they are asked for by name.
- A decision about the reserve, taken before 11:00 at the desk rather than at
  13:40 at the lectern.
- Two printed A1 boards for hanging, and their own pins.

### Run sheet

| Time | Segment | What happens | Who runs it |
| --- | --- | --- | --- |
| 12:15–13:00 | Hanging and machine check | Boards up on the long wall in plan order; presenting machine tested; running order drawn at 12:50 and posted | students; Marisol Quaye |
| 13:00–13:05 | Chair's opening | The order read, the protocol restated, the fourth question announced as the last question of every slot | Marisol Quaye |
| 13:05–13:45 | Defences 1–2 | Two twenty-minute slots, back to back, no break between | jury |
| 13:45–14:25 | Defences 3–4 | As above | jury |
| 14:25–14:35 | Jury conference | Jury confers; room stays; boards stay up and are read by the cohort | Marisol Quaye, Sunniva Marek |
| 14:35–15:15 | Defences 5–6 | As above | jury |
| 15:15–15:55 | Defences 7–8 | As above | jury |
| 15:55–16:00 | Close of studio | Boards down, saves confirmed lodged, feedback timeline stated | Marisol Quaye |

**The hanging hour is not slack time and it is not optional.** Boards go up on
the long wall in the order the plans will be presented, so that the cohort reads
the whole studio's work as one wall before the first defence rather than one
board at a time from a seat. The running order is drawn at 12:50 and posted; it
is a draw, not a volunteer list, because a volunteer list produces four
confident plans at the start and the room stops listening by 14:30. The
presenting machine is one machine, tested once, and every save is opened on it
during the hanging hour — a district that will not load at 15:20 is a district
that is marked from the memo alone.

**Each slot is twenty minutes and it runs to the studio's standing crit
protocol, unchanged.** Five minutes of uninterrupted walk-through. Then
clarifying questions only, about two minutes — things the room needs in order to
look at the work properly, not opinions with question marks on them. Then ten
minutes of critique, addressed to the plan. Then the presenter responds last,
about three minutes, and is not obliged to agree. Nobody gets a longer slot by
talking through the clarifying questions, and the chair will say so once, at
13:05, so that nobody has to be told twice in front of the room.

**The jury conference at 14:25 is ten minutes and the room does not empty.**
The cohort stays and reads the wall; the jury confers about the first four
plans while they are still fresh. Attendance is expected for the whole
afternoon including the parts where a student is not being marked — a jury with
no audience is two people looking at a screenshot, and the critique is the
thing the studio is for.

### The exercise

The exercise is the defence, and it has a fixed shape. Five moves in five
minutes, each one a scale and an argument rather than a tour:

| Move | On screen | What is said | Time |
| --- | --- | --- | --- |
| 1 | Full district extent, roads only, no overlay | The site, and the one constraint that set the plan | 40 s |
| 2 | Same extent, land value overlay | What the plan did, and where it landed | 60 s |
| 3 | The corridor at neighbourhood scale | The claim, in one sentence, with its grounds | 120 s |
| 4 | One block at street level | What it is like to stand there — the thing the figures cannot carry | 60 s |
| 5 | Full extent, the three metric readouts | The trade, named | 60 s |

Move 4 is the one students cut when they are nervous and it is the one the
visiting critic remembers. It is not decoration: it is the only moment in the
afternoon when the plan is described in terms that are not an output of a
panel, and a plan that cannot survive sixty seconds at street level is usually
a plan that was designed in the land value overlay.

The info views come up in a fixed order too, because each one invites a
question and the question should not be a surprise. **Land value** first — the
capital programme landed where it was aimed, and the question it invites is who
captured the uplift. **Public transport routes and ridership** second — mobility
performance, and the question is what happens at the terminus. **Service
coverage by district** third — livability's floor, and the question is which
districts sit outside every radius. **Budget** fourth — fiscal performance, and
the question is which year the surplus ends. **Water, ground pollution and fire
hazard** last, and the question is Ombersley Flats. All five questions get
asked. The sequence exists so that the student opens each overlay already
holding the answer.

The plan itself is argued rather than inventoried, and the structure is the
one the lecture set out: a claim, the grounds under it, the warrant that
connects them, the backing from the studio's own findings, the qualifier that
says under what conditions the claim holds, and the rebuttal the student states
before the jury does. A plan missing the warrant is asked "so what"; a plan
missing the qualifier is asked "and then what"; a plan missing the rebuttal is
asked the rebuttal. The qualifier is a number in this studio, not a hedge —
capacity headroom off the Week 7 readouts, growth rate, staging assumptions —
and the rebuttal is usually the student's own omissions appendix, cited.

**The reserve is the last live decision and it is taken before 12:00.** The
district closes the semester at **+₡2,900/mo** with a cumulative reserve of
**₡186,000**, and that reserve is the only uncommitted money in the plan. It
buys the Kerrow cross-town link — an east–west connection from the corridor to
the Pellow cells, which is the one move that puts the district's industrial
employment inside the spine catchment and is the only proposal on the table
that touches the Ombersley figure at all. Or it stays as reserve, and the
annual balance stays positive through every year of the plan, which is the
answer to the question the jury asks every year: what happens in year fifteen.
Non-car trips currently run at 48% — 17% transit plus 31% walk, the two spine
figures added — and the link is where the next points would come from.
Presenting the link as costless is not defensible. Presenting the reserve as
prudence without naming the mobility gap it declines to close is not defensible
either. Whichever is taken becomes the plan's headline claim, and the qualifier
gets written before anything else does.

### Readings taken this week

Readings are taken at in-game 08:00, at the plan's final year, with the
simulation paused. This is a trend reading and the last one of the semester.

| Reading | Where it is read | This week's value | Against last week |
| --- | --- | --- | --- |
| Population / households | District panel | **25,400 / 9,800** | Week 11 24,100 / 9,300 |
| Monthly balance | Budget panel, per-district income and outlay | **+₡2,900/mo** | Week 11 +₡2,600/mo — up |
| Cumulative reserve | Budget panel, accumulated balance | **₡186,000** | First time it is reported as a total rather than as a rate |
| Peak travel time | Traffic info view, 08:00 | **10.2 min** | Week 11 10.4 min — down, which is better |
| Transit share | Public transport info view | **17%** | Week 11 16% — up |
| Walk share | Traffic info view, mode split | **31%** | Week 9 29%, and Week 2 also 31% — at 1,180 residents then, 25,400 now |
| Happiness | Happiness info view, 08:00 | **70%** | Week 11 69% — up |
| Land value, district mean | Land value info view, district extent | **40** | Week 11 39 — up |
| Land value, core | Land value info view, amenity core | **66** | Week 4 core 48 |
| Land value, Ombersley | Land value info view, Ombersley Flats | **18** | Week 7 11, collapsed; recovered to 18 and no further |

The metric that moved the wrong way this week is **livability**, and it only
does so once you stop reading the mean. The district mean of 40 is an average
of a core at **66** and Ombersley at **18** — a factor of three and a half,
across about two kilometres of the same district, produced by twelve weeks of
decisions that each looked local at the time. Every other figure in the table
moved the right way, which by the studio's own convention is the point at which
you go looking for the reading that did not, and here it is not hidden in a
missing field the way Week 11's was. It is in the overlay, at district extent,
in the second move of every walk-through this afternoon.

The walk share row is worth reading twice for the opposite reason. 31% is the
Week 2 figure exactly, reached again at twenty-one times the population, having
gone down to 22% in Week 3 and back up through the amenity core and the plaza
chain. It is the studio's clearest single example of a metric returning to its
starting value by an entirely different route, and a plan that reports it as
"unchanged since Week 2" has not read its own semester.

### The tradeoff the session forces

**Fiscal performance against mobility performance**, and the mechanism is the
₡186,000. It is the only money in the plan not already committed to an upkeep
line, and it is enough for one thing. Spent on the cross-town link, it buys the
first mobility gain since Week 5 that does not depend on further density — the
Pellow cells come inside the catchment, the 48% non-car share has somewhere
to go, and the annual balance goes negative for the first years of the staging
while the corridor rate growth catches up. Held as reserve, the balance stays
positive in every year of the plan and the district keeps the answer to the
year-fifteen question, and the mobility gap stays exactly where it is.

The reason the decision cannot be deferred past 12:00 is that it is the plan's
claim, not an item in it. Everything else in the memo is a description of
decisions already taken and already visible in the save; this is the one
decision the plan makes about the future, so it is the sentence the qualifier
attaches to and the sentence the rebuttal answers. An undecided plan presents
as an inventory — here is the transit, here is the industry, here is the park
chain — which is twenty minutes of true statements adding up to no position,
and it is the single most common way a capstone goes wrong.

There is a second reason, and it is the one the jury will actually press. The
reserve is the only instrument in the plan that could be pointed at Ombersley
at 18, and the student who holds it as reserve has to say, out loud, that they
have money and are not spending it there. That is a defensible position — the
year-fifteen argument is a real argument — but it has to be taken as a
position, in the memo, in the metrics' own words. It cannot be arrived at by
not mentioning it.

### At the crit

Sunniva Marek asks first, in every slot, and asks the question the studio has
stopped asking itself:

- What did you trade? One sentence. If it takes you more than a sentence, you
  did not make the trade, you found it afterwards, and the plan will show that.
- Your core reads 66 and Ombersley reads 18. That is two kilometres. Is that
  your plan, or is that what happened while you were doing something else?
- Twelve weeks. Which decision would you not take again, and what did it cost
  you to find that out?
- Show me the district you would have built if the Reach had not been the cheap
  option in Week 1. Not in detail — just tell me which of these three numbers
  would be worse and by roughly how much.
- Everyone in this room has been reading the same three numbers since
  February. What is the number none of you took?

Marisol Quaye chairs, and takes the metrics and the fourth question in order:

- Your reserve is ₡186,000. What is it for? Not what it could be for — what it
  is for, in your plan, in which year.
- Walk share 31%. It was 31% in Week 2 at 1,180 residents. Which of those two
  is the achievement, and what did the difference cost?
- You have told me the district holds up under the Week 10 load case. Which
  reading says so — the day 3 one or the day 19 one? Read me both.
- Read me item 2 of your appendix. Now tell me which line of your plan is the
  answer to it, and if there is not one, say so.
- Which of the three metrics did you trade? I will keep asking until you name
  it.

**The fourth question comes last in every slot and it comes in two halves**,
because two weeks of this studio exist to make it answerable. The first half is
Week 10's: does the district still hold up under the hazards — answered from
the exposure statement, the fault sheet and the day 19 readings, not from an
account of the flood. The second half is Week 11's: is the plan honest about
what the simulation was never able to show it — answered from the appendix, the
Farrant Row trace and the curve sheet. A plan can be strong on all three
metrics and fail this question, and holistic marking is what makes that
possible: there is no line item the rest of the document can carry.

**What a defence that fails looks like**, so that nobody discovers it at 15:20.
It is the tour — five overlays, twenty minutes of true statements, no claim. It
quotes 41% happiness as the district's livability, which tells the jury the
student did not understand their own Week 10 exercise. It apologises instead of
defending: "I ran out of time to fix the west" rather than "livability in the
west reads 58, the surplus went to the link instead of the western park chain
because mobility was the binding constraint, and the park chain is stage two
from year 13" — the difference is not tone, it is that a defence contains a
number, a reason and what happens next. It offers "the model doesn't really
handle that" as a way of not answering a question the appendix was written to
answer. And it names the Ombersley gap as a fact about the district rather than
a consequence of the Week 3 zoning decision that put the Works there, which is
the one place in the plan where the passive voice is most tempting and least
survivable.

### What leaves the room

- **Nothing is submitted at the jury.** The artefact was lodged at 12:00; the
  defence cannot be submitted late because there is nothing to submit it to.
  What leaves the room is the record of the defence.
- The **jury sheet** for each student, written during the slot by the chair:
  the claim as stated, the trade as named, the answer to the fourth question,
  and the questions that were not answered. It is the basis of the written
  feedback and it is not a mark.
- `<student ID>-w12`, confirmed lodged with the artefact, off-machine — the
  save at the plan's final year, paused, at district extent, as presented.
- The **boards**, taken down at 16:00 by the student who hung them. Two A1
  boards, and the studio keeps digital copies of both with the artefact.
- Written feedback and the mark, returned by the Course Convenor to the
  published assessment timeline. Sunniva Marek's comments are in the jury sheet
  and arrive with the feedback; she does not take student email, and the jury
  is the whole of her contact with the cohort.
- For a student who missed the jury: the plan is marked from the memo alone,
  which means the memo has to answer, unprompted, every question above. Most
  memos do not.

### `spec:` lines

```yaml
spec:
  - "Your artefact — memo with the omissions appendix at the front, and the screenshots — is lodged by 12:00, before the boards go up."
  - "Your boards are hung and your save opens on the presenting machine during the hanging hour, not at your slot."
  - "You can state your plan's claim, its qualifier and its rebuttal in one sentence each, without reading them."
  - "You quote your three metric readings from memory, and any Week 10 figure you use names the day it was taken on."
  - "You have a stated position on the difference between the core's land value and Ombersley's, and on what the reserve is for."
```

### Page body plan

Target 450–700 words. Suggested split in brackets. This page is read the night
before, so it is written as instructions, not as a description of a jury.

1. **## The clock** [≈90 words] — 12:00 artefact, 12:15 hanging, 12:50 order
   drawn, 13:00 jury, 16:00 close. One line on what missing the jury means.
2. **## Hanging and the running order** [≈80 words] — the long wall, plan
   order, the draw, the one presenting machine and the load test.
3. **## Your twenty minutes** [≈130 words] — the protocol in its four steps
   with the timings, then the five walk-through moves as a short list, with
   move 4 called out as non-negotiable.
4. **## The overlays, in order** [≈90 words] — the five info views and the
   question each one invites. Say that all five questions get asked.
5. **## What the jury asks** [≈140 words] — the three metrics, then the fourth
   question in its two halves, and the Ombersley gap as the sharpest single
   question. Do not resolve it on the page.
6. **## Before you stand up** [≈90 words] — the checklist: save paused at
   district extent, overlays pre-checked, memo on the second screen with the
   appendix at the front, claim and qualifier and rebuttal written where you can
   see them, three metric figures memorised, walk-through timed out loud once, a
   decision about the reserve.

Do not restate the date, the teaching team, the paired lecture or the spec
list. Do not restate the capstone's weight or marking mode either — the
assessment page carries both and the graph edge puts it in front of the reader.

### Frontmatter deltas

None — the frontmatter is correct as it stands. `teachers: [marisol-quaye,
sunniva-marek]` matches the calendar, and Week 12 is one of the three assessed
sessions where the Visiting Critic is in the building.

On the related edges, accurately: **the session's own frontmatter declares only
`related: [lectures/week-12]`.** The edge to the capstone is declared on the
assessment side — `src/content/assessments/03-comprehensive-city-plan.md`
carries `related: [sessions/12-final-jury]` — and the graph resolves it in both
directions, so the rendered session page shows the capstone under related
content without the session declaring it. Nothing needs adding. Add the `spec:`
array above and remove the `STARTER_CONTENT` comment.

### Hand-off

Nothing receives this session; it is the last one. What it hands to the
**Comprehensive City Plan** brief is the defence format and the questions, so
that the brief can point at this page instead of restating it: twenty minutes,
the four-step protocol, five walk-through moves, five overlays in a fixed
order, and the fourth question asked last in every slot. It also hands over the
three artefacts the fourth question is answered from — the Week 10 exposure
statement and fault sheet, and the Week 11 appendix, curve sheet and Farrant
Row trace — which is the studio's argument for why those two weeks are not
optional attendance.

What this session does not do is write the brief. It does not set the memo's
length, its required sections beyond the appendix, the screenshot list, or the
late penalty; those belong to the assessment page and to the policies page, and
both already carry them. The brief's own job is to say what the plan must
contain. This page says what happens to it in the room.

### New canon introduced

- **Kerrow cross-town link** — the proposed east–west connection from the
  Kerrow corridor to the Pellow cells, the only use for the ₡186,000 reserve
  that touches the Ombersley land value figure. *Carried in from
  `notes/lecture-plans.md` (Week 12, "The tradeoff of the week") rather than
  coined here; unbuilt in every district, and the plan's decision either way.*

### Open questions for the writer

- **The jury's start time contradicts the policies page.** `src/pages/policies/
  index.mdx` says the defence happens at 14:00; the studio block is 13:00–16:00
  and the capstone is defended from 13:00. This plan follows the 13:00 start
  and the three-hour block. Reconcile the two before the page is written —
  either the policies sentence changes to 13:00, or every run sheet in this
  document shifts.
- **The slot length has two sources and they disagree.** Sunniva Marek's bio
  and the Week 12 lecture plan both say twenty minutes; the policies page's
  extensions section says "one student's fifteen minutes". Twenty is used here
  because it is the figure in the two documents that are about the slot. If
  fifteen is preferred, the run sheet gains four slots or loses eighty minutes.
- **UNRESOLVED, AND IT BLOCKS THE PAGE: the run sheet holds eight defences
  and the cohort is sixteen.** An earlier draft of this bullet claimed the
  fifteen machines in the design lab were "the only cohort bound anywhere in
  the site". That is wrong. Week 4 fixes the cohort at sixteen explicitly, and
  Week 5's open questions confirm it. This section was drafted after an
  interrupted run and lost that fact: eight twenty-minute defences fill
  13:05–15:55 exactly, so sixteen need another 160 minutes that do not exist.
  This is a format decision, not an arithmetic tweak, and it is the one thing
  standing between this plan and a writable page. The options worth costing:
  a shorter slot (ten minutes gets sixteen into the block but is thin for a
  50% capstone); two parallel juries in separate rooms with Quaye and Marek
  splitting and reconverging for a joint summing-up, which keeps the slot
  length but means no juror sees every plan; a shortlist defended at length
  with the remainder defended briefly, which is real studio practice but has
  to be announced in advance to be fair; or an extended block or a second
  session, flagged as such on the page and in the calendar. Whichever is
  chosen, the visiting critic must plausibly have seen enough to sum up.
- **The Ombersley industry has one name: the Pellow cells.** Weeks 3, 4–6, 10
  and 12 were drafted in parallel and two of them coined "Ombersley Works" for
  the ground `notes/lecture-plans.md` already calls the Pellow industrial
  cells. Resolved in favour of the lecture doc's name throughout this file, so
  the deck and the studio pages name the same ground. If a stray "Ombersley
  Works" survives anywhere, it is a miss, not a second place.

---
