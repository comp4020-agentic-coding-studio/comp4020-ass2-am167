# Process overview

*SLOP2418 — Urban Design Studio: Foundations of the Good City* is a
second-year course using *Cities: Skylines II* to explore planning trade-offs.
Over twelve weeks, students build, test and defend decisions about fiscal
performance, mobility and livability.

I wanted a good course to carry one argument through its teaching and
assessment, and give students a reason to choose it. Here, students should
have to defend the trade-offs they had practised, not meet unrelated marking
criteria at the end. Directing the site meant deciding which promises could
be checked automatically, which needed a reviewer instruction, and which
still depended on my own reading.

The assessment criteria were the clearest promise to encode.
`spec/assessment.test.ts` requires every weighted brief to include the three
named metrics. Its first run against the starter failed because the criteria
were still “response to the brief” and “quality of execution”, with no fiscal
performance criterion. I changed the briefs to agree with what the course
claimed to teach
([`be5bc71a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/be5bc71a)).
Checking that weights totalled 100% would have accepted that mismatch; checking
what students were marked on made the course-design decision enforceable.

That agreement also had to hold between weeks. `spec/calendar.test.ts`
checks the mid-semester break
([`0623b3b5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/0623b3b5)).
It was extended to check lecture/studio pairing on the same date
([`87dffee0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/87dffee0)).
The later coherence harness checks lecture/studio references, assessment
dates and weekly subject anchors
([`fe9b9b93`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/fe9b9b93)).
These checks protect continuity, but cannot tell whether twelve connected
weeks are worth attending.

For that, I encoded a review process in `CLAUDE.md`: fresh reviewers without
the drafting agent's context
([`85e50545`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/85e50545)),
then a specific prospective-student read across non-adjacent weeks and the
home, assessment, deck and policies pages
([`fe9b9b93`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/fe9b9b93)).
Review of the decks caught a fabricated place name, tram/bus drift and a
worked example incompatible with the game's pipe mechanics
([`cf34a0b9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/cf34a0b9)).
A passing build had not established that the examples agreed with the rest
of the course or the simulation.

I deliberately left acceptance of those findings to judgment. When a reviewer
compared the fictional studio's policies with COMP4020's, I rejected findings
against deliberate differences but accepted and fixed four internal defects,
including a contradictory
lost-save/extension clause
([`49614ad5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/49614ad5)).
The useful question was whether students could follow this course's rules.
Matching another course's policies was not the contract.

Reviewers also missed things. I called one homepage paragraph “pure slop”
after a fresh reviewer had verified its numbers. It confused course Week 6
with six elapsed simulation weeks, and its metaphors obscured the explanation.
The revision named “six in-game weeks” and explained returning drivers
([`0fe8c068`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/0fe8c068)).
That gave me a concrete reason to accept the wording: a first-time reader
could distinguish the two clocks. Accurate values alone had not made it clear.

A full-site audit against the assignment brief
([`444e5592`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/444e5592))
led to repairs and another adversarial review of those repairs
([`a799f9a4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/a799f9a4)).
Residual contradictions still surfaced. I could require checks and reviews,
but neither relieved me of reading what a student would actually encounter.
