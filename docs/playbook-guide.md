# From Idea to Product: The AI-Driven Developer's Playbook

### By JavaScript Mastery (Enhanced with Persona Prompts & Engineering Skills)

---

> This guide was created alongside the Ghost AI build, a real-time
> collaborative system design tool built entirely using AI-driven
> development. Everything in this playbook was used in practice,
> not invented in theory.

By the time you finish reading, you'll know how to take any idea
from a blank page to a working product using AI. Not by prompting
better. By thinking better before you prompt.

Follow the steps in order. Each step builds on the previous one.
When you reach the feature loop (Steps 15–19), repeat those steps
for every feature in your build plan.

### Who this is for

- Developers who have tried AI coding tools and gotten frustrated
  when they fall apart
- Developers who are just starting out and want to build the right
  habits from day one
- Developers who are building something serious and want a system
  that scales

You don't need years of experience to use this methodology. You
need the willingness to think before you build.

### What you'll walk away with

- A complete system for setting up any project for AI-driven
  development
- AI prompts to generate all nine context files for your
  own project
- Expert persona prompts that make the AI act as a senior
  frontend, backend, or fullstack developer tailored to
  your project's actual tech stack
- Nine engineering workflow skills (`/scope`, `/architect`,
  `/develop`, `/check`, `/test`, `/document`, `/sync`,
  `/audit`, `/debug`) that automate each phase of the build
- The spec file pattern for breaking any feature into a
  clean, buildable unit
- A clear strategy for when AI gets stuck or keeps getting
  it wrong

### What's included

```
📁 ai-builders-playbook/
├── README.md                         ← This guide
├── CLAUDE.md                         ← Entry point template
│                                       (rename to .cursorrules,
│                                        AGENTS.md, etc.)
└── context/
    ├── project-overview.md           ← Blank template
    ├── architecture.md               ← Blank template
    ├── ui-context.md                 ← Blank template
    ├── code-standards.md             ← Blank template
    ├── ai-workflow-rules.md          ← Blank template
    ├── progress-tracker.md           ← Blank template
    ├── frontend-prompt.md            ← Persona template
    ├── backend-prompt.md             ← Persona template
    └── fullstack-prompt.md           ← Persona template
```

Each template includes the full structure and section headings
with instructions for what to put in each section. Fill them in
using the AI prompts in this guide.

### Entry point filename by AI tool

| AI Tool | Rename `CLAUDE.md` to |
|---|---|
| Claude Code | `CLAUDE.md` (keep as-is) |
| Cursor | `.cursorrules` |
| Codex / GitHub Copilot | `AGENTS.md` |
| Windsurf | `.windsurfrules` |

---

# ─── PHASE 1: THINK ───

---

## Step 1: Understand the Approach

Before you write a single prompt, understand these three things.

### You are the architect. The AI is the implementation engine.

The thinking — what you're building, how it fits together, what
the rules are, where the boundaries lie — stays with you. Always.
The AI executes that thinking at speed. It does not replace it.

Most developers who struggle with AI are trying to outsource the
thinking. They give the agent a vague goal and expect it to figure
out the system design, the architecture, the component boundaries,
the naming conventions, and the data flow on its own. Sometimes it
gets lucky. Usually it doesn't. And when it doesn't, the developer
blames the tool.

The developers who build serious things with AI bring the thinking
first. They design the system before the agent touches the code.
They define the rules before the first prompt is sent. And then
they use AI to execute that system at a speed no human could match
alone.

That shift — from "AI, figure it out" to "AI, execute what I've
already figured out" — is everything.

### Why most AI-assisted projects fail

There are two failure modes. Understanding both will save you
weeks of frustration.

**Failure Mode 1: Vibe coding collapse**

You open the agent, describe what you want in broad strokes, and
let it run. The first hour feels incredible. The code is coming
together fast. Features are appearing.

Then you try to add something new. Something breaks. You fix it
and something else breaks. The agent starts contradicting decisions
it made earlier. The codebase begins fighting you. You spend more
time untangling AI output than building features.

This happens because the agent had no foundation to build on.
Every decision it made was a guess. And guesses compound.

**Failure Mode 2: Feature drift**

You get the initial build right. Everything works. Then you come
back two weeks later to add a new feature and the agent has
forgotten everything. The architectural decisions, the naming
conventions, why a piece of logic was written the way it was.
It "fixes" things that weren't broken. It overwrites patterns
you set intentionally.

This happens because AI agents have no memory between sessions.
Without a documented system to read at the start of every session,
the agent starts from zero every time.

