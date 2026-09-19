# Progress Tracker

## Current Phase

Next job

## Current Goal

`/verify` job `02-theme-and-layout` on https://rajairfanahmed.vercel.app/

## Completed

- Job `01-project-setup` shipped
- Recipe `03-your-product/02-theme-and-layout.md`
- `/develop` for `02-theme-and-layout`: `next-themes` 0.4.6, `ThemeProvider`, `ThemeToggle`, section container on root `<main>`

## In Progress

- None. Source for job `02` is in the tree. Waiting for `/verify` (needs a commit and push so Vercel can pick it up).

## Next Up

- `/verify` `02-theme-and-layout` on https://rajairfanahmed.vercel.app/
- Then `/debug` if red, `/audit`, `/ship`

## Open Questions

- Real project set and flagship card are still open. Placeholder rows in `data/` are approved until Raja replaces them.
- Real experience wording is still open. Education is locked: BSCS, National University of Modern Languages, Islamabad, 2026.
- Skills list and bio are not locked. Placeholder strings in `data/` are approved until Raja replaces them.
- Profile photo file is not in the repo yet. Job `03-hero-section` will need it in `public/`.

## Session Notes

- Job `02` added `components/theme-provider.tsx` and `components/theme-toggle.tsx` only. Home page still shows `{site.name}` with no Hero, About, Projects, or Contact.
- Lint, `tsc --noEmit`, and `npm run build` were green locally. Do not add Framer Motion or `@vercel/og` in this job.
- `npm install` needed the Next.js dev server stopped (EBUSY on the lightningcss Windows binary). Do not add Windows-only packages to `package.json`.
