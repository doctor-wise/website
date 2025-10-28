'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Badge } from '../Badge';

export function AmbassadorsHero() {
  const t = useTranslations('Ambassadors');

  return (
    <section id="hero-section" className="flex flex-col gap-spacing-xl items-start px-spacing-md lg:px-spacing-xl pt-spacing-9xl pb-0 w-full max-w-3xl mx-auto">
      <div id="hero-box" className="border border-border-secondary rounded-5xl w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-spacing-2xl lg:gap-spacing-6xl items-start px-spacing-xl pt-spacing-3xl pb-spacing-none lg:px-[48px] lg:py-0 relative w-full">
          {/* Background gradient for right side - desktop only */}
          <div className="absolute bottom-0 right-0 top-0 w-[653px] border border-border-tertiary rounded-bl-5xl rounded-tl-5xl bg-hero-gradient hidden lg:block" />
          
          {/* Background gradient for bottom - mobile only */}
          <div className="absolute bottom-0 left-0 right-0 h-[193px] bg-hero-gradient rounded-t-5xl border-t border-border-tertiary lg:hidden" />
          
          {/* Text Content - Left Column */}
          <div className="flex flex-col gap-[32px] flex-1 items-center text-center lg:items-start lg:text-left justify-center lg:py-spacing-4xl relative z-10 lg:my-auto w-full">
            <div className="flex flex-col gap-spacing-xl items-center lg:items-start w-full">
              {/* Badge Group */}
              <div id="badge-group" className="bg-bg-secondary border border-border-secondary rounded-full px-spacing-md py-spacing-xs pl-spacing-xs flex gap-spacing-sm items-center self-center lg:self-start">
                <Badge tone="brand" variant="soft" size="sm" className="font-bold">
                  {t('heroBadge')}
                </Badge>
                <span className="text-text-xs font-medium text-fg-secondary">
                  {t('heroBadgeText')}
                </span>
              </div>

              {/* Title and Subtitle */}
              <div id="title-subtitle" className="flex flex-col gap-spacing-lg items-center lg:items-start w-full">
                <h1 className="hero-heading font-semibold tracking-[-0.02em] text-center lg:text-left">
                  <span className="text-text-secondary">{t('heroTitleLine1')}</span>
                  <br />
                  <span className="text-brand-500">{t('heroTitleLine2')}</span>
                </h1>
                
                <p className="hero-subtitle text-text-tertiary max-w-full lg:max-w-[426px] text-center lg:text-left">
                  {t('heroSubtitleBefore')}<span className="font-bold">{t('heroSubtitleBold')}</span>{t('heroSubtitleAfter')}
                </p>
              </div>
            </div>
          </div>

          {/* Image Section - Right Column */}
          <div id="ambassador-img" className="relative w-full lg:w-[575px] h-[325px] lg:h-[566px] shrink-0 z-10">
            <Image
              src="/images/ambassador_img-1.png"
              alt={t('heroImgAlt')}
              width={575}
              height={566}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