Both failure modes have the same root cause. The developer didn't
give the agent a system to work within.

### What this playbook gives the AI

| System | What it gives the AI | Problem it solves |
|---|---|---|
| **9 context files** | Project knowledge + expert personas | No more guessing or forgetting |
| **9 engineering skills** | A disciplined workflow | No more chaotic, unstructured building |
| **Spec files** | Exact instructions per feature | No more vague prompts |

**✅ You're done with Step 1 when** you understand: you bring the
thinking, the AI executes it. Context files give it memory. Skills
give it discipline. Specs give it precision.

---

## Step 2: Have the Planning Conversation

Before you open any AI coding tool, have a conversation. Not with
your coding agent — with a planning AI. Claude, ChatGPT, Gemini,
whatever you prefer.

The goal is to think out loud and let AI help you pressure-test
the thinking until the system becomes clear. This is what senior
engineers do before they build, except they usually do it in their
heads or on a whiteboard. Doing it with AI externalizes the
thinking, challenges your assumptions, and makes it faster.

### 🤖 Prompt — paste this into your planning AI

```
I have an idea for an application. I want you to help me
think it through before I start building.
Here's the idea: [describe your idea in 2-3 sentences]
Ask me questions one at a time to help me clarify:

- The core user flows
- The most technically complex parts
- The data and storage requirements
- The authentication and access model
- What's in scope and what's deliberately out of scope
- The technology decisions and why

Push back on my answers when something is vague or
when you see a potential problem. Help me think clearly
about the system before we write any code.
```

Let the conversation run until you can answer every question
clearly without hesitation.

### ✅ Checklist — you're ready when you can answer all of these

**Product**

- What does this application do in one sentence?
- Who is the primary user and what is their core need?
- What is the step-by-step flow from sign-up to core value?
- What are the three most important features for the first version?
- What is explicitly out of scope?

**Technical**

- What is the full technology stack and why each choice?
- Where does data live — database, file storage, cache?
- How does authentication work?
- What are the system boundaries — which folder owns what
  responsibility?
- What are the rules the codebase must never violate?

**Design**

- What is the visual language — colors, typography, spacing?
- What UI component library are you using?
- What does the layout look like at a high level?

**Process**

- What are the major features broken into buildable units?
- In what order should those units be built?
- What does done look like for each unit?

If you can answer all of these, you're ready for Step 3. If you
can't, keep talking to the planning AI until you can.

---

# ─── PHASE 2: SET UP ───

---

## Step 3: Create Your Project and Install Tools

### 3a. Scaffold your project

```bash
# Example with Next.js
npx -y create-next-app@latest my-project
cd my-project
```

### 3b. Install JS Mastery Engineering Skills

These are slash-command skills (`/scope`, `/architect`, `/develop`,
etc.) that automate each phase of the build. They work on any
Agent Skills client.

```bash
# For Cursor
npx skills@latest add jsmastery-pro/skills -a cursor

# For Claude Code
npx skills@latest add jsmastery-pro/skills -a claude-code

# For other agents (Codex, Gemini CLI, etc.)
npx skills@latest add jsmastery-pro/skills
```

Commit the installed skills folder to share the workflow with
your team. Each skill's instructions live in its `SKILL.md`.

### 3c. Copy the nine-file templates into your project

Copy `CLAUDE.md` and the entire `context/` folder from this
download into your project root:

```
your-project/
├── .cursorrules              ← CLAUDE.md renamed for your tool
├── context/
│   ├── project-overview.md
│   ├── architecture.md
│   ├── ui-context.md
│   ├── code-standards.md
│   ├── ai-workflow-rules.md
│   ├── progress-tracker.md
│   ├── frontend-prompt.md
│   ├── backend-prompt.md
│   └── fullstack-prompt.md
└── ... your source code
```

### 3d. Rename the entry point file

Rename `CLAUDE.md` to match your AI tool (see the table in the
introduction). This file tells the agent to read all context
files and route tasks to the right expert persona.

**✅ You're done with Step 3 when** your project is scaffolded,
skills are installed, and all 9 template files are in your project.

---

# ─── PHASE 3: BUILD YOUR CONTEXT ───

These are the nine files your AI reads before it does anything.
The first six give it **project knowledge**. The last three give
it **expert personas**. Together they eliminate guessing and
forgetting.

You generate these files using your planning AI — not your coding
agent. Take the output of the planning conversation from Step 2
and use the prompts below.

---

## Step 4: Generate `project-overview.md`

### What it does

Defines what you are building and why. Goals, core user flow,
features, scope boundaries, and success criteria.

