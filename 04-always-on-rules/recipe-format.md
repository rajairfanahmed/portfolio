# Recipe format

Every job file in `03-your-product` (`01-….md`, `02-….md`) must use these headings only.

# Unit 01: [short name]

# Goal

- One or two sentences. What exists when this job is done

# Design

- Visual or API choices for this job only
- Follow `03-your-product/ui-context.md` and `03-your-product/architecture.md`
- Blast radius: what must not break
- Rollback: how to undo

# Implementation

- Ordered steps
- Packages installed only in the job that first needs them

# Dependencies

- Jobs or services that must exist first

# Verify when done

- Checkboxes a human can see on the Vercel URL
- `npm run build` passes
- UX floor items that apply to this job
- API floor items that apply to this job
