import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpo,
  SiGithubactions,
  SiPostgresql,
  SiMysql,
  SiSqlite,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { Server, Monitor, Smartphone, Cloud, Database, Code2 } from 'lucide-react'
import type { ReactNode } from 'react'

export const TechIcons: Record<string, ReactNode> = {
  JavaScript: <SiJavascript className="w-3.5 h-3.5" />,
  TypeScript: <SiTypescript className="w-3.5 h-3.5" />,
  'Node.js': <SiNodedotjs className="w-3.5 h-3.5" />,
  NestJS: <SiNestjs className="w-3.5 h-3.5" />,
  Express: <SiExpress className="w-3.5 h-3.5" />,
  React: <SiReact className="w-3.5 h-3.5" />,
  'React Native': <SiReact className="w-3.5 h-3.5" />,
  'Next.js': <SiNextdotjs className="w-3.5 h-3.5" />,
  'Tailwind CSS': <SiTailwindcss className="w-3.5 h-3.5" />,
  Expo: <SiExpo className="w-3.5 h-3.5" />,
  'GitHub Actions': <SiGithubactions className="w-3.5 h-3.5" />,
  PostgreSQL: <SiPostgresql className="w-3.5 h-3.5" />,
  MySQL: <SiMysql className="w-3.5 h-3.5" />,
  SQLite: <SiSqlite className="w-3.5 h-3.5" />,
  AWS: <FaAws className="w-3.5 h-3.5" />,
}

export const CategoryIcons: Record<string, ReactNode> = {
  Code2: <Code2 className="h-4 w-4" />,
  Server: <Server className="h-4 w-4" />,
  Monitor: <Monitor className="h-4 w-4" />,
  Smartphone: <Smartphone className="h-4 w-4" />,
  Cloud: <Cloud className="h-4 w-4" />,
  Database: <Database className="h-4 w-4" />,
}
