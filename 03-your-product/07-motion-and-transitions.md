# Unit 07: motion-and-transitions

# Goal

- Install `framer-motion` and implement fluid, physics-based route transitions.
- Ensure the obsidian/charcoal canvas remains persistent (no white flash) while the route content morphs/fades.
- Verify project-card hover scaling and active/hover states on all existing controls.

# Design

- **Visual**: The background color (`--bg-base`) must not transition or blink during route changes. Only the page content fades and slides.
- **Motion**: Route transitions use spring physics: `mass: 0.8`, `stiffness: 250`, `damping: 24`. Initial state is slightly lowered (`y: 20`) and transparent (`opacity: 0`).
- **Follow**: `03-your-product/ui-context.md`. "No scroll-jacking, no parallax, no custom cursor." "Never animate width, height, margin, or padding."
- **Blast radius**: `package.json` (installing `framer-motion`), `app/template.tsx` (new file for route transitions), `components/project-card.tsx` (to ensure the mockup image scales on hover), and `components/theme-toggle.tsx` (to ensure `active:scale-95` is present).
- **Rollback**: Delete `app/template.tsx`, `npm uninstall framer-motion`.

# Implementation

1. Run `npm install framer-motion`.
2. Create `app/template.tsx` (Client Component via `"use client"`). Next.js App Router remounts `template.tsx` on every route change, making it the perfect layer for route transitions (unlike `layout.tsx` which persists).
3. In `template.tsx`, wrap `children` in a `<motion.div>` with:
   - `initial={{ opacity: 0, y: 20 }}`
   - `animate={{ opacity: 1, y: 0 }}`
   - `transition={{ type: "spring", mass: 0.8, stiffness: 250, damping: 24 }}`
4. Review `components/project-card.tsx` to ensure the `next/image` scales up slightly (e.g., `group-hover:scale-105 transition-transform duration-500`) inside the `overflow-hidden` container, using only `transform` properties. The card box itself must not shift layout.
5. Review `components/theme-toggle.tsx` and ensure `active:scale-95` is present on the button.
6. Run lint, types, and `npm run build`.

# Dependencies

- Job `01-project-setup` (Done)
- Job `02-theme-and-layout` (Done)
- Job `03-home-page` (Done)
- Job `04-projects-page` (Done)
- Job `05-about-page` (Done)
- Job `06-contact-page` (Done)

# Verify when done

- [x] `framer-motion` is installed and in `package.json`
- [x] `app/template.tsx` exists and wraps content in a `motion.div`
- [x] Navigating between routes triggers the spring transition
- [x] The dark layout canvas does not flash white during route changes
- [x] Project card images scale (`group-hover:scale-105`) inside the card without layout shift
- [x] Theme toggle has `active:scale-95`
- [x] `npm run build` passes
- [x] UX floor that applies: keyboard path and visible focus are completely undisturbed
- [x] API floor that applies: fully static, build command is `npm run build`

