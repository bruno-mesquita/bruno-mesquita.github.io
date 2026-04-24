# CLAUDE.md — bruno-mesquita.github.io

Portfolio pessoal de Bruno Mesquita, publicado via Vercel.

## Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Estilo:** Tailwind CSS 4 + shadcn/ui (componentes em `components/ui/`)
- **Deploy:** Vercel (SSR/Dynamic rendering)
- **Gerenciador de pacotes:** Bun
- **Internacionalização:** next-intl (cookie-based, sem prefixo de locale na URL)

## Estrutura

```
app/           → páginas do site (sem [locale])
components/    → componentes do portfólio
  ui/          → componentes shadcn/ui (não editar manualmente)
lib/           → utilitários
public/        → assets estáticos
content/       → blog posts em MDX (en/pt-BR)
```

## Comandos

```bash
bun install    # Instalar dependências
bun run dev    # Rodar servidor de desenvolvimento
bun run build  # Buildar para produção (Vercel)
bun run lint   # Rodar lint
```

## Deploy

O site é publicado via Vercel. A internacionalização é gerida via cookies (`next-intl`), permitindo rotas limpas sem `/en` ou `/pt-BR`.


## Sobre o dono

- **Nome:** Bruno Mesquita
- **Cargo:** Desenvolvedor Fullstack JS/TS
- **Empresa:** Waac - Soluções Tecnológicas
- **Localização:** São José dos Campos - SP, Brasil
- **Email:** bmesquita196@gmail.com
- **GitHub:** bruno-mesquita
- **Experiência:** 6+ anos

## Tecnologias que domina

- **Linguagens:** JavaScript, TypeScript
- **Backend:** Node.js, NestJS, Express, Deno (Fresh), Kafka
- **Frontend:** React, Next.js
- **Mobile:** React Native
- **Cloud:** AWS (Amplify)
- **DB:** SQL (relacionais)

## Projetos em destaque (repos públicos)

| Projeto | Stack | Descrição |
|---------|-------|-----------|
| whatsapp-clone (mobile + backend) | TypeScript, RN | Clone do WhatsApp fullstack |
| felipe-app-delivery (backend + mobile) | TypeScript, RN | Plataforma de delivery completa (3 repos) |
| kafka-example | JavaScript | Demo de mensageria com Kafka |
| waac-triangulos (backend + frontend) | JavaScript | Projeto real da empresa Waac |
| GoBarber-backend | JavaScript | App de barbearia (bootcamp Rocketseat) |
