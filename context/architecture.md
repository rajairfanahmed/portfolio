# Architecture Context

## Stack

| Layer | Technology | Role |
| --------- | --------------------------- | ------ |
| Framework | Next.js (App Router) | Renders all pages, handles routing, generates static output for deployment |
| Language | TypeScript | Type safety across components and the project data layer |
| UI / Styling | Tailwind CSS | Utility-first styling, theming via `zinc` neutrals and indigo accent |
| Typography | Geist Sans + Geist Mono | Geist Sans for headings/body, Geist Mono for technical metadata (tech tags, links, labels) |
| Theming | next-themes | Dark/light mode switching with no flash of unstyled content on load |
| Animation | Framer Motion | Staggered load animations, scroll-triggered reveals, hover interactions |
| Images | next/image | Image optimization, blur placeholders, priority loading for above-the-fold assets |
| Hosting / Deployment | Vercel | Static deployment, CDN delivery, automatic OG image generation |
| Metadata | @vercel/og | Generates the custom Open Graph share image at build time |
| Auth | None | No authentication layer exists in this project |
| Database | None | No database exists in this project |
| Contact | `mailto:` link | Client-side email handoff, no backend or third-party form service |

## System Boundaries

- `app/` — Route-level pages and layouts. Owns page composition (Hero, About, Projects, Experience, Contact sections) and top-level metadata (`opengraph-image.tsx`, favicon, page-level SEO tags).
- `components/` — Reusable UI building blocks (project card, bento grid, theme toggle, CTA buttons, section wrappers). Owns presentation and interaction logic, not content.
- `data/` — Central hardcoded content source (projects array, bio/skills text, social/contact links, CV link). Owns all site content. Components read from here; nothing here renders UI directly.
- `lib/` — Shared utilities and configuration (e.g. Framer Motion variant definitions, theme configuration helpers). Owns cross-cutting logic used by multiple components.
- `public/` — Static assets: project screenshots, profile photo, favicon source. Owns raw file assets served as-is.
- `styles/` (or Tailwind config at root) — Owns the design tokens: color palette, spacing scale, font configuration.

## Storage Model

- **Database**: None. This project has no database in any environment.
- **File Storage (local)**: Project images and the profile photo live in `public/`, bundled and optimized at build time via `next/image`. No runtime file uploads exist.
- **External File Storage**: The CV PDF is hosted on Google Drive, external to the codebase, and linked via a static URL. It is not bundled, versioned, or optimized by the app.
- **Cache**: None managed explicitly by the application. Any caching present is handled by Vercel's CDN/edge layer for static assets and pages, not configured or reasoned about at the application level.

## Auth and Access Model

- There is no authentication of any kind. Every page and asset is publicly accessible to any visitor with the URL.
- There is no concept of user accounts, sessions, or ownership. All content is authored by Raja directly in the codebase, not created or modified by site visitors.
- There is no access control or permission tiering. Every visitor sees the same content, in either light or dark theme based on their own system/browser preference or manual toggle choice.
- The only "access" boundary in the system is the Google Drive CV link's sharing permission, which must remain set to "Anyone with the link can view" so the download works for all recruiters.

## AI or Background Task Models

- No AI logic runs within the portfolio application itself. There are no model calls, inference requests, or AI-related background jobs anywhere in this codebase.
- The "AI Web Apps" positioning is represented entirely through the linked external projects (GitHub repos and live demos), not through any runtime behavior of this site.
- There are no background tasks, queues, or scheduled jobs of any kind. The site is fully static after build.

## Invariants

1. No component under `components/` or route under `app/` may contain hardcoded content (project details, bio text, links). All content must be read from `data/`, so the content and presentation layers never mix.
2. No backend, database, or server-side data-fetching logic may be introduced. The site must remain a fully static build deployable without a runtime server.
3. No authentication, session, or user-account logic may be added. The entire site remains public with zero access control.
4. The dark/light theme switch must never cause a full-page color transition or visible flash on initial load; theme state must be resolved before hydration via `next-themes`.
5. No contact mechanism other than the `mailto:` link may be added without an explicit decision to revisit this invariant (e.g. no silent introduction of a third-party form service or backend endpoint).
6. Every image rendered on the site must go through `next/image`; raw `<img>` tags are not permitted, to preserve the performance and Core Web Vitals priority.