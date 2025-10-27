'use client';

import React from 'react';
import Image from 'next/image';
import { Heading } from '@/components/ui/Typography/Heading';
import { Text } from '@/components/ui/Typography/Text';
import {useTranslations} from 'next-intl';
import { Icon } from '@/components/icons';
import { Badge } from '@/components/ui/Badge/Badge';

// Images sourced from public assets (exported from Figma)
// Place files at: public/Assets/Features/flowchart-illustration.png and .../flowchart-action-pill-1.png
const FLOWCHART_IMG = '/images/Flowchart-illustration.png';
const FLOWCHART_ACTION_PILL_1 = '/images/Flowchart-action-pill.png';

export function Features(): React.ReactElement {
  const t = useTranslations('Features');
  return (
    <section id="features-section" className="w-full max-w-3xl mx-auto bg-bg-primary border-t border-border-secondary rounded-t-5xl">

      <div id="feature-cards-wrapper" className="mx-auto w-full max-w-3xl px-spacing-md py-spacing-3xl grid grid-cols-1 lg:grid-cols-2 gap-spacing-3xl lg:px-spacing-7xl lg:py-spacing-7xl lg:gap-spacing-4xl items-stretch">

        {/* Left column: Title and reference card */}
        <div id="left-column" className="flex flex-col gap-spacing-4xl justify-between">

          <div id="text-wrapper" className="flex flex-col gap-spacing-xl">
            <Heading as="h2" size="display-xs" align="center" weight="semibold" color="secondary" className="lg:text-display-md lg:text-left">
              {t.rich('heading', { br: () => <br />, highlight: (c) => (<span className="text-text-brand-tertiary-alt">{c}</span>) })}
            </Heading>

            <Text as="p" align="center" color="tertiary" className="hero-subtitle lg:text-left">
              {t('description')}
            </Text>
          </div>

          <div id="feature-card-left" className="bg-bg-primary border border-border-secondary rounded-4xl lg:rounded-6xl p-spacing-xl lg:p-spacing-4xl flex flex-col items-center gap-spacing-lg">

            <div id="icon-and-title-left" className="flex flex-col items-center gap-spacing-lg">
              <div id="featured-icon-left" className="size-12 rounded-full border border-border-secondary grid place-items-center">
                <Icon name="book_open_01" size="lg" className="text-fg-brand-secondary" aria-label="Referências" />
              </div>

              <Text as="p" size="xl" weight="semibold" align="center" className="text-text-brand-tertiary-alt">
                {t('leftTitle')}
              </Text>
            </div>

            <Text as="p" size="sm" weight="medium" align="center" color="tertiary">
              {t('leftDesc')}
            </Text>

            <div id="references" className="flex flex-col gap-spacing-lg w-full">

              <div id="reference-card-1" className="bg-bg-primary border border-border-secondary rounded-2xl py-spacing-xl pl-spacing-xl pr-spacing-6xl relative">
                <Text as="p" size="xs" color="secondary">
                  Garcia HH, Nash TE, Del Brutto OH. Clinical symptoms, diagnosis, and treatment of neurocysticercosis. Lancet Neurol. 2014 Dec;13(12):1202-15.
                </Text>
                <div className="absolute right-spacing-xl top-spacing-xl">
                  <Badge size="sm" tone="gray" variant="outline" aria-label="referência 1">1</Badge>
                </div>
              </div>

              <div id="reference-card-2" className="bg-bg-primary border border-border-secondary rounded-2xl py-spacing-xl pl-spacing-xl pr-spacing-6xl relative">
                <Text as="p" size="xs" color="secondary">
                  Brunetti E, Kern P, Vuitton DA; Writing Panel for the WHO-IWGE. Expert consensus for the diagnosis and treatment of cystic and alveolar echinococcosis in humans. Acta Trop. 2010 Apr;114(1):1-16.
                </Text>
                <div className="absolute right-spacing-xl top-spacing-xl">
                  <Badge size="sm" tone="gray" variant="outline" aria-label="referência 2">2</Badge>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Right column: Dataflow feature card */}
        <div id="feature-card-right" className="relative bg-bg-primary border border-border-secondary rounded-4xl lg:rounded-6xl px-spacing-xl py-spacing-4xl lg:p-spacing-4xl flex flex-col items-center justify-center gap-spacing-lg">

          <div id="icon-and-title-right" className="flex flex-col items-center gap-spacing-lg">
            <div id="featured-icon-right" className="size-12 rounded-full border border-border-secondary grid place-items-center">
              <Icon name="dataflow_01" size="lg" className="text-fg-brand-secondary" aria-label="Dataflow" />
            </div>

            <Text as="p" size="xl" weight="semibold" align="center" className="text-text-brand-tertiary-alt">
              {t('rightTitle')}
            </Text>
          </div>

          <Text as="p" size="sm" weight="medium" align="center" color="tertiary">
            {t('rightDesc')}
          </Text>

          <div id="flowchart-illustration" className="relative h-[217px] w-[329px] lg:h-[311px] lg:w-[470px]">
            <Image
              src={FLOWCHART_IMG}
              alt={t('flowAlt')}
              fill
              sizes="(min-width: 1024px) 470px, 329px"
              className="object-contain"
              quality={90}
              priority={false}
            />
          </div>

          <div id="flowchart-action-pill-1" className="absolute left-spacing-2xl bottom-[-13px] lg:left-spacing-5xl lg:bottom-spacing-2xl h-[65px] w-[330px]">
            <Image
              src={FLOWCHART_ACTION_PILL_1}
              alt={t('pillAlt')}
              fill
              sizes="(min-width: 1024px) 330px, 330px"
              className="object-contain"
              quality={90}
              priority={false}
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;


