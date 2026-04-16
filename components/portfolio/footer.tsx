import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 mt-0">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {year} Bruno Mesquita. {t('rights')}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.buymeacoffee.com/bmesquita19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/buymeacoffee.svg"
              alt="Buy me a coffee"
              width={130}
              height={36}
              unoptimized
            />
          </a>
          <a
            href="https://github.com/bruno-mesquita"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/brunomesquita196"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:bmesquita196@gmail.com"
            aria-label="Email"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
