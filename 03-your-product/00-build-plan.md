# Build Plan

## Jobs

### 01-project-setup

- Goal: Next.js app exists with TypeScript, Tailwind tokens, Geist fonts, `lucide-react`, and a typed `data/` folder holding bio, skills, placeholder projects, placeholder experience, and contact links.
- Recipe: `03-your-product/01-project-setup.md`
- Dependencies: None
- Status: Done

### 02-theme-and-layout

- Goal: Root layout uses the section container, `next-themes` is wired, and a fixed top-right Sun/Moon toggle switches light and dark with no flash on load.
- Recipe: `03-your-product/02-theme-and-layout.md`
- Dependencies: `01-project-setup`
- Status: Done

### 03-home-page

- Goal: Obsidian/charcoal tokens are the default dark canvas, `defaultTheme` is `dark`, root layout has route nav, the interaction score lives in the viewport, and `/` is the executive hook (display name, "Building Applications That Scale Brands.", window chrome, hot skill capsules, View Projects → `/projects`, Download CV).
- Recipe: `03-your-product/03-home-page.md`
- Dependencies: `01-project-setup`, `02-theme-and-layout`
- Status: Done

### 04-projects-page

- Goal: `/projects` shows the featured cards in a high-density asymmetric grid with dark-mode mockups, hover scale inside the card, glowing border, tech badges, GitHub, and live demo links from `data/`.
- Recipe: `03-your-product/04-projects-page.md`
- Dependencies: `03-home-page`
- Status: Done

### 05-about-page

- Goal: `/about` presents bio and principles in terminal frames, a stack bento with Lucide glyphs, and Experience/Education from `data/`, including BSCS at NUML Islamabad 2026.
- Recipe: `03-your-product/05-about-page.md`
- Dependencies: `03-home-page`
- Status: Done

### 06-contact-page

- Goal: `/contact` is a distraction-free conversion page: large header, darkspace, and direct `mailto:`, Google Drive CV, LinkedIn, GitHub, and dev.to from `data/`.
- Recipe: `03-your-product/06-contact-page.md`
- Dependencies: `03-home-page`
- Status: Done

### 07-motion-and-transitions

- Goal: Framer Motion spring route transitions keep the obsidian canvas persistent (no white flash), project-card hover scale and glow run without layout shift, and `active:scale-95` plus glowing link underlines are on the existing controls.
- Recipe: `03-your-product/07-motion-and-transitions.md`
- Dependencies: `03-home-page`, `04-projects-page`, `05-about-page`, `06-contact-page`
- Status: Done

### 08-seo-and-metadata

- Goal: Each route ships metadata; home ships a custom 1200x630 Open Graph image via `@vercel/og` on obsidian with the hot accent, plus a geometric favicon.
- Recipe: `03-your-product/08-seo-and-metadata.md`
- Dependencies: `03-home-page`
- Status: Done

### 09-global-navigation

- Goal: Replace static header with a centered, glassmorphic floating dynamic dock (top-6 desktop / bottom-6 mobile). Implement Active Route Morphing via a Framer Motion `layoutId` pill. Wrap `<main>` in `<AnimatePresence mode="wait">` for seamless cross-fade transitions.
- Recipe: `03-your-product/09-global-navigation.md`
- Dependencies: `01-project-setup`
- Status: Done

### 10-theme-and-depth

- Goal: Implement Spatial Depth & Dual-Theme Fidelity. Update `app/globals.css` with Obsidian/Charcoal and Bone/White bases. Apply 1px milled borders (`box-shadow: inset ...`) globally. Ensure `active:scale-95` tactile depressions are on all interactive elements. Replace linear transitions with spring physics (`mass: 0.8, stiffness: 250, damping: 24`).
- Recipe: `03-your-product/10-theme-and-depth.md`
- Dependencies: `09-global-navigation`
- Status: Pending

### 11-home-expansion

- Goal: Break the hero text out of the enclosing grey box to breathe directly on the background. Add a vertical rhythm with a "Selected Work" bento preview (two flagship projects) and a "Current Focus" section.
- Recipe: `03-your-product/11-home-expansion.md`
- Dependencies: `10-theme-and-depth`
- Status: Pending

### 12-projects-upgrade

- Goal: Upgrade the bento grid to an asymmetrical 12-column layout. Implement an edge-to-edge high-fidelity UI mockup on the top 60%. Implement card hover mechanics: inner image scales (`1.02`) inside `overflow-hidden`. Implement magnetic cursor glows tracking `usePointer` masked inside the card border.
- Recipe: `03-your-product/12-projects-upgrade.md`
- Dependencies: `10-theme-and-depth`
- Status: Pending

### 13-skills-route

- Goal: Create the new `/skills` route. Build a high-density, interactive data table or command-palette interface. Group tools logically (Frontend, Backend, AI Integrations) with subtle progress bars or "Production Ready" indicators.
- Recipe: `03-your-product/13-skills-route.md`
- Dependencies: `10-theme-and-depth`
- Status: Pending

### 14-about-timeline

- Goal: Refine the terminal motif into a polished, modern IDE theme (VS Code/Zed) with proper syntax highlighting. Extract education and experience into a glowing, vertical scroll-linked timeline.
- Recipe: `03-your-product/14-about-timeline.md`
- Dependencies: `10-theme-and-depth`
- Status: Pending

### 15-contact-bento

- Goal: Move away from a plain list. Build a high-conversion 2x2 bento grid of large, tactile action cards. Add a glowing green "Status: Available" indicator and a live PKT timezone clock.
- Recipe: `03-your-product/15-contact-bento.md`
- Dependencies: `10-theme-and-depth`
- Status: Pending
