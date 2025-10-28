'use client';

import React from 'react';
import Image from 'next/image';
import { Badge } from '../Badge';

export function AmbassadorsHero() {
  return (
    <section id="hero-section" className="flex flex-col gap-spacing-xl items-start px-spacing-xl pt-spacing-9xl pb-0 w-full max-w-3xl mx-auto">
      <div id="hero-box" className="border border-border-secondary rounded-5xl w-full overflow-hidden">
        <div className="flex gap-spacing-6xl items-start px-[48px] py-0 relative w-full">
          {/* Background gradient for right side */}
          <div className="absolute bottom-0 right-0 top-0 w-[653px] border border-border-tertiary rounded-bl-5xl rounded-tl-5xl bg-hero-gradient" />
          
          {/* Text Content - Left Column */}
          <div className="flex flex-col gap-[32px] flex-1 items-start justify-center py-spacing-4xl relative z-10 my-auto">
            <div className="flex flex-col gap-spacing-xl items-start">
              {/* Badge Group */}
              <div id="badge-group" className="bg-bg-secondary border border-border-secondary rounded-full px-spacing-md py-spacing-xs pl-spacing-xs flex gap-spacing-sm items-center">
                <Badge tone="brand" variant="soft" size="sm" className="font-bold">
                  300+
                </Badge>
                <span className="text-text-xs font-medium text-fg-secondary">
                  Embaixadores cadastrados
                </span>
              </div>

              {/* Title and Subtitle */}
              <div id="title-subtitle" className="flex flex-col gap-spacing-lg items-start">
                <h1 className="text-display-lg font-semibold tracking-[-0.02em]">
                  <span className="text-text-secondary">Ajude a construir</span>
                  <br />
                  <span className="text-brand-500">o futuro da prática</span>
                  <br />
                  <span className="text-brand-500">médica</span>
                </h1>
                
                <p className="text-text-xl text-text-tertiary max-w-[426px]">
                  Ganhe recompensas como um <span className="font-bold">iPhone 17</span> e dinheiro ajudando a revolucionar a prática médica com inteligência artificial.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section - Right Column */}
          <div id="ambassador-img" className="relative w-[575px] h-[566px] shrink-0 z-10">
            <Image
              src="/images/ambassador_img-1.png"
              alt="Embaixador Doctor Wise"
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

