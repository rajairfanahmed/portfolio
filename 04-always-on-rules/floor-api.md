# API floor

Always on. Every backend level.

- List endpoints are paginated. No unbounded dumps
- Typed error envelope. No stack traces to the client
- Authz on every write
- Validate input at the boundary
- Idempotency on payments and webhooks
- Never commit secrets. Env lives on Vercel
- Build command in `03-your-product/architecture.md` is the source of truth (`npm run build` unless that file says otherwise)
