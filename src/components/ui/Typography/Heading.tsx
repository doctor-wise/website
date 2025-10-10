'use client';

import React from 'react';

export type HeadingSize =
  | 'display-2xl'
  | 'display-xl'
  | 'display-lg'
  | 'display-md'
  | 'display-sm'
  | 'display-xs';

export type HeadingAlign = 'start' | 'center' | 'end';
export type HeadingWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  size?: HeadingSize;
  align?: HeadingAlign;
  weight?: HeadingWeight;
  color?: 'primary' | 'secondary' | 'tertiary' | 'brand' | 'white';
  leading?: 'tight' | 'normal' | 'loose';
  className?: string;
  children: React.ReactNode;
}

const sizeClassMap: Record<HeadingSize, string> = {
  'display-2xl': 'text-display-2xl',
  'display-xl': 'text-display-xl',
  'display-lg': 'text-display-lg',
  'display-md': 'text-display-md',
  'display-sm': 'text-display-sm',
  'display-xs': 'text-display-xs'
};

const weightClassMap: Record<HeadingWeight, string> = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
};

const alignClassMap: Record<HeadingAlign, string> = {
  start: 'text-left',
  center: 'text-center',
  end: 'text-right'
};

const colorClassMap = {
  primary: 'text-text-primary',
  secondary: 'text-text-secondary',
  tertiary: 'text-text-tertiary',
  brand: 'text-text-brand-primary',
  white: 'text-text-white'
} as const;

const leadingClassMap = {
  tight: 'leading-tight',
  normal: '',
  loose: 'leading-loose'
} as const;

export const Heading = ({
  as = 'h2',
  size = 'display-md',
  align = 'start',
  weight = 'semibold',
  color = 'primary',
  leading = 'normal',
  className = '',
  children,
  ...props
}: HeadingProps) => {
  const Component = as;
  const classes = [
    sizeClassMap[size],
    weightClassMap[weight],
    alignClassMap[align],
    colorClassMap[color],
    leadingClassMap[leading],
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

Heading.displayName = 'Heading';


