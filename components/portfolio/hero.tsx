import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { CodeEditor } from '@/components/ui/code-editor';
import { Github, Linkedin, Mail } from 'lucide-react';

function getCodeLines(locale: string) {
  const lines = {
    en: `// Bruno Mesquita - Fullstack Developer
const brunoMesquita = new Developer({
  name: 'Bruno Mesquita',
  location: 'São José dos Campos - SP',
  role: 'Fullstack JS/TS Developer',
  skills: {
    languages: ['JavaScript', 'TypeScript'],
    frontend: ['React', 'Next.js', 'TailwindCSS'],
    backend: ['Node.js', 'Express', 'Fastify', 'Bun', 'Elysia'],
    mobile: ['React Native (Expo)', 'HeroUI Native', 'NativeWind', 'Uniwind'],
    databases: ['PostgreSQL', 'MongoDB'],
  },
  experience: '6+ years',
});`,
    'pt-BR': `// Bruno Mesquita - Desenvolvedor Fullstack
const brunoMesquita = new Developer({
  name: 'Bruno Mesquita',
  location: 'São José dos Campos - SP',
  role: 'Desenvolvedor Fullstack JS/TS',
  skills: {
    languages: ['JavaScript', 'TypeScript'],
    frontend: ['React', 'Next.js', 'TailwindCSS'],
    backend: ['Node.js', 'Express', 'Fastify', 'Bun', 'Elysia'],
    mobile: ['React Native (Expo)', 'HeroUI Native', 'NativeWind', 'Uniwind'],
    databases: ['PostgreSQL', 'MongoDB'],
  },
  experience: '6+ anos',
});`,
  };
  return lines[locale as keyof typeof lines] || lines.en;
}

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <style>{`
        @keyframes hero-slide-left {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero-slide-right {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero-slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-avatar   { animation: hero-slide-left  0.65s 0.05s cubic-bezier(.22,1,.36,1) both; }
        .hero-eyebrow  { animation: hero-slide-right 0.55s 0.20s cubic-bezier(.22,1,.36,1) both; }
        .hero-name     { animation: hero-slide-right 0.65s 0.30s cubic-bezier(.22,1,.36,1) both; }
        .hero-stack    { animation: hero-slide-right 0.55s 0.42s cubic-bezier(.22,1,.36,1) both; }
        .hero-editor   { animation: hero-slide-up   0.70s 0.50s cubic-bezier(.22,1,.36,1) both; }
        .hero-buttons  { animation: hero-slide-up   0.55s 0.65s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{ background: 'oklch(0.55 0.24 270 / 0.07)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'oklch(0.55 0.24 220 / 0.05)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
          {/* LEFT — Avatar + meta */}
          <div className="hero-avatar flex-shrink-0 flex flex-col items-center lg:items-start">
            <div className="relative">
              {/* Corner brackets */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-primary/50" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-primary/50" />

              <Image
                src="/avatar.png"
                alt="Bruno Mesquita"
                width={250}
                height={310}
                className="rounded-xl object-cover shadow-2xl"
                style={{ filter: 'brightness(0.97) contrast(1.04)' }}
                priority
              />
            </div>

            {/* Meta labels */}
            <div className="mt-6 space-y-2 font-mono text-xs w-full">
              <div className="flex items-center gap-3">
                <span className="text-primary/50 tracking-[0.2em] uppercase">
                  {t('exp_label')}
                </span>
                <span className="text-foreground/60">{t('exp_value')}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary/50 tracking-[0.2em] uppercase">
                  {t('loc_label')}
                </span>
                <span className="text-foreground/60">{t('loc_value')}</span>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-foreground/40">{t('available')}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="hero-buttons flex flex-col gap-2.5 mt-4 w-full">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full justify-start"
              >
                <a
                  href="https://github.com/bruno-mesquita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  {t('cta_github')}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full justify-start"
              >
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
                className="w-full justify-start"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'white',
                }}
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  {t('cta_contact')}
                </a>
              </Button>
            </div>
          </div>

          {/* Divider (desktop only) */}
          <div className="hidden lg:block w-px self-stretch bg-border/40 flex-shrink-0" />

          {/* RIGHT — Name + editor + buttons */}
          <div className="flex-1 flex flex-col gap-7 min-w-0 w-full">
            {/* Identity */}
            <div>
              <p className="hero-eyebrow font-mono text-[11px] tracking-[0.3em] text-primary/60 uppercase mb-3">
                // {t('role')}
              </p>
              <h1 className="hero-name font-[family-name:var(--font-jost)] text-[clamp(2.8rem,7vw,5.5rem)] font-black tracking-tight leading-[0.95] text-foreground">
                Bruno
                <br />
                <span className="text-primary">Mesquita</span>
              </h1>
              <p className="hero-stack mt-4 font-mono text-xs text-muted-foreground tracking-wide leading-relaxed">
                {t('subtitle')}
              </p>
            </div>

            {/* Code editor — ocupa todo espaço restante */}
            <div className="hero-editor flex-1">
              <CodeEditor
                code={getCodeLines(locale)}
                className="w-full h-full min-h-[23rem] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
