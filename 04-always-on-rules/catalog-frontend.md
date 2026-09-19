# Frontend catalog

Four axes. They stack. Do not pick one of twenty as the only answer.

`02-fill-these-prompts/03-theme.md` recommends a set from `03-your-product/project-overview.md` and `03-your-product/architecture.md`. The user confirms. Then write `03-your-product/ui-context.md` and later `03-your-product/frontend-prompt.md` from that set.

When a level is chosen, copy its skills, stack, tables, pagination, and UI/UX notes into `03-your-product/ui-context.md`.

# Direction (how it feels)

- Awwwards / FWA — immersive storytelling, custom motion, cinema-grade finish
- WebGL / Three.js — GPU models, particles, shaders, physics
- Editorial / magazine — asymmetric grids, large type, print-like whitespace
- Brutalist / neo-brutalist — heavy outlines, solid fills, clash, retro web
- Cyberpunk / HUD — dark, neon, telemetry, glitch type

# Presentation (how it is laid out)

- Dribbble / Behance — high-fidelity artistry for pitches and portfolios
- Bento grid — zoned rounded cards (Apple / hardware landing pages)
- Minimalist / Apple — contrast, whitespace, geometric sans, less is more
- Glassmorphism — frosted panels, light, layered depth
- Neumorphism — soft extrusion, monochrome shadows

# Product UX (what the screens must do)

- SaaS / enterprise — dense data, nested nav, roles, tables
- E-commerce / CRO — checkout path, sticky CTA, low friction
- Mobile-first / native — HIG or Material 3, touch, gestures
- Fintech / data viz — live charts, ledgers, numeric clarity
- B2B / marketplace — two-sided seller and buyer flows

# Engineering (hard constraints)

- Atomic design — tokens, atoms, molecules, organisms, templates
- Utility-first / Tailwind — 4px / 8px scale, utility classes
- Accessible / WCAG — 2.2 AA minimum unless the user waives it in writing
- SEO-first / semantic — HTML meaning, Core Web Vitals
- Dark / light variables — semantic CSS variables, both themes stay AA

# How to recommend

- Portfolio or studio site → Editorial or Minimalist + SEO + AA
- Client SaaS → Minimalist or Bento + SaaS UX + Tailwind + AA
- Campaign or award piece → Direction from the brief + AA still on
- Shop → E-commerce UX + presentation that matches the brand
- Two surfaces are allowed (marketing vs app). Name both. Do not mix them on one screen
- WebGL only if the product needs it. Do not recommend it for a dashboard

# Always

Copy `04-always-on-rules/floor-ux.md` into `03-your-product/ui-context.md`. The visual set cannot remove empty, loading, or error states, or usable forms. Table and pagination style come from the chosen levels below.

# Experiential and creative

# Awwwards / FWA (creative web direction)

- Focus: immersive storytelling, cinema-grade finish
- Skills: art direction, motion choreography, scroll-hijacking, spatial reasoning
- Experience: digital agencies, high-end creative studios
- Stack: GSAP, Lenis or Locomotive Scroll, Vite or Webpack, Framer Motion, Vanilla JS
- Tables: avoid standard grids. Interactive list reveals on scroll
- Pagination: no page numbers. Seamless infinite scroll or visual transitions (masking)
- UX: custom hardware-accelerated cursors. Lock 60fps. Visual pacing over dense data

# WebGL / Three.js (interactive 3D)

- Focus: GPU models, particles, shaders, physics
- Skills: GLSL, linear algebra, physics, 3D optimization
- Experience: creative tech, gaming hubs, immersive marketing
- Stack: Three.js, React Three Fiber, WebGL, OGL, Cannon.js or Rapier
- Tables: data in a 3D canvas (spatial arrays)
- Pagination: object-based navigation (move to a new space, not a Next button)
- UX: dispose geometry and materials. HTML fallback if WebGL is missing

# Editorial / magazine (high-end type)

- Focus: print-like type, whitespace, asymmetric grids
- Skills: typographic hierarchy, baseline grids, print-to-web
- Experience: fashion brands, digital publishing
- Stack: CSS Grid, variable fonts, Next.js SSG, Sanity or Contentful
- Tables: asymmetric alignment, hairline borders, large whitespace
- Pagination: oversized typographic numbers or a full-screen Next Article footer
- UX: modular type scale. Serif plus sans variable fonts. Line length 60–70 characters

