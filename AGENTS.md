# Repository Guidelines

## Project Structure & Module Organization

- `src/root.tsx` defines the document shell and shared site layout.
- `src/routes/` contains thin React Router route modules for loaders, metadata, and route entry points.
- `src/pages/` composes complete pages from focused section components.
- `src/components/layout/` contains site-wide layout components such as the header, footer, logo, and scroll behaviour.
- `src/components/shared/` contains genuinely reusable UI and shared marketing sections.
- `src/components/home/` and `src/components/services/` group page-specific sections by feature.
- `src/data.ts` holds typed service, client, and booking content.
- `src/styles.css` contains Tailwind imports, design tokens, and site-wide styles.
- `public/` stores images, logos, and SEO files served from `/`.
- Root configuration includes React Router, Vite, TypeScript, ESLint, and Vercel settings.

Keep route and page files focused on orchestration. Extract every substantial semantic page section into a descriptively named component, keep section-specific logic with its owning section, and avoid both monolithic page files and needless components for trivial wrappers. Place shared layout and UI in their dedicated folders, and group page-specific sections by feature.

## Build, Test, and Development Commands

Run commands from `lakeshore-wellness-website/`:

- `npm install` installs dependencies.
- `npm run dev` starts the Vite development server with hot reload.
- `npm run build` type-checks the project and creates the production `dist/` bundle.
- `npm run lint` checks TypeScript and React code with ESLint.
- `npm run preview` serves the production build locally for final review.

Before submitting changes, run `npm run lint && npm run build`.

## Coding Style & Naming Conventions

Use strict TypeScript and React function components. Follow the existing style: two-space indentation, double quotes, semicolons, and trailing commas in multiline structures. Use `PascalCase` for components and exported types, `camelCase` for functions and values, and descriptive kebab-case names for CSS classes and assets. Keep route paths lowercase. ESLint governs React Hooks, refresh safety, unused values, and TypeScript correctness.

## Testing Guidelines

No automated test framework or coverage threshold is configured. Treat linting and a production build as required checks. Manually verify affected routes at desktop and mobile widths, including navigation, booking links, focus states, and images. If tests are introduced, place them beside the feature as `*.test.tsx` and document the script and framework here.

## Responsive Design Requirements

Every visual or interaction change must work across the full supported viewport range, not only at the screen size used during implementation.

- Design mobile-first from a minimum width of 320px, then verify representative widths at 390px, 768px, 1024px, 1280px, and 1440px or wider.
- Prevent horizontal page scrolling, clipped controls, overlapping text, unreadable rotations, and off-screen navigation at every breakpoint.
- Keep headings readable without excessive wrapping, preserve comfortable paragraph line lengths, and allow images to retain intentional aspect ratios.
- Ensure navigation, menus, accordions, carousels, buttons, hover states, active states, and keyboard focus states remain usable with touch, mouse, and keyboard input.
- Do not rely on hover alone to reveal essential information.
- Respect safe mobile spacing and browser viewport behaviour; use flexible dimensions and `dvh` where viewport-relative height is required.
- After every frontend change, manually inspect the affected UI at desktop, tablet, and mobile widths before considering the work complete.

## Commit & Pull Request Guidelines

History currently contains only concise initial-setup commits, so no formal convention is established. Use short, imperative subjects such as `Add services page testimonials`, and keep each commit focused. Pull requests should explain the user-visible change, list verification performed, link relevant issues, and include before/after screenshots for layout or styling work. Call out changes to routes, public assets, SEO metadata, or deployment configuration.

## Security & Configuration

Do not commit credentials, private customer data, or environment files. Keep public URLs and non-sensitive site content in source; use deployment environment variables for secrets. Optimize images before adding them to `public/` and preserve meaningful alt text in the UI.
