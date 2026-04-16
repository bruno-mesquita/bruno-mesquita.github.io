import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { TypewriterText } from '@/components/ui/typewriter-text';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, oklch(0.55 0.24 270 / 0.07), transparent)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="flex justify-center mb-6 animate-fade-in-up">
          <Image
            src="/avatar.png"
            alt="Bruno Mesquita"
            width={80}
            height={80}
            className="rounded-full ring-2 ring-border"
            priority
          />
        </div>

        <div className="mb-2">
          <TypewriterText
            text={t('greeting')}
            delay={0.3}
            speed={50}
            className="text-sm font-mono tracking-widest uppercase"
            showCursor={false}
          />
        </div>

        <div className="mb-4">
          <TypewriterText
            text="Bruno Mesquita"
            delay={0.3}
            speed={80}
            className="text-5xl md:text-7xl font-bold tracking-tight text-accent"
            cursorClassName="text-accent cursor-blink"
          />
        </div>

        <div className="mb-4">
          <TypewriterText
            text={t('role')}
            delay={0.3}
            speed={50}
            className="text-xl md:text-2xl text-muted-foreground"
            showCursor={false}
          />
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <TypewriterText
            text={t('subtitle')}
            delay={0.3}
            speed={30}
            className="text-base text-muted-foreground"
            showCursor={false}
          />
        </div>

        <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up animation-delay-3000">
          <Button asChild size="lg" variant="outline">
            <a
              href="https://github.com/bruno-mesquita"
              target="_blank"
              rel="noopener noreferrer"
            >
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

          <Button asChild size="lg" variant="outline">
            <a href="/cv.pdf" download>
              <FileDown className="mr-2 h-4 w-4" />
              {t('cta_cv')}
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
  );
}
