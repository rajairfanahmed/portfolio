# UI Context

## Frontend levels

- Direction: Awwwards / FWA
- Presentation: Bento grid
- Product UX: E-commerce / CRO
- Engineering: Utility-first / Tailwind, Accessible / WCAG 2.2 AA, SEO-first / semantic, Dark / light variables

This product maps to 2026 Category 01 (cinematic dark portfolio) plus Category 03 conversion on Contact. Do not import Category 02 glass dashboards, Category 04 charts, WebGL, or serif journal type.

## Theme

Layered cinematic dark is the default. The document is not a flat gray. Obsidian canvas sits under charcoal cards so routes share one depth. Light is a secondary bone-paper theme for the existing Sun/Moon toggle. Hot accent is reserved for skill capsules, focus, glowing link underlines, and card-border illumination. Window-control dots use their own traffic-light tokens and are not the brand accent.

## Colors

| Role | CSS Variable | Dark (default) | Light |
| --- | --- | --- | --- |
| Page background | `--bg-base` | `#0A0A0A` | `#F5F5F0` |
| Surface / cards | `--bg-surface` | `#141414` | `#FFFFFF` |
| Elevated | `--bg-elevated` | `#1A1A1A` | `#EFECE6` |
| Primary text | `--text-primary` | `#FAFAFA` | `#0A0A0A` |
| Muted text | `--text-muted` | `#A1A1AA` | `#52525B` |
| Hot accent | `--accent-primary` | `#FF4D00` | `#E64500` |
| Accent glow | `--accent-muted` | `#3D1400` | `#FFE8DC` |
| Border | `--border-default` | `rgba(255, 255, 255, 0.08)` | `#E5E5E5` |
| Error | `--state-error` | `#F87171` | `#EF4444` |
| Success | `--state-success` | `#4ADE80` | `#22C55E` |
| Window close | `--window-close` | `#FF5F57` | `#FF5F57` |
| Window minimize | `--window-min` | `#FFBD2E` | `#FFBD2E` |
| Window maximize | `--window-max` | `#28C840` | `#28C840` |

Dark is `.dark` and also the default on `<html>`. Light is `:root` without `.dark` when the visitor toggles light. `next-themes` 0.4.6 swaps the class. No hex in component markup.

## Typography

| Role | Font | Variable | Scale |
| --- | --- | --- | --- |
| Display headers | Geist Sans extra-bold / black | `--font-sans` | `clamp(3rem, 12vw, 8rem)`, letter-spacing `-0.05em` |
| Body copy | Geist Sans | `--font-sans` | `0.875rem`–`1.125rem`, line-height `1.6` |
| Technical accents | Geist Mono | `--font-mono` | Terminal frames, metadata, commands, code-shaped labels |

Geist Mono is only for terminal chrome, metadata, and commands. Hot skill capsules use Geist Sans, not mono. Do not add PP Neue Montreal, Clash Display, Cabinet Grotesk, or a serif. Local `geist` 1.5.1 only (this machine cannot fetch Google Fonts).

## Border Radius

| Context | Token |
| --- | --- |
| Inline / small UI (tags, buttons, hot capsules) | `rounded-md` |
| Cards / bento / window frames | `rounded-2xl` |
| Large media / mockups | `rounded-3xl` |

## Component Library

Tailwind utilities only. No shadcn/ui and no third-party design system. `components/` holds `ThemeProvider` and `ThemeToggle` today. Later jobs add nav, hero, interaction score, project cards, terminal frames, and hot badges that map to the tokens above. Framer Motion is not installed until job `07`. Until then, use CSS `transform` / `opacity` and `active:scale-95`.

## Layout Patterns

