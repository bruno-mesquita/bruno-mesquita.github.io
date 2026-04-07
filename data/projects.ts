export type ProjectCategory = 'marketplace' | 'mobile' | 'fullstack' | 'company' | 'clone'
export type ProjectStatus = 'in-progress' | 'completed' | 'archived'

export type Project = {
  id: string
  title: string
  description: { en: string; 'pt-BR': string }
  highlight?: { en: string; 'pt-BR': string }
  techs: string[]
  category: ProjectCategory
  featured: boolean
  image?: string
  github: string | null
  live: string | null
  status: ProjectStatus
}

export const projects: Project[] = [
  {
    id: 'tem-quem-faca',
    title: 'Tem Quem Faca',
    description: {
      en: 'Marketplace platform connecting service providers with customers. Full ecosystem with customer app, professional app and web admin panel.',
      'pt-BR': 'Plataforma marketplace que conecta prestadores de serviço com clientes. Ecossistema completo com app do cliente, app do profissional e painel web admin.',
    },
    highlight: {
      en: 'Fullstack service marketplace',
      'pt-BR': 'Marketplace de serviços fullstack',
    },
    techs: ['TypeScript', 'Node.js', 'NestJS', 'React Native', 'React', 'AWS'],
    category: 'marketplace',
    featured: true,
    github: null,
    live: null,
    status: 'in-progress',
  },
  {
    id: 'odonto-digital',
    title: 'Odonto Digital',
    description: {
      en: 'Digital platform for dental clinics with scheduling, patient management and financial control.',
      'pt-BR': 'Plataforma digital para clínicas odontológicas com agendamento, gestão de pacientes e controle financeiro.',
    },
    highlight: {
      en: 'SaaS for dental clinics',
      'pt-BR': 'SaaS para clínicas odontológicas',
    },
    techs: ['TypeScript', 'Node.js', 'NestJS', 'React', 'PostgreSQL'],
    category: 'company',
    featured: true,
    github: null,
    live: null,
    status: 'completed',
  },
  {
    id: 'peruibe-facil',
    title: 'Peruíbe Fácil',
    description: {
      en: 'App for the city of Peruíbe with local services, tourist information and city hall services.',
      'pt-BR': 'Aplicativo para a cidade de Peruíbe com serviços locais, informações turísticas e serviços da prefeitura.',
    },
    highlight: {
      en: 'Municipal services app',
      'pt-BR': 'App de serviços municipais',
    },
    techs: ['TypeScript', 'React Native', 'Node.js'],
    category: 'mobile',
    featured: false,
    github: null,
    live: null,
    status: 'completed',
  },
  {
    id: 'whatsapp-clone',
    title: 'WhatsApp Clone',
    description: {
      en: 'Fullstack WhatsApp clone with real-time messaging, authentication and media sharing.',
      'pt-BR': 'Clone do WhatsApp fullstack com mensagens em tempo real, autenticação e compartilhamento de mídia.',
    },
    highlight: {
      en: 'Fullstack clone with real-time messaging',
      'pt-BR': 'Clone fullstack com mensagens em tempo real',
    },
    techs: ['TypeScript', 'React Native', 'Node.js', 'WebSocket'],
    category: 'clone',
    featured: false,
    github: 'https://github.com/bruno-mesquita/whatsapp-clone-mobile',
    live: null,
    status: 'completed',
  },
  {
    id: 'felipe-app-delivery',
    title: 'Felipe App Delivery',
    description: {
      en: 'Complete food delivery platform with customer app, delivery person app and restaurant management.',
      'pt-BR': 'Plataforma completa de delivery com app do cliente, app do entregador e gestão de restaurantes.',
    },
    highlight: {
      en: 'Delivery platform — 3 repos',
      'pt-BR': 'Plataforma de delivery — 3 repositórios',
    },
    techs: ['TypeScript', 'React Native', 'Node.js', 'NestJS'],
    category: 'fullstack',
    featured: false,
    github: 'https://github.com/bruno-mesquita/felipe-app-delivery-backend',
    live: null,
    status: 'completed',
  },
  {
    id: 'waac-triangulos',
    title: 'Waac Triângulos',
    description: {
      en: 'Real company project developed at Waac with backend API and web frontend.',
      'pt-BR': 'Projeto real da empresa Waac com API backend e frontend web.',
    },
    highlight: {
      en: 'Real Waac project',
      'pt-BR': 'Projeto real Waac',
    },
    techs: ['JavaScript', 'Node.js', 'React'],
    category: 'company',
    featured: false,
    github: 'https://github.com/bruno-mesquita/waac-backend-triangulos',
    live: null,
    status: 'completed',
  },
]
