'use client';

import React from 'react';
import Image from 'next/image';

// Partner logos from public/images/Partners_logos
// Figma node: 13298:8651
const LOGO_MEDRIO = '/images/Partners_logos/Partner-logo_medrio.png';
const LOGO_G7MED = '/images/Partners_logos/Partner-logo_g7med.png';
const LOGO_CEPALAB = '/images/Partners_logos/Partner-logo_cepalab.png';
const LOGO_RD_MED = '/images/Partners_logos/Partner-logo_rd-med.webp';
const LOGO_UNIG = '/images/Partners_logos/Partner-logo_unig.png';
const LOGO_SIBIONICS = '/images/Partners_logos/Partner-logo_sibionics.webp';

export function PartnerLogos(): React.ReactElement {
  return (
    <section 
      id="social_proof_section" 
      className="hidden w-full bg-bg-secondary flex items-start justify-center px-spacing-none py-spacing-3xl"
      data-node-id="13298:8651"
    >
      <div 
        id="container" 
        className="w-full max-w-[1280px] flex flex-col gap-spacing-6xl md:gap-spacing-4xl px-spacing-3xl md:px-spacing-7xl py-spacing-none items-center"
        data-node-id="13298:8652"
      >
        <div 
          id="logos" 
          className="w-fit mx-auto flex flex-wrap items-start justify-center gap-spacing-6xl md:w-full md:items-center md:justify-between md:gap-spacing-3xl"
          data-node-id="13298:8654"
        >
          <div 
            id="logo-medrio" 
            className="relative w-[134px] h-[30px] shrink-0"
            data-node-id="13298:8655"
          >
            <Image
              src={LOGO_MEDRIO}
              alt="Med Rio"
              fill
              className="object-contain object-center"
              sizes="134px"
            />
          </div>

          <div 
            id="logo-g7med" 
            className="relative w-[73px] h-[30px] shrink-0"
            data-node-id="13298:8656"
          >
            <Image
              src={LOGO_G7MED}
              alt="G7 Med"
              fill
              className="object-contain object-center"
              sizes="73px"
            />
          </div>

          <div 
            id="logo-cepalab" 
            className="relative w-[92px] h-[30px] shrink-0"
            data-node-id="13345:13836"
          >
            <Image
              src={LOGO_CEPALAB}
              alt="Cepalab"
              fill
              className="object-contain object-center"
              sizes="92px"
            />
          </div>

          <div 
            id="logo-rd-med" 
            className="relative w-[36px] h-[40px] shrink-0"
            data-node-id="13345:13839"
          >
            <Image
              src={LOGO_RD_MED}
              alt="RD Med"
              fill
              className="object-contain object-center"
              sizes="36px"
            />
          </div>

          <div 
            id="logo-unig" 
            className="relative w-[70px] h-[30px] shrink-0"
            data-node-id="13298:8675"
          >
            <Image
              src={LOGO_UNIG}
              alt="UNIG"
              fill
              className="object-contain object-center"
              sizes="70px"
            />
          </div>

          <div 
            id="logo-sibionics" 
            className="relative w-[134px] h-[28px] shrink-0"
            data-node-id="13345:13842"
          >
            <Image
              src={LOGO_SIBIONICS}
              alt="Sibionics"
              fill
              className="object-contain object-center"
              sizes="134px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerLogos;

