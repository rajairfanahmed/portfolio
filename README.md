# ai-developer-playbook

A complete AI-driven development framework with a 9-file context system, expert persona routing, and 9 engineering workflow skills to plan, architect, build, and ship production apps with AI agents without drift.

## Structure

```
ai-developer-playbook/
├── AGENT.md                           ← Entry point rules and task routing
├── AGENTS.md                          ← Agent context entry point
├── context/                           ← Project knowledge & persona templates
│   ├── project-overview.md            ← Product definition, goals, and scope
│   ├── architecture.md                ← System boundaries, tech stack & rules
│   ├── ui-context.md                  ← Theme, typography, design tokens
│   ├── code-standards.md              ← Coding conventions & standards
│   ├── ai-workflow-rules.md           ← AI behavior & scoping rules
│   ├── progress-tracker.md            ← Current build phase & progress
│   ├── frontend-prompt.md             ← Frontend expert persona
│   ├── backend-prompt.md              ← Backend expert persona
│   ├── fullstack-prompt.md            ← Fullstack expert persona
│   └── specs/                         ← Ordered build units & feature specs
│       ├── 00-build-plan.md
│       ├── 01-auth-setup.md
│       └── 02-database-schema.md
├── docs/                              ← Documentation and skill output directories
│   ├── scope/                         ← Output from /scope
│   ├── specs/                         ← Output from /architect
│   ├── reviews/                       ← Output from /check
│   ├── conventions.md                 ← Skill conventions
│   ├── workflow-guide.md              ← Engineering workflow documentation
│   └── playbook-guide.md              ← Full playbook reference
└── skills/                            ← Engineering workflow skills
    ├── architect/
    ├── audit/
    ├── check/
    ├── debug/
    ├── develop/
    ├── document/
    ├── scope/
    ├── sync/
    └── test/
```

## Quick Start

1. **Fill In Context**: Define your project requirements and stack inside `context/project-overview.md` and `context/architecture.md`.
2. **Setup Personas**: Follow the prompts in `context/frontend-prompt.md`, `backend-prompt.md`, and `fullstack-prompt.md` to tailor your AI personas to your stack.
3. **Plan Units**: Create or update your build plan in `context/specs/00-build-plan.md`.
4. **Build with Skills**: Use the workflow skills (`/scope` → `/architect` → `/develop` → `/check` → `/test` → `/sync`) to iterate feature by feature.
5. **Full Guide**: For in-depth instructions and examples, see [`docs/playbook-guide.md`](docs/playbook-guide.md).
