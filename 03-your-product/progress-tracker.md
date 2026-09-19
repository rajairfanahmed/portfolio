# Progress Tracker

## Current Phase

Next job

## Current Goal

`/architect` job `02-theme-and-layout`

## Completed

- Brief files in `03-your-product`
- Job `01-project-setup` shipped
- Live URL https://rajairfanahmed.vercel.app/ is the scaffold (name heading only)
- `/audit` after scaffold: `03-your-product` matches the real tree

## In Progress

- None

## Next Up

- `/architect` `02-theme-and-layout`

## Open Questions

- Real project set and flagship card are still open. Placeholder rows in `data/` are approved until Raja replaces them.
- Real experience wording is still open. Education is locked: BSCS, National University of Modern Languages, Islamabad, 2026.
- Skills list and bio are not locked. Placeholder strings in `data/` are approved until Raja replaces them.
- Profile photo file is not in the repo yet. Job `03-hero-section` will need it in `public/`.

## Session Notes

- `/verify` 2026-09-19: live page title `Raja Irfan Ahmed`, one `h1`, 0 links, 0 buttons. Computed `background rgb(250, 250, 250)`, `color rgb(9, 9, 11)`, font `GeistSans`. `/api` is 404. `app/page.tsx` uses `{site.name}`. Local `npm run build` exit 0 after restoring the lightningcss Windows binary in `node_modules` (not added to `package.json`).
- `/debug`: local build failed on missing `lightningcss.win32-x64-msvc.node` after a TLS-broken optional install. Did not add a Windows-only package to `package.json`.
- `/audit`: architecture already had the live URL and real commands. Folders still `app/` + `data/` only. No `AGENTS.md` rewrite.
- `/ship`: `01-project-setup` marked Done. Next job is `02-theme-and-layout`. Job `02` was not started.
