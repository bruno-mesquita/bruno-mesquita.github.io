import { useTranslations } from 'next-intl'
import { skillCategories } from '@/data/skills'
import { Code2, Server, Monitor, Smartphone, Cloud, Database } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { ReactNode } from 'react'

const iconMap: Record<string, ReactNode> = {
  Code2: <Code2 className="h-4 w-4" />,
  Server: <Server className="h-4 w-4" />,
  Monitor: <Monitor className="h-4 w-4" />,
  Smartphone: <Smartphone className="h-4 w-4" />,
  Cloud: <Cloud className="h-4 w-4" />,
  Database: <Database className="h-4 w-4" />,
}

export function Skills() {
  const t = useTranslations('skills')

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('title')}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.id} className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <span style={{ color: 'var(--color-accent)' }}>{iconMap[category.icon]}</span>
                <h3 className="text-sm font-semibold">
                  {t(`categories.${category.id}`)}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