### Why it matters

This is the file your agent uses to understand intent when a
spec is ambiguous. Without it, the agent fills gaps with
assumptions. With it, ambiguous requirements resolve against
a defined product vision instead of a guess.

The out-of-scope section is particularly important. Explicitly
listing what you are not building tells the agent not to suggest
dependencies or write code for features you don't need yet.
Scope creep kills projects. This file prevents the agent from
contributing to it.

### 🤖 Prompt — paste into your planning AI

```
Based on our conversation about my project, help me write
a project-overview.md file.
It should include:

- A one paragraph overview of what the application does
- A numbered list of goals
- A step-by-step core user flow from start to finish
- A features section broken down by category
- An in-scope section listing what we are building
- An out-of-scope section listing what we are not building
- A success criteria section defining what done looks like

My project: [paste your idea and key decisions from your
planning conversation]
Write it in plain Markdown. Be specific and concrete.
Avoid vague language.
```

### ✅ What good output looks like

Goals are measurable, not aspirational. The user flow is
step-by-step with no gaps. The out-of-scope list is explicit
and detailed. Success criteria are verifiable — not "looks good"
but "a signed-in user can create and open a project."

Paste the output into `context/project-overview.md`, replacing
the template placeholders.

---

## Step 5: Generate `architecture.md`

### What it does

Defines the full technology stack, system boundaries, storage
model, auth model, and the invariants the codebase must never
violate.

### Why it matters

This is the most important file in the system. Without it, the
agent makes reasonable-looking architectural decisions that slowly
corrupt the codebase. It puts things in the wrong layer. It skips
ownership checks. It reaches for the wrong tool for the job.

The invariants section is what separates a good architecture file
from a great one. Invariants are rules the system must never
violate — for example: "request handlers do not run long-lived AI
work" or "auth is enforced at every mutation boundary." Without
invariants, violations happen silently. With them, violations
become immediately visible.

### 🤖 Prompt — paste into your planning AI

```
Help me write an architecture.md file for my project.
It should include:

- A stack table with each layer, technology, and its role
- System boundaries — which folder owns which responsibility
- Storage model — what goes in the database vs file storage
  vs cache
- Auth and access model — how authentication and ownership
  work
- Any AI or background task models if relevant
- Invariants — rules the codebase must never violate

My stack and key decisions: [paste your technology choices
and architectural decisions from your planning conversation]
Write it in plain Markdown with tables where appropriate.
Be specific. The invariants section should have at least
four rules.
```

### ✅ What good output looks like

The stack table is complete with a clear role for every
technology. System boundaries specify exact folder names and
responsibilities. The storage model is explicit — no ambiguity
about what lives where. Invariants are stated as rules, not
guidelines.

Paste the output into `context/architecture.md`.

---

## Step 6: Generate `code-standards.md`

### What it does

Defines TypeScript conventions, framework patterns, API route
structure, file organization, and styling rules.

### Why it matters

Without code standards, the agent drifts. The pattern it uses
in unit five looks different from the pattern in unit twenty.
Types are handled inconsistently. Components are structured
differently across features. Small inconsistencies that
individually look fine — but together create a codebase that
is hard to read, hard to extend, and hard to hand off.

### 🤖 Prompt — paste into your planning AI

```
Help me write a code-standards.md file for my project.
It should include:

- General coding principles (small modules, no workarounds,
  single-responsibility)
- TypeScript conventions (strict mode, interface vs type,
  handling of any, type narrowing)
- Framework-specific conventions (server vs client components,
  route handler patterns, data fetching approach)
- Styling rules (CSS approach, token usage, naming conventions)
- API route conventions (input validation, auth enforcement,
  response shapes)
- Data and storage rules (what goes where, query patterns,
  migration approach)
- File organization (folder structure with what belongs where)

My stack and conventions: [paste your technology choices and
any patterns you've already established from your planning
conversation]
Write it as direct rules in Markdown. Be specific — not
guidelines, rules. Use imperative language.
```

### ✅ What good output looks like

Written as direct commands, not suggestions. "Use explicit
TypeScript interfaces for all component props" not "try to use
types." Every rule is specific enough to verify. The file
organization section lists actual folder names with their
responsibilities.

Paste the output into `context/code-standards.md`.

---

## Step 7: Generate `ai-workflow-rules.md`

### What it does

Defines how the agent should behave while building — scoping
rules, when to split work, how to handle missing requirements,
and verification before moving on.

### Why it matters

