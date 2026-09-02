---
title: "Moving People: Transit-Oriented Design"
description: >-
  Headways, network legibility and the transfer penalty — why a line nobody
  can read at a glance is a line nobody rides.
week: 5
date: 2027-03-22
teachers:
  - idris-fenn
slides: /decks/week-05/
---

# The argument

A transit line is not a shape on a map, it is a bundle of waiting times a
resident is being asked to accept, and the two things that decide whether they
accept it — frequency and legibility — are the two things a drawn line does
not show.

## What you will learn

- Calculate the vehicle fleet a line requires at a given headway from its
  round-trip time, and state that fleet's monthly operating cost.
- Weight a journey's out-of-vehicle time against its in-vehicle time and show
  why a faster two-seat trip can be the worse trip.
- Route the same corridor twice, once for ridership and once for coverage, and
  defend the choice as a values choice rather than a technical one.
- Identify, in the model, the density and mix a station area needs before the
  station has anyone to serve.

## Theory into practice

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

### Simulation mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Calthorpe's 600 m station area | Zoning within the walk of the stop: medium density and mixed housing, stepping down to low density at the edge | Whether buildings level up nearest the stop or nearest the arterial — the second means the stop is not the thing organising the land |
| Walker's frequency | Vehicles assigned to a line in the Transportation Overview; headway falls as the fleet rises | The waiting-passenger count at each stop, and the line's monthly operating cost moving with the fleet |
| Vuchic's transfer penalty | Citizen pathfinding, which prices walking and waiting into the cost of a route alongside travel time | How many cims take the two-seat ride, and how many take the car instead of either |
| Lynch's imageability | Line geometry and stop spacing as drawn with the transit line tool | Whether the line reads as one path or as a sequence of detours — and the ridership difference between them |
| Cervero and Kockelman's 3Ds | Residential density, zone mix and the demand bars within the station area | Ridership per stop tracking the density gradient, not the geometry of the line |
| Ridership against coverage | Routing the same corridor down Pelling Street or around Denton Hill | Passengers carried per vehicle-hour, and the line's revenue against its upkeep |

> **Evidence standard.** Named interface fields are **direct readouts**. Calculations shown from those fields are **derived measures**. Every fixed scenario value on this page is a **worked hypothetical** until the course reference save and evidence pack are issued.

## The decision this week

**Mobility performance against fiscal performance.** The decision that forces it
is the headway on the Halstead–Barrow Fields line. Every vehicle added to that
line buys every rider on it a reduction in average wait, and commits the
district to that vehicle's upkeep for as long as the line runs. A ten-minute
headway is a service people plan around. A ten-minute headway on a 24-minute
round trip is three vehicles, and three vehicles is an operating cost the
line's ticket revenue does not cover at Halstead Reach's current density.
Students must set a headway and say which metric they paid.

## Into the studio

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

## Assessment connection

No assessment is due or opened this week. The headway and fleet exercise and
the ridership–coverage comparison provide mobility evidence for **Assessment 2
— Public Realm and Infrastructure Plan** in Week 9 and **Assessment 3 —
Comprehensive City Plan** in Week 12. The corridor designed this week is the
spine the capstone hangs the rest of the city off.

