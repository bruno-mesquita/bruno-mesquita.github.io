# Gemini Project Context: Bruno Mesquita Portfolio

This is a personal portfolio website for Bruno Mesquita, a Fullstack Developer. It's built with modern web technologies and optimized for static hosting on GitHub Pages.

## Project Overview

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.x + shadcn/ui
- **Internationalization:** `next-intl` (English and Portuguese support)
- **Content Management:** MDX for blog posts (`content/posts`) and static TypeScript files for portfolio data (`data/`)
- **Deployment:** Static export (`output: 'export'`) to GitHub Pages

## Project Structure

- `app/`: Next.js App Router pages and layouts.
  - `blog/`: Blog listing and individual post pages.
  - `[locale]/`: Internationalized routes (if applicable, though current config uses cookies in `i18n/request.ts`).
- `components/`: React components.
  - `portfolio/`: High-level portfolio sections (Hero, About, Projects, etc.).
  - `ui/`: shadcn/ui components (should not be edited manually).
- `content/`: MDX blog posts organized by locale (`en`, `pt-BR`).
- `data/`: Static data for projects and skills.
- `i18n/`: Internationalization configuration and routing.
- `lib/`: Utility functions and slug mapping for translated posts.
- `messages/`: Translation JSON files.
- `public/`: Static assets like images and PDFs.

## Development Workflows

### Building and Running

- **Install Dependencies:** `bun install`
- **Development Server:** `bun run dev`
- **Build for Production:** `bun run build` (generates static files in `out/`)
- **Linting:** `bun run lint`

### Adding a Blog Post

1. Create a `.mdx` file in `content/posts/en/` and `content/posts/pt-BR/`.
2. Add frontmatter (title, date, description, tags).
3. Update `lib/slug-data.json` to map the slugs between languages if they differ.

### Updating Portfolio Content

- Modify `data/projects.ts` or `data/skills.ts` to update the portfolio information.

## Coding Conventions

- **Components:** Use functional components with TypeScript.
- **Styling:** Use Tailwind CSS utility classes. Prefer CSS variables for theme-consistent colors.
- **Types:** Strictly type all data structures and component props.
- **i18n:** Always use the `useTranslations` hook or `getTranslations` server function; do not hardcode text.
- **shadcn/ui:** Follow shadcn patterns; if a UI component needs significant changes, consider wrapping it rather than editing the base component in `components/ui/`.

## Deployment Details

- The project uses `next.config.ts` with `trailingSlash: true` and `images: { unoptimized: true }` to support static export on GitHub Pages.
- Deployments are likely handled via GitHub Actions (see `.github/workflows/nextjs.yml`).
