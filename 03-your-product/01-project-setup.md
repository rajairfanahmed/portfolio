# Unit 01: project-setup

# Goal

- A new Next.js App Router app boots on Vercel with TypeScript, Tailwind tokens, Geist Sans and Geist Mono, `lucide-react` installed, and a typed `data/` folder that holds all site content.
- The old portfolio app files stay gone. This job does not build Hero, About, Projects, Contact, theme toggle, motion, or OG images.

# Design

- Visual: default to the light token set from `03-your-product/ui-context.md` on `:root`. Also declare `.dark` token values in CSS so job `02` can switch them. Home page is a minimal scaffold only: page background `--bg-base`, text `--text-primary`, Geist Sans, container `max-w-7xl mx-auto px-6 md:px-12`. No bento, no CTAs, no section stack, no Sun/Moon control.
- Content: `data/` is the only content source. Use locked facts (name, positioning, contact, education). Use approved placeholders for projects, experience, skills, and bio. Mark placeholders with comments in `data/`, not "lorem" on the page.
- API: none. No `app/api`, no Server Actions, no env vars.
- Follow `03-your-product/ui-context.md` and `03-your-product/architecture.md`.
- Blast radius: replaces the previous Next.js app (`app/`, `components/`, `data/`, `public/` defaults, `package.json`). Must not add `next-themes`, Framer Motion, `@vercel/og`, shadcn, a database, auth, or a contact form. Must not write Hero, About, Projects, Contact, or theme-toggle components.
- Rollback: delete the new scaffold files and restore git commit `31104e2` (`fix: replace deprecated lucide-react brand icons with SVGs`).

# Implementation

1. Keep the previous app deleted. Do not restore `app/`, `components/`, `data/`, `public/`, or the old `package.json` from commit `31104e2`.
2. Scaffold a current Next.js App Router project in this repo root (TypeScript, Tailwind, ESLint, App Router). Reuse the existing `.gitignore`. Do not create a nested app folder.
3. Install only what this job needs: Next.js, React, TypeScript, Tailwind, `lucide-react`, and Geist (via `next/font` or the `geist` package). Do not install `next-themes`, `framer-motion`, or `@vercel/og`.
4. Enable TypeScript strict mode. Do not weaken it.
5. In global CSS, define the semantic variables from `03-your-product/ui-context.md` (`--bg-base`, `--bg-surface`, `--text-primary`, `--text-muted`, `--accent-primary`, `--accent-muted`, `--border-default`, `--state-error`, `--state-success`) for light on `:root` and dark on `.dark`. Map them to Tailwind utilities (`bg-base`, `text-primary`, and the rest). No hex in later components.
6. Wire Geist via the `geist` package (`GeistSans`, `GeistMono`). Map `--font-geist-sans` / `--font-geist-mono` to Tailwind `--font-sans` / `--font-mono` in `app/globals.css`. Do not use `next/font/google` (this machine cannot fetch Google Fonts).
7. Create `data/` with shared interfaces and exported constants. Define each shape once:
   - `Project`: `title`, `problem`, `tags` (`string[]`), `githubUrl`, `demoUrl`, `imageSrc`, `isFlagship`
   - `ExperienceItem`: `title`, `org`, `dates`, `summary`
   - `EducationItem`: `title`, `org`, `dates`
   - `SiteContent` (or equivalent named exports): `name`, `positioning`, `bio`, `skills`, `projects`, `experience`, `education`, `email`, `linkedinUrl`, `githubUrl`, `devtoUrl`, `cvUrl`
8. Fill locked values: name `Raja Irfan Ahmed`; positioning `Full Stack AI Web Apps Developer`; email `rajairfana551@gmail.com`; LinkedIn `https://www.linkedin.com/in/rajairfanahmed/`; GitHub `https://github.com/rajairfanahmed`; dev.to `https://dev.to/rajairfanahmed`; CV `https://drive.google.com/file/d/1CRblzPL3j8W6mv06d6FzW-zujSwqs9tN/view?usp=drive_link`; education one row: BSCS, National University of Modern Languages, Islamabad, 2026.
9. Fill approved placeholders (3–5 projects, one `isFlagship: true`; one experience row; a short bio; a short skills list). Comment them as placeholders. `imageSrc` may point at files that job `03` and `05` will add later. Do not add those images in this job.
10. Root layout: language, fonts, token CSS, a single `<main>`. No theme provider. No hardcoded copy.
11. Home `app/page.tsx`: Server Component. Import name (and only what the scaffold needs) from `data/`. Render a short proof that the app and tokens work. Do not render Hero CTAs, About, Experience, Projects grid, or Contact.
12. Do not add files under `components/` in this job except if the scaffold cannot avoid a font/layout helper. No unused UI components.
13. `public/` may be empty. Do not keep the old Next/Vercel SVGs as the site identity.
14. Confirm there is no `app/api`, no secrets, no database client.
15. Run lint, types, and `npm run build`. All must be green before push.

# Dependencies

- GitHub repo: https://github.com/rajairfanahmed/portfolio (this folder is the repo; remote `origin` is already set)
- Vercel project URL: https://rajairfanahmed.vercel.app/
- No earlier build jobs

# Verify when done

- [x] https://rajairfanahmed.vercel.app/ loads the new scaffold, not the old portfolio (no old Hero, project bento, or "Say Hello")
- [x] Page background and text match the light tokens (`--bg-base` `#FAFAFA`, `--text-primary` `#09090B`)
- [x] Body type is Geist Sans
- [x] Visible text includes the name from `data/` (`Raja Irfan Ahmed`), not a hardcoded string in `app/page.tsx`
- [x] No theme toggle, no project cards, no mailto button, no contact form
- [x] View source / network: no `/api` routes and no auth
- [x] `npm run build` passes
- [x] UX floor that applies: no long list on this page; if `data.projects` is empty later, this job still does not render a grid. No new form. Tokens only from `03-your-product/ui-context.md`
- [x] API floor that applies: no list endpoint; no secrets in the repo; build command is `npm run build`
