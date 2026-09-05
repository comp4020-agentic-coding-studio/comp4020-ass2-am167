# Assignment 2 website audit

Audited baseline: `eb7746e` (`origin/main`), 4–5 September 2026 UTC. Worktree branch: `audit/assignment-2`. This report records findings; it does not change the website or represent a grade.

## Repair status — 5 September 2026

This PR now includes repairs against current main, preserving the newer homepage
artwork and timeline layout. The findings below remain the historical audit of
`eb7746e`; this table records their disposition.

| Findings | Disposition |
| --- | --- |
| A01 | Still requires the student's own PROCESS.md narrative and real citations. The evidence gate remains red for the template comment and two example SHAs; no account was fabricated. |
| A02 | Publication remains outside this authorized PR update. Repository visibility and main were not changed. |
| A03, A07 | Lecture/deck preparation now follows Monday studios and assessed jury clocks; weekly uploads remain required, with the explicit Week 11 Tuesday-noon exception. |
| A04 | Both utility increments remain funded through Week 9. Public realm needs additional discretionary savings or evidenced surplus. |
| A05, A06 | Reserve/link decision is finalized before Friday's memo. Friday late/extension handling is explicit. Five presentation moves total 280 seconds, leaving 20 for transitions. |
| A08 | Resources page explains pre-Week 1 access, supported lab-build manifest, issue schedule, upload folders and fallback, with usable evidence/allocation/chronology worksheets. The fictional LMS and unavailable runnable saves are explicitly distinguished from the working prototype. |
| A09, A11 | Removed starter and visible authoring instructions, stale assessment counts, rehearsal lengths and studio weekdays. |
| A10 | Corrected overload arithmetic, labelled hypothetical evidence, separated household counts from tracked departures, and replaced the incompatible capstone series with explicit units and denominators. |
| A12 | Published common score bands and the exact meanings of A1's cap and A2's fiscal fail. Each brief links to them. |
| A13 | Added focused checks for the actual walkthrough sum, utility chronology and 22% allocation arithmetic; a fresh adversarial content review found further issues which were repaired and logged. |
| A14 | All twelve decks provide a phone reading view derived from the compiled slides, with contents links and lecture return navigation. Body/table text is at least 16px at 390×844; wide diagrams and tables scroll within their own containers. Desktop presentation remains intact. |
| A15 | Timeline now exposes both calendar dates, policy meaning and accessible week summaries while retaining current main's layout. |

Validation: Node 24 `pnpm check` passes, with zero typecheck errors/warnings/hints,
52 built pages, all build link/accessibility/deck checks passing, and 33 tests
in the shared checkout (including the other agent's uncommitted illustration
check). The completed Chrome sweep measured all twelve decks at 1920×1080 and
390×844: no clipped text and no page overflow; phone minimum text 16px. Checked
contents navigation and the lecture return link. No further visual testing was
performed after the owner's instruction to finish. [Repair measurements](notes/pr4-repair-evidence/metrics.json),
[desktop clock](notes/pr4-repair-evidence/deck-clock-1920.png),
[phone clock](notes/pr4-repair-evidence/deck-clock-390.png).

The other agent's assessment illustrations, schema/grid changes and tests are
preserved in the working tree and excluded from these repair commits. The
student account and publication are the two remaining submission-readiness
items; this update does not claim a public deployment or runnable simulator pack.

## Authority and scope

