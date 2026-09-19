# Unit 02: theme-and-layout

# Goal

- The root layout wraps page content in the locked section container, `next-themes` switches light and dark with no flash on first paint, and a fixed top-right Sun/Moon control toggles theme instantly.
- This job does not build Hero, About, Projects, Contact, motion, or OG images.

# Design

- Visual: keep the job 01 scaffold heading. Add one control: Lucide `Sun` / `Moon`, stroke 2px, `h-5 w-5`, `rounded-md`, hit area at least 44×44px, `focus-visible` using `--accent-primary`. Fixed top-right. No glass navbar, no gradients. Tokens only from `03-your-product/ui-context.md`. Light is `:root` (`--bg-base` `#FAFAFA`). Dark is `.dark` (`--bg-base` `#09090B`). Instant class swap. No full-page color fade (`disableTransitionOnChange`).
- Layout: root layout applies `max-w-7xl mx-auto px-6 md:px-12` around `<main>`. Do not duplicate that container on `app/page.tsx`.
- API: none. No `app/api`, no Server Actions, no env vars.
- Follow `03-your-product/ui-context.md` and `03-your-product/architecture.md`.
- Blast radius: `package.json` (add `next-themes` only), `app/layout.tsx`, `app/page.tsx` (container move only), new files under `components/`. Must not add Framer Motion, `@vercel/og`, shadcn, a database, auth, or a contact form. Must not render Hero CTAs, About, Projects, or Contact.
- Rollback: remove `components/` theme files, uninstall `next-themes`, restore `app/layout.tsx` and `app/page.tsx` from job `01` (`9cc9c66` / the shipped scaffold).

# Implementation

1. Install `next-themes` only. Do not install `framer-motion` or `@vercel/og`.
2. Create `components/theme-provider.tsx` as a client component. Named export. Wrap `next-themes` `ThemeProvider` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`, `disableTransitionOnChange`.
3. Create `components/theme-toggle.tsx` as a client component. Named export. JSDoc on props if any. Lucide `Sun` in dark mode (action: switch to light) and `Moon` in light mode (action: switch to dark). `aria-label` that states the action. Visible `:focus-visible`. `active:scale-95`. No hex. No site copy from `data/` except none — this control has no product strings.
4. Mount the provider in `app/layout.tsx` around the body children. Keep fonts, `lang="en"`, `bg-base font-sans text-primary`. Set `suppressHydrationWarning` on `<html>` so system theme can resolve before paint. Put `className="dark"` on `<html>` only via `next-themes`, not by hand.
5. Place the toggle in the root layout, `fixed` top-right (`top-4 right-4` or `top-6 right-6`), above content, z-index high enough that the heading does not cover it.
6. Move the section container from `app/page.tsx` onto `<main>` in the layout (`max-w-7xl mx-auto px-6 md:px-12`). Keep page-level vertical padding on the home page (`py-16 md:py-24`) so the heading still sits in the locked rhythm. Home page still reads `{site.name}` from `data/` only.
7. Do not add `lib/` unless a tiny theme helper is required by both provider and toggle. Prefer keeping logic in the two components.
8. Confirm there is still no `app/api`, no secrets, no database client, no unused components.
9. Run lint, types, and `npm run build`. All must be green before push. If this machine hits TLS on `npm install`, install `next-themes` with `--strict-ssl false` locally; do not add Windows-only packages to `package.json`.

# Dependencies

- Job `01-project-setup` (Done)
- GitHub: https://github.com/rajairfanahmed/portfolio
- Vercel: https://rajairfanahmed.vercel.app/

# Verify when done

- [x] https://rajairfanahmed.vercel.app/ still shows only the name heading from `data/` (no Hero CTAs, project cards, or Say Hello)
- [x] A Sun or Moon button is fixed in the top-right corner
- [x] Clicking it switches light ↔ dark instantly with no full-page fade
- [x] Light background is `#FAFAFA` / `rgb(250, 250, 250)` and dark is `#09090B` / `rgb(9, 9, 11)`
- [x] Reload in each theme does not flash the opposite theme (no FOUC)
- [x] Tab reaches the toggle and shows a visible focus ring
- [x] The control is at least 44×44px
- [x] Content sits in `max-w-7xl` with `px-6 md:px-12` (not full-bleed to the viewport edge)
- [x] `npm run build` passes
- [x] UX floor that applies: keyboard path and visible focus; 44px target; both themes use the locked tokens; no new form; no second token set
- [x] API floor that applies: no list endpoint; no secrets; build command is `npm run build`
