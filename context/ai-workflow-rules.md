# AI Workflow Rules

## Approach

Build this project incrementally using a spec-driven workflow. `project-overview.md`, `architecture.md`, and `code-standards.md` define what to build, how the system is structured, and the rules the codebase must follow. Always implement against these files. Do not infer product behavior, architectural decisions, or styling choices not defined in them. Work through the ten buildable units in the order defined in `project-overview.md`'s Process section, one unit at a time.

## Scoping Rules

- Work on exactly one buildable unit at a time, in the sequence defined in `project-overview.md`.
- Do not begin a later unit before the current unit meets its "done" criteria.
- Do not combine work across unrelated system boundaries (e.g. do not touch `components/ProjectCard` and the theme toggle logic in the same step).
- Do not make speculative changes for features not yet in scope (e.g. do not scaffold a contact form, a database, or authentication, since none of these exist in this project).
- Do not add dependencies, libraries, or tooling not listed in `architecture.md`'s stack table without explicit instruction.

## When to Split Work

Split an implementation step if it combines:

- Content/data changes (`data/`) and component/UI changes in the same step
- Layout structure changes and animation/motion implementation in the same step
- Multiple unrelated sections of the site (e.g. Hero and Projects) in the same step
- Styling/theming changes and functional logic changes in the same step
- Any behavior not clearly defined in `project-overview.md`, `architecture.md`, or `code-standards.md`

If a change cannot be verified end to end in the browser within a few minutes of manual checking, the scope is too broad. Split it into smaller steps.

## Handling Missing Requirements

- Do not invent content, copy, project details, or design decisions not defined in the context files.
- If a requirement is ambiguous (e.g. exact wording of the positioning statement, which projects to feature first), stop and ask Raja directly rather than guessing.
- If a requirement is genuinely missing from the context files, do not proceed on an assumption. Flag it as an open question before continuing implementation.
- Never fabricate placeholder project data, fake links, or fake metrics to fill a gap. Leave the relevant field empty or clearly marked as pending real content instead.

## Protected Files

Do not modify the following unless explicitly instructed:

- `data/` content values (project descriptions, links, bio text) — this is Raja's actual content, not placeholder text to edit freely.
- `tailwind.config.ts` color tokens, font configuration, and spacing scale — these encode the locked design decisions from `architecture.md` and `code-standards.md`.
- `app/opengraph-image.tsx` and `app/favicon.ico` once implemented — these define the finalized brand identity.
- Any third-party library internals (e.g. `node_modules`, generated Next.js build output).
- `next-themes` configuration once working — do not alter theme-switching behavior to "improve" it without instruction, since FOUC prevention is fragile and easy to break.

## Keeping Docs in Sync

Update the relevant context file whenever implementation changes something it describes:

- Update `architecture.md` if the stack, folder responsibilities, storage model, or any invariant changes.
- Update `code-standards.md` if a new coding convention is adopted or an existing rule is changed.
- Update `project-overview.md` if scope changes, a feature is added or removed, or the core user flow changes.
- Never let a context file silently go stale. If a change contradicts what a context file says, update the file in the same step as the code change, not later.

## Before Moving to the Next Unit

1. The current unit works end to end within its defined scope, verified manually in the browser in both light and dark mode.
2. No invariant defined in `architecture.md` was violated.
3. No rule defined in `code-standards.md` was violated.
4. The unit's "done" criteria from `project-overview.md`'s Process section is fully met, not partially met.
5. `npm run build` passes with no errors or type errors.
6. No unrelated files were modified as a side effect of this unit's work.