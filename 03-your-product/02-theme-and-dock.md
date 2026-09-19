# Unit 02: theme-and-dock

# Goal

- Root layout applies `next-themes` Obsidian/Bone tokens with no FOUC, and a floating glassmorphic dock sits on every route with Home, Projects, Skills, About, Contact, a Resume control, a theme toggle, magnetic hover, and a Framer Motion `layoutId` active pill.
- This job does not build the home hero, bento, timeline, skills matrix, about narrative, contact grid, command palette, page `AnimatePresence`, or Open Graph images.

# Design

- Visual: Dark tokens on `.dark` (Obsidian `#050506` / charcoal `#0A0A0C`). Light tokens on `:root` (Bone `#FCFCFD` / paper `#FFFFFF`). Dock is `rounded-2xl`, `backdrop-blur-xl`, milled dual border, `fixed` `top-6` from `md` up and `bottom-6` on small viewports. Active route uses `layoutId="activePill"` with spring `{ mass: 0.8, stiffness: 250, damping: 24 }`. Theme class swap is instant (`disableTransitionOnChange`). Toggle icon may Framer-cross-fade. No hardcoded hex in component classes.
- Content: Route labels are Home, Projects, Skills, About, Contact. Resume reads `site.cvUrl` from `@/data` and opens `target="_blank" rel="noopener noreferrer"`. Theme toggle has an action `aria-label`. Home still shows only `{site.name}` from job `01`.
- API: none. No `app/api`, no Server Actions, no env vars.
- Follow `03-your-product/ui-context.md` and `03-your-product/architecture.md`.
- Blast radius: `app/globals.css`, `app/layout.tsx`, `components/theme-provider.tsx`, `components/theme-toggle.tsx`, `components/floating-dock.tsx`, `lib/motion.ts`. Must not restyle leftover page bodies into hero/bento/contact. Must not add `Cmd+K`, `@vercel/og`, a database, auth, or a contact form. Must not overwrite discipline folders `01-start-here` through `05-slash-commands`.
- Rollback: restore app files from git commit `9154940` (`01-project-scaffold`).

# Implementation

1. Keep the app in this repository root. Do not create a nested Next.js folder. Do not overwrite the discipline `README.md`.
2. Do not install new packages unless missing. `next-themes`, `lucide-react`, and `framer-motion` are already in `package.json`. Mount them in this job. Do not add Clash Display or `@vercel/og`.
3. In `app/globals.css`, define only the semantic variables from `03-your-product/ui-context.md` for light on `:root` and dark on `.dark`. Map them for Tailwind (`bg-base` / `bg-[var(--bg-base)]` and the rest). No second token set. No leftover orange window-chrome tokens.
4. Confirm `lib/motion.ts` exports the locked spring (`mass: 0.8, stiffness: 250, damping: 24`). Reuse it. Do not introduce linear easings on dock or toggle.
5. Mount `ThemeProvider` in `app/layout.tsx`: `attribute="class"`, `defaultTheme="dark"`, `enableSystem`, `disableTransitionOnChange`. `suppressHydrationWarning` on `<html>`. Body uses token background and `--text-main`. Keep Geist variables and a single `<main>` for page children. Dock stays outside any future page transition wrapper so it does not unmount on route change.
6. Rewrite `components/floating-dock.tsx` as a client component. `aria-label` on `<nav>`. Links: `/`, `/projects`, `/skills`, `/about`, `/contact` with those labels. `usePathname` for the active pill (`layoutId="activePill"`). Hit area at least 44×44px. `active:scale-95`. `focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:outline-none`. Magnetic hover: on pointer devices, translate the hovered pill toward the cursor on `transform` only; on touch, skip magnetic motion and keep tap/active scale.
7. Resume control in the same dock: Lucide icon optional (`w-4 h-4` or `w-5 h-5`, `--text-muted` default). `href={site.cvUrl}` from `@/data`. New tab. Same 44px and focus rules.
8. Theme toggle in the same dock (not a separate top-right control). Lucide `Sun` / `Moon`. `aria-label` states the action. Same 44px, focus, and `active:scale-95`.
9. Do not implement `<AnimatePresence mode="wait">` page cross-fades (job `03`). Do not remount interaction-score chrome. Do not restyle leftover `/projects`, `/skills`, `/about`, `/contact` bodies beyond inheriting the new tokens. Do not add those routes if they were missing; they already exist.
10. Confirm there is still no `app/api`, no secrets, no database client.
11. Run lint, types, and `npm run build`. All must be green before push.

# Dependencies

- Job `01-project-scaffold` (Done)
- GitHub: https://github.com/rajairfanahmed/portfolio
- Vercel: https://rajairfanahmed.vercel.app/

# Verify when done

- [x] https://rajairfanahmed.vercel.app/ loads
- [x] Background is Obsidian `#050506` in dark (default) and Bone `#FCFCFD` after toggling to light
- [x] A glass dock is visible at the top on desktop and the bottom on a narrow viewport
- [x] Dock shows Home, Projects, Skills, About, Contact, Resume, and a theme toggle
- [x] The active pill springs to Home on `/` and to another label after clicking that link
- [x] Resume opens the CV in a new tab
- [x] Theme toggle switches light ↔ dark with no unstyled flash
- [x] Home still shows only the name heading (no hero, bento, or contact form)
- [x] Tab reaches every dock control; focus ring is 2px accent
- [x] Dock pills are at least 44×44px
- [x] `npm run build` passes
- [x] UX floor that applies: keyboard path and visible focus; 44px targets; WCAG 2.2 AA contrast from these tokens only; no new form; no second token set
- [x] API floor that applies: no list endpoint; no secrets; Resume is an outbound link only; build command is `npm run build`
