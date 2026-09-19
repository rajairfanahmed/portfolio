# Raja Irfan Ahmed Portfolio

## Overview

This is a personal portfolio website for Raja Irfan Ahmed. It is a fully static Next.js App Router site with no backend, no database, and no authentication. It exists so recruiters and hiring managers can judge real work quickly across five public routes: Home (executive hook), Projects (technical evidence), Skills (production capabilities), About (engineering mindset), and Contact (clean conversion). The visual system is a layered cinematic 2026 dark mode featuring spatial depth, milled borders, and a floating dynamic dock. Unrelated content stays off the site so the pitch stays single-identity.

## Goals

1. Present Raja Irfan Ahmed through one positioning line: "Building Applications That Scale Brands."
2. Get recruiters to open real project proof (GitHub and live demo) as the primary evidence of skill.
3. Convert interest into contact (email, CV, LinkedIn, GitHub, or dev.to), with project quality as the driver rather than a contact form.
4. Load fast and score well on Core Web Vitals (90+), ensuring premium physics do not degrade Lighthouse scores.
5. Make the visual system itself evidence of frontend competence: spatial depth, hardware-accelerated spring physics, magnetic cursor glows, and zero layout shifts.

## Core User Flow

1. Recruiter lands on `/` and sees Raja Irfan Ahmed's name in massive typography freed from a box, window-chrome framing, hot skill capsules, a "Selected Work" preview, and a "Current Focus" section.
2. Recruiter navigates using the floating dynamic dock to `/projects` and reviews featured work in an asymmetrical 12-column grid with interactive 1px milled borders and magnetic glows.
3. Recruiter opens `/skills` to browse a high-density data table/command palette of production-ready tools.
4. Recruiter optionally opens `/about` to read the IDE-themed bio and scroll down a glowing vertical timeline for education (BSCS, NUML Islamabad, 2026).
5. Recruiter opens `/contact` to a 2x2 bento grid of tactile action cards featuring a live PKT timezone clock and a glowing "Status: Available" indicator, taking the primary action.

## Features

### Global Navigation & Layout Architecture
- Centered, glassmorphic floating dynamic dock (`backdrop-blur-xl`, `bg-white/5`). Top-6 desktop, bottom-6 mobile.
- Active Route Morphing via Framer Motion `layoutId` pill gliding smoothly behind the active route name.
- Seamless page transitions wrapping `<main>` in `<AnimatePresence mode="wait">` to prevent white flashes.

### Home (`/`) — Executive hook
- Name in massive ultra-bold grotesque type (Geist Black), directly on the background.
- "Selected Work" bento preview showing two flagship projects.
- "Current Focus" section highlighting ongoing full-stack AI web app development.
- Viewport interaction score in a corner.

### Projects (`/projects`) — Technical evidence
- 12-column asymmetrical grid.
- Top 60% of cards house an edge-to-edge high-fidelity UI mockup (or shimmering skeleton).
- Bottom 40% houses title, description, and tabular-nums/monospace tech tags.
- Hover: Inner image scales (`1.02`) inside an `overflow-hidden` container to avoid layout shifts, and the card's 1px border illuminates with a magnetic cursor glow.

### Skills (`/skills`) — Production capabilities
- High-density interactive data table or command-palette interface.
- Tools logically grouped (Frontend, Backend, AI Integrations).
- Subtle progress bars or "Production Ready" status indicators next to core competencies.

### About (`/about`) — Developer's mindset
- Modern IDE theme (VS Code or Zed style) for the bio with proper syntax highlighting.
- Glowing, vertical scroll-linked timeline for Experience and Education.

### Contact (`/contact`) — Clean conversion
- 2x2 bento grid of large, tactile action cards (Email, GitHub, LinkedIn, CV).
- Glowing green "Status: Available" indicator.
- Live PKT timezone clock for spatial grounding.

### Theming & Spatial Depth
- Dark mode base: Obsidian `#050506`. Elevated cards on deep charcoal `#0A0A0C`.
- Light mode base: Bone `#FCFCFD`. Pure white `#FFFFFF` cards elevated by a 4% opacity drop shadow.
- 1px Milled Borders: `box-shadow: inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.05)`.
- Typography: Massive, tightly-tracked grotesque (Geist Black) for headers. Monospace (Geist Mono) for technical tags.

### Premium 2026 Motion Physics
- Framer Motion spring physics override linear easing (`mass: 0.8, stiffness: 250, damping: 24`).
- Tactile depressions: `active:scale-95` on every button, link, and interactive card.
- Hardware Acceleration: Animating only GPU-composited properties (`transform`, `opacity`).
- Magnetic cursor glows: Radial gradient tracking `usePointer`, strictly masked within the 1px card border.

### Accessibility & Performance
- Zero CLS: Hardcode aspect ratios for all images and grids.
- Keyboard Supremacy: Strict 2px Electric Indigo (`#6366f1`) `:focus-visible` outline.
- Skeletons over spinners for hydration and loading.

## Scope

### In Scope
- Fully static public site, five App Router routes: `/`, `/projects`, `/skills`, `/about`, `/contact`
- Hardcoded project and content data
- Cinematic dark default plus a light paper/bone theme
- Floating dynamic dock with `layoutId` pill
- Framer Motion spring physics, magnetic glows, and scroll-linked timelines
- Custom OG image, favicon, and per-route metadata

### Out of Scope
- Backend, database, or any app-owned storage
- User accounts or login
- Contact form services
- Quora and Linktree links
- Persisting the interaction score on a server

## Success Criteria
1. The live site is a static Next.js deploy on Vercel with no backend or database dependency.
2. Floating dock, layoutId pill, and AnimatePresence cross-fades work perfectly at 60fps.
3. Every interactive control reacts with `active:scale-95` and shows an Electric Indigo outline on Tab focus.
4. Project cards showcase magnetic glows without shifting the layout on hover.
5. Lighthouse/PageSpeed scores 90 or above for Performance, Accessibility, Best Practices, and SEO.
