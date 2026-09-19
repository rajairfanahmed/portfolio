# Unit 05: about-page

# Goal

- `/about` presents the developer's mindset, background, and tech stack.
- It uses a stylized terminal frame for the biography, a bento grid for the stack badges, and structured lists for Experience and Education.

# Design

- **Visual**: The primary visual motif is a macOS/Linux terminal window. It needs a window header (red/yellow/green dots) and a prompt using Geist Mono (e.g., `rajairfanahmed@dev:~/portfolio $ cat bio.txt`). The stack section uses a bento grid of dark charcoal cards (`bg-surface`, `border border-default`) with glowing borders on hover and Lucide icons.
- **Data**: Reads `site.bio`, `site.skills`, `site.experience`, and `site.education` from `data/index.ts`.
- **Typography**: `font-mono` used heavily inside the terminal block for authenticity. `font-sans` elsewhere.
- **Motion**: No Framer Motion yet. Basic CSS transitions on the stack cards (`hover:border-accent-primary/50`).
- **Follow**: `03-your-product/ui-context.md` and `04-always-on-rules/floor-ux.md`.
- **Blast radius**: `app/about/page.tsx`, new `components/terminal-frame.tsx`. Must not touch `/projects` or `/contact`.
- **Rollback**: Delete `components/terminal-frame.tsx`. Revert `app/about/page.tsx` to the thin scaffold from Job 03.

# Implementation

1. Create `components/terminal-frame.tsx` (Server Component). It takes `children` and a `command` string. Render a dark window with 3 colored dots in the top left, a mono header showing the prompt (e.g., `rajairfanahmed@dev:~/portfolio $ {command}`), and the children inside a `p-6` body.
2. Update `app/about/page.tsx` to structure the page into three vertical sections with ample whitespace (`space-y-16` or similar):
   - **Mindset**: Render `site.bio` inside the `<TerminalFrame command="cat bio.txt">`.
   - **Stack**: Render a CSS grid of cards mapped from `site.skills`. Map string names to appropriate `lucide-react` icons (e.g., `Database` for PostgreSQL, `Code` for React, `Cpu` for AI, etc.) or fallback to a generic `Terminal` icon.
   - **Background**: Map over `site.experience` and `site.education` in simple, clean list layouts with right-aligned dates. Ensure "BSCS, National University of Modern Languages, Islamabad, 2026" is pulled correctly from the data.
3. Ensure no profile photo is generated or required by default (as noted in the progress tracker), but structure the layout so it is balanced without one.
4. Run lint, types, and `npm run build`.

# Dependencies

- Job `01-project-setup` (Done)
- Job `02-theme-and-layout` (Done)
- Job `03-home-page` (Done)
- Job `04-projects-page` (Done)

# Verify when done

- [x] `/about` renders the biography inside a stylized terminal frame
- [x] Terminal frame uses `font-mono` for the prompt text (`rajairfanahmed@dev...`)
- [x] Stack section renders a bento grid of skills with Lucide icons
- [x] Experience and Education sections render the lists from `data/index.ts`
- [x] BSCS at National University of Modern Languages is visible
- [x] Grid layouts adjust correctly on mobile (1 column) vs desktop (multi-column)
- [x] Focus states and 44px hit areas are respected for any links added
- [x] `npm run build` passes
- [x] UX floor that applies: keyboard path and visible focus; empty state handles if no experience exists
- [x] API floor that applies: fully static, no list endpoint, build command is `npm run build`
