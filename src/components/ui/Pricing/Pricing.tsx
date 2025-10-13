'use client';

import React from 'react';
import { Heading, Text } from '@/components/ui/Typography';
import Image from 'next/image';
import { PricingModeToggle } from '@/components/ui/Pricing/PricingModeToggle';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/icons';
import { LogoMark } from '@/components/ui/Logo/LogoMark';
import {useTranslations} from 'next-intl';

type Billing = 'mensal' | 'anual';

const PLUS_PRICING = {
  mensal: { price: 'R$38,90', suffixKey: 'billing.monthlySuffix', subKey: 'billing.monthlySub' },
  anual: { price: 'R$229,90', suffixKey: 'billing.yearlySuffix', subKey: 'billing.yearlySubPlus' },
} as const;

const PRO_PRICING = {
  mensal: { price: 'R$69,90', suffixKey: 'billing.monthlySuffix', subKey: 'billing.monthlySub' },
  anual: { price: 'R$419,90', suffixKey: 'billing.yearlySuffix', subKey: 'billing.yearlySubPro' },
} as const;

function BenefitItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-spacing-sm">
      <Icon name="check" size="sm" className="text-fg-brand-secondary" aria-label="benefit" />
      <Text as="p" size="md" color="secondary" className="text-left">{children}</Text>
    </div>
  );
}

function Divider() {
  return <div className="w-full h-px bg-border-tertiary" />;
}

export function Pricing(): React.ReactElement {
  const [billing, setBilling] = React.useState<Billing>('anual');
  const t = useTranslations('Pricing');

  const plus = PLUS_PRICING[billing];
  const pro = PRO_PRICING[billing];

  return (
    <section id="pricing_section" className="w-full max-w-3xl mx-auto bg-bg-primary flex flex-col items-center">

      <div id="pricing_hero_box" className="w-full bg-bg-primary border-t border-border-secondary rounded-t-5xl overflow-hidden">
        <div className="w-full flex flex-col items-center gap-spacing-3xl pt-spacing-7xl pb-spacing-6xl px-spacing-8xl">

          <div id="pricing_header" className="flex flex-col items-center gap-spacing-xl">
            <LogoMark size="md" />
            <Heading as="h3" size="display-md" weight="semibold" align="center" color="secondary">{t('heading')}</Heading>
            <Text as="p" size="sm" color="secondary" align="center">{t('sub')}</Text>
          </div>

          <div id="pricing_button_group" className="flex items-center gap-spacing-md">
            <PricingModeToggle 
              value={billing} 
              onChange={(v) => setBilling(v)} 
              monthlyLabel={t('monthly')}
              yearlyLabel={t('yearly')}
            />
          </div>

          <div id="pricing_cards_wrapper" className="w-full flex gap-spacing-2xl items-stretch">

            <div id="pricing_card_free" className="flex-1 bg-bg-primary border border-border-secondary rounded-5xl">
              <div className="p-spacing-4xl flex flex-col gap-spacing-4xl items-start">
                <div id="tag_wrapper_free" className="h-8 flex items-center">
                  <Image src="/Assets/Misc-assets/Plan-tags/FREE-tag.svg" alt={t('free')} width={100} height={32} className="h-8 w-auto" />
                </div>
                <div id="price_wrapper_free" className="flex flex-col items-start text-left text-text-secondary">
                  <Heading as="p" size="display-lg" weight="bold" color="secondary">R$0,00</Heading>
                  <Text as="p" size="sm">&nbsp;</Text>
                </div>
                <Divider />
                <div id="benefits_free" className="w-full flex flex-col gap-spacing-md">
                  {t.raw('freeBenefits').map((item: string, idx: number) => (
                    <BenefitItem key={idx}>{item}</BenefitItem>
                  ))}
                </div>
              </div>
            </div>

            <div id="pricing_card_plus" className="flex-1 bg-bg-primary border border-border-secondary rounded-5xl">
              <div className="p-spacing-4xl flex flex-col gap-spacing-4xl items-start">
                <div id="tag_plus" className="h-8 inline-flex items-center">
                  <Image src="/Assets/Misc-assets/Plan-tags/PLUS-tag.svg" alt="PLUS" width={100} height={32} className="h-8 w-auto" />
                </div>
                <div id="price_plus" className="flex flex-col items-start text-left text-text-secondary">
                  <p className="leading-none">
                    <span className="font-bold text-display-lg tracking-[-0.02em]">{plus.price}</span>
                    <span className="font-semibold text-text-lg leading-[28px]">{t(plus.suffixKey)}</span>
                  </p>
                  <Text as="p" size="sm">{t(plus.subKey)}</Text>
                </div>
                <Divider />
                <div id="benefits_plus" className="w-full flex flex-col gap-spacing-md">
                  <BenefitItem>{t('plusBenefit1')}</BenefitItem>
                  <BenefitItem>{t('plusBenefit2')}</BenefitItem>
                  <BenefitItem>{t('plusBenefit3')}</BenefitItem>
                  <BenefitItem>{t.rich('plusBenefit4', { small: (c) => <span className="text-text-quaternary">{c}</span> })}</BenefitItem>
                </div>
              </div>
            </div>

            <div id="pricing_card_pro" className="flex-1 bg-bg-primary border border-border-secondary rounded-5xl">
              <div className="p-spacing-4xl flex flex-col gap-spacing-4xl items-start">
                <div id="tag_pro" className="h-8 inline-flex items-center">
                  <Image src="/Assets/Misc-assets/Plan-tags/PRO-tag.svg" alt="PRO" width={100} height={32} className="h-8 w-auto" />
                </div>
                <div id="price_pro" className="flex flex-col items-start text-left text-text-secondary">
                  <p className="leading-none">
                    <span className="font-bold text-display-lg tracking-[-0.02em]">{pro.price}</span>
                    <span className="font-semibold text-text-lg leading-[28px]">{t(pro.suffixKey)}</span>
                  </p>
                  <Text as="p" size="sm">{t(pro.subKey)}</Text>
                </div>
                <Divider />
                <div id="benefits_pro" className="w-full flex flex-col gap-spacing-md">
                  <BenefitItem>{t('proBenefit1')}</BenefitItem>
                  <BenefitItem>{t('proBenefit2')}</BenefitItem>
                  <BenefitItem>{t('proBenefit3')}</BenefitItem>
                  <BenefitItem>{t.rich('proBenefit4', { small: (c) => <span className="text-text-quaternary">{c}</span> })}</BenefitItem>
                  <BenefitItem>{t('proBenefit5')}</BenefitItem>
                </div>
              </div>
            </div>

          </div>

          <div id="pricing_actions" className="w-full flex items-center justify-center gap-spacing-lg">
            <Button hierarchy="secondary" icon="message_square_01" iconPosition="right">{t('ctaEnterprise')}</Button>
            <Button hierarchy="primary" icon="arrow_right" iconPosition="right">{t('ctaAccess')}</Button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;


