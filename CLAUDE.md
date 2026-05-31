# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint on all .js/.jsx files
```

No test framework is configured.

## Architecture

Single-page portfolio website. One React route (`/`) renders `src/pages/Home.jsx`, which composes all section components in sequence. `src/pages/NotFound.jsx` handles `*`.

**Section layout order** (in `Home.jsx`):
`ThemeToggle` → `StarBackground` → `Navbar` → `HeroSection` → `AboutSection` → `SkillsSection` → `ProjectsSections` → `ContactSection` → `Footer`

Each section targets its own `id` attribute for anchor navigation (e.g. `#hero`, `#about`, `#skills`, `#projects`, `#contacts`). The `Navbar` uses scroll detection to highlight the active section and smooth-scrolls to targets with an 80px offset for the fixed navbar height.

**Project data** is hardcoded as a `projects` array at the top of `src/components/ProjectsSection.jsx`. Add new projects there. Project images go in `public/projects/`.

## Styling

Uses **Tailwind CSS v4** — config lives entirely inside `src/index.css` via the `@theme` directive (there is no `tailwind.config.js`). Custom animations (`fade-in`, `meteor`, `pulse-subtle`, `float`), CSS variables for colors, and custom utilities (`cosmic-button`, `card-hover`, `text-glow`, `star`, `meteor`, `stars`) are all defined there.

Theme switching (dark/light) works by toggling the `dark` class on `<html>` and persisting the choice in `localStorage`. CSS custom properties under `:root` and `.dark` define the color tokens.

The `@` path alias in `vite.config.js` is commented out — use relative imports for all modules.

## Utilities

`src/lib/utils.js` exports `cn(...inputs)` — a `clsx` + `tailwind-merge` helper for conditional class merging. Use it whenever combining Tailwind classes conditionally.
