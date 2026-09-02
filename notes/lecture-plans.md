# SLOP2418 — lecture slide plans

**Purpose.** One detailed plan per lecture, written so a future agent can build
the deck without re-deriving the course. Each week below fixes the argument, the
theory anchors, the simulation mechanics they map onto, the tradeoff the week
turns on, and the slide-by-slide content. Where a plan gives bullet text, table
rows, a pull-quote or a diagram description, that is the content to use, not a
suggestion of the kind of content to invent.

**Status.** Plans only, **revised against the adversarial review on
2026-09-02**. The mechanics, geography, delivery mode and evidence language in
the plans now follow the corrections in `notes/lecture-adversarial-review.md`.
No deck in `src/decks/` has been built from them, and the twelve lecture bodies
in `src/content/lectures/` are still `STARTER_CONTENT` placeholders. Production
use remains gated on the reference evidence pack described below: until it
exists, all fixed scenario values are worked hypotheticals, not claims about a
save students will receive. Writing a lecture body and building its deck are
separate jobs; this file is the source for both.

## How to use this file

1. Read the register notes below before writing a word. The voice is the
   deliverable; the content is the vehicle.
2. Take the week you are building. Its **Argument in one sentence** is the test
   every slide has to pass.
3. Build the deck as `src/decks/week-NN.deck.mdx`, then point the matching
   `src/content/lectures/week-NN.md` at it with
   `slides: /decks/week-NN/` — the frontmatter schema requires that exact shape.
4. `pnpm check` proves the deck compiles. It does not prove a slide is legible.
   Inspect the built deck at 1920×1080 and 390×844 before calling it done.

## Register — non-negotiable

Played completely straight, in the voice of a real design-school studio
handbook. The comedy is structural, never line-by-line. Nowhere does the
material acknowledge that the site is a save file rather than land. No winks,
no puns, no self-aware asides. *Cities: Skylines II* is named the way a real
syllabus names Rhino or ArcGIS: as the software of record, matter-of-factly,
with its actual systems cited as ordinary course content.

Real urban-design theory carries every week and is mapped explicitly onto a
named simulation mechanic — that pairing is the pedagogy. No real cities, real
developers or real planning disasters as case studies; invented districts and
composite scenarios only.

## The three metrics

Named in Week 1 and returned to every week after, in these words:

| Metric | What it measures | Where it is read |
|---|---|---|
| **fiscal performance** | whether the district pays for the services it demands | citywide budget panel, plus a declared studio allocation where district costs are compared |
| **mobility performance** | whether people can get where they are going, at the times they go | traffic flow and volume, line passengers and usage, plus declared manual or derived travel-time measures |
| **livability** | whether the place is worth being in once you have arrived | happiness, land value, service coverage, pollution overlays |

These are **course-defined composites**, not three scores the simulation emits.
Every lecture must name the component readout it is using; it must never invent
a single district “livability reading”, a per-district fiscal balance, or an
average travel-time readout and present it as native UI.

## Evidence rule after adversarial review

Every figure and mechanic claim uses one of three labels:

- **direct readout** — visible in the current course build's UI;
- **derived measure** — calculated from named direct readouts, with the working
  shown;
- **worked hypothetical** — invented to teach a method and never described as
  a result the simulation “will” produce.

For this document as it stands, **named UI fields with no claimed value are
direct readouts; calculations with a displayed formula or sampling protocol are
derived measures; every fixed scenario value and outcome is a worked
hypothetical.** That default applies even where a slide does not repeat the
label beside every row. A hypothetical may illustrate a decision, but the
speaker may not say that the simulation “will”, “always” or “exactly” produce
it.

Promoting a worked hypothetical to a reference result requires an evidence-pack
row recording all of: game version and platform; save identifier and checksum;
starting state; intervention; elapsed simulation time; time of day; UI source;
manual sampling window; and calculation. The same pack must contain the
canonical Kerrow Basin map and the save that generated the value. The repo does
not yet contain that pack, so no fixed population, cost, headway, travel-time,
land-value, household, pollution, capacity or modal-share number below is a
direct readout. Pin the course build before building the Week 7 deck.

They are also the marking criteria for every weighted assessment, so a lecture
that names a tradeoff between two of them is naming something a student will be
marked on.

## Calendar

Mondays from 2027-02-22, with a two-week mid-semester break after Week 6.

| Wk | Date | Lecture | Lecturer | Deck | Due |
|----|------|---------|----------|------|-----|
| 1 | 2027-02-22 | Site Analysis and the Blank Map | Marisol Quaye | — | |
| 2 | 2027-03-01 | The Grid vs. the Organic Street | Idris Fenn | — | |
| 3 | 2027-03-08 | Zoning and the Myth of Separation | Marisol Quaye | — | |
| 4 | 2027-03-15 | Density and the 15-Minute City | Marisol Quaye | — | Assessment 1 (25%) |
| 5 | 2027-03-22 | Moving People: Transit-Oriented Design | Idris Fenn | — | |
| 6 | 2027-03-29 | Traffic Engineering and Its Discontents | Idris Fenn | — | Nothing submitted |
| 7 | 2027-04-19 | Infrastructure You Don't See | Nadia Ilkhom | **deck planned, not built** | |
| 8 | 2027-04-26 | Fiscal Realism | Tobias Wren | — | |
| 9 | 2027-05-03 | Parks, Plazas and the Public Realm | Tobias Wren | — | Assessment 2 (25%) |
| 10 | 2027-05-10 | Resilience: Hazards, Pollution and Climate | Nadia Ilkhom | — | |
| 11 | 2027-05-17 | What the Model Can't Show You | Marisol Quaye | — | |
| 12 | 2027-05-24 | Capstone Review: The Comprehensive Plan | Marisol Quaye | — | Assessment 3 (50%) |

Only Week 7 is intended to get a real deck. It has not been built. The other
eleven lectures are intended to run from notes; their plans here are still
worth having, because the lecture *page* body has to say what the lecture covers
whether or not slides exist.

## Deck mechanics the plans assume

- `---` on its own line starts a new slide.
- Slide bodies are ordinary markdown. MDX comments are `{/* … */}`.
- `{/* _class: impact */}` fills the slide with the brand colour; `quote`,
  `banner` and `centered` are the other classes the theme styles.
- Two inks: gold and black on cream, flat risograph. Every diagram in these
  plans is specified to survive that constraint.
- Assume no photography and no screenshots exist. Where a plan calls for a
  "screenshot", build a described placeholder or a diagram instead.

## Shared canon — the Kerrow Basin

Every week's plan builds on one site, issued to students in Week 1 and carried
to the capstone. A deck that renames it breaks eleven other weeks, so treat this
as fixed.

| Feature | What it is |
|---|---|
| **Kerrow Basin** | the standard map issued in Week 1. The River Kerrow runs north-west to south-east; prevailing wind is WNW. This orientation is fixed; dimensions remain worked hypotheticals until the map ships. |
| **Halstead Reach** | the flat north-east terrace and the semester's primary build site. Its quoted dimensions are worked hypotheticals until measured from the canonical map. |
| **Verrall Ridge / Ludworth Bench** | Verrall Ridge is the south-west landform; Ludworth Bench is the one shelf on it considered as the costly Week 1 settlement alternative. Week 10's supported forest-fire scenario begins on the forested ridge. |
| **Ombersley Flats / the Pellow cells** | Ombersley Flats is the south-east ground, downwind and downstream of the basin. The Pellow cells are the industrial cells zoned there in Week 3. They remain industrial; no later week silently converts them to housing. |
| **Thackray Cut** | the only westward road gradient off the Reach. |
| **Dunthorpe interchange** | highway connection at the north edge. The quoted connection length is a worked hypothetical pending the map. |
| **Kerrow corridor** | the main north–south arterial. Widened in Week 6, and the last four blocks of it are Week 11's case. |
| **Tuckwell Bend** | the river bend the low-lying Ombersley blocks sit inside. |
| Lesser places | Pelling Street, Denton Hill, Barrow Fields, Wickstead junction (Weeks 4–6); Ockley Green, Wensley Bank pumping station, Farrant Row (Weeks 7–9). |

### Place and use register

| Week | Canonical change carried forward |
| --- | --- |
| 1 | The cohort selects Halstead Reach; Ludworth Bench remains the measured counterfactual, not a second name for the ridge. |
| 2 | The residential block comparison is 80 m versus 160 m on Halstead Reach. |
| 3 | Industry is zoned only in the Pellow cells on Ombersley Flats; the comparison site on the Reach is a sandbox counterfactual. |
| 4 | The amenity core is on Pelling Street beside the north–south Kerrow corridor. |
| 5 | The canonical mode is a six-stop **bus** from Denton Hill to Barrow Fields, initially assigned four buses; headway is timed manually. |
| 6 | Wickstead is widened on the north–south Kerrow corridor. |
| 7 | No land use changes. Growth exposes citywide water-production and sewage-treatment shortfalls; the pipes themselves have no claimed capacity or pressure reading. |
| 8–9 | Ockley Green and Farrant Row receive the budget and public-realm decisions; the Pellow cells remain industrial. |
| 10 | A supported forest-fire load case begins on Verrall Ridge and tests Thackray Cut, power transmission and fire response. There is no vanilla flood scenario. |
| 11–12 | The last four Kerrow-corridor blocks and the proposed cross-town link are planning decisions, not new place names. |

**Standing measurement conventions**, set in Week 1 and assumed by every later
week: readings are trends, not moments; every direct reading names its UI field
and is taken at in-game 08:00; every manual observation records its route,
sampling window and weather state; every derivation shows its inputs. When all
three composites appear to improve, inspect distribution and omitted fields
before concluding that no trade occurred — Week 11 is the deliberate case.

**Money.** Use `₡` throughout. A citywide budget-panel value is labelled
**direct readout**; a district or corridor allocation is labelled **studio
worksheet**; a fixed value in these unverified plans is a **worked
hypothetical**.

**Assessment structure.** The repo ships **three** assessments and the files in
`src/content/assessments/` are authoritative:

| # | Title | Due | Weight | Marking |
|---|---|---|---|---|
| 1 | Neighbourhood Unit Plan | Wk 4, 2027-03-15 | **25%** | weighted — livability 40 / fiscal 30 / mobility 30 |
| 2 | Public Realm and Infrastructure Plan | Wk 9, 2027-05-03 | **25%** | weighted — livability 45 / fiscal 30 / mobility 25 |
| 3 | Comprehensive City Plan (capstone) | Wk 12, 2027-05-24 | **50%** | holistic |

There is no Mobility Plan. Week 6 still stress-tests the network, but nothing
is submitted on the day. Public Realm and Infrastructure is Assessment 2;
Comprehensive City Plan is Assessment 3. The old 15 / 20 / 25 / 40 structure
has been removed from this plan; if it reappears, treat it as a regression.

---

## Week 1 — Site Analysis and the Blank Map

**Date:** 2027-02-22 · **Lecturer:** Marisol Quaye · **Deck status:** No deck.
This lecture currently carries the placeholder `slides: /decks/week-01/`
frontmatter; under PLAN.md the semester's one real deck moves to Week 7, so the
`slides` field comes off this lecture when its body is written and the plan
below stands as the lecture's structure rather than as a built deck.

### Argument in one sentence

Before a single road goes down, the site has already decided most of what the
district can afford, how far people will have to travel, and how pleasant it
will be to live in — so the studio reads the ground first, and names the three
metrics it will be read against for the next twelve weeks.

### Learning outcomes

- Read a site's terrain, hydrology, wind and resource layers as separate
  overlays before proposing any development on it.
- Define fiscal performance, mobility performance and livability in the exact
  terms the studio marks against, and name where each one is read in the
  simulation.
- Locate a first settlement area on the standard map and defend the choice as a
  named tradeoff between two of the three metrics.
- Set up the semester's save discipline and the studio's standard reading
  convention, so every later week's evidence is comparable.

### Theory anchors

- **Patrick Geddes, *Cities in Evolution* (1915)** — the regional survey comes
  before the plan; diagnosis before treatment. Doing here: it supplies the
  studio's Week 1 rule and the reason the first session produces no roads.
- **Ian McHarg, *Design with Nature* (1969)** — suitability read as a stack of
  single-factor layers, each mapped separately, then overlaid to find the
  ground that resists development least. Doing here: it is the literal method
  of the site-reading exercise, and it maps one-to-one onto the info views.
- **Kevin Lynch, *The Image of the City* (1960)** — paths, edges, districts,
  nodes and landmarks as the five terms people actually use to hold a place in
  their heads. Doing here: it gives students a vocabulary for describing a site
  that has no buildings on it yet.
- **Kevin Lynch, *Good City Form* (1981)** — five performance dimensions
  (vitality, sense, fit, access, control) plus two meta-criteria (efficiency
  and justice), offered as the way to argue about city quality without
  retreating into taste. Doing here: it is the precedent for the studio having
  named metrics at all, and the honest admission that ours are blunter than
  his.
- **Henry George, *Progress and Poverty* (1879)** — the value of a location is
  produced by everything around it rather than by the owner's improvements, so
  it can be captured publicly. Doing here: it converts site reading from a
  scenic exercise into a fiscal one, and it is the thread Week 11 picks up when
  students read their own district's land-value history.

### Mechanic mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| McHarg's single-factor layers | The info views, read one at a time — natural resources, water, wind, land value, ground pollution | The same 4 km of riverbank scores differently under each overlay, and no single overlay picks the site |
| Geddes's survey before plan | The map at hour zero, with the road tool not yet opened | Fertile soil, ore and forest are already priced into the ground before any spending decision is made |
| Lynch's paths, edges, districts, nodes, landmarks | The terrain and outside connections on the standard map — the River Kerrow, the Dunthorpe interchange, the rail line entering from the east | The site has a structure before it has a plan, and the structure is legible from the map alone |
| Lynch's performance dimensions | Well-being and health readouts, the land value overlay, the economy panel's monthly balance | Three different panels are needed to answer one question about quality, which is why the studio names three metrics rather than one |
| George on location value | The land value overlay, and building level 1–5 responding to it | Land value rises around things the district paid for collectively, not around the buildings that sit on it |
| Terrain as cost | Road placement on gradient, terraforming charges, water pumping height | The same 400 m of road costs a different amount depending on which contour it crosses |

### The tradeoff of the week

**Fiscal performance against livability**, forced by where the first road goes.
The flat alluvial terrace of Halstead Reach sits 1.2 km from the Dunthorpe
interchange on a gradient under two per cent: short service runs, cheap road
upkeep, no pumping, and a district that balances its budget early. The shelf
on Verrall Ridge sits 4.1 km away up through Thackray Cut, with long views over
the basin and quiet air on the windward side: higher land value, better
well-being readings, and a per-capita servicing cost that the district carries
every month for twelve weeks. Students must site the first settlement, and the
choice cannot be deferred, because everything from Week 2 onward is built off
that first road.

### Slide plan

1. **Slide 1 — SLOP2418: Urban Design Studio** `class: impact`

   Title block:

   > **SLOP2418 — Urban Design Studio**
   > **Foundations of the Good City**
   >
   > Week 1 — Site Analysis and the Blank Map
   > Marisol Quaye · 22 February 2027

   **Notes:** Open by saying the studio produces one district per student,
   built continuously from this week to Week 12, and that today is the only
   week in which nothing is built.

2. **Slide 2 — How this studio works** `class: —`

   - One student, one save file, one district, Weeks 1 to 12.
   - Everyone builds on the same site: the standard map issued today.
   - Twelve lectures, twelve studio sessions, three assessed pin-ups with a
     jury.
   - Every submission is in-simulation screenshots and a short defence memo.
   - The software of record is Cities: Skylines II. No simulation-altering
     mods, no unlimited money, no unlock-all.

   **Notes:** Point at the studio policies page rather than reading the rules
   out; say only that the settings are not negotiable because the metrics are
   comparative and only compare across identical ground.

3. **Slide 3 — Survey before plan** `class: quote`

   > Survey before plan.
   >
   > — the working principle of Patrick Geddes, *Cities in Evolution* (1915)

   Below the rule, one line: *Today's session ends with a site report and no
   roads.*

   **Notes:** Geddes's point is not that survey is polite preparation but that
   a plan drawn before the survey is a plan of the designer's assumptions.
   Students will want to build immediately; the whole first session withholds
   the road tool.

4. **Slide 4 — What "good" has meant before** `class: —`

   Lynch's five dimensions of good city form, with the two meta-criteria, set
   as a list:

   - **vitality** — the settlement sustains the biology of its inhabitants
   - **sense** — it can be perceived and structured in the mind
   - **fit** — its spaces match the behaviours people actually perform
   - **access** — people, goods and information can reach what they need
   - **control** — those who use a space have some say over it
   - *and across all five:* **efficiency** and **justice**

   Attribution line: Kevin Lynch, *Good City Form* (1981).

   **Notes:** Say plainly that this studio uses three metrics rather than
   seven, that the reduction loses things Lynch cared about — control and
   justice most obviously — and that Week 11 is where the studio comes back to
   what the three metrics cannot see.

5. **Slide 5 — Three metrics** `class: impact`

   > **fiscal performance**
   > **mobility performance**
   > **livability**
   >
   > Every lecture. Every studio session. Every criterion on every mark sheet.

   **Notes:** These three words are used in these forms all semester, in the
   lectures and on the mark sheets, and students are expected to use them the
   same way at crit.

6. **Slide 6 — Fiscal performance** `class: —`

   **Fiscal performance** — whether the district can pay for what it has built,
   and keep paying as it grows.

   - **Read it in:** the economy panel's monthly balance; the service budget
     sliders and the per-service expenditure lines beneath them; road and
     building upkeep; outstanding loans and their repayments; the tax rates set
     per zone type and per resource.
   - **The jury asks:** what does this district cost per month at the service
     level you are claiming, who pays that, and what does the number do when
     the population you have zoned for actually arrives?

   **Notes:** Emphasise that a positive balance achieved by turning the service
   budgets down is not fiscal performance, it is a livability decision being
   hidden in the economy panel.

7. **Slide 7 — Mobility performance** `class: —`

   **Mobility performance** — whether people and goods complete their trips at
   an acceptable cost in time, at the hour the trips are actually made.

   - **Read it in:** the traffic info view's flow and volume overlays; the
     road-level traffic readout; public transport line passenger counts,
     vehicle loads and stop waiting times; the path taken by a selected citizen
     or delivery vehicle when you follow it.
   - **The jury asks:** for one named origin and one named destination in your
     district, how long is that trip at the morning peak, by which mode, and
     what is the second-best mode when the first one is full?

   **Notes:** The phrase "at the hour the trips are actually made" is doing the
   work here — an empty road at 02:00 is not evidence, and Idris Fenn will
   spend Week 6 proving it.

8. **Slide 8 — Livability** `class: —`

   **Livability** — whether the place is worth being in for the people already
   there, independent of how many more arrive.

   - **Read it in:** citizen well-being and health figures; the happiness
     readout on individual buildings; the land value overlay; the service
     coverage overlays — health, education, parks, police, fire, garbage,
     mail; and the four pollution overlays — ground, air, noise and water.
   - **The jury asks:** name the worst-served block in your district, say what
     it is short of, and say what you chose to spend the money on instead.

   **Notes:** Livability is the metric students most often argue for with
   adjectives. The definition is deliberately written so that the answer is a
   block, a shortfall and a decision, not an impression.

9. **Slide 9 — How the three are read, and where they are marked** `class: —`

   Standing conventions, then the mark weights.

   - All three are read **over time**, not at a moment. A screenshot is
     evidence of a state; the studio marks a trend.
   - Take every reading at the same in-game hour. The studio convention is
     **08:00**, and the memo says which hour the reading was taken at.
   - Where two metrics conflict, name which one you traded and why. A plan that
     claims all three has not been read carefully.

   | Assessment | Due | Weight | fiscal | mobility | livability |
   | --- | --- | --- | --- | --- | --- |
   | 1. Neighbourhood Unit Plan | Week 4 | 25% | 30 | 30 | 40 |
   | 2. Public Realm & Infrastructure Plan | Week 9 | 25% | 30 | 25 | 45 |
   | 3. Comprehensive City Plan | Week 12 | 50% | holistic | holistic | holistic |

   **Notes:** Point out that no assessment weights any metric below 25, so
   there is no assessment in which one of the three can be abandoned — only
   ones in which it can be knowingly traded down.

10. **Slide 10 — McHarg's layers, and where they live** `class: —`

    | McHarg layer | Read it in | What it constrains |
    | --- | --- | --- |
    | Slope and drainage | Terrain and contour display, water info view | Road cost, pipe gradient, what can be zoned at all |
    | Surface hydrology | Water info view, river flow direction | Where the intake goes, and where the outflow cannot |
    | Prevailing wind | Wind info view | Which ground is downwind of which |
    | Soils and extractives | Natural resources info view — fertile land, ore, forest, oil | What building on the ground forfeits |
    | Existing access | Outside connections — highway, rail, ship, air | The first cost of reaching the site at all |

    **Notes:** McHarg's method is one layer at a time and then the overlay; the
    common student failure is opening the land value view first and treating it
    as a survey, when at hour zero it is almost flat.

11. **Slide 11 — The site: Kerrow Basin** `class: —`

    Diagram, described for the deck writer. A plan view of the standard map,
    roughly square, drawn as flat two-ink risograph.

    - **Gold:** everything the site gives you — the River Kerrow entering
      north-west and leaving south-east as a broad gold band; the contour
      shading of Verrall Ridge as a gold halftone mass on the south-west bank;
      fertile soil on the terrace as a light gold stipple; a gold arrow at the
      top-left corner labelled **prevailing wind, WNW**.
    - **Black:** everything already built or connected — the highway entering
      at the north edge to the **Dunthorpe interchange**; the rail line
      entering from the east and running along the terrace; the map boundary;
      all labels.
    - **Labelled in black:** *Halstead Reach* (the terrace, north-east bank,
      about 4 km by 2 km, gradient under 2%); *Verrall Ridge* (south-west,
      rising about 90 m over 1.5 km, ore in the flank); *Ombersley Flats*
      (south-east, low, downstream and downwind, partly floodable);
      *Thackray Cut* (the gap through the ridge); *Dunthorpe interchange*
      (north edge).
    - A small scale bar in black, 1 km.

    **Notes:** Establish the ink convention here and keep it all semester: gold
    is what the site gives you, black is what somebody drew. Students should
    be able to name all five features without looking at the slide by the end
    of the session.

12. **Slide 12 — Kerrow Basin in Lynch's five terms** `class: —`

    | Lynch term | On this site |
    | --- | --- |
    | Path | The highway spur south from Dunthorpe; the rail line along the terrace |
    | Edge | The River Kerrow; the break of slope at the foot of Verrall Ridge |
    | District | Halstead Reach, Verrall Ridge, Ombersley Flats |
    | Node | Dunthorpe interchange; Thackray Cut, where every westward route must pass |
    | Landmark | The ridge crest itself, visible from every part of the basin floor |

    **Notes:** The point of the exercise is that the site is already legible in
    Lynch's terms with nothing built on it, which is why the first plan should
    work with that structure rather than against it.

13. **Slide 13 — Four places the first road could go** `class: —`

    | Ground | Fiscal read | Mobility read | Livability read |
    | --- | --- | --- | --- |
    | Halstead Reach | Cheapest to build and service; forfeits fertile soil under everything you zone | 1.2 km to Dunthorpe; rail already alongside | Flat, unremarkable, upwind of nothing and downwind of nothing |
    | Verrall Ridge shelf | 4.1 km of road including the climb; water pumped uphill; ore sterilised under any housing | Every trip runs through Thackray Cut | Long views, quiet air, the highest land-value ceiling on the map |
    | Ombersley Flats | Cheap ground, flood exposure, remote from the interchange | Longest haul to every outside connection | Downwind and downstream of the whole basin |
    | Thackray Cut | Not a settlement; a piece of infrastructure with a price | The only westward crossing of the ridge | Nothing lives there |

    **Notes:** Ombersley Flats and Thackray Cut are on the slide to be
    eliminated as settlement, not chosen — but hold onto both, because Week 3
    sites industry and Week 5 puts a corridor through the Cut.

14. **Slide 14 — The tradeoff of the week** `class: banner`

    > **Halstead Reach buys fiscal performance. Verrall Ridge buys
    > livability. There is no version of this map on which one road buys
    > both.**

    Underneath, the arithmetic in three lines:

    - Reach: about 1.2 km of new road to the interchange, no lift on the water
      network, service coverage from a single point reaching most of the first
      settlement.
    - Ridge: about 4.1 km of new road on gradient, water lifted roughly 90 m,
      two service points to cover the same population.
    - Both numbers are monthly, and both appear in the economy panel from the
      first month, not at the end of the semester.

    **Notes:** This is the slide the whole lecture exists to deliver. Say
    explicitly that either answer is defensible and that the indefensible
    answer is the one given without the arithmetic.

15. **Slide 15 — The value was in the ground first** `class: quote`

    > The value of land is created by the community, not by the owner of it.
    >
    > — the argument of Henry George, *Progress and Poverty* (1879)

    Two lines under the quote:

    - Land value on this map rises around the things the district paid for
      collectively — the roads, the services, the parks — and not around the
      buildings sitting on it.
    - So a site decision is a revenue decision, and it is made in Week 1
      whether or not it is noticed in Week 1.

    **Notes:** Flag that Week 11 asks students to read their own district's
    land-value history from Week 1 forward, which only works if the weekly
    saves exist. This is the reason the save discipline is not administrative
    tidiness.

16. **Slide 16 — Before Tuesday** `class: —`

    - Load the standard map. Do not regenerate it. Do not open the road tool.
    - Produce a one-page site report: the five McHarg layers, one screenshot
      each, and one sentence per layer on what it rules out.
    - Name your first settlement area and state the tradeoff you are making in
      the form used on Slide 14 — which metric you bought, which you paid with.
    - Save as `<student ID>-w01` and put a copy somewhere that is not the
      machine you built it on.
    - Desk crits Tuesdays 13:00–16:00, Studio 2.14.

    **Notes:** The site report is not marked, and it is the document Assessment
    1 will be read against in Week 4, so the ones written carelessly cost their
    authors in three weeks rather than this one.

### Studio session hand-off

- Students arrive at Session 1 with Cities: Skylines II installed and the
  standard map loaded, on the settings named in the session brief, and with no
  roads placed.
- The session runs the McHarg overlay exercise live: five info views in a fixed
  order — natural resources, water, wind, terrain, outside connections — with
  the road tool deliberately unavailable until the last hour.
- The session closes by setting the save convention (`<student ID>-w<NN>`, one
  per week, one off-machine copy) and by having each student state their
  settlement choice and its named tradeoff aloud, in one sentence.
- Nobody leaves without the 08:00 reading convention written down, because
  every later week's evidence depends on the readings being comparable.

### Assessment hooks

Feeds **Assessment 1, the Neighbourhood Unit Plan** (Week 4, 25%) directly: the
settlement area chosen this week is the ground that plan sits on, and the
site report is the evidence the defence memo will cite when it explains why the
unit is where it is. More broadly, this lecture defines the three criteria that
every assessment in the studio is marked against, so its definitions are
loadbearing for all three. Nothing is submitted this week.

### Open questions for the writer

- Whether the standard map's numbers on Slide 13 (1.2 km, 4.1 km, 90 m, the
  four-by-two-kilometre terrace) are fixed as canon here or left as
  approximations for the session to measure live — later weeks will quote them,
  so they should be settled once and then not moved.
- Whether Slide 9's mark-weight table belongs in the lecture at all, or whether
  the lecture should point at the assessment pages and keep the slide for the
  reading conventions alone.
- Whether the studio's 08:00 reading convention should be stated as a rule here
  or introduced by Idris Fenn in Week 2, where the peak-hour argument makes the
  reason for it obvious.

---

## Week 2 — The Grid vs. the Organic Street

**Date:** 2027-03-01 · **Lecturer:** Idris Fenn · **Deck status:** No deck.

### Argument in one sentence

The dimension of a block is not a drawing preference but a network decision:
it sets how many routes exist between any two points and how many kilometres
of road the district pays upkeep on every month, and those two numbers move in
opposite directions.

### Learning outcomes

- Distinguish the orthogonal grid, the medieval or organic street pattern and
  the Radburn superblock by what each does to route choice, not by how each
  looks in plan.
- Calculate lane-kilometres per dwelling for a proposed block layout and locate
  the resulting figure in the economy panel's road upkeep line.
- Demonstrate route redundancy by closing one link in a proposed network and
  observing where the traffic goes.
- State the week's block-dimension decision as an explicit trade between
  mobility performance and fiscal performance.

### Theory anchors

- **Hippodamus of Miletus, 5th century BCE, reported in Aristotle's
  *Politics*, Book II** — the orthogonal plan as an instrument of equal
  division and legible administration, applied at Miletus and Piraeus. Doing
  here: it establishes that the grid was an argument about governance long
  before it was an argument about traffic, which is why it keeps being
  redrawn.
- **Jane Jacobs, *The Death and Life of Great American Cities* (1961)** —
  the second of her four conditions for diversity: "Most blocks must be short;
  that is, streets and opportunities to turn corners must be frequent." Doing
  here: it is the strongest available case for the fine grid, and it is made on
  livability grounds rather than traffic grounds.
- **Clarence Stein and Henry Wright, the Radburn plan (1929)** — the
  superblock, the cul-de-sac, the continuous interior park and the pedestrian
  underpass, proposed as a settlement pattern for the motor age. Doing here: it
  is the fully worked counter-proposal to the grid, and its costs are the
  week's teaching material.
- **Christopher Alexander, "A City is Not a Tree" (1965)** — the difference
  between a tree, in which no two branches overlap, and a semilattice, in which
  sets overlap freely; planned settlements tend to be trees and living ones are
  semilattices. Doing here: it names precisely what a hierarchical road
  classification does to a network, and it is the diagram the whole lecture
  turns on.
