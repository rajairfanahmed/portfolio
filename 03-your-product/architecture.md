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
| Framework | Next.js 15.5.3 (App Router) | Four static routes, layout chrome, Vercel output |
| Language | TypeScript 5.9.2 (strict) | Types for components and the `data/` layer |
| UI runtime | React 19.1.1 | UI. Client islands only for theme, interaction score, and motion |
| UI / styling | Tailwind CSS 4.1.13 via `@tailwindcss/postcss` 4.1.13 | Utilities and theme tokens in `app/globals.css` (`@theme inline`). No `tailwind.config.ts` |
| Typography | Geist Sans + Geist Mono (`geist` 1.5.1, local files) | Display and body = Geist Sans (black/bold for headers). Mono = terminal, metadata, commands. `--font-geist-*` mapped to `--font-sans` / `--font-mono` |
| Icons | lucide-react 0.544.0 | Theme toggle, nav if needed, About stack glyphs. No third-party brand-icon pack |
| Lint | ESLint 9.35.0 + eslint-config-next 15.5.3 | `npm run lint` runs `eslint`. Ignores `.next/`, `node_modules/`, `out/`, `next-env.d.ts` |
| Theming | next-themes 0.4.6 | `attribute="class"`, `defaultTheme="dark"`, `enableSystem`, `disableTransitionOnChange`. Persistent layout background. Job `03` switches default from system to dark |
| Animation | Framer Motion | Not installed yet. Job `07-motion-and-transitions` adds spring route transitions and card hover. `active:scale-95` is CSS from job `03` |
| Images | next/image | Project mockups under `public/`. Profile photo only if it lands in `data/` + `public/` for About |
| Metadata | @vercel/og | Not installed. Job `08-seo-and-metadata` |
| Auth | None | Public site, no sessions |
| Database | None | No database in any environment |
| Contact | `mailto:` | Client-side email only. Rendered on `/contact` in job `06` |
| Host | Vercel | Static deploy and CDN |
| Package name | `rajairfanahmed-portfolio` | `package.json` |

Do not add WebGL, Three.js, Barba.js, `@tanstack/react-virtual`, or Embla unless this file is updated first.

## Host

- Platform: Vercel
- Project URL: https://rajairfanahmed.vercel.app/
- GitHub: https://github.com/rajairfanahmed/portfolio
- Build command: `npm run build`
- Dev command: `npm run dev`
- Start command: `npm run start`
- Lint command: `npm run lint`
- Env names (not values): none. This static site does not read secrets.

## System Boundaries

- `app/` — Exists. `layout.tsx`, `page.tsx`, `globals.css`, `projects/page.tsx`, `about/page.tsx`. Later: `contact/page.tsx`. No `app/api`.
- `data/` — Exists. `index.ts` is the typed content source (`site: SiteContent`).
- `components/` — Exists. `theme-provider.tsx`, `theme-toggle.tsx`, `site-nav.tsx`, `hero.tsx`, `interaction-score.tsx`, `project-card.tsx`, `terminal-frame.tsx`.
- `lib/` — Does not exist yet. Reserved for motion variants and small pure helpers.
- `public/` — Exists. `projects/` for mockups. Optional profile photo later.
- No `src/` directory. Import alias `@/*` maps to the repo root.

## Routes

| Path | Page | Job |
| --- | --- | --- |
| `/` | Home — executive hook | `03-home-page` |
| `/projects` | Projects — technical evidence | `04-projects-page` |
| `/about` | About — terminal bio, stack bento, education | `05-about-page` |
| `/contact` | Contact — conversion | `06-contact-page` |

The root layout owns fonts, tokens, ThemeProvider, site nav, theme toggle, and the interaction score. Page files compose sections only.

## Storage Model

- Database: none in any environment.
- Local files: images in `public/`, optimized at build by `next/image`. No uploads.
- External file: CV PDF on Google Drive, public anyone-with-the-link URL in `data/`. Not bundled.
- Cache: Vercel CDN only. The app does not manage a cache.
- Interaction score: React state in the browser only. Not written anywhere.

## Auth and Access Model

- No sign-in, sessions, accounts, or roles. Every URL is public.
- Every visitor sees the same content. Theme is dark by default or the visitor's toggle.
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
4. Theme must resolve before paint. No FOUC. Route changes must not flash a white document background.
5. Contact stays `mailto:` unless this file is updated first. No Formspree, EmailJS, or form endpoint.
6. Every image goes through `next/image`. Raw `<img>` is forbidden.
7. Do not run models, inference, queues, or cron jobs inside this app.
8. Do not persist visitor interaction counts off the device.
