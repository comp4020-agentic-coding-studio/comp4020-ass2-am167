# Adversarial review — lecture plans

**Reviewed:** 2026-09-01
**Scope:** `notes/lecture-plans.md`, Weeks 1–12 only. Other repo files were read
only to test the plans' claims about the calendar, assessments, staff, sessions
and course canon. This review does not ask for lecture pages, studio pages,
assessment briefs or a deck to be built.

## Verdict

**Not approved for production.** The twelve-week argument is coherent and the
theory sequence is often strong, but the plans repeatedly present invented
datasets, derived measurements and unsupported Cities: Skylines II behaviours
as native, reproducible outputs. Weeks 7 and 10 require new mechanic premises;
they cannot be repaired by copy-editing. A versioned reference save and a
measurement protocol are prerequisites for all twelve weeks.

The most serious problem is methodological. Week 11 tells students not to let a
model's precision exceed its evidence while the other weeks do exactly that.
The course should make that tension its quality standard: every number must be
a direct readout, a shown derivation, or an explicitly hypothetical teaching
example.

## Evidence checked

The review used the current repo's assessment and session plans as internal
authorities, and the game's official documentation for mechanic claims:

- [Traffic AI and traffic/road info views](https://www.paradoxinteractive.com/games/cities-skylines-ii/features/traffic-ai)
- [Public and cargo transportation](https://www.paradoxinteractive.com/games/cities-skylines-ii/features/public-cargo-transportation)
- [Zones, land value and building levels](https://www.paradoxinteractive.com/games/cities-skylines-ii/features/zones-signature-buildings)
- [City services, coverage, districts and budgets](https://www.paradoxinteractive.com/games/cities-skylines-ii/features/city-services-districts-policies)
- [Electricity and water](https://www.paradoxinteractive.com/games/cities-skylines-ii/features/electricity-water)
- [Economy and production](https://www.paradoxinteractive.com/games/cities-skylines-ii/features/economy-production)
- [Climate, seasons and disasters](https://www.paradoxinteractive.com/games/cities-skylines-ii/features/climate-seasons)

These sources establish what the game exposes and controls. They do not prove
that an undocumented behaviour is impossible in every current build, which is
why undocumented claims below are marked **unverified**, not automatically
false. A tested course build could resolve them.

## Cross-cutting findings

### Critical — there is no reproducible empirical base

The plans quote exact distances, populations, tax shares, costs, headways,
travel times, capacity thresholds, pollution travel times, household counts,
land-value indices and modal shares. The repo contains no versioned game save,
Kerrow Basin map or measurement sheet that can reproduce them. Several open
questions admit that the numbers are invented or need checking, while the slide
copy says students will see them in their own save.

**Required correction:** pin the game version and distribute one canonical
reference save. For each fixed table, record starting state, intervention,
elapsed simulation time, time of day, UI source and calculation. Until that
exists, label the table **worked hypothetical** and remove predictive words such
as “will”, “exactly”, “always” and “every”.

### Critical — native, derived and invented evidence are conflated

Examples include “district livability reading”, “per-district income and
outlay”, “average district-wide travel time”, “headway”, “per-line operating
cost”, hourly trip decomposition and a corridor household history. Some can be
estimated manually; some are course-defined composites; some are not exposed by
the documented UI. The plan currently presents all of them as readouts.

**Required correction:** apply the evidence labels added near the top of the
plan. A derived measure needs its formula and source readouts. A course-defined
metric needs an explicit formula. A worked example must not be attributed to
the simulation.

### Critical — Weeks 7 and 10 need different mechanic premises

Week 7 treats water pipes as capacity-limited hydraulic mains with distance-
based pressure loss and a far-end-first failure. Official documentation says
water and sewage pipes do not have a capacity to monitor; production and sewage
processing do, while electricity lines have transmission limits. Week 10 is
built around seasonal river flooding and bridge outages, but the documented
natural disasters are forest fire, hail storm and tornado.

**Required correction:** rebuild Week 7 around documented production,
consumption, sewage processing, water-flow pollution and electricity-line
bottlenecks. Replace Week 10's vanilla-flood claim with a supported hazard, or
explicitly specify and ship the DLC/mod/build and save that produces the flood.

### Major — geography and delivery canon drift

- Kerrow corridor is north–south in the shared canon and east–west in Week 4.
- Verrall Ridge is both a landform and a settlement option; `studio-plans.md`
  names the settlement shelf Ludworth Bench.
- Pellow industrial cells and Ondrey escarpment arrive in Week 10 without being
  in the shared canon; they duplicate earlier functions.
- Ombersley Flats shifts from the Week 3 industrial site to Week 7/10 medium-
  density housing without a stated rezoning.
- Week 5 alternates between tram and bus, changing every capacity and cost
  example.

**Required correction:** draw one canonical plan, fix north, and maintain a
place/use register by week. Choose one Week 5 mode, vehicle, depot, alignment
and initial fleet.

### Major — assessment and event information had decayed inside the plan

The plan retained the abandoned 15/20/25/40 structure, a nonexistent Mobility
Plan, Friday deadlines, and a 40% capstone. These unambiguous plan errors were
corrected during this review to the current 25/25/50 structure, Monday 12:00
artefact deadlines and no Week 6 submission.

Week 12 remains blocked by an institutional conflict: its lecture plan and the
published policies say a 14:00 jury in one room, while the detailed Week 12
session plan correctly observes that sixteen 20-minute defences need two rooms
and schedules them from 13:00. Week 9 also has conflicting jury staff across
the lecture, session and people plans.

**Required correction:** make one timetable and staffing decision, then update
all sources together. Do not make another local edit in the lecture plan.

## Week-by-week findings

### Week 1 — Site Analysis and the Blank Map

**Verdict:** useful course opening, unsafe mechanic explanations.

- **Major:** land value is described as rising directly around publicly funded
  roads, services and parks and not around buildings. Official documentation
  describes an indirect chain through satisfied needs, willingness to pay rent,
  demand and building finances. Teach the chain rather than a Georgist result
  the model does not directly implement.
- **Major:** the Ridge option is assigned better land value and well-being
  because of “long views” and quiet air. The plan names no mechanic for views.
  Separate design judgement from game evidence.
- **Major:** “no pumping” versus lifting water 90 m assumes terrain-sensitive
  hydraulic cost/pressure that the documented water model does not expose.
- **Major:** the exact 1.2 km, 4.1 km, 90 m and 4 × 2 km geometry is unsupported
  without the map file. Keep as hypothetical or ship the map.
- **Minor:** five substantial theory anchors compete with the actual Week 1
  job. Lynch's `Good City Form`, McHarg and Geddes are sufficient; move George
  to Week 8/11 and `Image of the City` to Week 5 if the hour runs long.

### Week 2 — The Grid vs. the Organic Street

**Verdict:** strong topology question; the proposed experiment cannot produce
its claimed evidence.

- **Critical:** the plan zones nothing, runs an unzoned local network, then
  expects traffic volumes, redistribution and queues. With no local origins or
  destinations there is no controlled local demand. Run identical populated
  reference saves or make this a diagrammatic route-count exercise.
- **Major:** the lecture compares 80 m with 240 m blocks while the studio plan
  uses 80 m and 160 m. Choose one controlled comparison.
- **Major:** the road-length/dwelling table changes both frontage and dwelling
  capacity, so it does not isolate network cost. Hold population and land use
  constant, wait for equal occupancy, then report road metres per occupied
  household as a derived measure.
- **Major:** traffic volume on an empty graph is not a space-syntax integration
  measure. Count intersections, turns and alternative paths first; traffic can
  be a later controlled observation.
- **Minor:** “a road hierarchy is a tree” is too categorical. Many hierarchical
  networks contain loops; teach the tree as one failure pattern.

### Week 3 — Zoning and the Myth of Separation

**Verdict:** balanced historical framing; pollution claims are overstated and
the worked comparison is not reproducible.

- **Major:** separation is said to solve industrial nuisance “completely”,
  while the plan itself says pollution crosses zoning boundaries. Say it can
  reduce residential exposure under measured siting and flow conditions.
- **Major:** industry at Ombersley is said to send ground, air and water
  pollution off-map. Ground pollution stays at the industrial site; water
  pollution in the documented mechanic comes from sewage discharge or polluted
  groundwater, not automatically from an industrial zone. Separate all four
  pollution channels.
- **Major:** identical plumes, zero exposure, a 3.2 km commute and every worker
  crossing one bridge are fixed outcomes with no save. Label the schemes as
  worked hypotheticals or measure them.
- **Major:** a named household route can support a case study, but the plan must
  say whether distance/time is a UI field, a road-tool measurement or a manual
  observation.
- **Minor:** “form-based codes followed” compresses a contested history into a
  causal line. Present the book as one later advocacy source, not the origin of
  form-based coding.

### Week 4 — Density and the 15-Minute City

**Verdict:** good shift from radius to time; it conflates pedestrian access,
passive service coverage and invented district accounting.

- **Major:** a selected service's passive coverage is road-based and depends on
  range, capacity and population; simulated services can travel farther.
  It is not the same as a 15-minute walking catchment. Draw and measure both.
- **Major:** moving a clinic to serve three cells does not make the game charge
  each cell one-third of upkeep. If retained, call this a declared studio cost-
  allocation convention.
- **Major:** the citywide budget does not expose “the rate take that cell
  generates”. Use a controlled whole-city before/after delta or a separate
  spreadsheet; do not call the allocation a game readout.
- **Major:** claims that 4,000 residents sustain a shop, tenancies “cycle”, and
  a park creates a value gradient in a year require the reference save.
- **Minor:** the Perry exclusion critique is important but introduced too late
  for the assessed plan. Put the question in Week 3 when the brief is issued.

### Week 5 — Moving People: Transit-Oriented Design

**Verdict:** the best teachable core is frequency plus the ridership/coverage
choice; the line-management evidence is mislabelled.

- **Major:** official line details expose length, stops, passengers, usage,
  ticket price, assigned vehicles and operating hours. The plan treats headway,
  per-line operating cost, revenue and waiting passengers per stop as guaranteed
  direct readouts. Measure headway manually and identify any cost as citywide or
  derived.
- **Major:** Vuchic's 2.5 out-of-vehicle weighting is a planning heuristic, not
  the game's documented pathfinding coefficient. Predict with it, then compare
  observed choices.
- **Major:** choose bus or tram before fixing fleet, depot, capacity, cost and
  ridership figures.
- **Major:** “below 12 minutes” and “above 20 minutes” are useful service-
  planning heuristics, not universal behavioural thresholds. Attribute and
  qualify them.
- **Minor:** the plan says a passenger count is recorded before the line is
  built. Provide a baseline line or move the count after a fixed operating run.

### Week 6 — Traffic Engineering and Its Discontents

**Verdict:** valuable induced-demand lecture; it currently converts theory and
invented observations into false precision.

- **Critical:** Duranton and Turner's lane-kilometre/VKT elasticity is used as a
  deterministic formula for one corridor's short-run peak volume. Teach it as
  an empirical comparative finding, not a forecast equation.
- **Major:** the game is said to implement Wardrop equilibrium “exactly”. Its
  documented pathfinding weighs time, money, comfort and behavioural factors;
  Wardrop is an analytical lens, not a verified implementation claim.
- **Major:** signal green ratio, saturation flow, average corridor speed,
  volume by hour and average district travel time need explicit manual
  protocols; several are not documented UI outputs.
- **Major:** the additive `+1,020 veh/h` decomposition cannot be inferred from
  the listed views. Present it as a hypothetical decomposition exercise and let
  students challenge the rows.
- **Major:** `1,600 veh/h` environmental capacity is later admitted to be a
  studio convention. State the convention and its rationale on first use.
- **Minor:** verify the Downs quote against the original before putting it on a
  quote slide.

### Week 7 — Infrastructure You Don't See

**Verdict:** rebuild before production. This is the most serious plan because it
is meant to become the course's one deck.

- **Critical:** the central trunk-pipe capacity, pressure taper and far-end-
  first failure conflict with the documented no-capacity water/sewage pipes.
  Use water production, sewage processing, water-flow pollution and electricity
  transmission instead.
- **Critical:** the trigger arithmetic is wrong. Starting draw is
  312 + 418 + 374 = 1,104 units. Raising Ombersley from 374 to 412 produces
  1,142, not more than 1,200 or 103%.
- **Major:** there is no universal flat-then-cliff curve for water, sewage,
  electricity and garbage. Give each system its own documented variable and
  response.
- **Major:** services are shown as simple circles. Passive coverage follows
  roads and depends on range, capacity and magnitude; simulated service reach
  comes from vehicles or citizens.
- **Major:** the water → sewage → pollution → health → budget chain mixes
  simulation consequences with player decisions. Mark every transition
  `simulation causes` or `player chooses`.
- **Major:** the budget table does not reconcile. Its shown “before” lines net
  +₡20,800/month, not +₡11,300; its shown “after” lines net +₡7,150, not
  −₡4,600. Include omitted lines or recalculate.
- **Minor:** Star's pull-quote is admitted to be a paraphrase. Remove quotation
  marks unless verified.

### Week 8 — Fiscal Realism

**Verdict:** useful cutback exercise, but its district fiscal model is invented
and its George mapping reverses what the game actually exposes.

- **Critical:** the ₡9,000 “corridor deficit” and corridor-local budget cuts are
  not native states; the documented tax and service-budget controls are
  citywide or category-wide. Make this an explicit instructor spreadsheet
  exercise or use a controlled whole-city deficit.
- **Major:** the game does not implement land-value taxation. Residential taxes
  are varied by education level; commercial, industrial and office taxes by
  product. Use George and Vickrey to expose the missing instrument, not to claim
  the existing slider captures uplift.
- **Major:** land value is called a causal receipt for public spending. It has
  multiple endogenous inputs and cannot attribute an increase to one investment
  without a control.
- **Major:** tax thresholds, demand responses, revenue shares, service-coverage
  contraction and delays are fixed without a save or protocol.
- **Major:** fiscal performance is said to be fixed by closing the deficit, then
  both worked closures reopen it. Say “fixed at the instant of closure” and
  teach the later feedback explicitly.
- **Minor:** Thursday studio instructions conflict with Tobias Wren's Monday
  availability; the timetable needs one owner.

### Week 9 — Parks, Plazas and the Public Realm

**Verdict:** strong model-versus-observation opportunity; many social claims are
wrongly treated as simulated effects.

- **Major:** commercial demand cannot appear against a plaza “without being
  zoned for”. Demand is citywide and development still needs the relevant zone.
- **Major:** parks and plazas satisfy leisure and affect well-being; land value
  effects are indirect. Attractiveness primarily contributes to city tourism,
  not a complete local public-realm score.
- **Major:** aggregate visitors do not identify Oldenburg's “regulars”. Mark
  regulars, conversation and social mixing as unobservable.
- **Major:** Whyte's seating ratio is a design audit, not a mechanic. Decoration
  props and fixed park assets do not prove that a bench changes simulated use.
  This gap could be the lecture's sharpest point if stated openly.
- **Major:** the 1,900/7,400 catchments, costs and pedestrian counts need the
  reference save and asset list. Manual counts need a sampling window.
- **Major:** jury staffing conflicts with the session and people plans. Resolve
  centrally.

### Week 10 — Resilience

**Verdict:** intellectually ambitious, mechanically unsafe.

- **Critical:** seasonal river rise, inundation, flood envelopes, defended
  ground and disabled bridges are not documented vanilla mechanics. Replace
  the scenario with forest fire, tornado or hail/accident response, or specify
  the tested build that supports flooding.
- **Major:** “water freezing” is not established by the official climate
  documentation. Cold and heat change energy demand; snow affects road
  condition and response. Use those supported loads.
- **Major:** a power shortfall stopping pumps and then fire response is a
  possible controlled cascade, not a universal one. Specify the starting
  capacities and reproduce it.
- **Major:** raising land value does not automatically change zoning density;
  the player still controls the zone. The safe-development paradox must be a
  planning analogy unless the densification step is explicitly a player
  decision.
- **Major:** Pellow/Ondrey naming and residential Ombersley contradict the
  earlier site/use canon.
- **Minor:** the mechanic table lists five overlays but says four; list the
  actual UI actions separately.

### Week 11 — What the Model Can't Show You

**Verdict:** strongest conceptual plan; its evidence claims violate its own
lesson.

- **Critical:** the land-value index, rent index, wealth-category counts,
  corridor livability score and district homelessness history are presented as
  outputs available “today”. The documented District Panel provides
  population, average wealth, education and happiness factors, not that whole
  historical table.
- **Major:** recast the table as a worked hypothetical or define a manual trace
  from weekly saves. Do not claim the game recorded 34 of 244 displaced
  low-wealth households without testing the current build.
- **Major:** service placement is again treated as directly causing land value.
  Retain the indirect needs/rent/demand chain.
- **Major:** “no landowner” needs precision. The simulation abstracts rent and
  investment but does not expose real tenure, title, acquisition or procedural
  rights. That narrower claim is enough and harder to challenge.
- **Minor:** twenty-one further readings do not fit the stated one-hour teaching
  job. Keep the six sources actually used; move the bibliography elsewhere if
  a lecture page is later written.

### Week 12 — Capstone Review

**Verdict:** sharp argument structure, blocked by event logistics and inherited
fake metrics.

- **Critical:** one room cannot hold sixteen 20-minute defences in a three-hour
  block. The session plan resolves this with two parallel rooms from 13:00; the
  lecture and policies say 14:00. Make an institutional decision before
  publishing any clock.
- **Major:** the Week 12 metric table conflicts with the canonical studio
  readings, and “not one metric improved without another worsening” contradicts
  Week 11's deliberate case where all displayed metrics improve while the real
  trade is hidden.
- **Major:** non-car mode share, annual district balance, corridor land-value
  index and a utility trunk “knee” are not established direct readouts. Replace
  them with declared component measures and derived calculations.
- **Major:** five “info views” combines three hazard overlays into one row.
  List each UI action students actually need to make.
- **Minor, corrected in the plan:** the final open question pointed to a
  deleted `final-project.md`; it now names the current Assessment 3 file as
  authoritative and isolates the real scheduling conflict.

## Changes made as a result of the review

Only the lecture-plan document was revised:

- marked the plans not approved for production;
- added the direct/derived/hypothetical evidence rule;
- corrected the assessment structure to 25/25/50;
- removed the deleted Week 6 Mobility Plan from the Week 5–6 slide plans and
  assessment hooks;
- corrected Week 4 and Week 9 deadline language to Monday at 12:00;
- corrected Week 7's status from “real deck” to “planned, not built”; and
- corrected Assessment 2/3 names and the capstone weight throughout.

No lecture page, studio page, assessment brief, policy, people entry or deck was
created or edited. The remaining findings are deliberately not papered over:
they require either a reproducible course save or a redesigned mechanic premise.

## Release gate

Before any week becomes student-facing:

1. Pin the game version and provide the canonical save/map.
2. Resolve the geography/use register and the Week 5 mode.
3. Replace Weeks 7 and 10's unsupported mechanic premises.
4. Label and reproduce every numeric table.
5. Resolve Week 9 staffing and Week 12 room/timing centrally.
6. Run a second adversarial review only on the substantially rewritten Weeks 7
   and 10; the other weeks need evidence verification, not another general
   taste pass.
