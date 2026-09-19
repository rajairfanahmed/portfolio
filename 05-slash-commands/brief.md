# /brief

Run the six create prompts in order. Stop if the user must confirm levels.

# Do

- If `03-your-product/project-overview.md` still has `[placeholders]` → run `02-fill-these-prompts/01-idea.md`
- Then `02-fill-these-prompts/02-stack.md` (confirm backend levels)
- Then `02-fill-these-prompts/03-theme.md` (confirm frontend levels)
- Then `02-fill-these-prompts/04-standards.md`
- Then `02-fill-these-prompts/05-jobs.md`
- Then `02-fill-these-prompts/06-personas.md`
- Update `03-your-product/progress-tracker.md` to Files are ready

# Stop

- Do not create a GitHub repo
- Do not write app code
- Do not skip a confirm on stack or theme
