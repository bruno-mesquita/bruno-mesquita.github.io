import { useTranslations } from 'next-intl';
import { skillCategories, type Skill } from '@/data/skills';
import { CategoryIcons, TechIcons } from '@/components/ui/tech-icons';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection, AnimatedItem } from './animated-section';

function PrimaryBadge({ skill }: { skill: Skill }) {
  return (
    <Badge
      className="flex items-center gap-1.5"
      style={{
        backgroundColor: 'oklch(0.55 0.24 270 / 0.12)',
        color: 'var(--color-accent)',
        borderColor: 'oklch(0.55 0.24 270 / 0.25)',
      }}
    >
      {TechIcons[skill.name]}
      {skill.name}
    </Badge>
  );
}

function SecondaryBadge({ skill }: { skill: Skill }) {
  return (
    <Badge variant="secondary" className="flex items-center gap-1.5">
      {TechIcons[skill.name]}
      {skill.name}
    </Badge>
  );
}

function FamiliarBadge({ skill }: { skill: Skill }) {
  return (
    <Badge
      variant="outline"
      className="flex items-center gap-1 text-xs text-muted-foreground/60 border-dashed"
    >
      {TechIcons[skill.name]}
      {skill.name}
    </Badge>
  );
}

export function Skills() {
  const t = useTranslations('skills');

  return (
    <AnimatedSection
      id="skills"
      className="py-24 px-6 bg-muted/20"
      delay={0}
      direction="up"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[11px] tracking-[0.3em] text-primary/60 uppercase mb-2">
            // skills
          </p>
          <h2 className="font-[family-name:var(--font-jost)] text-4xl md:text-5xl font-black tracking-tight">
            {t('title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIndex) => {
            const primary = category.skills.filter((s) => s.tier === 'primary');
            const secondary = category.skills.filter((s) => s.tier === 'secondary');
            const familiar = category.skills.filter((s) => s.tier === 'familiar');

            return (
              <AnimatedItem key={category.id} delay={catIndex * 80}>
                <div className="relative p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary/50 to-transparent" />

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-primary/70">{CategoryIcons[category.icon]}</span>
                    <h3 className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                      {t(`categories.${category.id}`)}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {primary.map((skill) => (
                      <PrimaryBadge key={skill.name} skill={skill} />
                    ))}
                    {secondary.map((skill) => (
                      <SecondaryBadge key={skill.name} skill={skill} />
                    ))}
                  </div>

                  {familiar.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <div className="flex flex-wrap gap-1.5">
                        {familiar.map((skill) => (
                          <FamiliarBadge key={skill.name} skill={skill} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
