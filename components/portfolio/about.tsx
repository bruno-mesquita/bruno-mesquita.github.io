import { useTranslations } from 'next-intl';
import { AnimatedSection, AnimatedItem } from './animated-section';

export function About() {
  const t = useTranslations('about');

  const stats = [
    { value: '6+', label: t('stat_years') },
    { value: '10+', label: t('stat_projects') },
    { value: t('stat_available_value'), label: t('stat_available') },
  ];

  return (
    <AnimatedSection id="about" className="py-24 px-6" delay={0} direction="up">
      <div className="max-w-5xl mx-auto">

        <div className="mb-12">
          <p className="font-mono text-[11px] tracking-[0.3em] text-primary/60 uppercase mb-2">
            // about
          </p>
          <h2 className="font-[family-name:var(--font-jost)] text-4xl md:text-5xl font-black tracking-tight">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <AnimatedItem delay={200}>
              <p className="text-muted-foreground leading-relaxed">{t('bio1')}</p>
            </AnimatedItem>
            <AnimatedItem delay={350}>
              <p className="text-muted-foreground leading-relaxed">{t('bio2')}</p>
            </AnimatedItem>
            <AnimatedItem delay={500}>
              <p className="text-muted-foreground leading-relaxed">{t('bio3')}</p>
            </AnimatedItem>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {stats.map((stat, index) => (
              <AnimatedItem key={stat.label} delay={100 * (index + 1)}>
                <div className="relative p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/60 rounded-l-lg" />
                  <div className="font-[family-name:var(--font-jost)] text-3xl font-black text-primary mb-0.5 pl-4">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground pl-4 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-primary/60 uppercase mb-6">
              // {t('experience_title').toLowerCase()}
            </p>
            <div className="relative space-y-6 pl-5">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

              <AnimatedItem delay={500}>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-background" />
                  <div className="font-medium text-sm">{t('entrepreneur_title')}</div>
                  <div className="font-mono text-xs text-primary/60 mt-0.5">{t('entrepreneur_period')}</div>
                  <p className="text-sm text-muted-foreground mt-1">{t('entrepreneur_desc')}</p>
                </div>
              </AnimatedItem>

              <AnimatedItem delay={600}>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-border ring-2 ring-background" />
                  <div className="font-medium text-sm">{t('waac_title')} · Waac</div>
                  <div className="font-mono text-xs text-muted-foreground/60 mt-0.5">{t('waac_period')}</div>
                  <p className="text-sm text-muted-foreground mt-1">{t('waac_desc')}</p>
                </div>
              </AnimatedItem>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-primary/60 uppercase mb-6">
              // {t('education_title').toLowerCase()}
            </p>
            <div className="relative pl-5">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />
              <AnimatedItem delay={700}>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-border ring-2 ring-background" />
                  <div className="font-medium text-sm">Unip</div>
                  <div className="font-mono text-xs text-muted-foreground/60 mt-0.5">{t('unip_course')}</div>
                  <div className="font-mono text-xs text-muted-foreground/40 mt-0.5">
                    {t('unip_period')} · {t('unip_note')}
                  </div>
                </div>
              </AnimatedItem>
            </div>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
