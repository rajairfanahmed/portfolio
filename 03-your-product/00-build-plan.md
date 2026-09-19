# Build Plan

## Jobs

### 01-project-setup

- Goal: Next.js app exists with TypeScript, Tailwind tokens, Geist fonts, `lucide-react`, and a typed `data/` folder holding bio, skills, placeholder projects, placeholder experience, and contact links.
- Recipe: `03-your-product/01-project-setup.md`
- Dependencies: None
- Status: Pending

### 02-theme-and-layout

- Goal: Root layout uses the section container, `next-themes` is wired, and a fixed top-right Sun/Moon toggle switches light and dark with no flash on load.
- Recipe: `03-your-product/02-theme-and-layout.md`
- Dependencies: `01-project-setup`
- Status: Pending

### 03-hero-section

- Goal: Hero on the home page shows name, "Full Stack AI Web Apps Developer", priority profile photo, View Projects (scroll), and Download CV from `data/`.
- Recipe: `03-your-product/03-hero-section.md`
- Dependencies: `01-project-setup`, `02-theme-and-layout`
- Status: Pending

### 04-about-and-experience

- Goal: About/Skills snapshot in Geist Mono and the Experience/Education list render from `data/`, including BSCS at NUML Islamabad 2026.
- Recipe: `03-your-product/04-about-and-experience.md`
- Dependencies: `01-project-setup`, `02-theme-and-layout`
- Status: Pending

### 05-projects-bento-grid

- Goal: Projects section shows the featured cards in a responsive bento grid with screenshot, problem line, tags, GitHub, and live demo links from `data/`.
- Recipe: `03-your-product/05-projects-bento-grid.md`
- Dependencies: `01-project-setup`, `02-theme-and-layout`
- Status: Pending

### 06-contact-section

- Goal: Contact section exposes `mailto:`, Google Drive CV, LinkedIn, GitHub, and dev.to from `data/`.
- Recipe: `03-your-product/06-contact-section.md`
- Dependencies: `01-project-setup`, `02-theme-and-layout`
- Status: Pending

### 07-motion-and-interactions

- Goal: Framer Motion staggered load, 20% scroll reveals, card hover scale, and `active:scale-95` run on the existing sections without layout shift.
- Recipe: `03-your-product/07-motion-and-interactions.md`
- Dependencies: `03-hero-section`, `04-about-and-experience`, `05-projects-bento-grid`, `06-contact-section`
- Status: Pending

### 08-seo-and-metadata

- Goal: Home page ships custom 1200x630 Open Graph image via `@vercel/og`, indigo geometric favicon, and complete metadata exports.
- Recipe: `03-your-product/08-seo-and-metadata.md`
- Dependencies: `02-theme-and-layout`
- Status: Pending
