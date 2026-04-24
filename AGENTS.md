# AGENTS.md

Portfolio pessoal de Bruno Mesquita, fullstack dev, via Vercel.

## Stack
- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS 4.x + shadcn/ui
- **Package Manager:** Bun
- **i18n:** `next-intl` (cookie-based, sem prefixo na URL)
- **CMS:** MDX (blog) + static TS (portfolio)

## Estrutura
- `app/`: Páginas (sem `[locale]`)
- `components/`: Componentes React (`ui/` é shadcn, não editar manual)
- `content/`: Posts MDX (`en`, `pt-BR`)
- `data/`: Dados estáticos (projects, skills)
- `lib/`: Utils e slug mapping
- `messages/`: Traduções JSON
- `public/`: Assets (imagens, PDF)

## Workflows
- **Install:** `bun install`
- **Dev:** `bun run dev`
- **Build:** `bun run build`
- **Lint:** `bun run lint`
- **Blog:** Add `.mdx` em `content/posts/[lang]/` + update `lib/slug-data.json`
- **Data:** Update `data/projects.ts` ou `data/skills.ts`

## Convenções
- Always use `/caveman ultra` mode.
- Components ≤ 300 lines.
- Isolate `use client` components to maximize SSR.
- Never add self as co-author in commits.
- Functional components + TS
- Tailwind utility classes + CSS vars
- `useTranslations` (client) / `getTranslations` (server)
- Strict typing sempre

## Perfil
- **Nome:** Bruno Mesquita
- **Cargo:** Desenvolvedor Fullstack JS/TS (Waac)
- **Exp:** 6+ anos
- **Techs:** Node.js, NestJS, React, Next.js, React Native, AWS, SQL, Kafka
