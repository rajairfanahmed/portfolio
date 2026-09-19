# /debug

Fix. Do not add a feature.

# Need

- The error text, Vercel log, or what the live page does wrong
- The recipe for the current job in `03-your-product` if one exists
- `03-your-product/architecture.md` invariants

# Do

- Reproduce
- Locate
- Fix the smallest change
- Run lint, types, `npm run build`
- If product law is missing, write an open question in `03-your-product/progress-tracker.md` and stop

# Stop

- Do not push while the build is red
- Do not start the next job
- Do not add a new row to `03-your-product/00-build-plan.md`
