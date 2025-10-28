'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/icons';

// Check item component for reusability
function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-spacing-lg items-center w-auto lg:w-full">
      <div className="shrink-0 size-7 flex items-center justify-center">
        <Icon name="check_circle" size="md" className="text-brand-600" />
      </div>
      <div className="text-left">
        <p className="text-text-md lg:text-text-lg text-text-tertiary">{children}</p>
      </div>
    </div>
  );
}

// PLUS plan tag component
function PlanTag() {
  return (
    <div className="inline-flex items-center justify-center bg-brand-300 rounded-sm px-spacing-xs py-spacing-xxs h-[22px]">
      <span className="text-text-xs font-bold text-white leading-none">PLUS</span>
    </div>
  );
}

export function AmbassadorsDetailedFeatures() {
  const t = useTranslations('Ambassadors');

  return (
    <section id="detailed-features-section" className="bg-bg-primary w-full pt-spacing-7xl pb-spacing-4xl lg:py-spacing-7xl overflow-hidden">
      {/* Heading */}
      <div className="max-w-3xl mx-auto px-spacing-xl lg:px-spacing-4xl mb-spacing-5xl lg:mb-spacing-9xl">
        <div className="flex flex-col gap-spacing-2xl items-center text-center">
          <h2 className="text-[30px] leading-[38px] lg:text-display-md font-semibold tracking-[-0.02em] text-text-primary">
            {t('detailedHeadingLine1')}
            <br />
            <span className="text-brand-500">{t('detailedHeadingLine2')}</span>
          </h2>
        </div>
      </div>

      {/* Feature Block 1: PLUS Access */}
      <div className="max-w-3xl mx-auto px-spacing-xl lg:px-spacing-4xl mb-spacing-4xl lg:mb-spacing-9xl">
        <div className="flex flex-col lg:flex-row gap-spacing-4xl lg:gap-spacing-9xl items-start lg:items-center">
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-spacing-4xl text-center lg:text-left items-center lg:items-start w-full">
            <div className="flex flex-col gap-spacing-2xl items-center lg:items-start w-full">
              <PlanTag />
              <div className="flex flex-col gap-spacing-xl w-full">
                <h3 className="text-display-xs lg:text-display-sm font-semibold text-text-primary">
                  {t('detail1Title')}
                </h3>
                <p className="text-text-md lg:text-text-lg text-text-tertiary">
                  <span className="font-bold">{t('detail1SubtitleBold1')}</span>
                  {t('detail1SubtitleMiddle')}
                  <span className="font-bold">{t('detail1SubtitleBold2')}</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-spacing-2xl lg:pl-spacing-none w-full items-center lg:items-start">
              <CheckItem>
                {t('detail1Check1Before')}<span className="font-bold">{t('detail1Check1Bold')}</span>{t('detail1Check1After')}
              </CheckItem>
              <CheckItem>
                {t('detail1Check2Before')}<span className="font-bold">{t('detail1Check2Bold')}</span>{t('detail1Check2After')}
              </CheckItem>
            </div>
          </div>

          {/* Desktop: iPhone Mockup - hidden on mobile */}
          <div className="hidden lg:block flex-1 h-[512px] relative w-full">
            <div className="absolute inset-0 bg-bg-tertiary rounded-5xl overflow-hidden">
              <div className="absolute left-[48px] top-[48px] w-[473px] h-[464px]">
                <Image
                  src="/images/iPhone_Mockup-PLUS-1.png"
                  alt={t('detail1ImgAlt')}
                  width={473}
                  height={932}
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: iPhone Mockup - visible only on mobile */}
        <div className="lg:hidden w-full mt-spacing-4xl">
          <div className="bg-bg-tertiary h-[205px] rounded-5xl overflow-hidden relative w-full">
            <div className="absolute left-[-10px] top-0 w-[380px] h-[205px]">
              <Image
                src="/images/iPhone_Mockup-PLUS-1.png"
                alt={t('detail1ImgAlt')}
                width={380}
                height={749}
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Block 2: Commission & Prizes */}
      <div className="max-w-3xl mx-auto px-spacing-xl lg:px-spacing-4xl mb-spacing-4xl lg:mb-spacing-9xl">
        <div className="flex flex-col lg:flex-row gap-spacing-4xl lg:gap-spacing-9xl items-start lg:items-center">
          {/* Desktop: iPhone 17 Image - hidden on mobile, shown on left on desktop */}
          <div className="hidden lg:block flex-1 h-[512px] relative w-full order-1">
            <div className="absolute inset-0 bg-bg-tertiary rounded-5xl overflow-hidden">
              <div className="absolute right-[48px] top-[48px] w-[512px] h-[464px]">
                <Image
                  src="/images/iphone_17-1.png"
                  alt={t('detail2ImgAlt')}
                  width={512}
                  height={885}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-spacing-4xl text-center lg:text-left items-center lg:items-start w-full order-1 lg:order-2">
            <div className="flex flex-col gap-spacing-2xl items-center lg:items-start w-full">
              <div className="size-12 bg-bg-brand-secondary rounded-full flex items-center justify-center shrink-0">
                <Icon name="bank_note_03" size="md" className="text-brand-600" />
              </div>
              <div className="flex flex-col gap-spacing-xl w-full">
                <h3 className="text-display-xs lg:text-display-sm font-semibold text-text-primary">
                  {t('detail2TitleLine1')}
                  <br className="lg:hidden" />
                  {t('detail2TitleLine2')}
                </h3>
                <p className="text-text-md lg:text-text-lg text-text-tertiary">
                  {t('detail2SubtitleBefore')}<span className="font-bold">{t('detail2SubtitleBold')}</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-spacing-2xl lg:pl-spacing-none w-full items-center lg:items-start">
              <CheckItem>
                {t('detail2Check1Before')}<span className="font-bold">{t('detail2Check1Bold')}</span>
              </CheckItem>
              <CheckItem>
                {t('detail2Check2Before')}<span className="font-bold">{t('detail2Check2Bold')}</span>
              </CheckItem>
            </div>
          </div>
        </div>

        {/* Mobile: iPhone 17 Image - visible only on mobile */}
        <div className="lg:hidden w-full mt-spacing-4xl flex justify-start">
          <div className="bg-bg-tertiary h-[261px] w-[361px] rounded-5xl overflow-hidden relative">
            <div className="absolute right-[8px] top-0 w-[344px] h-[427px]">
              <Image
                src="/images/iphone_17-1.png"
                alt={t('detail2ImgAlt')}
                width={344}
                height={595}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Block 3: Dashboard Tracking */}
      <div className="max-w-3xl mx-auto px-spacing-xl lg:px-spacing-4xl">
        <div className="flex flex-col lg:flex-row gap-spacing-4xl lg:gap-spacing-9xl items-start lg:items-center">
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-spacing-4xl text-center lg:text-left items-center lg:items-start w-full">
            <div className="flex flex-col gap-spacing-2xl items-center lg:items-start w-full">
              <div className="size-12 bg-bg-brand-secondary rounded-full flex items-center justify-center shrink-0">
                <Icon name="chart_breakout_square" size="md" className="text-brand-600" />
              </div>
              <div className="flex flex-col gap-spacing-xl w-full">
                <h3 className="text-display-xs lg:text-display-sm font-semibold text-text-primary">
                  {t('detail3Title')}
                </h3>
                <p className="text-text-md lg:text-text-lg text-text-tertiary">
                  {t('detail3SubtitleBefore')}<span className="font-bold">{t('detail3SubtitleBold')}</span>{t('detail3SubtitleAfter')}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: Dashboard Screenshot - hidden on mobile */}
          <div className="hidden lg:block flex-1 h-[512px] relative w-full">
            <div className="absolute inset-0 bg-bg-tertiary rounded-5xl overflow-hidden">
              <div className="absolute left-[48px] top-[51px] w-[605px] h-[410px]">
                <Image
                  src="/images/emb-dashboard-img7.png"
                  alt={t('detail3ImgAlt')}
                  width={605}
                  height={410}
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Dashboard Screenshot - visible only on mobile */}
        <div className="lg:hidden w-full mt-spacing-4xl">
          <div className="bg-bg-tertiary h-[256px] rounded-2xl overflow-hidden relative w-full max-w-[361px]">
            <div className="absolute right-[9.73px] top-[12px] w-[340.609px] h-[231.004px]">
              <Image
                src="/images/emb-dashboard-img7.png"
                alt={t('detail3ImgAlt')}
                width={341}
                height={231}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
