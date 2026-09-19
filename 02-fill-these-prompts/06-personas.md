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
- `04-always-on-rules/catalog-frontend.md`
- `04-always-on-rules/catalog-backend.md`
- `04-always-on-rules/floor-ux.md`
- `04-always-on-rules/floor-api.md`

# You write

Two files. Imperative voice. Project-specific. No generation comments. No extra commentary around the files.

# Frontend file must include

- `# Frontend Expert`
- `## Role` (years and this stack only)
- `## Levels` (from `03-your-product/ui-context.md`)
- `## Competencies` (this stack only)
- `## Visual law` (tokens and patterns from `03-your-product/ui-context.md`)
- `## UX floor` (from `04-always-on-rules/floor-ux.md`)
- `## Quality`
- `## Anti-patterns`

# Backend file must include

- `# Backend Expert`
- `## Role`
- `## Levels` (from `03-your-product/architecture.md`)
- `## Competencies`
- `## API law` (from `03-your-product/architecture.md` and `04-always-on-rules/floor-api.md`)
- `## Security`
- `## Data`
- `## Anti-patterns`

# Rules

- Write expertise for the chosen levels. A Brutalist site does not get a generic Material persona
- A Minimalist SaaS does not get WebGL rules
- If the app has no backend, `03-your-product/backend-prompt.md` still exists: say what is out of scope and that forms or Server Actions must still follow `04-always-on-rules/floor-api.md`
- No `[placeholders]`
