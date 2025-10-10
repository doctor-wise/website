import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import MobileBlocker from '@/components/ui/MobileBlocker';
import { Footer } from '@/components/ui';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Doctor Wise | IA médica baseada em evidências',
  description: 'Respostas verdadeiramente confiáveis, geradas por tecnologia de ponta.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
        
        {/* Global footer */}
        <Footer />
        {/* Mobile overlay blocker */}
        <MobileBlocker />
      </body>
    </html>
  );
}

