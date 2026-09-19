# Backend catalog

Seven axes. They stack. `02-fill-these-prompts/02-stack.md` recommends a set. The user confirms. Then write `03-your-product/architecture.md` and later `03-your-product/backend-prompt.md` from that set.

# Shape

- Portfolio / content — pages, maybe a form
- SaaS multi-tenant — orgs, roles, isolation
- E-commerce — catalog, cart, pay
- Marketplace — two-sided flows
- AI product — model, prompt, or tools
- Internal tool — ops, admin, data

# API

- Server Actions (default on Vercel / Next.js)
- REST
- tRPC
- GraphQL
- Webhooks

# Data

- None
- Neon Postgres (default when SQL is needed on Vercel)
- Supabase
- Mongo
- Hybrid + cache

# Auth

- None
- Session cookie
- OAuth
- Org / RBAC
- Passwordless

# Runtime

- Next.js on Vercel (default)
- Edge + cron
- Separate API
- Queues

# Reliability

- Simple CRUD
- Transactions
- Idempotent webhooks
- Audit / compliance

# AI layer

- None
- One model
- RAG
- Tools / agents + evals and a cost bound

# How to recommend

- Default unless the product says otherwise: Next.js on Vercel, Server Actions, CRUD, session auth if there are users, Neon if there is data, AI none
- Vercel is the host. It is not the database. Name Neon or Supabase before the first data job
- Marketplace, payments, or webhooks → idempotency
- Multi-tenant SaaS → org / RBAC and row isolation as an invariant
- Any job that changes a model, prompt, or tool → eval note and cost bound

# Always

Copy `04-always-on-rules/floor-api.md` into `03-your-product/architecture.md`.
