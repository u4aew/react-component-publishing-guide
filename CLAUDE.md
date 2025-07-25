# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Build & Development:**
- `npm run dev` - Start Vite development server with HMR
- `npm run build` - Build for production (runs TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on the codebase

**Storybook:**
- `npm run storybook` - Start Storybook development server on port 6006
- `npm run build-storybook` - Build Storybook for production

**Testing:**
- Tests are configured to run through Storybook using Vitest with Playwright browser testing
- Test configuration is in `vite.config.ts` with browser testing enabled
- Story-based tests are automatically generated from Storybook stories

## Architecture

This is a React component library built with:
- **Vite** as the build tool and development server
- **TypeScript** for type safety
- **Storybook** as the primary development and documentation environment
- **Vitest + Playwright** for browser-based testing integrated with Storybook

**Key Structure:**
- `src/components/` - Contains reusable React components with TypeScript interfaces
- `src/stories/` - Contains Storybook stories that demonstrate component usage
- Components follow the pattern: `ComponentName.tsx` + `component.css` in `/components/`
- Stories import components from `../components/` and define usage examples
- Each component exports TypeScript interfaces for props (e.g., `ButtonProps`)

**Component Development Pattern:**
- Components are built as pure functions with TypeScript interfaces
- CSS is scoped per component (e.g., `button.css` for Button component)
- Storybook stories define component variations and serve as living documentation
- Components use CSS classes with BEM-like naming (e.g., `storybook-button--primary`)

## Configuration Notes

- TypeScript config uses project references (`tsconfig.json` → `tsconfig.app.json` + `tsconfig.node.json`)
- ESLint configured for TypeScript with React hooks and Storybook rules
- Vite config includes Storybook test integration with browser testing setup
- Storybook configured with accessibility, docs, and vitest addons