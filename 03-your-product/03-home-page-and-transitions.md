# Unit 03: home-page-and-transitions

# Goal

- The `/` route renders the five Home sections from `03-your-product/project-overview.md` (Hero, Selected Work, Experience & Education Snapshot, Current Focus, Quick Conversion) from `@/data`, and `<AnimatePresence mode="wait">` cross-fades page children on every route while the dock stays mounted.
- This job does not build the full `/projects` gallery, skills matrix, about narrative, contact grid, command palette, Open Graph images, a timezone clock, or a contact form.

# Design

- Visual: Hero uses Geist Black (`font-black` / weight 900) and `tracking-tight` or `-0.05em` for `{site.name}`; `{site.positioning}` is the value proposition in body Geist. Entrance motion is spring `{ mass: 0.8, stiffness: 250, damping: 24 }` on `opacity` and `transform` only. Selected Work is a 12-column milled bento of the two `flagship: true` projects, collapsing to 2 columns at `md` and 1 column on small viewports, container capped at `max-w-7xl`. Cards use the existing dual-border mill, `rounded-2xl`, `aspect-video` media with `overflow-hidden`; inner media may spring to `scale: 1.02` on pointer hover; touch skips hover physics and keeps `active:scale-95`. Timeline is a vertical snapshot driven by `useScroll` (progress on `transform`/`opacity` only). Page cross-fade: `AnimatePresence mode="wait"`, `key={pathname}`, same spring, no white flash, no `filter` blur. No hardcoded hex in component classes. No leftover window-chrome dots or skill-chip soup on Home.
- Content: Read only `@/data`. Hero: `site.name`, `site.positioning`. Selected Work heading `Selected Work`; cards show each flagship `title`, one-line `description`, `tags` in Geist Mono, GitHub and Live Demo using `githubUrl` / `demoUrl` with `target="_blank" rel="noopener noreferrer"`. Do not add a third project. Do not rewrite placeholder copy. Timeline shows `site.experience` and locked education (BSCS, National University of Modern Languages, Islamabad, 2026) with `<time>` and `tabular-nums` on dates. Current Focus is `site.currentFocus`. Quick Conversion is an internal `Link` to `/contact` whose visible label is `Contact` (same word as the dock). If a list is empty, one short empty sentence; no spinner. Do not invent CTA slogans, extra experience rows, or mockup artwork.
- API: none. No `app/api`, no Server Actions, no env vars, no runtime fetch.
- Follow `03-your-product/ui-context.md` and `03-your-product/architecture.md`.
- Blast radius: `app/page.tsx`, `app/layout.tsx` (wrap page children only), `components/page-transition.tsx` or a rewrite of leftover `components/transition-wrapper.tsx`, Home section leaves under `components/` (hero / selected-work / timeline / current-focus / conversion as needed). Must not restyle leftover `/projects`, `/skills`, `/about`, `/contact` bodies into their later-job layouts. Must not rewrite `components/project-card.tsx` (that leftover card is job `04`). Must not remount `components/interaction-score.tsx`, `components/terminal-frame.tsx`, or the previous-plan window-chrome Hero. Must not add `Cmd+K`, `@vercel/og`, Clash Display, a database, auth, or a contact form. Must not overwrite discipline folders `01-start-here` through `05-slash-commands`. Dock stays outside the transition wrapper so it does not unmount.
- Rollback: restore app files from git commit `1ccddb9` (`02-theme-and-dock`).

# Implementation

