import type { Metadata } from 'next';
import { Inter, Jost } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getLocale,
  getTranslations,
} from 'next-intl/server';
import { ThemeProvider } from '@/components/providers';
import { Navbar } from '@/components/portfolio/navbar';
import { Footer } from '@/components/portfolio/footer';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${jost.variable} scroll-smooth`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
