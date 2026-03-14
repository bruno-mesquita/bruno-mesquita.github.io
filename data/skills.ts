export type SkillCategory = {
  id: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    icon: 'Code2',
    skills: ['JavaScript', 'TypeScript'],
  },
  {
    id: 'backend',
    icon: 'Server',
    skills: ['Node.js', 'NestJS', 'Express', 'Deno', 'Fresh', 'Kafka', 'REST API'],
  },
  {
    id: 'frontend',
    icon: 'Monitor',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    skills: ['React Native', 'Expo'],
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    skills: ['AWS', 'AWS Amplify', 'GitHub Actions'],
  },
  {
    id: 'databases',
    icon: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
]
