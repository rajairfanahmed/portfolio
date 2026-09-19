# Architecture

## Backend levels

- Runtime: Next.js on Vercel (Static Export / Edge caching)
- API: None (Static generation, `mailto:` only)
- Data: None (Local static TypeScript data structures)
- Auth: None (Fully public portfolio)
- Reliability: 100% Static CDN delivery
- AI layer: None

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Framework | Next.js 15.5 App Router (installed `^15.5.3`) | React framework, routing, Server Components, static generation |
| Language | TypeScript 5.9, Zod 4.6 | Compile-time types; build-time parse of `@/data` |
| Styling | Tailwind CSS v4.1 | Utility-first styling system |
| Motion | Framer Motion 13.4 (installed, not mounted in job `01`) | Physics-based animations, layout morphing, route transitions |
| Hosting | Vercel | Global CDN, static asset delivery, continuous integration |

## Host

- Provider: Vercel
- Project folder name: `rajairfanahmed` (this repository root; `package.json` name `rajairfanahmed-portfolio`)
- Project URL: https://rajairfanahmed.vercel.app/
- Github URL: https://github.com/rajairfanahmed/portfolio
- Environment variables: None required for core build
- Commands: `npm run dev`, `npm run lint`, `npm run build` (production source of truth)

## System Boundaries

The application is a standalone, purely static web frontend. It does not communicate with any owned backend services or databases at runtime. External boundaries consist entirely of outbound hyperlinks opening in new browser tabs (GitHub, LinkedIn, Dev.to, Google Drive for the CV). Contact flow delegates immediately to the user's local operating system via a secure `mailto:` URI scheme. 

## Storage Model

There is no database, CMS, or object storage service. All content—including project details, skills matrices, and experience timelines—is stored within the repository in a strictly typed `@/data` directory as immutable TypeScript files. Records are parsed with Zod schemas in `@/lib/validations` at module load so a bad shape fails `npm run build`. Asset storage (images) relies on the `public/` directory and is optimized during the Next.js build process. Leftover previous-plan routes (`/projects`, `/skills`, `/about`, `/contact`) still exist in `app/` and were not restyled in job `01`.

## Auth and Access Model

The portfolio is entirely public. There is no authentication, authorization, session management, or gated content. 

## API floor

- Zero Runtime APIs: The application must not rely on external APIs fetching data at runtime. All data must be statically compiled during the build step.
- Immutability: No client-side mutations, form submissions, or database writes are permitted.
- Secure External Routing: All external links must enforce `target="_blank"` and `rel="noopener noreferrer"`.
- Edge Compliance: If dynamic utility routes (such as Open Graph image generation) are introduced, they must strictly utilize the Vercel Edge runtime and return responses under 50ms.

## Invariants

- The application must never introduce a runtime database (e.g., PostgreSQL, MongoDB, Prisma).
- The application must never include heavy server-side Node.js dependencies that break Edge or Static export compatibility.
- The build process (`npm run build`) must strictly enforce TypeScript types and never complete successfully if type errors or missing data schemas exist.
- The architecture must never require private environment variables to successfully boot the public production build.