'use client';

import React from 'react';
import Image from 'next/image';
import { Icon } from '@/components/icons';

// Check item component for reusability
function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-spacing-lg items-start w-full">
      <div className="shrink-0 size-7 flex items-center justify-center">
        <Icon name="check_circle" size="md" className="text-brand-600" />
      </div>
      <div className="flex-1">
        <p className="text-text-lg text-text-tertiary">{children}</p>
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
  return (
    <section id="detailed-features-section" className="bg-bg-primary w-full py-spacing-7xl overflow-hidden">
      {/* Heading */}
      <div className="max-w-3xl mx-auto px-spacing-4xl mb-spacing-9xl">
        <div className="flex flex-col gap-spacing-2xl items-center text-center">
          <h2 className="text-display-md font-semibold tracking-[-0.02em] text-text-primary">
            Porque se tornar um embaixador{' '}
            <span className="text-brand-500">Doctor Wise?</span>
          </h2>
        </div>
      </div>

      {/* Feature Block 1: PLUS Access */}
      <div className="max-w-3xl mx-auto px-spacing-4xl mb-spacing-9xl">
        <div className="flex gap-spacing-9xl items-center">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col gap-spacing-4xl">
            <div className="flex flex-col gap-spacing-2xl">
              <PlanTag />
              <div className="flex flex-col gap-spacing-xl">
                <h3 className="text-display-sm font-semibold text-text-primary">
                  Acesso grátis à <span className="font-bold">Doctor Wise PLUS</span>
                </h3>
                <p className="text-text-lg text-text-tertiary">
                  <span className="font-bold">Use a Doctor Wise de forma ilimitada</span> no nosso plano PLUS, mebaixadores que fizerem ao menos duas vendas por mês ganham acesso ao <span className="font-bold">Doctor Wise PRO</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-spacing-2xl pl-spacing-xl">
              <CheckItem>
                Acesso ilimitado ao plano <span className="font-bold">PLUS.</span>
              </CheckItem>
              <CheckItem>
                Acesso <span className="font-bold">prioritário ao suporte.</span>
              </CheckItem>
            </div>
          </div>

          {/* Right: iPhone Mockup */}
          <div className="flex-1 h-[512px] relative">
            <div className="absolute inset-0 bg-bg-tertiary rounded-5xl overflow-hidden">
              <div className="absolute left-[48px] top-[48px] w-[473px] h-[464px]">
                <Image
                  src="/images/iPhone_Mockup-PLUS-1.png"
                  alt="Doctor Wise PLUS no iPhone"
                  width={473}
                  height={932}
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Block 2: Commission & Prizes */}
      <div className="max-w-3xl mx-auto px-spacing-4xl mb-spacing-9xl">
        <div className="flex gap-spacing-9xl items-center">
          {/* Left: iPhone 17 Image */}
          <div className="flex-1 h-[512px] relative">
            <div className="absolute inset-0 bg-bg-tertiary rounded-5xl overflow-hidden">
              <div className="absolute right-[48px] top-[48px] w-[512px] h-[464px]">
                <Image
                  src="/images/iphone_17-1.png"
                  alt="iPhone 17"
                  width={512}
                  height={885}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 flex flex-col gap-spacing-4xl">
            <div className="flex flex-col gap-spacing-2xl">
              <div className="size-12 bg-brand-secondary rounded-full flex items-center justify-center shrink-0">
                <Icon name="bank_note_03" size="md" className="text-brand-600" />
              </div>
              <div className="flex flex-col gap-spacing-xl">
                <h3 className="text-display-sm font-semibold text-text-primary">
                  10% de comissão e<br />prêmios como um iPhone 17.
                </h3>
                <p className="text-text-lg text-text-tertiary">
                  Compartilhe seu link de vendas ou cupom e receba 10% de comissão sobre todas as assinaturas e renovações. Além disso premiamos todos os meses os <span className="font-bold">embaixadores com melhor desempenho. Prêmios podem ser em dinheiro ou até mesmo um iPhone de última geração.</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-spacing-2xl pl-spacing-xl">
              <CheckItem>
                Acumule ganhos em <span className="font-bold">renda passiva.</span>
              </CheckItem>
              <CheckItem>
                Ganhe premios como <span className="font-bold">um iPhone 17.</span>
              </CheckItem>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Block 3: Dashboard Tracking */}
      <div className="max-w-3xl mx-auto px-spacing-4xl">
        <div className="flex gap-spacing-9xl items-center">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col gap-spacing-4xl">
            <div className="flex flex-col gap-spacing-2xl">
              <div className="size-12 bg-brand-secondary rounded-full flex items-center justify-center shrink-0">
                <Icon name="chart_breakout_square" size="md" className="text-brand-600" />
              </div>
              <div className="flex flex-col gap-spacing-xl">
                <h3 className="text-display-sm font-semibold text-text-primary">
                  Acompanhe seus resultados em tempo real com o nosso painel de controle de embaixadores
                </h3>
                <p className="text-text-lg text-text-tertiary">
                  Acesse seu dashboard e <span className="font-bold">veja todas as pessoas que usaram seu cupom ou link de vendas</span>, veja como suas ações estão gerando impacto e aprenda como melhorar.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Screenshot */}
          <div className="flex-1 h-[512px] relative">
            <div className="absolute inset-0 bg-bg-tertiary rounded-5xl overflow-hidden">
              <div className="absolute left-[48px] top-[51px] w-[605px] h-[410px]">
                <Image
                  src="/images/emb-dashboard-img7.png"
                  alt="Painel de controle de embaixadores"
                  width={605}
                  height={410}
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

