'use client';

import React from 'react';
import Image from 'next/image';
import { Heading } from '@/components/ui/Typography/Heading';
import { Text } from '@/components/ui/Typography/Text';
import { Icon } from '@/components/icons';
import { Badge } from '@/components/ui/Badge/Badge';

// Images sourced from public assets (exported from Figma)
// Place files at: public/Assets/Features/flowchart-illustration.png and .../flowchart-action-pill-1.png
const FLOWCHART_IMG = '/images/Flowchart-illustration.png';
const FLOWCHART_ACTION_PILL_1 = '/images/Flowchart-action-pill.png';

export function Features(): React.ReactElement {
  return (
    <section id="features-section" className="w-full max-w-3xl mx-auto bg-bg-primary border-t border-border-secondary rounded-t-5xl">

      <div id="feature-cards-wrapper" className="mx-auto w-full max-w-3xl px-spacing-4xl py-spacing-7xl grid grid-cols-1 lg:grid-cols-2 gap-spacing-4xl items-stretch">

        {/* Left column: Title and reference card */}
        <div id="left-column" className="flex flex-col gap-spacing-4xl justify-between">

          <div id="created-by-heading" className="">
            <Heading as="h2" size="display-md" weight="semibold" color="secondary">
              Criado por e para
              <br />
              <span className="text-text-brand-tertiary-alt">profissionais da saúde</span>
            </Heading>
          </div>

          <div id="feature-card-left" className="bg-bg-primary border border-border-secondary rounded-6xl p-spacing-4xl flex flex-col items-center gap-spacing-lg">

            <div id="icon-and-title-left" className="flex flex-col items-center gap-spacing-lg">
              <div id="featured-icon-left" className="size-12 rounded-full border border-border-secondary grid place-items-center">
                <Icon name="book_open_01" size="lg" className="text-fg-brand-secondary" aria-label="Referências" />
              </div>

              <Text as="p" size="xl" weight="semibold" align="center" className="text-text-brand-tertiary-alt">
                Referências Bibliográficas Integradas
              </Text>
            </div>

            <Text as="p" size="sm" weight="medium" align="center" color="tertiary">
              Cada resposta vem com uma lista de referências acadêmicas de fontes selecionadas.
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
        <div id="feature-card-right" className="relative bg-bg-primary border border-border-secondary rounded-6xl p-spacing-4xl flex flex-col items-center justify-center gap-spacing-lg">

          <div id="icon-and-title-right" className="flex flex-col items-center gap-spacing-lg">
            <div id="featured-icon-right" className="size-12 rounded-full border border-border-secondary grid place-items-center">
              <Icon name="dataflow_01" size="lg" className="text-fg-brand-secondary" aria-label="Dataflow" />
            </div>

            <Text as="p" size="xl" weight="semibold" align="center" className="text-text-brand-tertiary-alt">
              Gráficos, diagramas e mapas mentais em segundos
            </Text>
          </div>

          <Text as="p" size="sm" weight="medium" align="center" color="tertiary">
            Cada resposta vem com uma lista de referências acadêmicas de fontes selecionadas.
          </Text>

          <div id="flowchart-illustration" className="relative h-[311px] w-[470px]">
            <Image
              src={FLOWCHART_IMG}
              alt="Fluxograma gerado"
              fill
              sizes="(min-width: 1024px) 470px, 92vw"
              className="object-contain"
              quality={90}
              priority={false}
            />
          </div>

          <div id="flowchart-action-pill-1" className="absolute left-spacing-5xl bottom-spacing-2xl h-[65px] w-[330px]">
            <Image
              src={FLOWCHART_ACTION_PILL_1}
              alt="Pílula de ação do fluxograma"
              fill
              sizes="(min-width: 1024px) 330px, 60vw"
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


