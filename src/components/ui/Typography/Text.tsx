'use client';

import React from 'react';

export type TextVariant = 'body' | 'caption' | 'overline' | 'eyebrow' | 'code';
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: TextVariant;
  size?: TextSize;
  weight?: TextWeight;
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'brand' | 'white' | 'error' | 'success' | 'warning';
  align?: 'start' | 'center' | 'end';
  truncate?: boolean;
  noWrap?: boolean;
  className?: string;
  children: React.ReactNode;
}

const sizeClassMap: Record<TextSize, string> = {
  xs: 'text-text-xs',
  sm: 'text-text-sm',
  md: 'text-text-md',
  lg: 'text-text-lg',
  xl: 'text-text-xl'
};

const weightClassMap: Record<TextWeight, string> = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
};

const alignClassMap = {
  start: 'text-left',
  center: 'text-center',
  end: 'text-right'
} as const;

const colorClassMap = {
  primary: 'text-text-primary',
  secondary: 'text-text-secondary',
  tertiary: 'text-text-tertiary',
  quaternary: 'text-text-quaternary',
  brand: 'text-text-brand-primary',
  white: 'text-text-white',
  error: 'text-text-error-primary',
  success: 'text-text-success-primary',
  warning: 'text-text-warning-primary'
} as const;

const variantDefaultSize: Record<TextVariant, TextSize> = {
  body: 'md',
  caption: 'sm',
  overline: 'xs',
  eyebrow: 'sm',
  code: 'sm'
};

export const Text = ({
  as = 'p',
  variant = 'body',
  size,
  weight = 'regular',
  color = 'primary',
  align = 'start',
  truncate = false,
  noWrap = false,
  className = '',
  children,
  ...props
}: TextProps) => {
  const Component = as;
  const resolvedSize = size || variantDefaultSize[variant];

  const classes = [
    sizeClassMap[resolvedSize],
    weightClassMap[weight],
    alignClassMap[align],
    colorClassMap[color],
    variant === 'overline' && 'uppercase tracking-wide',
    variant === 'eyebrow' && 'uppercase tracking-wide text-text-secondary',
    variant === 'code' && 'font-mono tabular-nums',
    truncate && 'truncate',
    noWrap && 'text-nowrap',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

Text.displayName = 'Text';


