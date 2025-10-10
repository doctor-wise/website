'use client';

import React from 'react';
import { Tooltip } from '@/components/ui';
import { Icon } from '@/components/icons';

export interface MetricsCardProps {
  label: React.ReactNode;
  value: React.ReactNode;
  secondaryValue?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  helpContent?: React.ReactNode;
  loading?: boolean;
}

function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

export function MetricsCard({
  label,
  value,
  secondaryValue,
  align = 'left',
  className = '',
  helpContent,
  loading = false,
}: MetricsCardProps) {
  const containerAlignment =
    align === 'center'
      ? 'items-center text-center'
      : align === 'right'
      ? 'items-end text-right'
      : 'items-start text-left';

  return (
    <section
      className={cn(
        'bg-bg-primary rounded-3xl border border-border-secondary',
        'shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]',
        'px-spacing-xl pt-spacing-xl pb-spacing-2xl',
        'flex flex-col gap-spacing-md',
        className,
      )}
    >
      <div className={cn('flex w-full items-start justify-between')}>
        <span className="text-text-xs font-semibold text-text-quaternary">{label}</span>
        {helpContent && (
          <Tooltip content={helpContent} side="left">
            <button
              type="button"
              className="inline-flex h-5 w-5 items-center justify-center rounded-full text-text-quaternary hover:text-text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-brand"
              aria-label="Help"
            >
              <Icon name="help_circle" size="sm" />
            </button>
          </Tooltip>
        )}
      </div>

      <div className={cn('flex flex-col w-full', containerAlignment)}>
        {loading ? (
          <div className="flex flex-col gap-spacing-xs w-full">
            <div className="h-7 bg-bg-secondary rounded animate-pulse w-2/3" />
            <div className="h-4 bg-bg-secondary rounded animate-pulse w-1/3" />
          </div>
        ) : (
          <div className="flex flex-col gap-spacing-xs">
            <span className="text-display-sm font-semibold text-text-primary leading-[38px]">
              {value}
            </span>
            {secondaryValue && (
              <span className="text-text-md font-medium text-text-tertiary leading-[24px]">
                {secondaryValue}
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default MetricsCard;


