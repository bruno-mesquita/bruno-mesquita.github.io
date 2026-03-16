import { useTranslations } from 'next-intl'

export function About() {
  const t = useTranslations('about')

  const stats = [
    { value: '6+', label: t('stat_years') },
    { value: '10+', label: t('stat_projects') },
    { value: t('stat_available_value'), label: t('stat_available') },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('title')}</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{t('bio1')}</p>
            <p className="text-muted-foreground leading-relaxed">{t('bio2')}</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-lg border border-border bg-card"
                style={{ borderLeft: '3px solid var(--color-accent)' }}
              >
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">{t('experience_title')}</h3>
            <div className="space-y-6">
              <div className="pl-4" style={{ borderLeft: '2px solid var(--color-accent)' }}>
                <div className="font-medium">{t('entrepreneur_title')}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{t('entrepreneur_period')}</div>
                <p className="text-sm text-muted-foreground mt-1">{t('entrepreneur_desc')}</p>
              </div>
              <div className="pl-4 border-l-2 border-border">
                <div className="font-medium">{t('waac_title')} · Waac</div>
                <div className="text-sm text-muted-foreground mt-0.5">{t('waac_period')}</div>
                <p className="text-sm text-muted-foreground mt-1">{t('waac_desc')}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">{t('education_title')}</h3>
            <div className="pl-4 border-l-2 border-border">
              <div className="font-medium">Unip</div>
              <div className="text-sm text-muted-foreground mt-0.5">{t('unip_course')}</div>
              <div className="text-sm text-muted-foreground">{t('unip_period')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
