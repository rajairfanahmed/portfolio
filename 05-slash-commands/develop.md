# /develop

Build one job only.

# Need

- Job name from the user, or the first unfinished name in `03-your-product/00-build-plan.md`
- That job's recipe (`03-your-product/01-….md`)
- `01-start-here/AGENTS.md` read order and the matching persona
- Ready gate in `01-start-here/HOW-TO-BUILD.md` must already be true
- A GitHub repo and Vercel project should already exist **for the project folder** named in `03-your-product/architecture.md`
- If that folder does not exist, stop and tell the user to finish **Files are ready** in `01-start-here/HOW-TO-BUILD.md`

# Do

- If the recipe is missing, stop and tell the user to run `/architect`
- Write application files only inside the project folder. Never write `package.json`, `app/`, or an app `README.md` into the discipline root
- Never overwrite the discipline `README.md`
- Implement only that recipe
- Follow `03-your-product/ui-context.md` and `04-always-on-rules/floor-ux.md` on UI
- Follow `03-your-product/architecture.md` and `04-always-on-rules/floor-api.md` on server work
- Update `03-your-product/progress-tracker.md`
- Run lint, types, and `npm run build` **inside the project folder** (or the commands in `03-your-product/architecture.md`)

# Stop

- Red build → tell the user to run `/debug`. Do not push
- Do not start the next job
- Do not invent product behavior
