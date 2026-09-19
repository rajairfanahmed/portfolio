# Prompt: jobs

Use this after `03-your-product/project-overview.md` and `03-your-product/architecture.md` are real.

# You replace

`03-your-product/00-build-plan.md`

# You read

- `03-your-product/project-overview.md`
- `03-your-product/architecture.md`
- `04-always-on-rules/recipe-format.md`

# You write

Plain markdown. No extra commentary. Headings must match `03-your-product/00-build-plan.md` exactly.

# Headings you must output

- `# Build Plan`
- `## Jobs`

Then one block per job:

- `### 01-short-name`
- Goal
- Recipe file (`03-your-product/01-short-name.md`)
- Dependencies
- Status: Pending

# Rules

- Numbers are `01`, `02`, `03`. The name is the file name
- One visible result per job
- Do not mix UI, database, and background work in one job
- Job `01` is scaffold or site shell **inside the project folder** if no app exists yet. Not the whole product. Not in the discipline root
- Auth before the pages it protects
- Data model before the screens that need it
- Infra (env, Vercel notes) belongs in an early job if the app is new
- Only In Scope features from `03-your-product/project-overview.md`
- No `[Next Feature]` rows
- No `[placeholders]`
