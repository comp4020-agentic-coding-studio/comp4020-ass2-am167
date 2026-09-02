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

# The argument

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

### Simulation mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Wardrop's user equilibrium | The traffic AI's pathfinding: every agent takes the least-cost route available and re-chooses when costs change | The Ashgrove back streets emptying within about three simulated days of the Kerrow widening opening |
| Downs's spatial convergence | The traffic volume layer of the Traffic info view, read on the parallel routes rather than the widened one | Volume falling on the back streets and rising by more than that on Kerrow |
| Downs's modal convergence | The Transportation Overview passenger count on the Week 5 tram line | Ridership dropping on the line the widening now competes with, and the line's revenue dropping with it |
| Downs's temporal convergence | Citizen daily schedules under the day/night cycle | The shoulder of the peak thinning as the corridor gets quick enough to leave at 08:00 again |
| Braess's link addition | The road tool, and the new connector at the Wickstead junction | Average district-wide travel time after adding a link that was locally an improvement |
| Buchanan's environmental capacity | The noise pollution overlay and the Land Value info view along the Pelling Street frontage | Land value falling on the widened frontage, and ground-floor commercial failing to hold its level |
| Marchetti's time budget, from Week 4 | Housing demand and the residential demand bars at the outer edge of the district | Households taking up sites further out at Denton Hill once the commute cost falls |

> **Evidence standard.** Named interface fields are **direct readouts**. Calculations shown from those fields are **derived measures**. Every fixed scenario value on this page is a **worked hypothetical** until the course reference save and evidence pack are issued.

## The decision this week

**Mobility performance against livability.** The decision that forces it is the
third lane on the Kerrow corridor, which most of the studio added in last
week's session. It bought a 50% increase in effective capacity and a
volume–capacity ratio of 0.65 on the first morning. It cost the Pelling Street
frontage 6.5 metres of carriageway, five seconds of pedestrian crossing time,
1.8 dB of traffic noise and — as the model will show over the following
simulated year — the ground-floor tenancies that were holding the high street's
land value up. The uncomfortable part is that the mobility gain does not
survive the year and the livability loss does.

## Into the studio

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

## Assessment connection

No assessment is submitted this week. The stress-test evidence builds toward
**Assessment 2 — Public Realm and Infrastructure Plan** (Week 9, 25%), which
takes the frontage question as a starting point, and toward **Assessment 3 —
Comprehensive City Plan** (Week 12, 50%), where the corridor decisions made
this week are load-bearing.

