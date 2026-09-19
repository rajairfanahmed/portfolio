# Frontend lanes (2026)

Ask these as **separate** choices. Do not merge them into one vague "dark modern" look.
Read this file before writing `03-your-product/ui-context.md` or `03-your-product/frontend-prompt.md`.
Generate the persona **only** for the lanes the user confirmed.

Banned default (this is what failed on rajairfanahmed.vercel.app):
flat near-black page, orange pill chips, simple top underline nav, placeholder circle images, fake terminal block, no depth, no dock, no command palette, no spring motion. Never generate that unless the user explicitly asks for a starter kit.

# Visual execution (pick one)

# Google

- Material 3: tonal palettes, dynamic color, large touch, predictive motion
- Surfaces use container roles, not random gray cards
- Motion: emphasized easing, shared axis / container transform
- Avoid: generic Bootstrap cards, random Google-blue everywhere

# Awwwards

- Immersive 2026 bar: WebGL or GSAP scroll scenes, spatial storytelling, custom cursor, 60fps
- Pagination often hidden (masking, infinite, scene change)
- HTML fallback required if WebGL fails
- Avoid: putting this on a SaaS table product unless the user insists

# Apple

- Product is the hero. Huge type, aggressive whitespace, almost invisible chrome
- Motion 240–320ms, designed curves, never bounce for decoration
- Blue only for action. Focus ring never removed
- Magnetic dock / floating nav is allowed. No noisy gradients on chrome

# Dribbble

- Pitch-perfect composition, soft elevation, generous padding, pill controls
- Harmony over dense data
- Still needs real empty/loading/error, not a static mockup
- Avoid: unusable artboards that ignore keyboard and small screens

# E-commerce

- CRO: sticky CTA, short path to buy, skeleton product grids
- Product grid: Load More or infinite. Reviews: numbered pages
- Comparison tables with a sticky feature column
- Avoid: burying price and cart

# SaaS

- Density with clear hierarchy. Sticky table headers, filters, bulk actions
- Interaction-dense: hover, focus, keyboard, loading, error on every control
- Motion as state, not decoration (150–300ms, 4–8px translate)
- Avoid: widget soup and random accent colors

# Linear

- Craft-first product UI. Six states per control (default, hover, focus, active, loading, disabled)
- Keyboard-first. Optical type alignment. Memorable empty states
- Motion curves are designed, not CSS default ease
- Muted neutrals, one accent for status only
- Custom auto-hiding scrollbar
- Avoid: oversized marketing buttons inside the app chrome

# Vercel

- Dark-first. Geist Sans + Geist Mono. Tabular numerals
- Hairline borders (white ~8% opacity). Sharp or near-sharp radius on marketing
- One functional accent (not a rainbow of chips). Command bar pattern
- Restrained scroll fades. No bounce. No decorative color
- Avoid: orange marketing chips as the whole identity, pure flat #000 with no layers

# Stripe

- Dense but ordered type hierarchy. Gradient mesh only as brand atmosphere, not on every card
- Dashboard: precise forms, invoice-grade tables, predictable hover
- Motion communicates (code samples, state), never confetti
- Error and success states are first-class
- Avoid: playful illustration replacing hierarchy

# Shopify

- Merchant-grade admin + storefront split. Online Store / Hydrogen patterns
- Accessible primitives. Honest product media. Fast first paint
- Storefront: conversion. Admin: tables, status, bulk
- Avoid: mixing checkout chrome with Awwwards scroll-hijack

# Motion physics (pick one)

# Apple motion

- 100ms press, 240ms chrome, 320ms opacity/transform. Reduced-motion fallback
- Springs only for tactile press/hover, small scale (1.02)

# Stripe motion

- Latency-free micro-interactions. Hardware transform/opacity only
- layoutId morphs for related objects (card → detail)

# Awwwards motion

- Scroll-linked, timeline, 60fps, custom cursor. Dispose WebGL

# Linear motion

- Sidebar and row animations use one shared curve. Stagger lists 20–40ms
- Never animate width, height, margin, padding

# Product UX (pick one)

# Raycast / command palette

- Global Cmd+K / Ctrl+K. Filter routes, projects, tech tags, theme
- Every control on Tab. Immediate feedback

# Supabase / tabular

- Sophisticated tables, pagination metadata, distinct empty/loading
- Shimmer skeletons on async

# E-commerce CRO

- Cart persistence, sticky buy, comparison, review pages

# SaaS dashboard

- Nested nav, roles, bulk, page size 10/50/100

# Accessibility and architecture (always name one)

# Shopify / FWA / WCAG

- WCAG 2.2 AA. Semantic HTML. Sub-50ms INP target. No focus traps
- Prefer Radix / shadcn primitives

# Quality bar when the user picks Linear + Vercel + Apple + Stripe + Raycast

Use this craft (adapt tokens to the project, do not copy orange from a failed build):

- Stack: Next.js App Router, React, TypeScript, Tailwind, Framer Motion
- Spatial dark: Obsidian base `#050506`, canvas `#0A0A0C`, glass `bg-white/5 backdrop-blur-2xl`. Never flat `#000000`
- 1px inner + outer translucent borders on cards
- Type: Geist or Inter body. Display face for hero. Geist Mono for meta. `tabular-nums` on metrics
- Card hover: 400ms spring scale 1.02 + pointer-tracked radial gradient clipped to the card
- Nav: floating glass dock, magnetic hover, morphing pill for the active route
- Cmd+K palette. Paginated tables. `active:scale-95`. `:focus-visible` in the accent
- Route changes: `AnimatePresence mode="wait"`. No white flash. Dock stays mounted
- GPU motion only. Custom scrollbar. Every surface has a z-index reason
- 100 Lighthouse intent, zero CLS, JSDoc on props

# Backend lanes (for 06-personas, pick to match architecture.md)

# Vercel Edge / Cloudflare Workers

- Edge-first route handlers. Zero cold start intent. Global static + ISR
- No heavy Node libs (bcrypt, bulky parsers) on Edge

# Stripe (contracts)

- Zod on every input/output. Predictable `{ error: { code, message } }`
- Shared types in `@/lib/validations`

# Supabase (security)

- Route protection, CORS, CSP nonce/hash, nosniff, DENY frame, strict referrer
- Rate limit mutations (Upstash / Vercel KV)

# Data

- List envelope `{ data: T[], metadata: { total, page, hasNext } }`
- Timeout on third parties → stale cache, not 500
- No unbounded arrays. No secrets in `NEXT_PUBLIC_` unless safe
