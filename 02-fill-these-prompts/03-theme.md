# Prompt: theme

Use this after `03-your-product/project-overview.md` and `03-your-product/architecture.md` are real.

# You replace

`03-your-product/ui-context.md`

# You read

- `03-your-product/project-overview.md`
- `03-your-product/architecture.md`
- `04-always-on-rules/lanes-frontend.md`
- `04-always-on-rules/catalog-frontend.md`
- `04-always-on-rules/floor-ux.md`

# You ask

Stop and wait. Recommend named lanes from `04-always-on-rules/lanes-frontend.md`, not a vague "modern dark".

- Visual execution: Google / Awwwards / Apple / Dribbble / E-commerce / SaaS / Linear / Vercel / Stripe / Shopify
- Motion: Apple / Stripe / Awwwards / Linear
- Product UX: Raycast / tabular / E-commerce CRO / SaaS dashboard / Shopify store

Mark one `(recommended)` per group. Then write `ui-context.md`.

For a developer portfolio, recommend Linear + Vercel visual, Apple/Stripe motion, Raycast UX, unless the product is a shop or a 3D campaign.

# You write

Plain markdown. No extra commentary. Headings must match `03-your-product/ui-context.md` exactly.

# Headings you must output

- `# UI Context`
- `## Frontend levels` (catalog axes)
- `## Lanes` (confirmed named lanes: visual, motion, UX)
- `## Theme`
- `## Colors` (semantic CSS variables and hex values. Spatial layers if Linear/Vercel. Never a single flat `#000000` unless they asked for Brutalist)
- `## Typography`
- `## Border Radius`
- `## Component Library`
- `## Layout Patterns` (include dock / command palette if those lanes won)
- `## Icons`
- `## Motion` (from the motion lane)
- `## Skills and stack`
- `## Tables`
- `## Pagination`
- `## Level UX`
- `## UX floor`

# Rules

- Tokens only. No hardcoded hex in later code
- Visual level never removes pagination, empty, loading, error, or forms
- WCAG 2.2 AA unless the user waives it here in writing
- Match the stack already in `03-your-product/architecture.md` (example: Tailwind + shadcn)
- Never output the failed generic portfolio: orange pills, placeholder circles, fake terminal hero, no motion, no depth
