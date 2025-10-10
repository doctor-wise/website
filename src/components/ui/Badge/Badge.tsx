'use client';

import React from 'react';

export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeTone =
  | 'gray'
  | 'brand'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'pink'
  | 'purple';
export type BadgeVariant = 'soft' | 'outline' | 'solid';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: BadgeSize;
  tone?: BadgeTone;
  variant?: BadgeVariant;
  leadingDot?: boolean;
}

const sizeClasses: Record<BadgeSize, string> = {
  // Figma: xs 12/18, sm 14/20, md 16/24 paired with subtle vertical paddings
  sm: 'text-text-xs px-spacing-md py-spacing-xxs rounded-full',
  md: 'text-text-sm px-spacing-lg py-spacing-xxs rounded-full',
  lg: 'text-text-sm px-spacing-lg py-spacing-xs rounded-full',
};

// Helpers to build color classes per tone/variant using existing tokens
const palette = {
  gray: {
    text: 'text-text-secondary',
    fg: 'text-fg-secondary',
    bgSoft: 'bg-bg-secondary-subtle',
    bgSolid: 'bg-bg-secondary',
    border: 'border-border-secondary',
  },
  brand: {
    text: 'text-text-brand-tertiary',
    fg: 'text-fg-brand-secondary',
    bgSoft: 'bg-bg-brand-primary',
    bgSolid: 'bg-bg-brand-secondary',
    border: 'border-border-brand',
  },
  blue: {
    text: 'text-[#1d4ed8]',
    fg: 'text-[#1d4ed8]',
    bgSoft: 'bg-[#eff6ff]',
    bgSolid: 'bg-[#dbeafe]',
    border: 'border-[#bfdbfe]',
  },
  green: {
    text: 'text-[#067647]',
    fg: 'text-[#067647]',
    bgSoft: 'bg-[#ecfdf3]',
    bgSolid: 'bg-[#dcfae6]',
    border: 'border-[#abefc6]',
  },
  yellow: {
    text: 'text-[#b54708]',
    fg: 'text-[#b54708]',
    bgSoft: 'bg-[#fffaeb]',
    bgSolid: 'bg-[#fef0c7]',
    border: 'border-[#fedf89]',
  },
  orange: {
    text: 'text-[#93370d]',
    fg: 'text-[#93370d]',
    bgSoft: 'bg-[#fffcf5]',
    bgSolid: 'bg-[#fef3c7]/50',
    border: 'border-[#fbbf24]/50',
  },
  red: {
    text: 'text-text-error-primary',
    fg: 'text-text-error-primary',
    bgSoft: 'bg-bg-error-primary',
    bgSolid: 'bg-bg-error-secondary',
    border: 'border-border-error-subtle',
  },
  pink: {
    text: 'text-[#c026d3]',
    fg: 'text-[#c026d3]',
    bgSoft: 'bg-[#fdf4ff]',
    bgSolid: 'bg-[#fae8ff]',
    border: 'border-[#f5d0fe]',
  },
  purple: {
    text: 'text-[#7c3aed]',
    fg: 'text-[#7c3aed]',
    bgSoft: 'bg-[#f5f3ff]',
    bgSolid: 'bg-[#ede9fe]',
    border: 'border-[#ddd6fe]',
  },
} as const;

const variantClasses = (
  tone: BadgeTone,
  variant: BadgeVariant,
): string => {
  const t = palette[tone];
  if (variant === 'soft') {
    // Soft badges have a subtle background and a visible tone border
    return `${t.bgSoft} ${t.text} border ${t.border}`;
  }
  if (variant === 'outline') {
    // Outline badges are transparent with a stronger foreground text and tone border
    return `bg-transparent ${t.fg} border ${t.border}`;
  }
  // solid
  return `${t.bgSolid} ${t.fg} border border-transparent`;
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { size = 'md', tone = 'gray', variant = 'soft', className = '', children, leadingDot = false, ...rest },
  ref,
) {
  const base = [
    'inline-flex items-center gap-spacing-sm font-medium select-none text-nowrap',
    sizeClasses[size],
    variantClasses(tone, variant),
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span ref={ref} className={base} {...rest}>
      {leadingDot && (
        <span className="inline-block size-1.5 rounded-full bg-current" aria-hidden />
      )}
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';


