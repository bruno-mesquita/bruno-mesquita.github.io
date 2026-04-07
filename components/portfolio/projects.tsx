'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { projects, type ProjectCategory } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import { TechIcons } from '@/components/ui/tech-icons'

type FilterValue = 'all' | ProjectCategory

export function Projects() {
  const t = useTranslations('projects')
  const locale = useLocale() as 'en' | 'pt-BR'
  const [filter, setFilter] = useState<FilterValue>('all')

  const filters: { value: FilterValue; label: string }[] = [
    { value: 'all', label: t('filter_all') },
    { value: 'marketplace', label: t('filter_marketplace') },
    { value: 'mobile', label: t('filter_mobile') },
    { value: 'fullstack', label: t('filter_fullstack') },
    { value: 'company', label: t('filter_company') },
    { value: 'clone', label: t('filter_clone') },
  ]

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('title')}</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                filter === f.value
                  ? 'border-transparent text-white'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
              style={filter === f.value ? { backgroundColor: 'var(--color-accent)' } : {}}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`relative flex flex-col p-6 rounded-xl border border-border bg-card transition-all hover:border-accent/50 ${
                project.featured ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {project.image && (
                <div className="relative w-full aspect-video mb-4 rounded-md overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-3">
                {project.status === 'in-progress' && (
                  <Badge
                    variant="outline"
                    className="text-xs"
                    style={{
                      borderColor: 'var(--color-accent)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {t('badge_in_progress')}
                  </Badge>
                )}
                {!project.github && (
                  <Badge variant="secondary" className="text-xs">
                    {t('badge_private')}
                  </Badge>
                )}
              </div>

              <h3 className="text-lg font-bold mb-2">{project.title}</h3>

              {project.highlight && (
                <p className="text-xs font-mono mb-3" style={{ color: 'var(--color-accent)' }}>
                  {project.highlight[locale]}
                </p>
              )}

              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {project.description[locale]}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techs.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs flex items-center gap-1">
                    {TechIcons[tech]}
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                {project.github ? (
                  <Button asChild size="sm" variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-3.5 w-3.5" />
                      {t('btn_code')}
                    </a>
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" disabled title={t('btn_unavailable')}>
                    <Github className="mr-1.5 h-3.5 w-3.5" />
                    {t('btn_code')}
                  </Button>
                )}

                {project.live && (
                  <Button
                    asChild
                    size="sm"
                    style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      {t('btn_live')}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
