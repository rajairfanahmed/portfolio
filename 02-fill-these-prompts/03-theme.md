# Prompt: theme

Use this after `03-your-product/project-overview.md` and `03-your-product/architecture.md` are real.

# You replace

`03-your-product/ui-context.md`

# You read

- `03-your-product/project-overview.md`
- `03-your-product/architecture.md`
- `04-always-on-rules/catalog-frontend.md`
- `04-always-on-rules/floor-ux.md`

# You ask

Recommend one set of frontend axes from `04-always-on-rules/catalog-frontend.md`. Mark one option recommended. Wait for the user to confirm. Then write the file.

Say why it fits this product. If two surfaces exist (marketing vs app), recommend two named sets.

# You write

Plain markdown. No extra commentary. Headings must match `03-your-product/ui-context.md` exactly.

# Headings you must output

- `# UI Context`
- `## Frontend levels` (the confirmed axes)
- `## Theme`
- `## Colors` (semantic CSS variables and hex values)
- `## Typography`
- `## Border Radius`
- `## Component Library`
- `## Layout Patterns`
- `## Icons`
- `## Skills and stack` (from the chosen levels in `04-always-on-rules/catalog-frontend.md`)
- `## Tables` (from those levels)
- `## Pagination` (from those levels)
- `## Level UX` (from those levels)
- `## UX floor` (paste the rules from `04-always-on-rules/floor-ux.md` in project words)

# Rules

- Tokens only. No hardcoded hex in later code
- Visual level never removes pagination, empty, loading, error, or forms
- WCAG 2.2 AA unless the user waives it here in writing
- Match the stack already in `03-your-product/architecture.md` (example: Tailwind + shadcn)
- No `[placeholders]`
