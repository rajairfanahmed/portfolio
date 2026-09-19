# Progress Tracker

## Current Phase

Next job

## Current Goal

Push job `02-theme-and-dock` and confirm https://rajairfanahmed.vercel.app/ shows the glass dock. Do not start job `03`.

## Completed

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

- Confirm live Vercel after push, then `/verify`

## Open Questions
- Real project rows are not locked. Intended titles named by Raja: ThreatChain (FYP) and Aura Gemstones. Still needed before job `04`: problem line, tags, GitHub URL, live demo URL, mockup file, which card is flagship.
- Remaining featured projects beyond those two are still open.
- Real experience wording is still open. Education is locked: BSCS, National University of Modern Languages, Islamabad, 2026.
- Skills list and bio are not locked. Placeholder strings in `data/` are approved until Raja replaces them. Python / Django / Flutter vs Next.js / MongoDB / AWS were examples in the brief, not a locked stack.
- Profile photo is not on Home. If About should show one, Raja must add the file to `public/` and a path on `data/`. Do not generate a portrait.
- Display type uses Geist Black (already installed). Do not add Clash Display or PP Neue Montreal unless Raja asks.

## Session Notes

- Job `01-project-scaffold` added `zod`, `@/lib/validations`, and a Zod-parsed `@/data` site object. Home and root layout are a boot proof only: no dock, theme toggle, or hero.
- Leftover previous-plan routes (`/projects`, `/skills`, `/about`, `/contact`) were not restyled. Data field access was updated so `npm run build` stays green (`imageSrc`, `skill.name`).
- Framer Motion is mounted on the dock (`layoutId` pill, magnetic translate, theme icon fade). Page `AnimatePresence` is still job `03`.
- Job `02-theme-and-dock` implemented locally. Obsidian/Bone tokens, glass dock (five routes, Resume, theme toggle, magnetic hover, `layoutId` pill). Lint, types, and `npm run build` are green. Not marked done until the Vercel URL is confirmed.
