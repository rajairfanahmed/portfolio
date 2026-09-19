# Progress Tracker

## Current Phase

Next job

## Current Goal

`/verify` job `03-home-page-and-transitions` on https://rajairfanahmed.vercel.app/. Do not start job `04`.

## Completed

- Job `02-theme-and-dock` shipped on https://rajairfanahmed.vercel.app/ (`1ccddb9`). Obsidian/Bone tokens, glass dock on every route (five labels, Resume new tab, theme toggle, magnetic hover, `layoutId` pill). Home is still the name heading only.
- Job `01-project-scaffold` shipped on https://rajairfanahmed.vercel.app/ (`ab0d438`). Home is the boot proof only: `{site.name}` from `@/data`, Geist Sans, no dock or theme toggle.
- Job `01-project-setup` shipped (previous plan)
- Job `02-theme-and-layout` shipped (previous plan)
- Job `03-home-page` shipped (previous plan)
- Job `04-projects-page` shipped (previous plan)
- Job `05-about-page` shipped (previous plan)
- Job `06-contact-page` shipped (previous plan)
- Job `07-motion-and-transitions` shipped (previous plan)
- Job `08-seo-and-metadata` shipped (previous plan)
- Job `09-global-navigation` shipped (previous plan)
- Job `10-theme-and-depth` shipped (previous plan)

## In Progress

- None

## Next Up

- `/verify` job `03-home-page-and-transitions`

## Open Questions
- Real project rows are not locked. Intended titles named by Raja: ThreatChain (FYP) and Aura Gemstones. Still needed before job `04`: problem line, tags, GitHub URL, live demo URL, mockup file, which card is flagship.
- Remaining featured projects beyond those two are still open.
- Real experience wording is still open. Education is locked: BSCS, National University of Modern Languages, Islamabad, 2026.
- Skills list and bio are not locked. Placeholder strings in `data/` are approved until Raja replaces them. Python / Django / Flutter vs Next.js / MongoDB / AWS were examples in the brief, not a locked stack.
- Profile photo is not on Home. If About should show one, Raja must add the file to `public/` and a path on `data/`. Do not generate a portrait.
- Display type uses Geist Black (already installed). Do not add Clash Display or PP Neue Montreal unless Raja asks.

## Session Notes

- Job `01-project-scaffold` added `zod`, `@/lib/validations`, and a Zod-parsed `@/data` site object. Home and root layout are a boot proof only: no dock, theme toggle, or hero.
- Leftover previous-plan routes (`/projects`, `/skills`, `/about`, `/contact`) were not restyled into later-job layouts. Job `02` only applies shared tokens and the dock.
- Framer Motion is mounted on the dock (`layoutId` pill, magnetic translate, theme icon fade). Page `AnimatePresence` is still job `03`.
- `/verify` passed on https://rajairfanahmed.vercel.app/ for job `02-theme-and-dock`.
- Recipe written: `03-your-product/03-home-page-and-transitions.md`. Home’s five overview sections plus `AnimatePresence mode="wait"`. Copy stays on `@/data` placeholders. Leftover `/projects` body and `Cmd+K` are out of this job.
- Job `03` implemented locally: Home hero, selected-work bento, timeline snapshot, current focus, Contact conversion, page cross-fade wrapper. Removed leftover `hero.tsx`, `interaction-score.tsx`, `transition-wrapper.tsx`, and unused `portfolio-kit.svg`. Leftover `/projects`, `/skills`, `/about`, `/contact` still load. Not marked done until `/verify` on Vercel.
