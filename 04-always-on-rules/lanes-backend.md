# Backend lanes (2026)

Ask separately. Generate `03-your-product/backend-prompt.md` only from the confirmed lanes plus `03-your-product/architecture.md`.
Do not invent a database or Edge runtime the architecture file did not confirm.

# Vercel Edge / Cloudflare Workers

- Route Handlers in `app/api` on Edge where the work is light (OG images, stats)
- Target under 50ms for utility routes
- Never bcrypt or heavy parsers on Edge

# Stripe (data integrity)

- Schema-first. Zod parse on the way in and out
- Typed error envelope. No raw 500 to the client
- Shared contracts in `@/lib/validations` so frontend types break on schema change

# Supabase (security)

- Authz on every write. Strict CORS
- CSP nonce or hash. `X-Content-Type-Options: nosniff`. `X-Frame-Options: DENY`. Strict `Referrer-Policy`
- Rate limit contact and other mutations (Upstash Redis or Vercel KV)
- Trim, sanitize, bounds-check every string

# Pagination law

- Every list: `{ data: T[], metadata: { total: number, page: number, hasNext: boolean } }`
- Cursor pagination for high-velocity or huge histories. Offset for small lists

# Data

- Static core records at build. Live bits via ISR or edge fetch
- Third-party timeout → cached stale payload, not 500

# Anti-patterns

- No secrets in the client
- No unpaginated dumps
- No unhandled 500
- No heavy Node libraries on Edge
