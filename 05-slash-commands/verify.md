# /verify

Prove the current job.

# Need

- Job name and its recipe in `03-your-product` (`01-….md`)
- `03-your-product/architecture.md` invariants
- The Vercel URL if it exists, else local `npm run dev`

# Do

- Walk every checkbox in Verify when done
- Cite what you saw (URL, screen, command output)
- Run `npm run build` if it has not just passed
- Mark the job only if evidence exists

# Stop

- No evidence → do not say pass
- Fail → tell the user to run `/debug`
- Do not write new features
