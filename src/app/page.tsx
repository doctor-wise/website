import React from 'react';
import { Navbar, Hero, Features, SocialProof, Pricing } from '@/components/ui';

export default function HomePage() {
  return (
    <main className="bg-bg-primary flex flex-col justify-start gap-spacing-xl">
      <Navbar />
      <Hero />
      <Features />
      <SocialProof />
      <Pricing />
    </main>
  );
}

