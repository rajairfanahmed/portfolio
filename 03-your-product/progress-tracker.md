# Progress Tracker

## Current Phase

Next job

## Current Goal

Push job `01-project-scaffold` and confirm https://rajairfanahmed.vercel.app/ is the boot proof only. Do not start job `02`.

## Completed

- Job `01-project-scaffold` implemented locally. Lint, types, and `npm run build` are green. Local `/` shows only `site.name` (`Raja Irfan Ahmed`) in Geist Sans. Not marked done in `00-build-plan.md` until the Vercel URL is confirmed.
- Job `01-project-setup` shipped (previous plan)
- Job `02-theme-and-layout` shipped on https://rajairfanahmed.vercel.app/ (previous plan)
- Job `03-home-page` shipped locally (previous plan)
- Job `04-projects-page` shipped on live Vercel URL (previous plan)
- Job `05-about-page` shipped on live Vercel URL (previous plan)
- Job `06-contact-page` shipped on live Vercel URL (previous plan)
- Job `07-motion-and-transitions` shipped on live Vercel URL (previous plan)
- Job `08-seo-and-metadata` shipped on live Vercel URL (previous plan)
- Job `09-global-navigation` shipped locally (previous plan)
- Job `10-theme-and-depth` shipped locally (previous plan)

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
- Framer Motion is installed but not mounted. Dock and Obsidian/Bone tokens are job `02`.
- Local `/debug` recovered the home boot proof after a stale `.next` from running `npm run build` while `next dev` was up. Live Vercel is still commit `fc81446` (`10-theme-and-depth`) because the scaffold is uncommitted.
