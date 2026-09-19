# Law

Read `01-start-here/HOW-TO-BUILD.md` if the user asks how to develop.

Before any code or architecture change, read in order:

- `03-your-product/project-overview.md`
- `03-your-product/architecture.md`
- `03-your-product/ui-context.md`
- `03-your-product/code-standards.md`
- `03-your-product/progress-tracker.md`
- `03-your-product/00-build-plan.md`

Then read the matching persona:

- Frontend work → `03-your-product/frontend-prompt.md`
- Backend work → `03-your-product/backend-prompt.md`
- Both → read both

# Hard rules

- One job at a time. The job is the first unfinished name in `03-your-product/00-build-plan.md`
- Do not invent product behavior. Missing fact → open question in `03-your-product/progress-tracker.md` and stop
- Do not push a red build. Lint, types, and `npm run build` must be green
- Do not commit secrets. Env lives on Vercel
- UX floor is always on (`04-always-on-rules/floor-ux.md`). Visual level cannot turn it off
- API floor is always on (`04-always-on-rules/floor-api.md`)
- Do not replace this file or the root `AGENTS.md` with a stack dump

# Commands

When the user types a slash command, read that file and do only what it says.

- `/brief` → `05-slash-commands/brief.md`
- `/architect` → `05-slash-commands/architect.md`
- `/develop` → `05-slash-commands/develop.md`
- `/verify` → `05-slash-commands/verify.md`
- `/debug` → `05-slash-commands/debug.md`
- `/audit` → `05-slash-commands/audit.md`
- `/ship` → `05-slash-commands/ship.md`

# After each job

- Update `03-your-product/progress-tracker.md`
- If stack, UI, or scope changed, update that file in `03-your-product` before the next job