# Brutalist / neo-brutalist (raw anti-design)

- Focus: heavy outlines, solid fills, clash, retro web
- Skills: intentional friction, color disruption, micro-interactions
- Experience: Web3, crypto, streetwear, indie agencies
- Stack: React, Tailwind with a harsh config, plain CSS
- Tables: thick solid borders (example 4px black), stark fills
- Pagination: oversized block buttons, marquee text, heavy drop shadows (no blur)
- UX: break alignment on purpose but keep structure consistent. Raw HTML as a motif

# Cyberpunk / sci-fi (HUD)

- Focus: dark mode, neon, telemetry, glitch type
- Skills: SVG, Canvas API, glow and glitch CSS
- Experience: game dashboards, niche tech, security portals
- Stack: Canvas API, SVG filters, CSS animation, React
- Tables: telemetry layout, monospace, glowing cells, scanlines
- Pagination: hexagonal nodes, glowing progress, sector loading
- UX: dark first. Neon only to guide the eye. Animate data in (typing)

# Visual and presentation

# Dribbble / Behance (high-fidelity UI)

- Focus: polished mockup feel, harmony, pitch-ready layouts
- Skills: pixel-perfect translation, micro-interactions, composition
- Experience: freelance product design, prototypes, pitch decks
- Stack: Figma-to-code, React or Vue, CSS Modules, Framer
- Tables: generous padding, aligned columns, light hover lift
- Pagination: dot indicators, pill buttons, sliding transitions
- UX: harmony over dense function. Soft continuous shadows. Even radii

# Bento grid (information zoning)

- Focus: zoned rounded cards (Apple / hardware pages)
- Skills: spatial organization, responsive reflow, widgets
- Experience: landing pages, hardware sites, modern dashboards
- Stack: CSS Grid (fr units), Tailwind, Framer Motion layout
- Tables: modular tables inside cells. Hidden scrollbars
- Pagination: inside the card (swipe or dots), not a page-wide pager
- UX: uniform gaps (16px or 24px). Multi-column to one column on mobile

# Minimalist / Apple (premium simplicity)

- Focus: contrast, whitespace, geometric sans, less is more
- Skills: restraint, whitespace, strict alignment
- Experience: luxury, premium SaaS marketing, high-end portfolios
- Stack: Vanilla JS or React, GSAP ScrollTrigger, SCSS
- Tables: borderless. Structure from alignment and space
- Pagination: hidden until needed. Swipe or a small Load More link
- UX: strip extra borders and fills. Type scale and proximity do the work

# Glassmorphism (visual texture)

- Focus: frosted panels, light, layered depth
- Skills: layering, blur performance, refraction
- Experience: OS-like UI, conceptual and rich landing pages
- Stack: CSS backdrop-filter, React or Vue, SVG noise
- Tables: translucent rows in frosted containers
- Pagination: floating glass bars, frosted pills
- UX: keep text contrast over frost. Fallback if backdrop-filter is missing (solid translucent color)

# Neumorphism (soft extrusion)

- Focus: soft monochrome extrusion
- Skills: box-shadow math, monochrome scales
- Experience: niche mobile, smart-home, conceptual dashboards
- Stack: CSS variables for shadows, any standard UI framework
- Tables: inset body, extruded header
- Pagination: extruded buttons that go inset on press
- UX: low contrast, shadow depth shows what is clickable. Poor for public AA sites unless contrast is raised

# Functional and logic

# SaaS / enterprise (complex data)

- Focus: dense dashboards, roles, nested nav
- Skills: global state, API sync, virtualization, complex routing
- Experience: B2B, internal tools, CRM / ERP
- Stack: React or Angular, Redux or Zustand, React Query, TanStack Table or AG-Grid
- Tables: high density, resizable columns, multi-sort, row virtualization (10k+ rows)
- Pagination: numbered pages, page size 10 / 50 / 100, total count
- UX: density and speed over flair. Bulk actions, sticky headers, clear empty states

# E-commerce / CRO (conversion)

