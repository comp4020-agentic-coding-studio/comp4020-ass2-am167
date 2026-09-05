# Process overview

## What I built

*SLOP2418 — Urban Design Studio: Foundations of the Good City* is a
second-year studio course designed around the idea of using the city
building game *Cities: Skylines II* as a serious planning tool. Over twelve
weeks, students will work on one shared district in a continuous savefile,
making decisions about zoning, transport, and budgeting, then defending those
choices in live critiques.

The main idea I wanted to explore throughout the course is that no design
decision comes without a trade-off. A plan might improve financial
performance, mobility, or quality of life, but it is unlikely to maximise all
three at the same time. The twelve-week structure, three assessed juries, and
studio policies are therefore designed to make students identify, explain,
and justify those trade-offs rather than simply claim that their proposal
solves everything.

## How I got here

I started with a simple definition of what I thought made a good course: it
needed one clear argument that students could follow across twelve weeks, it
needed to be distinct enough to choose over another studio, and it needed to
be honest that no decision — fiscal, mobility, or livability — comes without
a trade-off.

Everything I asked the agent to produce was meant to support one of those
three ideas. Most problems with its output came from noticing that it had
quietly dropped one of them.

Where I could turn something about the built site into a fact, I made it a
check rather than relying on myself to remember it.
`spec/course-coherence.test.ts`
([`fe9b9b93`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/fe9b9b93))
fails the build when the lecture/studio structure, assessment dates, or a
week's subject anchor stop agreeing. `spec/calendar.test.ts`
([`0623b3b5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/0623b3b5))
does the same if the mid-semester break shifts. These problems are difficult
to notice week by week because they only appear when multiple dates or pages
are compared. Several drafts looked fine individually but failed once I
forced them to agree with each other.

But being "sharp enough to choose" is not something a build can test. It
depends on a reader's judgement, and I did not want to fake that with a
keyword count. Instead, I encoded the **process**. `CLAUDE.md` now requires a
fresh reviewer, with none of the drafting agent's context, to read the
finished content as a skeptical prospective student
([`85e50545`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/85e50545)).
That rule changed what I accepted more than any single technical fix. One
lecture-deck draft passed every mechanical check but still contained a
fabricated place name, a vehicle that changed from tram to bus between decks,
and a worked example that contradicted the actual game mechanics
([`cf34a0b9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/cf34a0b9)).
Each issue looked reasonable on its own but became wrong when compared
against information outside that page.

I also deliberately kept some judgement out of the test harness. A reviewer
compared this studio's policies with the real COMP4020 rules and flagged
several differences as defects, even though they were deliberate choices for
the fictional course
([`49614ad5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/49614ad5)).
Automatically punishing every difference would have punished the fiction for
being its own course, so I judged those findings against the site's own
internal logic instead.

I treated voice the same way. One home-page example was numerically accurate
but still read, on a second pass, as "pure slop"
([`0fe8c068`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/0fe8c068)).
That is a judgement about writing, not data, so it remains a reviewer
instruction rather than an automated rule.

Finally, I ran two full-site audits against the published Assignment 2 brief
([`444e5592`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/444e5592),
[`ae140077`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/ae140077)).
Both still found contradictions the harness had missed. For me, that became
the clearest measure of quality: knowing which parts of "good" I could make
checkable, and which still needed a reader to judge.
