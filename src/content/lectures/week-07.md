---
title: "Infrastructure You Don't See"
description: >-
  Water, sewage and power as capacity-constrained networks — where headroom
  runs out, and how one quiet failure cascades into the next.
week: 7
date: 2027-04-19
teachers:
  - nadia-ilkhom
slides: /decks/week-07/
---

# The argument

Every utility in the studio is a network with a flat performance curve and a
cliff at the end of it, so the only real infrastructure decision a designer
makes is how much headroom to pay for while nothing yet looks wrong.

## What you will learn

- Read a utility's production-versus-consumption bar and state the district's
  remaining headroom as a percentage of installed capacity.
- Trace a single capacity failure through at least four downstream systems,
  naming the simulation mechanic that carries each step.
- Size a pumping station and a treatment plant against a rezoning that has not
  been built yet, and state the monthly cost of the headroom.
- Defend a headroom decision in terms of fiscal performance and livability
  rather than in terms of safety.

## Theory into practice

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

### Simulation mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Star: infrastructure is invisible until breakdown | the water, sewage and electricity info-views, and their production-versus-consumption bars | The bars move for roughly three weeks of simulated time before a single citizen notification fires |
| Hughes: the reverse salient caps the whole system | the single trunk main out of the Wensley Bank pumping station | Adding pipe inside Ombersley Flats raises nothing; the district's capacity stays the pump's number |
| Perrow: tight coupling turns a fault into a cascade | the water → sewage → water-pollution → health → budget chain | One over-capacity treatment plant ends up moving the healthcare budget slider |
| Tarr: waste is moved, not removed | the sewage outfall and the ground- and water-pollution overlays | The plume travels down the Kerrow and arrives at the intake the studio built downstream of it |
| Graham and Marvin: networks splinter along their own topology | pipe-graph distance from the pumping station | Farrant Row loses water first, and Farrant Row added no demand at all |
| — (mechanic with no single theory anchor) | the per-service budget sliders | Dropping the water slider to 80% reduces delivered output, not only the monthly cost |

> **Evidence standard.** Named interface fields are **direct readouts**. Calculations shown from those fields are **derived measures**. Every fixed scenario value on this page is a **worked hypothetical** until the course reference save and evidence pack are issued.

## The decision this week

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

## Into the studio

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

## Assessment connection

Feeds **Assessment 2 — Public Realm & Infrastructure Plan** (due Week 9, 25%),
principally its **fiscal 30** and **livability 45** criteria: the headroom
decision is a fiscal argument, and the cascade is the reason it is also a
livability argument. Also builds directly toward **Week 10 — Resilience**,
which takes the same networks under hazard load, and toward the **Week 12
capstone**, where the corridor-scale utility argument is expected to be made
once rather than per district.

