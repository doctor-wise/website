'use client';

import React from 'react';
import { Icon, IconName } from '@/components/icons';
import Link from 'next/link';

export interface SideNavItemProps extends React.HTMLAttributes<HTMLElement> {
  icon: IconName;
  label: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  badge?: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  chevron?: boolean;
}

export const SideNavItem = React.forwardRef<HTMLElement, SideNavItemProps>(({ 
  icon,
  label,
  active = false,
  disabled = false,
  badge,
  as,
  href,
  target,
  rel,
  chevron = false,
  className = '',
  ...rest
}, ref) => {
  const Component: React.ElementType = as ?? (href ? Link : 'button');

  const linkOnlyProps = href ? { target, rel } : {};

  const baseClasses = [
    'group',
    'w-full',
    'inline-flex items-center',
    'justify-start h-10 px-spacing-lg gap-spacing-md',

    'rounded-3xl',
    'appearance-none',

    // base
    'bg-bg-primary',
    'text-text-secondary',
    'transition-colors duration-200 ease-in-out',
    'select-none touch-manipulation',

    // hover only when not active/disabled
    !disabled && !active && 'hover:bg-bg-primary-hover hover:text-text-secondary-hover',

    // ACTIVE — keep it on hover/focus too
    active && '!bg-bg-active text-text-secondary-hover',
    active && 'hover:!bg-bg-active focus-visible:!bg-bg-active',

    // focus ring (no bg here when active)
    !active && 'focus-visible:bg-bg-primary',
    'focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#0072e5]',

    disabled && 'opacity-50 cursor-not-allowed',

    // Put className earlier if callers might pass their own bg-*
    // Move this ABOVE active styles if you want your component to win
    className,
  ].filter(Boolean).join(' ');

  const iconClasses = [
    'shrink-0',
    'text-fg-quaternary',
    'transition-colors',
    !disabled && 'group-hover:text-fg-quaternary-hover',
    active && 'text-fg-secondary-hover'
  ].filter(Boolean).join(' ');

  const labelClasses = [
    'truncate',
    'text-text-md',
    'font-semibold'
  ].join(' ');

  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      className={baseClasses}
      href={href}
      {...linkOnlyProps}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      <Icon name={icon} size="sm" className={iconClasses} />
      <span className={labelClasses}>{label}</span>
      {badge != null && (
        <span className="ml-auto inline-flex items-center rounded-full bg-bg-secondary-subtle text-text-xs text-text-tertiary px-spacing-sm py-[2px]">
          {badge}
        </span>
      )}
      {chevron && (
        <Icon name="chevron_down" size="sm" className="ml-auto text-fg-quaternary group-hover:text-fg-quaternary-hover" aria-label="expand" />
      )}
    </Component>
  );
});


SideNavItem.displayName = 'SideNavItem';


