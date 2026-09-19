# /ship

Close the current job or the release.

# Need

- Green `npm run build`
- Job done on the Vercel URL, or the list in `03-your-product/00-build-plan.md` empty
- No secrets in git

# Do

- Mark the job complete in `03-your-product/00-build-plan.md` and `03-your-product/progress-tracker.md`
- Set Next Up to the next unfinished name
- If this is the last job, confirm the Vercel production URL
- Write a short commit message that is the job name if the user has not committed, **in the project folder repo**

# Stop

- Red build → `/debug`
- Secrets in the diff → stop and tell the user
- Do not start a new feature here
- Do not create a GitHub repo
- Do not overwrite the discipline `README.md`
