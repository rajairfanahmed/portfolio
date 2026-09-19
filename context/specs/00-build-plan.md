# Build Plan

1. **Job 01**: `01-project-setup`
   - **Builds**: Next.js application scaffold, Tailwind CSS configuration (tokens, Geist fonts), `lucide-react` installation, and the `data/` directory structure containing all hardcoded content constants (bio, skills, projects, links).
   - **Requires**: Nothing

2. **Job 02**: `02-theme-and-layout`
   - **Builds**: Installation of `next-themes`, `ThemeProvider` setup in `app/layout.tsx`, the global site container wrapper, and the fixed top-right dark/light theme toggle component.
   - **Requires**: `01-project-setup`

3. **Job 03**: `03-hero-section`
   - **Builds**: The Hero component featuring the `next/image` profile photo (loaded with `priority`), one-line positioning statement, and CTA buttons that read from the `data/` layer.
   - **Requires**: `01-project-setup`

4. **Job 04**: `04-about-and-experience`
   - **Builds**: The About/Skills snapshot component (styled with Geist Mono) and the Experience/Education list component.
   - **Requires**: `01-project-setup`

5. **Job 05**: `05-projects-bento-grid`
   - **Builds**: The Projects section featuring a responsive bento grid layout (1 col mobile to asymmetric desktop) and individual project cards with images and tech tags.
   - **Requires**: `01-project-setup`

6. **Job 06**: `06-contact-section`
   - **Builds**: The Contact section containing the direct `mailto:` link, CV download link, and social profile links (LinkedIn, GitHub, Dev.to).
   - **Requires**: `01-project-setup`

7. **Job 07**: `07-motion-and-interactions`
   - **Builds**: Installation of `framer-motion`. Implementation of staggered load entrance animations, scroll-triggered section reveals, card hover scaling, and active tap states across all interactive elements.
   - **Requires**: `03-hero-section`, `04-about-and-experience`, `05-projects-bento-grid`, `06-contact-section`

8. **Job 08**: `08-seo-and-metadata`
   - **Builds**: Installation of `@vercel/og`. Implementation of `opengraph-image.tsx` for custom OG image generation, favicon configuration, and top-level page SEO tags.
   - **Requires**: `02-theme-and-layout`
