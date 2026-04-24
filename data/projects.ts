export type ProjectCategory =
  | 'marketplace'
  | 'mobile'
  | 'fullstack'
  | 'company'
  | 'clone';
export type ProjectStatus = 'in-progress' | 'completed' | 'archived';

export type Project = {
  id: string;
  title: string;
  description: { en: string; 'pt-BR': string };
  highlight?: { en: string; 'pt-BR': string };
  techs: string[];
  category: ProjectCategory;
  featured: boolean;
  image?: string;
  github: string | null;
  live: string | null;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: 'tem-quem-faca',
    title: 'Tem Quem Faca',
    description: {
      en: 'Marketplace platform connecting service providers with customers. Full ecosystem with customer app, professional app and web admin panel.',
      'pt-BR':
        'Plataforma marketplace que conecta prestadores de serviço com clientes. Ecossistema completo com app do cliente, app do profissional e painel web admin.',
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
      'pt-BR':
        'Plataforma digital para clínicas odontológicas com agendamento, gestão de pacientes e controle financeiro.',
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
      'pt-BR':
        'Aplicativo para a cidade de Peruíbe com serviços locais, informações turísticas e serviços da prefeitura.',
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
    id: 'dispatchly',
    title: 'Dispatchly',
    description: {
      en: 'Email, SMS, and push from a single endpoint. Journeys, transactional, and broadcast',
      'pt-BR':
        'Email, SMS e push de um único endpoint. Journeys, transactional e broadcast.',
    },
    highlight: {
      en: 'Email, SMS, and push from a single endpoint',
      'pt-BR': 'Email, SMS e push de um único endpoint',
    },
    techs: ['TypeScript', 'Node.js', 'Elysia'],
    category: 'fullstack',
    featured: false,
    github: 'https://github.com/bruno-mesquita/dispatchly',
    live: 'https://dispatchly-web.vercel.app/',
    status: 'in-progress',
  },
];
