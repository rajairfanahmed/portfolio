# Raja Irfan Ahmed Portfolio

## Overview

This is a personal portfolio website for Raja Irfan Ahmed. It is a fully static Next.js site with no backend, no database, and no authentication. It exists so recruiters and hiring managers evaluating Full Stack AI Web Apps candidates can judge real work quickly: name, positioning, 3-5 project proofs, and a direct way to email or download a CV. The site is built for speed and a 2026-current first impression (dark/light theme, bento project grid, restrained motion). Unrelated content stays off the page so the pitch stays single-identity.

## Goals

1. Present Raja Irfan Ahmed as a Full Stack AI Web Apps developer through one positioning line, not a mixed skillset pitch.
2. Get recruiters to open real project proof (GitHub and live demo) as the primary evidence of skill.
3. Convert interest into contact (email, CV, or LinkedIn/GitHub/dev.to), with project quality as the driver rather than the CV download alone.
4. Load fast and score well on Core Web Vitals so a recruiter scanning many candidates is not blocked by the site.
5. Make the visual system itself evidence of frontend competence, independent of the written copy.

## Core User Flow

1. Recruiter lands on the Hero and sees Raja Irfan Ahmed's name, the line "Full Stack AI Web Apps Developer", a profile photo, and two CTAs: View Projects and Download CV.
2. Recruiter scans the About/Skills snapshot for stack and capabilities.
3. Recruiter reaches the Projects bento grid and reviews 3-5 projects. Each card shows the problem solved, tech tags, a GitHub link, and a live demo link.
4. Recruiter optionally reads Experience/Education for background.
5. Recruiter reaches Contact and emails `rajairfana551@gmail.com` via `mailto:`, downloads the CV from Google Drive, or opens LinkedIn, GitHub, or the dev.to profile.
6. Recruiter takes the primary action: contacting Raja Irfan Ahmed.

## Features

### Hero Section

- Name and the positioning line "Full Stack AI Web Apps Developer"
- Profile photo via `next/image`, `priority`, no blur delay
- View Projects scrolls to the projects section
- Download CV opens the public Google Drive file

### About / Skills Snapshot

- Scannable tech stack list, set in Geist Mono

### Projects (Bento Grid)

- 3-5 projects from a central data file
- Each card: title, one-line problem, tech tags, GitHub link, live demo link
- Card split: top about 60% screenshot, bottom about 40% text
- One flagship project larger than the rest (`col-span-2 row-span-2`)
- Grid: one column on mobile, two on tablet, full asymmetric grid on desktop
- Hover: image scales slightly, indigo border/glow, card box does not shift

### Experience / Education

- Education: BSCS, National University of Modern Languages, Islamabad, 2026
- Brief experience/internship/coursework listing when it strengthens the pitch

### Contact

- Email via `mailto:rajairfana551@gmail.com` (no form service)
- LinkedIn: https://www.linkedin.com/in/rajairfanahmed/
- GitHub: https://github.com/rajairfanahmed
- Dev.to: https://dev.to/rajairfanahmed
- CV: Google Drive, anyone-with-the-link can view, https://drive.google.com/file/d/1CRblzPL3j8W6mv06d6FzW-zujSwqs9tN/view?usp=drive_link

### Theming

- Dark/light toggle via `next-themes`, no flash of unstyled content
- Instant switch, no full-page fade
- Sun/Moon icon, fixed top-right

### Motion

- Staggered page-load entrance (`y: 20, opacity: 0` → `y: 0, opacity: 1`, 0.4s, spring)
- Section reveals when 20% of the section enters the viewport
- No heavy parallax

### Accessibility

- Visible `focus-visible` on every interactive control
- `active:scale-95` on click/tap

### Metadata

- Custom Open Graph image, 1200x630, via `opengraph-image.tsx` and `@vercel/og`
- Abstract geometric favicon in the indigo accent

## Scope

### In Scope

- Fully static public site, no authentication
- Hardcoded project and content data; updates ship by redeploy
- Dark/light theme toggle
- Framer Motion load and scroll reveals
- Bento project grid with mobile, tablet, and desktop breakpoints
- `mailto:` contact and Google Drive CV
- Custom OG image, favicon, and page metadata
- Performance work aimed at Core Web Vitals
- Experience/Education section

### Out of Scope

- Blog or articles
- Testimonials
- Multi-language support
- CMS or admin panel
- Dynamic resume builder
- Backend, database, or any app-owned storage
- User accounts or login
- Contact form services (Formspree, EmailJS, or similar)
- Quora and Linktree links
- AI inference, model calls, or background jobs on this site

## Success Criteria

1. The live site is a static Next.js deploy on Vercel with no backend or database dependency.
2. Dark/light mode switches instantly and does not flash the wrong theme on first load.
3. All featured projects render in the bento grid at mobile, tablet, and desktop, with working GitHub and live demo links.
4. The CV link opens the Google Drive file under "Anyone with the link can view".
5. The `mailto:` link opens a mail client with `rajairfana551@gmail.com` filled in.
6. Load, scroll, and hover motion run without visible jank on a phone.
7. Keyboard Tab reaches every interactive control and shows a visible focus state.
8. Sharing the URL (for example on LinkedIn) shows the custom 1200x630 Open Graph image.
9. Lighthouse/PageSpeed scores 90 or above for Performance, Accessibility, Best Practices, and SEO.
