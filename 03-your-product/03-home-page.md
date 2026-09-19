# Unit 03: home-page

# Goal

- The site default is cinematic dark (obsidian canvas, charcoal cards, hot accent). `/` is the executive hook: display name, "Building Applications That Scale Brands.", window chrome, hot skill capsules, View Projects → `/projects`, Download CV. Root layout has route nav and a viewport interaction score.
- This job does not build the Projects grid, About terminal, Contact conversion layout, Framer Motion, or OG images.

# Design

- Visual: layered dark from `03-your-product/ui-context.md`. `--bg-base` `#0A0A0A`, `--bg-surface` `#141414`, `--accent-primary` `#FF4D00`. Light paper tokens exist for the toggle. Display type Geist extra-bold/black at `clamp(3rem, 12vw, 8rem)` with `-0.05em` tracking. Window frame `rounded-2xl` hairline `--border-default` with three `aria-hidden` discs (`--window-close`, `--window-min`, `--window-max`). Hot capsules `rounded-md` for `site.skills`. No glass nav. No photo on Home.
- Layout: keep `max-w-7xl mx-auto px-6 md:px-12` on `<main>`. Add a text `nav` in the root layout (Home, Projects, About, Contact) with `aria-current`. Theme toggle stays. Interaction score is a small corner control (`aria-live="polite"`), not a second header.
- Copy: `{site.name}` is the `h1`. `{site.positioning}` is the one-line. CTAs: View Projects (`next/link` to `/projects`) and Download CV (`site.cvUrl`, `target="_blank"`, `rel="noopener noreferrer"`). Skills from `data/` only.
- Motion this job: CSS only — `active:scale-95`, glowing underline on text links using `--accent-primary`. No Framer Motion yet. Score updates without layout shift (`font-variant-numeric: tabular-nums`).
- API: none. Score is React state in the layout. No `app/api`, no Server Actions, no env vars.
- Follow `03-your-product/ui-context.md` and `03-your-product/architecture.md`.
- Blast radius: `app/globals.css` (tokens), `components/theme-provider.tsx` (`defaultTheme="dark"`), `app/layout.tsx`, `app/page.tsx`, new `components/` (nav, hero, score), thin `app/projects/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx` so nav does not 404. Must not add Framer Motion, `@vercel/og`, WebGL, shadcn, a database, auth, or a contact form. Must not render project cards, terminal bio, or the Contact conversion layout.
- Rollback: restore job `02` (`702f975` / `be0cd0f`) layout, page, globals, and theme provider. Delete new components and extra routes.

# Implementation

1. Do not install packages. Do not add `framer-motion` or `@vercel/og`.
2. Replace the zinc/indigo token values in `app/globals.css` with the obsidian / charcoal / hot / window tokens in `03-your-product/ui-context.md`. Keep `:root` + `.dark`. Map new `--bg-elevated` and window variables in `@theme inline`. Default the document to dark (`.dark` on `<html>` only via `next-themes`, not a hardcoded class that fights the toggle).
3. Set `next-themes` `defaultTheme="dark"` in `components/theme-provider.tsx`. Keep `attribute="class"`, `enableSystem`, `disableTransitionOnChange`.
4. Set `site.positioning` in `data/index.ts` to `Building Applications That Scale Brands.` Do not hardcode that string in JSX.
5. Create `components/site-nav.tsx` (Server Component, named export). Links to `/`, `/projects`, `/about`, `/contact`. `aria-current="page"` on the active route. 44px targets. Glowing underline on hover. No glass.
6. Create `components/interaction-score.tsx` (client, named export). Count clicks, scrolls, and hovers on `window`. Show a compact score in a viewport corner. `aria-live="polite"`. `tabular-nums`. Do not write to `localStorage`, cookies, or a server. Mount it once in the root layout so the count survives client navigations.
7. Create `components/hero.tsx` (Server Component). Window chrome + `h1` + positioning + hot capsules from `site.skills` + the two CTAs. No `"use client"`. No hex. No `next/image` on this page.
8. Replace the scaffold heading in `app/page.tsx` with `<Hero />`.
9. Add thin `app/projects/page.tsx`, `app/about/page.tsx`, and `app/contact/page.tsx` that render only an `h1` label (Projects, About, Contact). Do not build those pages' real layouts here.
10. Confirm there is still no `app/api`, no secrets, no database client, no unused components.
11. Run lint, types, and `npm run build`. All must be green before push.

# Dependencies

- Job `01-project-setup` (Done)
- Job `02-theme-and-layout` (Done)
- GitHub: https://github.com/rajairfanahmed/portfolio
- Vercel: https://rajairfanahmed.vercel.app/

# Verify when done

- [x] https://rajairfanahmed.vercel.app/ is dark obsidian (`#0A0A0A` / `rgb(10, 10, 10)`), not zinc `#FAFAFA`, unless the visitor toggled light
- [x] The main heading is Raja Irfan Ahmed in large bold type and the line reads Building Applications That Scale Brands.
- [x] A window frame with red/yellow/green dots sits on the hero (decorative, not three extra buttons in Tab order)
- [x] Hot capsules show skills from `data/`
- [x] View Projects goes to `/projects` (thin heading is enough this job)
- [x] Download CV still opens the locked Google Drive URL
- [x] Nav lists Home, Projects, About, Contact. Theme toggle still works
- [x] The interaction score changes on click, scroll, or hover and does not appear as a form
- [x] Tab reaches nav, CTAs, toggle, and shows a visible focus ring
- [x] CTAs are at least 44×44px
- [x] No project cards, terminal bio, or contact-form layout on `/`
- [x] `npm run build` passes
- [x] UX floor that applies: keyboard path and visible focus; 44px targets; both themes use the locked tokens; score is live but optional; no new form; no second token set
- [x] API floor that applies: no list endpoint; no secrets; score is not stored on a server; build command is `npm run build`
