# Prompt: stack

Use this after `03-your-product/project-overview.md` is real.

# You replace

`03-your-product/architecture.md`

# You read

- `03-your-product/project-overview.md`
- `04-always-on-rules/catalog-backend.md`
- `04-always-on-rules/floor-api.md`

# You ask

Recommend one set of backend axes from `04-always-on-rules/catalog-backend.md`. Mark one option recommended. Wait for the user to confirm. Then write the file.

Default if they have no preference:

- Runtime: Next.js on Vercel
- API: Server Actions
- Data: none, or Neon if the overview needs storage
- Auth: none, or session if there are users
- Reliability: simple CRUD
- AI layer: none unless the overview needs a model

# You write

Plain markdown. No extra commentary. Headings must match `03-your-product/architecture.md` exactly.

# Headings you must output

- `# Architecture`
- `## Backend levels` (the confirmed axes)
- `## Stack` (table: layer, technology, role)
- `## Host` (Vercel, project URL if known, env var names not values)
- `## System Boundaries`
- `## Storage Model`
- `## Auth and Access Model`
- `## API floor` (paste the rules from `04-always-on-rules/floor-api.md` in project words)
- `## Invariants` (at least four rules that must never break)

# Rules

- Vercel is the host unless the user names another
- Vercel is not the database. If there is data, name Neon or Supabase
- Do not invent folders that the scaffold will not have
- No `[placeholders]`
- Do not write UI tokens here