- **Bill Hillier and Julienne Hanson, *The Social Logic of Space* (1984)** —
  space syntax: the configuration of a street network, rather than land use,
  predicts a great deal of where movement occurs. Doing here: it is the reason
  the studio measures a layout before it zones anything into it.

### Mechanic mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Hippodamian equal division | The road tool's grid mode and its snapping increments | The block dimension chosen once at the start propagates across the whole quarter, because the tool makes repeating it cheaper than varying it |
| Jacobs on short blocks | Zoning cell depth against road frontage | Short blocks put almost every cell on a frontage; long blocks leave a dead core the zoning tool cannot reach |
| Radburn's superblock and cul-de-sac | Road hierarchy — small road, medium road, arterial — and the traffic AI's pathfinding cost | Every trip from a cul-de-sac is forced onto one collector, and the collector's mouth is where the queue forms |
| Alexander's tree versus semilattice | Following a single citizen's chosen path, and the lane-selection behaviour approaching a junction | In a tree there is one path and the vehicle takes it; in a semilattice the same origin and destination produce different paths at different hours |
| Space syntax integration | The traffic info view's volume overlay on an unzoned network | Volume concentrates on the most connected links before land use has been assigned at all |
| Network cost | Road upkeep in the economy panel, charged by length | Two layouts housing the same population differ in the monthly upkeep line, and the difference is permanent |

### The tradeoff of the week

**Mobility performance against fiscal performance**, forced by the block
dimension chosen for the first residential quarter on Halstead Reach. A fine
grid at roughly 80 m spacing gives four or more routes between most pairs of
points, so a single blocked link redistributes rather than fails — and it does
that by laying down close to double the road length per dwelling of a
superblock layout, every metre of which appears in the road upkeep line every
month for the rest of the semester. A superblock at roughly 240 m spacing halves
the upkeep and concentrates every trip onto three collector mouths. Students
choose a dimension this week, and Week 6's peak-load stress test is run against
whatever they chose.

### Slide plan

1. **Slide 1 — The Grid vs. the Organic Street** `class: impact`

   > **Week 2 — The Grid vs. the Organic Street**
   >
   > SLOP2418 Urban Design Studio
   > Idris Fenn · 1 March 2027

   **Notes:** Open by saying that the first network anybody draws is a diagram
   of their assumptions rather than a plan, and that this week is about finding
   out which assumption is expensive.

2. **Slide 2 — One question, three answers** `class: —`

   The question: **how far apart should two parallel streets be?**

   - Hippodamus, at Miletus: regular, equal, and the same everywhere.
   - The medieval street: whatever the ground, the boundary and the traffic of
     the day produced, adjusted incrementally.
   - Stein and Wright, at Radburn: far enough apart that the interior can be
     given over to people on foot.

   One line beneath: *Every one of those three is a defensible answer, and each
   one costs something different.*

   **Notes:** Insist that this is a single question with a numeric answer, not
   a stylistic choice, because students who treat it as style will not measure
   the result.

3. **Slide 3 — The grid was an argument about government** `class: —`

   - Hippodamus laid out Miletus and Piraeus on an orthogonal plan in the fifth
     century BCE; Aristotle discusses his scheme in *Politics*, Book II.
   - The grid's first virtue was equal division: identical plots, allocable
     without dispute, describable without a map.
   - Its second was legibility to an administrator who had never been there.
   - Traffic was not the argument. Traffic became the argument two and a half
     thousand years later, and the shape did not change.

   **Notes:** The historical point matters because students assume the grid is
   a traffic solution and then feel betrayed when it produces intersections.

4. **Slide 4 — Jacobs, on short blocks** `class: quote`

   > Most blocks must be short; that is, streets and opportunities to turn
   > corners must be frequent.
   >
   > — Jane Jacobs, *The Death and Life of Great American Cities* (1961)

   One line beneath: *Her argument is about who walks past whose front door.
   Ours will be about how many routes exist. They are the same measurement.*

   **Notes:** Jacobs makes the case for the fine grid on livability grounds;
   this lecture takes the same geometry and reads it as a network. Note that
   the two readings agree here and will not always.

5. **Slide 5 — Radburn: the superblock** `class: —`

   Diagram, described for the deck writer. A single superblock in plan, drawn
   flat two-ink.

   - **Black:** the perimeter collector roads, forming a closed ring; four
     cul-de-sac stubs pushed inward from the ring, each terminating in a
     turning head; the dwellings drawn as small solid blocks addressing the
     cul-de-sacs.
   - **Gold:** the continuous interior open space running the full length of
     the block; the pedestrian route through it, drawn as a gold line passing
     *under* the collector at one point, labelled **underpass**; the gold route
     connects to the adjacent superblock's interior.
   - **Labels, black:** *collector*, *cul-de-sac*, *turning head*, *interior
     park*, *underpass*.

   Caption line: Stein and Wright, Radburn (1929) — dwellings face the park,
   service the road.

   **Notes:** The Radburn plan is a complete and serious proposal, not a straw
   man: it solves the pedestrian problem outright. Its cost is that the gold
   network and the black network no longer share a geometry, so every vehicle
   trip is funnelled.

6. **Slide 6 — A city is not a tree** `class: —`

   Diagram, described for the deck writer. Two node-and-link figures side by
   side, same number of nodes in each.

   - **Left, labelled *tree*:** one root node at the top, branching twice to
     four leaves, no link between branches. Drawn in black. Caption: *one path
     between any two leaves.*
   - **Right, labelled *semilattice*:** the same eight nodes, but with gold
     cross-links added between branches at two levels, so several pairs of
     nodes have three or more connecting paths. Tree links black, added
     cross-links gold. Caption: *many, and they overlap.*

   Attribution line: Christopher Alexander, "A City is Not a Tree" (1965).

   **Notes:** Say the crucial thing directly — a road hierarchy of arterial,
   collector and local street is a tree, and the traffic AI on a tree has no
   second option to find. The gold links are the entire subject of the rest of
   the lecture.

7. **Slide 7 — Configuration predicts movement** `class: —`

   - Hillier and Hanson's space syntax measures a network's configuration —
     how connected each link is to every other — and finds that configuration
     alone predicts a large share of observed movement.
   - The implication for this studio: a layout can be evaluated **before**
     anything is zoned into it.
   - The test: place the network, place nothing else, run the simulation, and
     read the traffic volume overlay. Volume will already be uneven.

   **Notes:** This is the week's methodological gift — students can test a
   layout in ten minutes without committing to a land use, and most of them
   will not think to.

8. **Slide 8 — The three patterns at the same scale** `class: —`

   Diagram, described for the deck writer. Three plan fragments in a row, each
   covering an identical 480 m by 480 m square of Halstead Reach, drawn flat
   two-ink. The 480 m square boundary in gold on all three; the roads in black.

   - **A — fine grid.** Streets at roughly 80 m spacing both ways: a six by six
     arrangement, 36 blocks, many four-way junctions.
   - **B — organic.** Two curving through-routes following the terrace's
     contour, with irregular connecting lanes hung off them; blocks of varying
     size and shape; mostly three-way junctions.
   - **C — superblock.** A single perimeter ring at roughly 240 m spacing with
     cul-de-sac stubs inward; four blocks; three connections to the outside.

   Under each fragment, one gold figure: **A — 36 blocks · B — 11 blocks ·
   C — 4 blocks.**

   **Notes:** Hold on this slide. Ask the room which one they would draw, take
   two or three answers, and do not comment on them until Slide 12.

9. **Slide 9 — What the road tool actually gives you** `class: —`

   - Straight, curved and grid modes, with snapping increments that make a
     regular layout faster to draw than an irregular one.
   - Road types with different widths, capacities and upkeep costs per unit
     length — small road through to arterial.
   - Elevation and gradient limits, which the terrace tolerates and Verrall
     Ridge does not.
   - Zoning cells attach to road frontage to a limited depth, so **frontage is
     the resource the road network is producing**.

   **Notes:** The last bullet is the one to labour. Road length is not overhead
   attached to the dwellings; road length is what makes the dwellings possible,
   which is exactly why the tradeoff is not obvious.

10. **Slide 10 — Lane-kilometres per dwelling** `class: —`

    All three layouts on the same 480 m by 480 m square of Halstead Reach, all
    zoned low-density residential to the same depth.

    | Layout | Road length in the square | Dwellings reachable | Road metres per dwelling | Monthly upkeep, relative |
    | --- | --- | --- | --- | --- |
    | A — fine grid, 80 m | ~5.8 km | high | lowest per dwelling on frontage, highest per hectare | 1.00 |
    | B — organic, contour-led | ~3.4 km | moderate | moderate | 0.59 |
    | C — superblock, 240 m | ~2.4 km | moderate, with a dead core | high, because the core cannot be zoned | 0.41 |

    One line beneath: *The upkeep column is charged every month. The layout is
    drawn once.*

    **Notes:** Make students derive the last column themselves from the road
    upkeep line in the economy panel rather than trusting the table. The
    figures here are the shape of the answer, not the answer.

11. **Slide 11 — Close one link** `class: —`

    The redundancy test, stated as a procedure students run on Tuesday:

    1. Build the layout. Zone nothing.
    2. Open the traffic info view and note volume on every link at 08:00.
    3. Delete one link — the busiest one.
    4. Read the volume overlay again at 08:00 the following day.

    | Layout | Where the traffic goes | What the overlay shows |
    | --- | --- | --- |
    | A — fine grid | Redistributes across three or four parallel routes | Volume rises modestly on several links |
    | B — organic | Redistributes onto the other through-route | Volume rises sharply on one link |
    | C — superblock | Nowhere. The trips that used it are re-routed to the remaining collector mouths | A queue forms and does not clear |

    **Notes:** This is Alexander's diagram made operational. A tree has no
    redundancy, and redundancy is the only thing that makes a network robust to
    a decision you make in Week 8 without thinking about Week 2.

12. **Slide 12 — The tradeoff of the week** `class: banner`

    > **Route redundancy is bought with road length. Road length is charged
    > monthly. The fine grid buys mobility performance and pays for it in
    > fiscal performance.**

    Three lines beneath:

    - The grid gives four routes and 5.8 km of upkeep per square.
    - The superblock gives one route and 2.4 km of upkeep per square.
    - Neither number improves later. Choose the dimension this week and live
      with it until Week 12.

    **Notes:** State that both answers have been defended successfully at this
    studio's juries and that the failing answer is the one where the student
    drew a grid because grids look like plans.

13. **Slide 13 — Where livability sits in this** `class: —`

    - The grid's cost is not only fiscal. A grid with no hierarchy invites
      through-traffic onto residential frontage, and noise pollution lands on
      the dwellings that face it.
    - Read it in the noise pollution overlay, then read the land value overlay
      over the same blocks and watch the two figures move against each other.
    - Radburn's answer was to separate the two networks entirely. Jacobs's
      answer was that the street traffic is the point.
    - Both answers are on the table in this studio. Week 9 is where the public
      realm consequences of this week's choice are finally marked.

    **Notes:** Livability is the third metric in this week's decision and it is
    deliberately not the headline trade, because students who lead with it stop
    measuring. Name it, place it, move on.

14. **Slide 14 — Before Tuesday** `class: —`

    - Lay out the first residential quarter of your settlement area at one
      chosen block dimension, stated in metres in your notes.
    - Zone nothing yet. Run the layout unzoned and screenshot the traffic
      volume overlay at 08:00.
    - Run the close-one-link test and bring the before-and-after volume
      readings. Bring the numbers, not a description of the numbers.
    - Bring the road upkeep figure from the economy panel, and the road metres
      per dwelling you have derived from it.
    - Save as `<student ID>-w02`, off-machine copy as usual. Studio Wednesdays
      and Fridays, 10:00–13:00.

    **Notes:** The before-and-after numbers are non-negotiable at the desk
    crit; a student who arrives with a one-way conversion as a fix and no
    figures will be sent to get the figures.

### Studio session hand-off

- Students arrive with the Week 1 save, a settlement area already chosen, and
  no roads beyond whatever connects the site to the Dunthorpe interchange.
- Session 2 is the first review: each student shows the unzoned layout and the
  traffic volume overlay at 08:00, in under two minutes, and names the one
  decision they are least sure about.
- The session assumes the traffic info view is open and understood, and that
  the economy panel's road upkeep line has been found — both are prerequisites
  rather than session content.
- Students leave having committed to a block dimension in metres. Week 3 zones
  into that layout and cannot begin until it exists.

### Assessment hooks

Feeds **Assessment 1, the Neighbourhood Unit Plan** (Week 4, 25%), where the
mobility criterion at 30 marks is read directly off the block structure laid
down this week, and the fiscal criterion at 30 marks is read off the upkeep it
generates. Also builds toward Week 6's unweighted peak-load stress test, which
is run against this layout — a network with no redundancy fails that test for a
decision made in Week 2.

### Open questions for the writer

- Whether the three layout fragments on Slide 8 should be drawn on the same
  named piece of Halstead Reach as the Week 3 zoning schemes, so the two
  lectures share one worked fragment, or kept generic.
- Whether the Slide 10 figures are given to students or withheld so the studio
  session derives them — withholding is better pedagogy and risks a session
  where nobody gets to the redundancy test.
- Whether the noise-and-land-value pairing on Slide 13 is developed here or
  held entirely for Week 3, which has the pollution overlays as its main
  business.

---

## Week 3 — Zoning and the Myth of Separation

**Date:** 2027-03-08 · **Lecturer:** Marisol Quaye · **Deck status:** No deck.

### Argument in one sentence

Use separation was invented to solve a real problem — industrial nuisance
landing on housing — and it solves that problem completely, at the price of
making every trip in the district longer, so the zoning scheme students choose
this week is a decision about which of those two costs they would rather carry.

### Learning outcomes

- Trace use-based zoning from a public-health response to a legal instrument to
  a default habit, naming the four sources that mark the turns.
- Distinguish what separation actually prevents from what it is assumed to
  prevent, using the pollution overlays as the test.
- Produce two zoning schemes for the same block layout and compare them on
  commute distance and on ground, air and noise pollution exposure.
- State the zoning decision as an explicit trade between livability and
  mobility performance, with figures from both overlays.

### Theory anchors

- **Ebenezer Howard, *To-morrow: A Peaceful Path to Real Reform* (1898),
  reissued as *Garden Cities of To-morrow* (1902)** — the garden city's
  concentric arrangement, with industry on the outer ring and housing held
  clear of it. Doing here: it establishes that separation began as a
  public-health measure against smoke and effluent, at a time when that was the
  correct diagnosis.
- ***Village of Euclid v. Ambler Realty Co.*, 272 U.S. 365 (1926)** — the
  United States Supreme Court upheld comprehensive use zoning as a valid
  exercise of the police power; Justice Sutherland's opinion contains the line
  that "a nuisance may be merely a right thing in the wrong place, like a pig
  in the parlor instead of the barnyard." Doing here: it is the moment
  separation stops being a proposal and becomes an instrument with law behind
  it, and it gives the lecture its central pull-quote.
- **Clarence Perry, "The Neighborhood Unit", in the *Regional Survey of New
  York and Its Environs*, Vol. VII (1929)** — a residential cell sized to one
  elementary school's catchment, about a quarter-mile radius, with arterials at
  the edges rather than through it and shops at the corners. Doing here: it is
  the direct ancestor of Assessment 1, which is named after it, and it shows
  separation applied at the scale students are about to work at.
- **Jane Jacobs, *The Death and Life of Great American Cities* (1961)** — the
  first condition for diversity: a district must serve more than one primary
  function, so that people using it on different schedules are present at
  different hours. Doing here: it is the case against separation, made on
  grounds separation's defenders were not measuring.
- **Andrés Duany, Elizabeth Plater-Zyberk and Jeff Speck, *Suburban Nation*
  (2000)** — the argument for regulating built form rather than use, and the
  form-based codes that followed. Doing here: it is the live alternative the
  studio actually has available, and it sets up the question of what a code
  should control.

### Mechanic mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Euclidean use districts | The zoning palette — residential by density, mixed housing, row housing, low and high density commercial, industry, office — painted onto road frontage | The palette is itself a use-based code; there is no cell you can paint that does not name a use |
| Howard's nuisance ring | Ground, air, water and noise pollution overlays, and industry's ground pollution footprint | Industry's pollution has a radius, and the radius is smaller than students expect and does not respect the zoning boundary |
| Prevailing wind and river flow | The wind info view, WNW on this map; the Kerrow flowing north-west to south-east | Air pollution from Ombersley Flats leaves the map; the same industry sited upwind of Halstead Reach does not |
| Perry's quarter-mile cell | Service coverage areas and their falloff with distance; the district painting tool for scoping policy and tax | One well-placed elementary school covers most of a Perry-sized cell, and covers very little of a dispersed one |
| Jacobs on mixed primary uses | Commercial demand, and the distance a citizen will path to reach a shop before the commercial building fails | Separated commercial that is too far away shows up as an abandoned building, not as a long trip |
| Separation as trip generation | The traffic volume overlay on the collector serving the residential quarter at 08:00 | Every trip a resident makes to work or to a shop crosses the same one or two links, because the code left them nowhere else to go |

### The tradeoff of the week

**Livability against mobility performance**, forced by where Halstead Reach's
industry goes. Sited on Ombersley Flats — downwind under a WNW prevailing wind
and downstream on the Kerrow — the industrial area's ground, air and water
pollution leave the map instead of landing on housing, and the residential
quarter's land value and well-being readings hold. It also sits about 3.2 km
from the nearest dwelling, across the river, so the district buys a bridge and
every worker and every freight movement makes that crossing twice a day on the
one link that exists. Sited on the eastern edge of the Reach instead, the
commute falls to under a kilometre with no crossing, and the ground pollution
overlay puts a measurable footprint on the blocks students zoned last week.
Both schemes are buildable this week. Only one of them can be defended without
naming what it cost.

### Slide plan

1. **Slide 1 — Zoning and the Myth of Separation** `class: impact`

   > **Week 3 — Zoning and the Myth of Separation**
   >
   > SLOP2418 Urban Design Studio
   > Marisol Quaye · 8 March 2027

   **Notes:** Open by saying that separation is the single most successful idea
   in the history of planning practice, that it worked, and that this lecture
   is about the bill.

2. **Slide 2 — The question this week** `class: —`

   You have a block layout. You now have to say what goes in it.

   - Every cell you paint names a use. There is no neutral option in the
     palette.
   - Separating uses removes a nuisance and adds a distance.
   - Mixing uses removes the distance and returns the nuisance.
   - The question is not which is correct. It is which cost your district is
     better able to carry.

   **Notes:** Establish immediately that this is a tradeoff lecture and not an
   advocacy lecture, because the mixed-use position has become the default
   student answer and it is being given without arithmetic.

3. **Slide 3 — 1898: separation as public health** `class: —`

   - Howard's garden city arranged uses in concentric rings, with the factories
     on the outer ring and the housing held clear of them.
   - The diagnosis was correct for the conditions: coal smoke, untreated
     effluent, and no mechanism to control either at source.
   - Separation was not, at that point, a preference about neighbourhood
     character. It was a way of not dying.
   - Attribution: Ebenezer Howard, *To-morrow: A Peaceful Path to Real Reform*
     (1898).

   **Notes:** Students who arrive already convinced that separation is a
   mistake need to hear this first, or the rest of the lecture reads as
   confirmation rather than as argument.

4. **Slide 4 — 1926: separation becomes law** `class: quote`

   > A nuisance may be merely a right thing in the wrong place, like a pig in
   > the parlor instead of the barnyard.
   >
   > — Justice Sutherland, *Village of Euclid v. Ambler Realty Co.*,
   > 272 U.S. 365 (1926)

   One line beneath: *The court upheld comprehensive use zoning as a valid
   exercise of the police power. Almost every zoning code written since is a
   descendant.*

   **Notes:** The quotation is worth reading aloud twice. It contains the whole
   doctrine: nothing is wrong in itself, only misplaced — which is an argument
   about location and therefore, unavoidably, an argument about distance.

5. **Slide 5 — What the Euclidean code actually did** `class: —`

   The classic arrangement, set as a descending list, most protected at the
   top:

   | District | Permits | Excludes |
   | --- | --- | --- |
   | U-1 residential | Single dwellings | Everything below |
   | U-2 residential | Dwellings, two-family | Commerce and industry |
   | U-3 commercial | Shops, offices, and the above | Industry |
   | U-4 light industry | Light manufacture, and the above | Heavy industry |
   | U-5 heavy industry | Everything | Nothing |

   One line beneath: *The code is a pyramid. Protection accumulates upward, and
   so does distance from work.*

   **Notes:** Point out that the cumulative structure means the most protected
   district is also the furthest from everything, and that this was a feature
   rather than an oversight.

6. **Slide 6 — 1929: separation at neighbourhood scale** `class: —`

   Diagram, described for the deck writer. Perry's neighbourhood unit in plan,
   flat two-ink.

   - **Black:** the four arterial roads forming the boundary of the cell, drawn
     heavy; the internal street pattern drawn light, and deliberately not
     continuous with the arterials — no through route crosses the cell.
   - **Gold:** a circle of quarter-mile radius centred on the cell; the school
     and its open space at the centre, as a solid gold block; four small gold
     squares at the corners of the cell, labelled *shops*.
   - **Labels, black:** *arterial — traffic goes around*, *quarter-mile
     radius*, *elementary school at the centre*, *shops at the corners, where
     two units meet*.

   Attribution line: Clarence Perry, "The Neighborhood Unit", *Regional Survey
   of New York and Its Environs*, Vol. VII (1929).

   **Notes:** Say plainly that Assessment 1 is called the Neighbourhood Unit
   Plan after this diagram, that Week 4 develops it, and that students are not
   required to agree with it — only to know what they are departing from.

7. **Slide 7 — 1961: the case against** `class: —`

   - Jacobs's first condition for diversity: a district must serve more than
     one primary function, so that people on different schedules are present at
     different hours.
   - A district with one function has one schedule. It is full for two hours
     and empty for twenty-two.
   - The consequences she names are livability consequences — surveillance of
     the street, the viability of small enterprise, whether anybody is about at
     nine in the evening.
   - Attribution: Jane Jacobs, *The Death and Life of Great American Cities*
     (1961).

   **Notes:** Connect to the day/night cycle: the simulation is one of the few
   places students can actually watch a single-use district empty, and they
   should watch it rather than take Jacobs's word for it.

8. **Slide 8 — 2000: regulate form, not use** `class: —`

   - Duany, Plater-Zyberk and Speck argue that codes should control what a
     building does to the street — height, setback, frontage, parking
     placement — and leave what happens inside it largely alone.
   - The claim is that most of what separation was protecting was really form,
     and that use was a crude proxy for it.
   - The claim's limit: form-based codes are weakest exactly where separation
     was strongest, which is airborne and waterborne nuisance.
   - Attribution: *Suburban Nation* (2000).

   **Notes:** This is the slide that stops the lecture becoming a straight
   anti-zoning argument. Form-based codes do not answer the pollution question,
   and this map has a pollution question.

9. **Slide 9 — A hundred and two years, in one line** `class: banner`

   > **1898 keep the smoke away · 1926 and here is the law · 1929 and here is
   > the neighbourhood · 1961 but nobody is on the street · 2000 so regulate
   > the building, not the business**

   **Notes:** Use this as the pivot. Everything before it is history;
   everything after it is Halstead Reach.

10. **Slide 10 — The palette you actually have** `class: —`

    - Residential by density — low, medium, high — plus row housing and mixed
      housing, which puts commerce beneath dwellings in one cell.
    - Commercial, low and high density. Office. Industry.
    - Cells attach to road frontage to a limited depth, so the block layout
      chosen in Week 2 has already decided how much of each you can paint.
    - Districts are painted over the top, and scope tax rates and policies to
      an area rather than to a use.

    One line beneath: *This is a use-based code with one mixed-use exception.
    Euclid would recognise it.*

    **Notes:** The observation that the tool ships a use-based code is worth
    dwelling on — students inherit a doctrine along with the software, and the
    mixed housing cell is the only place the code lets them out of it.

11. **Slide 11 — Two schemes for Halstead Reach** `class: —`

    Both schemes use the same block layout and house the same population.

    | | Scheme A — separated | Scheme B — adjacent |
    | --- | --- | --- |
    | Residential | The terrace, north of the rail line | The terrace, north of the rail line |
    | Commercial | One strip on the collector, at the quarter's edge | Mixed housing on the two main frontages, plus corner cells |
    | Industry | Ombersley Flats, 3.2 km south-east, across the Kerrow | Eastern edge of the Reach, 0.8 km from the nearest dwelling |
    | New infrastructure required | One river crossing, one arterial to it | None beyond the quarter's own streets |
    | Home-to-work trip, typical | 3.2 km, one crossing, one route | 0.8 km, several routes |
    | Pollution exposure at dwellings | Effectively none — downwind, downstream | Measurable ground and air footprint on the eastern blocks |

    **Notes:** Do not indicate a preference. Both schemes get built in the
    studio session and both get read on the overlays, and the room will
    discover the answer is not unanimous.

12. **Slide 12 — Where the pollution goes** `class: —`

    Diagram, described for the deck writer. The Kerrow Basin plan from Week 1,
    reduced, with two pollution plumes drawn on it.

    - **Gold, as in Week 1:** the river, the ridge mass, the WNW wind arrow at
      the top-left corner.
    - **Black:** the built area of Halstead Reach on the terrace; the two
      candidate industrial sites drawn as hatched rectangles, labelled
      *Ombersley Flats* and *Reach, eastern edge*.
    - **The plumes, gold halftone:** from Ombersley Flats, a plume elongated to
      the east-south-east that clears the map boundary and touches no housing;
      from the eastern edge site, a plume of the same size and shape that
      overlaps the eastern third of the residential blocks.
    - **A second gold line:** the river, with a small marker downstream of each
      site labelled *water pollution leaves here*.

    **Notes:** The two plumes are deliberately identical in size — the
    difference is entirely siting relative to wind and flow, not the amount of
    industry. That is the whole content of Howard's ring, drawn on this map.

13. **Slide 13 — Where the trips go** `class: —`

    The same two schemes, read on the traffic volume overlay at 08:00.

    | | Scheme A — separated | Scheme B — adjacent |
    | --- | --- | --- |
    | Work trips crossing the collector mouth | All of them | About a third |
    | Routes available for the work trip | One, via the crossing | Three or more, depending on Week 2's block dimension |
    | Peak volume on the busiest link | High and concentrated in two windows | Lower and spread |
    | What fails first | The crossing | Nothing yet; Week 6 will find it |
    | Fixable later by | Transit — Week 5 | Not obviously anything |

    **Notes:** Row four is the honest one. Scheme A has a named failure point
    that Week 5 can address with a transit line; Scheme B's costs are diffuse
    and land on livability, where they are harder to buy back.

14. **Slide 14 — The tradeoff of the week** `class: banner`

    > **Separation buys livability with mobility performance. Every metre you
    > put between the housing and the work is a metre somebody walks, drives or
    > rides, twice a day, for the rest of the semester.**

    Three lines beneath:

    - Scheme A: no pollution at the dwellings, 3.2 km and one crossing.
    - Scheme B: 0.8 km and several routes, a measurable footprint on the
      eastern blocks.
    - The memo names which you chose, what it cost, and what you intend to do
      about the cost.

    **Notes:** This is the slide the lecture exists to deliver. Say that the
    jury has heard both defended well and that the answer it will not accept is
    the one that claims the scheme has no cost.

15. **Slide 15 — Before Tuesday, and Assessment 1** `class: —`

    - Build both schemes. Use a sandbox save for the second one; sandbox saves
      are never marked and are the fastest way to find out how a system
      behaves.
    - Bring four screenshots: ground pollution and traffic volume, at 08:00,
      for each scheme.
    - Bring the home-to-work distance for one named dwelling under each scheme.
      One dwelling, named, both schemes.
    - Commit to one scheme in your assessed save before Week 4.
    - **The Assessment 1 brief is issued this week.** Neighbourhood Unit Plan,
      due Week 4, 25% — fiscal 30, mobility 30, livability 40. Read Perry
      again before you read the brief.
    - Save as `<student ID>-w03`. Desk crits Tuesdays 13:00–16:00, Studio 2.14.

    **Notes:** The instruction to name one dwelling and measure from it is the
    point of the exercise — an average commute distance is a number nobody has
    to defend, and a named front door is.

### Studio session hand-off

- Students arrive with the Week 2 block layout built and a block dimension
  committed to in metres; the session zones into it and cannot start without
  it.
- The session runs both schemes side by side — the assessed save for one, a
  sandbox save for the other — and reads ground pollution, air pollution and
  traffic volume on each at 08:00.
- The session assumes students can find the wind info view and know the map's
  prevailing direction from Week 1; if they cannot, the pollution comparison is
  meaningless and the first fifteen minutes go on recovering it.
- Students leave having committed one scheme to the assessed save, and having
  read the Assessment 1 brief, which is issued in the session.

### Assessment hooks

Feeds **Assessment 1, the Neighbourhood Unit Plan** (Week 4, 25%) directly and
immediately — the brief is issued in this week's session, the unit is Perry's,
and the livability criterion at 40 marks is read largely off the pollution and
service-coverage consequences of the zoning scheme committed to this week. The
mobility criterion at 30 marks is read off the commute distances the scheme
generates. Also builds toward **Assessment 2, the Public Realm and
Infrastructure Plan** (Week 9, 25%), where the land-value consequences of the
zoning pattern become the material of the argument.

### Open questions for the writer

- Whether Scheme A's river crossing is given to students as a costed piece of
  infrastructure with a figure attached, or left for them to price in the
  economy panel — the second is better studio practice and makes the Slide 13
  comparison slower to reach.
