# Process overview

## What I built

*SLOP2418 — Urban Design Studio: Foundations of the Good City* is a
second-year course that uses *Cities: Skylines II* as a serious planning tool.
Students keep one district in a continuous save for twelve weeks, make zoning,
transport and budget decisions in it, and defend them at three juries. The idea
behind it is that no decision comes free: a plan can improve fiscal performance,
mobility or livability, and rarely all three, so students are marked on naming
and justifying the trade-off rather than claiming their plan solves everything.

## How I got here

I liked the idea of a semester-long project in a game I already enjoyed. Most
of the work after that was directing and reviewing what the agent produced,
then deciding whether to keep it. My questions were simple: would I take this
course, do I find the content interesting, and could someone else?

The first harness decision was what "coherent" had to mean here. I asked the
agent how the spec's "twenty-odd pages that have to agree with each other"
could be added to the harness. The obvious answer was prose checks: word
counts, banned boilerplate. I rejected those because they pass while the
curriculum is still incoherent. The answer I kept was a course contract:
`spec/course-coherence.test.ts` checks lecture/studio references,
assessment dates and a distinct subject anchor for every week, and `CLAUDE.md`
says to update the anchors before changing the course idea
([`fe9b9b93`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/fe9b9b93)).
Interest and readability were deliberately left to a human read: the same
commit requires a prospective-student review of the home page, non-adjacent
weeks, an assessment, the deck and policies, by reviewers with none of the
drafting agent's context
([`85e50545`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/85e50545)).

The assessment check shows my rule for what did get automated: anything with a
clear answer. `spec/assessment.test.ts` requires every weighted brief to be
marked on the three metrics. Its first run failed because the starter criteria
were "response to the brief" and "quality of execution", and the briefs were
rewritten to match
([`be5bc71a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/be5bc71a)).
Weights could total 100% while the assessment contradicted the course; that is
not something another manual read should have to catch.

One harness change came from a failure. Parallel subagents had been fast, so I
added a rule encouraging them
([`b9162255`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/b9162255)).
The merged plans then carried three names for one district, jury weeks sized
for eight students against a cohort of sixteen, and a save state Week 7
assumed but Week 6 never set up
([`7c130251`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/7c130251),
[`b4416637`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/b4416637)).
Every check was green; the facts that broke were the ones nobody owned. I
removed the rule and kept subagents only for review, where isolation is the
point
([`4d06839c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/4d06839c)).

Review still caught what checks could not. The deck review found a fabricated
place name, tram/bus drift and a worked example incompatible with the game's
pipe mechanics after the build passed
([`cf34a0b9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/cf34a0b9)).
Findings still needed judging: I rejected objections to deliberate differences
from COMP4020's policies but fixed four internal defects, including
contradictory lost-save wording
([`49614ad5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/49614ad5)).

The home page was where my own reading mattered most. I told the agent the
intro page was "too simple and not interesting enough" and that, going back to
the spec, it should make me want to enrol. The answer was a rewrite built on a
Week 6 traffic example. A reviewer verified its numbers, but reading it I found it
confused course Week 6 with six simulation weeks and hid the mechanism behind
metaphors. The rewrite says "six in-game weeks" and explains why drivers
return to a widened road
([`0fe8c068`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/0fe8c068)).
The checks established what they could; whether I wanted to keep reading
stayed my call.
