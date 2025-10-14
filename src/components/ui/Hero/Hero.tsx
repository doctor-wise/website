'use client';

import React from 'react';
import Image from 'next/image';
import { Heading } from '@/components/ui/Typography/Heading';
import { Text } from '@/components/ui/Typography/Text';
import {useTranslations} from 'next-intl';
import { Icon } from '@/components/icons';
import { PartnerLogos } from '@/components/ui/PartnerLogos';

// Local assets (served from public/images)
const MACBOOK_IMG = '/images/hero_mac-mock.png';
const IPHONE_IMG_DESKTOP = '/images/hero_iphone-mock-desktop.png';
const IPHONE_IMG_MOBILE = '/images/hero_iphone-mock-mobile.png';
// Combined desktop mock (Macbook + iPhone) from updated Figma
const HERO_COMBINED_IMG = '/images/hero_mac-iphone-mock.png';
// Social proof logos moved to PartnerLogos component


export function Hero(): React.ReactElement {
  const t = useTranslations('Hero');
  return (
    <section id="initial_section" className="w-full bg-bg-primary flex flex-col justify-start gap-spacing-xl">

      <div id="hero_section" className="mx-auto w-full h-full max-w-3xl px-spacing-md lg:px-spacing-xl pt-spacing-9xl pb-0 flex items-stretch flex-grow" data-node-id="13375:15931">

        <div id="hero_box" data-node-id="13375:15932" className="relative w-full rounded-5xl border border-border-secondary overflow-hidden flex flex-col lg:flex-row px-spacing-xl pt-spacing-3xl pb-spacing-none lg:px-spacing-6xl lg:py-spacing-5xl gap-spacing-2xl lg:gap-spacing-6xl bg-hero-box-gradient">
           
           
            <div id="hero_left-content" className="flex flex-col w-full lg:min-w-[450px] items-center text-center lg:items-start lg:text-left lg:h-full lg:justify-between">

              <div id="hero_text-content" className="flex flex-col gap-spacing-xl h-stretch items-center lg:items-start">
                {/* Figma: Badge group */}
                <div id="hero_badge-group" data-node-id="13375:15936" className="inline-flex self-center lg:self-start items-center gap-spacing-sm rounded-full border border-border-secondary bg-bg-secondary pl-spacing-xs pr-spacing-lg py-spacing-xs">
                
                  <span className="inline-flex items-center rounded-full bg-bg-brand-primary border border-border-brand px-spacing-md py-spacing-xxs text-text-xs font-bold text-text-brand-secondary">
                  120.000+
                  </span>
                  <span className="text-text-xs font-medium text-text-secondary">
                  {t('badge')}
                  </span>
                  

              </div>

                {/* Figma: Title & subtitile / Heading */}
                <div id="hero_title-subtitle" data-node-id="13375:15937" className="flex flex-col gap-spacing-lg items-center text-center lg:items-start lg:text-left">  

                  <Heading as="h1" weight="semibold" color="secondary" align="center" className="hero-heading lg:text-left">
                  {t.rich('title', {
                    br: () => <br />,
                    highlight: (chunks) => (
                      <span className="text-text-brand-tertiary-alt">{chunks}</span>
                    ),
                  })}
                  </Heading>

                  {/* Figma: Title & subtitile / Supporting text */}
                  <Text as="p" align="center" className="hero-subtitle text-text-tertiary lg:text-text-secondary max-w-[426px] mx-auto lg:text-left">
                  {t('subtitle')}
                  </Text>
                </div>
              </div>


              {/* Figma: Actions */}
              <div id="hero_actions" data-node-id="13375:15940" className="mt-spacing-2xl flex flex-wrap items-center justify-center lg:justify-start gap-spacing-3xl">
                {/* App store badges (from Misc assets) */}
                <div className="flex items-center gap-spacing-lg">
                  {/* Figma: Mobile app store badge (Google Play) */}
                  <a id="hero_google-play-badge" href="#" aria-label="Get it on Google Play" className="block h-[35px] w-[120px]">
                    <Image src="/Assets/Misc-assets/play-store-badge.svg" alt="Google Play" width={120} height={35} />
                  </a>
                  {/* Figma: Mobile app store badge (App Store) */}
                  <a id="hero_app-store-badge" href="#" aria-label="Download on the App Store" className="block h-[35px] w-[106px]">
                    <Image src="/Assets/Misc-assets/app-store-badge.svg" alt="App Store" width={106} height={35} />
                  </a>
                </div>
                {/* Ratings badge */}
                <div id="hero_ratings-badge" className="flex items-center gap-spacing-sm h-[44px]">
                  <Image src="/Assets/Misc-assets/ratings-badge.svg" alt="Avaliação 5,0 com 200+ reviews" width={180} height={44} className="h-full w-auto" />
                </div>
              </div>

              <div id="hero_gradient-bg" className="absolute inset-y-0 right-0 w-[500px] bg-hero-gradient rounded-bl-5xl rounded-tl-5xl border-l border-border-tertiary hidden lg:block" aria-hidden />

              <div id="hero_bottom-bg" data-node-id="13375:15933" className="absolute inset-x-0 bottom-0 h-[193px] bg-hero-gradient rounded-t-5xl border-t border-border-tertiary lg:hidden" aria-hidden />

            </div>

            {/* Right content*/}
            <div id="hero_right-content" className="relative basis-0 grow">
              {/* gradient bg */}
              

                  {/* Desktop: combined mock image */}
              <div className="relative hidden lg:flex items-center justify-center z-[1] lg:h-full">
                <div className="relative h-[456px] w-[760px]">
                  <Image src={HERO_COMBINED_IMG} alt="Doctor Wise nos dispositivos" fill sizes="(min-width: 1024px) 760px, 95vw" className="object-cover" priority quality={90} />
                </div>
              </div>
              {/* Mobile: show only iPhone centered */}
              <div className="relative lg:hidden z-[1] flex justify-center">
                <div className="relative h-[259px] w-[285px]">
                  {/* iPhone Quick Mockup 1 (mobile) */}
                  <Image src={IPHONE_IMG_MOBILE} alt="Doctor Wise no iPhone" fill sizes="285px" className="object-contain" priority quality={90} />
                </div>
              </div>
            </div>


          {/* Subtle rounded outline to match Figma */}
          <div className="pointer-events-none absolute inset-0 rounded-5xl ring-1 ring-border-secondary/60" aria-hidden />
        </div>

      </div>

      {/* Social proof section extracted to component */}
      <PartnerLogos />
    </section>
  );
}

export default Hero;



