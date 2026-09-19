# Code Standards

## General
- Write clean, readable, and maintainable code with a strict separation of concerns between data, structure, and styling.
- Enforce WCAG 2.2 AA accessibility standards across the entire application, ensuring every interactive element has explicit ARIA labels and focus states.
- Guarantee zero Cumulative Layout Shift (CLS) by hardcoding aspect ratios for media and pre-allocating dimensions for dynamic grid layouts.
- Design mobile-first, ensuring fluid container scaling down to 320px and maintaining a minimum 44x44px touch target for all interactive UI elements.
- Optimize explicitly for a 90+ Lighthouse score by avoiding heavy synchronous scripts and deferring non-critical execution.

## Language
- Use strict TypeScript for all application code, configuration files, and data structures.
- Enable `strict: true` in `tsconfig.json` and strictly prohibit the use of `any` or `@ts-ignore` overrides.
- Define all component props, API payloads, and internal data structures using explicit TypeScript interfaces or type aliases.
- Utilize modern ES6+ syntax, preferring functional paradigms, optional chaining, and nullish coalescing over legacy control flow.

## Framework
- Use Next.js 15 App Router and enforce React Server Components (RSC) as the default for all layouts and pages.
- Restrict the `"use client"` directive exclusively to leaf components that require React state, lifecycle hooks, or Framer Motion physics.
- Implement `<AnimatePresence mode="wait">` at the root layout boundary to facilitate seamless cross-route layout morphing without white flashes.
- Serve all raster and vector media using the `next/image` component to enforce automatic WebP/AVIF optimization and strict dimensions.
- Use granular Suspense boundaries wrapped around interactive data tables or heavy UI nodes instead of blocking the entire route with a loading spinner.

## Styling
- Use Tailwind CSS v4 utility classes exclusively to style all UI components and layouts.
- Map all color assignments to the semantic CSS variables defined in `app/globals.css` (e.g., `bg-[var(--bg-surface)]`); never hardcode hex values in component files.
- Apply `tabular-nums` to all dynamic metrics, pagination counters, and dates to prevent horizontal font jitter.
- Render motion exclusively via Framer Motion spring physics (`mass: 0.8, stiffness: 250, damping: 24`) targeting composited properties like `transform` and `opacity`.
- Construct spatial depth by utilizing a dual-border technique (`box-shadow: inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.05)`) on all elevated cards and the floating dock.

## API
- Operate entirely statically; do not execute external data fetches at runtime that block the initial HTML stream.
- Ensure any utility Route Handlers (`app/api/...`) strictly utilize the Vercel Edge runtime for sub-50ms execution.
- Validate all incoming edge request parameters, query strings, and payloads using Zod schemas prior to processing.
- Rely on standard RFC 6068 `mailto:` URIs for contact interactions rather than deploying server-side form submission endpoints.
- Apply hardened security headers (`X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`) to all edge responses.

## Data
- Centralize all portfolio records (projects, skills, academic history) within a dedicated `@/data` directory as localized TypeScript files.
- Construct datasets as immutable constants typed strictly against exported interfaces (e.g., `export const projects: Project[] = [...]`).
- Pre-structure high-density data matrices (such as the skills list) to immediately support tabular rendering or offset-based pagination in the UI layer.
- Enforce build-time failures if static data records violate required schema shapes (e.g., missing repository URLs or live demo links).

## File Organization
- Dedicate the `app/` directory solely to Next.js file-system routing, layout definitions, and page shells.
- House all modular UI primitives, complex client components, and layout fragments (like the floating dock) in the root `@/components` directory.
- Maintain a strict `@/lib` folder for shared utilities, Zod schema validations, and framework configuration functions (like Tailwind `cn` mergers).
- Store all public-facing static assets, fonts, and Open Graph base images exclusively within the `public/` directory.