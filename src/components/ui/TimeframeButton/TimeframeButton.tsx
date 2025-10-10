'use client';

import React from 'react';

export type TimeframeButtonState = 'default' | 'active' | 'neutral';
export type TimeframeButtonSize = 'md';

export interface TimeframeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: TimeframeButtonState;
  size?: TimeframeButtonSize;
  children?: React.ReactNode;
}

const sizeClasses: Record<TimeframeButtonSize, string> = {
  // Figma: pill with horizontal padding = spacing-md and total height ~26px; text = xs/semibold
  md: 'h-[26px] px-spacing-md text-text-xs font-semibold',
};

/**
 * TimeframeButton
 * A pill button used for timeframe selection. Has default and active variants with hover states.
 */
export const TimeframeButton = React.forwardRef<HTMLButtonElement, TimeframeButtonProps>(
  (
    { state = 'default', size = 'md', className = '', children, ...props },
    ref
  ) => {
    const base = [
      'inline-flex items-center justify-center rounded-full transition-all duration-200 ease-in-out select-none touch-manipulation',
      sizeClasses[size],
    ];

    const variantClasses: Record<TimeframeButtonState, string> = {
      default:
        'bg-white text-text-primary border border-border-primary shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-bg-primary-hover hover:text-text-secondary-hover',
      active:
        'bg-bg-brand-solid text-text-white border border-transparent shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-bg-brand-solid-hover',
      neutral:
        'bg-bg-secondary-subtle text-text-secondary border border-transparent hover:text-text-primary',
    };

    const classes = [
      ...base,
      variantClasses[state],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

TimeframeButton.displayName = 'TimeframeButton';

export default TimeframeButton;


