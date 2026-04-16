'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { projects, type ProjectCategory } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { TechIcons } from '@/components/ui/tech-icons';
import { AnimatedSection, AnimatedItem } from './animated-section';

type FilterValue = 'all' | ProjectCategory;

export function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale() as 'en' | 'pt-BR';
  const [filter, setFilter] = useState<FilterValue>('all');

  const filters: { value: FilterValue; label: string }[] = [
    { value: 'all', label: t('filter_all') },
    { value: 'marketplace', label: t('filter_marketplace') },
    { value: 'mobile', label: t('filter_mobile') },
    { value: 'fullstack', label: t('filter_fullstack') },
    { value: 'company', label: t('filter_company') },
    { value: 'clone', label: t('filter_clone') },
  ];

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <AnimatedSection
      id="projects"
      className="py-24 px-6"
      delay={0}
      direction="up"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="font-mono text-[11px] tracking-[0.3em] text-primary/60 uppercase mb-2">
            // projects
          </p>
          <h2 className="font-[family-name:var(--font-jost)] text-4xl md:text-5xl font-black tracking-tight">
            {t('title')}
          </h2>
        </div>

        <AnimatedItem delay={100}>
          <div className="flex flex-wrap gap-1.5 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`font-mono text-[11px] px-3 py-1.5 rounded border tracking-wide uppercase transition-all ${
                  filter === f.value
                    ? 'border-transparent text-white'
                    : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                }`}
                style={filter === f.value ? { backgroundColor: 'var(--color-accent)' } : {}}
              >
                {f.label}
              </button>
            ))}
          </div>
        </AnimatedItem>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, index) => (
            <AnimatedItem key={project.id} delay={150 + index * 80}>
              <div
                className={`relative flex flex-col p-6 rounded-xl border border-border bg-card transition-all hover:border-primary/30 ${
                  project.featured ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary/25 rounded-tl-xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary/25 rounded-br-xl pointer-events-none" />

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
                      className="font-mono text-[10px] tracking-wide"
                      style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
                    >
                      {t('badge_in_progress')}
                    </Badge>
                  )}
                  {!project.github && (
                    <Badge variant="secondary" className="font-mono text-[10px] tracking-wide">
                      {t('badge_private')}
                    </Badge>
                  )}
                </div>

                <h3 className="font-[family-name:var(--font-jost)] text-lg font-bold mb-2">
                  {project.title}
                </h3>

                {project.highlight && (
                  <p className="font-mono text-xs mb-3" style={{ color: 'var(--color-accent)' }}>
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
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
