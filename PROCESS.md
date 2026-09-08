# Process overview

## What I built

*SLOP2418 — Urban Design Studio: Foundations of the Good City* is a
second-year course using *Cities: Skylines II* to explore planning trade-offs.
Over twelve weeks, students build, test and defend decisions about fiscal
performance, mobility and livability.

## How I got here

My main question when reviewing it was whether I would actually take this
course. Did I find the content interesting, and could I imagine someone else
finding it interesting too? I wanted the city-building premise to sustain a
semester of decisions worth discussing. Having twelve weeks of content was
not enough if reading them felt like the agent filling out a template.

The checks were mostly there to keep the agent from going off the rails.
They caught specific kinds of drift: dates that stopped agreeing, disconnected
pages, or assessment criteria left over from the starter. They could not
catch every hallucination, and I did not treat a passing result as proof that
the content was good. Most revision decisions still came from reading it and
asking whether I wanted to keep reading.

One useful check was `spec/assessment.test.ts`, which requires every weighted
brief to include the course's three named metrics. Its first run failed
because the starter criteria were still “response to the brief” and “quality
of execution”, with no fiscal performance criterion. The briefs were changed
to match the course
([`be5bc71a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/be5bc71a)).
The weights could add up correctly while students were being marked on
something different from what the pages promised. This was a mismatch I
could make the agent catch automatically instead of repeatedly finding it myself.

The calendar checks similarly protect the mid-semester break
([`0623b3b5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/0623b3b5))
and lecture/studio pairing on the same date
([`87dffee0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/87dffee0)).
The coherence harness adds lecture/studio references, assessment dates and
weekly subject anchors
([`fe9b9b93`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/fe9b9b93)).
These gave the agent boundaries to work within, but agreement between pages
still left the question of whether anyone would enjoy the course.

I added a requirement for fresh reviewers without the drafting agent's context
to `CLAUDE.md`
([`85e50545`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/85e50545)),
then a protocol for prospective-student review across non-adjacent weeks and the home,
assessment, deck and policies pages
([`fe9b9b93`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/fe9b9b93)).
They provided another perspective on material I had already been looking at.
Deck review found a fabricated place name, tram/bus drift and a worked example
incompatible with the game's pipe mechanics despite a passing build
([`cf34a0b9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/cf34a0b9)).

But reviewers could miss the reason a paragraph was bad. I called one homepage
example “pure slop” after a fresh reviewer had verified its numbers. It confused
course Week 6 with six elapsed simulation weeks, while metaphors made the
mechanism harder to follow. The revision specified “six in-game weeks” and
explained returning drivers
([`0fe8c068`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/0fe8c068)).
That was closer to what I wanted: an example someone could understand and
become interested in, rather than accurate figures wrapped in decorative prose.
The review had checked the values; I still had to judge the reading experience.

I also rejected review findings. Comparing the fictional studio's policies
with COMP4020's produced objections to deliberate differences. I rejected
those but accepted and fixed four internal defects, including contradictory
lost-save/extension wording
([`49614ad5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/49614ad5)).
The course needed to make sense on its own terms.

A full-site audit
([`444e5592`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/444e5592))
led to repairs and another review that found residual contradictions
([`a799f9a4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/a799f9a4)).
Passing checks remained a condition for accepting the work. Deciding whether
it was clear and interesting enough to accept stayed with me; imagining another
student's interest was a judgment, not something the tests could establish.
