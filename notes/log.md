## 2026-08-31 — Policies page

Wrote the first real content page after the home page: `src/pages/policies/index.mdx`,
replacing the starter placeholder.

Nine sections, all in the studio register from PLAN.md §2:
pin-up deadline, extensions, authorship/integrity, standard map and simulation
settings, save-file discipline, generative tools, conduct at crit, equipment and
adjustments, and a "where to ask what" routing table.

Design decisions worth recording:

- **The late-work rule is derived from the format, not bolted on.** A pin-up has
  a fixed time because a jury is assembled for one afternoon, so the page splits
  the deadline into two clocks (artefact vs. defence) and says what an extension
  can and cannot move. This gives the policy a reason a student can check,
  rather than an arbitrary penalty schedule.
- **Academic integrity is written against the studio's actual problem.** Crit is
  collaborative by design, so "your work must be uninfluenced by others" is
  incoherent here. The section draws the line at authorship instead: one save
  file per student, advice taken must be named in the memo, imports declared.
- **"The standard map and simulation settings" carries the course thesis.** The
  three named metrics (fiscal performance / mobility performance / livability)
  only compare if everyone builds on the same site — so the no-mods rule is a
  consequence of the marking scheme, not IT policy.

TDD, per CLAUDE.md: wrote `spec/policies.test.ts` first and confirmed all three
tests red before writing content. Contracts asserted:
1. the page is real (no `STARTER_CONTENT`, not the placeholder prose, >2000 chars
   of body text);
2. it has a heading covering every area the rest of the site can defer to it on
   (late work, extensions, integrity, generative tools, help) — matched by regex
   over heading text so wording can move without the contract moving;
3. every `/policies/#anchor` deep link anywhere in `dist/` resolves to a heading
   id that exists. Non-vacuous already: the page cross-links its own sections.

Two fixes found by looking rather than assuming:

