import { useTranslations } from 'next-intl'
import { Mail, Linkedin, MapPin } from 'lucide-react'

export function Contact() {
  const t = useTranslations('contact')

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
        <p className="text-muted-foreground mb-12">{t('subtitle')}</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <a
            href="mailto:bmesquita196@gmail.com"
            className="flex items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-all text-left group"
          >
            <div
              className="p-3 rounded-lg"
              style={{ backgroundColor: 'oklch(0.645 0.186 200 / 0.1)' }}
            >
              <Mail className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">{t('email_label')}</p>
              <p className="text-sm font-medium">bmesquita196@gmail.com</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/brunomesquita196"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-all text-left group"
          >
            <div
              className="p-3 rounded-lg"
              style={{ backgroundColor: 'oklch(0.645 0.186 200 / 0.1)' }}
            >
              <Linkedin className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">{t('linkedin_label')}</p>
              <p className="text-sm font-medium">linkedin.com/in/brunomesquita196</p>
            </div>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" style={{ color: 'var(--color-accent)' }} />
          <span>{t('location')}</span>
        </div>
      </div>
    </section>
  )
}
