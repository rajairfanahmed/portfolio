## Application Building Context

Read the following files in order before implementing
or making any architectural decision:

1. `context/project-overview.md` — product definition,
   goals, features, and scope
2. `context/architecture.md` — system structure,
   boundaries, storage model, and invariants
3. `context/ui-context.md` — theme, colors, typography,
   and component conventions
4. `context/code-standards.md` — implementation rules
   and conventions
5. `context/ai-workflow-rules.md` — development workflow,
   scoping rules, and delivery approach
6. `context/progress-tracker.md` — current phase,
   completed work, open questions, and next steps

## Task Routing — Adopt the Right Expertise

Before starting any implementation task, determine the
task type and read the matching persona prompt:

- **Frontend tasks** — UI, components, pages, layouts,
  styling, animations, responsiveness, user interactions:
  Read `context/frontend-prompt.md` and adopt that role.

- **Backend tasks** — APIs, database, authentication,
  server logic, middleware, data processing, migrations:
  Read `context/backend-prompt.md` and adopt that role.

- **Fullstack tasks** — features spanning both frontend
  and backend, end-to-end flows, data flow from UI to DB:
  Read `context/fullstack-prompt.md` and adopt that role.

When the task type is unclear, default to fullstack.

## First-Time Persona Setup

If the persona prompt files contain generation
instructions (HTML comment blocks), follow them:

1. Read the entire codebase thoroughly
2. Read all six context files above
3. Open each persona prompt file in order:
   `context/frontend-prompt.md`, `context/backend-prompt.md`,
   `context/fullstack-prompt.md`
4. Follow the generation instructions inside each file
   to compose the persona prompt from the context files
5. Remove the generation instruction blocks after
   writing the persona content
6. The final persona files must contain only the
   generated prompts — no instructions remaining

## Ongoing Rules

Update `context/progress-tracker.md` after each
meaningful implementation change.

If implementation changes the architecture, scope, or
standards documented in the context files, update the
relevant file before continuing.
