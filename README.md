# Start here

Pick **one** heading below. Ignore the rest.

- No idea. `03-your-product` still has `[placeholders]` → **Starting new**
- You already ran folder `02-fill-these-prompts` and `03-your-product` is real → **02 already done**
- Repo and Vercel exist. You are writing code → **Build the app**
- Something is broken → **Errors**
- New feature later, or text in `IMPROVE.md` → **New feature**
- Bug or tidy only → **Fix or clean**

More detail: `01-start-here/HOW-TO-BUILD.md`

# Folders (this order)

- `01-start-here` — how to develop
- `02-fill-these-prompts` — prompts that write idea, stack, theme, standards, jobs, personas
- `03-your-product` — the files those prompts replace
- `04-always-on-rules` — catalogs, UX floor, API floor, recipe shape, named frontend/backend lanes
- `05-slash-commands` — what each `/` command does
- `{project-name}/` — the app (created after 02 is done). Never write the app into the discipline root. Never overwrite this `README.md`
- `IMPROVE.md` — paste later upgrades here. The AI follows **New feature**

# Named lanes (theme and personas)

Theme (`03-theme.md`) and personas (`06-personas.md`) must **stop and wait**. Ask each group as separate options. Then write `ui-context.md` and the two persona files **only for the pick**. Do not invent a generic dark site.

Visual (pick one): Google · Awwwards · Apple · Dribbble · E-commerce · SaaS · Linear · Vercel · Stripe · Shopify

Motion (pick one): Apple · Stripe · Awwwards · Linear

Product UX (pick one): Raycast / command palette · Supabase / tabular · E-commerce CRO · SaaS dashboard · Shopify store

Backend (must match `architecture.md`): Vercel Edge / Cloudflare Workers · Stripe contracts (Zod) · Supabase security · Simple CRUD only

Craft lives in `04-always-on-rules/lanes-frontend.md` and `lanes-backend.md`. Year-current (2026): spatial depth, 1px glass, GPU springs, no flat `#000` orange-chip kit.

Default recommend for a developer portfolio: visual **Linear** (also study **Vercel**), motion **Apple** + **Stripe**, UX **Raycast**, access **WCAG 2.2 AA**, backend **Edge** + **Stripe contracts** + **Supabase security** if there are routes or a form.

Banned unless the user asks for a starter kit: flat black page, orange pills, placeholder circles, fake terminal as the whole identity, no dock, no Cmd+K, no spring motion.

# Slash commands

Type these in Cursor. Each file is the full instruction.

- `/brief` → `05-slash-commands/brief.md` — run all six create prompts in order (once, before the loop). Does not create a repo
- `/architect` → `05-slash-commands/architect.md` — write one job recipe. No app code
- `/develop` → `05-slash-commands/develop.md` — write code for that one job
- `/verify` → `05-slash-commands/verify.md` — prove the job on the Vercel URL
- `/debug` → `05-slash-commands/debug.md` — fix a red build, a failed deploy, or a wrong page
- `/audit` → `05-slash-commands/audit.md` — make `03-your-product` match the real repo
- `/ship` → `05-slash-commands/ship.md` — mark the job done. Does not create a repo

The loop (one job, then the next). Repeat until `03-your-product/00-build-plan.md` is empty.

- Open `03-your-product/00-build-plan.md`. Copy the first unfinished name
- `/architect` that name if `03-your-product/01-….md` is missing
- `/develop` that name only (files only in `{project-name}/`)
- Check in `{project-name}/`: lint, types, `npm run build`
- Red → `/debug`. Do not push. Stay on this job
- Green → one commit in `{project-name}/` → push that repo
- Vercel fails → `/debug` with the Vercel log. Push only when the build is green
- `/verify` on the Vercel URL. Page wrong → `/debug`, then check, push, look again
- `/audit` if the real repo changed folders or commands
- `/ship` — mark this job done. Next Up is the next name
- Go back to the first unfinished name. Same loop. Stop when the list is empty

