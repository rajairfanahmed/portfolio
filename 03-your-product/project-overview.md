# Raja Irfan Ahmed Portfolio

## Overview

This is a personal portfolio website for Raja Irfan Ahmed. It is a fully static Next.js App Router site with no backend, no database, and no authentication. It exists so recruiters and hiring managers can judge real work quickly across four public routes: Home (executive hook), Projects (technical evidence), About (engineering mindset), and Contact (clean conversion). The visual system is a layered cinematic dark mode (obsidian canvas, charcoal cards) that stays persistent while the visitor moves between pages. Unrelated content stays off the site so the pitch stays single-identity.

## Goals

1. Present Raja Irfan Ahmed through one positioning line: "Building Applications That Scale Brands."
2. Get recruiters to open real project proof (GitHub and live demo) as the primary evidence of skill.
3. Convert interest into contact (email, CV, LinkedIn, GitHub, or dev.to), with project quality as the driver rather than a contact form.
4. Load fast and score well on Core Web Vitals so a recruiter scanning many candidates is not blocked by the site.
5. Make the visual system itself evidence of frontend competence: layered dark surfaces, terminal motif, hot skill capsules, and fluid route transitions.

## Core User Flow

1. Recruiter lands on `/` and sees Raja Irfan Ahmed's name in ultra-bold display type, the line "Building Applications That Scale Brands.", window-chrome framing, hot skill capsules, View Projects, and Download CV. A viewport interaction score counts clicks, scrolls, and hovers.
2. Recruiter opens `/projects` and reviews featured work in a high-density asymmetric grid (intended set includes ThreatChain (FYP) and Aura Gemstones once those rows replace placeholders in `data/`).
3. Recruiter optionally opens `/about` for biography and principles inside a terminal motif, a bento of stack badges, and Experience/Education (BSCS, NUML Islamabad, 2026).
4. Recruiter opens `/contact` and emails `rajairfana551@gmail.com` via `mailto:`, downloads the CV from Google Drive, or opens LinkedIn, GitHub, or the dev.to profile.
5. Recruiter takes the primary action: contacting Raja Irfan Ahmed.

## Features

### Home (`/`) — Executive hook

- Name in massive ultra-bold grotesque type
- Positioning line "Building Applications That Scale Brands."
- macOS/Linux window control dots (red, yellow, green) and a terminal-style frame around the intro
- Hot capsule badges for core skills from `data/`
- View Projects routes to `/projects`
- Download CV opens the public Google Drive file
- Viewport interaction score (clicks, scrolls, hovers) in a corner; client state only; persists across client navigations; resets on full reload

### Projects (`/projects`) — Technical evidence

- Dedicated page, high-density asymmetric grid, not a cramped one-page strip
- Cards with edge-to-edge dark-mode mockups via `next/image`
- Hover: mockup scales inside the card; card border illuminates; card box does not shift
- Minimalist tech badges plus GitHub and live demo links from `data/`

### About (`/about`) — Developer's mindset

- Biography and engineering principles inside stylized terminal frames (Geist Mono prompt from the GitHub handle, for example `rajairfanahmed@dev:~/portfolio $ cat philosophy.py`)
- Bento of stack badges with Lucide glyphs on charcoal cards
- Alternating text blocks and visual stack grids
- Experience/Education, including BSCS at National University of Modern Languages, Islamabad, 2026

### Contact (`/contact`) — Clean conversion

- Massive bold header asking the visitor to start a conversation
- Vast darkspace. No decorative graphics competing with the action
- Direct high-contrast links: email, LinkedIn, GitHub, dev.to, Google Drive CV
- No third-party contact form

### Theming

- Default is cinematic dark: obsidian `#0A0A0A` canvas, charcoal `#141414` cards
- Light is a secondary paper theme so the existing Sun/Moon toggle still works
- `next-themes`, no FOUC, persistent obsidian (or paper) while routes change — no white flash

### Motion

- Route transitions: background stays; content fades/morphs with spring physics (`mass: 0.8`, `stiffness: 250`, `damping: 24`)
- `active:scale-95` on controls
- Text links show a glowing underline on hover
- Project-card hover scale is `transform` only
- No scroll-jacking, no parallax, no custom cursor

### Accessibility

- Visible `focus-visible` on every interactive control
- `active:scale-95` on click/tap
- Interaction score is `aria-live="polite"` and is not required to use the site

### Metadata

- Custom Open Graph image, 1200x630, via `opengraph-image.tsx` and `@vercel/og`
- Geometric favicon using the hot accent on obsidian

## Scope

### In Scope

- Fully static public site, no authentication
- Four App Router routes: `/`, `/projects`, `/about`, `/contact`
- Hardcoded project and content data; updates ship by redeploy
- Cinematic dark default plus a light paper theme
- Framer Motion route transitions and local hover scale
- Project grid with mobile, tablet, and desktop breakpoints
- `mailto:` contact and Google Drive CV
- Client-only interaction score
- Custom OG image, favicon, and per-route metadata
- Performance work aimed at Core Web Vitals
- Experience/Education on About

### Out of Scope

- Blog or articles
- Testimonials
- Multi-language support
- CMS or admin panel
- Dynamic resume builder
- Backend, database, or any app-owned storage
- User accounts or login
- Contact form services (Formspree, EmailJS, or similar)
- Quora and Linktree links
- AI inference, model calls, or background jobs on this site
- WebGL, Three.js, Barba.js, magnetic custom cursors, or canvas hover shaders
- Persisting the interaction score on a server

## Success Criteria

1. The live site is a static Next.js deploy on Vercel with no backend or database dependency.
2. Dark is the default cinematic theme. Light still works. Route changes do not flash white.
3. `/projects` shows the featured set at mobile, tablet, and desktop, with working GitHub and live demo links.
4. The CV link opens the Google Drive file under "Anyone with the link can view".
5. The `mailto:` link opens a mail client with `rajairfana551@gmail.com` filled in.
6. Home, project-card hover, and route motion run without visible jank on a phone.
7. Keyboard Tab reaches every interactive control and shows a visible focus state.
8. Sharing a URL (for example on LinkedIn) shows the custom 1200x630 Open Graph image.
9. Lighthouse/PageSpeed scores 90 or above for Performance, Accessibility, Best Practices, and SEO.
