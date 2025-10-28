'use client';

import React from 'react';
import { Icon } from '@/components/icons';

export function AmbassadorsFeatures() {
  return (
    <section id="features-section" className="bg-bg-primary w-full py-spacing-7xl px-0 overflow-hidden">
      <div className="max-w-3xl mx-auto px-spacing-4xl">
        <div className="flex flex-wrap gap-spacing-4xl items-start justify-start w-full">
          {/* Feature 1: Ganhe dinheiro */}
          <div className="flex flex-col gap-spacing-xl items-center text-center flex-1 min-w-[320px]">
            <div className="bg-bg-primary border border-border-primary rounded-full size-12 flex items-center justify-center shrink-0">
              <Icon name="coins_01" size="md" className="text-brand-500" />
            </div>
            <div className="flex flex-col gap-spacing-xs items-center w-full">
              <h3 className="text-text-lg font-semibold text-text-primary">
                Ganhe dinheiro com sua rede social
              </h3>
              <p className="text-text-md text-text-tertiary">
                Poste uma vez por semana e compartilhe a Doctor Wise com seus amigos e <span className="font-bold">seja recompensado.</span>
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
                Participe de uma comunidade vibrante
              </h3>
              <p className="text-text-md text-text-tertiary">
                Conecte-se com mais de 300 acadêmicos e profissionais da saúde de todo o país.
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
                Ganhe prêmios mensais
              </h3>
              <p className="text-text-md text-text-tertiary">
                Premiamos todos os meses os melhores embaixadores com valores que vão de R$100 a um iPhone do ano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