- App shell: persistent obsidian (or paper) on `body`. Root layout owns nav, theme toggle, interaction score
- Section container: `max-w-7xl mx-auto px-6 md:px-12`. Contact may tighten to `max-w-4xl` for darkspace
- Spatial grid: 8-point (`gap-2`, `gap-4`, `gap-8`, `gap-16`)
- Section padding: `py-16` on mobile, `py-24` or `py-32` on desktop
- Home: window-chrome frame around the intro; display name; positioning; hot capsules; two CTAs
- Projects: high-density asymmetric CSS Grid; `grid-cols-1` mobile, `grid-cols-2` tablet, `grid-cols-3` or `12` tracks desktop; flagship cell larger (`col-span-2` or equivalent)
- Card anatomy: edge-to-edge `next/image` mockup, then title, problem line, hot/minimal badges, GitHub + demo
- Card hover: image scales inside overflow-hidden; border uses `--accent-primary` glow; card box does not move
- About: terminal frames (Geist Mono) alternating with a stack bento
- Contact: huge header, vast darkspace, text links only
- Header: text route nav + Sun/Moon toggle. No floating glass navbar
- Conversion: Home keeps View Projects and Download CV obvious. Contact is the quiet close

## Icons

Lucide React. Stroke icons, 2px weight. `h-4 w-4` for inline labels and tags. `h-5 w-5` for standalone buttons and external links. Interactive hit area at least 44×44px. Window dots are 8–12px color discs, not Lucide icons. They are decorative (`aria-hidden`).

## Skills and stack

- Awwwards: large type, persistent dark canvas, window/terminal motif, spring route motion
- Bento: CSS Grid `fr` tracks, charcoal cards, hot capsules
- CRO: short path Home → Projects → Contact. Obvious CTAs. No form friction
- Tailwind: 8-point spacing, utilities, components only when a utility string repeats
- WCAG: semantic HTML, visible `:focus-visible`, keyboard Tab through every control including the score (it is not a trap)
- SEO: server-rendered routes, metadata exports, little hydration on static copy
- Theme: CSS variables in `app/globals.css`. Dark default. No FOUC. No white flash between routes

## Tables

- This site has no dense SaaS table. Project proof is a grid of cards, not a spreadsheet.
- If a comparison or list table appears, render it as semantic HTML (`caption`, `thead`, `th` with `scope`, `tbody`) so crawlers can read it.
- Style with utilities and tokens only: hairline `--border-default`, large cell padding, charcoal surfaces.
- Do not ship an unbounded project dump. The featured set is the items in `data/`.

## Pagination

- Four real routes, not one infinite page. Nav uses real `Link`s. `aria-current="page"` on the active route.
- Project grid is the full featured set on `/projects`. Do not infinite-scroll fake catalog pages.
- If a list later grows past one screen of cards, paginate or virtualize it. Controls must be real focusable buttons or links (`nav` with `aria-label`).
- The interaction score is not pagination.

## Level UX

- Awwwards: cinematic depth from layered tokens, not from a second visual system. Display type does the hook.
- Bento: 16px or 24px gaps. Multi-column collapses to one column on mobile. Card box does not shift on hover.
- CRO: time-to-interactive stays short. Home CTAs stay obvious. Contact is distraction-free.
- Tailwind: repeated utility clusters become components. Avoid `@apply` except global resets.
- WCAG 2.2 AA: 4.5:1 text contrast in both themes. Every control is on Tab. Visible focus. Window dots are not the only cue for anything required.
- SEO: first contentful paint must not depend on client JS for name and positioning. Score counter may hydrate after paint.
- Dark/light: tokens only. Hot capsules, focus, and glowing underlines use `--accent-primary` / `--accent-muted`.
- Motion: composited `transform` and `opacity` only. Never animate `width`, `height`, `margin`, or `padding`.

## UX floor

- Long lists paginate or virtualize. The project grid is a short featured set; do not dump an unbounded array.
- Every data view has empty, loading, and error treatment: empty projects array shows a real empty state; images show a loading path via `next/image`; a broken CV or demo link is visible as a failed external action, not a silent dead control.
- Failed actions (mail client missing, external link blocked) get an inline or toast-equivalent message the user can see.
- Keyboard path and visible `:focus-visible` on every interactive control.
- Touch targets at least 44px (window dots are decorative and not targets).
- WCAG 2.2 AA contrast in both themes. This file does not waive AA.
- If a form is ever added, validate, block double submit, and show success. Today the only contact control is `mailto:` — still label it and disable it only when the address is missing in `data/`.
- Do not invent a second token set. Use this file only.