1. Keep the app in this repository root. Do not create a nested Next.js folder. Do not overwrite the discipline `README.md`.
2. Do not install new packages. `framer-motion` is already mounted on the dock. Reuse `lib/motion.ts` (`springPhysics`). Do not add Clash Display or `@vercel/og`.
3. Add a client page-transition wrapper around `{children}` inside the existing `<main>` in `app/layout.tsx`. Use `<AnimatePresence mode="wait">` and `usePathname` as `key`. Animate `opacity` and a small `transform` only. Do not nest a second `<main>`. Do not wrap `FloatingDock`. Do not use linear easings or blur filters (leftover `TransitionWrapper` blur/`<main>` must not ship).
4. Rewrite `app/page.tsx` as a Server Component that composes the five Home sections. `"use client"` only on leaves that need motion, `useScroll`, or pointer hover.
5. Hero: `{site.name}` as the only `h1`, Geist Black, massive type, tracking-tight. `{site.positioning}` under it. Spring entrance. No skill capsules, no window chrome, no Download CV button (Resume stays on the dock).
6. Selected Work: `site.projects.filter((p) => p.flagship)` — ThreatChain (FYP) and Aura Gemstones. 12-column asymmetric bento, milled cards, `next/image` on existing `imageSrc` (`/projects/threatchain.svg`, `/projects/aura-gemstones.svg`) with hardcoded `aspect-video`. GitHub and Demo are 44×44px hit areas, new tab, `aria-label` that includes the project title. Pointer hover may scale inner media `1.02` and use a `usePointer` radial glow clipped to the card; touch devices skip that. Do not use leftover `ProjectCard` (it would restyle `/projects`). Do not add `public/projects/portfolio-kit.svg` as a project.
7. Experience & Education Snapshot: render `site.experience` then `site.education`. Semantic list with `<time>`. Scroll-linked progress via `useScroll` + the locked spring on composited properties. Do not invent a second experience employer. Do not build the full About IDE narrative (job `06`).
8. Current Focus: `site.currentFocus` as a short text block. No extra paragraphs.
9. Quick Conversion: internal `Link` to `/contact`, label `Contact`, 44×44px minimum, `focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:outline-none`, `active:scale-95`. Not `mailto:` and not `target="_blank"`.
10. Home sections sit in one `<main>` (already in the layout). `max-w-7xl`, no horizontal scroll down to 320px. Tokens from `ui-context.md` only.
11. Leave leftover route files’ inner layouts alone. They must still load and keep the dock; they pick up the cross-fade from the layout wrapper only.
12. Confirm there is still no `app/api`, no secrets, no database client, no `Cmd+K`.
13. Run lint, types, and `npm run build`. All must be green before push.

# Dependencies

- Job `02-theme-and-dock` (Done)
- GitHub: https://github.com/rajairfanahmed/portfolio
- Vercel: https://rajairfanahmed.vercel.app/

# Verify when done

- [ ] https://rajairfanahmed.vercel.app/ loads
- [ ] Hero shows `Raja Irfan Ahmed` in large Geist Black type and `Building Applications That Scale Brands.` under it
- [ ] Selected Work shows only ThreatChain (FYP) and Aura Gemstones as milled cards
- [ ] Each card’s GitHub and Demo controls open a new tab
- [ ] Timeline snapshot includes BSCS at National University of Modern Languages, Islamabad, 2026, and the existing Full Stack Developer row
- [ ] Current Focus text from `@/data` is visible
- [ ] A Contact control on Home goes to https://rajairfanahmed.vercel.app/contact (same tab)
- [ ] The glass dock stays visible while clicking Home → Projects → Home; the page body cross-fades and there is no white flash
- [ ] `/projects` still looks like the leftover gallery, not a new 12-column job-`04` bento
- [ ] No command palette, no contact form, no window-chrome dots on Home
- [ ] Tab reaches Home links and cards; focus ring is 2px accent; tap targets are at least 44×44px
- [ ] Narrow viewport: Selected Work is one column; dock stays at the bottom
- [ ] `npm run build` passes
- [ ] UX floor that applies: keyboard path and visible focus; 44px targets; empty sentence only if a list is empty; no new form; no second token set; no unbounded skills list on Home
- [ ] API floor that applies: no list endpoint; no secrets; GitHub/Demo/Resume stay outbound links; Contact on Home is an internal route; build command is `npm run build`
