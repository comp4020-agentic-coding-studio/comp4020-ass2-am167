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
  becomes visible only when it breaks down.
- **Thomas P. Hughes, *Networks of Power* (1983).** The "reverse salient" — the
  one lagging component that holds an entire technological system below the
  capacity of its other parts.
- **Charles Perrow, *Normal Accidents* (1984).** Tightly coupled systems with
  interactive complexity convert single faults into cascades that operators
  cannot interrupt in time.
- **Joel A. Tarr, *The Search for the Ultimate Sink* (1996).** Urban waste is
  moved between air, land and water rather than removed; every disposal
  decision chooses a receiving medium.
- **Stephen Graham and Simon Marvin, *Splintering Urbanism* (2001).** Networked
  infrastructures distribute unevenly, and the unevenness follows the network's
  own topology rather than the map's geography.

The deck walks through where each of these lands, slide by slide, against the
cascade the corridor actually runs.

### Simulation mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Star: infrastructure is invisible until breakdown | the water, sewage and electricity info-views, and their production-versus-consumption bars | The bars move for roughly three weeks of simulated time before a single citizen notification fires |
| Hughes: the reverse salient caps the whole system | the single trunk main out of the Wensley Bank pumping station | Adding pipe inside Ombersley Flats raises nothing; the district's capacity stays the pump's number |
| Perrow: tight coupling turns a fault into a cascade | the water → sewage → water-pollution → health → budget chain | One over-capacity treatment plant ends up moving the healthcare budget slider |
| Tarr: waste is moved, not removed | the sewage outfall and the ground- and water-pollution overlays | The issued failure branch illustrates an exposed intake; the personal Week 3 intake remains upstream |
| Graham and Marvin: networks splinter along their own topology | pipe-graph distance from the pumping station | Compare affected districts without inferring outage order from pipe distance alone |
| — (mechanic with no single theory anchor) | the per-service budget sliders | Dropping the water slider to 80% reduces delivered output, not only the monthly cost |

> **Evidence standard.** Named interface fields are **direct readouts**. Calculations shown from those fields are **derived measures**. Every fixed scenario value on this page is a **worked hypothetical**, not a captured run. See [resources and evidence](../../resources/) for access arrangements and worksheets.

## The decision this week

**Fiscal performance against livability**, forced by how much headroom to
install at the Wensley Bank pumping station and the Farrant Row treatment
plant before the demand exists. The deck works both the underbuilt and
overbuilt cases in full. Mobility performance is the metric this week does not
touch: infrastructure failures are the one class of failure in this studio
that leaves the road network entirely alone.

## Into the studio

Monday uses the issued utility checkpoints alongside the unchanged Week 6 personal save. Trace the supplied capacity readings and plume evidence; do not manufacture the cascade on a student’s save or move the Week 3 upstream intake. A systemwide capacity shortfall does not establish a far-end-first outage. Cost and order both utility increments on the reverse-salient card, then upload the weekly save and evidence by 21:00. The Thursday clinic is optional follow-up. Follow the [studio brief](../../sessions/07-utilities-clinic/).

## Assessment connection

Feeds **Assessment 2 — Public Realm & Infrastructure Plan** (due Week 9, 25%),
principally its **fiscal 30** and **livability 45** criteria: the headroom
decision is a fiscal argument, and the cascade is the reason it is also a
livability argument. Also builds directly toward **Week 10 — Resilience**,
which takes the same networks under hazard load, and toward the **Week 12
capstone**, where the corridor-scale utility argument is expected to be made
once rather than per district.

