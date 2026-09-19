# UI Context

## Frontend levels

- Direction: Editorial / magazine
- Presentation: Bento grid
- Product UX: E-commerce / CRO
- Engineering: Utility-first / Tailwind, Accessible / WCAG 2.2 AA, SEO-first / semantic, Dark / light variables

## Theme

Precision-engineered dual-theme (light/dark) technical workspace for hiring managers. High contrast, generous whitespace, rigid asymmetric grid. No gradients and no glassmorphism. Near-monochrome zinc surfaces and one electric indigo accent used only for interaction, focus, and technical highlights.

## Colors

| Role | CSS Variable | Value |
| --- | --- | --- |
| Page background | `--bg-base` | `#FAFAFA` / `#09090B` |
| Surface | `--bg-surface` | `#FFFFFF` / `#18181B` |
| Primary text | `--text-primary` | `#09090B` / `#FAFAFA` |
| Muted text | `--text-muted` | `#71717A` / `#A1A1AA` |
| Primary accent | `--accent-primary` | `#6366F1` / `#7C3AED` |
| Accent glow/subtle | `--accent-muted` | `#E0E7FF` / `#312E81` |
| Border | `--border-default` | `#E4E4E7` / `#27272A` |
| Error | `--state-error` | `#EF4444` / `#F87171` |
| Success | `--state-success` | `#22C55E` / `#4ADE80` |

Values are light / dark. Light is `:root`. Dark is `.dark`. `next-themes` is not installed yet (job `02`); it will swap these tokens. No hex in component markup.

## Typography

| Role | Font | Variable |
| --- | --- | --- |
| Headings and body | Geist Sans (`geist` 1.5.1) | `--font-sans` (from `--font-geist-sans`) |
| Technical metadata | Geist Mono (`geist` 1.5.1) | `--font-mono` (from `--font-geist-mono`) |

Line length for body copy stays in a readable editorial range (about 60–70 characters where a paragraph is used). Modular type scale. Geist Mono is for tags, links, labels, and skill lists only.

## Border Radius

| Context | Token |
| --- | --- |
| Inline / small UI (tags, buttons) | `rounded-md` |
| Cards / bento panels | `rounded-2xl` |
| Modals / overlays / large media | `rounded-3xl` |

## Component Library

Tailwind utilities only. No shadcn/ui and no third-party design system. After job `01` there is no `components/` folder. Later jobs add small React components (buttons, badges, cards, theme toggle) that map to the tokens above. Framer Motion is not installed yet (job `07`). When added, it is for single-axis load reveals and local hover scale, not parallax or layout-shifting motion.

## Layout Patterns

- Section container: `max-w-7xl mx-auto px-6 md:px-12`
- Section padding: `py-16` on mobile, `py-24` or `py-32` on desktop
- Intra-section stack: `space-y-12` or `space-y-16`
- Projects bento: uniform gutters `gap-4` or `gap-6`; `grid-cols-1` mobile, `grid-cols-2` tablet, `grid-cols-3` or `grid-cols-4` desktop; one flagship cell `col-span-2 row-span-2`
- Card anatomy: top ~60% `next/image` (`aspect-video` on mobile), bottom ~40% title, problem line, Geist Mono tags
- Header: Sun/Moon toggle fixed top-right. No floating glass navbar
- Conversion: Hero keeps View Projects and Download CV visible and obvious. Contact repeats email, CV, and profiles without a second visual system

## Icons

Lucide React. Stroke icons, 2px weight. `h-4 w-4` for inline labels and tags. `h-5 w-5` for standalone buttons and external links. Interactive hit area at least 44×44px.

## Skills and stack

- Editorial: CSS Grid, type hierarchy, Next.js static generation
- Bento: CSS Grid `fr` tracks, Tailwind, Framer Motion layout-safe motion
- CRO: Next.js, fast first paint, obvious primary and secondary CTAs
- Tailwind: 4px / 8px spacing, utilities, components only when a utility string repeats
- WCAG: semantic HTML, visible `:focus-visible`, keyboard Tab through every control
- SEO: server-rendered sections, metadata exports, little hydration on static copy
- Theme: CSS variables in `app/globals.css`. `next-themes` is job `02` (no FOUC, theme resolved before first paint)

## Tables

- This site has no dense SaaS table. Project proof is a bento of cards, not a spreadsheet.
- If a comparison or list table appears, render it as semantic HTML (`caption`, `thead`, `th` with `scope`, `tbody`) so crawlers can read it.
- Style with utilities and tokens only: hairline `--border-default`, large cell padding, no glass rows.
- Do not ship an unbounded project dump. The featured set is the 3-5 items in `data/`.

## Pagination

- No site-wide page numbers. The portfolio is one page of sections.
- Project grid is the full featured set. Do not infinite-scroll fake catalog pages.
- If a list later grows past one screen of cards, paginate or virtualize it. Controls must be real focusable buttons or links (`nav` with `aria-label`, `aria-current` where a page is active).
- In-card paging (dots or swipe) is allowed only inside a bento cell, not as a second site chrome.

## Level UX

- Editorial: whitespace and type do the hierarchy. Asymmetric grid stays aligned to a consistent gutter.
- Bento: 16px or 24px gaps. Multi-column collapses to one column on mobile. Card box does not shift on hover.
- CRO: time-to-interactive stays short. Hero CTAs stay obvious. Image loads may use `next/image` placeholders; do not block the first paint on client JS for copy.
- Tailwind: repeated utility clusters become components. Avoid `@apply` except global resets.
- WCAG 2.2 AA: 4.5:1 text contrast in both themes. Every control is on Tab. Visible focus.
- SEO: first contentful paint must not depend on client JS. Zero layout shift from theme or images.
- Dark/light: tokens only. Active or focused controls invert with the theme using `--accent-primary` and `--accent-muted`.

## UX floor

- Long lists paginate or virtualize. The project grid is a short featured set; do not dump an unbounded array.
- Every data view has empty, loading, and error treatment: empty projects array shows a real empty state; images show a loading path via `next/image`; a broken CV or demo link is visible as a failed external action, not a silent dead control.
- Failed actions (mail client missing, external link blocked) get an inline or toast-equivalent message the user can see.
- Keyboard path and visible `:focus-visible` on every interactive control.
- Touch targets at least 44px.
- WCAG 2.2 AA contrast in both themes. This file does not waive AA.
- If a form is ever added, validate, block double submit, and show success. Today the only contact control is `mailto:` — still label it and disable it only when the address is missing in `data/`.
- Do not invent a second token set. Use this file only.
