# Unit 01: project-scaffold

# Goal

- A Next.js 15 App Router app exists in this repository (Host → Project folder: `rajairfanahmed`) with TypeScript `strict`, Tailwind CSS v4, Geist fonts, Framer Motion installed, and a strongly typed `@/data` directory of baseline static records that parse at build time.
- This job does not build the floating dock, theme toggle, home sections, projects grid, skills matrix, about narrative, contact grid, command palette, or Open Graph images.

# Design

- Visual: boot proof only. `app/page.tsx` is a Server Component that reads `{site.name}` from `@/data` and renders it in Geist Sans on a single `<main>`. No bento, dock, hero, timeline, CTAs, or Sun/Moon control.
- Content: `@/data` is the only content source. Use locked facts (name, contact, education, CV URL, intended project titles). Use approved placeholders for bio, current focus, experience, skills, and project problem lines. Mark placeholders with comments in `@/data`, not "lorem" on the page.
- API: none. No `app/api`, no Server Actions, no env vars, no runtime fetch.
- Follow `03-your-product/ui-context.md` and `03-your-product/architecture.md`.
- Blast radius: `package.json` / lockfile, `tsconfig.json`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css` (compile-only), `@/data`, `@/lib/validations`. Must not add `next-themes` usage, dock chrome, page transitions, Lucide UI, `@vercel/og`, a database, auth, or a contact form. Must not create a nested app folder or overwrite discipline folders `01-start-here` through `05-slash-commands`.
- Rollback: restore app files from git commit `fc81446` (`10-theme-and-depth`).

# Implementation

1. Keep the Next.js app in this repository root. Do not `create-next-app` into a nested folder. Do not overwrite the discipline `README.md`.
2. Confirm (or install only what is missing) the packages this job first needs: Next.js 15, React 19, TypeScript, Tailwind CSS v4, `geist`, `framer-motion`, and `zod`. Do not add `next-themes`, `lucide-react`, or `@vercel/og` in this job. If those packages already exist from the previous plan, leave them in `package.json` but do not mount their UI.
3. Enable TypeScript `strict: true`. Keep the `@/*` path alias. Do not weaken types. Do not use `any` or `@ts-ignore`.
4. Wire Geist via the `geist` package (`GeistSans`, `GeistMono`) in `app/layout.tsx`. Map `--font-geist-sans` / `--font-geist-mono` for later jobs. Display weight is Geist Black (900) via Geist Sans — do not add Clash Display.
5. Keep `app/globals.css` able to compile Tailwind v4. Do not implement Obsidian/Bone token pairs, milled borders, or theme switching. That is job `02-theme-and-dock`.
6. Create `@/lib/validations` with Zod schemas and inferred types. Define each shape once:
   - `Project`: `title`, `description` (one line), `tags` (`string[]`), `githubUrl`, `demoUrl`, `imageSrc`, `flagship` (`boolean`)
   - `Skill`: `name`, `category` (`"Frontend" | "Backend" | "Architecture"`), `indicator` (`string`)
   - `ExperienceItem`: `title`, `org`, `dates`, `summary`
   - `EducationItem`: `title`, `org`, `dates`
   - `SiteContent`: `name`, `positioning`, `bio`, `currentFocus`, `skills`, `projects`, `experience`, `education`, `email`, `linkedinUrl`, `githubUrl`, `devtoUrl`, `cvUrl`
7. Export baseline records from `@/data` as immutable constants. Parse the site object with the Zod schema so a missing required field fails `npm run build`.
8. Fill locked values only: name `Raja Irfan Ahmed`; positioning `Building Applications That Scale Brands.`; email `rajairfana551@gmail.com`; LinkedIn `https://www.linkedin.com/in/rajairfanahmed/`; GitHub `https://github.com/rajairfanahmed`; dev.to `https://dev.to/rajairfanahmed`; CV `https://drive.google.com/file/d/1CRblzPL3j8W6mv06d6FzW-zujSwqs9tN/view?usp=drive_link`; education one row: BSCS, National University of Modern Languages, Islamabad, 2026.
9. Fill approved placeholders and comment them: short `bio`; short `currentFocus`; one experience row; the existing placeholder skill names recategorized into Frontend / Backend / Architecture with indicator `Production Ready`; two projects titled ThreatChain (FYP) and Aura Gemstones, both `flagship: true`. Do not invent a third project title. `imageSrc` may point at files later jobs will add. Do not add those images in this job. Do not invent GitHub or live-demo URLs beyond the existing profile / site URLs already used as placeholders.
10. Root layout: `lang="en"`, Geist variables, a single `<main>`. Do not mount `ThemeProvider`, theme toggle, floating dock, `AnimatePresence`, or interaction score. Framer Motion is installed for later jobs only.
11. Home `app/page.tsx`: Server Component. Import `site.name` from `@/data`. Render a short proof that the app boots. Do not render Hero, Selected Work, timeline, Current Focus, or Contact CTA.
12. Do not add `/projects`, `/skills`, `/about`, or `/contact` in this job. If those files exist from the previous plan, do not restyle them here. Do not add files under `components/` for this job.
13. Confirm there is no `app/api`, no secrets, no database client.
14. Run lint, types, and `npm run build`. All must be green before push.

# Dependencies

- GitHub repo: https://github.com/rajairfanahmed/portfolio (this folder is the repo; remote `origin` is already set)
- Vercel project URL: https://rajairfanahmed.vercel.app/
- No earlier build jobs

# Verify when done

- [x] https://rajairfanahmed.vercel.app/ loads
- [x] Visible text includes the name from `@/data` (`Raja Irfan Ahmed`), not a hardcoded string in `app/page.tsx`
- [x] Body type is Geist Sans
- [x] No floating dock, no theme toggle, no project cards, no skills table, no mailto button, no contact form
- [x] View source / network: no `/api` routes and no auth
- [x] `npm run build` passes
- [x] UX floor that applies: no long list on this page; no new form; this job does not invent a second token set
- [x] API floor that applies: no list endpoint; no secrets in the repo; no runtime data fetch; build command is `npm run build`