This file is what makes the agent disciplined. Without it,
the agent goes too broad, combines unrelated concerns in a
single prompt, makes assumptions about missing requirements,
and skips verification. With it, the agent stays in its lane
and does exactly what the spec says — no more.

### 🤖 Prompt — paste into your planning AI

```
Help me write an ai-workflow-rules.md file for my project.
It should define how an AI coding agent should behave
while building this project. Include:

- The overall approach (spec-driven, incremental)
- Scoping rules (one unit at a time, no speculative changes)
- When to split work into smaller steps
- How to handle missing or ambiguous requirements
- Which files should not be modified without explicit
  instruction (e.g. generated UI library components)
- How to keep documentation in sync with implementation
- Verification checklist before moving to the next unit

Write it as direct instructions to the agent. Not guidelines
— rules. Use imperative language.
```

### ✅ What good output looks like

Written as direct commands, not suggestions. "Work on one
feature unit at a time" not "try to keep scope small."
The missing requirements section is specific — it tells the
agent exactly what to do when something is undefined rather
than leaving it to guess.

Paste the output into `context/ai-workflow-rules.md`.

---

## Step 8: Generate `ui-context.md`

### What it does

Defines the visual language — color tokens, typography,
border radius scale, component library conventions, layout
patterns, and icon usage.

### Why it matters

Without this file, the agent guesses every visual decision.
It uses raw color values instead of tokens. It applies
inconsistent border radii. It mixes component patterns across
features. The result is a UI that looks like it was built by
ten different developers.

With this file, the agent never makes a visual decision.
It reads the spec.

### How to create it

This file is different from the others — you don't generate
it purely from a planning conversation. You design it first,
then document it.

### 🤖 Prompt — paste into your planning AI

```
I'm building [describe your app]. Help me design a
color token system for it.
The aesthetic I want: [describe the feel — dark/light,
technical/friendly, minimal/rich, etc.]
Generate:

- A complete color palette with semantic token names
  and hex values
- Typography recommendations
- Border radius scale
- Any AI or accent color variants if relevant

Give me the output as a Markdown table I can paste
into my ui-context.md file.
```

Then add your component library conventions, layout patterns,
and icon library on top of what it generates.

### ✅ What good output looks like

Every color is a named token, not a raw hex value. The
agent should never need to invent a color — every possible
color decision is in this file. Layout patterns describe
the actual structure of your application — sidebar behavior,
modal patterns, navbar structure.

Paste the output into `context/ui-context.md`.

---

## Step 9: Set Up `progress-tracker.md`

### What it does

Tracks the current phase, what's complete, what's in progress,
what's coming next, open questions, architecture decisions,
and session notes.

### Why it matters

This is the only file that changes constantly throughout
the build. And it's the most important file for long builds.

AI agents have no memory between sessions. Every time you
open a new session, the agent starts from zero. The progress
tracker is how you restore full context in a single prompt.
One instruction — "read the entry file and resume" — and the
agent knows exactly where the project stands, what decisions
were made, and what comes next.

Without this file, you spend the first fifteen minutes of
every session re-explaining your own project to the agent.
With it, you're back in motion in seconds.

### How to set it up

Unlike the other files, the progress tracker starts mostly
empty. Open `context/progress-tracker.md` and fill in the
first two sections:

```markdown
# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- Foundation

## Current Goal

- Set up context files and plan the build

## Completed

- None yet.

## In Progress

- None yet.

## Next Up

- [first unit to build]

## Open Questions

- [any unresolved decisions]

## Architecture Decisions

- [decisions made that affect the system design]

## Session Notes

- [context needed to resume in the next session]
```

The agent updates this file after every unit. You update
it when you make architectural decisions or resolve open
questions. By the end of the project, it is a complete
record of every decision that was made and why.

---

## Step 10: Generate the Three Persona Prompts

### What persona prompts are

The six context files give the AI **project knowledge**. But
knowledge alone doesn't make the AI write code like a senior
developer. It still acts like a generic assistant — helpful but
not specialized.

The persona prompt files change that. They make the AI adopt
the role of a senior expert tailored to your project's actual
tech stack.

When the AI encounters a frontend task, it reads the frontend
persona and becomes a Senior Frontend Developer who knows your
design system, your component patterns, your accessibility rules.
When it encounters a backend task, it becomes a Senior Backend
Developer who knows your API patterns, your security rules, your
database conventions.

The result: the AI doesn't just know what to build — it knows
**how to build it like an expert in your specific stack**.

### The three persona files

**`frontend-prompt.md`** — The AI reads this whenever the task
involves UI, components, pages, layouts, styling, animations,
responsiveness, or user interactions. After generation it contains:

