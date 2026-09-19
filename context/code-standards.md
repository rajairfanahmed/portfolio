# Code Standards

## General

- Keep every component small and single-purpose. A component renders one section or one reusable UI piece, not multiple unrelated concerns.
- Fix root causes. Do not patch a broken layout or type error with a workaround that hides the underlying issue.
- Do not hardcode content inside components. All text, links, and project data are read from `data/`, never written inline in JSX.
- Do not introduce a dependency for something Tailwind, Framer Motion, or Next.js already solves natively.
- Every new component must be used somewhere in the app. Do not commit unused components or dead code.

## TypeScript

- Strict mode is required in `tsconfig.json` throughout the project. Do not disable or weaken strict checks.
- Use `interface` for defining the shape of component props and data objects (e.g. `Project`, `SkillTag`). Use `type` for unions, intersections, and utility type compositions.
- Do not use `any`. If a type is genuinely unknown, use `unknown` and narrow it explicitly before use.
- Define the `Project` type once in `data/` and import it everywhere it is used. Do not redefine or duplicate the shape in multiple files.
- Every component's props must be typed with an explicit interface. Do not infer prop types implicitly or use untyped destructuring.

## Next.js

- Default every component to a server component. Add `"use client"` only when the component requires browser interactivity (state, effects, event handlers, Framer Motion animation triggers, the theme toggle).
- Keep the theme toggle, project card hover interactions, and any Framer Motion-driven component as client components. Keep static content sections (Hero text, About text) as server components wherever they contain no interactivity.
- Do not fetch data at runtime. All content comes from the static `data/` files at build time, since this project has no backend or API.
- Do not create API routes for this project. If a future requirement genuinely needs one, treat that as a scope change requiring an explicit decision, not a default implementation choice.
- Use the Next.js file conventions for metadata (`opengraph-image.tsx`, `favicon.ico`, `metadata` exports) rather than manually injecting `<meta>` tags.

## Styling

- Use Tailwind utility classes directly in components. Do not write custom CSS files except for global resets and font-face declarations.
- Use the defined design tokens only: `zinc` neutrals, the indigo accent range (`#6366F1`–`#7C3AED`), Geist Sans, and Geist Mono. Do not introduce new colors or fonts outside this palette without an explicit design decision.
- Do not hardcode raw hex values in components. Reference Tailwind's configured color tokens instead.
- Follow the fixed spacing scale for all sections: `py-24`/`py-32` desktop and `py-16` mobile for section padding, `max-w-7xl mx-auto px-6 md:px-12` for containers, `space-y-12`/`space-y-16` for intra-section spacing. Do not introduce arbitrary spacing values outside this scale.
- Use `focus-visible:` utilities for all interactive element focus states. Never remove or fail to style the focus outline.

## API Routes

- This project has no API routes and no backend. This section exists to record the constraint, not to define request-handling conventions.
- The `mailto:` link is the only contact mechanism. Do not add a form submission endpoint, serverless function, or third-party form integration without explicitly revisiting this decision.
- If a future version introduces an API route (e.g. for a contact form), it must validate all input before processing, return a consistent JSON response shape, and contain no business logic beyond that single responsibility.

## Data and Storage

- All project, bio, skills, and link content lives in `data/` as typed, exported constants. No content lives inline in components.
- The CV file itself is not stored in the codebase. It lives on Google Drive, referenced only by its public URL in `data/`.
- Images live in `public/`, referenced by path from `data/` or directly in components, and always rendered through `next/image`.
- Do not introduce a database, ORM, or any persistent storage layer. There is no data to persist beyond static content shipped at build time.
- When project content changes, update `data/` directly and redeploy. There is no migration process, since there is no database.

## File Organization

- `app/` — Route-level pages, layouts, and Next.js metadata files (`opengraph-image.tsx`, `favicon.ico`). Owns page composition only, not content or reusable UI logic.
- `components/` — Reusable UI components (Hero, ProjectCard, BentoGrid, ThemeToggle, ContactSection, etc.). Owns presentation and interaction, not content.
- `data/` — Central typed content source: projects array, bio/skills text, social links, CV URL. The single source of truth for all site content.
- `lib/` — Shared utilities: Framer Motion animation variants, theme helper functions, any small pure helper logic used across components.
- `public/` — Static assets: profile photo, project screenshots, favicon source file.