- Whether the Euclid pyramid on Slide 5 should be drawn as a diagram in the
  two inks rather than set as a table; the cumulative structure reads better as
  a stepped figure, but the table survives the phone viewport.
- Whether the lecture should name a position on mixed housing at all, or hold
  the studio's own view back until Week 9, when the public realm consequences
  are visible and the argument can be made from students' own districts.

---

## Week 4 — Density and the 15-Minute City

**Date:** 2027-03-15 · **Lecturer:** Marisol Quaye · **Deck status:** No deck —
delivered from notes at the lectern, with the studio's shared save file
projected live. The semester's one planned deck is Week 7; it is not built.

### Argument in one sentence

A 15-minute city is not a distance, it is a claim about how a district spends
its residents' time and its own money, and the amenities that make the walk
worth taking are precisely the ones that do not pay for themselves.

### Learning outcomes

- Draw a neighbourhood unit at Perry's dimensions and state, in metres and in
  minutes, which amenities fall inside the walking radius and which do not.
- Distinguish density as a *precondition* for local amenity from density as a
  design goal, and cite the mechanism that connects the two.
- Calculate the monthly upkeep of the services placed inside a cell and
  compare it against the rate take that cell generates.
- Name the fiscal and livability consequences of a single amenity-siting
  decision, and defend the one chosen.

### Theory anchors

- **Clarence Perry, "The Neighborhood Unit," *Regional Survey of New York and
  Its Environs*, Vol. VII (1929).** A residential cell of roughly 5,000 people
  on about 160 acres, elementary school at the centre, arterial roads on the
  boundary and never through it, shops at the corners where two cells meet.
  In this lecture it is the literal geometry of Assessment 1, and its known
  failure mode — the school catchment as an instrument of sorting — is what
  the jury is briefed to press on.
- **Carlos Moreno, Zaheer Allam, Didier Chabaud, Catherine Gall and Florent
  Pratlong, "Introducing the '15-Minute City': Sustainability, Resilience and
  Place Identity in Future Post-Pandemic Cities," *Smart Cities* 4(1), 2021.**
  Four dimensions — proximity, diversity, density, ubiquity — organised around
  six social functions reachable in a quarter-hour on foot or by bicycle.
  In this lecture it converts Perry's fixed radius into a time budget, which
  is the quantity the simulation can actually be interrogated for.
- **Jane Jacobs, *The Death and Life of Great American Cities* (1961), Ch. 7
  and Ch. 11.** Four conditions generate diversity; the fourth is a
  sufficiently dense concentration of people. In this lecture it supplies the
  argument that density is what keeps a corner shop tenanted, not what makes a
  district good on its own.
- **Cesare Marchetti, "Anthropological Invariants in Travel Behavior,"
  *Technological Forecasting and Social Change* 47(1), 1994.** The roughly
  one-hour daily travel-time budget, stable across settlement patterns and
  centuries. In this lecture it explains why the radius is measured in minutes
  and why a district cannot buy proximity and long commutes at once.
- **Henry George, *Progress and Poverty* (1879), and the land-value-capture
  tradition after it.** Improvements raise the value of land, and the question
  is who captures the increment. In this lecture it is the fiscal half of the
  tradeoff and the reason the Land Value info view is open for the second half
  of the hour.

### Mechanic mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Perry's cell with the school at its centre | The district tool, and the coverage radius drawn by a service building when selected | Whether the elementary school's radius actually covers the cell it was sited for, or stops 200 m short of the eastern edge |
| Perry's arterials on the boundary | Road hierarchy, and the traffic volume layer of the Traffic info view | Whether through movement on the Kerrow corridor stays on the cell boundary or has found a line through the middle of it |
| Moreno's proximity, measured in minutes | Citizen daily schedules under the day/night cycle; pedestrian pathing between home, work, school and leisure | The share of trips a cim completes on foot before 09:00, and where the walk gives out |
| Jacobs's sufficient concentration | Medium-density and mixed housing zones; the building level-up thresholds | Whether the ground-floor tenancies on Pelling Street hold their level or cycle through abandonment |
| George's land-value increment | The Land Value info view, and the residential tax rate slider | The value gradient that appears around the new park within about a year, and what the rate take does after it |
| Marchetti's time budget | The pathfinding cost a cim assigns to a trip; the average commute figures in the city information panel | Average commute time rising as the cell's employment is pushed outside it |

### The tradeoff of the week

**Livability against fiscal performance.** The decision that forces it is where
the clinic goes. Sited inside the Halstead Reach cell it sits an eleven-minute
walk from the furthest dwelling and the cell carries its full upkeep. Moved to
a shared catchment serving three cells, the cell's share of that upkeep drops
by roughly two-thirds and the monthly deficit closes — and the walk becomes a
trip. There is no siting that gets both. Students must choose one and say which
metric they paid with.

### Slide plan

1. **Slide 1 — Density and the 15-Minute City** `class: impact`
   Title, then three lines set small beneath it:
   - Week 4 · SLOP2418 Urban Design Studio
   - Marisol Quaye · 15 March 2027
   - Assessment 1 artefact due today at 12:00; jury at 14:00
   **Notes:** Hold this slide while the room settles. Say only that the
   assessment is due at 12:00 today and that the last twenty minutes of the
   hour are about the brief.

2. **Slide 2 — Where we are** `class: —`
   - Week 1: the site read before a road went down. Three metrics named —
     fiscal performance, mobility performance, livability.
   - Week 2: the block pattern, and what a grid does to a pathfinder.
   - Week 3: separation of uses, and the commute it buys you.
   - Week 4: the radius. How far a resident will walk, and what therefore has
     to be inside the circle.
   **Notes:** Draw the line from Week 3 explicitly — last week separated uses
   and lengthened the trip; this week we put the uses back and find out what
   they cost.

3. **Slide 3 — The argument** `class: centered`
   A single line, set large:
   > A 15-minute city is a claim about a time budget and a balance sheet, not
   > a claim about a distance.
   **Notes:** Every slide after this one is either the time budget or the
   balance sheet. Say so, and ask them to keep score.

4. **Slide 4 — Perry, 1929** `class: —`
   Diagram, inline SVG, two inks on cream. A square cell with its corners
   clipped. Drawn in black: the four boundary arterials as heavy lines, and
   four filled squares at the corners labelled "shops". Drawn in gold: the
   interior street network as thin lines that visibly do not connect straight
   across, a circle of 400 m radius, and a filled disc at the centre labelled
   "elementary school". Three gold dots inside the circle labelled "playground".
   Dimension annotations in black: "400 m", "160 acres · 0.65 km²",
   "≈ 5,000 residents".
   **Notes:** Perry's unit is a diagram of a catchment, not of a community. The
   radius came from the walk to school and everything else was arranged around
   that one trip.

5. **Slide 5 — What Perry fixed and what he built in** `class: —`
   Two lists side by side.
   Fixed:
   - Through traffic on the boundary, not the interior.
   - A daily destination at the centre, within a child's walk.
   - Retail at the corners, shared between cells, so it has two catchments.
   Built in:
   - A cell defined by a school catchment is a cell defined by who is admitted
     to the school.
   - Interior streets that discourage through movement also discourage through
     movement by bus.
   - The unit is sized for a population it assumes will not change.
   **Notes:** Do not let the first column stand alone. The second column is
   what the jury will ask about, and a plan that reproduces Perry without
   naming the second column reads as unexamined.

6. **Slide 6 — Moreno, 2021: the radius becomes a budget** `class: —`
   - Six functions must be reachable: living, working, supply, care, learning,
     enjoyment.
   - Reachable means fifteen minutes on foot or by bicycle, not fifteen
     minutes by car.
   - Four dimensions carry it: proximity, diversity, density, ubiquity.
   - Ubiquity is the one students drop: the model has to hold for every part
     of the district, not for the part with the good park.
   **Notes:** The move from Perry to Moreno is the move from a fixed radius to
   a variable one that depends on mode. Say the number: fifteen minutes on
   foot at 4.8 km/h is 1,200 metres.

7. **Slide 7 — Jacobs on concentration** `class: quote`
   > There must be a sufficiently dense concentration of people, for whatever
   > purposes they may be there.
   >
   > — Jane Jacobs, *The Death and Life of Great American Cities* (1961),
   > the fourth condition for city diversity
   **Notes:** Jacobs is not arguing that density is good. She is arguing that
   below a threshold, the things people want from a district cannot be
   supported at all. That threshold is what the simulation will enforce on
   them whether or not they design for it.

8. **Slide 8 — Density is a precondition, not a goal** `class: —`
   - A corner shop needs a catchment. Below roughly 4,000 residents inside a
     600 m walk, the tenancy on Pelling Street cycles: occupied, struggling,
     abandoned, occupied.
   - You will read this in the model as commercial demand that never clears
     and buildings that will not hold their level.
   - The fix is not another commercial zone. The fix is more people inside the
     same radius.
   - Density added beyond the threshold buys you variety of tenancy, not
     survival of tenancy. Those are different design problems.
   **Notes:** This is the slide students misremember as "add density". Say the
   qualifier twice: density is what makes the amenity possible, and it is not
   the same as making the amenity good.

9. **Slide 9 — Marchetti's hour** `class: —`
   Table.

   | Settlement | Typical daily travel | Time spent |
   | --- | --- | --- |
   | Walking village, historic | 5 km on foot | ~1 hour |
   | Streetcar district | 12 km, tram and foot | ~1 hour |
   | Car-based suburb | 45 km, car | ~1 hour |

   Beneath it, one line in black: *The hour does not move. Only the radius
   does.*
   **Notes:** Marchetti's point is that faster travel has historically bought
   distance rather than time. Flag it now; it comes back in Week 6 as the
   reason a widened road does not stay quick.

10. **Slide 10 — The amenity radius, measured** `class: —`
    Table. Walk speed 4.8 km/h, that is 80 metres per minute.

    | Amenity | Perry's placement | Distance from cell centre | Minutes on foot | Inside the 15-minute circle |
    | --- | --- | --- | --- | --- |
    | Playground | interior, distributed | 300 m | 4 | yes |
    | Elementary school | centre | 0–400 m | 0–5 | yes |
    | Grocery | corner, shared | 500 m | 6 | yes |
    | Clinic | shared between cells | 900 m | 11 | yes, barely |
    | Secondary school | one per four to six cells | 1,600 m | 20 | no |
    | Hospital | district-wide | 3,200 m | 40 | no — cycle or transit |

    **Notes:** The last two rows are the honest ones. A 15-minute city is not a
    city where everything is fifteen minutes away; it is a city that has
    decided which things are.

11. **Slide 11 — The circle over Halstead Reach** `class: —`
    Diagram, inline SVG over a schematic plan of the studio's running site.
    In black: the Kerrow corridor running east–west along the northern
    boundary; Pelling Street as the internal high street; the block structure
    as thin outlines; Denton Hill hatched at the west edge to indicate rising
    ground. In gold: two concentric circles centred on the Pelling Street /
    Halstead crossing, at 400 m and 1,200 m, with the 1,200 m circle broken
    where the ground rises on Denton Hill and the walk is no longer fifteen
    minutes. Gold dots for sited amenities; a black dot for the clinic sitting
    outside the 400 m circle. One annotation in black on the western arc:
    "gradient — the circle is not a circle".
    **Notes:** Point at the broken western arc. Terrain was Week 1's material
    and it is still doing work: a fifteen-minute radius drawn with a compass
    is a fifteen-minute radius on flat ground only.

12. **Slide 12 — What the circle costs** `class: —`
    Table of the Halstead Reach cell at Perry's dimensions — 0.65 km²,
    approximately 5,000 residents.

    | Facility inside the cell | Monthly upkeep | Cell's share |
    | --- | --- | --- |
    | Elementary school | 3,200 | 3,200 |
    | Clinic | 2,400 | 2,400 |
    | Three small parks | 900 | 900 |
    | Fire station (shared, three cells) | 1,900 | 633 |
    | **Total** | | **7,133** |

    Beneath it, two lines in black:
    *Residential rate take at the default rate, 5,000 residents: ≈ 5,800 /
    month.*
    *Monthly shortfall: ≈ 1,300.*
    **Notes:** These figures come off the studio's shared baseline save, so
    students can reproduce them at their own desks. The shortfall is the whole
    lecture in one number.

13. **Slide 13 — Two ways to close 1,300** `class: —`
    Table.

    | Move | Fiscal effect | Livability effect |
    | --- | --- | --- |
    | Upzone Pelling Street frontage to mixed housing: +1,400 residents | +1,600 / month; closes the gap | School reaches capacity; the playground catchment thins; the 400 m circle now serves 6,400 people |
    | Move the clinic to a catchment shared by three cells | Cell's share falls 2,400 → 800; closes the gap | The eleven-minute walk becomes a twenty-four-minute walk, or a trip by car |

    **Notes:** Both close the same number. Neither is free. A plan that closes
    it without saying which of the two it chose has not made the decision, it
    has just avoided writing it down.

14. **Slide 14 — The tradeoff of the week** `class: impact`
    Set large:
    > **Livability against fiscal performance.**
    >
    > The clinic inside the circle is a service the cell cannot yet fund.
    > The clinic outside the circle is a balance sheet that works and a walk
    > that does not.
    **Notes:** Say the two metric names in those exact words. They are the
    marking criteria and students will be asked to name them at the jury.

15. **Slide 15 — Assessment 1: the brief** `class: —`
    - **Neighbourhood Unit Plan.** One residential cell in Halstead Reach at
      Perry's dimensions, designed to Moreno's proximity standard, sited on
      the studio's shared save.
    - **Weight:** 25% of the studio.
    - **Submission:** a set of in-simulation screenshots, plus a defence memo
      of no more than 800 words. Lodged today at 12:00 and defended at the jury
      at 14:00.
    - **Required in the screenshot set:** the Land Value info view over the
      cell; the coverage radius of every service building you sited; the
      traffic volume layer showing the Kerrow corridor on the boundary.

    Marking table:

    | Criterion | Weight |
    | --- | --- |
    | Fiscal performance | 30 |
    | Mobility performance | 30 |
    | Livability | 40 |

    **Notes:** Read the required screenshot list out loud. Every year a plan
    arrives without the coverage radii and the jury cannot mark the fiscal
    criterion at all.

16. **Slide 16 — What the jury will ask** `class: —`
    - The jury is chaired by Marisol Quaye. Sunniva Marek, principal at
      Kesselring & Marek, sits on it as guest juror.
    - **The first question is always the same:** which two of the three metrics
      did you trade against each other, and where in the plan is that decision
      visible.
    - Expect to be asked what the cell costs per month and what it returns.
      Have the number.
    - Expect to be asked who the school catchment excludes. Perry's diagram
      does not answer this and neither will yours unless you make it.
    - Sunniva Marek marks from practice and will ask what happens to the plan
      in year ten, when the cell's population has changed and the school has
      not.
    **Notes:** Be plain that the memo is where the tradeoff gets named. A
    beautiful pin-up with an unnamed tradeoff marks in the middle band and no
    higher.

### Studio session hand-off

- Students arrive at Tuesday's desk crit with the shared Halstead Reach
  baseline save loaded and the cell boundary already drawn with the district
  tool. Not a screenshot of it — the save.
- The session opens with every student running the Land Value info view over
  their cell and reading the gradient aloud. Anyone whose gradient is flat has
  not yet sited an amenity that does anything.
- The session's exercise is the slide 13 comparison run for real: build both
  options, run twelve in-game months on each, and bring the two monthly
  balance figures to the pin-up.
- Assessment 1 is submitted at 12:00 today, so the session is a
  working session, not a teaching one. Come with the plan mostly made.

### Assessment hooks

Feeds **Assessment 1 — Neighbourhood Unit Plan** directly, and every criterion
of it. The amenity-radius material (slides 9–11) is the livability criterion,
worth 40. The upkeep-against-rate-take arithmetic (slides 12–13) is the fiscal
criterion, worth 30. The arterial-on-the-boundary material (slides 4–5, and
the Traffic info view row of the mechanic mapping) is the mobility criterion,
worth 30, and is deliberately the thinnest of the three here because
Weeks 5 and 6 take it up properly before it returns as a criterion in the
remaining two assessments.

Also builds toward **Assessment 3 — Comprehensive City Plan**: the cell is the
unit the capstone assembles, and students who cannot defend one cell in Week 4
will be assembling twelve of them in Week 12.

### Open questions for the writer

- The upkeep and rate-take figures on slide 12 are quoted from the studio's
  shared baseline save. Confirm them against the save that ships with this
  offering before the deck is set — the arithmetic on slide 13 depends on the
  shortfall being close to 1,300, and the slide is worthless if the number is
  visibly wrong on the projector.
- The Assessment 1 clock is settled by the current assessment and policies:
  artefact at 12:00 on Monday 15 March, jury at 14:00. Treat any return of the
  old Friday wording as a regression.
- Slide 11's diagram breaks the western arc for gradient. Decide whether to
  draw the terrain contour explicitly or leave the break unexplained until the
  spoken line — the second reads better but only if the lecturer remembers to
  say it.

---

## Week 5 — Moving People: Transit-Oriented Design

**Date:** 2027-03-22 · **Lecturer:** Idris Fenn · **Deck status:** No deck —
delivered from notes, with the Transportation Overview and the studio's shared
save projected live. The semester's one planned deck is Week 7; it is not built.

### Argument in one sentence

A transit line is not a shape on a map, it is a bundle of waiting times a
resident is being asked to accept, and the two things that decide whether they
accept it — frequency and legibility — are the two things a drawn line does
not show.

### Learning outcomes

- Calculate the vehicle fleet a line requires at a given headway from its
  round-trip time, and state that fleet's monthly operating cost.
- Weight a journey's out-of-vehicle time against its in-vehicle time and show
  why a faster two-seat trip can be the worse trip.
- Route the same corridor twice, once for ridership and once for coverage, and
  defend the choice as a values choice rather than a technical one.
- Identify, in the model, the density and mix a station area needs before the
  station has anyone to serve.

### Theory anchors

- **Peter Calthorpe, *The Next American Metropolis: Ecology, Community, and
  the American Dream* (1993).** Transit-oriented development: a mixed-use core
  within roughly a 2,000-foot — about 600 metre — walk of a transit stop, with
  densities stepping down away from it. In this lecture it is the shape
  this week's studio asks students to draw, and the reason the zoning has to
  change before the line will carry anyone.
- **Kevin Lynch, *The Image of the City* (1960).** Imageability, built from
  paths, edges, districts, nodes and landmarks. In this lecture it supplies the
  vocabulary for legibility: a network is a thing a rider has to hold in their
  head before they will commit a morning to it.
- **Jarrett Walker, *Human Transit* (2011).** Frequency is freedom; the
  ridership–coverage choice is a question about what the service is *for*, and
  cannot be settled by analysis. In this lecture it is the direct source of the
  week's tradeoff, and the framing for the studio exercise.
- **Vukan R. Vuchic, *Urban Transit: Operations, Planning and Economics*
  (2005).** Riders weight out-of-vehicle time — walking, waiting, transferring
  — at roughly two to three times in-vehicle time. In this lecture it is the
  arithmetic behind the transfer penalty and behind stop spacing.
- **Robert Cervero and Kara Kockelman, "Travel demand and the 3Ds: Density,
  diversity, and design," *Transportation Research Part D* 2(3), 1997.** Built
  form measurably shifts travel behaviour, but the elasticities are modest and
  they compound. In this lecture it is the caution against expecting a line to
  fix a land-use problem.

### Mechanic mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Calthorpe's 600 m station area | Zoning within the walk of the stop: medium density and mixed housing, stepping down to low density at the edge | Whether buildings level up nearest the stop or nearest the arterial — the second means the stop is not the thing organising the land |
| Walker's frequency | Vehicles assigned to a line in the Transportation Overview; headway falls as the fleet rises | The waiting-passenger count at each stop, and the line's monthly operating cost moving with the fleet |
| Vuchic's transfer penalty | Citizen pathfinding, which prices walking and waiting into the cost of a route alongside travel time | How many cims take the two-seat ride, and how many take the car instead of either |
| Lynch's imageability | Line geometry and stop spacing as drawn with the transit line tool | Whether the line reads as one path or as a sequence of detours — and the ridership difference between them |
| Cervero and Kockelman's 3Ds | Residential density, zone mix and the demand bars within the station area | Ridership per stop tracking the density gradient, not the geometry of the line |
| Ridership against coverage | Routing the same corridor down Pelling Street or around Denton Hill | Passengers carried per vehicle-hour, and the line's revenue against its upkeep |

### The tradeoff of the week

**Mobility performance against fiscal performance.** The decision that forces it
is the headway on the Halstead–Barrow Fields line. Every vehicle added to that
line buys every rider on it a reduction in average wait, and commits the
district to that vehicle's upkeep for as long as the line runs. A ten-minute
headway is a service people plan around. A ten-minute headway on a 24-minute
round trip is three vehicles, and three vehicles is an operating cost the
line's ticket revenue does not cover at Halstead Reach's current density.
Students must set a headway and say which metric they paid.

### Slide plan

1. **Slide 1 — Moving People: Transit-Oriented Design** `class: impact`
   Title, then three lines set small beneath it:
   - Week 5 · SLOP2418 Urban Design Studio
   - Idris Fenn · 22 March 2027
   - Nothing is submitted this week
   **Notes:** Open by saying that Assessment 1 is marked and that nothing in it
   is being revisited. This week starts the mobility half of the semester.

2. **Slide 2 — A standing position, stated up front** `class: quote`
   > The first network you draw is a diagram of your assumptions. It is not yet
   > a plan. The fastest way to find out which assumption is wrong is to run it
   > at eight in the morning and watch where it fails.
   >
   > — the tutor, every year, at this point in the semester
   **Notes:** Say it once, flatly, and move on. It is the frame for the studio
   session and for Week 6, and it should not be delivered as encouragement.

3. **Slide 3 — The argument** `class: centered`
   A single line, set large:
   > A line nobody can read at a glance, or wait for without planning around
   > it, is a line nobody rides.
   **Notes:** Two conditions, legibility and frequency. The hour is organised
   as one half each, with the money running underneath both.

4. **Slide 4 — Calthorpe, 1993** `class: —`
   Diagram, inline SVG, two inks on cream. A stop drawn as a filled black
   square at the centre. In gold: three concentric bands at 200 m, 400 m and
   600 m, the innermost filled solid, the middle hatched, the outer left open
   — reading as density stepping down. In black: an arterial running along the
   outer edge and not through the bands; a short black arrow from the stop
   labelled "600 m · 7½ minutes on foot"; the mixed-use core marked as a black
   outline block adjoining the stop.
   **Notes:** The bands are the whole diagram. Calthorpe's argument is that the
   density gradient has to be centred on the stop, and a stop dropped into an
   even density does not produce a station area, it produces a bus shelter.

5. **Slide 5 — Two ways a stop fails** `class: —`
   - **No catchment.** The stop is inside the walk of 900 people. It will carry
     the trips of 900 people, which is not a line, it is a subsidy.
   - **No legibility.** The stop is inside the walk of 9,000 people who cannot
     tell you where the line goes. It will carry the trips of the ones who have
     already worked it out.
   - The first failure is a zoning problem and takes a year of simulated time
     to fix. The second is a geometry problem and takes an afternoon.
   - Students overwhelmingly diagnose the first and have the second.
   **Notes:** Push on the last bullet. Most redrawn lines in this studio are
   redrawn for catchment when the problem was that the line had four bends in
   it.

6. **Slide 6 — Lynch on the parts and the whole** `class: quote`
   > Nothing is experienced by itself, but always in relation to its
   > surroundings, the sequences of events leading up to it, the memory of past
   > experiences.
   >
   > — Kevin Lynch, *The Image of the City* (1960)
   **Notes:** Lynch was writing about walking a city, not riding one, and the
   transfer applies without strain: a rider builds an image of the network from
   the sequence, and a network that cannot be held as an image is not chosen.

7. **Slide 7 — Lynch's five elements, as a transit network** `class: —`
   Table.

   | Lynch's element | In the network | Design consequence |
   | --- | --- | --- |
   | Path | The line itself | It should read as one movement, not a sequence of detours |
   | Node | The interchange | There should be few, and each should be obviously an interchange |
   | Landmark | The terminus and the depot | Name the ends of the line after places, not after directions |
   | Edge | The Kerrow corridor, the rising ground at Denton Hill | Lines that cross an edge need a reason; lines that follow one are legible |
   | District | The station area itself | The 600 m circle is the thing the line is for, and it should look like it on the ground |

   **Notes:** This table is doing translation work, not analysis. Its value is
   that it gives students a checklist they can run over a drawn line in two
   minutes at the desk crit.

8. **Slide 8 — Frequency is freedom** `class: —`
   The Halstead Reach–Barrow Fields line. Round-trip running time, including
   layover: 24 minutes.

   | Headway | Average wait (half the headway) | Vehicles required | Monthly operating cost |
   | --- | --- | --- | --- |
   | 30 min | 15.0 min | 1 | 1,150 |
   | 15 min | 7.5 min | 2 | 2,300 |
   | 10 min | 5.0 min | 3 | 3,450 |
   | 5 min | 2.5 min | 5 | 5,750 |

   Beneath it, one line in black: *Vehicles required = round-trip time ÷
   headway, rounded up.*
   **Notes:** The formula is the only thing on this slide they need to
   memorise. Everything else in the table falls out of it, including the fact
   that halving the wait always doubles the fleet.

9. **Slide 9 — What a headway is worth** `class: —`
   - Below about a 12-minute headway, riders stop consulting a timetable and
     start turning up. That change is worth more than the minutes it saves.
   - Above about a 20-minute headway, the line is planned around rather than
     used, and its ridership becomes a function of how few alternatives exist.
   - The Transportation Overview reports waiting passengers per stop. A queue
     that never clears is not demand, it is a fleet shortage, and the two are
     marked differently.
   - The operating cost does not fall when ridership falls. It is the one line
     in the budget that is indifferent to whether the service works.
   **Notes:** The third bullet is the most common misreading in the studio. A
   large waiting queue looks like success on the projector and is a failure in
   the balance sheet.

10. **Slide 10 — The arithmetic of the transfer** `class: —`
    Two ways from a dwelling on Pelling Street to a workplace at Barrow Fields.
    Out-of-vehicle time weighted at 2.5, after Vuchic.

    | | Route A: one seat | Route B: two seats |
    | --- | --- | --- |
    | Walk to stop | 5 min | 5 min |
    | Initial wait | 5 min | 5 min |
    | First ride | 22 min | 8 min |
    | Transfer wait | — | 6 min |
    | Second ride | — | 7 min |
    | Walk to work | 3 min | 3 min |
    | **Actual journey** | **35 min** | **34 min** |
    | Out-of-vehicle total | 13 min | 19 min |
    | **Perceived journey** (in-vehicle + 2.5 × out-of-vehicle) | **54.5 min** | **62.5 min** |

    **Notes:** Route B is one minute faster and eight minutes worse. This is the
    slide to point at when a student proposes fixing coverage by splitting a
    line in two.

11. **Slide 11 — Stop spacing, from the same arithmetic** `class: —`
    - Every stop added shortens somebody's walk by up to 200 m — that is
      2.5 minutes of walking, weighted, worth about 6 minutes.
    - Every stop added lengthens everybody's ride by roughly 25 seconds of
      dwell and deceleration.
    - On a line carrying 900 riders past a stop used by 40, the arithmetic
      resolves against the stop.
    - Which is why the coverage question cannot be settled stop by stop. It has
      to be settled for the line.
    **Notes:** This is the bridge into Walker. Make the handover explicit: the
    stop-spacing question and the routing question are the same question at
    two scales.

12. **Slide 12 — Ridership or coverage** `class: —`
    Diagram, inline SVG, two inks on cream, over the schematic plan of the
    site. In black: the block structure of Halstead Reach; Pelling Street as a
    heavy line running east–west; Denton Hill hatched at the west; Barrow
    Fields as an outlined employment block at the east. In gold: two candidate
    alignments for the same line, one running straight along Pelling Street to
    Barrow Fields, one looping north-west up Denton Hill before turning east.
    Gold dots for stops on each. Annotations in black: "straight: 24 min round
    trip · 6 stops" and "loop: 38 min round trip · 11 stops".

    | | Ridership routing | Coverage routing |
    | --- | --- | --- |
    | Round trip | 24 min | 38 min |
    | Vehicles at a 10-min headway | 3 | 4 |
    | Residents within 600 m | 6,100 | 8,400 |
    | Projected passengers per vehicle-hour | 41 | 22 |
    | Denton Hill served | no | yes |

    **Notes:** Both columns are defensible. Walker's point is that choosing
    between them is a decision about what the service is for, and that
    pretending it is a technical question is how a network ends up doing
    neither well.

13. **Slide 13 — The tradeoff of the week** `class: impact`
    Set large:
    > **Mobility performance against fiscal performance.**
    >
    > Every vehicle you add buys wait time back for every rider on the line,
    > and commits the district to that vehicle's upkeep for as long as the line
    > runs.
    **Notes:** Say the two metric names in those exact words. Then say the
    third: livability is not the metric under pressure this week, and Week 6
    is where it arrives.

14. **Slide 14 — What this work feeds** `class: —`

    - Nothing is submitted in Week 5 or Week 6. These are working weeks.
    - Keep the before-and-after traffic and transit evidence: mobility
      performance is marked again in Assessment 2 in Week 9 and in the Week 12
      capstone.
    - Assessment 2 is the **Public Realm and Infrastructure Plan**, due Week 9,
      worth 25%.

    **Notes:** Do not recreate the deleted Mobility Plan. The point of the
    slide is evidence continuity, not a fourth brief.

