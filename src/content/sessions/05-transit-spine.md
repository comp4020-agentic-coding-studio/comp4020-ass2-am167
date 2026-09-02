---
title: "Designing the Transit Spine"
description: >-
  Route the district's transit spine — where the line runs, how often, and how
  many residents end up genuinely within reach of it.
week: 5
date: 2027-03-22
teachers:
  - idris-fenn
related:
  - lectures/week-05
spec:
  - "You arrive with the save `<student ID>-w04` loaded and advanced to in-game 08:00, not a screenshot of it."
  - "You bring the canonical straight bus alignment and one loop comparator, each with its manually timed round trip and stop count; the straight alignment is the line every student builds."
  - "The headway you set is stated together with the arithmetic that produced it: round-trip time divided by headway, rounded up to whole vehicles."
  - "You record allocated operating cost and fare revenue as separate worksheet figures alongside the live line-panel fields, without describing worksheet values as native readouts."
  - "You calculate which issued sample addresses fall within 400 m walking distance along the street network, and name those that do not."
---

## What the spine has to do

The bus runs from **Denton Hill** to **Barrow Fields**, named for its ends so a
rider can hold the route in mind. Its six stops are Denton Hill, Marle Row,
Pelling Cross, Halstead, Wickstead and Barrow Fields. The terminus sits at the
foot of Denton Hill, not on it.

The reference alignment puts 62% of sampled residents within 400 m walking
distance along the street network. That leaves 38% outside it. The line must
improve access for the district it actually reaches and make the cost of that
access visible.

## Before you draw

Open `<student ID>-w04` at 08:00 and bring Week 4’s core/edge land-value pair,
48 and 19. Bring two alignments on tracing: the canonical straight bus and one
loop comparator, each with a manually timed round trip and stop count. Know the
formula: **vehicles required = round-trip time ÷ headway, rounded up**.

The first ten minutes are reading-in. Record the Week 4 close before drawing a
line; otherwise later growth can be mistaken for an effect of the service.

## The two alignments

Cost the straight Pelling Street run and the Denton Hill loop in four columns:
round-trip minutes, fleet at a common headway, residents within 400 m walking
distance, and projected riders per vehicle-hour. The straight line takes 24
minutes and six stops. The loop takes 38 minutes and eleven. Both are
defensible, but every student builds the straight line so the Week 6 comparison
starts from one service.

The hill-foot terminus leaves upper Denton Hill outside the catchment. Extending
the line improves coverage and increases its round trip, which can add a whole
vehicle to hold the headway.

Use **Marle Row** to test stop spacing. It boards about forty riders in the
reference peak hour while roughly nine hundred ride past it. Removing it saves
about 25 seconds for the through riders and lengthens some walks by as much as
200 m. Keep or drop it, but record the arithmetic. A stop-by-stop decision that
removes every stop has asked the wrong question of the line.

## Setting the headway

The manually timed round trip is 24 minutes. A **6-minute calculated headway**
requires four vehicles: 24 ÷ 6 = 4. The issued worksheet allocates
**₡4,800/month** to the service and **₡1,100/month** in fares, leaving a net
subsidy of ₡3,700. These are worksheet allocations, not fields in the line
detail. The line panel supplies vehicles, passengers and usage.

Inside 600 m straight-line distance of Pelling Cross and Halstead, step mixed
housing and medium density down towards the edge. This zoning band is not the
400 m network-distance test. It is the main lever on ridership and therefore on
the revenue side of a cost that otherwise stays fixed.

## The readings

The settled reference row reaches 9,400 residents, +₡400/month, a 5.4-minute
timed trip, transit share 11%, happiness 73% and land value 34. At Pelling
Cross, count the queue at 08:00 and 08:10 from the same camera. A growing queue
can indicate demand or insufficient fleet; it is not automatically success.

**Fiscal performance moved the wrong way:** the balance fell from +₡2,100 to
+₡400. Growth partly offsets the subsidy but does not make the service
self-funding. **A plan claiming all three metrics improved has not been read
carefully.**

## What you leave with

Preserve `<student ID>-w05` and its off-machine copy for 29 March. Leave with
the three required screenshots, the photographed rejected alignment, and the
line’s daily passengers, four-vehicle fleet and 6-minute headway written into
your process log. Those are Week 6’s before-figures.
