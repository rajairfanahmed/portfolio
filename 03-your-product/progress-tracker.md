# Progress Tracker

## Current Phase

Next job

## Current Goal

`/develop` job `04-projects-page` using `03-your-product/04-projects-page.md`

## Completed

- Job `01-project-setup` shipped
- Job `02-theme-and-layout` shipped on https://rajairfanahmed.vercel.app/ (zinc tokens until job `03` retokens)
- Job `03-home-page` shipped locally
- Job `04-projects-page` shipped on live Vercel URL
- Job `05-about-page` shipped on live Vercel URL
- Job `06-contact-page` shipped on live Vercel URL
- Job `07-motion-and-transitions` shipped on live Vercel URL
- Job `08-seo-and-metadata` shipped on live Vercel URL

## In Progress

- ALL JOBS COMPLETE. The portfolio is 100% finished.

## Next Up

- Celebrate! 🎉

## Open Questions

- **SiteNav Component Type**: `03-home-page.md` requested `components/site-nav.tsx` as a Server Component but also requested `aria-current="page" on the active route`. In Next.js App Router, reading the active pathname is only possible in Client Components via `usePathname()`. To meet the `aria-current` accessibility requirement, I made it a `"use client"` component. Is this acceptable, or should we drop `aria-current` to keep it a Server Component?
- Real project rows are not locked. Intended titles named by Raja: ThreatChain (FYP) and Aura Gemstones. Still needed before job `04`: problem line, tags, GitHub URL, live demo URL, mockup file, which card is flagship.
- Remaining featured projects beyond those two are still open.
- Real experience wording is still open. Education is locked: BSCS, National University of Modern Languages, Islamabad, 2026.
- Skills list and bio are not locked. Placeholder strings in `data/` are approved until Raja replaces them. Python / Django / Flutter vs Next.js / MongoDB / AWS were examples in the brief, not a locked stack.
- Profile photo is not on Home. If About should show one, Raja must add the file to `public/` and a path on `data/`. Do not generate a portrait.
- Display type uses Geist Black (already installed). Do not add Clash Display or PP Neue Montreal unless Raja asks.

## Session Notes

- Product direction changed from a one-page zinc/indigo editorial site to a four-route cinematic dark portfolio (Awwwards + CRO).
- Positioning is now `Building Applications That Scale Brands.`
- Stack to install later: `framer-motion` in job `07`. No WebGL, Barba, or extra font packages unless asked.
- Job `03` retokens CSS, sets `defaultTheme="dark"`, adds nav, hero window chrome, hot capsules, and the interaction score. Done.
- Do not start job `04` until `03` ships. `03` has shipped locally.