15. **Slide 15 — This week's studio, and next week** `class: banner`
    - **Wednesday's session** is the peak-load run. Load the shared save,
      advance to 08:00, and hold it there while the corridor loads.
    - You will find the Wickstead junction at the eastern end of the Kerrow
      corridor is the binding constraint. You have two instruments: build the
      transit line, or add capacity at the junction. Most of you will do both.
    - **Record the numbers before you touch anything.** Peak volume on Kerrow,
      volume on the Ashgrove back streets, and the tram line's passenger count.
      Write them down. You will need them next week and they cannot be
      recovered afterwards.
    - **Week 6 — Traffic Engineering and Its Discontents.** Bring the
      before-and-after numbers to the lecture, not to the desk crit.
    **Notes:** Do not explain why the numbers matter. Say that they will, and
    that a student who arrives next week without them will be watching the
    lecture rather than sitting in it.

### Studio session hand-off

- Students arrive at Wednesday's session with the shared save advanced to the
  Week 5 baseline and the Transportation Overview open. Not a screenshot — the
  save, as always.
- The session is a peak-load run held at 08:00 on the Kerrow corridor. Before
  any change is made, every student records three figures: peak vehicle volume
  on Kerrow at the Wickstead junction, vehicle volume on the parallel Ashgrove
  streets, and passengers carried on any transit line running the corridor.
- The session's two permitted moves are drawing a transit line at a headway
  the student can justify from slide 8's formula, and adding capacity at the
  Wickstead junction. Both are expected; the point of the session is that
  both are made in the same afternoon by the same person.
- Students leave with a saved file named for the session and the three
  before-figures written into their process log. Week 6's lecture opens on
  those figures, so the save must not be overwritten in the intervening days.

### Assessment hooks

No assessment is due or opened this week. The headway and fleet exercise and
the ridership–coverage comparison provide mobility evidence for **Assessment 2
— Public Realm and Infrastructure Plan** in Week 9 and **Assessment 3 —
Comprehensive City Plan** in Week 12. The corridor designed this week is the
spine the capstone hangs the rest of the city off.

### Open questions for the writer

- Slide 8's operating cost of 1,150 per vehicle per month is the tram figure
  from the shared baseline save. If the deck writer would rather run the whole
  lecture on buses, every figure in that table and in slide 12 changes and the
  ridership-per-vehicle-hour numbers need recomputing — decide the mode once,
  before drawing slide 4.
- Slide 10 uses a weighting of 2.5 on out-of-vehicle time. Vuchic's range is
  roughly two to three. Two makes the transfer penalty look survivable and
  three makes it look fatal; 2.5 was chosen so Route B loses by a clear margin
  without the slide looking rigged. Confirm the writer is comfortable
  defending that choice if a student asks.
- Slide 15 tells students to record numbers without saying why. That is
  deliberate, and it is the setup for Week 6's opening slide. If the deck
  writer finds it too withholding, the alternative is to say plainly that
  next week tests whether the capacity they add holds — but the pivot lands
  harder if they find out themselves.

---

## Week 6 — Traffic Engineering and Its Discontents

**Date:** 2027-03-29 · **Lecturer:** Idris Fenn · **Deck status:** No deck —
delivered from notes, with the studio's shared save and the Traffic info view
projected live. The semester's one planned deck is Week 7; it is not built.

### Argument in one sentence

Road capacity does not reduce congestion, it relocates and enlarges the demand
that produced it, and the corridor that has been widened has paid its frontage
for a level of service it will not keep.

### Learning outcomes

- Compute the effective capacity of a signalised arterial from its saturation
  flow and green ratio, and the volume–capacity ratio before and after a
  widening.
- Apply a demand elasticity to a capacity increase and state the long-run
  volume, showing the working.
- Decompose an observed traffic increase into route, mode, departure-time and
  land-use components, and match each to the view in the model that shows it.
- Distinguish a street's vehicular capacity from its environmental capacity,
  and name what the second cost when the first was raised.

### Theory anchors

- **Anthony Downs, "The Law of Peak-Hour Expressway Congestion," *Traffic
  Quarterly* 16(3), 1962; triple convergence developed in *Stuck in Traffic*
  (1992).** Peak congestion rises to meet the capacity provided, because
  drivers converge on an improved facility from other routes, other departure
  times and other modes. In this lecture it is the organising structure of the
  whole hour, and the source of the decomposition on slide 9.
- **Gilles Duranton and Matthew A. Turner, "The Fundamental Law of Road
  Congestion: Evidence from US Cities," *American Economic Review* 101(6),
  2011.** The elasticity of vehicle-kilometres travelled with respect to
  lane-kilometres is close to one. In this lecture it is the number the
  arithmetic on slide 8 actually runs on, and the reason a widening cannot be
  defended as a congestion measure.
- **J. Michael Thomson, *Great Cities and Their Traffic* (1977), and Martin
  J. H. Mogridge, *Travel in Towns: Jam Yesterday, Jam Today and Jam
  Tomorrow?* (1990).** The Downs–Thomson and Lewis–Mogridge position: on a
  corridor with a competing public transport service, the equilibrium speed of
  car travel is set by the door-to-door speed of that service. In this lecture
  it is why the tram line built in Week 5's studio is the thing that determines
  whether the widening holds.
- **Dietrich Braess, "Über ein Paradoxon aus der Verkehrsplanung,"
  *Unternehmensforschung* 12, 1968, with J. G. Wardrop, "Some theoretical
  aspects of road traffic research," *Proceedings of the Institution of Civil
  Engineers* (1952) as its equilibrium assumption.** Adding a link to a
  network can make every user's journey longer. In this lecture it is the
  formal case that capacity is not monotonically good, and Wardrop's first
  principle is the rule the model's pathfinder is following.
- **Colin Buchanan, *Traffic in Towns* (HMSO, 1963).** A street has an
  environmental capacity — a traffic volume above which its other functions
  fail — and it is reached well before its vehicular capacity. In this lecture
  it is the livability half of the tradeoff and the discontent in the title.

### Mechanic mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Wardrop's user equilibrium | The traffic AI's pathfinding: every agent takes the least-cost route available and re-chooses when costs change | The Ashgrove back streets emptying within about three simulated days of the Kerrow widening opening |
| Downs's spatial convergence | The traffic volume layer of the Traffic info view, read on the parallel routes rather than the widened one | Volume falling on the back streets and rising by more than that on Kerrow |
| Downs's modal convergence | The Transportation Overview passenger count on the Week 5 tram line | Ridership dropping on the line the widening now competes with, and the line's revenue dropping with it |
| Downs's temporal convergence | Citizen daily schedules under the day/night cycle | The shoulder of the peak thinning as the corridor gets quick enough to leave at 08:00 again |
| Braess's link addition | The road tool, and the new connector at the Wickstead junction | Average district-wide travel time after adding a link that was locally an improvement |
| Buchanan's environmental capacity | The noise pollution overlay and the Land Value info view along the Pelling Street frontage | Land value falling on the widened frontage, and ground-floor commercial failing to hold its level |
| Marchetti's time budget, from Week 4 | Housing demand and the residential demand bars at the outer edge of the district | Households taking up sites further out at Denton Hill once the commute cost falls |

### The tradeoff of the week

**Mobility performance against livability.** The decision that forces it is the
third lane on the Kerrow corridor, which most of the studio added in last
week's session. It bought a 50% increase in effective capacity and a
volume–capacity ratio of 0.65 on the first morning. It cost the Pelling Street
frontage 6.5 metres of carriageway, five seconds of pedestrian crossing time,
1.8 dB of traffic noise and — as the model will show over the following
simulated year — the ground-floor tenancies that were holding the high street's
land value up. The uncomfortable part is that the mobility gain does not
survive the year and the livability loss does.

### Slide plan

1. **Slide 1 — Traffic Engineering and Its Discontents** `class: impact`
   Title, then three lines set small beneath it:
   - Week 6 · SLOP2418 Urban Design Studio
   - Idris Fenn · 29 March 2027
   - Nothing submitted · last week before the break
   **Notes:** Do not preface this lecture. Go to slide 2 in under a minute; the
   argument is better made by the numbers than by an introduction to them.

2. **Slide 2 — Your save file, last Wednesday and this morning** `class: —`
   Table. The figures are the studio baseline; students substitute their own.

   | Kerrow corridor at Wickstead | Before (Wk 5, pre-change) | Day 1 after widening | Day 30 after widening |
   | --- | --- | --- | --- |
   | Lanes each way | 2 | 3 | 3 |
   | Peak volume, veh/h | 2,040 | 2,040 | 3,050 |
   | Volume ÷ capacity | 0.98 | 0.65 | 0.97 |
   | Average peak speed | 24 km/h | 41 km/h | 25 km/h |
   | Ashgrove back streets, veh/h | 480 | 210 | 140 |
   | Tram line passengers, daily | 3,900 | 3,510 | 3,180 |

   **Notes:** Give the room a moment on the third column. Then say the only
   sentence this slide needs: the lane is still there, and the congestion is
   back.

3. **Slide 3 — The argument** `class: centered`
   A single line, set large:
   > Capacity does not reduce congestion. It relocates the demand that produced
   > it, and then enlarges it.
   **Notes:** State that nothing in this lecture is a criticism of anyone's
   Week 5 decision. The decision was the correct one to make in order to find
   this out, which is why the session was designed to produce it.

4. **Slide 4 — What the pathfinder is doing** `class: —`
   - Wardrop's first principle, 1952: at equilibrium, no driver can reduce
     their own journey time by switching route. All used routes cost the same;
     unused routes cost more.
   - The model's traffic AI implements exactly this. Agents cost a route and
     take the cheapest one available, and they re-cost it when the network
     changes.
   - So a widening does not give the existing traffic a faster trip. It
     lowers the cost of one route until enough traffic has moved onto it that
     the costs are equal again.
   - Equilibrium is not a goal the model is pursuing. It is a property of
     everybody doing the obvious thing.
   **Notes:** This is the mechanism slide, and everything after it is
   consequences. If students leave with one thing, it should be that the model
   is not simulating traffic, it is simulating choice.

5. **Slide 5 — Downs's law** `class: quote`
   > On urban commuter expressways, peak-hour traffic congestion rises to meet
   > maximum capacity.
   >
   > — Anthony Downs, "The Law of Peak-Hour Expressway Congestion," *Traffic
   > Quarterly* (1962)
   **Notes:** Downs published this in 1962, before the corridor projects that
   would have tested it were built. It has not needed revision since, and the
   mechanism he proposed is the one in the next slide.

6. **Slide 6 — Triple convergence** `class: —`
   Table.

   | Convergence | The driver's decision | The view that shows it |
   | --- | --- | --- |
   | Spatial | Take the improved route instead of the back streets | Traffic volume layer, read on Ashgrove |
   | Temporal | Leave at 08:00 again instead of 07:20 | Volume by hour across the peak |
   | Modal | Drive instead of taking the tram | Transportation Overview, passengers per line |

   Beneath the table, one line in black: *Downs proposed three. The model
   supplies a fourth, more slowly.*
   **Notes:** The fourth is land use, and it is slide 9's last row. Flag it
   here and do not explain it yet.

7. **Slide 7 — The arithmetic: capacity** `class: —`
   The Wickstead junction, worked from first principles.

   | Term | Value | Source |
   | --- | --- | --- |
   | Base saturation flow | 1,900 veh/h per lane | standard signalised-arterial figure |
   | Effective green ratio, g ÷ C | 0.55 | measured at the Wickstead signal |
   | Effective capacity per lane | 1,900 × 0.55 = 1,045 veh/h | |
   | Capacity, 2 lanes each way | 2,090 veh/h | before |
   | Capacity, 3 lanes each way | 3,135 veh/h | after |
   | Capacity increase | +50% | |

   **Notes:** Do the multiplication on the slide rather than presenting the
   result. Students who cannot reconstruct 1,045 cannot argue about anything
   later in the hour.

