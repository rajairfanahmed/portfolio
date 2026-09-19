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
