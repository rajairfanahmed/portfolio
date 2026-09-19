# UI Context

## Frontend levels

- Direction: Awwwards / Vercel
- Presentation: Bento Grid / Tabular Matrix
- Product UX: SaaS Dashboard / Raycast
- Engineering: Utility-first (Tailwind), Accessible (WCAG 2.2 AA), SEO-first
- Theming: Spatial Dark / Editorial Light

## Lanes

- Visual execution: Linear / Vercel (recommended)
- Motion: Apple / Stripe (recommended)
- Product UX: Raycast (recommended)

## Theme

The application uses a persistent, high-fidelity dual-theme system (Dark and Light) managed via `next-themes`. Transitions between themes are instantaneous at the DOM layer, paired with Framer Motion cross-fades to prevent flashing. The design relies on spatial depth and layered elevation rather than flat backgrounds.

## Colors

All colors are mapped to CSS variables in `app/globals.css`. Do not use hardcoded hex values in component utility classes.

**Dark Mode (Obsidian & Charcoal)**
- `--bg-base`: `#050506` (Obsidian background)
- `--bg-surface`: `#0A0A0C` (Elevated charcoal canvas)
- `--bg-surface-hover`: `#111114`
- `--border-subtle`: `rgba(255, 255, 255, 0.08)` (Outer border)
- `--border-highlight`: `rgba(255, 255, 255, 0.12)` (Inner milled edge)
- `--text-main`: `#FAFAFA`
- `--text-muted`: `#A1A1AA` (Zinc 400)
- `--accent-primary`: `#6366F1` (Electric Indigo)
- `--accent-glow`: `rgba(99, 102, 241, 0.15)`

**Light Mode (Bone & Paper)**
- `--bg-base`: `#FCFCFD` (Bone white background)
- `--bg-surface`: `#FFFFFF` (Stark white canvas)
- `--bg-surface-hover`: `#F4F4F5`
- `--border-subtle`: `rgba(0, 0, 0, 0.08)`
- `--border-highlight`: `rgba(0, 0, 0, 0.04)`
- `--text-main`: `#09090B`
- `--text-muted`: `#71717A` (Zinc 500)
- `--accent-primary`: `#4F46E5` (Deep Indigo)
- `--accent-glow`: `rgba(79, 70, 229, 0.12)`

## Typography

- Display / Headings: `Geist Black` or `Clash Display`. Usage: `tracking-tight` or `-0.05em` letter spacing for massive, heroic impact.
- Body Copy: `Geist` or `Inter`. Usage: High optical legibility, `leading-relaxed`.
- Technical / Metadata: `Geist Mono`. Usage: Terminal frames, repository tags, timestamps, code snippets.
- Numbers: All tabular data (pagination, skill metrics, dates) must use `tabular-nums` to eliminate horizontal jitter.

## Border Radius

- `--radius-sm`: `0.375rem` (`rounded-md`) - Small UI elements, command palette inputs.
- `--radius-lg`: `1rem` (`rounded-2xl`) - Bento grid cards, project containers, floating dock.
- `--radius-full`: `9999px` (`rounded-full`) - Pills, active nav indicators, avatars.

## Component Library

- Strictly custom UI components built with Tailwind CSS v4 and Framer Motion. 
- No bulky generic component libraries (e.g., Bootstrap, Material UI). 
- Headless UI or Radix primitives may only be used for complex accessible components (e.g., Dialogs) if strictly necessary.

## Layout Patterns

- **Responsive Fluidity:** The 12-column bento grid strictly collapses to 2 columns on tablet (md) and 1 column on mobile (sm). Container widths are capped at max-w-7xl for ultra-wide desktop monitors, with fluid scaling down to 320px mobile viewports. Zero horizontal scrolling is permitted.
- **Floating Dynamic Dock:** Anchored at `top-6` (desktop) or `bottom-6` (mobile) with `backdrop-blur-xl`. Houses navigation links and the theme toggle.
- **Asymmetric Bento Grids:** 12-column dynamic CSS grids collapsing to 1 column on mobile. Used for the `/projects` gallery and Home page preview.
- **Spatial Cards:** All bento cards use a dual-border system (inner and outer translucent borders) to mimic physical glass/aluminum, with image mockups contained within `overflow-hidden`.

## Icons

- Lucide React.
- Icons are strictly sized (e.g., `w-4 h-4` or `w-5 h-5`) and mapped to `--text-muted` by default, illuminating to `--text-main` or `--accent-primary` on hover.

## Motion

- **Physics Engine:** Framer Motion utilizing spring physics (`mass: 0.8, stiffness: 250, damping: 24`). Zero linear easings.
- **Tactile Feedback:** `active:scale-95` on all interactive buttons and dock pills.
- **Hover Mechanics:** Inner images scale up (`scale-[1.02]`) inside fixed-dimension cards. A `usePointer` radial gradient tracks the mouse cursor within the bounding box of project cards.
- **Layout Morphing:** `layoutId` drives the active state pill in the floating dock, gliding smoothly between routes. `<AnimatePresence mode="wait">` cross-fades full page routes.

## Skills and stack

- Rendered as dense, structured tabular matrices or Raycast-style command lists on the `/skills` page, organized by domain (Frontend, Backend, Architecture).
- Never render technical skills as plain comma-separated strings or disorganized tag clouds.
- Utilize proficiency or "Production Ready" visual indicators.

## Tables

- Used for high-density data (skills, deep coursework, or experience logs).
- Sticky headers (`sticky top-0`) with a subtle bottom border (`border-b border-subtle`).
- Rows utilize a subtle hover background (`hover:bg-[var(--bg-surface-hover)]`) without scaling.

## Pagination

- Cursor or offset-based chunking for long data views.
- Controls rendered as tactile, rounded buttons (Next/Prev) with strict disabled states (`opacity-50 cursor-not-allowed`).
- Hydration and page switches must display shimmering skeleton rows matching the exact dimensions of the expected data to maintain zero CLS.

## Level UX

- **Keyboard First:** Full `Tab` navigability across the floating dock, bento grids, and data tables.
- **Command Palette:** `Cmd+K` global shortcut to open a Raycast-style search overlay for instantly filtering projects, jumping to routes, or downloading the CV.

## UX floor

- **Mobile Touch Constraints:** On mobile viewports, the floating dock anchors to the bottom (bottom-6). All tap targets (buttons, links, dock pills) must strictly enforce a minimum 44x44px hit area. Hover physics (scale, radial gradients) gracefully degrade to tap-states on touch devices.
- **Accessibility:** Strict adherence to WCAG 2.2 AA contrast ratios in both Dark and Light modes.
- **Focus States:** Every interactive element receives a 2px offset focus ring (`focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:outline-none`).
- **Touch Targets:** Minimum `44x44px` clickable area for all mobile interactive elements.
- **Layout Shift:** Hardcoded aspect ratios (`aspect-video`, `aspect-square`) on all media containers to guarantee zero Cumulative Layout Shift (CLS).