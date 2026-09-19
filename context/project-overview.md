# Raja Irfan Ahmed — Portfolio Website

## Overview

This is a personal portfolio website for Raja Irfan Ahmed, built to attract recruiters and hiring managers for Full Stack AI Web Apps roles. The site is a fully static Next.js application with no backend, no database, and no authentication. It showcases 3-5 real projects as proof of technical skill, with a 2026-current design (dark/light theme toggle, bento grid layout, motion-driven interactions) built for speed and a strong first impression. The core problem it solves is giving recruiters a fast, credible way to evaluate Raja Irfan Ahmed's abilities and reach out, without noise or unrelated content diluting the pitch.

## Goals

1. Present Raja Irfan Ahmed as a Full Stack AI Web Apps developer through a focused, single-identity positioning, not a mixed skillset pitch.
2. Get recruiters to review real project work (via GitHub and live demo links) as the primary proof of ability.
3. Convert recruiter interest into direct contact, using project quality as the main driver rather than the CV download.
4. Load fast and score well on Core Web Vitals, since recruiters evaluate multiple candidates quickly.
5. Present a visually current (2026) design that signals frontend competence on its own, independent of the written content.

## Core User Flow

1. Recruiter lands on the Hero section and sees Raja's name, one-line positioning statement, and photo, with two CTAs: "View Projects" and "Download CV."
2. Recruiter scans the About/Skills snapshot for a quick read on tech stack and capabilities.
3. Recruiter reaches the Projects section (bento grid) and reviews 3-5 projects, each showing the problem solved, tech tags, and links to GitHub and a live demo.
4. Recruiter optionally checks Experience/Education for background context.
5. Recruiter reaches the Contact section and either emails Raja Irfan Ahmed directly (mailto: link), downloads the CV from Google Drive, or visits Raja's LinkedIn, GitHub, or dev community profile.
6. Recruiter takes the primary action: contacting Raja Irfan AHmed.

## Features

### Hero Section

- Name and one-line positioning statement ("Full Stack AI Web Apps Developer")
- Profile photo, optimized with `next/image`, loaded with `priority` and no blur delay
- Two CTA buttons: "View Projects" (scrolls to projects section) and "Download CV" (links to Google Drive)

### About / Skills Snapshot

- Scannable list of tech stack, styled using Geist Mono for a technical, code-like presentation

### Projects (Bento Grid)

- 3-5 hardcoded projects pulled from a central data file
- Each project card includes: title, one-line problem statement, tech stack tags, GitHub link, live demo link
- Card layout: top 60% project screenshot image, bottom 40% text content
- Flagship project sized larger (`col-span-2 row-span-2`) than secondary projects
- Responsive grid: single column on mobile, 2-column on tablet, full asymmetric grid on desktop
- Hover interaction: image scales slightly, indigo border/glow appears, card container stays stable (no layout shift)

### Experience / Education

- Brief listing of relevant education and any internships or coursework, included only if it strengthens the pitch

### Contact

- Email via `mailto:` link(rajairfana551@gmail.com) (no third-party form service)
- LinkedIn link (https://www.linkedin.com/in/rajairfanahmed/)
- GitHub link (https://github.com/rajairfanahmed)
- Active dev community profile link (https://dev.to/rajairfanahmed)
- CV download button (Google Drive, set to "[Anyone with the link can view](https://drive.google.com/file/d/1CRblzPL3j8W6mv06d6FzW-zujSwqs9tN/view?usp=drive_link)")

### Theming

- Dark/light mode toggle using `next-themes`, no flash of unstyled content on load
- Instant theme switch (no full-page fade transition)
- Minimalistic Sun/Moon icon toggle, fixed top-right

### Motion

- Staggered entrance animation on page load (`y: 20, opacity: 0` → `y: 0, opacity: 1`, 0.4s, spring physics)
- Scroll-triggered section reveals at 20% viewport entry
- No heavy parallax effects

### Accessibility

- Visible `focus-visible` states for keyboard navigation on all interactive elements
- `active:scale-95` feedback on clicks/taps

### Metadata

- Custom Open Graph image (1200x630px) generated via `opengraph-image.tsx` and `@vercel/og`
- Abstract geometric favicon in the indigo accent color

## Scope

### In Scope

- Fully static, public site with no authentication
- Hardcoded project and content data, manually redeployed on updates
- Dark/light theme toggle
- Framer Motion animations and scroll-triggered reveals
- Bento grid project layout with responsive breakpoints
- `mailto:` contact link and Google Drive-hosted CV
- Custom OG image, favicon, and page metadata
- Performance optimization for Core Web Vitals

### Out of Scope

- Blog or articles section
- Testimonials section
- Multi-language support
- CMS or admin panel for editing content
- Dynamic resume-builder tool
- Backend, database, or any data storage layer
- User authentication or login of any kind
- Contact form service (Formspree, EmailJS, or similar)
- Quora and Linktree links

## Success Criteria

1. The site loads as a fully static Next.js app deployed on Vercel, with no backend or database dependencies.
2. Dark/light mode toggles instantly with no flash of unstyled content on initial load.
3. All 3-5 projects display correctly in the bento grid at mobile, tablet, and desktop breakpoints, with working GitHub and live demo links.
4. The CV downloads successfully from the Google Drive link with correct public sharing permissions.
5. The `mailto:` link opens the user's email client with Raja's address pre-filled.
6. Framer Motion animations run smoothly (staggered load, scroll reveals, hover states) with no visible jank on mobile devices.
7. Keyboard navigation reaches all interactive elements with visible focus states.
8. Sharing the site link on platforms like LinkedIn shows the correct custom Open Graph preview image.
9. The site scores 90+ on Lighthouse/PageSpeed for Performance, Accessibility, Best Practices, and SEO.