- Role: Senior Frontend Developer with 8+ years in your
  project's specific frontend technologies
- Core competencies from your actual stack
- Code quality rules: accessibility, semantic HTML, responsive
  design, performance, type safety
- Component architecture: structure, naming, composition,
  directory organization
- Design system rules: pulled from `ui-context.md` — tokens,
  typography, spacing, icons
- State management: your project's specific approach
- Anti-patterns: things the AI must never do in your frontend

**`backend-prompt.md`** — The AI reads this whenever the task
involves APIs, database, authentication, server logic, middleware,
data processing, or migrations. After generation it contains:

- Role: Senior Backend Developer with 8+ years in your
  project's specific backend technologies
- Core competencies from your actual stack
- Security standards: auth, authorization, input validation,
  SQL injection prevention, data exposure prevention
- API design rules: route structure, request handling,
  response format, error handling
- Database rules: schema design, query patterns, migrations,
  transactions
- Error handling: boundaries, types, logging, graceful
  degradation
- Anti-patterns: things the AI must never do in your backend

**`fullstack-prompt.md`** — The AI reads this whenever the task
spans both frontend and backend — end-to-end features, data flow,
shared types, or anything that touches both layers. After
generation it contains:

- Role: Senior Fullstack Developer with 10+ years across
  your complete stack
- End-to-end data flow rules: request → API → database →
  response → UI
- Auth flow: from client hooks to server verification
- Shared code: types, constants, validation schemas
- Integration patterns: data fetching, optimistic updates,
  real-time data
- Database-to-UI pipeline: query patterns, pagination, caching
- Step-by-step process for building a fullstack feature

### How they are generated

Unlike the six context files where you provide a prompt to the
planning AI, the persona prompts are **auto-generated** by your
coding agent. Each persona template file contains detailed
generation instructions inside an HTML comment block. The agent
reads your already-filled context files and follows those
instructions to compose each persona.

### 🤖 Prompt — paste into your coding agent (not planning AI)

```
Read my filled context files:
- context/architecture.md
- context/ui-context.md
- context/code-standards.md
- context/project-overview.md

Then open each persona prompt file:
- context/frontend-prompt.md
- context/backend-prompt.md
- context/fullstack-prompt.md

Follow the generation instructions inside each file to
compose the persona prompt from the context files.
After writing each persona, remove the generation
instruction block entirely. The final files should
contain only the professional persona prompts.
```

### ✅ What good output looks like

Each persona file contains a professional, project-specific
prompt with no generation instructions remaining. The role
mentions your actual technologies. The rules reference your
actual file paths and patterns. Everything is imperative
("You MUST...") not suggestive ("You should try to...").

**✅ You're done with Phase 3 when** all nine context files are
filled with real, project-specific content. Read through each
one and verify it accurately represents your project. Fix
anything that's wrong before moving forward.

---

# ─── PHASE 4: PLAN THE BUILD ───

Your context files are ready. Your agent knows your project.
Now plan what to build and in what order.

---

## Step 11: Scope the Project — `/scope`

### What `/scope` does

Turns a product idea into a living, coarse plan of what to build,
in order. It creates `docs/scope/` with your feature plan and
recommended workflow depth.

### When to run it

- **New project (greenfield):** Run it first — it plans the
  entire build.
- **Existing codebase (brownfield):** It enrolls what already
  exists, then plans the new work on top.

### 🤖 Run this in your coding agent

```
/scope
My idea: [your idea — the AI already has context from the files]
```

### What it produces

- A feature plan in `docs/scope/`
- A recommended **workflow depth** for the project:

| Depth | What runs after building | Best for |
|---|---|---|
| **Prototype** | Nothing — just build | Throwaway work, hackathons |
| **Alpha** | + verify it works | Internal tools, MVPs |
| **Beta** | + write tests | Pre-launch products |
| **GA** | + code review + documentation | Production apps, FYP |

The depth is a suggestion you override per feature anytime.
You're in charge — skip any step and mark a feature `done`
when you decide it is.

**✅ You're done with Step 11 when** `docs/scope/` exists with
your feature plan and you've chosen a workflow depth.

---

## Step 12: Architect the Stack — `/architect`

### What `/architect` does

Runs a deep design conversation and writes the decision as a
build spec in `docs/specs/`. For the first run, it decides
the tech stack. Later, you use it per-feature for design
decisions.

### 🤖 Run this in your coding agent

```
/architect
Confirm and document the tech stack for this project.
```

### What it produces

