---
title: "Peak-Load Stress Test"
description: >-
  Drive the road network to peak load and watch where it gives way, then argue
  the fix: a wider road, a better line, or fewer trips needing to be made.
week: 6
date: 2027-03-29
teachers:
  - idris-fenn
related:
  - lectures/week-06
spec:
  - "You arrive with the save `<student ID>-w05` loaded and the Transportation Overview open, not a screenshot of either."
  - "Before you change anything, you record the raw peak count, lane count, supplied saturation-flow assumption and observed green fraction used to calculate Wickstead demand divided by assumed capacity."
  - "The widening's route timing is on your sheet for three states — the first morning, the issued three-week checkpoint and the issued six-week checkpoint — each labelled with its source save and date."
  - "Your decomposition table treats the four proposed refill sources as hypotheses, recording an estimate or `not estimable`, the observation used and every conversion assumption."
  - "You leave a position statement of no more than 150 words on the wall and an off-machine copy of `<student ID>-w06`."
---

## The 08:00 hold

For twenty minutes, run the district at in-game 08:00 with the build tools
untouched. Describe where the first queue forms, whether it begins at Wickstead
or upstream, whether it clears between platoons, and what Hessel Row carries
while the corridor loads. Idris Fenn will interrupt anyone reaching for the
road tool.

The longest queue is not necessarily the failure point. Walk the Traffic info
view north to south and find the stop line that constrains throughput. A still
cannot show whether a junction is over capacity or receiving a queue from
somewhere else.

## Before you touch anything

Record the 08:00 and off-peak route times, volume at Wickstead, daily passengers
on the Denton Hill–Barrow Fields spine, and volume on Hessel Row. Pens down at
13:10. The reference route reads 11.2 minutes at peak and 5.6 off-peak.

Reconstruct the **118% reference capacity claim** from the raw hourly count,
lane count, supplied saturation-flow assumption and observed green-time
fraction. Multiply saturation flow by the green ratio and lanes, then divide
the measured demand by that assumed capacity. A percentage without its inputs
cannot carry the afternoon’s argument.

## Widening Wickstead

First save the two-lane state as `<student ID>-w06-pre`. Then widen the Kerrow
corridor approaches at Wickstead from two lanes to four. Everybody widens; the
continuing course save uses the same prescribed intervention.

Time the route on the first morning, then use the issued
`kerrow-ref-w06-3w` and `kerrow-ref-w06-6w` checkpoints for the same route and
junction count. The reference trajectory is **11.2 → 8.9 → 10.7 minutes**:
immediate relief, three in-game weeks holding at 8.9, then a partial refill.
Do not advance six weeks in one action and conclude that the widening did
nothing. It worked, and much of that gain was consumed. The checkpoints preserve
that sequence without pretending six weeks fit into forty minutes.

## Where the traffic came from

Audit four refill hypotheses rather than forcing a causal total:

- **spatial:** volume leaves Hessel Row as the wider route becomes cheaper;
- **temporal:** the issued 07:00–09:00 count shows trips returning to the peak;
- **modal:** the transit line’s passenger count changes against last week’s log;
- **land use:** new occupancy appears at the Denton Hill edge.

For each row, enter an estimate or `not estimable`, the observation and every
conversion assumption. The rows need not sum to an elasticity forecast. If you
propose a one-way pair on the corridor and Hessel Row, bring volume, capacity,
volume ÷ capacity and frontage land value before and after on both streets.

## The argument round

Four groups take one hypothesis each, put its figure and source view on the
board, and re-read any contested row live. Then choose one instrument: signal
retiming, reallocating a lane to transit, shorter trips through mixed use, or
peak pricing. The model cannot implement the last one; record that limitation
instead of simulating it.

Leave a position statement of no more than 150 words on the wall. Name the
instrument, the number that would show it worked, and the trade: a temporary
mobility gain against a permanent livability cost on the widened frontage.

## Across the break

Save the widened district as `<student ID>-w06`, copy it off-machine, and bring
it back **unrepaired** on 19 April. Keep `-w06-pre`, the three peak figures, the
decomposition and your named instrument. The break preparation is on paper:
copy the issued utility availability figures, mark the first failure-chronology
entry you would investigate, and bring the Week 3 Ombersley zoning memo. No
unattended run and no `w07-pre` file are required.
