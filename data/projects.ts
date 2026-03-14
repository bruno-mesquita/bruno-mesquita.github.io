export type ProjectCategory = 'marketplace' | 'mobile' | 'fullstack' | 'company' | 'clone'
export type ProjectStatus = 'in-progress' | 'completed' | 'archived'

export type Project = {
  id: string
  title: string
  description: { en: string; 'pt-BR': string }
  techs: string[]
  category: ProjectCategory
  featured: boolean
  github: string | null
  live: string | null
  status: ProjectStatus
  highlight?: string
}

export const projects: Project[] = [
  {
    id: 'tem-quem-faca',
    title: 'Tem Quem Faca',
    description: {
      en: 'Marketplace platform connecting service providers with customers. Full ecosystem with customer app, professional app and web admin panel.',
      'pt-BR': 'Plataforma marketplace que conecta prestadores de serviço com clientes. Ecossistema completo com app do cliente, app do profissional e painel web admin.',
    },
    techs: ['TypeScript', 'Node.js', 'NestJS', 'React Native', 'React', 'AWS'],
    category: 'marketplace',
    featured: true,
    github: null,
    live: null,
    status: 'in-progress',
    highlight: 'Marketplace de serviços fullstack',
  },
  {
    id: 'odonto-digital',
    title: 'Odonto Digital',
    description: {
      en: 'Digital platform for dental clinics with scheduling, patient management and financial control.',
      'pt-BR': 'Plataforma digital para clínicas odontológicas com agendamento, gestão de pacientes e controle financeiro.',
    },
    techs: ['TypeScript', 'Node.js', 'NestJS', 'React', 'PostgreSQL'],
    category: 'company',
    featured: true,
    github: null,
    live: null,
    status: 'completed',
    highlight: 'SaaS para clínicas odontológicas',
  },
  {
    id: 'peruibe-facil',
    title: 'Peruíbe Fácil',
    description: {
      en: 'App for the city of Peruíbe with local services, tourist information and city hall services.',
      'pt-BR': 'Aplicativo para a cidade de Peruíbe com serviços locais, informações turísticas e serviços da prefeitura.',
    },
    techs: ['TypeScript', 'React Native', 'Node.js'],
    category: 'mobile',
    featured: false,
    github: null,
    live: null,
    status: 'completed',
    highlight: 'App de serviços municipais',
  },
  {
    id: 'whatsapp-clone',
    title: 'WhatsApp Clone',
    description: {
      en: 'Fullstack WhatsApp clone with real-time messaging, authentication and media sharing.',
      'pt-BR': 'Clone do WhatsApp fullstack com mensagens em tempo real, autenticação e compartilhamento de mídia.',
    },
    techs: ['TypeScript', 'React Native', 'Node.js', 'WebSocket'],
    category: 'clone',
    featured: false,
    github: 'https://github.com/bruno-mesquita/whatsapp-clone-mobile',
    live: null,
    status: 'completed',
    highlight: 'Clone fullstack com real-time',
  },
  {
    id: 'felipe-app-delivery',
    title: 'Felipe App Delivery',
    description: {
      en: 'Complete food delivery platform with customer app, delivery person app and restaurant management.',
      'pt-BR': 'Plataforma completa de delivery com app do cliente, app do entregador e gestão de restaurantes.',
    },
    techs: ['TypeScript', 'React Native', 'Node.js', 'NestJS'],
    category: 'fullstack',
    featured: false,
    github: 'https://github.com/bruno-mesquita/felipe-app-delivery-backend',
    live: null,
    status: 'completed',
    highlight: 'Delivery platform — 3 repos',
  },
  {
    id: 'waac-triangulos',
    title: 'Waac Triângulos',
    description: {
      en: 'Real company project developed at Waac with backend API and web frontend.',
      'pt-BR': 'Projeto real da empresa Waac com API backend e frontend web.',
    },
    techs: ['JavaScript', 'Node.js', 'React'],
    category: 'company',
    featured: false,
    github: 'https://github.com/bruno-mesquita/waac-backend-triangulos',
    live: null,
    status: 'completed',
    highlight: 'Projeto real Waac',
  },
]
