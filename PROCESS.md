# Process overview

## What I built

*SLOP2418 — Urban Design Studio: Foundations of the Good City* is a second-year
course that uses *Cities: Skylines II* as a serious planning tool. Students
keep one district in a continuous save for twelve weeks, make zoning, transport
and budget decisions in it, and defend them at three juries. Improving fiscal
performance, mobility or livability usually means giving something else up, and
they are marked on recognising and defending that trade-off.

## How I got here

A course should develop one clear argument over twelve weeks. The engineering
courses I learned most from built one thing across a semester, introducing
topics as they became relevant. The brief's exemplars also took a clear
position from the title onward. So I settled on the argument before choosing
the topic: urban design cannot improve livability, fiscal performance and
mobility all at once, and designers need to choose and justify the compromises
they make. *Cities: Skylines II* came second because it makes those trade-offs
measurable: the delivery mechanism, not the reason the course exists.

That argument shaped what the harness had to check, twenty-odd pages that
agree with each other. The agent proposed word counts and boilerplate
detection; I rejected both because a page could pass either without
contributing anything relevant. Instead, `spec/course-coherence.test.ts` checks
lecture/studio references, assessment dates and a distinct subject anchor for
each week, while `CLAUDE.md` requires those anchors to be updated before
changing the course's direction
([`fe9b9b93`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/fe9b9b93)).

The assessments had to follow the same argument: if students were learning to
make trade-offs, the marking criteria had to assess those decisions. The agent
`spec/assessment.test.ts` to fail first, and it did. The starter briefs
marked "response to the brief" and "quality of execution", so the
three briefs were revised around the three metrics
([`be5bc71a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/be5bc71a)).
A check that the weights added up to 100 would still have passed criteria that
assessed something the course never promised to teach.

One question remained outside those checks: would anyone enrol? I could not
turn that into a meaningful assertion, so the harness requires a reviewer with
none of the drafting agent's context to approach the site as a sceptical
student
([`85e50545`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/85e50545)).

I was less successful with parallel agents. Splitting twelve lecture plans
across four agents produced four drafts in roughly the time it took to write
one, so I added that approach to the harness
([`b9162255`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/b9162255)).
But the drafts did not stay consistent. Three agents independently named the
same district Ombersley, Dunnett and Brayfoot Flats. The cohort size mattered
more: Week 4 established sixteen students, but both jury weeks and Week 8
assumed half that number. With the writing split across agents, nobody was
responsible for maintaining that shared fact, and every check still passed. I
repaired Week 6 and left Weeks 9 and 12 flagged: Week 12 needed a decision
about the session format, so I costed the options instead of choosing one under
time pressure
([`7c130251`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/7c130251),
[`b4416637`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/b4416637)).
When subagents also began stalling, I changed the harness to limit them to
review work
([`4d06839c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/4d06839c)).

Review was the exception worth keeping. An adversarial pass through the decks found an
invented escarpment, a tram and a bus swapped between weeks, and Week 7
arithmetic that contradicted the game's pipe model. The tests caught none of
them
([`cf34a0b9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/cf34a0b9)).
Reviewers missed things too. A fresh reviewer checked every number on my
rewritten home page against its source and approved it. When I reread it, I
told the agent it was slop: the numbers were correct, but the sentences were
difficult to follow without already knowing the course
([`0fe8c068`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-am167/commit/0fe8c068)).
I ended up with tests holding consistency, reviewers holding accuracy, and my
own judgement on whether the writing was worth reading.
