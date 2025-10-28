'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '../Button';

export function AmbassadorsCTA() {
  const t = useTranslations('Ambassadors');

  return (
    <section id="cta-section" className="bg-bg-primary w-full py-spacing-5xl lg:py-spacing-9xl overflow-hidden">
      <div className="max-w-3xl mx-auto px-spacing-md lg:px-spacing-4xl">
        <div className="bg-bg-secondary rounded-2xl p-spacing-3xl lg:p-spacing-7xl flex flex-col gap-spacing-4xl items-center">
          {/* Heading and Text */}
          <div className="flex flex-col gap-spacing-2xl items-center text-center max-w-xl w-full">
            <h2 className="text-display-sm lg:text-display-md font-semibold tracking-[-0.02em] text-text-primary">
              {t('ctaTitle')}
            </h2>
            <p className="text-text-md lg:text-text-xl text-text-tertiary">
              {t('ctaSubtitle')}
            </p>
          </div>

          {/* CTA Button */}
          <Link href="https://airtable.com/appLHbSfKhrt6rgMc/pagEYONy9x3aFkYBv/form" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              hierarchy="primary" 
              icon="arrow_right" 
              iconPosition="right"
            >
              {t('ctaButton')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

