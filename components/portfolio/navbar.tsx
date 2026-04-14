'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { getSlugForLocale } from '@/lib/slug-mapping';

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const otherLocale = locale === 'en' ? 'pt-BR' : 'en';
  const otherLocaleLabel = locale === 'en' ? 'PT' : 'EN';

  function getTargetPath(): string {
    const pathParts = pathname.split('/').filter(Boolean);
    const currentPathLocale = pathParts[0];
    const remainingPath = pathParts.slice(1);

    if (remainingPath[0] === 'blog' && remainingPath[1]) {
      const currentSlug = remainingPath[1];
      const translatedSlug = getSlugForLocale(
        currentSlug,
        currentPathLocale,
        otherLocale
      );
      if (translatedSlug) {
        return `/${otherLocale}/blog/${translatedSlug}`;
      }
    }

    if (remainingPath[0] === 'blog') {
      return `/${otherLocale}/blog`;
    }

    return `/${otherLocale}`;
  }

  const targetPath = getTargetPath();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    ['about', 'skills', 'projects', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#skills', label: t('skills') },
    { href: '#projects', label: t('projects') },
    { href: '#contact', label: t('contact') },
    { href: `/${locale}/blog`, label: t('blog'), isPage: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in-down ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-lg font-bold"
          style={{ color: 'var(--color-accent)' }}
        >
          BM
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = link.isPage
              ? false
              : activeSection === link.href.slice(1);
            return link.isPage ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors duration-200 ${
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 origin-left"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    opacity: isActive ? 1 : 0,
                  }}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={targetPath}
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
          >
            {otherLocaleLabel}
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => {
                  const isActive = link.isPage
                    ? false
                    : activeSection === link.href.slice(1);
                  return link.isPage ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`text-lg font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                      style={
                        isActive ? { color: 'var(--color-accent)' } : undefined
                      }
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
