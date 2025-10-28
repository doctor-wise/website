'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/icons';

export function AmbassadorsFeatures() {
  const t = useTranslations('Ambassadors');

  return (
    <section id="features-section" className="bg-bg-primary w-full py-spacing-7xl px-0 overflow-hidden">
      <div className="max-w-3xl mx-auto px-spacing-md lg:px-spacing-4xl">
        <div className="flex flex-wrap gap-spacing-4xl items-start justify-center w-full">
          {/* Feature 1: Ganhe dinheiro */}
          <div className="flex flex-col gap-spacing-xl items-center text-center flex-1 min-w-[320px]">
            <div className="bg-bg-primary border border-border-primary rounded-full size-12 flex items-center justify-center shrink-0">
              <Icon name="coins_01" size="md" className="text-brand-500" />
            </div>
            <div className="flex flex-col gap-spacing-xs items-center w-full">
              <h3 className="text-text-lg font-semibold text-text-primary">
                {t('feature1Title')}
              </h3>
              <p className="text-text-md text-text-tertiary">
                {t('feature1DescBefore')}<span className="font-bold">{t('feature1DescBold')}</span>
              </p>
            </div>
          </div>

          {/* Feature 2: Comunidade vibrante */}
          <div className="flex flex-col gap-spacing-xl items-center text-center flex-1 min-w-[320px]">
            <div className="bg-bg-primary border border-border-primary rounded-full size-12 flex items-center justify-center shrink-0">
              <Icon name="users_plus" size="md" className="text-brand-500" />
            </div>
            <div className="flex flex-col gap-spacing-xs items-center w-full">
              <h3 className="text-text-lg font-semibold text-text-primary">
                {t('feature2Title')}
              </h3>
              <p className="text-text-md text-text-tertiary">
                {t('feature2Desc')}
              </p>
            </div>
          </div>

          {/* Feature 3: Prêmios mensais */}
          <div className="flex flex-col gap-spacing-xl items-center text-center flex-1 min-w-[320px]">
            <div className="bg-bg-primary border border-border-primary rounded-full size-12 flex items-center justify-center shrink-0">
              <Icon name="trophy_02" size="md" className="text-brand-500" />
            </div>
            <div className="flex flex-col gap-spacing-xs items-center w-full">
              <h3 className="text-text-lg font-semibold text-text-primary">
                {t('feature3Title')}
              </h3>
              <p className="text-text-md text-text-tertiary">
                {t('feature3Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

