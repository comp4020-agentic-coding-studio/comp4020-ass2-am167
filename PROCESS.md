# Process overview

## What I built

*SLOP2418 — Urban Design Studio: Foundations of the Good City* is a
second-year course that uses *Cities: Skylines II* as a serious planning tool.
Students keep one district in a continuous save for twelve weeks, make zoning,
transport and budget decisions in it, and defend them at three juries. The
course asks students to explain what their decisions cost: improving fiscal performance, mobility or livability
usually means giving something else up. They are marked on recognising and
defending that trade-off.

## How I got here

I liked the idea of a semester-long project in a game I already enjoyed. I directed the agent and reviewed its work by asking myself: would I take this course, do I find the content interesting, and would someone else feel the same?

My inspiration was engineering and computing courses where you build one big project over a semester, learning what you need as you go. I wanted that same progression here, with assessment matching what students had practised.

I asked the agent how to turn the brief's requirement for "twenty-odd pages that have to agree with each other" into a harness rule. The agent suggested word counts and checks for boilerplate. I rejected those, since a page could pass both and still make no sense in the course. Instead, `spec/course-coherence.test.ts` checks lecture/studio references,
assessment dates and a distinct subject anchor for every week, and `CLAUDE.md`
says to update the anchors before changing the course idea
([`fe9b9b93`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/fe9b9b93)). I left interest and readability to my own reading, supported by adversarial reviews by subagents to challenge my impressions and catch issues I missed. I added a separate rule to the harness requiring fresh adversarial reviewers without sharing the drafting agent's context ([`85e50545`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/85e50545)).

Assessment was something I could check automatically. `spec/assessment.test.ts` requires every weighted brief to be marked on the three metrics. Its first run failed because the starter criteria
were "response to the brief" and "quality of execution", and the briefs were
rewritten to match
([`be5bc71a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/be5bc71a)).
Checking that weights totalled 100% would have missed the problem: students
were being marked on something different from what the course promised.

I also changed how I used agents in the harness. Parallel subagents seemed fast at first, so I added a rule encouraging them ([`b9162255`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/b9162255)). But using parallel subagents for one task ran into numerous issues. The combined plans used three different names for one district, allowed jury time for eight students in a cohort of sixteen, and assumed a Week 7 save state that Week 6 never set up ([`7c130251`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/7c130251),
[`b4416637`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/b4416637)). The checks passed despite these contradictions. Subagents also stalled, so the coordination problems and delays outweighed the speed. I changed the harness to keep subagents only for adversarial reviews, where a fresh perspective helped ([`4d06839c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/4d06839c)).

Reviews still caught many issues that the checks could not. A deck review found an invented place name, confusion between trams and buses, and an example that did not work with the game's pipe mechanics, even though the build passed ([`cf34a0b9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/cf34a0b9)). The agent assessed the review feedback and fixed four internal defects, including contradictory lost-save wording ([`49614ad5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/49614ad5)).

I left most of the editing and detailed reviewing to the agents. My own review focused on the experience of reading the site: was it clear, interesting, and a course I would want to take? The home page felt word-heavy and unconvincing, and I directly told the agent it looked like pure AI slop. I asked the agent to make it give me a reason to enrol. The resulting rewrite added a concrete studio example and explained why the course used a simulation ([`0fe8c068`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/0fe8c068)). The agent worked out the detailed changes; my contribution was recognising that the page still was not working for me and asking for something better.
