# Raja Irfan Ahmed Portfolio

## Overview
A multi-page, premium realistic developer portfolio for Raja Irfan Ahmed. Designed with an elite, spatial aesthetic, it features high-fidelity physics-based animations, deep dark and light modes, and seamless page transitions. The site acts as a comprehensive showcase of full-stack engineering capabilities, prioritizing a 90+ Lighthouse score, robust SEO metadata, and clear, recruiter-ready conversion paths across five dedicated routes.

**Short Description:** A premium 2026 multi-page developer portfolio showcasing full-stack AI web applications with high-fidelity Framer animations, spatial UI design, and an integrated experience timeline.  
**Tags:** Portfolio, Next.js, Framer Motion, Tailwind CSS, Full-Stack, AI Web Apps, UI/UX

## Goals
1. Establish a premium, modern engineering brand identity for Raja Irfan Ahmed.
2. Achieve 90+ Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.
3. Convert visitors into professional connections via direct email and social links.
4. Deliver a tactile, latency-free user experience utilizing high-end, spring-based micro-interactions.
5. Organize comprehensive professional data across distinct, easily navigable pages while surfacing critical timeline data immediately on the landing page.

## Core User Flow
1. Visitor lands on the Home page, experiencing a high-impact animated Hero section, viewing a preview of 2 flagship projects, scanning a brief Experience & Education timeline, and reading the "Current Focus" summary.
2. Visitor uses the floating dynamic navbar to navigate to the `/projects` page for a complete gallery of work, interacting with GitHub and Live Demo links (which securely open in new tabs).
3. Visitor explores the `/skills` page to review categorized technical competencies in a structured, high-density layout.
4. Visitor navigates to the `/about` page to read the deeper professional narrative.
5. Visitor clicks the "Resume" button in the navbar to instantly access the CV in a new tab, or navigates to `/contact` to reach out via email, LinkedIn, or GitHub.

## Features
*   **Global Navigation:** A floating, glassmorphic dock navbar containing links to Home, Projects, Skills, About, Contact, and a prominent Resume button. Includes a fluid Dark/Light theme toggle utilizing Framer Motion for a smooth, premium modern visual shift.
*   **Global Link Behavior:** Every external link, including GitHub repositories, Live Demos, social profiles, and the Resume, strictly opens in a new tab.
*   **Home Page (5 Sections):**
    *   *Hero:* Massive typography, animated entrance, and primary value proposition.
    *   *Selected Work:* A bento-grid preview of the top 2 flagship projects.
    *   *Experience & Education Snapshot:* A sleek, scroll-linked timeline highlighting the BSCS at NUML (2026) and current full-stack developer roles directly on the landing page for immediate recruiter visibility.
    *   *Current Focus:* A short, punchy text block detailing current engineering interests.
    *   *Quick Conversion:* A visually striking call-to-action routing users to the Contact page.
*   **Projects Page:** An asymmetric bento grid of project cards. Each card includes a high-fidelity image mockup, project title, a short one-line description, tech stack tags, a GitHub button, and a Live Demo button.
*   **Skills Page:** A dedicated, high-density display of technical skills grouped by category (e.g., Frontend, Backend, Architecture) utilizing interactive data-viz elements or a command-palette style list.
*   **About Page:** A narrative professional biography expanding on the developer's mindset, architecture philosophy, and background.
*   **Contact Page:** A high-conversion, distraction-free grid layout featuring direct links to Email (`rajairfana551@gmail.com`), LinkedIn (`/rajairfanahmed`), GitHub (`/rajairfanahmed`), and dev.to (`/rajairfanahmed`).
*   **SEO & Metadata:** Custom Open Graph images, canonical URLs, and descriptive meta tags mapped to every individual route.

## Scope

### In Scope
*   5 distinct static pages (`/`, `/projects`, `/skills`, `/about`, `/contact`).
*   Dark and Light mode support with zero flash of unstyled content and fluid animated theme transitions.
*   High-fidelity animations and micro-interactions (hover scales, magnetic cursor tracking, page cross-fades).
*   Hardcoded, static data structures for projects, skills, and the experience timeline.
*   Direct `mailto:` routing and external social linking.
*   All external links and document viewers explicitly configured to open in new tabs (`target="_blank" rel="noopener noreferrer"`).

### Out of Scope
*   Backend database, ORM, or CMS integration.
*   User authentication or admin login portals.
*   Server-side processing for contact forms (no SendGrid, Resend, or form submission APIs).
*   Blog posting, Markdown article rendering, or comment sections.
*   E-commerce or payment gateways.

## Success Criteria
1. The site renders flawlessly across mobile, tablet, and desktop viewports, successfully hiding complex desktop interactions (like command-palette keyboard shortcuts) behind accessible touch-friendly UI on mobile devices.
2. Google Lighthouse scores for Performance, Accessibility, Best Practices, and SEO are all 90 or above on both mobile and desktop.
3. The site successfully deploys with 5 distinct, independently accessible URL routes.
4. Clicking the Resume button, GitHub links, Live Demos, and social profiles exclusively opens them in new browser tabs securely.
5. The Home page successfully integrates and renders the Experience & Education timeline snapshot without disrupting the bento grid flow.
6. Dark and light themes toggle smoothly using premium Framer animations without breaking the UI, maintaining WCAG 2.2 AA contrast ratios in both modes.