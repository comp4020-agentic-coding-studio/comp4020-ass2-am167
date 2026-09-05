---
title: "The Grid vs. the Organic Street"
description: >-
  Hippodamus's grid, the medieval street and the Radburn superblock — three
  answers to the same question about what shape a block should be, and what
  each one does to a walk.
week: 2
date: 2027-03-01
teachers:
  - idris-fenn
slides: /decks/week-02/
related:
  - sessions/02-block-pattern
---

# The argument

The dimension of a block is not a drawing preference but a network decision:
it sets how many routes exist between any two points and how many kilometres
of road the district pays upkeep on every month, and those two numbers move in
opposite directions.

## What you will learn

- Distinguish the orthogonal grid, the medieval or organic street pattern and
  the Radburn superblock by what each does to route choice, not by how each
  looks in plan.
- Calculate road metres per dwelling for a proposed block layout and locate
  the resulting figure in the economy panel's road upkeep line.
- Demonstrate route redundancy by closing one link in a proposed network and
  counting the remaining paper paths.
- State the week's block-dimension decision as an explicit trade between
  mobility performance and fiscal performance.

## Theory into practice

- **Hippodamus of Miletus, 5th century BCE, reported in Aristotle's
  *Politics*, Book II** — the orthogonal plan as an instrument of equal
  division and legible administration, applied at Miletus and Piraeus.
- **Jane Jacobs, *The Death and Life of Great American Cities* (1961)** —
  the second of her four conditions for diversity: "Most blocks must be short;
  that is, streets and opportunities to turn corners must be frequent."
- **Clarence Stein and Henry Wright, the Radburn plan (1929)** — the
  superblock, the cul-de-sac, the continuous interior park and the pedestrian
  underpass, proposed as a settlement pattern for the motor age.
- **Christopher Alexander, "A City is Not a Tree" (1965)** — the difference
  between a tree, in which no two branches overlap, and a semilattice, in which
  sets overlap freely; planned settlements tend to be trees and living ones are
  semilattices.
- **Bill Hillier and Julienne Hanson, *The Social Logic of Space* (1984)** —
  space syntax: the configuration of a street network, rather than land use,
  predicts a great deal of where movement occurs.

The deck walks through where each of these lands, slide by slide, against the
studio's own network.

### Simulation mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Hippodamian equal division | The road tool's grid mode and its snapping increments | The block dimension chosen once at the start propagates across the whole quarter, because the tool makes repeating it cheaper than varying it |
| Jacobs on short blocks | Zoning cell depth against road frontage | Short blocks put almost every cell on a frontage; long blocks leave a dead core the zoning tool cannot reach |
| Radburn's superblock and cul-de-sac | Road hierarchy — small road, medium road, arterial — and the traffic AI's pathfinding cost | Every trip from a cul-de-sac is forced onto one collector, and the collector's mouth is where the queue forms |
| Alexander's tree versus semilattice | Following a single citizen's chosen path, and the lane-selection behaviour approaching a junction | In a tree there is one path and the vehicle takes it; in a semilattice the same origin and destination produce different paths at different hours |
| Space syntax integration | Paper path counts on the unzoned street graph | Count alternative paths between fixed endpoints; this is a network measure, not observed traffic |
| Network cost | Road upkeep in the economy panel, charged by length | Two layouts housing the same population differ in the monthly upkeep line, and the difference is permanent |

> **Evidence standard.** Named interface fields are **direct readouts**. Calculations shown from those fields are **derived measures**. Every fixed scenario value on this page is a **worked hypothetical**, not a captured run. See [resources and evidence](../../resources/) for access arrangements and worksheets.

## The decision this week

**Mobility performance against fiscal performance**, forced by the block
dimension chosen for the first residential quarter on Halstead Reach: a fine
grid's route redundancy against a superblock's cheaper road upkeep. The deck
works the spacing and cost figures for both. Students choose a dimension this
week, and Week 6's peak-load stress test is run against whatever they chose.

## Into the studio

Bring the untouched Week 1 archive on Monday. Build the Halstead Reach block alternatives without zoning. Compare paper path counts before and after closing one link; an unzoned network cannot supply a meaningful traffic-volume comparison. Calculate road metres per dwelling, recording road length and dwelling capacity separately. Commit the chosen block dimension for Week 3 and upload the save and sheet by 21:00. Follow the [studio brief](../../sessions/02-block-pattern/).

## Assessment connection

Feeds **Assessment 1, the Neighbourhood Unit Plan** (Week 4, 25%), where the
mobility criterion at 30 marks is read directly off the block structure laid
down this week, and the fiscal criterion at 30 marks is read off the upkeep it
generates. Also builds toward Week 6's unweighted peak-load stress test, which
is run against this layout — a network with no redundancy fails that test for a
decision made in Week 2.

