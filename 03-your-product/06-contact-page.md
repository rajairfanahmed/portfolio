# Unit 06: contact-page

# Goal

- `/contact` is a distraction-free conversion page with a massive header and vast darkspace.
- Provide direct, high-contrast links to email (`mailto:`), LinkedIn, GitHub, dev.to, and Google Drive CV pulled from `data/index.ts`. No third-party contact form.

# Design

- **Visual**: "The quiet close". A massive, ultra-bold header asking the visitor to start a conversation (e.g., "Let's build something."). The layout relies on vast, distraction-free darkspace around the links.
- **Data**: Reads `site.email`, `site.linkedinUrl`, `site.githubUrl`, `site.devtoUrl`, and `site.cvUrl` from `data/index.ts`.
- **Typography**: Display header uses `font-sans font-black` and massive text scaling. Links use `text-xl` or larger for easy targeting.
- **Motion**: `active:scale-95` on click/tap for all links. Hover state applies the glowing `--accent-primary` text color.
- **Follow**: `03-your-product/ui-context.md` and `04-always-on-rules/floor-ux.md`.
- **Blast radius**: `app/contact/page.tsx`. Must not touch `/` or `/about` or `/projects`.
- **Rollback**: Revert `app/contact/page.tsx` to the thin scaffold from Job 03.

# Implementation

1. Update `app/contact/page.tsx` (Server Component) to render the Contact layout. Tighten the content width internally to `max-w-3xl` or `max-w-4xl` to enforce the "vast darkspace" requirement.
2. Structure the page with a massive `h1` header ("Let's build something.", "Start a conversation.", etc.).
3. Below the header, render a vertical list or a simple grid of large text links for Email, CV, LinkedIn, GitHub, and dev.to.
4. Each link must be a native `<a>` tag with appropriate `href` (`mailto:${site.email}` for email, `target="_blank" rel="noopener noreferrer"` for external links). 
5. Integrate `lucide-react` icons (e.g., `Mail`, `FileText`, `Linkedin`, `Github`, `Terminal`) alongside the text to boost the high-contrast aesthetic.
6. Apply CSS classes for `active:scale-95 transition-all`, large hit areas (`min-h-[44px]`), and the `--accent-primary` color on hover.
7. Ensure the layout handles missing data gracefully (e.g., if an email address is missing, render a fallback or disable the link).
8. Run lint, types, and `npm run build`.

# Dependencies

- Job `01-project-setup` (Done)
- Job `02-theme-and-layout` (Done)
- Job `03-home-page` (Done)

# Verify when done

- [x] `/contact` renders a massive bold header and vast darkspace
- [x] Content is constrained to a narrower width to emphasize the darkspace
- [x] Email link uses `mailto:` and is populated from `data/index.ts`
- [x] CV, LinkedIn, GitHub, and dev.to links exist and open in new tabs
- [x] Links have visible focus states and at least a 44x44px touch target
- [x] Links scale down slightly (`active:scale-95`) when clicked
- [x] No third-party contact form is present
- [x] `npm run build` passes
- [x] UX floor that applies: keyboard path and visible focus
- [x] API floor that applies: fully static, no list endpoint, build command is `npm run build`