Checked against the published [Assignment 2 brief and spec](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/assessments/assignment-2/#the-spec) and [marking environment](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#marking-environment), retrieved 4 September 2026. The report distinguishes fixed-spec readiness gaps from usability and curriculum-quality findings. The deadline is 21 September 2026: an incomplete submission today is not a missed deadline.

Scope includes every course-content source (12 lectures, 12 studios, 3 assessments, 5 people), all 12 decks, index/navigation/policies/error pages, generated course data, custom checks, process evidence and read-only deployment status. Browser and command results are recorded below. Game saves and classroom activities cannot be executed in this environment; no claim is made that hypothetical simulator outcomes have been empirically validated.

## Summary

**15 findings: 8 high, 6 medium, 1 low.** The largest gaps are the missing process account and public deployment, conflicting weekly instructions and evidence, and phone deck readability. The base build is healthy; green checks do not resolve these findings.

## Findings

### A01 — High: process evidence is still the template; submission gate fails

**Evidence:** [PROCESS.md](PROCESS.md) retains its `TEMPLATE` comment and example links to `YOUR-ORG/YOUR-REPO` using `a1b2c3d` and `e4f5a6b`. `pnpm check:evidence` exits 1 with the template-comment error and both nonexistent-commit errors.

**Impact:** The required personal process narrative and valid supporting citations are absent. This blocks the explicit evidence-check requirement, as well as leaving the largest assessment criterion without its written account. `CLAUDE.md` and a growing commit history do exist; a separate assignment reflection is not required.

**Action:** The student should write the required 400–600-word account in their own voice, explaining course-design choices, how those choices shaped the harness, what was left to judgement, and why accepted results were convincing. Replace example links with real corroborating commits and rerun the evidence gate. Do not substitute an agent-written reflection for the student's account.

### A02 — High, readiness gap: the public deliverable is unavailable

**Evidence:** `gh repo view --json visibility,url` reports `PRIVATE`. A read-only HTTP request to [the required Pages URL](https://comp4020-agentic-coding-studio.github.io/comp4020-ass2-am167/) returns 404. The workflow gates both jobs on public visibility.

**Impact:** A marker cannot inspect the site at its URL of record today. Local browser results cannot certify deployed behavior. This is a present readiness gap, not a finding that the future deadline has been missed.

**Action:** Once the owner authorizes shipping, complete the publication workflow and recheck the deployed artifact at both marking viewports. This audit does not change repository visibility or deploy the site.

### A03 — High: lecture instructions contradict their paired studios

**Reproduce:** Read each lecture's “Into the studio” section beside the same week's studio page. These are observable cross-page contradictions, independent of whether a particular game mechanic exists.

| Week | Lecture says | Studio/assessment says | Consequence |
| --- | --- | --- | --- |
| 1 | Choose a settlement; first road commits that choice; nothing submitted | Archive remains untouched, no road confirmed, cohort continues on Halstead; policies require the unassessed upload | Choice, state and submission expectations differ |
| 2 | Show an unzoned traffic-volume overlay; find lane-kilometres per dwelling | Explicitly rejects unzoned traffic volume and uses paper path counts; derives road metres per dwelling | Students prepare incompatible evidence and units |
| 4 | Tuesday desk crit; run both clinic branches for twelve months in the session; plan “mostly made” | Monday jury, upload noon/hang 13:00; both branches completed as homework | Following the lecture risks missing assessed work |
| 5 | Wednesday; add Wickstead capacity alongside transit | Monday transit studio; widening is reserved for Week 6 | Destroys the expected Week 6 pre-intervention comparison |
| 6 | Wednesday; bring a widening from last week; third lane; twelve-month branches; nothing submitted | Monday; widen two to four lanes now; use three/six-week checkpoints; position statement and upload required | Wrong starting save, intervention, observation interval and hand-in |
| 7 | Live cascade on a student's save; intake built downstream; far-end outage | Issued checkpoints; Week 3 requires an upstream intake; studio expressly disallows far-end-first causal claims | Instructions attribute a different failure to the student's work |
| 8 | Close a fixed ₡9,000/month deficit already applied to the save | Cut 22% of eligible allocated worksheet outlay; personal save remains separate | No published reconciliation establishes an equivalent target |
| 9 | Last working/review time before pin-up | Session is the assessed jury; work must already be uploaded | Misleading preparation window |

**Deck corroboration:** Week 5's closing slide also calls the session Wednesday; Week 8's opening and closing slides call it Thursday. These explicitly refer to the weekly studio, unlike ordinary tutor drop-in hours, which may legitimately occur on other days.

**Locations:** [lectures](src/content/lectures), especially `week-02.md`, `week-04.md`–`week-09.md`; matching [studios](src/content/sessions); [Assessment 1](src/content/assessments/01-neighbourhood-unit-plan.md).

**Action:** Establish one canonical weekly contract for weekday, input save, permitted intervention, observation method, outputs and deadline; reconcile lecture bodies and decks with it. Linking two pages and matching their titles does not establish agreement.

### A04 — High: Week 8 funds the treatment increment that Week 9 says remains unfunded

**Evidence:** [Week 8 studio](src/content/sessions/08-budget-under-cutback.md), both `spec` and “Line zero”, requires funding both Week 7 utility increments and protecting them from the cut. Its final paragraph nevertheless retains the treatment increment “where it remains unfunded”. [Week 9 studio](src/content/sessions/09-public-realm-build.md), “The question”, unequivocally says the same ₡5,100/month increment remains unfunded and asks students to defend public-realm spending instead.

**Impact:** A student following Week 8's fixed constraint cannot deliver Week 9's prescribed budget dilemma. The conflict reaches the second assessment's required memo and signed unfunded list.

**Action:** Decide whether the treatment increment is protected, deferred, or branch-dependent. Carry that decision consistently through the worksheets, Week 8/9 lectures and decks, studio specs and Assessment 2.

### A05 — High: capstone teaching introduces a decision after the required memo has been lodged

**Evidence:** [Assessment 3](src/content/assessments/03-comprehensive-city-plan.md), “Two clocks”, requires the jury memo on Friday 21 May and **the same memo** in Monday's artifact. [Week 12 lecture](src/content/lectures/week-12.md), “The decision this week”, asks students to choose the reserve versus cross-town link before noon on Monday and make it the plan's headline claim. [Week 12 studio](src/content/sessions/12-final-jury.md) repeats the Monday decision. The topic is foreshadowed in Week 8, but the authoritative instructions leave the decision open until after the memo deadline.

**Impact:** Students cannot both change their headline position in the Monday lecture and submit an unchanged Friday memo. The consequence of a late Friday jury copy, and how an extension affects that clock, are also unspecified; the late rule is attached to Monday's artifact.

**Action:** Teach and finalize the decision before Friday, or explicitly permit/version Monday revisions and explain how chairs receive them. Define the Friday late/extension rule.

### A06 — Medium: final jury's five-minute walkthrough totals 340 seconds

**Evidence:** [Week 12 studio](src/content/sessions/12-final-jury.md), “Your fifteen minutes”, and [Week 12 deck](src/decks/week-12.deck.mdx), “Walking a jury through it”, allocate 40 + 60 + 120 + 60 + 60 = **340 seconds (5:40)** while promising five minutes presenting and ten minutes for the room.

**Impact:** Following the prescribed sequence exceeds the presentation allowance by 40 seconds for every student, before any transition between views.

**Action:** Reduce the sequence to at most 300 seconds, allowing view changes, or revise the entire fifteen-minute protocol consistently.

### A07 — Medium: unassessed upload rules conflict in Week 11

**Evidence:** [Policies](src/pages/policies/index.mdx), “Save files and version discipline”, requires unassessed saves/sheets by 21:00 the same day. [Week 11 studio](src/content/sessions/11-reading-the-land-value-curve.md), “The appendix”, says Tuesday noon. The policy's precedence clause allows an **assessment brief** to override it, not an ordinary studio page.

**Impact:** Students cannot tell which deadline governs the final unassessed studio; its appendix is a capstone dependency.

**Action:** Publish Week 11 as an explicit allowed exception in the standing rule, or align the deadline. Likewise replace lecture claims that “nothing is submitted” with “no weighted assessment is due” where weekly uploads still apply.

### A08 — High, curriculum readiness: required course resources have no access path

**Evidence:** Week 1 requires the issued Kerrow Basin map before arrival. Later studios require named `kerrow-ref-*` checkpoints, an evidence pack, a district-cost worksheet, camera/polygon definitions, and sampled-address/land-value sheets. Assessment briefs say to upload artifacts but do not link a destination. Policies refer to a course share issued in Week 1. The tracked site contains no supplied resource pack or download destination for these prerequisites.

**Impact:** A student using the website alone cannot prepare the first session or reproduce the later numeric comparisons. Merely naming a future resource does not provide it. The fictional setting can reasonably use an invented LMS; actual game-save binaries are not an explicit Assignment 2 spec requirement. The finding is that the student-facing access instructions and worked evidence needed by this course's own promises are absent.

**Action:** Add a clearly discoverable resources/access section: where and when materials are issued, who supplies access before Week 1, upload destination, supported game build/settings, and accessible worksheet/sample evidence. If outcomes are illustrative rather than captured from runnable saves, state that consistently at the point of use.

### A09 — Medium: the lectures index exposes starter authoring instructions

**Evidence:** [Lectures index](src/pages/lectures/index.mdx) tells students that a course decides how many lectures it needs, one needs a real deck, and that `related:` connects collection entries. These are template instructions, despite the absence of a `STARTER_CONTENT` marker.

**Rendered evidence:** [Lectures index on phone](notes/audit-evidence/lectures-starter-phone.png).

**Impact:** A main navigation destination breaks the student-facing voice and gives no useful lecture attendance/preparation information. The placeholder detector does not catch this prose.

**Action:** Replace it with the actual twelve-Monday lecture schedule, venue/access and preparation guidance; remove collection implementation details from the page.

### A10 — High: deck evidence contradicts its own arithmetic and provenance rules

**Evidence:**

- [Week 7 deck](src/decks/week-07.deck.mdx), “The cascade begins”: demand reaches **1,142** against **1,200** installed units (95.2% utilisation), then immediately says production falls short of demand. No intervening loss of capacity or increase in demand is stated. Under its own figures, 58 units of capacity remain.
- [Week 11 deck](src/decks/week-11.deck.mdx), “What the model does show about who left”: a table assigns **590 households to Week 1**, while the Week 1 studio requires an untouched, unbuilt save. It calls every figure a direct, non-invented readout, despite the lecture's rule that fixed scenario values are hypothetical until a reference pack is issued. The same deck later calls livability a derived measure. A title-slide list of evidence categories does not label individual claims.
- The Week 11 table subtracts 340 − 96 low-wealth households, then treats 34 currently homeless households as a tracked subset of those 244 departures. No longitudinal matching is given; counts alone do not establish that identity or distinguish households moving away from households changing wealth category.
- [Week 12 deck](src/decks/week-12.deck.mdx), “Back to the three metrics”: its own Week 6→9 and Week 9→12 columns improve all three numbers, followed by the claim that none moved without another moving against it. Its annual fiscal index and single non-car share also lack a conversion from the studio's monthly balance and separately denominated transit/walk observations.
- [Week 6 deck](src/decks/week-06.deck.mdx), “The tradeoff of the week”, describes “16 minutes of peak speed”; speed and elapsed time are different quantities, and the earlier table reports 24→41 km/h.

**Impact:** The teaching material asks students to exercise evidence discipline while demonstrating unsupported or internally impossible inferences. This weakens the course's central argument, even if the stories are fictional. These findings use the site's own numbers; they do not depend on guessing how the current game works.

**Action:** Audit worked examples against one explicit reference dataset and label each source, unit, denominator, baseline and inference. Fix the overload trigger, distinguish cohort tracking from aggregate subtraction, and reconcile the final summary with the weekly metric series.

### A11 — Medium: decks retain authoring notes and obsolete course contracts in visible slide content

**Evidence:** [Week 4 deck](src/decks/week-04.deck.mdx) prints “A single line, set large”, “Two lists side by side”, and “Beneath it, two lines in black”. [Week 11 deck](src/decks/week-11.deck.mdx) prints “Preface line” and “Table, exactly these rows”. [Week 12 deck](src/decks/week-12.deck.mdx) prints “Content, as a plain list” and later asks for a **nine-minute** rehearsal despite its five-minute presentation rule and permission to use a metric card. Week 11 says three assessments are already marked and Week 12 refers to three earlier assessments; only two precede the capstone. Week 6 calls Week 7 the only built deck although all twelve exist.

**Impact:** Production instructions and abandoned design decisions appear in the final student experience. These are not hidden speaker notes. Some merely undermine polish; others change preparation requirements.

**Action:** Read every rendered slide as a student, remove authoring directions, and reconcile counts, schedule and rehearsal rules against the briefs. Keep actual delivery notes inside the speaker-note blocks.

### A12 — Medium: assessment weights are defined, but marking bands are not

**Evidence:** [MarkingModel](src/components/MarkingModel.astro) renders criterion names and percentages for the first two assessments, and a paragraph for the holistic capstone. The [first brief](src/content/assessments/01-neighbourhood-unit-plan.md) caps a kind of plan at the “middle band”; the [second](src/content/assessments/02-public-realm-and-infrastructure-plan.md) calls an unfunded plaza a “fiscal fail”. Neither the briefs nor policies define those bands, their scores, or how evidence quality distinguishes them.

**Impact:** Students can calculate weights but cannot tell what quality of work earns a given result, or the size of a stated cap. This is a course-usability finding, not a claim that Assignment 2 explicitly requires a detailed rubric.

**Action:** Define a concise common set of performance descriptors and any caps, linked from each brief, while preserving the intended holistic capstone judgement.

### A13 — Medium: the course's strongest promises are not covered by its custom checks

**Evidence:** [course-coherence.test.ts](spec/course-coherence.test.ts) checks weekly counts, graph links, dates and topic words in **titles/descriptions**, not agreement between body instructions. [lectures.test.ts](spec/lectures.test.ts) checks HTML length, deck existence and presence of any evidence vocabulary. All 29 tests pass with A03–A11 present. The generic evidence check also accepts the unmarked starter prose on the lectures index.

**Impact:** The required custom-check suite exists, but the harness's claim to protect course coherence exceeds what it rejects. More prose or another keyword would still pass without resolving these contradictions.

**Action:** Add focused contracts for facts that can be computed (jury-duration sum, shared weekdays/clocks, reference numeric series and required resource links), and keep curriculum judgement in a documented adversarial review. Avoid tests that only count words or require repeated slogans.

### A14 — High: all lecture decks become impractically small at the phone marking viewport

**Reproduce:** At **390×844**, open `/decks/week-12/#/2` (or advance once from its title slide). Compare [phone capture](notes/audit-evidence/deck-12-clock-phone.png) with [desktop capture](notes/audit-evidence/deck-12-clock-desktop.png). Both images show the same “The clock” slide. Browser identity is Chrome for Testing 152.0.7977.82.

**Observed:** The 1280×720 slide canvas is scaled to **390×219.375**, vertically centred inside an 844px-high viewport. The clock slide's smallest body text measures approximately **6.19 rendered pixels** after scaling. The full 12-deck sweep found minimum text sizes ranging from **4.49 to 6.44 pixels** per deck on the phone, versus **22.08 to 31.68** on desktop. Those minima exclude speaker notes. The deck's previous/next buttons are also hidden (`display: none`); keyboard arrows work, but no visible advance/back control guides a phone visitor.

**Impact:** Slides fit their boxes yet are not comfortably readable at the specified phone viewport. This affects the actual deck-delivery requirement, not merely cosmetic polish. Passing the structural deck checker and axe does not validate legibility.

**Action:** Provide a responsive reading mode with normal-sized flowing content, or a phone-specific slide layout, while preserving the presentation view for desktop. Expose usable navigation. Verify at 390×844 without treating rotation or repeated zooming as the solution.

### A15 — Low: the timeline labels enrolment deadlines without revealing their dates

**Evidence:** [SemesterTimeline.astro](src/components/SemesterTimeline.astro) defines census as 12 March and drop-by as 30 April 2027, but passes only their labels and week positions to the displayed timeline. The rendered markers have no date text, accessible date label, link or detail interaction. The rest of the site does not publish those named dates.

**Impact:** A student sees that there is a census/drop deadline but cannot recover the calendar date from the website. The timeline's lecture/studio dots also convey their types through colour and the legend without per-week accessible descriptions. The twelve dated teaching weeks do exist elsewhere, so this is not a failure of the twelve-week spec line.

**Action:** Display or expose actual dates and their meaning, link to relevant policy detail, and give each week an accessible summary. Keep the timeline and dated course records consistent.


## Fixed-spec status

| Published requirement | Audit result |
| --- | --- |
| Public Pages deployment and both viewports | Not ready: private repo/404 (A02); local phone decks illegible (A14). Deadline is still in the future. |
| One niche SlopU course; retained suffix; twelve dated weeks | Present: SLOP2418 retains provisioned 418 (commit `6b92e21`); twelve lecture/studio pairs, 22 February–24 May 2027, within the course period ending 28 May. Two-week break follows Week 6. Curriculum coherence has substantial findings. |
| A lecture linked to a real deck | Structurally satisfied by all twelve lectures and 194 slides; mobile delivery and content quality need work. |
| Assessment totals 100% | Pass: 25% + 25% + 50%; each weighted brief's criteria also total 100%. |
| Own spec checks and both check commands pass | Partial: eight custom/spec files, 29 tests pass; evidence gate fails (A01). |
| Process artifacts and growing history | CLAUDE.md and incremental history present; PROCESS.md remains incomplete (A01). |

The narrow premise, repeated district, named staff and cumulative assessment structure are substantial original work. Keeping the theme's visual treatment is permitted; an image-free home/social treatment is not itself a failure. No finding is raised merely because fictional SlopU staff, rooms or emails are invented.

## Verification record and limits

- **Production checks:** `pnpm check` passed on Node **24.20.0**, pnpm **11.9.0**: typecheck reports 0 errors/warnings/hints; **8 files / 29 tests pass**; **51 pages** pass build accessibility, base-path and broken-link checks; **12 decks** pass structural checks. Generated API: **33 nodes, 18 edges, 34 files**. [Command log](notes/audit-evidence/check.log). An earlier run on the shell's Node 22 also passed; Node 24 is the final recorded run.
- **Evidence:** `pnpm check:evidence` exits 1 for the existing process-template/citation problems. [Exact output](notes/audit-evidence/evidence-check.log). This is a reported baseline failure, not a new failure introduced by this documentation PR.
- **Browser:** isolated `agent-browser` session using Chrome for Testing **152.0.7977.82**, local `pnpm preview` at `http://127.0.0.1:4341/comp4020-ass2-am167/`. All **51 built HTML pages** were visited at **1920×1080 and 390×844**, with viewport dimensions recorded. All **194 slides** were measured at both sizes. [Raw measurements](notes/audit-evidence/browser-metrics.json) and [repeatable sweep script](notes/audit-evidence/browser-sweep.py). The sweep is a structural/geometry pass; screenshots were visually inspected for representative layouts and confirmed findings, not every scroll position on every page.
- **Interactions:** mobile menu exposes the five destinations; search for `Wickstead` returns relevant results and Enter opens the Week 6 studio; deck ArrowRight advances; the theme control responds to activation and persists its setting once scrolling settles. No browser console/page errors were reported during the completed sweep/search checks. These are focused smoke checks, not exhaustive assistive-technology or network-throttling tests.
- **Overflow follow-up:** no page-wide horizontal overflow was detected. The twelve lecture tables extend beyond the phone's content width but are contained by `overflow: auto` wrappers (e.g. Week 11: 562px table in a 339px scroll container), so they are not classified as clipped content. No measured slide content exceeded its slide box. One image initially flagged before loading completed was rechecked after image decoding; all people-page images loaded, so no broken-image finding is raised.
- **Deployment limit:** the live URL is unavailable, so behavior on GitHub Pages remains unverified. Local preview returns 404 for the bare base path without the trailing slash; that server behavior is not sufficient evidence of a deployed navigation bug. Retest both URL shapes after authorized shipping.
- **Content limits:** the audit checks internal evidence/logic and student usability, not every scholarly attribution or game-version claim against an external primary source. Required reference saves were unavailable; simulation timings and outcomes remain unverified. Fictional resources may be distributed outside the site, but the site currently gives no usable access route (A08).
- **Review:** a fresh adversarial reviewer checked A01–A09 against source and found them supported. Their weekday feedback was incorporated only where the text explicitly describes a studio, avoiding false positives based on ordinary office hours. Later findings were checked against rendered measurements and the quoted local arithmetic.

## Suggested repair order

1. Student completes PROCESS.md and its real citations; owner handles publication when ready.
2. Reconcile a single weekly contract and evidence dataset across studios, lectures, decks and briefs, particularly Weeks 4–9 and the capstone clocks.
3. Make decks readable and navigable on phones, then repeat the viewport check.
4. Publish resource-access and grading guidance; remove remaining authoring prose; add focused regression checks for the repaired contracts.
