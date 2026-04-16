import { useTranslations } from 'next-intl';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from './animated-section';

export function Contact() {
  const t = useTranslations('contact');

  return (
    <AnimatedSection
      id="contact"
      className="py-24 px-6 bg-muted/20"
      delay={0}
      direction="up"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[11px] tracking-[0.3em] text-primary/60 uppercase mb-2">
            // contact
          </p>
          <h2 className="font-[family-name:var(--font-jost)] text-4xl md:text-5xl font-black tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <AnimatedItem delay={100}>
            <a
              href="mailto:bmesquita196@gmail.com"
              className="relative flex items-center gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/40 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary/30 rounded-tl-lg pointer-events-none" />
              <div className="p-2.5 rounded-md bg-primary/10 flex-shrink-0">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-1">
                  {t('email_label')}
                </p>
                <p className="text-sm font-medium truncate">bmesquita196@gmail.com</p>
              </div>
            </a>
          </AnimatedItem>

          <AnimatedItem delay={200}>
            <a
              href="https://www.linkedin.com/in/bruno-s-mesquita/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/40 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary/30 rounded-tl-lg pointer-events-none" />
              <div className="p-2.5 rounded-md bg-primary/10 flex-shrink-0">
                <Linkedin className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-1">
                  {t('linkedin_label')}
                </p>
                <p className="text-sm font-medium truncate">bruno-s-mesquita</p>
              </div>
            </a>
          </AnimatedItem>

          <AnimatedItem delay={300}>
            <a
              href="https://wa.me/5512981315901"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/40 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary/30 rounded-tl-lg pointer-events-none" />
              <div className="p-2.5 rounded-md bg-primary/10 flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-primary"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-1">
                  {t('whatsapp_label')}
                </p>
                <p className="text-sm font-medium truncate">+55 (12) 98131-5901</p>
              </div>
            </a>
          </AnimatedItem>
        </div>

        <AnimatedItem delay={400}>
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground/50">
            <MapPin className="h-3.5 w-3.5 text-primary/50" />
            <span>{t('location')}</span>
          </div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