A spec in `docs/specs/` documenting the stack decision with
acceptance criteria. Every later step traces back to this spec.

**✅ You're done with Step 12 when** `docs/specs/` has a stack
spec and your project is scaffolded.

---

## Step 13: Audit the Project — `/audit`

### What `/audit` does

Writes the `AGENTS.md` context files that give every skill your
project's stack, commands, and conventions. It reads your actual
scaffolded project — not an empty one.

### When to run it

- **Greenfield:** Run it after the stack is chosen and the
  project is scaffolded (after Step 12).
- **Brownfield:** Run it first so every skill understands your
  existing project.

### 🤖 Run this in your coding agent

```
/audit
```

### What it produces

`AGENTS.md` context files that all skills read. In a monorepo,
each workspace gets its own nested `AGENTS.md`.

**✅ You're done with Step 13 when** `AGENTS.md` exists and
accurately describes your project.

---

## Step 14: Create the Build Plan

### What this step does

Break your entire build into specific, scoped, verifiable units
before a single line of code is written. Each unit has a spec.
Each spec defines exactly what done looks like.

This is spec-driven development. Instead of prompting feature by
feature as ideas come to you, you plan the entire build upfront.
Every unit is planned. Every dependency is ordered. Every feature
has a clear end state before the agent touches it.

### What makes a good unit

A unit is a single, scoped, verifiable piece of work. Small
enough to build in one focused session. Concrete enough that
you know exactly what done looks like.

Not "build the dashboard." That's a phase, not a unit.

A unit is: "Build the project sidebar with My Projects and
Shared tabs, empty placeholder states, and open/close
behavior. No API calls yet."

**The rules:**

- It produces one visible, verifiable result
- It stays within one system boundary — don't mix UI changes
  with database changes with background tasks in one unit
- It has a checklist of conditions that must be true before
  it's considered complete
- It can be built in a single focused session without
  needing to make decisions that belong in another unit

### 🤖 Prompt — paste into your planning AI

```
I'm building [your application]. My context files define
the full architecture and feature set.
Help me break the entire build into units following
these rules:

- Each unit produces one visible result
- Each unit stays within one system boundary
- Dependencies are introduced just in time — don't
  install or build something before it's needed
- Units that always get done together in the same
  session should be merged into one unit
- Units with no standalone visible result should be
  merged with adjacent units

Here is my feature list: [paste your features from
project-overview.md]
Here is my stack: [paste your stack from architecture.md]
Output a numbered list of units in build order. For each
unit include: unit number, unit name, what it builds,
and any dependencies that must exist first.
```

### How to order your units

The order matters more than most developers realize.

**Dependencies first.** If feature B requires feature A
to exist, A comes first. Never build on top of something
that doesn't exist yet.

**Security before functionality.** Auth and access control
always come before the features they protect.

**Backend before frontend wiring.** Build the API routes
first, then wire the UI to them. Combining both in one
unit gives the agent too much surface area.

**UI shells before real data.** Build the component
structure with placeholder data first, then connect it
to real API calls.

**Install dependencies just in time.** Only install a
package in the unit where it first unlocks real behavior.

### How to validate your order

Go through your unit list and for each unit ask: does
everything this unit depends on already exist in a
previous unit? If no, reorder.

Are any two adjacent units always done in the same session
with no standalone result between them? If yes, merge them.

### Save it

Save the result as `context/specs/00-build-plan.md`.

**✅ You're done with Step 14 when** your build plan is saved,
units are ordered correctly, and you know which unit to build
first.

---

# ─── PHASE 5: BUILD FEATURES ───

# ⟳ Repeat Steps 15–19 for EVERY feature in your build plan.

---

## Step 15: Design the Feature — `/architect` + Spec File

### What this step does

Before building, write a detailed spec file that tells the agent
exactly what to implement. The spec replaces the vague prompt.

If the feature requires a load-bearing design decision (a data
model, a provider, a page design), run `/architect` first:

```
/architect
Design [feature name]: data model, API structure, component layout.
```

`/architect` writes a spec in `docs/specs/` with acceptance
criteria. If you skip it and go straight to building, `/develop`
will gate and route you back if a decision is owed. You can
override and build anyway, but the assumption is recorded as an
`Assumed` spec and flagged until ratified.

### The spec file pattern

A well-written spec file has five sections:

**1. Goal** — One or two sentences. What does this unit produce?

_Bad:_ `"Create the auth pages."`

_Good:_ `"Create sign-in and sign-up pages using Clerk
components with a two-panel layout on desktop and
form-only on mobile. Use proxy.ts for route protection,
not middleware.ts."`

