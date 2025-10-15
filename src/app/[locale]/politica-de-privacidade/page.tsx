import React from 'react';
import { Navbar } from '@/components/ui';
import { PrivacyPolicyContentPT } from './PrivacyPolicyContentPT';
import { PrivacyPolicyContentEN } from './PrivacyPolicyContentEN';
import { PrivacyPolicyContentES } from './PrivacyPolicyContentES';

interface PrivacyPolicyPageProps {
  params: Promise<{ locale: 'pt' | 'en' | 'es' }>;
}

export default async function PoliticaDePrivacidadePage({ params }: PrivacyPolicyPageProps) {
  const { locale } = await params;

  const renderContent = () => {
    switch (locale) {
      case 'en':
        return <PrivacyPolicyContentEN />;
      case 'es':
        return <PrivacyPolicyContentES />;
      default:
        return <PrivacyPolicyContentPT />;
    }
  };

  return (
    <main className="bg-bg-primary flex flex-col justify-start overflow-x-hidden">
      <Navbar />

      <div id="privacy-policy-content" className="mx-auto w-full max-w-[720px] px-spacing-xl pt-spacing-10xl pb-spacing-6xl md:px-spacing-7xl md:pb-spacing-7xl">
        {renderContent()}
      </div>
    </main>
  );
}
