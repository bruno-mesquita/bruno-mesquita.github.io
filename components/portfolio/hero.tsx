import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, oklch(0.645 0.186 200 / 0.08), transparent)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="https://github.com/bruno-mesquita.png"
            alt="Bruno Mesquita"
            width={80}
            height={80}
            className="rounded-full ring-2 ring-border"
            priority
          />
        </div>

        <p
          className="text-sm font-mono mb-4 tracking-widest uppercase"
          style={{ color: 'var(--color-accent)' }}
        >
          {t('greeting')}
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Bruno Mesquita
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4">{t('role')}</p>

        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10">
          {t('subtitle')}
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg" variant="outline">
            <a href="https://github.com/bruno-mesquita" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {t('cta_github')}
            </a>
          </Button>

          <Button asChild size="lg" variant="outline">
            <a
              href="https://linkedin.com/in/brunomesquita196"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              {t('cta_linkedin')}
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              {t('cta_contact')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
