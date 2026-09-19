# Progress Tracker

## Current Phase

Next job

## Current Goal

`/verify` job `01-project-setup` on https://rajairfanahmed.vercel.app/ after this push deploys.

## Completed

- Brief files in `03-your-product`
- Recipe `03-your-product/01-project-setup.md`
- Local `01-project-setup` implementation
- Local lint, types, and `npm run build` green

## In Progress

- `/debug`: live URL still served the previous portfolio because job 01 was never on `origin/main`. Pushing the scaffold (no new features).

## Next Up

- `/verify` on https://rajairfanahmed.vercel.app/
- Then `/ship` if the live page is the scaffold only
- Do not start `02-theme-and-layout` until `01` is shipped

## Open Questions

- Real project set and flagship card are still open. Placeholder rows in `data/` are approved until Raja replaces them.
- Real experience wording is still open. Education is locked: BSCS, National University of Modern Languages, Islamabad, 2026.
- Skills list and bio are not locked. Placeholder strings in `data/` are approved until Raja replaces them.
- Profile photo file is not in the repo yet. Job `03-hero-section` will need it in `public/`.

## Session Notes

- `/debug` 2026-09-19: reproduced old Hero / Featured Work / Say Hello on Vercel. Located unpushed working tree vs `31104e2`. Smallest fix is commit + push of the existing scaffold.
- Job `02` is not started.
