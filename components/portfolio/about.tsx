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
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('title')}</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <AnimatedItem delay={200}>
              <p className="text-muted-foreground leading-relaxed">
                {t('bio1')}
              </p>
            </AnimatedItem>
            <AnimatedItem delay={350}>
              <p className="text-muted-foreground leading-relaxed">
                {t('bio2')}
              </p>
            </AnimatedItem>
            <AnimatedItem delay={500}>
              <p className="text-muted-foreground leading-relaxed">
                {t('bio3')}
              </p>
            </AnimatedItem>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat, index) => (
              <AnimatedItem key={stat.label} delay={100 * (index + 1)}>
                <div
                  className="p-6 rounded-lg border border-border bg-card"
                  style={{ borderLeft: '3px solid var(--color-accent)' }}
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">
              {t('experience_title')}
            </h3>
            <div className="space-y-6">
              <AnimatedItem delay={500}>
                <div
                  className="pl-4"
                  style={{ borderLeft: '2px solid var(--color-accent)' }}
                >
                  <div className="font-medium">{t('entrepreneur_title')}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">
                    {t('entrepreneur_period')}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('entrepreneur_desc')}
                  </p>
                </div>
              </AnimatedItem>
              <AnimatedItem delay={600}>
                <div className="pl-4 border-l-2 border-border">
                  <div className="font-medium">{t('waac_title')} · Waac</div>
                  <div className="text-sm text-muted-foreground mt-0.5">
                    {t('waac_period')}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('waac_desc')}
                  </p>
                </div>
              </AnimatedItem>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">
              {t('education_title')}
            </h3>
            <AnimatedItem delay={700}>
              <div className="pl-4 border-l-2 border-border">
                <div className="text-sm font-medium text-muted-foreground">
                  Unip
                </div>
                <div className="text-sm text-muted-foreground mt-0.5">
                  {t('unip_course')}
                </div>
                <div className="text-xs text-muted-foreground/60 mt-0.5">
                  {t('unip_period')} · {t('unip_note')}
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
