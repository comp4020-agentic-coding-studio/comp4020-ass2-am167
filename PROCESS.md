# Process overview

## What I built

*SLOP2418 — Urban Design Studio: Foundations of the Good City* is a
second-year course using *Cities: Skylines II* as the setting for a
semester-long planning project. Students build, test and defend decisions
about fiscal performance, mobility and livability across twelve weeks.
The site includes lecture pages and decks, studio sessions, three assessment
briefs, teaching staff and policies for running the studio.

## How I got here

I liked the idea of a semester-long project in a game I already enjoyed.
Most of the work after choosing that premise was directing and reviewing
what the agent produced. The checks caught specific inconsistencies;
adversarial reviews gave me another reading of the content. I then had to
decide whether the revisions made sense and were interesting enough to keep.
My questions were fairly simple: would I take this course, do I find this
content interesting, and could I imagine someone else finding it interesting?

The checks were mostly there to stop the agent going off the rails. For this
course, continuity meant that lectures and studios agreed, each week had a
distinct subject, and assessment used the metrics students had been working
with. The coherence harness checks references, dates and weekly subject
anchors; its `CLAUDE.md` rule says to update those anchors before changing
the course idea
([`fe9b9b93`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/fe9b9b93)).
That gave later edits an explicit course structure to answer to.

The assessment check shows why this mattered. Its first run failed because
the starter criteria were “response to the brief” and “quality of execution”,
with no fiscal performance criterion. `spec/assessment.test.ts` requires every
weighted brief to include all three course metrics, and the briefs were
changed to match
([`be5bc71a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/be5bc71a)).
The weights could total 100% while the assessment still contradicted the
course. I wanted this mismatch caught automatically because it had a clear
answer, rather than relying on another manual read to notice it.

I deliberately left interest and readability out of automated scoring.
`CLAUDE.md` rules out weakening the coherence test to word counts or repeated
boilerplate: those can pass without the curriculum making sense. Instead,
it requires a prospective-student review across the home page, non-adjacent
weeks, an assessment, the deck and policies
([`fe9b9b93`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/fe9b9b93)).
Fresh reviewers must also work without the drafting agent's context
([`85e50545`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/85e50545)).
I could require that read, but the instruction could not guarantee good judgment.

Deck review caught a fabricated place name, tram/bus drift and an example
incompatible with the game's pipe mechanics after the build passed
([`cf34a0b9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/cf34a0b9)).
Manual reading and adversarial review therefore remained part of revision.
I also had to decide which findings to accept: I rejected objections to
intentional differences from COMP4020's policies, but accepted four internal
defects for correction, including contradictory lost-save/extension wording
([`49614ad5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/49614ad5)).

The homepage was where my own reading mattered most clearly. I called one
paragraph “pure slop” after a reviewer had verified its numbers. It confused
course Week 6 with six elapsed simulation weeks, and decorative metaphors
made the explanation harder to follow. The rewrite specified “six in-game
weeks” and explained why drivers returned to a widened road
([`0fe8c068`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/0fe8c068)).
I could now follow what the example was saying without having to disentangle
the two clocks. That was a specific improvement I could judge by reading,
even though the figures had already passed review. I used the checks to catch
what they could establish, and my own reading to decide whether I wanted to
keep the result. I could consider another student's interest, but I could not
claim to have proved it.
