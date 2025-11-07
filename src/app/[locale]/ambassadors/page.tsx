import React from 'react';
import { Navbar, AmbassadorsHero, AmbassadorsFeatures, AmbassadorsDetailedFeatures, AmbassadorsCTA } from '@/components/ui';

export default function AmbassadorsPage() {
  return (
    <main className="bg-bg-primary flex flex-col justify-start overflow-x-hidden">
      <Navbar variant="ambassadors" />
      <AmbassadorsHero />
      <AmbassadorsFeatures />
      <AmbassadorsDetailedFeatures />
      <AmbassadorsCTA />
    </main>
  );
}

