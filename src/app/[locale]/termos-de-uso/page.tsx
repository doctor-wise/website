import React from 'react';
import { Navbar } from '@/components/ui';
import { TermsOfUseContent } from './TermsOfUseContent';
import { TermsOfUseContentEN } from './TermsOfUseContentEN';
import { TermsOfUseContentES } from './TermsOfUseContentES';

interface TermsOfUsePageProps {
  params: Promise<{ locale: 'pt' | 'en' | 'es' }>;
}

export default async function TermosDeUsoPage({ params }: TermsOfUsePageProps) {
  const { locale } = await params;

  const renderContent = () => {
    switch (locale) {
      case 'en':
        return <TermsOfUseContentEN />;
      case 'es':
        return <TermsOfUseContentES />;
      default:
        return <TermsOfUseContent />;
    }
  };

  return (
    <main className="bg-bg-primary flex flex-col justify-start overflow-x-hidden">
      <Navbar />

      <div id="terms-of-use-content" className="mx-auto w-full max-w-[720px] px-spacing-xl pt-spacing-10xl pb-spacing-6xl md:px-spacing-7xl md:pb-spacing-7xl">
        {renderContent()}
      </div>
    </main>
  );
}

