# Persona notes (active)

`02-fill-these-prompts/06-personas.md` and `03-theme.md` must ask named lanes and generate files specific to the user's pick.
Lane catalog: `04-always-on-rules/lanes-frontend.md` and `04-always-on-rules/lanes-backend.md`.

# Why

A generic "dark portfolio" persona produced flat pages, orange chips, placeholder art, and almost no motion. That look is banned unless the user asks for it.

# Frontend bar (when Linear / Vercel / Apple / Stripe / Raycast win)

- Lead design engineer, 10+ years, Next.js App Router, React, TypeScript, Tailwind, Framer Motion
- Spatial dark: `#050506` / `#0A0A0C` / glass `bg-white/5 backdrop-blur-2xl`
- 1px inner and outer translucent borders
- Geist or Inter body. Display face for heroes. Geist Mono + `tabular-nums` for meta
- Spring scale 1.02, pointer-tracked gradient inside the card
- Floating magnetic dock. Cmd+K. Paginated tables. No white flash on routes
- GPU transform/opacity only. Custom scrollbar. Every surface has elevation
- WCAG 2.2 AA. Zero CLS. Semantic HTML. Typed props + JSDoc

# Backend bar (when Edge + Stripe contracts + Supabase security win)

- Edge Route Handlers. Zod everywhere. Pagination envelope
- Utility routes under 50ms. Stale cache on upstream timeout
- Rate limit mutations. CSP. nosniff. DENY frame
- No client secrets. No unbounded arrays. No heavy Node on Edge
