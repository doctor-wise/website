'use client';

import React from 'react';

export type MonthPillState = 'active' | 'inactive';

export interface MonthPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: MonthPillState;
  children: React.ReactNode; // formatted month like "Out/25"
}

/**
 * MonthPill
 * Visual pill used in month pagination per Figma.
 * - Inactive: subtle gray background, secondary text, no border
 * - Active: white background with subtle elevation, brand text
 */
export const MonthPill = React.forwardRef<HTMLButtonElement, MonthPillProps>(
  ({ state = 'inactive', className = '', children, ...props }, ref) => {
    const base = [
      'inline-flex items-center justify-center rounded-3xl',
      'h-9 px-spacing-lg',
      'text-text-sm font-semibold',
      'cursor-pointer',
      'transition-all duration-200 ease-in-out select-none touch-manipulation',
    ];

    const variant =
      state === 'active'
        ? 'bg-bg-primary-hover text-text-primary'
        : 'bg-transparent text-text-secondary hover:text-text-primary';

    const classes = [...base, variant, className].filter(Boolean).join(' ');

    return (
      <button ref={ref} type="button" className={classes} {...props}>
        {children}
      </button>
    );
  }
);

MonthPill.displayName = 'MonthPill';

export default MonthPill;


