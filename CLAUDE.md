# CLAUDE.md — bruno-mesquita.github.io

Portfolio pessoal de Bruno Mesquita, publicado via GitHub Pages.

## Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Estilo:** Tailwind CSS + shadcn/ui (componentes em `components/ui/`)
- **Deploy:** GitHub Pages (static export)
- **Gerenciador de pacotes:** Yarn

## Estrutura

```
app/           → página principal (App Router)
components/    → componentes do portfólio
  ui/          → componentes shadcn/ui (não editar manualmente)
lib/           → utilitários
public/        → assets estáticos
```

## Deploy

O site é publicado via GitHub Pages como export estático do Next.js.
O `next.config.js` deve manter `output: 'export'` e `ignoreDuringBuilds: true`.

Para buildar:
```bash
yarn build
```

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

## Decisões e contexto

- O portfólio estava desatualizado há ~3 anos com conteúdo placeholder
- Decidimos ATUALIZAR o projeto existente (não reescrever do zero) — a stack Next.js + TS + Tailwind + shadcn ainda é válida
- Foco: conteúdo real, design mais profissional, seções completas
- Idioma do site: decidir com Bruno (PT-BR ou EN)
- Next.js pode ser atualizado de 13 → 14/15 se necessário

## O que precisa ser feito

- [ ] Atualizar a bio com conteúdo real e profissional
- [ ] Seção de projetos com dados reais dos repos
- [ ] Seção de tecnologias preenchida
- [ ] Links funcionais (WhatsApp, email, GitHub, LinkedIn)
- [ ] Foto/avatar real
- [ ] Considerar upgrade do Next.js 13 → 15
- [ ] Responsividade mobile
- [ ] SEO básico (meta tags, og:image)
