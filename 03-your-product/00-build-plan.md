# Build Plan

## Jobs

### 01-project-scaffold

- Goal: Next.js 15 App Router application exists within the `rajairfanahmed` folder, configured with TypeScript, Tailwind CSS v4, Geist fonts, Framer Motion, and a strongly typed `@/data` directory containing baseline static records.
- Recipe: `03-your-product/01-project-scaffold.md`
- Dependencies: None
- Status: Done

### 02-theme-and-dock

- Goal: Root layout establishes `next-themes` dual-layer spatial tokens (Obsidian/Bone) and mounts a floating glassmorphic dock navbar featuring magnetic hover states and a Framer Motion `layoutId` active route pill.
- Recipe: `03-your-product/02-theme-and-dock.md`
- Dependencies: `01-project-scaffold`
- Status: Done

### 03-home-page-and-transitions

- Goal: The `/` route renders a massive typography hero, bento project preview, and scroll-linked timeline snapshot, while `<AnimatePresence mode="wait">` enables fluid cross-fades for all navigation.
- Recipe: `03-your-product/03-home-page-and-transitions.md`
- Dependencies: `02-theme-and-dock`
- Status: Pending

### 04-projects-bento-grid

- Goal: The `/projects` route displays an asymmetric 12-column bento grid utilizing 1px milled borders, 400ms spring hover scaling, and external GitHub/Live Demo links strictly configured to open in new tabs.
- Recipe: `03-your-product/04-projects-bento-grid.md`
- Dependencies: `02-theme-and-dock`
- Status: Pending

### 05-skills-matrix

- Goal: The `/skills` route renders high-density, categorized tabular matrices for technical competencies (Frontend, Backend, Architecture) utilizing `tabular-nums` and visual proficiency indicators.
- Recipe: `03-your-product/05-skills-matrix.md`
- Dependencies: `02-theme-and-dock`
- Status: Pending

### 06-about-and-timeline

- Goal: The `/about` route delivers a modern IDE-themed narrative biography alongside a scroll-linked vertical Experience and Education timeline (highlighting the NUML BSCS).
- Recipe: `03-your-product/06-about-and-timeline.md`
- Dependencies: `02-theme-and-dock`
- Status: Pending

### 07-contact-and-optimization

- Goal: The `/contact` route presents a 2x2 high-conversion grid (Email, LinkedIn, GitHub, dev.to) and live timezone clock; global SEO metadata, custom Open Graph images, and zero-CLS image aspect ratios are implemented to guarantee a 90+ Lighthouse score.
- Recipe: `03-your-product/07-contact-and-optimization.md`
- Dependencies: `03-home-page-and-transitions`, `04-projects-bento-grid`, `05-skills-matrix`, `06-about-and-timeline`
- Status: Pending