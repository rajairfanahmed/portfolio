# Unit 09: Global Navigation

# Goal

- Replace the existing static, top-aligned text navbar with a centered, glassmorphic floating dynamic dock anchored at top-6 for desktop and bottom-6 for mobile.
- Extract the skills link to create a 5-route structure (`/`, `/projects`, `/skills`, `/about`, `/contact`).
- Implement Active Route Morphing with a Framer Motion `layoutId` pill.
- Wrap the main application layout in `<AnimatePresence mode="wait">` for seamless cross-fade transitions without white flashes.

# Design

- **Visual Choices**: 
  - Floating dock uses `backdrop-blur-xl`.
  - Dark mode background: `bg-white/5` (using Tailwind `bg-white/5` or custom token).
  - Light mode background: `bg-black/5` (using Tailwind `bg-black/5`).
  - Active pill: A subtle background pill that glides behind the active route name.
- **Blast radius**: `app/layout.tsx` (wrapping children in AnimatePresence) and `app/template.tsx` (the transition wrapper). The `Navbar` component (or `Header`) will be completely refactored.
- **Rollback**: Revert `app/layout.tsx` and `components/Header.tsx` to their previous static implementations.

# Implementation

1. **Routing Updates**:
   - Update any hardcoded navigation arrays (in `components/Header.tsx` or `data/index.ts`) to include the new `/skills` route.
   - Create a placeholder `app/skills/page.tsx` exporting a basic functional component so the route resolves without 404.
2. **Global Navigation Component (`FloatingDock.tsx`)**:
   - Create `components/FloatingDock.tsx` as a client component (`"use client"`).
   - Use `usePathname` to detect the active route.
   - Map over the 5 routes (`/`, `/projects`, `/skills`, `/about`, `/contact`).
   - Wrap the links in a flex container with `backdrop-blur-xl`, absolute positioning/fixed centering (top-6 md, bottom-6 base), rounded pill styling, and 1px milled borders (`shadow-[inset_...]`).
   - For the active route, render an absolute Framer Motion `motion.div` with `layoutId="activePill"` sitting behind the text, using the premium spring physics (`mass: 0.8, stiffness: 250, damping: 24`).
3. **App Layout Integration**:
   - Replace the old static Header with `FloatingDock` in `app/layout.tsx`.
   - Ensure the dock is rendered *outside* of the route transition wrapper so it remains stationary while pages cross-fade.
4. **AnimatePresence & Template (`app/template.tsx` / `app/layout.tsx`)**:
   - In Next.js App Router, to use `mode="wait"`, we must wrap a component whose `key` changes on route navigation. We will implement a client component `TransitionWrapper.tsx` containing `<AnimatePresence mode="wait">` and use `usePathname()` as the key for its `motion.div` child, allowing the old page to fade out before the new one fades in.

# Dependencies

- `01-project-setup`
- `07-motion-and-transitions` (Framer Motion is already installed)

# Verify when done

- [x] A floating, glassmorphic dock appears at the top (desktop) or bottom (mobile).
- [x] The dock contains 5 links: Home, Projects, Skills, About, Contact.
- [x] Clicking a link causes a subtle background pill to physically snap (spring physics) behind the active route.
- [x] The dock remains completely stationary during route transitions.
- [x] The main content cross-fades seamlessly without a white flash.
- [x] `npm run build` passes with the new `/skills` route.
- [x] Keyboard Tab navigates through the floating dock with a 2px Electric Indigo focus ring.
