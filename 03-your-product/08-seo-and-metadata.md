# Unit 08: seo-and-metadata

# Goal

- Configure robust metadata for SEO across all four routes (`/`, `/projects`, `/about`, `/contact`).
- Generate a dynamic, geometric `icon.tsx` (favicon).
- Generate a dynamic, cinematic 1200x630 `opengraph-image.tsx` using `next/og` (replaces the older `@vercel/og` package in Next 15+).

# Design

- **Visual (OG Image)**: 1200x630. Dark canvas (`#0A0A0A`). Bold white text for the site name and the hot accent (e.g., `#E14F1C`) for the positioning line or geometric embellishments. Minimalist and cinematic, mirroring the executive hook of the Hero section.
- **Visual (Favicon)**: 32x32. A simple geometric shape (like a slash, square, or dot) using the hot accent color on an obsidian background.
- **Data**: Reads `site.name` and `site.positioning` from `data/index.ts`.
- **Follow**: `03-your-product/ui-context.md` for exact colors (obsidian canvas, hot accent). 
- **Blast radius**: `app/icon.tsx`, `app/opengraph-image.tsx`, `app/layout.tsx` (base metadata configuration), and `page.tsx` for each route (for localized title/description overrides).
- **Rollback**: Delete `app/icon.tsx` and `app/opengraph-image.tsx`. Remove per-route metadata objects.

# Implementation

1. Create `app/icon.tsx` exporting an `ImageResponse` from `next/og`. Size 32x32. Content type `image/png`. Render a simple div with a dark background and an accent geometric shape.
2. Create `app/opengraph-image.tsx` exporting an `ImageResponse` from `next/og`. Size 1200x630. Content type `image/png`. Render `site.name` and `site.positioning` in a beautifully spaced layout resembling the Hero component.
3. Update `app/layout.tsx` to include an explicit `metadataBase` (e.g., `new URL("https://rajairfanahmed.vercel.app")`), a `title` config (`{ default: site.name, template: \`%s | ${site.name}\` }`), and `description: site.positioning`.
4. Review `/projects`, `/about`, and `/contact` to ensure they have specific `metadata` exports (e.g., `title: "Projects"`) that hook into the layout template.
5. Run lint, types, and `npm run build`.

# Dependencies

- All prior jobs (01 through 07) must be done.

# Verify when done

- [x] `app/icon.tsx` generates a 32x32 geometric favicon
- [x] `app/opengraph-image.tsx` generates a 1200x630 OG image using `next/og`
- [x] `app/layout.tsx` exports a configured `metadataBase` and `title` template
- [x] Each route (`/projects`, `/about`, `/contact`) exports local metadata
- [x] `npm run build` passes
- [x] UX floor that applies: none specific to UI
- [x] API floor that applies: fully static, build command is `npm run build`
