# Unit 10: Theme and Depth

# Goal

- Implement Spatial Depth & Dual-Theme Fidelity across the entire application. Update `app/globals.css` with Obsidian/Charcoal and Bone/White bases, apply 1px milled borders globally to cards and floating elements, ensure `active:scale-95` tactile depressions on interactive controls, and standardize all motion to use spring physics instead of linear transitions.

# Design

- **Visual Choices**: 
  - Dark mode base: Obsidian `#050506`. Elevated cards on deep charcoal `#0A0A0C`.
  - Light mode base: Bone `#FCFCFD`. Pure white `#FFFFFF` cards elevated by a 4% opacity drop shadow.
  - 1px Milled Borders: Apply `box-shadow: inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.05)` (or equivalent light-mode shadow) to all cards, bento grid items, and floating containers.
  - Interactive elements (buttons, links, project cards) must scale down (`scale-95`) when active/clicked for immediate physical feedback.
  - Standardize Framer Motion configurations to use spring physics (`mass: 0.8, stiffness: 250, damping: 24`).
- **Blast radius**: `app/globals.css`, `components/theme-provider.tsx`, and existing UI components (like buttons, links, project cards) that need the tactile classes and borders added.
- **Rollback**: Revert `app/globals.css` to the previous state and remove the tactile/border utility classes from components.

# Implementation

1. **Update CSS Variables (`app/globals.css`)**:
   - Redefine `--bg-base`, `--bg-surface`, `--bg-elevated`, and `--border-default` for both the `:root` (light) and `.dark` scopes according to the new Obsidian/Charcoal and Bone/White color specs.
   - Define custom CSS classes or Tailwind `@utility` rules for the 1px milled border (`.milled-border`) and light mode card drop shadows (`.light-card-shadow`) to make them easily reusable across components.
2. **Apply Spatial Depth (Borders & Shadows)**:
   - Identify all card-like components and floating elements (e.g., in `/projects`, `/about`, `/contact`) and apply the new milled border utility or Tailwind arbitrary values.
   - Ensure light mode uses the 4% opacity drop shadow instead of the translucent inner border.
3. **Tactile Depressions**:
   - Audit all interactive elements (buttons, `next/link` components, interactive cards).
   - Add `active:scale-95 transition-transform` utility classes to these elements to provide tactile feedback.
4. **Standardize Motion Physics**:
   - Extract the standard spring physics configuration (`{ type: "spring", mass: 0.8, stiffness: 250, damping: 24 }`) into a reusable constant (e.g., in `lib/motion.ts`).
   - Update any existing `framer-motion` animations across the app to use this shared spring configuration instead of default or linear easing.

# Dependencies

- `09-global-navigation`

# Verify when done

- [ ] Dark mode uses the Obsidian `#050506` base background and Charcoal `#0A0A0C` for cards.
- [ ] Light mode uses the Bone `#FCFCFD` base background and White `#FFFFFF` for cards with a subtle drop shadow.
- [ ] All cards and floating containers feature a 1px milled border (translucent inner border in dark mode).
- [ ] Clicking any button, link, or interactive card immediately scales it down to 95% (`active:scale-95`).
- [ ] All Framer Motion animations across the site use the premium spring physics configuration.
- [ ] `npm run build` passes with no errors.
- [ ] Keyboard Tab navigation highlights interactive elements with a 2px Electric Indigo focus ring.
- [ ] Theme toggling works seamlessly without flashes.
