---
title: "Density and the 15-Minute City"
description: >-
  Transit-oriented density and the amenity radius — how far a resident will
  actually walk, and what therefore has to sit inside the circle.
week: 4
date: 2027-03-15
teachers:
  - marisol-quaye
slides: /decks/week-04/
related:
  - assessments/01-neighbourhood-unit-plan
---

# The argument

A 15-minute city is not a distance, it is a claim about how a district spends
its residents' time and its own money, and the amenities that make the walk
worth taking are precisely the ones that do not pay for themselves.

## What you will learn

- Draw a neighbourhood unit at Perry's dimensions and state, in metres and in
  minutes, which amenities fall inside the walking radius and which do not.
- Distinguish density as a *precondition* for local amenity from density as a
  design goal, and cite the mechanism that connects the two.
- Calculate the monthly upkeep of the services placed inside a cell and
  compare it against the rate take that cell generates.
- Name the fiscal and livability consequences of a single amenity-siting
  decision, and defend the one chosen.

## Theory into practice

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

### Simulation mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Perry's cell with the school at its centre | The district tool, and the coverage radius drawn by a service building when selected | Whether the elementary school's radius actually covers the cell it was sited for, or stops 200 m short of the eastern edge |
| Perry's arterials on the boundary | Road hierarchy, and the traffic volume layer of the Traffic info view | Whether through movement on the Kerrow corridor stays on the cell boundary or has found a line through the middle of it |
| Moreno's proximity, measured in minutes | Citizen daily schedules under the day/night cycle; pedestrian pathing between home, work, school and leisure | The share of trips a cim completes on foot before 09:00, and where the walk gives out |
| Jacobs's sufficient concentration | Medium-density and mixed housing zones; the building level-up thresholds | Whether the ground-floor tenancies on Pelling Street hold their level or cycle through abandonment |
| George's land-value increment | The Land Value info view, and the residential tax rate slider | The value gradient that appears around the new park within about a year, and what the rate take does after it |
| Marchetti's time budget | The pathfinding cost a cim assigns to a trip; the average commute figures in the city information panel | Average commute time rising as the cell's employment is pushed outside it |

> **Evidence standard.** Named interface fields are **direct readouts**. Calculations shown from those fields are **derived measures**. Every fixed scenario value on this page is a **worked hypothetical** until the course reference save and evidence pack are issued.

## The decision this week

**Livability against fiscal performance.** The decision that forces it is where
the clinic goes. Sited inside the Halstead Reach cell it sits an eleven-minute
walk from the furthest dwelling and the cell carries its full upkeep. Moved to
a shared catchment serving three cells, the cell's share of that upkeep drops
by roughly two-thirds and the monthly deficit closes — and the walk becomes a
trip. There is no siting that gets both. Students must choose one and say which
metric they paid with.

## Into the studio

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

## Assessment connection

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