- Focus: checkout path, sticky CTA, low friction
- Skills: funnel work, cart persistence, A/B tests
- Experience: DTC, retail, high-traffic shops
- Stack: Next.js or Nuxt, Shopify Hydrogen, Stripe or Braintree, Redis cache
- Tables: comparison tables with sticky feature columns
- Pagination: infinite scroll or Load More on product grids. Numbered pages on reviews
- UX: fast time-to-interactive. Sticky CTAs. Skeleton loaders while products fetch

# Mobile-first / native OS

- Focus: HIG or Material 3, touch, gestures
- Skills: touch, device APIs, responsive scale, native gestures
- Experience: PWA, cross-platform, mobile web
- Stack: React Native Web, Capacitor or Ionic, Tailwind
- Tables: do not keep dense tables on small screens. Stack rows as cards
- Pagination: swipe, pull-to-refresh, infinite scroll near the bottom
- UX: 44×44px targets. Native-like sheet modals

# Fintech / data viz (analytical clarity)

- Focus: live charts, ledgers, numeric clarity
- Skills: realtime streams, precision math, charting
- Experience: trading, banking, crypto
- Stack: D3, Chart.js or Recharts, WebSockets, TanStack Table
- Tables: flashing ledgers, numbers right-aligned, tabular / mono figures
- Pagination: cursor-based for high-velocity data
- UX: mono numbers so columns do not jump. Green / red for up / down

# B2B / marketplace (two-sided flows)

- Focus: seller vs buyer paths
- Skills: multi-tenant auth, roles, transactional state
- Experience: platforms, gig apps, two-sided markets
- Stack: Next.js, Node, PostgreSQL, Prisma or Drizzle, NextAuth
- Tables: status columns (Pending, Active, Completed), inline edit
- Pagination: offset for small lists. Cursor for huge histories
- UX: separate buyer and seller UI. Color or layout marks the active role

# Engineering and system

# Atomic design (component system)

- Focus: tokens, atoms, molecules, organisms, templates
- Skills: prop maps, separation of concerns, system docs
- Experience: design-system and platform teams
- Stack: Storybook, React or Vue, styled-components or modular SCSS
- Tables: primitives only (TableCell, TableRow, TableHeader)
- Pagination: one atom. Props: currentPage, totalPages
- UX: an atom never fetches data. One token source for color and space

# Utility-first / Tailwind

- Focus: 4px / 8px scale, utility classes
- Skills: fast UI, tokens as utilities, less class bloat
- Experience: startups, rapid teams, fullstack
- Stack: Tailwind, Radix, shadcn/ui, Next.js
- Tables: utility grid or HTML tables styled with utilities
- Pagination: headless state, utility-styled controls
- UX: repeated utility strings become components. Use @apply sparingly

# Accessible / WCAG

- Focus: WCAG 2.2 AA (or AAA if asked)
- Skills: ARIA, semantic HTML, no keyboard traps, screen-reader tests
- Experience: gov, health, enterprise, public sites
- Stack: Radix, Axe, NVDA or VoiceOver
- Tables: caption, thead, th with scope, tbody
- Pagination: nav aria-label="Pagination", aria-current="page", focusable buttons
- UX: 4.5:1 contrast. Every control on Tab. Visible :focus-visible

# SEO-first / semantic

- Focus: Core Web Vitals, crawlers, meaning in HTML
- Skills: SSR / SSG, JSON-LD, CWV
- Experience: content directories, marketing, programmatic SEO
- Stack: Next.js or Astro, HTML/CSS, edge cache
- Tables: server-rendered HTML so crawlers can read cells
- Pagination: real a href links. link rel="next" and rel="prev" in head. Not click-only JS
- UX: little hydration. Fast FCP. Zero CLS. First paint must not depend on client JS

# Dark / light variable (adaptive UI)

- Focus: semantic CSS variables, both themes
- Skills: custom properties, color math, no FOUC
- Experience: developer tools, OS-like apps
- Stack: CSS variables, next-themes, localStorage
- Tables: borders and stripes from semantic background and border tokens
- Pagination: active page inverts with the theme (black on light, white on dark)
- UX: no hex in components. Tokens only (--bg-primary, --text-muted). Blocking head script for system theme before first paint
