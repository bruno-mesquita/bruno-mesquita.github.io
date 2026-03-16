import type { Metadata } from 'next'
import { Inter, Jost } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { ThemeProvider } from '@/components/providers'
import { routing } from '@/i18n/routing'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'Bruno Mesquita — Fullstack Developer',
  description:
    'Desenvolvedor Fullstack JS/TS com 6+ anos de experiência em Node.js, React, React Native e NestJS.',
  openGraph: {
    title: 'Bruno Mesquita — Fullstack Developer',
    description:
      'Desenvolvedor Fullstack JS/TS com 6+ anos de experiência em Node.js, React, React Native e NestJS.',
    type: 'website',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const messages = await getMessages()
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
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