**2. Design** — Visual and structural decisions. Reference
`ui-context.md` tokens. Describe layout, components,
responsiveness.

**3. Implementation** — Broken into sub-sections, one per
component or system boundary. Enough detail that there
is no ambiguity.

**4. Dependencies** — Packages this unit needs. List explicitly.

**5. Verification checklist** — Conditions that must be true
before this unit is complete.

### The spec file template

```markdown
# Unit NN: [Feature Name]

## Goal

One or two sentences describing the concrete output
of this unit.

## Design

Visual and structural decisions specific to this unit.
Reference ui-context.md tokens where relevant.

## Implementation

### [Component or Sub-section Name]

Detailed description of what to build.

### [Next sub-section]

Description.

## Dependencies

- package-name (reason)

## Verify when done

- [ ] Condition one
- [ ] Condition two
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Responsive at mobile and desktop
- [ ] npm run build passes
```

### 🤖 Prompt to generate a spec file — paste into your planning AI

```
Here is my project overview: [paste project-overview.md]
Here is my architecture: [paste architecture.md]
I want to implement: [describe the feature]
Write a detailed spec file for this feature following
this structure:

- Goal (1-2 sentences, specific and concrete)
- Design (visual and structural decisions)
- Implementation (broken into sub-sections)
- Dependencies (packages to install)
- Verification checklist

Be as specific as possible. If anything is unclear,
ask me questions before writing the spec.
```

Save the spec as `context/specs/NN-feature-name.md`.

**✅ You're done with Step 15 when** the spec file exists and
is specific enough that there's no ambiguity about what done
looks like.

---

## Step 16: Build the Feature — `/develop`

### What this step does

The agent reads the spec and implements exactly what it says.
It also reads the entry point file, which routes it to the right
expert persona (frontend, backend, or fullstack) automatically.

### Option A: Use the `/develop` skill

```
/develop
Build [feature name] from its spec.
```

`/develop` builds from the spec, runs migrations, and advances
the scope. If building would mean inventing an undecided design,
it stops and routes you to `/architect` (Step 15).

### Option B: Use the manual prompt

```
Read context/specs/NN-feature-name.md.
Update context/progress-tracker.md to mark this as
in progress.
Implement it exactly as specified.
Do not go beyond the scope of this unit.
```

### If something is off — the correction prompt

```
The [specific element] does not match the spec.
Expected: [what the spec says].
Current: [what was built].
Fix only this. Do not change anything else.
```

### 🐛 Bug? Use `/debug` anytime

```
/debug
```

`/debug` runs a disciplined root-cause loop: find the bug,
fix it, then hand a regression test to `/test`. Use it at any
step, for any feature.

**✅ You're done with Step 16 when** the feature is built and
matches the spec.

---

## Step 17: Verify and Test

> Skip this step if your workflow depth is **Prototype**.

### 17a. Verify it works — `/check verify`

```
/check verify
```

Runs the real app and proves the feature works against the spec's
acceptance criteria. It tests what the user actually sees and does.

### 17b. Write automated tests — `/test`

> Skip this sub-step if your workflow depth is **Alpha**.

```
/test
```

Writes a senior test suite for the code you just changed. It
saves your test framework choice for future runs.

**✅ You're done with Step 17 when** the feature works end-to-end
and tests pass (at your chosen workflow depth).

---

## Step 18: Review and Document

> Skip this step if your workflow depth is below **GA**.

### 18a. Code review — `/check review`

```
/check review
```

Runs a senior code review, ideally on a **different model** than
the one that wrote the code. It reads the code and reports
findings — it does not auto-fix.

### 18b. Write documentation — `/document`

```
/document
```

Writes the human-facing prose from the real diff: PR description,
changelog entry, release note, or postmortem. Whatever the change
needs.

**✅ You're done with Step 18 when** the code is reviewed and
documented.

---

## Step 19: Close and Sync

### 19a. Close the unit

```
Implementation is complete and verified.
Mark unit NN complete in context/progress-tracker.md.
```

### 19b. Sync everything — `/sync`

```
/sync
```

Reconciles `AGENTS.md`, the scope, and spec statuses to what the
repo now shows. Keeps everything current for the next feature.

### 19c. Go to the next feature

**⟳ Go back to Step 15** for the next unit in your build plan.

Repeat Steps 15–19 until every unit in `00-build-plan.md` is
complete.

---

# ─── PHASE 6: SHIP ───

---

## Step 20: Final Review and Deploy

- [ ] Review all context files — do they still match the
      built project?
