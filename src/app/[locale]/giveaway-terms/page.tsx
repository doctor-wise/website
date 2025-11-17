import React from 'react';
import { Navbar } from '@/components/ui';
import { GiveawayTermsContentPT } from './GiveawayTermsContentPT';

export default async function GiveawayTermsPage({ params }: { params: Promise<{ locale: string }> }) {
  await params; // Consume params for async compatibility
  
  return (
    <main className="bg-bg-primary flex flex-col justify-start overflow-x-hidden">
      <Navbar />

      <div id="giveaway-terms-content" className="mx-auto w-full max-w-[720px] px-spacing-xl pt-spacing-10xl pb-spacing-6xl md:px-spacing-7xl md:pb-spacing-7xl">
        <GiveawayTermsContentPT />
      </div>
    </main>
  );
}

