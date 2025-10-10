'use client';

import React from 'react';
import Image from 'next/image';
import { Heading } from '@/components/ui/Typography/Heading';
import { Text } from '@/components/ui/Typography/Text';
import { Icon } from '@/components/icons';

// Local assets (served from public/images)
const MACBOOK_IMG = '/images/hero_mac-mock.png';
const IPHONE_IMG_DESKTOP = '/images/hero_iphone-mock-desktop.png';
const IPHONE_IMG_MOBILE = '/images/hero_iphone-mock-mobile.png';
// Combined desktop mock (Macbook + iPhone) from updated Figma
const HERO_COMBINED_IMG = '/images/hero_mac-iphone-mock.png';
// Social proof logos (served from public/images/Partners_logos)
const LOGO_MEDRIO = '/images/Partners_logos/Partner-logo_medrio.png';
const LOGO_G7MED = '/images/Partners_logos/Partner-logo_g7med.png';
const LOGO_UNIG_WHITE = '/images/Partners_logos/Partner-logo_unig.png';
const LOGO_GROUP_MEDCOF_MARK = '/images/Partners_logos/Partner-logo_medcof.png';
// Temporary mapping for placeholder logos
const LOGO_SISYPHUS_MARK = '/images/Partners_logos/Partner-logo_arvo.png';
const LOGO_SISYPHUS_TEXT = '/images/Partners_logos/Partner-logo_arvo.png';


export function Hero(): React.ReactElement {
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
                  Profissionais e acadêmicos confiam na Doctor Wise
                  </span>
                  

              </div>

                {/* Figma: Title & subtitile / Heading */}
                <div id="hero_title-subtitle" className="flex flex-col gap-spacing-lg">  

                  <Heading as="h1" size="display-lg" weight="semibold" color="secondary">
                  IA médica baseada
                  <br />
                  <span className="text-text-brand-tertiary-alt">em evidências</span>
                  </Heading>

                  {/* Figma: Title & subtitile / Supporting text */}
                  <Text as="p" size="xl" className="text-text-tertiary max-w-[426px]">
                  Respostas verdadeiramente confiáveis, geradas por tecnologia de ponta.
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

      {/*Social proof section */}
      <div className="bg-bg-secondary">
        <div className="mx-auto w-full max-w-3xl px-spacing-4xl py-spacing-3xl">
          {/* Figma: Container / Logos */}
          <div className="flex flex-wrap items-center justify-between gap-spacing-3xl">
            <div className="relative h-[30px] w-[134px]">
              {/* Figma: logo-formatos_300x67 1 */}
                  <Image src={LOGO_MEDRIO} alt="MedRio" fill sizes="134px" className="object-contain" quality={90} />
            </div>
            <div className="relative h-[30px] w-[73px]">
              {/* Figma: G7med-Logo-simples-3-e1717532363837 1 */}
                  <Image src={LOGO_G7MED} alt="G7med" fill sizes="73px" className="object-contain" quality={90} />
            </div>
            <div className="relative h-[30px] w-[76px]">
              {/* Arvo logo (composed via mask in Figma) not available, skipping for now */}
              {/* Figma: arvo logo 1 */}
                  <Image src={LOGO_SISYPHUS_MARK} alt="Arvo placeholder" fill sizes="76px" className="object-contain" quality={90} />
            </div>
            {/* Figma: logo (1) 2 + Grupo Medcof text */}
            <div className="relative h-[30px] w-[160px]">
                  <Image src={LOGO_GROUP_MEDCOF_MARK} alt="Grupo Medcof mark" fill sizes="160px" className="object-contain" quality={90} />
            </div>
            <div className="relative h-[30px] w-[70px] rounded-xs bg-[#204b96]">
              <div className="absolute left-1/2 top-[3px] h-[24px] w-[57px] -translate-x-1/2">
                {/* Figma: logo-branca-da-unig-e1751475480960 1 */}
                    <Image src={LOGO_UNIG_WHITE} alt="UNIG" fill sizes="57px" className="object-contain" quality={90} />
              </div>
            </div>
            <div className="flex items-center gap-spacing-sm h-[30px]">
              <div className="relative h-[30px] w-[72px]">
                {/* Figma: Company logo (Sisyphus text) */}
                    <Image src={LOGO_SISYPHUS_TEXT} alt="Sisyphus" fill sizes="72px" className="object-contain" quality={90} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