- [ ] All tests pass
- [ ] `npm run build` passes with no errors
- [ ] Run `/sync` one final time
- [ ] Deploy 🚀

---

# ─── REFERENCE ───

Use this section as a lookup. You don't need to read it in order.

---

## Skills Reference

Nine engineering skills. One per phase. Run only the ones a
change needs, in any order.

```
idea → /scope → /audit → /architect → /develop → /check verify → /test → /check review → /document → /sync
```

Run `/debug` anytime something breaks.

| Skill | What it does | When to run |
|---|---|---|
| `/scope` | Turns an idea into a living, coarse plan | To start a new product or plan the next slice |
| `/audit` | Writes `AGENTS.md` context files | Brownfield: first. Greenfield: after scaffold |
| `/architect` | Makes a design decision, writes it as a spec | When a load-bearing choice is unmade |
| `/develop` | Builds a feature from its spec | After the spec exists. Gates to `/architect` if a decision is owed |
| `/check verify` | Runs the real app, proves the feature works | After `/develop` |
| `/check review` | Senior code review on a different model | Before a PR (GA depth) |
| `/test` | Writes a test suite for your change | After building a feature or fixing a bug |
| `/document` | Writes PR text, changelog, release note | When a finished change needs writing up |
| `/sync` | Keeps AGENTS.md, scope, and specs current | Last step around merge |
| `/debug` | Root-cause loop + regression test | Anytime something is failing |

## What Gets Written, and Where

| Artifact | Path | Owner |
|---|---|---|
| Scope | `docs/scope/` | `/scope` |
| Specs | `docs/specs/` | `/architect` |
| Context files | `AGENTS.md` (plus entry point) | `/audit`, kept current by `/sync` |
| Design system | `design.md` | `/develop` |
| Review findings | `docs/reviews/` | `/check` |
| Tests | your test directories | `/test` |
| App code | your source tree | `/develop` |
| Human docs | PR body, CHANGELOG.md, `docs/releases/` | `/document` |

If `docs/` is a published docs site, these move to `.workflow/`
so they do not ship with your site.

## Workflow Depth Quick Reference

| Depth | Steps you run per feature | Best for |
|---|---|---|
| **Prototype** | Step 15 → 16 | Throwaway work, hackathons |
| **Alpha** | Step 15 → 16 → 17a | Internal tools, MVPs |
| **Beta** | Step 15 → 16 → 17a → 17b | Pre-launch products |
| **GA** | Step 15 → 16 → 17 → 18 → 19 | Production apps, FYP |

## Troubleshooting

| Problem | What to do |
|---|---|
| Bug found during testing | `/debug` — finds root cause, creates regression test |
| AI drifts from architecture | Point it to `context/architecture.md` and the specific invariant |
| AI writes inconsistent code | Point it to `context/code-standards.md` and the specific rule |
| AI forgets project context | Clear the session — it re-reads the entry point file |
| Frontend looks wrong | Point it to `context/ui-context.md` and `context/frontend-prompt.md` |
| API is insecure | Point it to `context/backend-prompt.md` security section |
| Feature scope is unclear | Re-read the spec. If unclear, rewrite it before continuing |
| AI builds beyond the spec | Remind it: "Do not go beyond the scope of this unit" |
| Two features conflict | Resolve in `architecture.md` first, then rebuild |

## Starting from an Existing Codebase (Brownfield)

If your project is already built and you're adding features or
fixing bugs, adjust the order:

1. Copy the templates (Step 3c–3d)
2. Run `/audit` first (Step 13) — so the AI understands your
   existing project
3. Generate context files (Steps 4–10) — document what already
   exists, not what you plan to build
4. Run `/scope` (Step 11) — plan the next slice of work on top
   of what exists
5. Enter the feature loop (Steps 15–19) as normal

## Quick Changes Without the Full Workflow

Not everything needs the full loop:

- **Bug fix:** `/debug` → done
- **Small change:** Step 16 (`/develop`) → Step 17a
  (`/check verify`) → done
- **New feature:** Full Steps 15–19

---

## What's Next

### Join the Agentic Dev Course Waitlist

This guide is the foundation. The course goes deeper —
advanced agent patterns, complex builds, production AI
workflows, and everything in between.

[Join the Waitlist →](https://jsmastery.com/waitlist/ultimate-backend-course)

---

[Watch the full build on JavaScript Mastery YouTube Channel →](https://youtube.com/@javascriptmastery)

_Built with the Nine-File Context System and Engineering
Workflow Skills._
_JavaScript Mastery · 2026_
