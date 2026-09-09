---
title: "Traffic Engineering and Its Discontents"
description: >-
  Induced demand, the one-way-street fix, and the uncomfortable arithmetic of
  why the lane you add fills up again.
week: 6
date: 2027-03-29
teachers:
  - idris-fenn
slides: /decks/week-06/
---

## The argument

Road capacity does not reduce congestion, it relocates and enlarges the demand
that produced it, and the corridor that has been widened has paid its frontage
for a level of service it will not keep.

## What you will learn

- Compute the effective capacity of a signalised arterial from its saturation
  flow and green ratio, and the volume–capacity ratio before and after a
  widening.
- Apply a demand elasticity to a capacity increase and state the long-run
  volume, showing the working.
- Decompose an observed traffic increase into route, mode, departure-time and
  land-use components, and match each to the view in the model that shows it.
- Distinguish a street's vehicular capacity from its environmental capacity,
  and name what the second cost when the first was raised.

## Theory into practice

- **Anthony Downs, "The Law of Peak-Hour Expressway Congestion," *Traffic
  Quarterly* 16(3), 1962; triple convergence developed in *Stuck in Traffic*
  (1992).** Peak congestion rises to meet the capacity provided, because
  drivers converge on an improved facility from other routes, other departure
  times and other modes.
- **Gilles Duranton and Matthew A. Turner, "The Fundamental Law of Road
  Congestion: Evidence from US Cities," *American Economic Review* 101(6),
  2011.** The elasticity of vehicle-kilometres travelled with respect to
  lane-kilometres is close to one.
- **J. Michael Thomson, *Great Cities and Their Traffic* (1977), and Martin
  J. H. Mogridge, *Travel in Towns: Jam Yesterday, Jam Today and Jam
  Tomorrow?* (1990).** The Downs–Thomson and Lewis–Mogridge position: on a
  corridor with a competing public transport service, the equilibrium speed of
  car travel is set by the door-to-door speed of that service.
- **Dietrich Braess, "Über ein Paradoxon aus der Verkehrsplanung,"
  *Unternehmensforschung* 12, 1968, with J. G. Wardrop, "Some theoretical
  aspects of road traffic research," *Proceedings of the Institution of Civil
  Engineers* (1952) as its equilibrium assumption.** Adding a link to a
  network can make every user's journey longer.
- **Colin Buchanan, *Traffic in Towns* (HMSO, 1963).** A street has an
  environmental capacity — a traffic volume above which its other functions
  fail — and it is reached well before its vehicular capacity.

The deck walks through where each of these lands, slide by slide, against the
Kerrow widening.

### Simulation mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Wardrop's user equilibrium | The traffic AI's pathfinding: every agent takes the least-cost route available and re-chooses when costs change | The Ashgrove back streets emptying within about three simulated days of the Kerrow widening opening |
| Downs's spatial convergence | The traffic volume layer of the Traffic info view, read on the parallel routes rather than the widened one | Volume falling on the back streets and rising by more than that on Kerrow |
| Downs's modal convergence | The Transportation Overview passenger count on the Week 5 bus line | Ridership dropping on the line the widening now competes with, and the line's revenue dropping with it |
| Downs's temporal convergence | Citizen daily schedules under the day/night cycle | The shoulder of the peak thinning as the corridor gets quick enough to leave at 08:00 again |
| Braess's link addition | The road tool, and the new connector at the Wickstead junction | Average district-wide travel time after adding a link that was locally an improvement |
| Buchanan's environmental capacity | The noise pollution overlay and the Land Value info view along the Pelling Street frontage | Land value falling on the widened frontage, and ground-floor commercial failing to hold its level |
| Marchetti's time budget, from Week 4 | Housing demand and the residential demand bars at the outer edge of the district | Households taking up sites further out at Denton Hill once the commute cost falls |

> **Evidence standard.** Named interface fields are **direct readouts**. Calculations shown from those fields are **derived measures**. Every fixed scenario value on this page is a **worked hypothetical**, not a captured run. See [resources and evidence](../../resources/) for access arrangements and worksheets.

## The decision this week

**Mobility performance against livability**, tested by widening Wickstead from two to four lanes this week: a real capacity gain on
day one, against a frontage cost that grows over the following year. The deck
works the full before-and-after figures. The mobility gain does not survive
the year; the livability loss does.

## Into the studio

Bring the unchanged Week 5 transit save on Monday. Widen Wickstead from two to four lanes in this session and compare the issued before, three-week and six-week checkpoints; keep personal and reference branches distinct. The deck’s three-lanes-each-way example is a separate hypothetical, not the studio intervention. Complete the position statement, save and evidence sheet and upload by 21:00. No weighted assessment is due. Follow the [studio brief](../../sessions/06-peak-load-stress-test/).

## Assessment connection

No assessment is submitted this week. The stress-test evidence builds toward
**Assessment 2 — Public Realm and Infrastructure Plan** (Week 9, 25%), which
takes the frontage question as a starting point, and toward **Assessment 3 —
Comprehensive City Plan** (Week 12, 50%), where the corridor decisions made
this week are load-bearing.

