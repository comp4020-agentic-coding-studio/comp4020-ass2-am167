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
- Calculate lane-kilometres per dwelling for a proposed block layout and locate
  the resulting figure in the economy panel's road upkeep line.
- Demonstrate route redundancy by closing one link in a proposed network and
  observing where the traffic goes.
- State the week's block-dimension decision as an explicit trade between
  mobility performance and fiscal performance.

## Theory into practice

- **Hippodamus of Miletus, 5th century BCE, reported in Aristotle's
  *Politics*, Book II** — the orthogonal plan as an instrument of equal
  division and legible administration, applied at Miletus and Piraeus. Doing
  here: it establishes that the grid was an argument about governance long
  before it was an argument about traffic, which is why it keeps being
  redrawn.
- **Jane Jacobs, *The Death and Life of Great American Cities* (1961)** —
  the second of her four conditions for diversity: "Most blocks must be short;
  that is, streets and opportunities to turn corners must be frequent." Doing
  here: it is the strongest available case for the fine grid, and it is made on
  livability grounds rather than traffic grounds.
- **Clarence Stein and Henry Wright, the Radburn plan (1929)** — the
  superblock, the cul-de-sac, the continuous interior park and the pedestrian
  underpass, proposed as a settlement pattern for the motor age. Doing here: it
  is the fully worked counter-proposal to the grid, and its costs are the
  week's teaching material.
- **Christopher Alexander, "A City is Not a Tree" (1965)** — the difference
  between a tree, in which no two branches overlap, and a semilattice, in which
  sets overlap freely; planned settlements tend to be trees and living ones are
  semilattices. Doing here: it names precisely what a hierarchical road
  classification does to a network, and it is the diagram the whole lecture
  turns on.
- **Bill Hillier and Julienne Hanson, *The Social Logic of Space* (1984)** —
  space syntax: the configuration of a street network, rather than land use,
  predicts a great deal of where movement occurs. Doing here: it is the reason
  the studio measures a layout before it zones anything into it.

### Simulation mapping

| Theory move | Cities: Skylines II mechanic | What students should watch happen |
| --- | --- | --- |
| Hippodamian equal division | The road tool's grid mode and its snapping increments | The block dimension chosen once at the start propagates across the whole quarter, because the tool makes repeating it cheaper than varying it |
| Jacobs on short blocks | Zoning cell depth against road frontage | Short blocks put almost every cell on a frontage; long blocks leave a dead core the zoning tool cannot reach |
| Radburn's superblock and cul-de-sac | Road hierarchy — small road, medium road, arterial — and the traffic AI's pathfinding cost | Every trip from a cul-de-sac is forced onto one collector, and the collector's mouth is where the queue forms |
| Alexander's tree versus semilattice | Following a single citizen's chosen path, and the lane-selection behaviour approaching a junction | In a tree there is one path and the vehicle takes it; in a semilattice the same origin and destination produce different paths at different hours |
| Space syntax integration | The traffic info view's volume overlay on an unzoned network | Volume concentrates on the most connected links before land use has been assigned at all |
| Network cost | Road upkeep in the economy panel, charged by length | Two layouts housing the same population differ in the monthly upkeep line, and the difference is permanent |

> **Evidence standard.** Named interface fields are **direct readouts**. Calculations shown from those fields are **derived measures**. Every fixed scenario value on this page is a **worked hypothetical** until the course reference save and evidence pack are issued.

## The decision this week

**Mobility performance against fiscal performance**, forced by the block
dimension chosen for the first residential quarter on Halstead Reach. A fine
grid at roughly 80 m spacing gives four or more routes between most pairs of
points, so a single blocked link redistributes rather than fails — and it does
that by laying down close to double the road length per dwelling of a
superblock layout, every metre of which appears in the road upkeep line every
month for the rest of the semester. A superblock at roughly 240 m spacing halves
the upkeep and concentrates every trip onto three collector mouths. Students
choose a dimension this week, and Week 6's peak-load stress test is run against
whatever they chose.

## Into the studio

- Students arrive with the Week 1 save, a settlement area already chosen, and
  no roads beyond whatever connects the site to the Dunthorpe interchange.
- Session 2 is the first review: each student shows the unzoned layout and the
  traffic volume overlay at 08:00, in under two minutes, and names the one
  decision they are least sure about.
- The session assumes the traffic info view is open and understood, and that
  the economy panel's road upkeep line has been found — both are prerequisites
  rather than session content.
- Students leave having committed to a block dimension in metres. Week 3 zones
  into that layout and cannot begin until it exists.

## Assessment connection

Feeds **Assessment 1, the Neighbourhood Unit Plan** (Week 4, 25%), where the
mobility criterion at 30 marks is read directly off the block structure laid
down this week, and the fiscal criterion at 30 marks is read off the upkeep it
generates. Also builds toward Week 6's unweighted peak-load stress test, which
is run against this layout — a network with no redundancy fails that test for a
decision made in Week 2.

