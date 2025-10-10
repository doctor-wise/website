'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';

export type PricingMode = 'mensal' | 'anual';

export interface PricingModeToggleProps {
  value?: PricingMode;
  defaultValue?: PricingMode;
  onChange?: (value: PricingMode) => void;
  className?: string;
}

/**
 * PricingModeToggle
 * Replicates the Mensal/Anual radio-pill control from Figma (node 13332:4197).
 * Uses two pill buttons with brand-focused outline on active and badge for Anual.
 */
export const PricingModeToggle: React.FC<PricingModeToggleProps> = ({
  value,
  defaultValue = 'anual',
  onChange,
  className = '',
}) => {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState<PricingMode>(defaultValue);
  const current = isControlled ? (value as PricingMode) : internal;

  const setValue = (v: PricingMode) => {
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };

  const BasePill: React.FC<{
    active?: boolean;
    children: React.ReactNode;
    onClick: () => void;
    ariaLabel: string;
  }> = ({ active, children, onClick, ariaLabel }) => (
    <button
      type="button"
      aria-pressed={active}
      aria-label={ariaLabel}
      onClick={onClick}
      className={[
        'relative inline-flex items-center justify-between w-[100px]',
        'rounded-full bg-white transition-all duration-200',
        active ? 'border border-border-brand' : 'border border-border-primary shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]',
        'px-spacing-lg py-spacing-md',
        className,
      ].join(' ')}
    >
      <span className={[
        'text-text-sm font-semibold',
        active ? 'text-text-brand-tertiary' : 'text-text-secondary',
      ].join(' ')}>
        {children}
      </span>
      <span className="inline-flex items-center justify-center">
        <span
          className={[
            'relative inline-block rounded-full h-4 w-4',
            active ? 'bg-bg-brand-solid border border-transparent' : 'bg-white border border-border-primary',
          ].join(' ')}
        >
          <span
            className={[
              'absolute rounded-full',
              active ? 'inset-[31%] bg-text-white' : 'hidden',
            ].join(' ')}
          />
        </span>
      </span>
    </button>
  );

  return (
    <div className="relative flex items-center gap-spacing-md">
      <BasePill active={current === 'mensal'} onClick={() => setValue('mensal')} ariaLabel="Mensal">
        Mensal
      </BasePill>

      <div className="relative">
        <BasePill active={current === 'anual'} onClick={() => setValue('anual')} ariaLabel="Anual">
          Anual
        </BasePill>
        <div className="absolute left-1/2 translate-x-[-50%] -bottom-[14px] pointer-events-none select-none">
          <Badge size="sm" tone="brand" variant="soft" className="bg-utility-brand-50 border-utility-brand-200 text-utility-brand-700">50% OFF</Badge>
        </div>
      </div>
    </div>
  );
};

export default PricingModeToggle;


