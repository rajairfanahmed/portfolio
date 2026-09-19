# Unit 04: projects-page

# Goal

- `/projects` shows the featured work in a high-density asymmetric grid of cards.
- Each card presents a dark-mode mockup, hover scale inside the card, glowing border, tech badges, and direct links to GitHub and a live demo.

# Design

- **Visual**: Bento grid layout. 1 column on mobile, 2 on tablet, 3+ on desktop. Heavy charcoal surfaces (`--bg-surface`) with thin `--border-default` hairlines. On hover, the image scales slightly inside an `overflow-hidden` container, and the card border illuminates with a hot glow (`--accent-primary` or `--accent-muted`).
- **Data**: Renders projects from `data/index.ts`. If the user hasn't provided real data yet, use the current placeholders but ensure the schema expects `title`, `description` (problem line), `tags`, `githubUrl`, `demoUrl`, `image` path, and a `flagship` boolean to dictate asymmetric column spans.
- **Motion**: CSS `transform` and `opacity` only (e.g., `group-hover:scale-105` on images). Framer Motion is strictly deferred to Job 07.
- **Follow**: `03-your-product/ui-context.md` and `03-your-product/architecture.md`.
- **Blast radius**: `app/projects/page.tsx`, `data/index.ts`, new `components/project-card.tsx` or `components/projects-grid.tsx`. Must not break `/`, `/about`, or `/contact`.
- **Rollback**: Delete `components/project-card.tsx`. Revert `app/projects/page.tsx` to the thin `h1` scaffold from Job 03. Restore `data/index.ts`.

# Implementation

1. Update the projects data structure in `data/index.ts` to fully represent the needed fields (`title`, `description`, `tags`, `image`, `githubUrl`, `demoUrl`, `flagship`). Ensure "ThreatChain (FYP)" and "Aura Gemstones" are stubbed if details are missing.
2. Create `components/project-card.tsx` (Server Component). Render `next/image` edge-to-edge at the top inside a constrained, `overflow-hidden` container.
3. Below the image in the card, render the title, description, a cluster of tech badges (using `Geist Mono` or standard sans `rounded-md` tags), and the external action links (GitHub, Demo) with Lucide icons.
4. Add the CSS hover states using Tailwind group variants: image scale (`group-hover:scale-[1.02] transition-transform`) and border glow (`group-hover:border-accent-primary/50 group-hover:shadow-[0_0_15px_var(--color-accent-muted)]`).
5. Update `app/projects/page.tsx` (Server Component) to map over `site.projects` and render a CSS grid. For asymmetric density, make any project marked `flagship` span 2 columns on desktop breakpoints (`md:col-span-2`).
6. Handle the UX floor empty state: if `site.projects` is empty, show a polite message instead of a broken grid.
7. Run lint, types, and `npm run build`.

# Dependencies

- Job `01-project-setup` (Done)
- Job `02-theme-and-layout` (Done)
- Job `03-home-page` (Done)

# Verify when done

- [x] `/projects` renders a high-density grid of project cards
- [x] Layout is responsive: 1 column on mobile, multiple columns on desktop (with asymmetric spans for flagship items)
- [x] Cards have a dark charcoal background (`#141414` / `bg-surface`) and a hairline border
- [x] Hovering a card scales the image slightly without the card itself changing size or shifting
- [x] Hovering a card illuminates the border with a hot accent glow
- [x] Each card shows a title, problem line, and tech badges
- [x] GitHub and Demo links are present, accessible via keyboard Tab, and have at least a 44x44px hit area
- [x] Images are rendered via `next/image` with correct `alt` text and no layout shift
- [x] `npm run build` passes
- [x] UX floor that applies: keyboard path and visible focus; 44px targets; no new form; empty state handles if no projects exist
- [x] API floor that applies: no list endpoint; no secrets; build command is `npm run build`
