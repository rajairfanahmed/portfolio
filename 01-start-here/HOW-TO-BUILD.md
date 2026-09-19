# How to develop

# Folders (open in this order)

- `01-start-here` — you are here
- `02-fill-these-prompts` — write the product
- `03-your-product` — files you replace
- `04-always-on-rules` — floors, catalogs, named frontend/backend lanes (`lanes-frontend.md`, `lanes-backend.md`)
- `05-slash-commands` — slash commands
- `{project-name}/` — the app, created after files are ready
- `IMPROVE.md` — paste later upgrades. Follow **New feature later**

# Where are you?

Pick one heading below. Ignore the rest.

- No idea yet → **Start from nothing**
- Files in `03-your-product` are filled → **Files are ready**
- GitHub and Vercel already exist, you are building → **Next job**
- Lint, types, or `npm run build` is red → **Build error**
- Vercel deploy failed → **Vercel failed**
- URL is live but the page is wrong → **Live page is wrong**
- You want a new feature, or `IMPROVE.md` has new text → **New feature later**
- Bug or tidy, no new feature → **Fix or clean**

# Ready gate

Do not create a repo. Do not create a project folder. Do not run `/develop`. Not until all of this is true.

`/brief` and `02-fill-these-prompts/01-idea.md` never create a GitHub repo. `/ship` never creates a GitHub repo. The repo is created only under **Files are ready**.

- `03-your-product/project-overview.md` is real. No `[placeholders]`
- `03-your-product/architecture.md` is real. Backend levels are written
- `03-your-product/ui-context.md` is real. Frontend levels are written
- `03-your-product/code-standards.md` is real
- `03-your-product/00-build-plan.md` has real jobs (`01-…`, `02-…`)
- `03-your-product/frontend-prompt.md` is real
- `03-your-product/backend-prompt.md` is real
- UX floor is in `03-your-product/ui-context.md` (see `04-always-on-rules/floor-ux.md`)
- API floor is in `03-your-product/architecture.md` (see `04-always-on-rules/floor-api.md`)

# Start from nothing

- Run `02-fill-these-prompts/01-idea.md` → replace `03-your-product/project-overview.md`
- Run `02-fill-these-prompts/02-stack.md` → replace `03-your-product/architecture.md` → confirm backend levels
- Run `02-fill-these-prompts/03-theme.md` → stop and wait for named lanes → replace `03-your-product/ui-context.md`
- Run `02-fill-these-prompts/04-standards.md` → replace `03-your-product/code-standards.md`
- Run `02-fill-these-prompts/05-jobs.md` → replace `03-your-product/00-build-plan.md`
- Run `02-fill-these-prompts/06-personas.md` → same wait → replace `03-your-product/frontend-prompt.md` and `03-your-product/backend-prompt.md` for **that pick only**
- Or run `/brief` (`05-slash-commands/brief.md`) to do those six in order
- Then go to **Files are ready**

# Files are ready

This is when the app folder and GitHub repo are created. Not during idea. Not during `/ship`.

- Ask the AI for a kebab-case folder name from `03-your-product/project-overview.md` (example `raja-portfolio`)
- Create `{project-name}/` in the discipline root. App source, the app `README.md`, and `IMPROVE.md` live only there
- Never overwrite the discipline `README.md`
- Write the folder name into `03-your-product/architecture.md` under Host → Project folder
- You create a **new** GitHub repo for **that folder only**. Do not `git init` the discipline clone
- Import **that** repo into Vercel. Secrets in Vercel env. Write the URL into `03-your-product/architecture.md`
- Then go to **Next job**

# Next job

- Open `03-your-product/00-build-plan.md`
- Copy the first unfinished name. That is the only job
- No recipe file (example: `03-your-product/01-site-shell.md` missing) → `/architect` that name (`05-slash-commands/architect.md`)
- `/develop` that name only (`05-slash-commands/develop.md`). Code only in the project folder
- Check in the project folder: lint, types, `npm run build`
- Red → go to **Build error**
- Green → one commit in the project folder → push that repo
- Vercel fails → go to **Vercel failed**
- Open the Vercel URL → confirm this job only
- Page is wrong → go to **Live page is wrong**
- Mark the job done in `03-your-product/00-build-plan.md` and `03-your-product/progress-tracker.md`
- Repeat this heading until every row in `03-your-product/00-build-plan.md` is done

# Build error

- `/debug` and paste the error text (`05-slash-commands/debug.md`)
- Do not push
- Do not start the next job
- When `npm run build` is green → go to **Next job** at the push bullet

# Vercel failed

- Open the Vercel log
- `/debug` and paste that log (`05-slash-commands/debug.md`)
- Push only when `npm run build` is green
- Open the Vercel URL again

# Live page is wrong

- `/debug` what you see vs the recipe in `03-your-product` (`01-….md` for this job)
- Check: lint, types, `npm run build`
- Push
- Open the Vercel URL again

# New feature later

If the project already exists, paste the request into `IMPROVE.md` or `{project-name}/IMPROVE.md`. Then:

- Add the feature to In Scope in `03-your-product/project-overview.md`
- Change `03-your-product/architecture.md` only if stack, data, auth, or host change
- Change `03-your-product/ui-context.md` only if visual rules change
- Run `02-fill-these-prompts/05-jobs.md` or add the next number by hand in `03-your-product/00-build-plan.md`
- Write app code only in the project folder. Do not create a new GitHub repo
- Go to **Next job**

# Fix or clean

- Bug → `/debug` (`05-slash-commands/debug.md`)
- Small change → `/develop` and name the files it may touch (`05-slash-commands/develop.md`)
- Check in the project folder: lint, types, `npm run build`
- Push that repo
- Open the Vercel URL
- Do not add a new row to `03-your-product/00-build-plan.md`
