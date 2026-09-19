# UI Context

## Theme

The design language is a precision-engineered, dual-theme (Light/Dark) technical workspace designed for enterprise hiring managers. It relies on high-contrast scaling, generous whitespace, and a rigid asymmetric grid. The aesthetic avoids gradients and glassmorphism in favor of solid, near-monochrome surfaces (built on the Tailwind Zinc scale) with a single, highly controlled electric indigo accent used strictly for interaction states, focal points, and syntax highlighting.

## Colors

All UI components must map strictly to these semantic variables. The transition between light and dark modes is handled instantly via `next-themes` by swapping these token values at the `:root` and `.dark` levels. No hardcoded hex values are permitted in component markup.

| Role | CSS Variable | Value (Light / Dark) |
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

## Typography

| Role | Font | Variable |
| --- | --- | --- |
| Headings & Body | Geist Sans | `--font-sans` |
| Technical Metadata | Geist Mono | `--font-mono` |

## Border Radius

| Context | Class |
| --- | --- |
| Inline / small UI (tags, buttons) | `rounded-md` |
| Cards / bento panels | `rounded-2xl` |
| Modals / overlays / large media | `rounded-3xl` |

## Component Library

Tailwind CSS serves as the primary utility engine. Highly interactive or state-driven components (buttons, badges) should be built as reusable React components mapping to the CSS variables above. Framer Motion is integrated strictly for structural load animations (single-axis reveals) and localized interaction feedback (card hover scaling), completely avoiding heavy parallax or layout-shifting animations.

## Layout Patterns

* **Section Container:** Every major section relies on a centralized wrapper for predictable viewport constraints: `max-w-7xl mx-auto px-6 md:px-12`.
* **Vertical Rhythm:** Strict spatial hierarchy. Spacing between major sections scales from `py-16` (mobile) to `py-24` or `py-32` (desktop). Intra-section flow uses `space-y-12` or `space-y-16`.
* **Bento Grid (Projects):** Asymmetric, rigid card layout with uniform gutters (`gap-4` or `gap-6`). Degrades gracefully: `grid-cols-1` (mobile), `grid-cols-2` (tablet), `grid-cols-3` or `grid-cols-4` (desktop).
* **Card Anatomy:** Top 60% is an edge-to-edge `next/image` visual utilizing `aspect-video` on mobile; bottom 40% houses typography and flex-wrapped `--font-mono` tech tags.
* **Header / Navigation:** Minimalist structure. Sun/Moon theme toggle fixed in the top-right corner, avoiding floating or glassmorphic navbars.

## Icons

Lucide React. Stroke-based icons only, keeping line weights consistent (default 2px). Sizes: `h-4 w-4` for inline labels and tech metadata, `h-5 w-5` for standalone buttons and standard external links (GitHub, LinkedIn).