# Prompts for another AI (ChatGPT, Claude, Gemini)

Folder `02-fill-these-prompts` is the prompt pack. You do not write prompts from scratch.

For each row: open the prompt file, paste it into the other AI, add what it asks for (your idea, or the filled `03-your-product` file), copy the output, replace the file in `03-your-product`.

- Idea → prompt `02-fill-these-prompts/01-idea.md` → replace `03-your-product/project-overview.md`
- Stack → prompt `02-fill-these-prompts/02-stack.md` → replace `03-your-product/architecture.md` (confirm backend levels)
- Theme → prompt `02-fill-these-prompts/03-theme.md` → stop, wait for named lanes → replace `03-your-product/ui-context.md`
- Standards → prompt `02-fill-these-prompts/04-standards.md` → replace `03-your-product/code-standards.md`
- Jobs → prompt `02-fill-these-prompts/05-jobs.md` → replace `03-your-product/00-build-plan.md`
- Personas → prompt `02-fill-these-prompts/06-personas.md` → same wait; write `frontend-prompt.md` and `backend-prompt.md` for **that pick only** (2026 craft, not a generic dark portfolio)

In Cursor you can type `/brief` instead of pasting those six by hand.

Do not create a GitHub repo, a project folder, or run `/develop` while those `03-your-product` files still have `[placeholders]`. `/brief` and the idea prompt never create a repo. `/ship` never creates a repo.

# Starting new

- Run the six prompts above (other AI) or `/brief` (Cursor)
- Confirm backend levels when `02-stack.md` asks
- Confirm named lanes when `03-theme.md` and `06-personas.md` ask (see **Named lanes**). Do not skip the wait. Personas are generated for the confirmed pick only
- Then go to **02 already done**

# 02 already done

`03-your-product` has real text. No `[placeholders]`. This is when the project folder and GitHub repo are created. Not during idea. Not during `/ship`.

- Ask the AI for a folder name from `03-your-product/project-overview.md` (kebab-case, example `raja-portfolio`)
- Create that folder in this discipline root. App files go only there. Copy `IMPROVE.md` into it
- Write the folder name into `03-your-product/architecture.md` under Host → Project folder
- Ask you to create a **new** GitHub repo for **that folder only**. Do not `git init` the discipline clone. Do not overwrite this `README.md`
- Import **that** repo into Vercel. Secrets in Vercel env. Write the URL into `03-your-product/architecture.md`
- Then go to **Build the app**

# Build the app

- Open `03-your-product/00-build-plan.md`
- Copy the first unfinished name. That is the only job
- No recipe (`03-your-product/01-….md` missing) → `/architect` that name
- `/develop` that name only (code goes in the project folder, not here)
- Check inside the project folder: lint, types, `npm run build`
- Red → **Errors**
- Green → one commit **in the project folder** → push that repo
- Vercel fails → **Errors**
- Open the Vercel URL. Confirm this job only
- Page wrong → **Errors**
- Mark done in `03-your-product/00-build-plan.md` and `03-your-product/progress-tracker.md`
- Repeat until the list is empty

# Errors

- Red lint, types, or `npm run build` → `/debug` and paste the error. Do not push. Do not start the next job
- Vercel failed → open the Vercel log → `/debug` and paste it. Push only when `npm run build` is green
- Live page is wrong → `/debug` what you see vs `03-your-product/01-….md`. Check. Push. Look again

# New feature

Use this when the project already exists. Paste the request into `IMPROVE.md` (or `{project-name}/IMPROVE.md`). Then the AI must:

- Add it to In Scope in `03-your-product/project-overview.md`
- Change stack or theme files only if they change
- Run `02-fill-these-prompts/05-jobs.md` (`/brief` is not needed) or add the next number by hand
- Write code only in the project folder
- Go to **Build the app**

# Fix or clean

- Bug → `/debug`
- Small change → `/develop` and name the files it may touch
- Check in the project folder. Push that repo. Look at the Vercel URL
- Do not add a new row to `03-your-product/00-build-plan.md`
