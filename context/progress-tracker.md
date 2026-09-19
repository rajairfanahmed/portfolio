# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- Not started

## Current Goal

- Unit 1 — Scaffolding & foundation: Next.js project setup, Tailwind config with zinc neutrals + indigo accent + Geist Sans/Mono wired in, `next-themes` integration for dark/light mode, base layout with container widths and spacing scale established.

## Completed

- None yet.

## In Progress

- None yet.

## Next Up

- Unit 1 — Scaffolding & foundation
- Unit 2 — Static content layer (data file for projects, bio, skills, links)
- Unit 3 — Hero section
- Unit 4 — About/skills snapshot
- Unit 5 — Projects bento grid
- Unit 6 — Experience/education (if included)
- Unit 7 — Contact section
- Unit 8 — Motion pass
- Unit 9 — Metadata, favicon, OG image
- Unit 10 — Performance & accessibility audit

## Open Questions

- Which specific 3-5 projects will be featured, and which one is the flagship (`col-span-2 row-span-2`), is still undecided. Raja will build/finalize real projects later — placeholder/random project data will be used in `data/` for Unit 2 and replaced before launch.
- Exact Experience entry wording is still undecided — placeholder/random content will be used for now and finalized later.

## Architecture Decisions

- Fully static Next.js site with no backend, database, storage layer, or authentication — chosen because the project needs no dynamic data and static deployment maximizes speed (see `architecture.md`).
- Project content hardcoded in `data/` rather than a CMS — chosen for simplicity at this scale; content changes are infrequent enough to justify manual redeploys.
- `mailto:` link chosen over a form service (Formspree/EmailJS) as the sole contact mechanism — chosen to avoid any backend dependency, at the cost of slightly more friction than an in-page form.
- CV hosted externally on Google Drive rather than bundled in the repo — chosen to avoid bloating the static build with a binary asset that changes independently of the code.
- No component library (no shadcn/ui) — chosen to keep the bundle minimal and avoid inheriting a third-party design system, consistent with the custom 2026 bento-grid aesthetic.

## Session Notes

- Full project spec is split across `project-overview.md`, `architecture.md`, `code-standards.md`, `ai-workflow-rules.md`, and `ui-context.md`. Read all five before resuming work.
- Build order must follow the 10 units listed under "Next Up" — do not skip ahead or reorder without updating this file first.
- Design direction (colors, typography, bento grid, motion) is fully locked in `ui-context.md`. Do not revisit these decisions without explicit instruction.
- Hero positioning statement decided: "Full Stack AI Web Apps Developer" (Raja's own phrasing, not open for reinterpretation).
- Experience/Education section is confirmed in scope. Education entry: BSCS, National University of Modern Languages, Islamabad — 2026. Experience entry: placeholder for now, real content to follow.
- Dev community profile confirmed active and in scope for Contact — URL to be supplied before Unit 7.
- Google Drive CV sharing permission confirmed set to "Anyone with the link can view."
- All real Contact links finalized and ready for `data/`: email `rajairfana551@gmail.com` (mailto:), LinkedIn (https://www.linkedin.com/in/rajairfanahmed/), GitHub (https://github.com/rajairfanahmed), dev community profile (https://dev.to/rajairfanahmed), CV (https://drive.google.com/file/d/1CRblzPL3j8W6mv06d6FzW-zujSwqs9tN/view?usp=drive_link).