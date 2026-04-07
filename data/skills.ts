export type SkillTier = 'primary' | 'secondary' | 'familiar'

export type Skill = {
  name: string
  tier: SkillTier
}

export type SkillCategory = {
  id: string
  icon: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    icon: 'Code2',
    skills: [
      { name: 'TypeScript', tier: 'primary' },
      { name: 'JavaScript', tier: 'primary' },
    ],
  },
  {
    id: 'backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', tier: 'primary' },
      { name: 'NestJS', tier: 'primary' },
      { name: 'REST API', tier: 'primary' },
      { name: 'Express', tier: 'secondary' },
      { name: 'Deno', tier: 'familiar' },
      { name: 'Fresh', tier: 'familiar' },
    ],
  },
  {
    id: 'frontend',
    icon: 'Monitor',
    skills: [
      { name: 'React', tier: 'primary' },
      { name: 'Next.js', tier: 'primary' },
      { name: 'Tailwind CSS', tier: 'primary' },
      { name: 'shadcn/ui', tier: 'secondary' },
    ],
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    skills: [
      { name: 'React Native', tier: 'primary' },
      { name: 'Expo', tier: 'secondary' },
    ],
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', tier: 'secondary' },
      { name: 'Docker', tier: 'secondary' },
      { name: 'GitHub Actions', tier: 'secondary' },
    ],
  },
  {
    id: 'databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', tier: 'primary' },
      { name: 'MySQL', tier: 'secondary' },
      { name: 'SQLite', tier: 'familiar' },
    ],
  },
]
