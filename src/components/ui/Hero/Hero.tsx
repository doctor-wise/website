'use client';

import React from 'react';
import Image from 'next/image';
import { Heading } from '@/components/ui/Typography/Heading';
import { Text } from '@/components/ui/Typography/Text';
import {useTranslations} from 'next-intl';
import { Icon } from '@/components/icons';

// Local assets (served from public/images)
const MACBOOK_IMG = '/images/hero_mac-mock.png';
const IPHONE_IMG_DESKTOP = '/images/hero_iphone-mock-desktop.png';
const IPHONE_IMG_MOBILE = '/images/hero_iphone-mock-mobile.png';
// Combined desktop mock (Macbook + iPhone) from updated Figma
const HERO_COMBINED_IMG = '/images/hero_mac-iphone-mock.png';
// Social proof logos (served from public/images/Partners_logos)
// Figma node: 13298:8651
const LOGO_MEDRIO = '/images/Partners_logos/Partner-logo_medrio.png';
const LOGO_G7MED = '/images/Partners_logos/Partner-logo_g7med.png';
const LOGO_CEPALAB = '/images/Partners_logos/Partner-logo_cepalab.png';
const LOGO_RD_MED = '/images/Partners_logos/Partner-logo_rd-med.webp';
const LOGO_UNIG = '/images/Partners_logos/Partner-logo_unig.png';
const LOGO_SIBIONICS = '/images/Partners_logos/Partner-logo_sibionics.webp';


export function Hero(): React.ReactElement {
  const t = useTranslations('Hero');
  return (
    <section id="initial_section" className="w-full bg-bg-primary flex flex-col justify-start gap-spacing-xl">

      <div id="hero_section" className="mx-auto w-full h-full max-w-3xl px-spacing-xl pt-spacing-9xl pb-0 flex items-stretch flex-grow">

        <div id="hero_box" className="relative rounded-5xl border border-border-secondary overflow-hidden flex flex-row px-spacing-6xl py-spacing-5xl gap-spacing-6xl bg-hero-box-gradient">
           
           
            <div id="hero_left-content" className="flex flex-col h-stretch justify-between min-w-[450px]">

              <div id="hero_text-content" className="flex flex-col gap-spacing-xl py-spacing-4xl h-stretch">
                {/* Figma: Badge group */}
                <div id="hero_badge-group" className="inline-flex self-start items-center gap-spacing-sm rounded-full border border-border-secondary bg-bg-secondary-subtle pl-spacing-xs pr-spacing-lg py-spacing-xs">
                
                  <span className="inline-flex items-center rounded-full bg-bg-brand-primary border border-border-brand px-spacing-md py-spacing-xxs text-text-xs font-bold text-text-brand-secondary">
                  120k+
                  </span>
                  <span className="text-text-xs font-medium text-text-secondary">
                  {t('badge')}
                  </span>
                  

              </div>

                {/* Figma: Title & subtitile / Heading */}
                <div id="hero_title-subtitle" className="flex flex-col gap-spacing-lg">  

                  <Heading as="h1" size="display-lg" weight="semibold" color="secondary">
                  {t.rich('title', {
                    br: () => <br />,
                    highlight: (chunks) => (
                      <span className="text-text-brand-tertiary-alt">{chunks}</span>
                    ),
                  })}
                  </Heading>

                  {/* Figma: Title & subtitile / Supporting text */}
                  <Text as="p" size="xl" className="text-text-tertiary max-w-[426px]">
                  {t('subtitle')}
                  </Text>
                </div>
              </div>


              {/* Figma: Actions */}
              <div id="hero_actions" className="mt-0 flex flex-wrap items-end gap-spacing-3xl">
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

            </div>

            {/* Right content*/}
            <div id="hero_right-content" className="relative basis-0 grow">
              {/* gradient bg */}
              

              {/* Desktop: combined mock image */}
              <div className="relative hidden lg:flex h-full items-center justify-center z-[1]">
                <div className="relative h-[456px] w-[760px]">
                  <Image src={HERO_COMBINED_IMG} alt="Doctor Wise nos dispositivos" fill sizes="(min-width: 1024px) 760px, 95vw" className="object-cover" priority quality={90} />
                </div>
              </div>
              {/* Mobile: show only iPhone centered */}
              <div className="relative lg:hidden flex justify-center">
                <div className="relative h-[360px] w-[200px]">
                  {/* iPhone Quick Mockup 1 (mobile) */}
                  <Image src={IPHONE_IMG_MOBILE} alt="Doctor Wise no iPhone" fill sizes="200px" className="object-contain" priority quality={90} />
                </div>
              </div>
            </div>


          {/* Subtle rounded outline to match Figma */}
          <div className="pointer-events-none absolute inset-0 rounded-5xl ring-1 ring-border-secondary/60" aria-hidden />
        </div>

      </div>

      {/*Social proof section - Figma node: 13298:8651 */}
      <div id="social_proof_section" className="bg-bg-secondary" data-node-id="13298:8651">
        <div id="container" className="mx-auto w-full max-w-3xl px-spacing-7xl py-spacing-3xl" data-node-id="13298:8652">
          <div id="logos" className="flex flex-wrap items-center justify-between gap-spacing-3xl" data-node-id="13298:8654">
            
            <div id="logo-medrio" className="relative h-[30px] w-[134px]" data-node-id="13298:8655">
              <Image src={LOGO_MEDRIO} alt="Med Rio" fill sizes="134px" className="object-contain" quality={90} />
            </div>

            <div id="logo-g7med" className="relative h-[30px] w-[73px]" data-node-id="13298:8656">
              <Image src={LOGO_G7MED} alt="G7 Med" fill sizes="73px" className="object-contain" quality={90} />
            </div>

            <div id="logo-cepalab" className="relative h-[30px] w-[92px]" data-node-id="13345:13836">
              <Image src={LOGO_CEPALAB} alt="Cepalab" fill sizes="92px" className="object-contain" quality={90} />
            </div>

            <div id="logo-rd-med" className="relative h-[40px] w-[36px]" data-node-id="13345:13839">
              <Image src={LOGO_RD_MED} alt="RD Med" fill sizes="36px" className="object-contain" quality={90} />
            </div>

            <div id="logo-unig" className="relative h-[30px] w-[70px]" data-node-id="13298:8675">
              <Image src={LOGO_UNIG} alt="UNIG" fill sizes="70px" className="object-contain" quality={90} />
            </div>

            <div id="logo-sibionics" className="relative h-[28px] w-[134px]" data-node-id="13345:13842">
              <Image src={LOGO_SIBIONICS} alt="Sibionics" fill sizes="134px" className="object-contain" quality={90} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;



