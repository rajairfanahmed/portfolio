# Start here

Pick **one** heading below. Ignore the rest.

- No idea. `03-your-product` still has `[placeholders]` → **Starting new**
- You already ran folder `02-fill-these-prompts` and `03-your-product` is real → **02 already done**
- Repo and Vercel exist. You are writing code → **Build the app**
- Something is broken → **Errors**
- New feature later → **New feature**
- Bug or tidy only → **Fix or clean**

More detail: `01-start-here/HOW-TO-BUILD.md`

# Folders (this order)

- `01-start-here` — how to develop
- `02-fill-these-prompts` — prompts that write idea, stack, theme, standards, jobs, personas
- `03-your-product` — the files those prompts replace
- `04-always-on-rules` — catalogs, UX floor, API floor, recipe shape
- `05-slash-commands` — what each `/` command does

# Slash commands

Type these in Cursor. Each file is the full instruction.

- `/brief` → `05-slash-commands/brief.md` — run all six create prompts in order (once, before the loop)
- `/architect` → `05-slash-commands/architect.md` — write one job recipe. No app code
- `/develop` → `05-slash-commands/develop.md` — write code for that one job
- `/verify` → `05-slash-commands/verify.md` — prove the job on the Vercel URL
- `/debug` → `05-slash-commands/debug.md` — fix a red build, a failed deploy, or a wrong page
- `/audit` → `05-slash-commands/audit.md` — make `03-your-product` match the real repo
- `/ship` → `05-slash-commands/ship.md` — mark the job done

The loop (one job, then the next). Repeat until `03-your-product/00-build-plan.md` is empty.

- Open `03-your-product/00-build-plan.md`. Copy the first unfinished name
- `/architect` that name if `03-your-product/01-….md` is missing
- `/develop` that name only
- Check: lint, types, `npm run build`
- Red → `/debug`. Do not push. Stay on this job
- Green → one commit → push
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
- Theme → prompt `02-fill-these-prompts/03-theme.md` → replace `03-your-product/ui-context.md` (confirm frontend levels)
- Standards → prompt `02-fill-these-prompts/04-standards.md` → replace `03-your-product/code-standards.md`
- Jobs → prompt `02-fill-these-prompts/05-jobs.md` → replace `03-your-product/00-build-plan.md`
- Personas → prompt `02-fill-these-prompts/06-personas.md` → replace `03-your-product/frontend-prompt.md` and `03-your-product/backend-prompt.md`

In Cursor you can type `/brief` instead of pasting those six by hand.

Do not start a repo or `/develop` while those `03-your-product` files still have `[placeholders]`.

# Starting new

- Run the six prompts above (other AI) or `/brief` (Cursor)
- Confirm backend levels when `02-stack.md` asks
- Confirm frontend levels when `03-theme.md` asks
- Then go to **02 already done**

# 02 already done

`03-your-product` has real text. No `[placeholders]`.

- No GitHub repo → ask the AI for a name from `03-your-product/project-overview.md` → create the repo on **this** folder
- No Vercel → import that repo → secrets in Vercel env → write the URL into `03-your-product/architecture.md`
- Then go to **Build the app**

# Build the app

- Open `03-your-product/00-build-plan.md`
- Copy the first unfinished name. That is the only job
- No recipe (`03-your-product/01-….md` missing) → `/architect` that name
- `/develop` that name only
- Check: lint, types, `npm run build`
- Red → **Errors**
- Green → one commit for that job → push
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

- Add it to In Scope in `03-your-product/project-overview.md`
- Change stack or theme files only if they change
- Run `02-fill-these-prompts/05-jobs.md` (or `/brief` is not needed) or add the next number by hand
- Go to **Build the app**

# Fix or clean

- Bug → `/debug`
- Small change → `/develop` and name the files it may touch
- Check. Push. Look at the Vercel URL
- Do not add a new row to `03-your-product/00-build-plan.md`
