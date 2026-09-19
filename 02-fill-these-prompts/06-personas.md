# Prompt: personas

Use this after overview, architecture, UI, and standards in `03-your-product` are real.

# You replace

- `03-your-product/frontend-prompt.md`
- `03-your-product/backend-prompt.md`

# You read

- `03-your-product/project-overview.md`
- `03-your-product/architecture.md`
- `03-your-product/ui-context.md`
- `03-your-product/code-standards.md`
- `04-always-on-rules/lanes-frontend.md`
- `04-always-on-rules/lanes-backend.md`
- `04-always-on-rules/catalog-frontend.md`
- `04-always-on-rules/catalog-backend.md`
- `04-always-on-rules/floor-ux.md`
- `04-always-on-rules/floor-api.md`
- `04-always-on-rules/persona-notes.md`

# You ask (stop and wait)

Recommend one option per group. Mark exactly one `(recommended)` with one line why. Wait for the user. Then write both files for **those** lanes only.

Frontend visual execution (separate options):

- Google
- Awwwards
- Apple
- Dribbble
- E-commerce
- SaaS
- Linear
- Vercel
- Stripe
- Shopify

Frontend motion (separate options):

- Apple
- Stripe
- Awwwards
- Linear

Frontend product UX (separate options):

- Raycast / command palette
- Supabase / tabular
- E-commerce CRO
- SaaS dashboard
- Shopify store

Frontend accessibility (usually Shopify / FWA / WCAG 2.2 AA unless they waive it)

Backend (separate options, must match `architecture.md`):

- Vercel Edge / Cloudflare Workers
- Stripe contracts (Zod)
- Supabase security
- Simple CRUD only (if the product has almost no API)

Default recommend for a 2026 developer portfolio: Visual **Linear**, also study **Vercel**. Motion **Apple** plus **Stripe**. UX **Raycast**. Access **WCAG**. Backend **Vercel Edge** + **Stripe contracts** + **Supabase security** if there are routes or a contact form.

# You write

Two files. Imperative voice. Year-current craft (2026). Project-specific names, tokens, and routes from the context files. No generation comments. No extra commentary.

# Frontend file must include

- `# Frontend Expert`
- `## Role` (10+ years. This stack. Award-level. You do not build basic flat dark pages)
- `## Levels` (the four confirmed lanes, named, with one-line craft)
- `## Competencies` (App Router, CSS/Tailwind, Framer Motion, tables/bento — only if the lanes need them)
- `## Visual law` (tokens from `ui-context.md` plus lane rules from `lanes-frontend.md`)
- `## Motion law` (GPU only, springs, layoutId, no width/height animation, 60fps if Awwwards)
- `## UX floor` (`floor-ux.md` plus lane extras: Cmd+K, dock, skeletons, no white flash)
- `## Quality`
- `## Anti-patterns` (must include: never the failed generic portfolio look — flat `#000`, orange chip soup, placeholder circles, fake terminal as the whole identity, lifeless cards, unpaginated lists, default scrollbars)

# Backend file must include

- `# Backend Expert`
- `## Role`
- `## Levels` (confirmed backend lanes)
- `## Competencies`
- `## API law` (Zod, pagination envelope, edge budget)
- `## Security`
- `## Data`
- `## Anti-patterns`

# Rules

- Specific to the user's picks. A Shopify store persona does not get Awwwards scroll-hijack. Linear does not get Material 3 blobs
- Copy craft from `04-always-on-rules/lanes-frontend.md` quality bar when they pick Linear / Vercel / Apple / Stripe / Raycast
- Adapt NUML, GitHub stats, contact forms, and schemas only if they exist in `project-overview.md`
- If there is no backend, still write `backend-prompt.md`: out of scope, but forms and Server Actions follow `floor-api.md` and the Stripe error envelope
- No `[placeholders]`