- The frontmatter `description` isn't markdown-processed, so `---` rendered
  literally as "studio --- pin-up" in the lead paragraph. Swapped for a real em
  dash (matching `final-project.md`'s frontmatter).
- Root-absolute links in MDX (`/assessments/`) **are** base-prefixed by the
  theme — confirmed against the built HTML, same as the starter `404.md` does.
  So the codebase idiom is fine here; no relative-path rewrite needed.

Verified in Chrome at 1920×1080 and 390×844 (`pnpm preview` on port 4323,
title checked before screenshotting). No horizontal overflow at 390: every
`h1/h2/p/li/table/td/th/code/a` in `main` measured inside the viewport bounds
(0 violations), and the routing table sits in the theme's `.at-table-wrap` at
354px with no clipping. `pnpm check` green.

Open coherence dependency: the page names a **Course Convenor** and a **Visiting
Critic**, and links to `/people/`, which still holds starter people. The people
page needs rewriting to match before this is coherent to a marker.

(Initial draft said "Studio Director" throughout; changed to "Course Convenor"
on request mid-task.)

## 2026-08-31 — Teaching team

Fleshed out `/people/`: rewrote the two starter entries as real people and added
three more, so the cast is a convenor, three tutors and a visiting critic.

- **Marisol Quaye** — Course convenor. Land-value capture research, ex-strategic
  planning unit. Weeks 1–3 and the Week 12 capstone review.
- **Idris Fenn** — Studio tutor, mobility. Transport modelling background;
  Weeks 5–6 and the peak-load stress test.
- **Nadia Ilkhom** — Studio tutor, infrastructure. Water engineer; owns Week 7,
  which is the one week with a real deck.
- **Tobias Wren** — Studio tutor, fiscal and public realm. Weeks 8–9.
- **Sunniva Marek** — Visiting critic, external practice. Juries only.

Each tutor owns a named stretch of the semester rather than being
interchangeable staff, so the people page and the twelve-week arc corroborate
each other instead of just coexisting. Bios reference the three metrics and the
weekly deliverable format, which keeps the studio thesis present on a page that
would otherwise be a staff directory.

Every bio uses they/them. Assigning gendered pronouns to invented staff off the
back of invented names is a guess with no upside, and a course site is exactly
the register where the neutral default reads as normal rather than as a
statement.

**Closes the coherence gap flagged in the policies entry.** The policies page
sends students to a "Course Convenor" and warns that the "Visiting Critic" does
not take student email; both roles now exist and say the same thing. The people
index links into `/policies/#where-to-ask-what` so the routing table is one
click away, and the visiting critic's contact line matches the policy verbatim.

Two supporting changes:

- **`roleLabels` moved into `src/site-config.ts`.** `PeopleGrid.astro` and
  `people/[slug].astro` each carried their own copy of the same map, which is
  how a grid and a detail page drift apart. Both now import it, along with
  `roleOrder`. The labels are also now the studio's own words — `guest` renders
  as "Visiting critic", not the theme's "Guest lecturer".
- **`people/index.mdx` gained an intro.** A bare grid does not tell a student
  who to go to for what; two sentences and a link to the routing table do.

TDD again: `spec/people.test.ts` written first, red on two of three. Contracts:
every role the policies page sends students to is actually filled (matched on
the rendered label, which is what a student reads, not the machine role);
every person has a contact line, since the home page promises "how to reach
them"; no person page still carries a starter marker or placeholder prose.

Verified in Chrome at 1920×1080 and 390×844 — grid, a person page, and the
mobile single-column stack. 0 elements outside the viewport at 390.
`pnpm check` green (7 tests).

**Blocked:** `src/content/people/marisol-quaye.avif` and `idris-fenn.avif` are
starter artwork and `pnpm check:evidence` fails on both. The entries no longer
reference them, so they are orphaned files on disk. They need deleting (the
evidence check explicitly allows a deleted file, and an image-free treatment is
what PLAN §5 proposed) or replacing with commissioned portraits. Deletion was
blocked by the permission classifier — raised with the user.

## 2026-08-31 — Portraits

Replaced the starter portraits with five made for this site, one per person.
`pnpm check:evidence` no longer flags any people artwork.

**Tried a text-to-image model first and rejected it.** Pollinations needs no key,
which is why it was the first stop, but its only available model is `sana`, and
across three prompt framings it returned painterly output with gradients, paper
borders, off-palette red lips and dark backgrounds — and it collapsed to
substantially the same face on every seed. Five of those would have been
off-brand *and* would have read as exactly the AI slop the brief penalises.

**Hand-authored SVG instead, rasterised to AVIF** (`scripts/make-portraits.ts`,
committed so the artwork is reproducible rather than a mystery binary). The
brand is three flat colours and a halftone, which vector shapes hit exactly and
a diffusion model does not. Palette sampled off the starter artwork so the new
portraits sit in the same print: paper `#f6eedd`, gold `#c69f57`, ink `#17150f`.

Construction is one template — angular ten-sided head, gold shadow plane down
one half, halftone in the shadow, backdrop block — varied per person by hair
silhouette (cropped / bob / volume / tied / swept), glasses, which way the
shadow falls, and where the backdrop block sits. The point is that the grid
reads as one commissioned set rather than five unrelated images.

Two iterations against the rendered output rather than the source:
1. The nose ran from y=300 down the centre seam and read as a scar across the
   cheek. Moved it below the brow line and onto the shadow side.
2. The "tied" bun polygon collided with the ear. Bun is now a circle drawn
   *behind* the head, and that variant drops the ear.

**Also had to change the person page layout.** The theme's `heroImage` is a wide
full-bleed band with a dark scrim; handed a square portrait it cropped the face
out entirely and left a strip of collar. Portraits now render inline at 220px
beside the details list, which is the size they were drawn for. Flex-wrapped, so
it stacks on mobile.

One YAML trap: the alt text contains a colon ("A two-ink portrait in flat gold
and black on cream: an angular bust…"), which a plain scalar reads as a mapping.
Build failed with "a multiline key may not be an implicit key". Folded block
scalars (`photoAlt: >-`) throughout.

Verified at 1920×1080 and 390×844 — grid and a detail page, both viewports,
0 elements outside the viewport at 390. `pnpm check` green (7 tests).
