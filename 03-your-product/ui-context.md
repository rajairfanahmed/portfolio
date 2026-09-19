# UI Context

## Frontend levels

- Direction: Awwwards / FWA
- Presentation: Bento grid
- Product UX: E-commerce / CRO
- Engineering: Utility-first / Tailwind, Accessible / WCAG 2.2 AA, SEO-first / semantic, Dark / light variables

This product maps to 2026 Category 01 (cinematic dark portfolio) plus Category 03 conversion on Contact. Do not import Category 02 glass dashboards, Category 04 charts, WebGL, or serif journal type.

## Theme & Spatial Depth

Layered cinematic dark is the default. Do not use pure black. Obsidian canvas sits under deep charcoal cards so routes share one depth. Light mode is a secondary bone-paper theme with pure white cards elevated by a drop shadow. Hot accent is reserved for skill capsules, focus, glowing link underlines, and card-border illumination. Window-control dots use their own traffic-light tokens and are not the brand accent.

Every card, container, and floating element must use a translucent inner and outer 1px milled border to mimic the specular highlights of physical glass and aluminum.

## Colors

| Role | CSS Variable | Dark (default) | Light |
| --- | --- | --- | --- |
| Page background | `--bg-base` | `#050506` | `#FCFCFD` |
| Surface / cards | `--bg-surface` | `#0A0A0C` | `#FFFFFF` |
| Elevated | `--bg-elevated` | `#111115` | `#F5F5F0` |
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

## Shadows & Milled Borders

- **Milled border token**: `box-shadow: inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.05)` (apply via Tailwind utilities like `shadow-[inset_...]`).
- **Light mode shadow**: White cards on bone canvas get a 4% opacity drop shadow.

## Typography

| Role | Font | Variable | Scale |
| --- | --- | --- | --- |
| Display headers | Geist Black / Sans | `--font-sans` | `clamp(3rem, 12vw, 8rem)`, letter-spacing `-0.05em` |
| Body copy | Geist Sans | `--font-sans` | `0.875rem`–`1.125rem`, line-height `1.6` |
| Technical accents | Geist Mono | `--font-mono` | Terminal frames, metadata, dates, tech tags, tabular-nums |

Geist Mono is reserved strictly for technical data, dates, tags, and terminal elements. Standardize all data metrics with `tabular-nums` to prevent horizontal jitter. Display text (Home) should break out of boxes.

## Border Radius

| Context | Token |
| --- | --- |
| Inline / small UI (tags, buttons, hot capsules) | `rounded-md` |
| Cards / bento / floating dock / window frames | `rounded-2xl` |
| Large media / mockups | `rounded-3xl` |

## Component Library & Motion

Tailwind utilities only. Framer Motion is the standard for 2026 motion physics.
- **Spring Over Easing**: Use `mass: 0.8, stiffness: 250, damping: 24`.
- **Hardware Acceleration**: Only animate `transform` and `opacity`. Never animate `width`, `height`, `margin`, or `padding`.
- **Tactile Depressions**: Apply `active:scale-95` to every button, link, and interactive card for immediate physical feedback on click.
- **Seamless Page Transitions**: Wrap layout in `<AnimatePresence mode="wait">` and cross-fade `<main>`.

## Layout Patterns

- App shell: persistent obsidian (or bone). Root layout owns floating dock and interaction score.
- Floating Dynamic Dock: centered, glassmorphic (`backdrop-blur-xl`, `bg-white/5` or `bg-black/5`), anchored at top-6 for desktop, bottom-6 for mobile. Active route uses `layoutId` pill.
- Spatial grid: 8-point (`gap-2`, `gap-4`, `gap-8`, `gap-16`)
- Home: massive typography, window-chrome intro, "Selected Work" bento preview, "Current Focus" section.
- Projects: asymmetrical 12-column bento grid. Top 60% is edge-to-edge mockup, bottom 40% holds monospace tags. Hover scales image only (`1.02`), overflow hidden, card border illuminates with magnetic cursor glow.
- Skills: high-density interactive data table or command-palette interface. Logically grouped tools.
- About: modern IDE theme (VS Code or Zed style), glowing vertical scroll-linked timeline for education/experience.
- Contact: 2x2 bento grid of action cards. Glowing green "Status: Available" and live PKT timezone clock.

## Icons & Graphics

Lucide React. Stroke icons, 2px weight. `h-4 w-4` for inline labels and tags. `h-5 w-5` for standalone buttons. Interactive hit area at least 44×44px. Use shimmering skeleton placeholders for loading complex grids or images, not spinners.

## Level UX & UX Floor

- WCAG 2.2 AA: 4.5:1 text contrast in both themes. Every control is on Tab.
- Keyboard Supremacy: Strict 2px Electric Indigo (`#6366f1`) `:focus-visible` outline for all interactive elements.
- Zero CLS: Hardcode aspect ratios for all images and project cards.
- Skeletons Over Spinners: Use shimmering skeleton placeholders. No full-page loading spinners.