8. **Slide 8 — The arithmetic: demand** `class: —`
   Duranton and Turner (2011) estimate the elasticity of vehicle-kilometres
   travelled with respect to lane-kilometres at approximately 1.0. The UK
   Standing Advisory Committee on Trunk Road Assessment (*Trunk Roads and the
   Generation of Traffic*, 1994) reached broadly compatible conclusions from
   different data.

   | Elasticity assumed | Volume increase | Long-run peak volume | Volume ÷ capacity | Relief retained |
   | --- | --- | --- | --- | --- |
   | 0.0 (the project's business case) | 0% | 2,040 | 0.65 | all of it |
   | 0.5 (short-run, optimistic) | +25% | 2,550 | 0.81 | about half |
   | 0.8 | +40% | 2,856 | 0.91 | about a fifth |
   | 1.0 (Duranton and Turner) | +50% | 3,060 | 0.98 | none |

   Beneath it, one line in black: *The top row is the row every widening is
   justified on. The bottom row is the row the literature supports.*
   **Notes:** The middle rows matter. Even a student who thinks the elasticity
   literature is overstated has to concede that at 0.5 the project has spent
   its whole budget to buy half a level of service, temporarily.

9. **Slide 9 — Where the extra 1,020 vehicles came from** `class: —`
   Decomposition of the +50% observed at day 30, in vehicles per hour at the
   peak.

   | Source | veh/h | Downs's category | Where you can see it |
   | --- | --- | --- | --- |
   | Re-routed from the Ashgrove streets | +340 | spatial | Ashgrove volume, 480 → 140 |
   | Shifted off the Pelling Street tram | +180 | modal | Tram daily passengers, 3,900 → 3,180 |
   | Re-timed into the peak from the shoulders | +220 | temporal | 07:00–08:00 volume falling, 08:00–09:00 rising |
   | Longer and newly generated trips as households relocate | +280 | land use | Residential demand and new occupancy at the Denton Hill edge |
   | **Total** | **+1,020** | | **= 50% of 2,040** |

   **Notes:** This is the most important slide in the lecture. The four rows
   are independently observable in the model and they sum to the elasticity the
   literature predicts. Students who want to dispute the conclusion have to
   dispute a row.

10. **Slide 10 — Downs–Thomson: the tram set the speed** `class: —`
    - Thomson, 1977, and Mogridge, 1990: on a corridor with a competing transit
      service, the equilibrium speed of car travel is set by the door-to-door
      speed of that service. Drivers switch until the two are equally bad.
    - So the widening's long-run car speed was never a property of the road. It
      was a property of the tram.
    - And the widening pulled 180 veh/h off the tram, which cut the line's
      revenue, which — for most of the studio — was met by cutting the fleet
      from three vehicles to two.
    - A 10-minute headway became a 15-minute headway. Average wait rose from
      5 minutes to 7.5. The competing trip got worse, so the equilibrium car
      speed the corridor settles at got worse with it.
    - The widening made itself less effective by the mechanism it triggered.
    **Notes:** This is where Week 5's fiscal tradeoff comes back as a mobility
    problem. Point at the headway table from last week explicitly; the fleet
    cut is the same arithmetic run backwards.

11. **Slide 11 — Braess, 1968** `class: —`
    Diagram, inline SVG, two inks on cream. Four nodes — Start, A, B, End —
    drawn as black circles. In black: Start→A labelled "T ÷ 100 min",
    Start→B labelled "45 min", A→End labelled "45 min", B→End labelled
    "T ÷ 100 min". In gold, drawn as a heavy dashed line: the new connector
    A→B labelled "0 min". T is the number of vehicles on that link. 4,000
    vehicles want to travel Start to End.

    | | Without the gold link | With the gold link |
    | --- | --- | --- |
    | Split | 2,000 via A, 2,000 via B | 4,000 via A then B |
    | Journey time | 20 + 45 = **65 min** | 40 + 0 + 40 = **80 min** |

    **Notes:** Nobody in this network behaves irrationally and nobody can
    improve their own journey by switching. Every driver is 15 minutes worse
    off because a link was added. The connector at Wickstead is not this
    example, but it is this shape.

12. **Slide 12 — Buchanan, 1963: the other capacity** `class: —`
    - Buchanan's *Traffic in Towns* argued that a street has two capacities,
      and that planning had only ever measured one.
    - **Vehicular capacity:** the volume above which the traffic stops moving.
      On Pelling Street at three lanes, 3,135 veh/h.
    - **Environmental capacity:** the volume above which the street's other
      functions stop working. On Pelling Street, reached at roughly 1,600.
    - The second number is not in the Highway Capacity Manual, has no
      standardised method, and is the number the district is actually built
      around.
    **Notes:** Buchanan is the reason this week is called "and its
    discontents". The engineering is not wrong; it answers a narrower question
    than the one a district is asking.

13. **Slide 13 — What the third lane cost the frontage** `class: —`
    Table. Pelling Street frontage, before the widening and one simulated year
    after.

    | Measure | 2 lanes each way | 3 lanes each way | Working |
    | --- | --- | --- | --- |
    | Carriageway width | 14.0 m | 20.5 m | one 3.25 m lane each way |
    | Pedestrian crossing time at 1.2 m/s | 11.7 s | 17.1 s | +5.4 s of exposure |
    | Traffic noise at 10 m | 68 dB(A) | 69.8 dB(A) | 10 log₁₀(1.5) = +1.8 dB |
    | Ground-floor commercial holding level 3 or above | 71% | 44% | Land Value info view |
    | Frontage land value index | 100 | 87 | Land Value info view |

    Beneath it, one line in black: *1.8 dB is barely audible and entirely
    sufficient.*
    **Notes:** The noise row is the one to dwell on. Traffic noise rises with
    the logarithm of volume, so the acoustic change is small — and the land
    value moved 13 points anyway, because what changed was not the loudness but
    the street.

14. **Slide 14 — The tradeoff of the week** `class: impact`
    Set large:
    > **Mobility performance against livability.**
    >
    > The lane bought 16 minutes of peak speed for one month and 6.5 metres of
    > carriageway for good.
    **Notes:** Say the two metric names in those exact words. Then say that the
    asymmetry is the point: the mobility gain was temporary and the livability
    loss was not, and no amount of care in the detailing reverses that.

15. **Slide 15 — What to do instead** `class: —`
    The honest menu, with what each costs.

    | Instrument | Effect on the corridor | What it costs |
    | --- | --- | --- |
    | Retime the Wickstead signal; raise g ÷ C from 0.55 to 0.62 | +13% effective capacity | Almost nothing fiscally; the same elasticity applies, so it buys less and lasts as briefly |
    | Reallocate one existing lane to transit | Vehicular capacity down a third; corridor person-throughput up, if the headway is held | Politically the hardest move in the studio, and the one Downs–Thomson says works |
    | Shorten the trips: mix uses in the station areas, per Week 4 | Removes demand rather than serving it | Slow — a simulated year or more before it is visible — and it is a zoning project, not a road project |
    | Price the peak | The only instrument that addresses demand directly | Not available. The model has no congestion-pricing mechanism, so nothing you argue from this save file can rest on one |

    **Notes:** The last row is a constraint on what can be claimed, not a gap to
    apologise for. Knowing which arguments a model can and cannot support is
    part of using one, and Week 11 is given over to that question.

16. **Slide 16 — A working week, not a submission** `class: —`

    - Nothing is submitted in Week 6. Preserve the before-and-after record for
      the remaining two assessments.
    - The next brief is **Assessment 2 — Public Realm and Infrastructure
      Plan**, due Week 9 and worth 25%.
    - A plan that adds capacity is not penalised. A plan that adds capacity and
      describes a short-term observation as a permanent congestion improvement
      has exceeded its evidence.

    **Notes:** The stress test is evidence for later briefs, not a deleted
    Mobility Plan in disguise.

17. **Slide 17 — Before the break** `class: banner`
    - Two weeks off. The studio reconvenes Monday 19 April.
    - **Leave the save file in a state you can return to.** Save under a name
      with the week in it, and write your three peak figures into the process
      log. You will not remember them.
    - **Week 7 — Infrastructure You Don't See**, Nadia Ilkhom. Water, sewage,
      power and the capacity curve. It is the one week of the semester with a
      built slide deck, and it is the most technical hour you will sit.
    - Nadia's framing, which is worth arriving with: every network in this city
      has a capacity curve, and you have spent two weeks learning what happens
      at the top of one. The next four are about the networks where failure is
      not a queue but an outage.
    **Notes:** End on the handover, not on a summary. The link between this
    week and Week 7 is genuine — congestion and outage are the same curve read
    at different tolerances — and it is worth saying so as the room leaves.

### Studio session hand-off

- Students arrive at Wednesday's session with the Week 5 save, the post-widening
  save, and the three before-figures recorded last week. Without the before-
  figures the session cannot be run and the student watches.
- The session's exercise is slide 15 as a comparison run: pick two of the first
  three instruments, implement each on a separate branch of the save, advance
  twelve simulated months, and record volume ÷ capacity and frontage land value
  for both.
- Nothing is submitted at the end of this week. The session closes the first
  half of semester and preserves evidence for the remaining assessments.
- The session ends with every student naming, out loud, which two metrics their
  plan trades. This is rehearsal for the jury and it is not optional.

### Assessment hooks

No assessment is submitted this week. The stress-test evidence builds toward
**Assessment 2 — Public Realm and Infrastructure Plan** (Week 9, 25%), which
takes the frontage question as a starting point, and toward **Assessment 3 —
Comprehensive City Plan** (Week 12, 50%), where the corridor decisions made
this week are load-bearing.

### Open questions for the writer

- Slide 5 reproduces Downs's law in its commonly quoted form. Check the wording
  against the 1962 *Traffic Quarterly* article before setting it as a
  quotation, and if the original phrasing differs, set it as a statement of the
  law with the citation rather than as a quote — the slide works either way and
  a misquotation on a `quote` slide is the one error the jury reads as
  carelessness.
- Slide 2's day-30 column is the studio baseline's outcome. Decide whether to
  project a student's own save instead. Using a student's numbers lands harder
  and risks the lecture's opening on whether that student actually widened the
  road; the baseline is safe and slightly less pointed.
- Slides 12–13 assert an environmental capacity of about 1,600 veh/h for
  Pelling Street. Buchanan gives no standard method, so this figure is the
  studio's own convention. Decide whether to present it as a convention openly
  — which is more honest and invites a student to contest it — or to leave it
  as a stated number.

---

## Week 7 — Infrastructure You Don't See

**Date:** 2027-04-19 · **Lecturer:** Nadia Ilkhom · **Deck status:** Planned,
not built. `src/decks/week-07.deck.mdx` does not exist. This is intended to be
the only formal deck in the semester, but the adversarial review found that its
water-network premise conflicts with the documented game mechanics. Rebuild the
mechanic mapping around a versioned reference save before building the deck.

### Argument in one sentence

Every utility in the studio is a network with a flat performance curve and a
cliff at the end of it, so the only real infrastructure decision a designer
makes is how much headroom to pay for while nothing yet looks wrong.

### Learning outcomes

- Read a utility's production-versus-consumption bar and state the district's
  remaining headroom as a percentage of installed capacity.
- Trace a single capacity failure through at least four downstream systems,
  naming the simulation mechanic that carries each step.
- Size a pumping station and a treatment plant against a rezoning that has not
  been built yet, and state the monthly cost of the headroom.
- Defend a headroom decision in terms of fiscal performance and livability
  rather than in terms of safety.

### Theory anchors

- **Susan Leigh Star, "The Ethnography of Infrastructure" (1999).**
  Infrastructure is by definition part of the background of other work, and
  becomes visible only when it breaks down. This is the lecture's title and its
  organising problem: the studio's utilities are the one system students never
  look at until a notification fires.
- **Thomas P. Hughes, *Networks of Power* (1983).** The "reverse salient" — the
  one lagging component that holds an entire technological system below the
  capacity of its other parts. Used to establish that a district's water
  capacity is the pumping station's number, not the sum of its pipes.
- **Charles Perrow, *Normal Accidents* (1984).** Tightly coupled systems with
  interactive complexity convert single faults into cascades that operators
  cannot interrupt in time. This is the theoretical licence for the
  failure-cascade walkthrough that occupies slides 11–16.
- **Joel A. Tarr, *The Search for the Ultimate Sink* (1996).** Urban waste is
  moved between air, land and water rather than removed; every disposal
  decision chooses a receiving medium. Carries the sewage limb of the cascade
  and the outfall-upstream-of-the-intake error.
- **Stephen Graham and Simon Marvin, *Splintering Urbanism* (2001).** Networked
  infrastructures distribute unevenly, and the unevenness follows the network's
  own topology rather than the map's geography. Used to explain why the blocks
  that lose water are not the blocks that caused the shortfall.

### Mechanic mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Star: infrastructure is invisible until breakdown | the water, sewage and electricity info-views, and their production-versus-consumption bars | The bars move for roughly three weeks of simulated time before a single citizen notification fires |
| Hughes: the reverse salient caps the whole system | the single trunk main out of the Wensley Bank pumping station | Adding pipe inside Ombersley Flats raises nothing; the district's capacity stays the pump's number |
| Perrow: tight coupling turns a fault into a cascade | the water → sewage → water-pollution → health → budget chain | One over-capacity treatment plant ends up moving the healthcare budget slider |
| Tarr: waste is moved, not removed | the sewage outfall and the ground- and water-pollution overlays | The plume travels down the Kerrow and arrives at the intake the studio built downstream of it |
| Graham and Marvin: networks splinter along their own topology | pipe-graph distance from the pumping station | Farrant Row loses water first, and Farrant Row added no demand at all |
| — (mechanic with no single theory anchor) | the per-service budget sliders | Dropping the water slider to 80% reduces delivered output, not only the monthly cost |

### The tradeoff of the week

**Fiscal performance against livability**, forced by one decision: how much
headroom to install at the Wensley Bank pumping station and the Farrant Row
treatment plant before the demand exists.

Buy 40% headroom and the monthly upkeep is charged against a tax base that has
not been built yet — fiscal performance drops this quarter, visibly, for a
benefit nobody can see. Run at 92% and the money stays in the account, until
one medium-density completion in Ombersley Flats crosses the cliff and the
cascade takes livability with it across four districts, including the two that
did nothing. Mobility performance is the metric this week does not touch, which
is worth saying out loud: infrastructure failures are the one class of failure
in this studio that leaves the road network entirely alone.

### Slide plan

- **Slide 1 — Infrastructure You Don't See** `class: impact`

  Title slide. Content:

  # Infrastructure You Don't See

  SLOP2418 — Urban Design Studio · Week 7 · 19 April 2027
  Nadia Ilkhom

  **Notes:** First week back from the break, so open by naming the turn: the
  first six weeks were about what a district looks like and how it moves, and
  from here it is about what it can carry.

- **Slide 2 — Where the studio turns** `class: —`

  ## Where the studio turns

  - Weeks 1–3 were form: the site, the street pattern, the zoning envelope.
  - Weeks 4–6 were movement: density, the transit spine, the traffic that
    followed.
  - Every one of those weeks assumed the district was serviced.
  - It is not. It has been running on the starter capacity since Week 1, and
    Ombersley Flats was rezoned for growth in Week 3 that nobody costed the pipes
    for.

  **Notes:** Say plainly that the rezoning in Week 3 is the fault at the base
  of this lecture, and that it has been sitting in every student's save file
  for four weeks.

- **Slide 3 — Three claims about networks** `class: —`

  ## Three claims about networks

  1. A network's capacity is one number, and it belongs to the smallest
     component in the chain.
  2. Performance against load is flat until it is not flat, so the readout
     that matters is capacity, not complaints.
  3. Utilities are tightly coupled to the fiscal and health systems, which
     means a pipe problem does not stay a pipe problem.

  **Notes:** These three claims are the spine of the deck; slides 4–8 establish
  each in turn and slides 11–16 run all three at once.

- **Slide 4 — The capacity curve** `class: centered`

  Inline SVG, no other content on the slide except the caption line.

  **What is drawn.** A single Cartesian plot occupying most of the slide.
  X-axis: *network load, as a percentage of installed capacity*, ticked and
  labelled at 0, 25, 50, 75, 100, 125. Y-axis: *service quality delivered*,
  ticked at 0 and 100 only. One curve: horizontal at y = 100 from x = 0 to
  x = 80; a shallow droop from x = 80 to x = 95 losing about 8% of height; a
  visible knee at x = 95; a near-vertical fall from x = 100 to y = 5 by
  x = 106; horizontal at y ≈ 3 from x = 106 to x = 125.

  **What is labelled.** Black text: "flat, and therefore invisible" set above
  the left plateau; "the knee" with a short leader to x = 95; "the cliff" to
  the right of the fall. Gold: a flat filled band from x = 85 to x = 100
  spanning the full plot height, labelled "the headroom you think you have"; a
  dashed gold vertical at x = 100 labelled "installed capacity"; a gold
  arrow-and-caption at the top of the fall reading "one building completes
  here".

  **What the two inks distinguish.** Black is the measured system — axes,
  ticks, the curve itself. Gold is what the designer believes about it — the
  headroom band, the capacity line, the annotation. Flat fills only; no
  gradients, no drop shadows.

  Caption line beneath the figure: *Every network in this studio has this
  shape. The x-axis units are the only thing that changes.*

  **Notes:** Hold on this slide. The plateau is why students report that
  everything was fine right up until it was not; the plateau is the whole
  problem, because nothing on it is a signal.

- **Slide 5 — Reading the curve: four bands of headroom** `class: —`

  ## Four bands of headroom

  | Headroom remaining | What the district looks like | What it means | What the studio expects you to do |
  | --- | --- | --- | --- |
  | above 30% | nothing wrong | over-built; you are paying monthly for capacity nobody uses | keep the number and defend it in the memo |
  | 15–30% | nothing wrong | the working band | leave it; check your growth rate, not your pipes |
  | 5–15% | nothing wrong | one completion from the knee | schedule the upgrade now, at this quarter's price |
  | under 5% | nothing wrong | you are already late | upgrade before you place another zone |

  **Notes:** Point at the second column and read it aloud four times. The
  district looks identical in all four rows, which is why the capacity bar and
  not the notification feed is the readout of record.

- **Slide 6 — Star on breakdown** `class: quote`

  > Infrastructure becomes visible upon breakdown.

  — Susan Leigh Star, "The Ethnography of Infrastructure", *American
  Behavioral Scientist* 43(3), 1999

  **Notes:** Star's point is descriptive, not a complaint: the invisibility is
  what makes infrastructure useful. The studio's job is to build a habit of
  looking at it anyway, three weeks early.

- **Slide 7 — The four networks** `class: —`

  ## The four networks

  | Network | What constrains it | Where you read it | What failure looks like first |
  | --- | --- | --- | --- |
  | Water | pumping station output, then the pipe graph's reach | water info-view; production-versus-consumption bar | insufficient-water notices at the far end of the main |
  | Sewage | treatment plant throughput; the receiving water at the outfall | sewage info-view; ground- and water-pollution overlays | untreated discharge, then a plume downstream |
  | Electricity | generation capacity, then transformer and line throughput | electricity info-view; the grid graph | outage across the whole connected grid, not one block |
  | Garbage | collection fleet, then landfill and incinerator throughput | garbage info-view | accumulation at buildings, ground pollution, abandonment |

  **Notes:** Four networks, four different constraint shapes. Electricity is the
  one that fails globally and instantly; garbage is the one that fails slowly
  enough to be mistaken for a zoning problem.

- **Slide 8 — Two geometries of failure** `class: centered`

  Inline SVG, two panels of equal width side by side, each with a black title
  above it. Caption beneath both.

  **Left panel, titled "Radius: the services".** A black square district
  boundary. A black filled dot near its centre labelled "fire station". One
  gold circle centred on the dot, roughly 60% of the boundary's width. Twelve
  small squares scattered across the district represent buildings: those inside
  the circle drawn as solid black squares; the four outside drawn as hollow
  squares with a gold outline, with one gold leader labelled "uncovered". Under
  the panel, black text: "degrades at the edge".

  **Right panel, titled "Network: the utilities".** A black filled dot at the
  far left labelled "pumping station". A single thick black line runs right
  across the panel, branching downward three times into three clusters of four
  small squares each, labelled "Halstead Reach", "Ockley Green", "Ombersley
  Flats". Every square in all three clusters is filled flat gold, and the trunk
  line itself is overlaid gold. One gold leader spanning all three clusters
  reads "all of it, at once". Under the panel, black text: "fails along the
  graph".

  **What the two inks distinguish.** Black is the built network and the
  district fabric. Gold is the failure's extent. In the left panel gold stops
  at a distance; in the right panel gold reaches everything the pipe reaches.

  Caption: *Coverage degrades at the edge. Capacity fails everywhere it
  reaches.*

  **Notes:** Students carry a mental model built from the district-based
  service-radius weeks and apply it to utilities, which is why they expect the
  blocks nearest the pumping station to suffer first. This slide is the
  correction, and slide 12 is the proof.

- **Slide 9 — The Kerrow corridor, as a network** `class: centered`

  Inline SVG, the deck's largest figure. Left-to-right schematic with a river
  band along the bottom.

  **The river.** A flat gold horizontal band across the full width at the
  bottom of the figure, about 6% of the figure's height, labelled "the Kerrow"
  with a gold arrowhead at its right end and the black text "flow" beside it.
  Everything about direction depends on this: the river runs left to right.

  **The built network, all in black.** Rounded rectangles with black labels,
  connected by black lines of two weights — heavy for the trunk main, light for
  district distribution:

  - **Farrant Row treatment plant** — upper left. Two label lines: "capacity
    1,000 u", "load 880 u — 88%".
  - **Farrant Row outfall** — below the plant, sitting on the river band at
    about 20% of the figure's width.
  - **Wensley Bank pumping station** — right of centre, on the upper row.
    Label lines: "capacity 1,200 u", "draw 1,104 u — 92%".
  - **Kerrow intake** — below the pumping station, sitting on the river band at
    about 70% of the figure's width. A gold arrow runs from the river band up
    into the pumping station.
  - **The trunk main** — one heavy black line running left from the pumping
    station along the upper row, with four light tap-offs down to four district
    boxes, in this order from the pump outward: **Halstead Reach** "312 u",
    **Ockley Green** "418 u", **Ombersley Flats** "374 u · rezoned Wk 3",
    **Farrant Row** "0 u · end of the main".
  - **Return sewers** — light black lines from all four district boxes
    converging leftward into the Farrant Row treatment plant, then a single
    gold arrow from the plant down into the outfall on the river band.

  **The loop, in gold.** A gold hatched wedge on the river band running from
  the outfall rightwards to the intake, widening slightly as it goes, labelled
  "plume — six weeks of travel". A gold curved arrow closes the figure from the
  plume back up to the pumping station. One gold label set in the middle of the
  river band: "the only closed loop in this diagram".

  **What the two inks distinguish.** Black is what the studio paid for: plant,
  pump, pipe, districts, and their capacity numbers. Gold is what moves through
  it: river, intake, discharge, plume. Keep that rule for every figure in the
  deck.

  A black dashed rectangle encloses the whole figure, labelled at its lower
  edge: "one utility, four districts, one point of failure".

  **Notes:** Draw attention to the geography before the numbers. The outfall
  sits upstream of the intake, which is a decision somebody made in Week 1 by
  placing the pumping station where the road already went.

- **Slide 10 — The reverse salient** `class: —`

  ## The reverse salient

  - Hughes's term for the one component whose capacity holds the whole system
    below the capacity of its other parts.
  - In the Kerrow corridor it is Wensley Bank: 1,200 u installed against
    1,104 u of draw.
  - Total distribution pipe in the four districts could carry roughly three
    times that. It is irrelevant.
  - The zoning envelope approved in Week 3 implies about 1,340 u at build-out.
    The pump was never revisited.

  **Notes:** The arithmetic is the point: 1,340 against 1,200. The failure in
  this deck was designed four weeks ago and has been waiting for a construction
  crew to finish.

- **Slide 11 — Cascade, steps 1 and 2: the trigger** `class: banner`

  ## The cascade begins

  **Step 1.** A medium-density residential block completes on Ombersley Flats'
  eastern edge. District draw rises 374 u → 412 u. Corridor draw crosses
  1,200 u. Load: 103%.

  **Step 2.** Delivered pressure along the trunk main falls. No notification
  fires for four days. The production-versus-consumption bar has been red since
  the frame the block completed.

  **Notes:** Nothing has visibly happened yet. If a student is watching the
  notification feed rather than the capacity bar, they are now four days into a
  failure they have not been told about.

- **Slide 12 — Cascade, step 3: the far end fails first** `class: centered`

  Inline SVG, plus one black callout line beneath the figure.

  **What is drawn.** A single horizontal black line across the figure
  representing the trunk main, with the pumping station as a black dot at the
  left end and four black tick marks along it labelled, left to right,
  "Halstead Reach", "Ockley Green", "Ombersley Flats", "Farrant Row". Above the
  line, a flat gold filled area representing delivered flow: full height at the
  pump, holding to about the Ockley Green tick, then tapering steadily to zero
  just short of the Farrant Row tick. A black dotted horizontal line runs the
  full width at about 30% of the figure's height, labelled at its right end
  "minimum to service a building". A black bracket under the segment where the
  gold area sits below the dotted line, labelled "Farrant Row, and the last two
  blocks of Ombersley Flats".

  **What the two inks distinguish.** Black is the pipe and the threshold — the
  fixed facts. Gold is the water actually arriving, which is the variable.

  Callout beneath: *The blocks that lose water are not the blocks that caused
  the shortfall.*

  **Notes:** Farrant Row contributed 0 u of the overload and loses service
  first, because it is furthest along the graph. This is Graham and Marvin's
  splintering in its simplest possible form.

- **Slide 13 — Cascade, steps 4 and 5: the fiscal limb** `class: —`

  ## The money leaves at the same time as the water

  **Step 4.** Unserviced buildings pass the grace period and abandon.
  Twenty-two dwellings in Farrant Row, nine in eastern Ombersley Flats. Land
  value in the affected blocks falls, and the land value overlay shows the drop
  spreading one block past the abandonment.

  **Step 5.** Abandoned buildings pay nothing. The upgrade becomes necessary in
  the same quarter that the revenue to pay for it disappears.

  | Budget line | Before the trigger | Four weeks after | Change |
  | --- | --- | --- | --- |
  | Residential tax, Ombersley Flats | ₡14,200 / mo | ₡9,850 / mo | −31% |
  | Residential tax, Halstead Reach | ₡21,600 / mo | ₡20,400 / mo | −6% |
  | Water and sewage upkeep | ₡8,900 / mo | ₡13,400 / mo | +51% |
  | Healthcare upkeep | ₡6,100 / mo | ₡9,700 / mo | +59% |
  | Net operating balance | +₡11,300 / mo | −₡4,600 / mo | — |

  **Notes:** Halstead Reach is in this table and did nothing. Its 6% is the
  land-value effect of being on the same overlay as a district that abandoned,
  and it is the first sign that the failure has left Ombersley Flats.

- **Slide 14 — Cascade, steps 6 and 7: the fix that breaks the next thing** `class: centered`

  Inline SVG ring diagram, plus a short black note beneath.

  **What is drawn.** Six black rounded rectangles arranged clockwise around an
  empty centre, joined by gold arrows running clockwise, each arrow bearing a
  small gold step number. Node text, starting at twelve o'clock:

  1. "second pump installed at Wensley Bank — water restored, corridor draw
     1,412 u"
  2. "treatment plant receives full restored load — 1,090 u against 1,000 u
     capacity"
  3. "untreated discharge at the Farrant Row outfall"
  4. "plume travels down the Kerrow to the intake"
  5. "polluted intake — sickness in Halstead Reach and Ockley Green"
  6. "healthcare slider raised; treatment upgrade deferred to next quarter"

  A gold arrow closes the ring from node 6 back to node 2. One node — node 4 —
  is filled flat gold with its text reversed to the cream ground, with a black
  label outside the ring reading "you are here, and the readout is clean".

  **What the two inks distinguish.** Black is the built system and its
  decisions. Gold is the flow of consequence: every arrow, and the one node the
  designer is standing in.

  Note beneath the figure: *Tarr: the waste was not removed. It was given to
  the river, and the river gave it back.*

  **Notes:** Step 1 is a correct engineering decision that makes the system
  worse, because it restores the load the treatment plant was quietly being
  spared. This is Perrow's interactive complexity, and it is why the
  walkthrough is worth twenty minutes of a lecture.

- **Slide 15 — Cascade, step 8: the failure leaves the district** `class: —`

  ## Step 8: it is no longer Ombersley Flats' problem

  - Waterborne sickness raises healthcare demand in Halstead Reach and Ockley
    Green — the two districts with no part in the overload.
  - Well-being falls in both. Livability, as the studio measures it, falls
    across the corridor rather than in the district that failed.
  - Halstead Reach's land value flattens; its commercial demand softens a week
    later.
  - The corridor now needs a treatment upgrade, a healthcare increase, and the
    pump it already bought. The Week 3 rezoning is the only decision that
    caused any of it.

  **Notes:** This is the slide to land hard. A capacity decision in one district
  is a livability decision in every district downstream of its waste, which is
  the argument for treating the corridor and not the district as the unit of
  infrastructure design.

- **Slide 16 — The whole cascade on one page** `class: centered`

  Inline SVG. Eight black rounded rectangles in two rows of four, read left to
  right along the top row then left to right along the bottom row, joined by
  numbered gold arrows. Short node text, one line each:

  1. "Wk 3 rezoning, pipes not revisited"
  2. "one block completes — load 103%"
  3. "pressure falls at the end of the main"
  4. "Farrant Row abandons"
  5. "tax base contracts"
  6. "second pump restores load to the plant"
  7. "untreated discharge, plume to the intake"
  8. "sickness upstream of nothing; healthcare slider up"

  A gold return arrow curves from node 8 back to node 5, labelled "and the
  money for the fix is gone".

  Two black brackets above the figure: one spanning nodes 1–3 labelled "visible
  in the capacity readout"; one spanning nodes 4–8 labelled "visible in the
  streets". A gold vertical rule between node 3 and node 4, labelled in gold:
  "three weeks".

  **Notes:** Three weeks is the whole clinic. Half the utility failures in this
  studio are legible in the capacity readouts three weeks before they are
  legible anywhere else, and this figure is where students should be aiming to
  intervene.

- **Slide 17 — What you are actually choosing** `class: impact`

  # Headroom costs money now and buys nothing visible

  **Fiscal performance** against **livability**, in one number: the headroom
  you install at Wensley Bank before the demand exists.

  - 40% headroom: ₡5,200 / mo of upkeep charged against a tax base that has not
    been built. Fiscal performance falls this quarter, for a benefit no
    screenshot can show.
  - 8% headroom: ₡0 / mo, and slides 11–16.

  There is no third option where the pipes are free. There is only a choice
  about which metric absorbs the cost, and a memo in which you say which one
  you chose.

  **Notes:** Close by refusing to give the answer. Both numbers are defensible
  at the jury; only one of them is defensible without having been thought
  about.

- **Slide 18 — This week** `class: —`

  ## This week

  - **Utilities clinic**, Thursday. Bring your save file with the water,
    sewage and electricity info-views already open and your current headroom
    written down as three percentages.
  - **Studio session**: we run the cascade live on one volunteered save. If it
    is yours, you will have found your reverse salient before the room does.
  - **Assessment 2**, due Week 9 — *Public Realm & Infrastructure Plan*, 25%.
    Fiscal 30, livability 45, mobility 25. The infrastructure half of that
    title is this week, and the headroom argument belongs in the memo.
  - Book the clinic even when nothing is broken. That is when it is useful.

  **Notes:** Say the Week 9 weighting out loud. Students consistently read
  "Public Realm & Infrastructure" as a parks brief with a utilities appendix,
  and the fiscal 30 is mostly earned or lost on this week's material.

### Studio session hand-off

- Students arrive with the Week 6 save carried forward, unmodified, and with
  the Ombersley Flats rezoning from Week 3 still in place. No pre-session repairs.
- Three numbers written down before the session starts: water headroom, sewage
  headroom, electricity headroom, each as a percentage of installed capacity.
- The session runs the slide 11–16 cascade live on one student's save, with the
  water info-view and the water-pollution overlay both open, and stops at each
  step to ask what the readout showed and when.
- The utilities clinic on Thursday takes individual networks; students should
  arrive having already identified their own reverse salient rather than
  expecting the clinic to find it.

### Assessment hooks

Feeds **Assessment 2 — Public Realm & Infrastructure Plan** (due Week 9, 25%),
principally its **fiscal 30** and **livability 45** criteria: the headroom
decision is a fiscal argument, and the cascade is the reason it is also a
livability argument. Also builds directly toward **Week 10 — Resilience**,
which takes the same networks under hazard load, and toward the **Week 12
capstone**, where the corridor-scale utility argument is expected to be made
once rather than per district.

### Open questions for the writer

- The currency symbol. This plan uses ₡ throughout to match the simulation's
  own notation; if the site's other pages settle on a plain figure with
  "/month", normalise the tables in slides 13 and 17 to match.
- Slide 6's pull-quote is a close paraphrase of Star's argument rather than a
  verified verbatim sentence. Either check the 1999 essay and quote it exactly,
  or reset the slide as an attributed statement of the idea in the studio's own
  words.
- Whether slides 11–16 are delivered as slides at all, or whether the deck cuts
  from slide 10 to slide 17 and the cascade is run live in the projector's
  simulation window with slides 12, 14 and 16 as the only figures. Either is
  workable; the live version needs a prepared save file and a fallback.

---

## Week 8 — Fiscal Realism: Taxes, Budgets and the Limits of Growth

**Date:** 2027-04-26 · **Lecturer:** Tobias Wren · **Deck status:** No deck —
delivered as a talk from the lecture page, with the tables projected from the
page itself and the land value info-view live on the second screen. The running
order below is the plan of record and would be the basis if a deck is ever
built.

### Argument in one sentence

Public investment creates land value that a district can recapture, but
recapture has a ceiling, and once the ceiling is reached the budget stops being
a constraint on the design and becomes the design — because the only remaining
question is which metric you cut.

### Learning outcomes

- State the four revenue lines in the current build and each one's share of
  monthly income.
- Distinguish a tax-rate change from a budget-slider change by naming exactly
  what each one alters and on what delay.
- Close an imposed ₡9,000 / month deficit in three different ways and cost each
  one in mobility performance and livability.
- Read the land value info-view and attribute a specific value increase to a
  specific public investment.

### Theory anchors

- **Henry George, *Progress and Poverty* (1879).** Land value is created by the
  presence and investment of the community rather than by the owner, so the
  unimproved value of land is the just base for public revenue. The week's
  central claim, and the justification for reading the land value overlay as a
  map of the studio's own spending.
- **Joseph Stiglitz, "The Theory of Local Public Goods" (1977), and Arnott and
  Stiglitz (1979) — the Henry George theorem.** Under a set of idealising
  conditions, the aggregate land rent generated by a public good is exactly
  sufficient to pay for it. Used as the studio's optimistic bound: the version
  of fiscal performance where the parks pay for themselves, and a checklist of
  the assumptions that make it false in the build.
- **Charles Tiebout, "A Pure Theory of Local Expenditures", *Journal of
  Political Economy* (1956).** Households sort between jurisdictions according
  to the bundle of taxes and services on offer. Carries the argument that a tax
  rate is an admissions policy, mapped onto demand by education and wealth
  level.
- **William Vickrey, on land taxation and marginal-cost pricing (1963; "Defining
  Land Value for Taxation Purposes", 1970).** A tax on land does not discourage
  the thing being taxed, unlike a tax on building or on activity. Used to
  separate the two levers the studio actually has and to explain why they
  behave differently.
- **Donald Shoup, *The High Cost of Free Parking* (2005).** A public good
  supplied without a price is a subsidy whose cost appears somewhere else in
  the budget. Used for the upkeep argument: the arterial that was cheap to
  build and is charged monthly for the rest of the semester.

### Mechanic mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| George: the community creates land value | the land value info-view | Place a square in Ockley Green and the overlay lifts two blocks either side before a single building changes |
| Henry George theorem: land rent funds the public good | tax rates set per zone type and per education level, against unchanged buildings | The tax take from Ockley Green rises with no rezoning, no growth and no rate change |
| Tiebout: households sort by the tax-and-service bundle | demand bars by wealth and education level | Push residential tax past roughly 13% and high-education demand falls before low-education demand moves |
| Vickrey: a good tax does not distort what you want more of | the tax-rate panel against the budget sliders | The tax slider changes who arrives; the budget slider changes what they get when they do |
| Shoup: an unpriced service is a subsidy paid elsewhere | one-off road build cost against permanent road upkeep | The Kerrow corridor's arterial upkeep line grows every time the road is widened, and never falls |
| — (mechanic with no single theory anchor) | the per-service budget sliders | At 70% funding a school's capacity and coverage shrink faster than its cost does |

### The tradeoff of the week

**Mobility performance against livability**, with **fiscal performance** held
fixed as the binding constraint. That is the shape of this week and it is
deliberately different from Week 7's.

The imposed cutback is a ₡9,000 / month operating deficit in the Kerrow
corridor, non-negotiable, to be closed by the end of the studio session. The
two cheapest closures are the transit operating budget and the education and
healthcare budgets. Cut transit and the corridor's bus frequency drops, load
factor rises past 1.0 and car mode share climbs — mobility performance falls.
Cut education and healthcare and coverage retreats from Farrant Row while
well-being falls corridor-wide — livability falls. Fiscal performance is the
same number either way, which is what makes it a design decision rather than an
accounting one.

### Slide plan

- **Slide 1 — Fiscal Realism: Taxes, Budgets and the Limits of Growth** `class: impact`

  # Fiscal Realism
  ## Taxes, Budgets and the Limits of Growth

  SLOP2418 — Urban Design Studio · Week 8 · 26 April 2027
  Tobias Wren

  **Notes:** Open on the deficit, not the theory. The number is on the next
  slide and it is real for every student in the room.

- **Slide 2 — You are ₡9,000 short** `class: banner`

  ## You are ₡9,000 a month short

  Effective from this session, the Kerrow corridor carries an imposed operating
  deficit of **₡9,000 per month**. It is not a modelling error and it is not
  negotiable.

  By the end of Thursday's studio you will have closed it. This lecture is
  about the three ways that is possible and what each one costs in a metric
  that is not fiscal performance.

  **Notes:** Say that the deficit is imposed rather than earned, so nobody
  spends the hour arguing about whose zoning caused it. The interesting
  question is not the cause; it is the closure.

- **Slide 3 — Where the money comes from** `class: —`

  ## Where the money comes from

  | Revenue line | Share of monthly income | What moves it | Delay before it moves |
  | --- | --- | --- | --- |
  | Residential tax | ~46% | rate, population, land value, education mix | 2–4 weeks |
  | Commercial tax | ~24% | rate, footfall, land value at the frontage | 1–2 weeks |
  | Industrial and office tax | ~19% | rate, resource-chain throughput, office demand | 4–8 weeks |
  | Service fees and fares | ~11% | ridership, utility consumption, fee settings | immediate |

  **Notes:** Three of these four lines depend on land value and only one depends
  on activity. That ratio is the argument for the rest of the lecture.

- **Slide 4 — George, in one paragraph** `class: —`

  ## George, in one paragraph

  - A parcel's value is almost entirely a function of what surrounds it: the
    road, the transit stop, the school catchment, the square at the end of the
    street.
  - None of those were built by the parcel's owner. All of them were built by
    the studio, out of the operating budget.
  - George's conclusion is that the resulting value is the community's, and is
    the proper base for public revenue.
  - The studio's narrower conclusion: the land value info-view is a map of your
    own past spending, and it is the only readout that tells you which of your
    investments worked.

  **Notes:** The last bullet is the operational one. Students treat land value
  as a symptom of desirability; it is better read as a receipt.

- **Slide 5 — Who made the value** `class: centered`

  Two-panel figure, drawable as inline SVG in the house two inks.

  **What is drawn.** The same six-block fragment of Ockley Green twice, side by
  side, each panel a 3 × 2 grid of black-outlined rectangular blocks with the
  street grid between them as thin black lines. Land value is shown as flat gold
  fill in four discrete steps — no fill, 25%, 55%, 100% — with a four-step key
  below the pair labelled "land value, quartile".

  **Left panel, titled "Week 4".** Two blocks unfilled, three at the 25% step,
  one at 55%.

  **Right panel, titled "Week 6".** One black-outlined gold square drawn in the
  gap between the middle two blocks, labelled "square, ₡310 / mo". Two blocks
  now at 100%, two at 55%, two at 25%.

  **What the two inks distinguish.** Black is the built fabric, unchanged
  between panels — same blocks, same buildings, same streets. Gold is value,
  and the only new black object in the right panel is the square.

  Caption: *Nobody in these six blocks did anything. Four of them are now worth
  more.*

  **Notes:** Hold the two panels together and ask what changed. The answer is
  ₡310 a month, which is the cheapest thing on the corridor's budget.

- **Slide 6 — George on the land tax** `class: quote`

  > The tax upon land values is, therefore, the most just and equal of all
  > taxes.

  — Henry George, *Progress and Poverty*, 1879, Book VIII

  **Notes:** Quote it and then step back from it. The studio is not adjudicating
  nineteenth-century tax philosophy; it is borrowing George's causal claim, which
  is the part the simulation actually implements.

- **Slide 7 — The Henry George theorem, stated carefully** `class: —`

  ## The optimistic bound

  Stiglitz (1977), with Arnott (1979): under a set of idealising conditions, the
  aggregate rise in land rent produced by a public good is exactly enough to
  pay for that public good.

  The conditions the corridor does not meet:

  - It assumes population is free to move in response. Yours is, partly.
  - It assumes the public good is optimally sized. The Halstead Reach civic
    plaza is not.
  - It assumes the rent is fully captured. You capture a percentage of it, set
    by a slider, and that percentage also drives people away.

  **Notes:** This is the ceiling on land value capture and the reason the rest
  of the lecture is about cuts rather than about revenue. The theorem is true
  and it is not going to save anyone's budget this week.

- **Slide 8 — The two levers, and they are not the same lever** `class: —`

  ## The two levers

  | | Tax rate | Budget slider |
  | --- | --- | --- |
  | What it changes | how much of existing activity you take | how much service you supply |
  | Who notices | prospective residents and businesses | existing residents and businesses |
  | Speed | 2–4 weeks, through demand | immediate, through coverage and capacity |
  | Failure mode | the district stops growing | the district stops working |
  | Reversible? | yes, and cheaply | yes, but the abandonment is not |

  **Notes:** Vickrey's distinction, made operational. Students reach for the tax
  slider because it has a plus sign on it, and it is the slower of the two by a
  month.

- **Slide 9 — Your tax rate is an admissions policy** `class: —`

  ## Your tax rate is an admissions policy

  Tiebout (1956): households choose the jurisdiction whose bundle of taxes and
  services suits them. In the corridor that shows up as demand by education
  level.

  | Residential rate | Low-education demand | High-education demand | Net monthly change |
  | --- | --- | --- | --- |
  | 9% (current) | steady | steady | — |
  | 11% | steady | −8% | +₡5,400 |
  | 13% | −3% | −21% | +₡8,100 |
  | 15% | −14% | −38% | +₡6,900 |

  **Notes:** The last row is the one to sit with. Fifteen per cent raises less
  than thirteen, and the households it loses first are the ones the office
  demand depends on.

- **Slide 10 — A budget slider is not a discount** `class: —`

  ## A budget slider is not a discount

  What actually happens at 70% funding on a school:

  - Its coverage radius contracts before its student capacity does.
  - The blocks that fall outside the new radius do not lose a little education.
    They lose all of it.
  - The uneducated cohort begins to grow about six weeks later, and it is the
    input to office demand about twelve weeks after that.
  - The saving is 30%. The service is not 70% of a service.

  **Notes:** This is the standard student error of the week: reading the slider
  as a proportional dial rather than as a threshold device sitting on a
  coverage model.

- **Slide 11 — The funding-response curve** `class: centered`

  Inline SVG. Deliberately drawn as the mirror image of Week 7's capacity curve,
  and the slide should say so.

  **What is drawn.** A Cartesian plot. X-axis: *service funding, as a percentage
  of default*, ticked at 50, 70, 90, 100, 120, 150. Y-axis: *service actually
  delivered*, ticked at 0 and 100 only. One black curve: near zero at x = 50,
  rising steeply from x = 60 to x = 95, a knee at about x = 95, then almost flat
  from x = 100 to x = 150 gaining perhaps 6% of height across the whole upper
  range.

  **What is labelled.** Gold: a flat filled band from x = 65 to x = 100 labelled
  "where a cut is a real cut"; a second, lighter gold band from x = 100 to
  x = 150 labelled "where money buys almost nothing"; a dashed gold vertical at
  x = 100 labelled "default funding". Black: "the knee" with a leader to x = 95.

  **What the two inks distinguish.** Black is the measured response. Gold is the
  designer's reading of it — the two bands and the reference line.

  Caption: *Week 7's capacity curve, reflected. The flat part is above 100% here
  and below 85% there, and both flats are where the money is wasted.*

  **Notes:** Point back at Week 7 explicitly. Over-funding a service and
  over-provisioning a pump are the same mistake seen from two directions, and
  the corridor is currently making both.

- **Slide 12 — Five ways to find ₡9,000** `class: —`

  ## Five ways to find ₡9,000

  | Move | Monthly effect | First visible consequence | Metric it lands on |
  | --- | --- | --- | --- |
  | Transit operating budget 100% → 75% | +₡4,100 | frequency drops; corridor bus load factor over 1.0; car mode share up | mobility performance |
  | Education 100% → 70% | +₡3,600 | Ockley Green primary's radius retreats off Farrant Row | livability now, fiscal in eight weeks |
  | Healthcare 100% → 80% | +₡2,200 | clinic coverage leaves Farrant Row entirely | livability |
  | Residential tax 9% → 11% | +₡5,400 | high-education demand falls 8%; land value flattens | fiscal now, livability later |
  | Defer the Wensley Bank pump upgrade | +₡4,500 | nothing at all, for three weeks | Week 7, in full |

  **Notes:** The last row is on the table because students will find it
  themselves. Take it seriously as an option and then walk the room back through
  slide 16 of last week.

- **Slide 13 — Two closures, worked through** `class: —`

  ## Two closures, sixteen weeks out

  Both close ₡9,000. Neither is wrong.

  | | **A — transit and healthcare** | **B — education and tax** |
  | --- | --- | --- |
  | Composition | transit 75% (₡4,100), healthcare 80% (₡2,200), tax 9% → 10% (₡2,700) | education 70% (₡3,600), tax 9% → 11% (₡5,400) |
  | Week 4 | bus load factor 1.14; clinic off Farrant Row | primary radius off Farrant Row; demand softening |
  | Week 8 | car mode share +9 points; corridor arterial at capacity in the peak | uneducated cohort +6%; well-being −4 in two districts |
  | Week 16 | road upkeep +₡1,900 / mo; deficit partly reopened | office demand −11%; commercial tax line falling |
  | Metric taken | mobility performance | livability, then fiscal performance |

  **Notes:** Both closures reopen the deficit eventually, by different routes and
  at different speeds. The honest version of this slide is that a cut is a loan
  against a metric, and the memo has to say which metric and for how long.

- **Slide 14 — The upkeep you already signed for** `class: —`

  ## The upkeep you already signed for

  Shoup's argument, applied to the road rather than the kerb: a public good
  supplied without a price is a subsidy, and the subsidy appears somewhere else
  on the budget.

  - The Kerrow corridor arterial cost ₡41,000 to build, once, in Week 5.
  - It has cost ₡1,240 a month ever since, and the widening in Week 6 took that
    to ₡1,610.
  - Across twelve weeks of studio the upkeep will exceed a third of the build
    cost, and nothing about the road will have improved.
  - There is no slider that switches a road off. It is the only line on the
    budget with no dial next to it.

  **Notes:** This is where the deficit actually came from, in most students'
  builds, and it is the argument for treating road width as a fiscal decision
  in the Week 9 and Week 12 memos rather than only a mobility one.

- **Slide 15 — What you are actually choosing** `class: impact`

  # Fiscal performance is fixed. Pick the other one.

  The ₡9,000 closes either way. What differs is which metric pays for it:

  - **Mobility performance** — cut the transit operating budget, hold the
    services, and watch car mode share do the rest.
  - **Livability** — cut education and healthcare coverage, hold the buses, and
    watch well-being fall in the districts the coverage leaves.

  A budget is not a limit on the design. It is the part of the design where you
  have to say which metric you are willing to be worse at.

  **Notes:** End on the memo. Every closure is defensible at the jury; a closure
  chosen by which slider was nearest the mouse is not.

- **Slide 16 — This week** `class: —`

  ## This week

  - **Studio session**, Thursday: close the ₡9,000 in the room. Arrive with the
    fiscal readout and the land value info-view already open.
  - Write down your closure and its cost in one metric before you touch a
    slider. If those two lines contradict what the readout does by Week 4 of the
    run, that contradiction goes in the memo.
  - **Assessment 2**, due next week — *Public Realm & Infrastructure Plan*, 25%.
    Fiscal 30, livability 45, mobility 25.
  - Next week is the public realm, which is the cheapest livability on the
    budget and the reason the fiscal 30 and the livability 45 are on the same
    brief.

  **Notes:** Trail Week 9 as the other half of this argument. The square in slide
  5 costs ₡310 a month and moved four blocks of land value, which is the best
  fiscal-to-livability ratio anywhere in the corridor.

### Studio session hand-off

- Students arrive with the Week 7 save carried forward, the Wensley Bank
  headroom decision already made and recorded, and the ₡9,000 deficit applied.
- The fiscal readout and the land value info-view are both open before the
  session starts; budget questions in this studio go badly otherwise.
- One written line before any slider moves: the intended closure and the metric
  it is expected to cost. The session compares that line against the readout at
  four simulated weeks.
- The session ends with each student's closure entered in the corridor's shared
  budget sheet, which Week 9 assumes exists when it costs the plaza options.

### Assessment hooks

Feeds **Assessment 2 — Public Realm & Infrastructure Plan** (due Week 9, 25%),
principally its **fiscal 30** criterion: the plan is expected to arrive with a
funded budget, not an aspirational one, and the closure chosen this week is the
budget it arrives with. Secondary weight on **mobility 25**, since closure A
above will still be visible in the corridor's mode share at the jury. Also the
main fiscal groundwork for the **Week 12 capstone**, where the corridor is
costed as a whole rather than district by district.

### Open questions for the writer

- Whether the ₡9,000 deficit is the same figure for every student or scaled to
  the size of their build. A flat figure makes the room comparable and punishes
  the students with the smallest corridors; a scaled figure is fairer and makes
  the studio discussion harder to run.
- Whether the Shoup material on slide 14 stays here or moves to Week 12. It is
  the strongest argument in the lecture and it is also the one least connected
  to the imposed cutback.
- The currency symbol, which should match whatever Week 7 settles on.

---

## Week 9 — Parks, Plazas and the Public Realm

**Date:** 2027-05-03 · **Lecturer:** Tobias Wren · **Deck status:** No deck —
delivered as a talk from the lecture page, with the attractiveness overlay and
the day/night cycle running live on the second screen. The running order below
is the plan of record and would be the basis if a deck is ever built.
Assessment 2 is due this week, so the lecture runs short by fifteen minutes and
the brief walkthrough on slide 3 is not optional.

### Argument in one sentence

The public realm is the cheapest livability a district can buy and the easiest
to build badly, because whether a space works is a question about edges,
seating and sightlines rather than about area.

### Learning outcomes

- Apply Whyte's sitting-space ratio to a plaza in the current build and state
  the deficit in linear metres.
- Diagnose a low-visitor park from the attractiveness and pedestrian readouts
  rather than from its plan.
- Compare one large public space against a distributed set of small ones on
  livability and fiscal performance, with monthly figures for both.
- Assemble the Assessment 2 pin-up so that each of its three criteria has a
  named piece of evidence attached to it.

### Theory anchors

- **Jane Jacobs, *The Death and Life of Great American Cities* (1961).** Her
  three conditions for a street that works: a clear demarcation between public
  and private space; eyes upon the street from buildings oriented towards it;
  and users on it fairly continuously through the day. The week's first
  diagnostic, and the reason the frontage matters more than the park.
- **William H. Whyte, *The Social Life of Small Urban Spaces* (1980).** Direct
  observation of plaza use found sittable space to be the strongest predictor,
  along with the relationship to the street, food, sun, water and trees; and
  "triangulation", where an object or event gives strangers a reason to talk.
  Whyte's working guideline of one linear foot of sitting space per thirty
  square feet of plaza is the week's only piece of arithmetic.
- **Ray Oldenburg, *The Great Good Place* (1989).** The third place — neither
  home nor work — characterised by neutral ground, a levelling of status,
  conversation as the main activity, accessibility, a set of regulars, a low
  profile, a playful mood, and the feel of a home away from home. Used to
  explain why commercial demand appears against a good plaza edge unprompted.
- **Jan Gehl, *Life Between Buildings* (1971).** Necessary, optional and social
  activities: necessary activity happens regardless of the quality of the
  space, and only optional activity responds to it. This gives the studio its
  measurement protocol, since optional presence is what the day/night cycle
  makes visible.
- **Christopher Alexander et al., *A Pattern Language* (1977).** Pattern 61,
  *Small Public Squares*, holds that a square wider than about 45 to 60 feet
  stops working as a room; Pattern 106, *Positive Outdoor Space*, holds that
  outdoor space must be shaped and enclosed rather than left over. Both are
  used against the Halstead Reach civic plaza.

### Mechanic mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Jacobs: eyes upon the street | mixed-use zoning putting residential above ground-floor commercial on the frontage | Ockley Green's mixed frontage holds a non-zero pedestrian count at 22:00 while the single-use retail strip empties by 19:30 |
| Whyte: sittable space and the street relationship | park and plaza upkeep, and the park's own visitor count | A plaza set behind a car park draws its visitors from one direction only, and the footpath graph shows which |
| Oldenburg: the third place | ground-floor commercial demand adjacent to leisure coverage | Commercial demand appears against a working plaza edge without being zoned for |
| Gehl: optional activity is the diagnostic | the day/night cycle, weather, and pedestrian pathfinding on footpaths | Presence at 19:00 in fine weather is the test; the 08:00 count would be the same in a car park |
| Alexander 61 and 106: shaped, small, enclosed | park footprint sizing against the district-based service-radius model | A single 60 m square reads as leftover ground; three 18 m squares at the corners read as three places |
| — (mechanic with no single theory anchor) | the park maintenance budget slider and the attractiveness overlay | Cutting park upkeep to 60% drops the attractiveness contribution weeks before anything looks different |

### The tradeoff of the week

**Livability against fiscal performance**, forced by one decision on the Kerrow
corridor: the Halstead Reach civic plaza, or the eleven pocket squares.

One 3,600 m² civic plaza at ₡6,800 a month reaches 1,900 people within 300 m
and dominates the attractiveness overlay locally. Eleven 320 m² squares
distributed along the corridor cost ₡3,410 a month in total, reach 7,400 people
within 300 m, and lift the overlay everywhere by less. The plaza is worse on
both livability and fiscal performance and it is the option students choose,
because it is the option that pins up. **Mobility performance** enters through
the footpath network: the distributed option only reaches its 7,400 if the
corridor's footpath connections are completed, which is a mobility spend
recorded against a livability benefit.

### Slide plan

- **Slide 1 — Parks, Plazas and the Public Realm** `class: impact`

  # Parks, Plazas and the Public Realm

  SLOP2418 — Urban Design Studio · Week 9 · 3 May 2027
  Tobias Wren

  **Notes:** Say the due time in the first thirty seconds. Nobody in the room is
  listening to theory until they have been told what happens at 12:00 and
  14:00 today.

- **Slide 2 — Due today** `class: banner`

  ## Assessment 2 is due today

  *Public Realm & Infrastructure Plan* — 25% of the studio.
  Pinned up before the jury sits: **Marisol Quaye** (chair), **Tobias Wren**,
  **Sunniva Marek**.

  Sunniva Marek is a principal at Kesselring & Marek and is not teaching staff.
  They were not at your desk crit. They arrive with your screenshots, your
  memo, and twenty minutes.

  **Notes:** The guest juror's ignorance of the process is the point of having
  them. An argument that only exists in the student's head reads as absent, and
  this is the room where that becomes obvious.

- **Slide 3 — The brief, walked** `class: —`

  ## Assessment 2, walked

  | Item | Requirement |
  | --- | --- |
  | Weight | 25% of the studio |
  | Due | Monday of Week 9, 12:00; defended at the jury at 14:00 |
  | Criteria | **livability 45 · fiscal 30 · mobility 25** |
  | Deliverable A | 8–12 in-simulation screenshots, captioned, including at least one attractiveness overlay, one land value overlay, one water or sewage info-view, and one street-level view at night |
  | Deliverable B | defence memo, 1,200 words maximum, structured against the three criteria in that order |
  | Deliverable C | one costed budget line for every public space proposed, monthly, funded from the closure you set in Week 8 |
  | Format | twenty minutes at the jury: eight presenting, twelve defending |

  The three criteria are not three sections of a plan. They are three claims
  about the same plan, and a memo that argues each one separately is arguing
  with itself.

  **Notes:** Read Deliverable C aloud twice. The most common failure at this
  jury is an unfunded plaza, and it costs marks under fiscal 30 rather than
  under livability 45, which students do not expect.

- **Slide 4 — What a park is for, and what the readout thinks it is for** `class: —`

  ## Two definitions of a park

  - **What a park is for**: optional presence. People being somewhere they did
    not have to be, for as long as they like, with nothing to buy.
  - **What the readout measures**: an attractiveness contribution within a
    service radius, a visitor count, and a monthly upkeep figure.
  - The second is a proxy for the first and it is a poor one. It cannot tell a
    plaza with 400 people crossing it from a plaza with 400 people sitting in
    it.
  - So the readout is the screening tool and the street-level view at night is
    the evidence. The brief asks for both, in that order.

  **Notes:** This is the week's methodological claim and it recurs in Week 11.
  Do not oversell the limitation; the overlay is genuinely useful for finding
  the failures, it just cannot confirm a success.

- **Slide 5 — Jacobs's three conditions** `class: —`

  ## Jacobs's three conditions

  A street works, Jacobs argues (1961), when three things hold at once:

  1. There is a **clear demarcation** between public and private space, and they
     do not ooze into one another.
  2. There are **eyes upon the street** — buildings oriented towards it, with
     the doors and windows facing the thing they are supposed to watch.
  3. There are **users on it fairly continuously**, which adds eyes and gives
     the people in the buildings a reason to look.

  All three are decisions about the frontage. None of them is a decision about
  the park.

  **Notes:** Note that the third condition is the one the simulation carries
  most directly, through the day/night cycle, and the one students most often
  fail by putting all their commercial in one strip.

- **Slide 6 — Jacobs on eyes upon the street** `class: quote`

  > There must be eyes upon the street, eyes belonging to those we might call
  > the natural proprietors of the street.

  — Jane Jacobs, *The Death and Life of Great American Cities*, 1961

  **Notes:** "Natural proprietors" is the load-bearing phrase: the watching is
  not a security function bolted on, it is a by-product of people having their
  own reasons to be at the window.

- **Slide 7 — The same 120 metres, twice** `class: centered`

  Two-panel figure, drawable as inline SVG. Each panel shows the same 120 m of
  Ockley Green frontage in plan, with two small clock insets per panel.

  **Left panel, titled "single-use retail strip".** Black building footprints
  set back about 30 m from the street; the setback filled with flat gold hatch
  labelled "parking". The street edge of each building drawn as an unbroken
  heavy black line with no openings, labelled "blank to the street". Two clock
  insets: at 13:00, six gold dots on the footpath; at 22:00, no gold dots and
  the black label "0".

  **Right panel, titled "mixed frontage".** The same black building footprints
  moved to the street edge, with three gold-filled rectangles per building at
  ground floor labelled once as "doors and shopfronts", and two rows of small
  gold squares above them labelled once as "dwellings above". No hatch. Two
  clock insets: at 13:00, seven gold dots; at 22:00, five gold dots and the
  black label "5".

  **What the two inks distinguish.** Black is built fabric — footprints,
  streets, walls. Gold is life and the openings that let it out: people,
  doors, windows, and the parking that displaced them. Keep the Week 7 rule
  that gold is what moves through the system.

  Caption: *The difference is thirty metres of setback and where the front door
  is. Neither is expensive.*

  **Notes:** The 22:00 counts are the whole slide. The left panel has a
  perfectly adequate daytime pedestrian count, which is why students believe
  the strip is working.

- **Slide 8 — What Whyte actually counted** `class: —`

  ## What Whyte actually counted

  Whyte's group observed small plazas directly, over months, and ranked what
  predicted use (1980):

  | Factor | Whyte's finding | Where it appears in the build |
  | --- | --- | --- |
  | Sittable space | the strongest single predictor; roughly one linear foot of seating per 30 sq ft of plaza | plaza props and their upkeep line |
  | Relation to the street | the best-used plazas were level with the footpath and open along it | the footpath graph's connections to the plaza edge |
  | Food | a food source close by raised use substantially | ground-floor commercial demand at the edge |
  | Sun | plazas in shade after mid-afternoon emptied | building heights on the northern edge, under the day/night cycle |
  | Water and trees | used, touched, sat under; not decorative | park props, and the upkeep they add |
  | Triangulation | an object or event that gives strangers a reason to speak | the one factor with no mechanic; argue it in the memo |

  **Notes:** The last row matters. Where a theory move has no mechanic, the
  studio's rule is that it goes in the memo as a claim about the design rather
  than being quietly dropped.

- **Slide 9 — Whyte on what attracts people** `class: quote`

  > What attracts people most, it would appear, is other people.

  — William H. Whyte, *The Social Life of Small Urban Spaces*, 1980

  **Notes:** This is why the distributed option on slide 14 is not obviously
  correct either. Eleven squares of four people each may be worse than one
  square of forty, and the memo has to take a position on it.

- **Slide 10 — The plaza that does not work** `class: centered`

  Inline SVG, plan diagram with numbered callouts.

  **What is drawn.** A 60 m × 60 m square in plan, black outline, labelled
  "Halstead Reach civic plaza — 3,600 m²". A street runs along its southern
  edge only, drawn as a black double line. A black 12-storey block sits on the
  northern edge, hatched black. Six gold numbered callout markers sit on the
  figure, each with a gold leader and a black label:

  1. **Level change** — two 150 mm steps drawn as black lines across the whole
     southern edge, the only street edge. "The one open edge has a barrier
     across it."
  2. **Sitting space** — a short black line segment at the western corner,
     dimensioned "11 m". Label: "3,600 m² ≈ 38,750 sq ft. Whyte's ratio asks
     for about 393 m. Provided: 11 m."
  3. **Food** — a gold arrow leaving the figure to the east with the label
     "nearest food, 140 m".
  4. **Sun** — the northern third of the square filled with flat gold hatch,
     labelled "in shadow from 14:00".
  5. **Connections** — four gold dashed desire lines approaching the square from
     four directions; three of them stop at a black kerb line and are marked
     with a small black cross. "Three of four desire lines end at a kerb."
  6. **Catchment** — a gold dashed 300 m circle centred on the square, with the
     black label "1,900 people, and 900 of them are in the block on the north
     edge".

  **What the two inks distinguish.** Black is the plaza as built and the fabric
  around it. Gold is every fault and every unmet demand — the shadow, the food
  that is elsewhere, the desire lines that fail, the catchment that is thin.

  **Notes:** Every one of the six faults is cheap to fix and none of them is
  visible in the attractiveness overlay, which reports this plaza as a large
  positive contribution. That gap is the slide's argument.

- **Slide 11 — Oldenburg's third place, and the four the model carries** `class: —`

  ## The third place

  Oldenburg (1989) lists eight characteristics. Four of them the studio can
  observe, and four it can only argue:

  | Characteristic | In the build |
  | --- | --- |
  | Neutral ground | observable — no entry cost, no zoning that filters who arrives |
  | Accessibility | observable — footpath graph, 300 m catchment, transit stop distance |
  | The regulars | observable, weakly — a repeated visitor count across the day/night cycle |
  | Low profile | observable — nothing about the plaza's cost or props signals occasion |
  | A leveller | argue it |
  | Conversation as the main activity | argue it |
  | Playful mood | argue it |
  | A home away from home | argue it |

  Where a third place works, ground-floor commercial demand appears against its
  edge without being zoned for. That is the closest thing to a measurement the
  studio has, and it is a good one.

  **Notes:** The right-hand column is a template for the memo. The four
  observable rows are evidence; the four argued rows are the design intent, and
  the jury will accept the second set only if the first set is present.

- **Slide 12 — Necessary, optional, social** `class: —`

  ## The 19:00 test

  Gehl (1971) separates three kinds of activity in public space:

  - **Necessary** — the walk to the bus, the walk to work. Happens regardless of
    the quality of the space.
  - **Optional** — standing, sitting, looking, walking for its own sake. Happens
    only when the space is good enough.
  - **Social** — arises out of the other two being present at once.

  So the 08:00 pedestrian count tells you nothing: it would be the same across a
  car park. The studio's protocol is the count at **19:00 in fine weather**,
  read off the day/night and weather cycles, because that count is optional
  presence and nothing else.

  **Notes:** Insist on the protocol. A pedestrian count without a time of day and
  a weather state attached to it is not evidence and will not be treated as
  evidence at the jury.

- **Slide 13 — Alexander, with the numbers** `class: —`

  ## Alexander, with the numbers

  - **Pattern 61, Small Public Squares**: a square much wider than about 45 to
    60 feet — roughly 14 to 18 metres — stops working as a room. You can no
    longer read a face across it, and the enclosure stops doing anything.
  - **Pattern 106, Positive Outdoor Space**: outdoor space has to be shaped and
    enclosed on most of its perimeter. Space that is what is left over after
    the buildings were placed will read as left over.
  - Halstead Reach civic plaza is 60 m across, enclosed on one side, and was
    what was left over after the arterial alignment in Week 5.
  - Three 18 m squares at its corners would sit inside Alexander's figure and
    would cost less to maintain than the one 60 m square does.

  **Notes:** The 14-to-18-metre figure is the most useful single number in this
  lecture and the one students most resist, because it is much smaller than any
  plaza they have drawn.

- **Slide 14 — One plaza, or eleven squares** `class: —`

  ## One plaza, or eleven squares

  | | **One civic plaza** | **Eleven pocket squares** |
  | --- | --- | --- |
  | Footprint | 3,600 m², in one place | 11 × 320 m², along the Kerrow corridor |
  | Build cost | ₡96,000 | ₡72,600 |
  | Monthly upkeep | ₡6,800 | ₡3,410 |
  | Population within 300 m | 1,900 | 7,400 |
  | Attractiveness contribution | high, and local | moderate, and everywhere |
  | Alexander 61 | fails at 60 m | passes at 18 m |
  | Whyte on other people | forty people in one place | four people in eleven places |
  | Pins up | very well | badly |

  **Notes:** The plaza loses on livability and on fiscal performance and it is
  still the option most students submit, because of the last two rows. Say that
  plainly and then ask which of the two rows is actually a design argument.

- **Slide 15 — What you are actually choosing** `class: impact`

  # Livability against fiscal performance, at ₡310 a month

  - The distributed option is cheaper by ₡3,390 a month, reaches four times the
    population, and sits inside Alexander's dimension.
  - It is also eleven weak spaces instead of one strong one, and Whyte's
    finding cuts against it.
  - Neither option is free of the other metric. The eleven squares only reach
    7,400 people if the corridor's footpath connections are finished, and that
    is **mobility performance** spend recorded against a livability benefit.

  The public realm is the cheapest livability on the corridor's budget. Cheap is
  not the same as easy.

  **Notes:** Close by refusing the arithmetic answer. The jury will accept either
  option and will not accept a student who has not noticed that they made a
  choice.

- **Slide 16 — Five things the jury will ask** `class: —`

  ## Five things the jury will ask

  1. What does this space do at 19:00 that it does not do at 08:00, and where is
     the screenshot?
  2. How many linear metres of sitting space, against how many square metres of
     plaza?
  3. Which budget line pays the upkeep, and what did you cut in Week 8 to
     afford it?
  4. Which of your three criteria did you make worse, and by how much?
  5. Your infrastructure plan and your public realm plan are on the same brief.
     What do they have to do with each other?

  **Notes:** Question five is the one that separates the marks. The brief is one
  document because the Wensley Bank headroom decision and the plaza decision
  come out of the same monthly budget, and a memo in two halves has not
  noticed.

- **Slide 17 — This week** `class: —`

  ## This week

  - **Desk crits** run Monday and Tuesday, before the pin-up. Bring the
    attractiveness overlay, the land value overlay, and your Week 8 closure.
  - **Artefact due** today at 12:00; jury at 14:00. Screenshots printed, memo on
    the wall, not on a screen.
  - Walk your own plaza at 19:00 in fine weather before you photograph it. If
    nobody is in it, that is the finding and it belongs in the memo.
  - Week 10 takes the same corridor under hazard and pollution load, so keep
    the save exactly as submitted.

  **Notes:** The instruction to keep the save as submitted matters — Week 10's
  session assumes the jury's version of the corridor and not a version repaired
  over the weekend.

### Studio session hand-off

- Students arrive with the Week 8 closure applied and funded, and with every
  proposed public space already carrying a monthly upkeep figure.
- Both readouts open before the desk crit: the attractiveness overlay and the
  land value overlay, plus the day/night cycle set to 19:00 with fine weather.
- Each student brings one 19:00 street-level observation of an existing space in
  their own build, with a pedestrian count, written down before the crit rather
  than during it.
- The session is the last working time before the pin-up, so it is a review
  session and not a building session; students who arrive without the memo
  drafted will not get one written in it.

### Assessment hooks

Feeds **Assessment 2 — Public Realm & Infrastructure Plan** directly and
completely: it is due this week, and slides 3, 14, 15 and 16 are the brief, the
central decision, the tradeoff and the jury's questions respectively.
**Livability 45** is carried by slides 5 to 13; **fiscal 30** by the upkeep
figures on slides 8, 13 and 14 and by Deliverable C; **mobility 25** by the
footpath-connection argument on slide 15 and by the plaza's relation to the
transit stop. Also the last assessed work before the **Week 12 capstone**, which
expects the public realm argument to be made once at corridor scale.

### Open questions for the writer

- Whether the Halstead Reach civic plaza is a fixed studio artefact placed in
  every save file for this lecture, or whether slide 10 is redrawn each year
  against a real student plaza from the previous cohort. The second is better
  teaching and much more work.
- Whether the 19:00 fine-weather protocol on slide 12 is stated as a
  requirement in the Assessment 2 brief itself or left as a lecture
  recommendation. If it is a requirement, the brief on slide 3 needs a row for
  it.
- Whether to bring Lynch's *The Image of the City* (1960) in on slide 13 for
  the enclosure argument, which is a natural fit but pushes the lecture over
  time on a week that is already running fifteen minutes short.

---

## Week 10 — Resilience: Hazards, Pollution and Climate

**Date:** 2027-05-10 · **Lecturer:** Nadia Ilkhom · **Deck status:** No deck.
Week 7 is intended to hold the semester's only formal slide deck; it is not yet
built. This
week is delivered from the lectern. The plan below is written so it can be
spoken as-is, and so that a deck could be compiled from it without further
research if the studio ever commissions one.

### Argument in one sentence

Hazard, pollution and climate are not events that happen to a finished
district — they are load cases the district is designed against from the first
road, and every metre of protection is bought with rate base or with livability
somewhere else.

### Learning outcomes

- Distinguish a hazard from an event: name, for one district, the human use
  system whose exposure turns a rainfall figure into a loss.
- Read the pollution, water, wind and fire-risk info views as a layered
  suitability analysis rather than as four separate warnings.
- Size a network for its worst week rather than its median week, and state the
  annual cost of the difference.
- Argue the case for withdrawing land from development, in rate-base
  arithmetic, without appealing to precaution alone.

### Theory anchors

- **Ian Burton, Robert Kates and Gilbert F. White, *The Environment as
  Hazard* (1978).** A hazard is the interaction of a natural event with a human
  use system; the event alone is only weather. In this lecture it is the
  definition every later slide is measured against — students keep saying "the
  river flooded" when the finding is "we zoned Ombersley Flats".
- **Gilbert F. White, *Human Adjustment to Floods* (1945), with Raymond
  Burby's "safe development paradox" (2006).** Structural protection reduces
  frequent loss and increases the loss when protection is exceeded, because it
  invites occupation of the protected ground. This is the lecture's central
  discomfort: the responsible-looking move raises the tail.
- **C. S. Holling, "Resilience and Stability of Ecological Systems" (*Annual
  Review of Ecology and Systematics*, 1973).** Engineering resilience is
  return-to-normal speed; ecological resilience is how much disturbance a
  system absorbs before it flips to a different state. Used to make students
  say which of the two they have actually bought.
- **Ian McHarg, *Design with Nature* (1969).** Layered suitability mapping —
  put development where the land can take it, established by stacking
  constraint layers before drawing anything. This is the method the info views
  already implement, and Week 10's job is to name it as a method.
- **Charles Perrow, *Normal Accidents* (1984).** Systems that are both
  interactively complex and tightly coupled fail in combinations nobody
  designed for. It is the bridge back to Week 7: hazard weeks are network
  weeks, because the hazard arrives as a coincidence of loads.

### Mechanic mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| McHarg's stacked constraint layers before siting | The ground pollution, air pollution, noise, water and fire-hazard info views, read in sequence over the same district | The four overlays disagree about where the good land is; the intersection of all four is much smaller than any one of them |
| Hazard as interaction, not event | The water simulation and terraforming tools — river level rising against ground heights you set yourself | Losses appear where ground level and zoning coincide, not where the water is deepest |
| Downstream externality | Sewage outfall placement versus water-pumping-station intake placement on the same watercourse | Water pollution reaching the intake, health falling district-wide, and the outfall reading as "working" in its own tooltip throughout |
| Pollution as a decade-long condition | Ground pollution accumulation and its slow decay after the source is removed | The overlay stays stained for years after the industry closes, and the land value overlay stays low with it |
| Climate as a seasonal load case | Seasons and weather driving heating demand, water freezing, and solar and wind generation output | The same network passing in October and browning out in the second week of the coldest month |
| Perrow's tight coupling | Week 7's district-based service radii sharing one power and water trunk | A single generation shortfall taking water pumps offline, which takes fire response offline, inside one notification cluster |

### The tradeoff of the week

**Fiscal performance against livability.** The forced decision is Ombersley
Flats: forty-one low-lying residential blocks on the inside of Tuckwell Bend,
zoned in Week 3, now sitting below the level the river reaches in a wet season
and downwind of the Pellow industrial cells.

Students must choose one of two moves before the studio session ends.

- **Withdraw the Flats.** Dezone the forty-one blocks, hold the ground as
  floodway and park, and let the water go where it was going. Livability rises
  across the whole northern half of Halstead Reach — the park entry, the noise
  and air readings, the health figure. Fiscal performance falls twice: the rate
  revenue from forty-one blocks leaves the ledger, and the water and heating
  trunk already built to serve them now serves nothing and still costs its
  upkeep.
- **Defend the Flats.** Raise the ground with the terraforming tools, oversize
  the pumping capacity, and keep the blocks zoned. Fiscal performance holds.
  Livability holds at its current mediocre reading. The exposure does not go
  away, it concentrates — and by White and Burby, the defended ground will
  attract the higher-density redevelopment that makes the eventual overtopping
  worse than the one you just prevented.

There is no third option in which both metrics improve. Whichever they pick is
a line in the capstone memo, and the jury will ask for the arithmetic.

### Slide plan

1. **Slide 1 — Resilience: Hazards, Pollution and Climate** `class: impact`

   Content, exactly:

   > # Resilience
   > ## Hazards, Pollution and Climate
   > Week 10 · Nadia Ilkhom · 10 May 2027
   >
   > For nine weeks you have designed for an ordinary Tuesday.

   **Notes:** Do not soften the last line. It is the whole lecture, and the
   room should be slightly uncomfortable before the second slide.

2. **Slide 2 — Where Week 7 left the network** `class: —`

   Bullets:
   - Week 7's finding: every network in this district is a capacity with a
     curve, and the curve gets ugly at the end.
   - What we sized for: median demand, plus the margin the budget slider would
     tolerate.
   - What we did not size for: two loads arriving in the same fortnight.
   - Charles Perrow, *Normal Accidents* (1984): systems that are interactively
     complex and tightly coupled fail in combinations nobody designed for. Our
     district is both. One power shortfall stops the pumps; stopped pumps stop
     fire response.
   - So a hazard week is a network week. Nothing new is introduced today. The
     same trunks are asked a harder question.

   **Notes:** Explicitly recall the Week 7 failure-cascade walkthrough by name;
   most of the room built that cascade with their own save file and will
   remember the notification cluster.

3. **Slide 3 — A hazard is an interaction, not an event** `class: —`

   Content:
   - Burton, Kates and White, *The Environment as Hazard* (1978): a hazard is
     the interaction of a natural event with a human use system.
   - Rainfall is not a hazard. Rainfall plus forty-one residential blocks at
     the bottom of a bend is a hazard.
   - Which half of that interaction is in your control? Not the rainfall.
   - Therefore the design question is never "will it flood". It is "what did we
     put there, and what does the loss cost against what the ground earned".
   - Consequence for language: in this studio, "the river flooded" is not a
     finding. "We zoned Ombersley Flats" is a finding.

   **Notes:** Hold on the last pair of lines. Students write the passive
   version in defence memos every single semester and the jury reads it as an
   evasion, correctly.

4. **Slide 4 — Gilbert White, 1945** `class: quote`

   The pull-quote, verbatim:

   > "Floods are 'acts of God', but flood losses are largely acts of man."
   >
   > — Gilbert F. White, *Human Adjustment to Floods* (1945)

   **Notes:** Eighty years old and still the shortest statement of the
   week. Deck-builder: keep this wording verbatim or drop the quotation marks
   and paraphrase — do not adjust a real author's sentence inside quotes.

5. **Slide 5 — Three families of hazard, three design responses** `class: —`

   The table, exactly these rows:

   | Family | Behaviour | Info view that shows it | Design response |
   | --- | --- | --- | --- |
   | Standing | Always on, never acute | Ground pollution, noise | Siting and separation, decided once, expensive to undo |
   | Seasonal | Predictable, annual, cyclical | Water level, temperature, wind | Capacity sized for the worst month, idle for eight |
   | Episodic | Rare, fast, spatially concentrated | Fire hazard, water spread | Redundancy and response radius, not prevention |

   **Notes:** The point of the table is that the three families reward
   different money. A district that treats all hazard as episodic
   over-purchases emergency services and under-purchases siting.

6. **Slide 6 — You already have McHarg's method** `class: —`

   Content:
   - Ian McHarg, *Design with Nature* (1969): stack the constraint layers
     first, then site the development in what is left.
   - The info views are that stack. Open them in this order over Halstead
     Reach: water, then wind, then ground pollution, then noise, then fire
     hazard.
   - McHarg's discovery, and yours: the layers disagree. The high ground on the
     Ondrey escarpment is dry and windy — good for the water problem, bad for
     the fire problem, and the wind carries the Pellow cells' air pollution
     straight down it.
   - The intersection of all five acceptable zones is smaller than any student
     expects, and it is not where most of you zoned residential in Week 3.
   - This is not a reason to move Week 3's decision. It is a reason to know
     what Week 3 cost.

   **Notes:** Week 1 taught site analysis on the blank map. This is site
   analysis run against a built district, which is what it usually is in
   practice.

7. **Slide 7 — The capacity curve, with a load case on it** `class: —`

   Diagram, inline SVG, two inks on cream:
   - Horizontal axis: demand, unlabelled numerically, marked at three points —
     `median week`, `worst week`, `worst week + one outage`.
   - Vertical axis: service level, 0 to 100.
   - A **black** curve: flat and high across the left two-thirds, then a knee,
     then a near-vertical fall. This is Week 7's curve, redrawn.
   - A **gold** vertical band spanning from `worst week` to `worst week + one
     outage`, sitting entirely to the right of the knee, labelled `the fortnight
     you did not design for`.
   - A **gold** dashed horizontal line at service level 60, labelled `the level
     at which residents leave`.
   - One black annotation with a leader line pointing at the knee: `capacity is
     not a number, it is a cliff edge with a location`.

   **Notes:** The gold band is the whole slide. If a student can point at where
   their own district's band sits, they can size the upgrade; if they cannot,
   they are guessing.

8. **Slide 8 — Pollution is a condition, not an incident** `class: —`

   Bullets:
   - The simulation carries four pollution channels and they behave nothing
     alike: air pollution drifts with wind direction, noise falls off with
     distance, water pollution travels downstream only, ground pollution stays.
   - Air pollution is a geometry problem: what is upwind of the residential
     blocks, at the prevailing direction, for most of the year.
   - Noise is a zoning-adjacency problem, and it is the one your land value
     overlay reacts to fastest.
   - Water pollution is an ordering problem on a single line: everything
     upstream is your inflow.
   - Ground pollution is a memory problem, and it is the subject of slide 10.
   - Anne Whiston Spirn, *The Granite Garden* (1984): urban air, water and soil
     are a designed system whether or not anyone designed them.

   **Notes:** Students treat all four as one red overlay. Making them name the
   transport mechanism of each is the operative teaching move of the second
   half.

9. **Slide 9 — Tuckwell Bend: intake, outfall, wind** `class: —`

   Diagram, inline SVG, plan view, two inks on cream:
   - A **black** river drawn as a single bend, flowing left to right, labelled
     `Tuckwell Bend`.
   - On the upstream limb, a black square labelled `water pumping station
     (intake)`.
   - On the downstream limb, a black square labelled `sewage outfall`. A **gold**
     plume spreads downstream of it, thinning to the right edge.
   - Beneath: the same diagram mirrored, with intake and outfall swapped, and
     the gold plume now running through the intake square. Caption in black:
     `same two buildings, same watercourse, opposite result`.
   - Top-left corner: a black arrow labelled `prevailing wind`, pointing from
     the gold-hatched `Pellow industrial cells` toward a black-outlined block
     labelled `Ombersley Flats`.
   - One line of black caption under the whole figure: `neither building reports
     a fault in either arrangement`.

   **Notes:** The final caption is the pedagogy. Both buildings show green
   tooltips in the failing arrangement, so the fault is only visible in the
   water pollution overlay and in the health figure — which is a general lesson
   about reading overlays instead of reading tooltips.

10. **Slide 10 — Ground pollution, and the decade of memory** `class: —`

    Content:
    - Ground pollution accumulates under industry and generation, seeps toward
      groundwater, and decays slowly after the source is gone. Closing the
      source is the start of the wait, not the end of the problem.
    - Practical consequence: the industrial cell you demolish in year 12 is not
      developable land in year 13. Your capstone plan cannot quietly assume it
      is.
    - The land value overlay reads stained ground as low value for the whole
      decay period. Fiscal performance carries the cost long after the
      livability cost is fixed.
    - Design response, in order of leverage: site it once, correctly; separate
      it with distance rather than with a park; and put the ground you intend
      to reuse somewhere else.

    **Notes:** This is where fiscal and livability stop being opposed and both
    lose, which is worth saying — not every design failure is a tradeoff, some
    are just failures.

11. **Slide 11 — Climate as a seasonal load case** `class: —`

    The table, exactly these rows:

    | Network | Coldest fortnight | Hottest fortnight | Sized for |
    | --- | --- | --- | --- |
    | Heating | Peak demand, every building at once | Near zero | The peak, or people freeze |
    | Water | Freezing risk, pump load steady | Peak demand, reservoir drawdown | Two different peaks, four months apart |
    | Power | Solar output at its lowest, heating load at its highest | Cooling load, solar output high | The coincidence, not either curve |
    | Roads | Reduced traffic speed, longer response times | Normal | Response radius, not lane count |

    - The row that fails first is Power, because its worst supply and its worst
      demand are the same fortnight.
    - Luke Howard, *The Climate of London* (1818–1820), documented the urban
      heat island two centuries ago: the city makes its own climate. Tim Oke
      (1973) gave it a size relationship to the city's own scale.

    **Notes:** Make the class find the Power row themselves before revealing
    it. It is the only row where the two columns are correlated, and it is the
    reason winter blackouts read as a design error rather than bad weather.

12. **Slide 12 — Which resilience did you buy?** `class: —`

    Content:
    - C. S. Holling (1973) separates two things the word carries. **Engineering
      resilience**: how fast the system returns to normal. **Ecological
      resilience**: how much disturbance it absorbs before it settles into a
      different state altogether.
    - A district that recovers its service levels in a week but loses a
      thousand residents permanently has excellent engineering resilience and
      failed.
    - Aaron Wildavsky, *Searching for Safety* (1988), sets the matching pair of
      strategies. **Anticipation**: predict the specific hazard and prevent it.
      **Resilience**: build general capacity to absorb what you did not
      predict.
    - Anticipation is cheaper when you are right. You are right about seasonal
      hazards and wrong about episodic ones.
    - So: anticipate the winter, and hold redundancy for the fire.

    **Notes:** The last line is the operating rule the studio session works
    from. Students routinely do the reverse — they anticipate the dramatic
    hazard and leave the predictable one to luck.

13. **Slide 13 — The decision: Ombersley Flats** `class: —`

    Content:
    - Forty-one residential blocks. Inside Tuckwell Bend, below the wet-season
      water level, downwind of the Pellow cells. Zoned in Week 3 by every
      person in this room.

    The table, exactly these rows:

    | | Withdraw the Flats | Defend the Flats |
    | --- | --- | --- |
    | Move | Dezone, hold as floodway and park | Raise ground, oversize pumping, keep zoning |
    | Fiscal performance | Loses 41 blocks of rate revenue; keeps the trunk upkeep | Holds revenue; adds capital and ongoing pumping cost |
    | Livability | Rises across northern Halstead Reach — park entry, noise, air, health | Unchanged, at its current mediocre reading |
    | Exposure | Removed | Reduced in frequency, increased in consequence |
    | What the jury will ask | What the forty-one blocks were worth | What happens the year the pumps are offline |

    **Notes:** Both columns are defensible. Neither is defensible without the
    numbers, and the numbers are in the students' own budget panel this
    afternoon.

14. **Slide 14 — The tradeoff, named** `class: impact`

    Content, exactly:

    > # Fiscal performance against livability
    >
    > Forty-one blocks of rate base, or the northern half of the district's
    > health, noise and park figures.
    >
    > You cannot have both. Name which one you bought, in the memo, in those
    > words.

    **Notes:** The three metrics are the marking criteria for every assessment
    including the capstone. A plan that does not name its own trade is marked
    as if it did not make one.

15. **Slide 15 — The safe development paradox** `class: —`

    Content:
    - White (1945) observed the pattern; Raymond Burby (2006) named it the safe
      development paradox. Protection reduces frequent, small losses. In doing
      so it makes the protected ground attractive, so more is built on it, so
      the loss when protection is exceeded is larger than the losses protection
      prevented.
    - In this simulation the mechanism is visible and fast. Raise the ground,
      and the land value overlay in the Flats rises within a few years. Rising
      land value pulls higher-density redevelopment. Higher density on defended
      ground is exactly the exposure you thought you had removed.
    - So "defend the Flats" is not the cautious option. It is a bet that your
      pumping capacity outlives the density your own protection invites.
    - The honest version of the defend option therefore includes a zoning cap
      on the protected ground — which gives back part of the fiscal argument
      that justified defending it.

    **Notes:** This is the slide students argue with, and the argument is
    productive. Push them to the zoning-cap conclusion rather than stating it,
    because a student who derives it will apply it in the capstone.

16. **Slide 16 — What the hazard layers cannot see** `class: —`

    Content:
    - Every layer in today's lecture is a physical layer. Water goes downhill,
      wind goes downwind, soil remembers.
    - Susan Cutter and colleagues (2003) built a social vulnerability index
      because the same flood produces very different losses across households
      at the same elevation: tenure, income, mobility, who can leave and who
      cannot.
    - Ben Wisner and colleagues, *At Risk* (2nd edn, 2004), make the same point
      structurally: vulnerability is produced by social processes, and the
      physical event only reveals it.
    - There is no info view for that. Not one of the five overlays we opened
      today distinguishes between the households in Ombersley Flats.
    - That is next week's lecture, and it is not a digression. Knowing which
      layers your model does not have is the same skill as knowing what the
      capacity curve does.

    Further reading, as a plain list:
    - Burton, Kates and White, *The Environment as Hazard* (1978)
    - White, *Human Adjustment to Floods* (1945)
    - Holling, "Resilience and Stability of Ecological Systems" (1973)
    - McHarg, *Design with Nature* (1969)
    - Perrow, *Normal Accidents* (1984)
    - Wildavsky, *Searching for Safety* (1988)
    - Spirn, *The Granite Garden* (1984)
    - Wisner, Blaikie, Cannon and Davis, *At Risk*, 2nd edn (2004)
    - Vale and Campanella, *The Resilient City* (2005)

    **Notes:** End on the hand-off, not on the reading list. Week 11 belongs to
    the convenor and it lands better if this week has already admitted the gap.

### Studio session hand-off

- Arrive with the running Halstead Reach save at the end of the Week 9
  build, and with all five hazard-relevant info views checked in the order
  given on slide 6. Students who have not opened the water overlay over their
  own district before the session will spend the session doing that instead of
  designing.
- The session's first task is the Ombersley Flats decision, taken in the save
  and costed from the budget panel — not argued in the abstract. Both routes
  are acceptable; an uncosted route is not.
- Second task is the winter coincidence: run the district to the coldest
  fortnight and record the power and heating figures at peak, then size the
  upgrade and record what it costs annually against the current surplus.
- The utilities clinic runs after the session for anyone whose district is
  already past the knee on slide 7. Bring the capacity readouts, not a
  description of the symptoms.

### Assessment hooks

Feeds the **Comprehensive City Plan** (Week 12, 50%, holistic) directly, and
retrospectively strengthens **Public Realm & Infrastructure Plan** material
already submitted in Week 9 — the floodway-as-park move is a livability
argument and an infrastructure argument in the same drawing, which is the kind
of double-duty the capstone rewards.

Nothing is assessed this week. What the capstone will be assessed on is
whether the plan states its hazard exposure and prices it. A comprehensive plan
that shows a district with no hazard section is read as a plan that did not
open the overlays.

### Open questions for the writer

- District names: Halstead Reach and the Kerrow corridor come from the
  semester's shared site, but Ombersley Flats, Tuckwell Bend, the Pellow
  industrial cells and the Ondrey escarpment are introduced here. Check them
  against whatever weeks 7 to 9 named, and reuse rather than multiply.
- Slide 5's episodic row leans on the fire-hazard overlay and the fire watch
  tower. If the studio's build version exposes a wider set of episodic hazards,
  the row should name them; if it exposes fewer, fold episodic into seasonal
  and drop to a two-family table rather than promising a mechanic that is not
  there.
- Slide 13's forty-one blocks is a specific number, and it should either match
  the studio's actual reference save or be replaced with the range students
  will genuinely have. A number that nobody's save can reproduce undercuts the
  costing exercise.

---

## Week 11 — What the Model Can't Show You

**Date:** 2027-05-17 · **Lecturer:** Marisol Quaye · **Deck status:** No deck.
Week 7 is intended to hold the semester's only formal slide deck; it is not yet
built. This
week is delivered from the lectern, with the running Halstead Reach save
projected for slides 5 to 9. The plan below is written to be spoken as-is, and
to compile into a deck only after its household, rent and land-value evidence
has been reproduced in the pinned course build.

### Argument in one sentence

The land-value curve the studio has been raising since Week 1 is an accurate
output of a model that has no landowner, no tenure, no eviction, no informal
housing and no objector in it — and a designer who cannot list those omissions
is not qualified to cite the curve.

### Learning outcomes

- State, in writing, four specific things the studio's model does not
  represent, and what each omission does to a claim the plan wants to make.
- Distinguish the four forms of displacement in the literature, and identify
  which of them the model's household and homelessness figures can and cannot
  count.
- Trace the eleven-week land-value rise in the Kerrow corridor to the public
  investments that produced it, and say who would capture that uplift outside
  the model.
- Write the omissions appendix required in the capstone defence memo, to the
  four headings given in slide 17.

### Theory anchors

- **James C. Scott, *Seeing Like a State* (1998).** Administration requires
  legibility, and legibility is achieved by thin simplifications — the
  cadastral map, the standardised unit — which then become the only reality the
  administration can act on. This is the frame for the whole lecture: our model
  is a legibility instrument, and its blind spots are the ordinary blind spots
  of such instruments, not defects unique to it.
- **Peter Marcuse, "Gentrification, Abandonment and Displacement" (1985).**
  Displacement has four distinct forms — direct last-resident, direct chain,
  exclusionary, and displacement pressure — and three of them leave no mark in
  any count of who currently lives somewhere. Used on slide 10 to show exactly
  where the model's household figures stop.
- **Ananya Roy, "Urban Informality: Toward an Epistemology of Planning"
  (*Journal of the American Planning Association*, 2005).** Informality is not
  a sector sitting outside the plan; it is a mode of urbanisation the state
  itself produces through what it zones, services and tolerates. Used on slide
  12 against the model's hard zero: unzoned land in this simulation stays
  empty.
- **Douglass B. Lee Jr., "Requiem for Large-Scale Models" (*Journal of the
  American Institute of Planners*, 1973).** Large urban models fail
  characteristically by being comprehensive — too coarse at every point to be
  right anywhere, hungry for data nobody has, and complicated enough to hide
  their own assumptions. Used on slide 14 to place the studio's model in a
  fifty-year-old lineage of the same failure.
- **Naomi Oreskes, Kristin Shrader-Frechette and Kenneth Belitz,
  "Verification, Validation, and Confirmation of Numerical Models in the Earth
  Sciences" (*Science*, 1994).** Models of open systems cannot be verified;
  agreement between model and observation is confirmation, and confirmation is
  not proof of correctness. Used on slide 4 to set the standard of evidence the
  rest of the lecture holds the curve to.

### Mechanic mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Scott's thin simplification | The land value info view — a computed field on a tile, with no owner attached to it | Land value rising for eleven weeks with nobody in the model to whom the rise accrues |
| Georgist uplift from public investment | Land value responding to transit stops, park entries, service coverage and trunk upgrades the player funded | The 2027 curve tracking the studio's own capital programme almost exactly |
| Marcuse's direct last-resident displacement | Household wealth, rent, and households leaving a building whose rent has passed their means; the district homelessness figure | The corridor's low-wealth household count falling while total households rise, and the corridor's livability reading going up as it happens |
| Compulsory acquisition and the objection | Bulldozing an occupied residential building; zoning change applied instantly by one actor | No hearing, no notice period, no compensation, no objector, and no delay |
| Roy's produced informality | Unzoned, unserviced land | Nothing is built there, ever, under any pressure of demand |
| Lee's hypercomprehensiveness | The simulation's single integrated economy, traffic, service and land-value solve | Every claim you make being downstream of one set of coefficients you cannot inspect |

### The tradeoff of the week

**Mobility performance against livability.** The forced decision is the last
four blocks at the southern end of the Kerrow corridor, currently medium
density, currently housing the largest remaining concentration of low-wealth
households in Halstead Reach.

- **Upzone them.** Residential density at the corridor's southern terminus is
  what the transit spine's ridership has been short of since Week 5. Upzoning
  closes the gap. Mobility performance rises, and it rises measurably.
- **Hold them.** Ridership stays below target and the spine's operating
  subsidy stays where it is.

The complication, and the reason this decision belongs in this week rather than
in Week 5: if they upzone, the simulation will report **livability rising too**.
Land value rises, rent rises, the remaining low-wealth households leave or
appear in the homelessness figure, and the corridor's livability score is then
computed over the households that are there afterwards. Both metrics improve.
The tradeoff is real and the model cannot display it, because livability here
is measured on whoever remains.

So the studio requires the trade to be recorded by hand. A student who upzones
must write, in the memo, that mobility performance was bought with the
livability of a population the metric no longer contains. A student who holds
must write that they declined the mobility gain and say what the spine's
subsidy costs fiscal performance as a result. The move is defensible either
way; the unrecorded move is not.

### Slide plan

1. **Slide 1 — What the Model Can't Show You** `class: impact`

   Content, exactly:

   > # What the Model Can't Show You
   > Week 11 · Marisol Quaye · 17 May 2027
   >
   > Knowing what your model leaves out is not a criticism of the model.
   > It is the second half of knowing how to use it.

   **Notes:** Deliver the subtitle flat. The room expects either an apology for
   the tool or an attack on it, and this lecture is neither.

2. **Slide 2 — Why this lecture sits here** `class: —`

   Bullets:
   - Three assessments are marked. The capstone is due next Monday. This is the
     last week in which anything can still be changed.
   - Every week since Week 1 has asked you to make a claim and support it with
     an output of the model — a ridership figure, a coverage radius, a land
     value overlay, a budget line.
   - Today asks the other question, which no jury in professional practice will
     let you skip: what does this evidence not cover, and what did you conclude
     anyway.
   - This is standing practice in every design discipline that models. A
     structural engineer knows precisely what their analysis omits and carries
     the list to the meeting. That list is the subject of slide 3.
   - By the end of the hour you will have written the first draft of your own
     list. It is a required section of the capstone memo.

   **Notes:** Anchor the week to the deadline immediately. Students treat a
   limits lecture as optional if it is not attached to a mark, and this one is.

3. **Slide 3 — The engineer's omissions list** `class: —`

   Content, as a table with exactly these rows:

   | A linear-elastic frame analysis does not represent | Why not | What the engineer does instead |
   | --- | --- | --- |
   | Material behaviour past the elastic range | The solution method requires linearity | Capacity checked against code limits outside the model |
   | Creep and long-term deflection | Not a product of the static solve | A separate serviceability calculation |
   | Connection slip and fabrication tolerance | Joints are idealised as rigid or pinned | Detailing rules and factored allowances |
   | Construction sequence and temporary conditions | The model solves the completed structure | A staged analysis, or a method statement |
   | Residual stress from welding | Outside the constitutive assumptions | Fabrication specification and inspection |

   Below the table, two lines:
   - The engineer does not stop using the analysis. They use it for what it
     covers, and they hold the list for everything else.
   - Nobody calls that scepticism. They call it competence.

   **Notes:** Spend real time here. This table is what keeps the rest of the
   hour from reading as a complaint, and students who understand it write much
   better memos.

4. **Slide 4 — You cannot verify a model of an open system** `class: —`

   Bullets:
   - Oreskes, Shrader-Frechette and Belitz, in *Science* (1994), separate three
     words that get used interchangeably. **Verification**: demonstrating truth.
     **Validation**: demonstrating internal consistency and absence of known
     error. **Confirmation**: observing agreement between the model and the
     world.
   - Their conclusion: numerical models of open natural systems can be
     confirmed, never verified. Agreement raises confidence. It does not
     establish that the model is right, and it never establishes that it is
     right for the reason you think.
   - A city is an open system. So is a district.
   - Practical standard for the capstone: an output of the model is evidence for
     a claim about the model. It is evidence for a claim about a district only
     to the extent that the mechanism producing it is one you can name.
   - Which means every figure in your memo needs a mechanism behind it, not
     just a number.

   **Notes:** The three-word distinction is the most portable thing in the
   lecture and worth writing on the board. Students reach for "the model
   validates my plan" constantly.

5. **Slide 5 — Eleven weeks of the Kerrow corridor** `class: —`

   Diagram, inline SVG, two inks on cream. A single line chart:
   - Horizontal axis: Weeks 1 to 11, ticked and labelled.
   - Vertical axis: land value index, Week 1 = 100, gridlines at 100, 150, 200.
   - A **black** line rising from 100 to 214, with the values below plotted as
     marked points.
   - **Gold** vertical annotations dropped from the four steepest segments,
     each labelled with the studio move that produced it: `W4 density raised`,
     `W5 transit spine opened`, `W9 park and plaza chain`, `W10 floodway park`.
   - A **gold** caption in the lower right: `every step is something the studio
     paid for`.

   The underlying figures, to be plotted and also given as a small table:

   | Week | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
   | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
   | Land value index | 100 | 103 | 108 | 126 | 149 | 161 | 168 | 172 | 198 | 205 | 214 |

   **Notes:** Read the curve as an achievement first, because it is one. The
   studio raised it deliberately and every step is defensible. The rest of the
   lecture takes it apart without taking it back.

6. **Slide 6 — What the curve is made of** `class: —`

   Bullets:
   - In this simulation land value is a computed field over the map. It responds
     to service coverage, transit access, park and plaza proximity, density,
     and — negatively — to noise and pollution.
   - Every one of those inputs is something the studio installed with public
     money: the spine, the trunk upgrades in Week 7, the plaza chain in Week 9,
     the floodway park in Week 10.
   - So the curve is not a market discovering something. It is a ledger of the
     capital programme, expressed as a colour.
   - This is a genuinely useful instrument. It is how you tell whether an
     investment landed, and it is why the fiscal performance argument in your
     Week 8 memo worked.
   - Note carefully what it is not: it is a value, not a price. Nobody in the
     model offers it, nobody accepts it, and nobody holds the asset it is a
     value of.

   **Notes:** The last bullet is the pivot. Say it slowly and do not gloss it —
   the next slide depends on the room having heard "nobody holds the asset".

7. **Slide 7 — 114 points of uplift, accruing to nobody** `class: —`

   Content:
   - The corridor's land value rose 114 index points in eleven weeks, on the
     back of investment the district's rates paid for.
   - Henry George, *Progress and Poverty* (1879): the increase in land value
     produced by the growth and investment of the community is not produced by
     the landholder, and George's argument is that the community should recover
     it. The whole field of land-value capture — betterment levies, developer
     contributions, land readjustment — descends from that observation.
   - Outside the model there is always an answer to "who got the 114 points".
     Someone held the land on the day the spine was announced and someone held
     it after. That transfer is the single most consequential distributive fact
     about a corridor upzoning.
   - Inside the model there is no answer, because there is no landholder
     entity. Land value is an attribute of a tile. It cannot be owned,
     borrowed against, assembled, optioned, sat on, or sold.
   - Consequence for your plan: the model cannot tell you whether your corridor
     strategy transferred public investment into private hands, because it has
     no hands. If your memo claims the corridor was good value for the public,
     that claim is outside your evidence and has to be argued another way.

   **Notes:** This is the lecture's strongest single point and it is directly
   in the convenor's own research area — the rate-base decade after an
   upzoning. Use the practitioner voice, not the theoretical one.

8. **Slide 8 — What the model does show about who left** `class: —`

   Preface line: the model is not silent about households. It is thin about
   them. Here is exactly how thin.

   Table, exactly these rows — the Kerrow corridor, Week 1 against Week 11:

   | | Week 1 | Week 11 |
   | --- | --- | --- |
   | Land value index | 100 | 214 |
   | Rent index | 100 | 231 |
   | Low-wealth households | 340 | 96 |
   | Medium-wealth households | 210 | 288 |
   | High-wealth households | 40 | 402 |
   | Total households | 590 | 786 |
   | Corridor livability reading | 61 | 78 |
   | District homelessness figure | 0 | 34 |

   Two lines beneath:
   - Every figure in that table is an output the simulation will give you today.
   - Two hundred and forty-four low-wealth households are not in the corridor
     any more. The model recorded thirty-four of them. It has no field for the
     other two hundred and ten.

   **Notes:** Let the table sit in silence for a moment before the two lines.
   Students have all of these overlays and have almost never opened them
   side by side.

9. **Slide 9 — Livability is measured on whoever remains** `class: —`

   Bullets:
   - The corridor's livability reading went from 61 to 78 across the same
     eleven weeks. That is a true output and it will be marked as a good
     result.
   - It is computed over the households present when it is read. The population
     it describes in Week 11 is substantially not the population it described in
     Week 1.
   - So a district can raise its livability score by improving conditions, by
     replacing its residents, or by any mixture of the two, and the metric
     returns the same number.
   - Susan Fainstein, *The Just City* (2010), proposes three criteria for
     evaluating an urban plan: equity, diversity and democracy. Set them beside
     the studio's three — fiscal performance, mobility performance, livability.
     Two of hers have no counterpart in ours, and the missing one that matters
     here is equity, because equity is the only one of the six that asks *for
     whom* a number improved.
   - This studio is not replacing its three metrics in Week 11. It is telling
     you that they are three metrics, chosen, with known silences, and that
     naming the silence is part of using them.

   **Notes:** Do not editorialise. The comparison with Fainstein does the work
   on its own, and the marking criteria are not changing at this point in the
   semester.

10. **Slide 10 — Displacement has four shapes** `class: —`

    Marcuse's four forms, as a table with exactly these rows:

    | Form | What it is | Can this model count it? |
    | --- | --- | --- |
    | Direct last-resident | The household in the unit when rent rises or the building goes | Partly — it can show the household leaving, and nothing about the leaving |
    | Direct chain | The households pushed out earlier in the same building's trajectory, before the visible change | No — the model retains no history of who occupied a unit |
    | Exclusionary | The households who would have moved in and now cannot afford to | No — unmet demand is aggregate, and has no household attached |
    | Displacement pressure | The dispossession felt by those who stay as the shops, services and networks around them change | No — there is no concept of a support that can be lost while you remain |

    Line beneath: three of the four are invisible in any count of current
    residents, which is the only kind of count this model keeps.

    **Notes:** Marcuse's point is methodological, not rhetorical: displacement
    is under-measured everywhere because the measurable form is the rarest one.
    That is why displacement research is hard in practice too, and it is worth
    saying so.

11. **Slide 11 — The model has one tenure, and it has no term** `class: —`

    Content:
    - In this simulation, a household occupies a unit and pays rent. That is
      the entire tenure system.
    - Tenure relations it does not distinguish: freehold owner-occupation;
      mortgaged ownership; a fixed-term tenancy with a notice period; a
      periodic tenancy; public or social tenancy with allocation rules;
      leasehold subject to a ground rent; co-operative and community land
      trust holdings; customary or communal tenure; occupation without
      documented title; sub-letting; room and boarding arrangements.
    - Nor the instruments attached to them: the lease, the notice, the
      eviction, the mortgage, the covenant, the easement, the resumption, the
      compensation payment, the objection, the appeal.
    - Why this matters for reading slide 5: tenure is the switch that decides
      whether that curve is a household's windfall or a household's notice to
      leave. The curve is identical in both cases. It contains no information
      about which one happened.
    - Elinor Ostrom, *Governing the Commons* (1990), is the standard warning
      against assuming ownership comes in only two kinds. The model assumes it
      comes in none.

    **Notes:** The eviction is the absence students find most surprising, and
    it is worth naming that demolishing an occupied building here produces no
    notice, no compensation and no objector.

12. **Slide 12 — The model's hard zero** `class: —`

    Bullets:
    - Leave land unzoned and unserviced in this simulation and nothing is ever
      built on it, under any level of demand, for any length of time.
    - That is the omission with the largest number attached to it. A very large
      share of the world's urban population lives in housing built without the
      zoning, title or servicing that this model treats as the precondition of
      a building existing.
    - John F. C. Turner, "Housing as a Verb", in Turner and Fichter, *Freedom
      to Build* (1972): housing is better understood as a process residents
      conduct than as a product an authority delivers. The model implements
      only the product.
    - Ananya Roy (2005): informality is not a zone outside planning but a mode
      of urbanisation the state produces — through what it zones, what it
      services, what it tolerates and what it clears. The model has the state's
      instruments and none of the consequences.
    - Vanessa Watson, "Seeing from the South" (2009), and her earlier account
      of conflicting rationalities (2003): planning practice built on the
      northern assumption of a serviced, titled, regulated city misreads most
      of the urban world, and misreads it in the same direction every time.
    - So: this model cannot be used to reason about housing that arrives
      without permission. If your capstone's housing argument depends on formal
      supply meeting all demand, that dependency is an assumption, and it is
      yours rather than the model's.

    **Notes:** Keep this at the level of design literacy: the point is what the
    plan may and may not claim, not a tour of the literature. Two of the three
    citations can be dropped if time runs short — keep Roy.

13. **Slide 13 — One decision-maker, no room** `class: —`

    Content:
    - In this simulation, a zoning change takes effect the moment it is drawn.
      There is no notification period, no submission, no hearing, no vote, no
      appeal, and no developer with interests of their own.
    - Sherry Arnstein, "A Ladder of Citizen Participation" (1969), arranged
      participation on eight rungs from manipulation to citizen control. This
      model is not on the ladder. There is no rung for a process with one
      participant.
    - Paul Davidoff, "Advocacy and Pluralism in Planning" (1965), argued that
      the planner is not a neutral technician and that a plan is one interested
      party's argument among several. The model gives you exactly one plan and
      no other party.
    - Bent Flyvbjerg, *Rationality and Power* (1998), on how rationality is
      produced by power rather than the reverse: the plan that gets built is
      not the one the analysis favoured, it is the one the process could carry.
    - What this costs you in practice: every timeline in your capstone is a
      timeline with the politics removed. A corridor upzoning that takes four
      simulated years here would take considerably longer against an objection
      process, and the sequencing of your plan is the first thing that breaks
      when it does.
    - So state your sequencing as conditional. "Stage two follows stage one" is
      a claim about the model. "Stage two requires stage one to have been
      approved" is a claim about a plan.

    **Notes:** The sequencing point is the one with the most direct effect on
    next week's memos, so land it last and land it concretely.

14. **Slide 14 — Comprehensive models fail by being comprehensive** `class: —`

    Content:
    - Douglass Lee's "Requiem for Large-Scale Models" (1973) reviewed a decade
      of integrated urban models and listed seven characteristic faults:
      **hypercomprehensiveness**, **grossness**, **hungriness**,
      **wrongheadedness**, **complicatedness**, **mechanicalness**,
      **expensiveness**.
    - His argument was not that modelling is worthless. It was that a model
      built to represent everything is too coarse at every point to be right
      anywhere, needs data nobody can supply, and becomes complicated enough to
      conceal its own assumptions from the people relying on it.
    - Read that list against the model we use. It is a single integrated solve
      over economy, traffic, services and land value. It is comprehensive by
      design. Lee's list is not a description of a bad model — it is a
      description of this kind of model working normally.
    - Theodore Porter, *Trust in Numbers* (1995), supplies the other half:
      quantification is adopted where trust is thin, because a number travels
      further than a judgement. That is why your jury asks for figures, and why
      figures are persuasive out of proportion to what they establish.
    - Which is the reason the omissions list exists. The number will be
      believed. You are the only person in the room in a position to say what
      it covers.

    **Notes:** Fifty-four years old and the list still reads as a specification
    for the studio's software. State that plainly and move on; the observation
    does not need help.

15. **Slide 15 — From eight years of rate-base modelling** `class: quote`

    The pull-quote, exactly:

    > "The rate-base model was never wrong about the revenue. It had no field
    > for the tenants, and I signed the report anyway.
    >
    > Knowing which field is missing is not a criticism of the model. It is the
    > job."
    >
    > — Marisol Quaye

    **Notes:** Deck-builder: this is the convenor's own line and may be used in
    quotation marks. Do not put invented wording inside quotation marks against
    any of the real authors cited in this lecture — paraphrase them in the body
    text instead, as the other slides do.

16. **Slide 16 — The tradeoff, named** `class: impact`

    Content, exactly:

    > # Mobility performance against livability
    >
    > The last four blocks of the Kerrow corridor. Upzone them and the spine
    > hits its ridership target.
    >
    > The simulation will report livability rising as well, because it will be
    > computing livability over the households that are there afterwards.
    >
    > Both numbers go up. The trade still happened. Write it down.

    **Notes:** This is the one slide from the whole semester that students
    misquote in memos, so read it aloud verbatim. The instruction is to record
    a tradeoff the metrics do not display — not to reject the metrics.

17. **Slide 17 — The omissions appendix, and where to read further** `class: —`

    Content:
    - Required in the capstone defence memo, half a page, four headings. This
      is not a reflective essay. Each heading takes two or three sentences and
      a figure where you have one.

    1. Who holds the land whose value this plan raised, and what the plan does
       about it.
    2. Which households present in Week 1 are not present in Week 12, and where
       the plan assumes they went.
    3. Which of the plan's claims rest on a figure the model computes rather
       than a behaviour it observes.
    4. What a person who objected to this plan would object to, and what the
       plan's answer is.

    - A memo with an honest appendix is marked better than a memo with a
      flattering one. The jury has read a great many flattering ones.

    Further reading, as a plain two-column list:
    - Scott, *Seeing Like a State* (1998)
    - Marcuse, "Gentrification, Abandonment and Displacement" (1985)
    - Glass, *London: Aspects of Change* (1964) — where the word came from
    - Neil Smith, "Toward a Theory of Gentrification" (1979) — the rent gap
    - Hartman, "The Right to Stay Put" (1984)
    - Lees, Slater and Wyly, *Gentrification* (2008)
    - Turner and Fichter, *Freedom to Build* (1972)
    - Roy, "Urban Informality" (2005)
    - Watson, "Seeing from the South" (2009)
    - de Soto, *The Mystery of Capital* (2000), read against Gilbert, "The
      Return of the Slum: Does Language Matter?" (2007)
    - Ostrom, *Governing the Commons* (1990)
    - Lee, "Requiem for Large-Scale Models" (1973)
    - Oreskes, Shrader-Frechette and Belitz (1994)
    - Porter, *Trust in Numbers* (1995)
    - Merry, *The Seductions of Quantification* (2016)
    - Arnstein, "A Ladder of Citizen Participation" (1969)
    - Davidoff, "Advocacy and Pluralism in Planning" (1965)
    - Flyvbjerg, *Rationality and Power* (1998)
    - George, *Progress and Poverty* (1879)
    - Fainstein, *The Just City* (2010)
    - Lefebvre, *Le Droit à la ville* (1968), and Harvey, "The Right to the
      City" (2008)

    **Notes:** Close on the appendix headings, not the reading list. The
    headings are marked next week and the list is not.

### Studio session hand-off

- Arrive with the running Halstead Reach save, and with the land value overlay
  and the household and rent readouts for the Kerrow corridor already recorded
  for Week 1 and for the current state. Students who have not got the Week 1
  figures should reconstruct them from their Week 1 pin-up screenshots rather
  than skip the comparison.
- The session's first hour rebuilds slide 8's table for each student's own
  corridor. Most tables will differ from the lecture's in magnitude and none
  will differ in direction; the ones that do are worth ten minutes at the front
  of the room.
- The second hour takes the four-block decision and drafts the memo sentence
  that records it, in the metrics' own words. Draft it in the session, because
  it is the sentence students otherwise write at midnight next Sunday.
- The omissions appendix is drafted to its four headings before anyone leaves.
  Desk crits on Tuesday will read it.

### Assessment hooks

Feeds the **Comprehensive City Plan** (Week 12, 50%, holistic) directly and is
the only week that adds a required section to the memo. Holistic marking means
there is no line item for the appendix; what it means in practice is that a
plan whose claims exceed its evidence is marked down across the whole
document, and the appendix is the cheapest available protection against that.

Retrospectively, this week is the reason the three earlier assessments were
marked on stated criteria rather than on the model's raw numbers. Worth saying
so out loud: the marking scheme has been a claim about what the metrics can
carry since Week 1.

### Open questions for the writer

- The figures on slides 5 and 8 are internally consistent and plausible but
  invented for the lecture. Decide whether they are presented as the studio's
  reference save — in which case they must be reproducible from a save the
  studio actually ships — or explicitly as a worked example the students then
  rebuild from their own districts. The second is safer and is what the studio
  hand-off assumes.
- Slide 8's low-wealth household drop of 244 against a homelessness figure of
  34 assumes the simulation's households leave the map rather than relocate
  within it. Check that against the studio's build before printing the "two
  hundred and ten" line, and adjust the arithmetic rather than the argument if
  the behaviour differs.
- The lecture currently carries twenty-one further-reading entries, which is
  more than a slide should hold. Decide whether slide 17 keeps the full list,
  or whether it keeps six and the rest moves to the lecture page on the site.

---

## Week 12 — Capstone Review: The Comprehensive Plan

**Date:** 2027-05-24 · **Lecturer:** Marisol Quaye · **Deck status:** No deck.
Week 7 is intended to hold the semester's only formal slide deck; it is not yet
built. Week 12
is the shortest lecture of the semester — it runs in the morning of the final
jury, ahead of the 12:00 artefact deadline — and is delivered from the lectern.
The plan below is written to be spoken as-is and to compile into a deck without
further research if the studio commissions one.

### Argument in one sentence

A comprehensive plan is an argument with a claim, evidence and a stated
rebuttal — not an inventory of everything you built — and the jury is testing
whether you decided your tradeoffs or discovered them afterwards.

### Learning outcomes

- Structure a comprehensive plan as a single claim with grounds, warrant,
  qualifier and rebuttal, and state that claim in one sentence.
- Sequence a twenty-minute jury walk-through across five scales and five info
  views, with a stated purpose for each.
- Defend a tradeoff in the studio's three named metrics rather than apologise
  for a low number, using the two-column form given on slide 9.
- Present the Comprehensive City Plan at the final pin-up under the studio's
  standing rules, with the artefact lodged by 12:00 and the omissions appendix
  at the front of the memo.

### Theory anchors

- **Stephen Toulmin, *The Uses of Argument* (1958).** An argument has six
  parts: claim, grounds, warrant, backing, qualifier and rebuttal. This is the
  lecture's working structure — the plan is written to Toulmin's six fields on
  slides 5 and 6, and the jury's questions map onto them one for one.
- **Alan Altshuler, "The Goals of Comprehensive Planning" (*Journal of the
  American Institute of Planners*, 1965).** The comprehensive plan's standing
  difficulty is that no planner can know a community's goals well enough to
  integrate them, so comprehensiveness is always partly a claim to authority.
  Used to explain why the plan must argue rather than assert.
- **Charles Lindblom, "The Science of 'Muddling Through'" (*Public
  Administration Review*, 1959).** Real decisions proceed by successive limited
  comparison, not by synoptic evaluation of all options. Used to reconcile the
  document — one integrated plan — with how it was actually produced, which was
  eleven incremental weeks.
- **Horst Rittel and Melvin Webber, "Dilemmas in a General Theory of Planning"
  (*Policy Sciences*, 1973).** Planning problems are wicked: no stopping rule,
  solutions are good-or-bad rather than true-or-false, and there is no
  immediate test of a solution. This is the licence to defend rather than
  apologise, and it is the intellectual content of slide 10.
- **Kevin Lynch, *Good City Form* (1981).** Lynch's five performance
  dimensions — vitality, sense, fit, access, control — with efficiency and
  justice as meta-criteria. Used at the close to place the studio's three
  metrics inside a larger set and to say honestly what they do and do not
  cover.

### Mechanic mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Toulmin's grounds | The land value info view over the full district extent | The overlay reading as evidence for a claim rather than as a picture of a city |
| Toulmin's qualifier | Week 7's trunk capacity readouts against current load | The plan's headroom being a number, so the qualifier can be stated as one |
| Lynch's access dimension | Public transport routes, stop catchments and ridership figures | Mobility performance surviving as a claim only where ridership responds to the catchment |
| Lynch's efficiency meta-criterion | The budget panel — annual income, expenses and accumulated balance | Fiscal performance as a curve over the plan's years rather than a single reading |
| Rittel and Webber's absent stopping rule | The simulation continuing to run past the year the plan stops | The district changing after the plan ends, which is the jury's favourite question |
| Lindblom's successive limited comparison | The save file's own history — eleven weeks of incremental moves | The document reading as synoptic while the save records nothing of the kind |

### The tradeoff of the week

**Fiscal performance against mobility performance.** The decision is what the
accumulated surplus at the plan's final year buys, and it has to be taken
before 12:00 today.

- **Build the Kerrow cross-town link.** The spine currently runs north–south
  only. The cross-town link raises the district's non-car trip share from 38
  per cent to a modelled 46 per cent and puts the eastern employment area
  inside the catchment. It consumes the whole surplus and pushes the annual
  balance negative for the first three years of stage three.
- **Hold the surplus as reserve.** The annual balance stays positive through
  every year of the plan, which is the answer to the question the jury asks
  every single year: what happens in year fifteen. Mobility performance stays
  at 38 per cent and the eastern employment area stays car-dependent.

Both are defensible and the plan's argument changes depending on which is
taken, because the surplus is the only uncommitted money left. What is not
defensible is presenting the link as costless, or presenting the reserve as
prudence without naming the mobility gap it declines to close. Whichever is
chosen becomes the plan's headline claim on slide 6, and the jury will test it
against the qualifier.

### Slide plan

1. **Slide 1 — Capstone Review: The Comprehensive Plan** `class: impact`

   Content, exactly:

   > # The Comprehensive Plan
   > Week 12 · Marisol Quaye · 24 May 2027
   >
   > The artefact is due at 12:00. The jury sits at 14:00.
   > This is the last hour in which anything is still a decision.

   **Notes:** Short lecture, and the room knows why. Do not pad it. Every
   minute spent here is a minute not spent on the memo.

2. **Slide 2 — The clock** `class: —`

   Content, as a plain list:
   - **12:00 today** — the artefact. In-simulation screenshots and the defence
     memo, including the omissions appendix drafted last week. Five percentage
     points per calendar day after that, weekends included; not marked at all
     past five days.
   - **13:45** — presentation order drawn in Studio 2.14.
   - **14:00** — the jury. The Course Convenor, your cohort, and Sunniva Marek
     of Kesselring & Marek, who is in the building this afternoon and no other.
   - **Twenty minutes each.** Roughly nine minutes of walk-through and eleven
     of questions, and the ratio is not negotiable by talking for longer.
   - Miss the jury and the plan is marked from the memo alone, which means the
     memo has to answer, unprompted, every question the room would have asked.
     Most memos do not.
   - Attendance is expected for the whole afternoon, including the parts where
     you are not being marked. A jury with no audience is two people looking at
     a screenshot.

   **Notes:** Straight from the studio policies page, and worth reading out
   because a third of the room has not opened it since Week 1.

3. **Slide 3 — Holistic marking, and what it does not mean** `class: —`

   Bullets:
   - The Comprehensive City Plan is 50 per cent of the studio and it is marked
     holistically. There is no criterion weighting on this one.
   - What that does not mean: that the three metrics stopped applying. They are
     the language the plan is argued in and the language the jury asks in.
   - What it does mean: no part of the plan can be carried by a strong score
     elsewhere. A plan whose claims exceed its evidence is marked down across
     the whole document, not in one line item.
   - The three earlier assessments each told you which metric to favour. This
     one does not, and choosing is the assessment.
   - So the first question the plan answers is not "is this good" but "what was
     this plan trying to be good at, and did it say so".

   **Notes:** Students read "holistic" as "vague" and then write to nothing.
   The last bullet is the correction and it is worth pausing on.

4. **Slide 4 — A plan is an argument, not an inventory** `class: —`

   Content:
   - The failure mode of every capstone is the tour: here is the transit, here
     is the industry, here is the park chain, here is the water. Twenty minutes
     of true statements adding up to no position.
   - Alan Altshuler (1965) put the difficulty precisely: comprehensiveness is a
     claim to have integrated goals that a planner cannot in fact know well
     enough to integrate. A comprehensive plan is therefore always partly an
     assertion of authority, and the only honest way to hold that authority is
     to argue for it.
   - Charles Lindblom (1959) described how the decisions actually get made:
     successive limited comparison, one incremental move against the last, never
     a synoptic evaluation of everything.
   - Both are true of your semester. Your document is synoptic. Your save file
     is eleven weeks of muddling through.
   - The plan's job is to make the second into the first — not by pretending
     the increments were a masterplan, but by stating the position they turned
     out to add up to, and defending that.

   **Notes:** The gap between the document and the save is the honest problem
   of the capstone, and naming it here makes the Toulmin structure land as a
   tool rather than a formality.

5. **Slide 5 — Six fields** `class: —`

   Toulmin's structure, as a table with exactly these rows:

   | Field | What it is | Where it lives in your plan |
   | --- | --- | --- |
   | Claim | The one thing the plan asserts | First sentence of the memo; slide one of your pin-up |
   | Grounds | The evidence for it | Your info-view screenshots and figures |
   | Warrant | Why that evidence supports that claim | The design principle you are relying on, named |
   | Backing | Why the warrant holds here | Your own studio findings from weeks 5, 6, 7 and 10 |
   | Qualifier | The conditions under which the claim holds | Capacity headroom, growth rate, staging assumptions |
   | Rebuttal | What would defeat it | Stated by you, before the jury states it |

   Line beneath: the jury's questions are these six fields in a different
   order. A plan missing the warrant gets asked "so what"; a plan missing the
   qualifier gets asked "and then what"; a plan missing the rebuttal gets asked
   the rebuttal.

   **Notes:** The last line is the practical payoff. Students who pre-empt the
   rebuttal are consistently marked higher because the room stops testing them
   and starts discussing with them.

6. **Slide 6 — The six fields, filled in** `class: —`

   A worked example for Halstead Reach, as a table with exactly these rows:

   | Field | Filled in |
   | --- | --- |
   | Claim | Halstead Reach should concentrate its next decade of growth on the Kerrow corridor and not on the Ondrey escarpment |
   | Grounds | Corridor land value index 214 against the escarpment's 131; 71 per cent of corridor dwellings within 400 m of a spine stop, against 9 per cent on the escarpment; the escarpment requires a new trunk water extension whose upkeep exceeds its modelled rate yield for nine years |
   | Warrant | Growth placed inside an existing high-capacity transit catchment costs less to service and generates more of its own mobility than growth placed outside one |
   | Backing | Week 5 and Week 6: spine ridership responded to density inside the 400 m catchment and not beyond it. Week 7: the corridor trunk has headroom, the escarpment has no trunk |
   | Qualifier | Holds while the spine has capacity. The corridor supports approximately one further upzoning before the Week 7 trunk knee |
   | Rebuttal | Fails if the escarpment's fire exposure is judged acceptable and the corridor's loss of 244 low-wealth households is judged unacceptable, in which case the plan's own equity gap is the argument against it |

   **Notes:** Point out that the rebuttal row cites the student's own omissions
   appendix from Week 11. A plan that supplies the case against itself is not
   weakened by it; it is the only kind of plan the jury can have a real
   conversation with.

7. **Slide 7 — Walking a jury through it: five scales** `class: —`

   The table, exactly these rows:

   | Move | On screen | What you say | Time |
   | --- | --- | --- | --- |
   | 1 | Full district extent, roads only, no overlay | The site, and the one constraint that set the plan | 60 s |
   | 2 | Same extent, land value overlay | What the plan did, and where it landed | 90 s |
   | 3 | The corridor at neighbourhood scale | The claim, in one sentence, with its grounds | 180 s |
   | 4 | One block at street level | The thing the figures cannot show — what it is like to stand there | 90 s |
   | 5 | Back to full extent, the three metric readouts | The trade you made, named | 90 s |

   Line beneath: nine minutes. The other eleven belong to the room, and the
   room is where the marks are.

   **Notes:** Move 4 is the one students cut when they are nervous, and it is
   the one the visiting critic remembers. Insist on it.

8. **Slide 8 — The info-view sequence** `class: —`

   The table, exactly these rows:

   | Order | Info view | Evidence for | The question it invites |
   | --- | --- | --- | --- |
   | 1 | Land value | That the capital programme landed where it was aimed | Who captured the uplift |
   | 2 | Public transport routes and ridership | Mobility performance | What happens at the terminus |
   | 3 | Service coverage by district | Livability's floor | Which districts sit outside every radius |
   | 4 | Budget: annual income, expenses, balance | Fiscal performance | Which year the surplus ends |
   | 5 | Water, ground pollution and fire hazard | That hazard was designed for rather than survived | Ombersley Flats |

   Line beneath: each of those five questions will be asked. Have the answer
   before you open the overlay that invites it.

   **Notes:** The fifth column is the whole slide. Students choose overlays for
   how they look; the sequence should be chosen for the questions it sets up.

9. **Slide 9 — Defending, and apologising** `class: —`

   The table, exactly these rows:

   | The fact | Apologising | Defending |
   | --- | --- | --- |
   | Livability in the west reads 58 | "I ran out of time to fix the west" | "Livability in the west reads 58. The Year 9 surplus went to the cross-town link instead of the western park chain, because mobility performance was the binding constraint on employment access district-wide. The park chain is stage two, and the balance supports it from Year 13" |
   | The balance is negative in Years 6 to 9 | "the budget went negative for a while" | "The plan runs a deficit from Year 6 to Year 9, financed against corridor rate growth. If growth runs slower than modelled, stage three defers by a year and the deficit closes a year later. That is the qualifier on the whole plan" |
   | The corridor lost 244 low-wealth households | "the model doesn't really handle that" | "The corridor lost 244 low-wealth households against 34 recorded as homeless. The plan bought mobility performance with that and has no instrument in it to compensate them. Appendix item 2 says where I think they went and how confident I am" |

   Line beneath: the difference is not tone. It is that the defence contains a
   number, a reason, and what happens next.

   **Notes:** This is the most useful slide in the lecture and students will
   photograph it. Say each right-hand cell aloud at full length so they hear
   how long a real answer is — about twenty seconds, not five.

10. **Slide 10 — Better or worse, not true or false** `class: —`

    Bullets:
    - Rittel and Webber (1973) set out why planning problems are wicked. Four of
      their propositions matter this afternoon.
    - **There is no stopping rule.** You did not finish the plan. You ran out of
      semester, and every planner runs out of something.
    - **Solutions are not true or false, they are good or bad.** Nobody in the
      room can mark your plan correct. They can only judge it better or worse
      than the alternatives you did not take, which is why the alternatives
      belong in the memo.
    - **There is no immediate and no ultimate test of a solution.** The waves of
      consequence keep going after the assessment does.
    - **The planner has no right to be wrong.** Their phrase, not a
      rhetorical one: the consequences fall on people who did not choose the
      plan, so the standard is higher than in a science where a wrong
      hypothesis is simply retracted.
    - Put together: apologising for a plan is a category error. You are not
      being asked whether it is correct. You are being asked whether you knew
      what you were choosing.

    **Notes:** This is the lecture's one piece of intellectual reassurance and
    the room needs it four hours before a jury. Deliver it as fact, not comfort.

11. **Slide 11 — Back to the three metrics** `class: —`

    Content:
    - Week 1 named three metrics and every brief since has been marked against
      them: **fiscal performance**, **mobility performance**, **livability**.

    Halstead Reach across the semester, as a table with exactly these rows:

    | Metric | Wk 1 | Wk 4 | Wk 6 | Wk 9 | Wk 12 |
    | --- | --- | --- | --- | --- | --- |
    | Fiscal — annual balance (index) | −4 | +2 | −6 | +9 | +14 |
    | Mobility — share of trips not by car | 0% | 6% | 24% | 27% | 38% |
    | Livability — district reading | 52 | 58 | 61 | 74 | 77 |

    - Read the columns, not the rows. Week 6 bought 18 points of mobility with
      the fiscal balance. Week 9 bought 13 points of livability and got the
      balance back by deferring the cross-town link, which is the decision
      still sitting open this morning.
    - Not one of those three rows moved without another moving against it, in
      any week of this semester. Find the column in your own table where that
      is clearest and open your pin-up on it.
    - Kevin Lynch, *Good City Form* (1981), evaluated cities on five dimensions
      — vitality, sense, fit, access, control — with efficiency and justice as
      meta-criteria. Our access is his access. Our fiscal performance is a
      narrow reading of his efficiency. Our livability does some of the work of
      vitality, sense and fit, and none of the work of control.
    - His justice has no counterpart in our three, which is what last week's
      lecture was about, and it is why the appendix is at the front of the memo
      rather than the back.

    **Notes:** This closes the semester's loop back to Week 1 and does it with
    the students' own numbers. Do not add a summary after it; the table is the
    summary.

12. **Slide 12 — The tradeoff, named** `class: impact`

    Content, exactly:

    > # Fiscal performance against mobility performance
    >
    > The surplus buys the Kerrow cross-town link, or it stays as the reserve
    > that keeps the plan solvent to Year 15.
    >
    > It cannot do both, and you have until 12:00.
    >
    > Whichever you take is your claim. Write the qualifier for it before you
    > write anything else.

    **Notes:** Twelve weeks of tradeoffs and the last one is due before lunch.
    That is the correct note to end the teaching on.

13. **Slide 13 — Before you stand up** `class: —`

    A checklist, exactly:
    - The save open at the plan's final year, paused, at full district extent.
    - The five info views from slide 8 checked in order, in advance, on this
      machine.
    - The memo on the second screen with the omissions appendix at the front.
    - Your claim written as one sentence you can say without reading it.
    - Your qualifier and your rebuttal written down, in that order, where you
      can see them.
    - The one figure for each of the three metrics, memorised. If you have to
      look up your own livability reading, the room notices.
    - Nine minutes of walk-through timed at least once, out loud, this morning.
    - A decision about the surplus.

    **Notes:** Read it as a list, at pace. It is the last practical thing said
    to this cohort and they should be able to check it off in the hour after
    the lecture.

14. **Slide 14 — The visiting critic** `class: quote`

    The pull-quote, exactly:

    > "I will ask what you traded, and I will ask it first. If it takes you
    > more than a sentence to answer, you did not make the trade — you found it
    > afterwards, and the plan will show that."
    >
    > — Sunniva Marek, Kesselring & Marek

    Beneath, one line in the studio's voice: they have not watched you build
    it. They have your screenshots, your memo and twenty minutes, which is
    roughly what a plan gets in practice before somebody decides about it.

    **Notes:** Deck-builder: this is the visiting critic's own line and may be
    used in quotation marks. End the lecture here and release the room — do not
    add a closing slide, and do not take questions past the hour.

### Studio session hand-off

- There is no ordinary studio session this week. The afternoon is the final
  pin-up in Studio 2.14: order drawn at 13:45, jury from 14:00, twenty minutes
  each, and the cohort in the room for the whole afternoon.
- Students arrive at the jury with the save paused at the plan's final year,
  the five info views from slide 8 pre-checked on the presenting machine, and
  the memo open with the omissions appendix at the front.
- Anyone still holding the surplus decision at 11:00 should take it at the desk
  rather than at the lectern. An undecided plan presents as an inventory, which
  is the failure mode slide 4 exists to prevent.
- The convenor is in Studio 2.14 from the end of the lecture to 12:00 for
  one-question desk crits only — a single question each, so that everyone gets
  one.

### Assessment hooks

Feeds the **Comprehensive City Plan** (Week 12, 50 per cent, holistic) and
nothing else, because nothing else is left. Holistic marking has no criterion
weights, but the three named metrics remain the language the plan is argued and
questioned in, and slides 5, 6 and 9 are the structures the jury's questions
will follow.

The Week 11 omissions appendix is a required section of this memo. It is not
separately weighted; a plan whose claims exceed its evidence loses across the
whole document, and the appendix is what keeps the claims inside the evidence.

### Open questions for the writer

- The studio calendar puts Week 12 on Monday 24 May and this plan assumes the
  final pin-up runs that same afternoon, which makes the lecture the morning
  briefing before the jury. `src/content/assessments/03-comprehensive-city-plan.md`
  is authoritative on the 12:00 due time and 50% weight. The unresolved issue
  is the defence: this lecture and the policies page say 14:00 in one room,
  while the detailed Week 12 session plan uses two parallel rooms from 13:00 so
  sixteen twenty-minute slots fit. Resolve that once across the course before
  this lecture is written up.
- Slide 11's semester table is invented and internally consistent. Decide
  whether it is presented as the studio's reference save or explicitly as a
  worked example students rebuild from their own figures — the same decision
  Week 11's slides 5 and 8 need, and it should be taken once for both weeks.
- The twenty-minute jury slot is split here as nine minutes of walk-through and
  eleven of questions. Confirm that against the actual room booking and cohort
  size; if the slot is fifteen minutes, slide 7's move 4 is the one to shorten
  and move 2 is the one to cut, and the table should say so rather than leaving
  students to improvise the trim.

---
