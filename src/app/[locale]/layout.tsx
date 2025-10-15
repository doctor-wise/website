import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';
import { Footer } from '@/components/ui';
import { getTranslations } from 'next-intl/server';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: 'pt' | 'en' | 'es' }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://doctorwise.com';
  const currentUrl = `${baseUrl}/${locale}`;
  
  const localeMap = {
    pt: 'pt_BR',
    en: 'en_US',
    es: 'es_ES',
  };
  
  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        'x-default': `${baseUrl}/pt`,
        'pt-BR': `${baseUrl}/pt`,
        'en-US': `${baseUrl}/en`,
        'es-ES': `${baseUrl}/es`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: localeMap[locale],
      url: currentUrl,
      siteName: 'Doctor Wise',
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: '/images/Opengraph-image.png',
          width: 1200,
          height: 630,
          alt: 'Doctor Wise',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/Opengraph-image.png'],
    },
    other: {
      'theme-color': '#ffffff',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: 'pt' | 'en' | 'es' }>;
}>) {
  const { locale } = await params;
  const htmlLangMap: Record<'pt' | 'en' | 'es', string> = {
    pt: 'pt-BR',
    en: 'en',
    es: 'es',
  };
  const htmlLang = htmlLangMap[locale];
  const messages = await getMessages({ locale });
  return (
    <html lang={htmlLang}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <NextIntlClientProvider key={locale} locale={locale} messages={messages}>
          {children}
          {/* Global footer */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


