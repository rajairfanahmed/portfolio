# Code Standards

## General

- Keep each component to one section or one reusable control.
- Fix the root cause. Do not hide a layout or type error with a workaround.
- Do not hardcode site copy in `app/` or `components/`. Read it from `data/`.
- Do not add a package for something Next.js, Tailwind, Framer Motion, or `next-themes` already does.
- Do not commit unused components or dead exports.
- Do not invent product behavior. If a fact is missing, stop and record it in `03-your-product/progress-tracker.md`.

## Language

- TypeScript strict mode stays on. Do not weaken `tsconfig.json`.
- Use `interface` for component props and data shapes (`Project`, `ExperienceItem`, `EducationItem`, `SiteContent`). Skills are `string[]` on `SiteContent`, not a `SkillTag` type.
- Use `type` for unions, intersections, and utility compositions.
- Do not use `any`. Use `unknown` and narrow before use.
- Define each shared data shape once in `data/` and import it. Do not duplicate the shape.

## Framework

- Default to Server Components. Add `"use client"` only for state, effects, handlers, Framer Motion triggers, or the theme toggle.
- Do not fetch site content at runtime. Import `data/` at build time.
- Do not create `app/api` routes.
- Use Next.js metadata files and `metadata` exports. Do not inject raw `<meta>` tags by hand.
- Use `next/image` for every image. Raw `<img>` is forbidden.
- Use named exports for UI in `components/`. Default exports only for Next.js `page` and `layout` files.

## Styling

- Use tokens from `03-your-product/ui-context.md`. No hardcoded hex in components.
- Use Tailwind utilities in markup. Custom CSS is only for global reset and font faces.
- Do not add colors or fonts outside the locked zinc, indigo, Geist Sans, and Geist Mono set.
- Use the locked spacing: section `py-16` mobile and `py-24`/`py-32` desktop, container `max-w-7xl mx-auto px-6 md:px-12`, stacks `space-y-12`/`space-y-16`.
- Style `:focus-visible` on every interactive control. Do not remove the focus ring.

## API

- Follow the API floor in `03-your-product/architecture.md`.
- Do not add Server Actions, route handlers, or form posts unless architecture is updated first.
- Contact is `mailto:` only. Do not add Formspree, EmailJS, or a submit endpoint.
- If a Server Action is later approved, validate at the boundary, return a typed error envelope, and never leak stack traces.
- Never commit secrets. This app has no env var names today.

## Data

- All projects, bio, skills, experience, and links live in `data/` as typed exported constants.
- Placeholder project and experience rows are allowed until Raja replaces them. Mark them clearly in `data/` comments, not in the UI as "lorem".
- The CV file is not in the repo. Store only the public Google Drive URL in `data/`.
- Image paths live in `data/` or `public/` and render through `next/image`.
- Do not add a database, ORM, or runtime store.

## File Organization

- `app/` — routes, layouts, `globals.css`. Today: `layout.tsx` and `page.tsx` only. Composition only.
- `data/` — typed content and shared interfaces in `data/index.ts`. Export `site`.
- `components/` — not in the tree yet. When added, UI sections and controls only. No content constants.
- `lib/` — not in the tree yet. When added, motion variants and small pure helpers.
- `public/` — not in the tree yet. When added, profile photo, project screenshots, favicon source.
- Tailwind tokens live in `app/globals.css`. Do not add `tailwind.config.ts` unless the stack in `03-your-product/architecture.md` changes.
