# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Primary Development:**
- `npm run storybook` - Start Storybook development server on port 6006 (main development environment)
- `npm run build-storybook` - Build Storybook for production

**Build & Linting:**
- `npm run build` - Build library for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview production build locally

**Testing:**
- Tests run through Storybook using Vitest with Playwright browser testing
- Story-based tests automatically generated from Storybook stories
- Browser testing configured with Chromium in headless mode

## Architecture

This is a **React component library** focused on reusable UI components:

**Tech Stack:**
- **React 19** + **TypeScript** for component development
- **Vite** as build tool (library mode)
- **Storybook** as primary development and documentation environment
- **Vitest + Playwright** for browser-based component testing
- **ESLint** for code quality

**Current Structure:**
```
src/
├── components/
│   └── ComponentName/
│       ├── ComponentName.tsx     # Component implementation
│       ├── componentname.css     # Component styles
│       └── __stories__/          # Stories hidden inside component
│           └── ComponentName.stories.ts
└── stories/
    ├── Configure.mdx            # General documentation
    └── assets/                  # Documentation assets
```

**Component Development Pattern:**
- Each component has its own folder in `src/components/`
- Components are self-contained with TypeScript interfaces
- Stories are co-located in `__stories__/` subfolder within each component
- CSS uses BEM-like naming with `storybook-` prefix
- All components export typed props interfaces

**Current Components:**
- **Button** - Primary UI component with variants (primary/secondary, small/medium/large)

## Configuration Notes

- **No traditional React app** - this is purely a component library
- Storybook config searches all `src/**/*.stories.*` files automatically
- TypeScript uses project references for optimal compilation
- Vite config includes Storybook test integration
- ESLint configured for React hooks, TypeScript, and Storybook rules