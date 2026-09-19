# Architecture

## Backend levels

- Shape: Portfolio / content
- API: Server Actions (unused at runtime; reserved Next.js default only)
- Data: None
- Auth: None
- Runtime: Next.js on Vercel
- Reliability: Simple CRUD (static typed constants in `data/`, not a database), no database required for this project
- AI layer: None

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Framework | Next.js (App Router) | Pages, routing, static output for Vercel |
| Language | TypeScript | Types for components and the `data/` layer |
| UI | Tailwind CSS | Utilities and theme tokens |
| Typography | Geist Sans + Geist Mono (`geist` package, local files) | UI type and technical metadata |
| Theming | next-themes | Dark/light with no flash on first paint |
| Animation | Framer Motion | Load, scroll, and hover motion |
| Images | next/image | Optimized images, priority hero photo |
| Metadata | @vercel/og | Build-time Open Graph image |
| Auth | None | Public site, no sessions |
| Database | None | No database in any environment |
| Contact | `mailto:` | Client-side email only |
| Host | Vercel | Static deploy and CDN |

## Host

- Platform: Vercel
- Project URL: https://rajairfanahmed.vercel.app/
- GitHub: https://github.com/rajairfanahmed/portfolio
- Build command: `npm run build`
- Dev command: `npm run dev`
- Env names (not values): none. This static site does not read secrets.

## System Boundaries

- `app/` — Routes, root layout, page composition, metadata (`opengraph-image.tsx`, favicon, SEO exports).
- `components/` — Presentational UI (sections, cards, theme toggle). No site copy lives here.
- `data/` — Typed constants: bio, skills, projects, experience, links, CV URL. Single content source.
- `lib/` — Shared helpers (motion variants, theme helpers). No UI, no content.
- `public/` — Profile photo, project screenshots, favicon source.

## Storage Model

- Database: none in any environment.
- Local files: images in `public/`, optimized at build by `next/image`. No uploads.
- External file: CV PDF on Google Drive, public anyone-with-the-link URL in `data/`. Not bundled.
- Cache: Vercel CDN only. The app does not manage a cache.

## Auth and Access Model

- No sign-in, sessions, accounts, or roles. Every URL is public.
- Every visitor sees the same content. Theme is the visitor's system preference or toggle.
- The only external access rule is the Google Drive CV share setting: Anyone with the link can view.

## API floor

- There are no runtime list endpoints. If a Server Action or route that returns a list is ever added, it must paginate. No unbounded dumps.
- If a Server Action or route is ever added, return a typed error envelope. Never send stack traces to the browser.
- There are no writes today. If a write is added, authorize it at the boundary before it runs.
- If any input is accepted later, validate it at the Server Action or route boundary before use.
- There are no payments or webhooks. If either is added, require idempotency keys.
- Never commit secrets. Env lives on Vercel. This app currently needs no env vars.
- `npm run build` in this file is the build command of record.

## Invariants

1. No file under `app/` or `components/` may hardcode project details, bio, skills, or links. Read them from `data/`.
2. Do not add a database, ORM, API route, or runtime data fetch. The site stays a static Vercel build.
3. Do not add authentication, sessions, or gated pages.
4. Theme must resolve before paint. No FOUC and no full-page color fade on first load.
5. Contact stays `mailto:` unless this file is updated first. No Formspree, EmailJS, or form endpoint.
6. Every image goes through `next/image`. Raw `<img>` is forbidden.
7. Do not run models, inference, queues, or cron jobs inside this app.
