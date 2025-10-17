import React from 'react';
import { Navbar } from '@/components/ui';
import { TermsOfUseContentPT } from './TermsOfUseContentPT';
import { TermsOfUseContentEN } from './TermsOfUseContentEN';
import { TermsOfUseContentES } from './TermsOfUseContentES';

export default async function TermsOfUsePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const renderContent = () => {
    switch (locale) {
      case 'pt':
        return <TermsOfUseContentPT />;
      case 'es':
        return <TermsOfUseContentES />;
      default:
        return <TermsOfUseContentEN />;
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


