'use client';

import React from 'react';
import { Icon, IconName } from '@/components/icons';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonHierarchy = 'primary' | 'secondary' | 'tertiary' | 'link-color' | 'link-gray';
export type ButtonState = 'default' | 'hover' | 'focused' | 'disabled' | 'loading';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  hierarchy?: ButtonHierarchy;
  loading?: boolean;
  iconOnly?: boolean;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  asChild?: boolean;
  as?: React.ElementType;
  href?: string; // allow passing href when rendering as anchor/Link
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 text-sm font-semibold',
  md: 'h-10 text-sm font-semibold', 
  lg: 'h-11 text-text-md font-semibold',
  xl: 'h-12 text-text-lg font-semibold'
};

const paddingClasses: Record<ButtonSize, { iconOnly: string; withText: string }> = {
  sm: { iconOnly: 'w-8 px-0', withText: 'px-3' },
  md: { iconOnly: 'w-10 px-0', withText: 'px-4' },
  lg: { iconOnly: 'w-11 px-0', withText: 'px-5' },
  xl: { iconOnly: 'w-12 px-0', withText: 'px-6' }
};

const hierarchyClasses: Record<ButtonHierarchy, {
  base: string;
  hover: string;
  focus: string;
  disabled: string;
}> = {
  primary: {
    base: 'bg-bg-brand-solid text-text-white border border-transparent shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]',
    hover: 'hover:bg-bg-brand-solid-hover hover:shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1)]',
    focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
    disabled: 'disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed disabled:shadow-none disabled:opacity-50'
  },
  secondary: {
    base: 'bg-white border border-border-primary text-text-primary shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]',
    hover: 'hover:bg-gray-50 hover:text-text-secondary-hover hover:shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]',
    focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05),0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#0072e5]',
    disabled: 'disabled:bg-white disabled:border-border-secondary disabled:text-text-disabled disabled:cursor-not-allowed disabled:shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]'
  },
  tertiary: {
    base: 'bg-transparent border border-transparent text-text-secondary',
    hover: 'hover:bg-gray-50 hover:text-text-primary',
    focus: 'focus-visible:outline-none focus-visible:bg-white focus-visible:shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#0072e5]',
    disabled: 'disabled:text-text-disabled disabled:cursor-not-allowed disabled:opacity-50'
  },
  'link-color': {
    base: 'bg-transparent border-none text-text-brand-tertiary-alt p-0 h-auto font-medium',
    hover: 'hover:text-text-brand-secondary hover:underline underline-offset-4',
    focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:rounded-sm',
    disabled: 'disabled:text-text-disabled disabled:cursor-not-allowed disabled:no-underline disabled:opacity-50'
  },
  'link-gray': {
    base: 'bg-transparent border-none text-text-secondary p-0 h-auto font-medium',
    hover: 'hover:text-text-primary hover:underline underline-offset-4',
    focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-secondary focus-visible:ring-offset-2 focus-visible:rounded-sm',
    disabled: 'disabled:text-text-disabled disabled:cursor-not-allowed disabled:no-underline disabled:opacity-50'
  }
};

const iconSizeMap: Record<ButtonSize, 'sm' | 'md' | 'lg' | 'xl'> = {
  sm: 'sm',
  md: 'sm', 
  lg: 'md',
  xl: 'md'
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  size = 'md',
  hierarchy = 'primary',
  loading = false,
  iconOnly = false,
  icon,
  iconPosition = 'left',
  children,
  disabled,
  className = '',
  asChild = false,
  as = 'button',
  ...props
}, ref) => {
  const isDisabled = disabled || loading;
  const isLink = hierarchy === 'link-color' || hierarchy === 'link-gray';
  
  const hierarchyConfig = hierarchyClasses[hierarchy];
  
  const baseClasses = [
    'inline-flex items-center justify-center',
    'transition-all duration-200 ease-in-out',
    'select-none touch-manipulation',
    'cursor-pointer',
    !isLink && 'rounded-full',
    sizeClasses[size],
    iconOnly ? paddingClasses[size].iconOnly : paddingClasses[size].withText,
    hierarchyConfig.base,
    !isDisabled && hierarchyConfig.hover,
    hierarchyConfig.focus,
    isDisabled && hierarchyConfig.disabled,
    className
  ].filter(Boolean).join(' ');

  const iconSize = iconSizeMap[size];
  const hasIcon = icon || loading;
  const hasText = children && !iconOnly;
  const showIcon = hasIcon && !loading;
  const showSpinner = loading;

  const renderIcon = () => {
    if (showSpinner) {
      return (
        <span className="inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
      );
    }
    if (showIcon && icon) {
      return <Icon name={icon} size={iconSize} />;
    }
    return null;
  };

  const renderContent = () => {
    if (iconOnly) {
      return renderIcon();
    }

    const iconElement = renderIcon();
    const gap = hasIcon && hasText ? 'gap-2' : '';

    if (iconPosition === 'right') {
      return (
        <span className={`inline-flex items-center ${gap}`}>
          {children}
          {iconElement}
        </span>
      );
    }

    return (
      <span className={`inline-flex items-center ${gap}`}>
        {iconElement}
        {children}
      </span>
    );
  };

  const Component = asChild ? as : 'button';

  return (
    <Component
      ref={ref}
      className={baseClasses}
      disabled={isDisabled}
      aria-label={iconOnly ? (typeof children === 'string' ? children : undefined) : undefined}
      {...props}
    >
      {renderContent()}
    </Component>
  );
});

Button.displayName = 'Button';