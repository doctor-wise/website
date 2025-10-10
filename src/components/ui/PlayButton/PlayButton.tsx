'use client';

import React from 'react';
import Image from 'next/image';

export interface PlayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap: Record<NonNullable<PlayButtonProps['size']>, number> = {
  sm: 40,
  md: 64,
  lg: 80
};

export function PlayButton({ size = 'md', className = '', ...props }: PlayButtonProps) {
  const px = sizeMap[size];
  return (
    <button
      type="button"
      aria-label="Play"
      className={[
        'backdrop-blur bg-fg-white/30',
        'rounded-full inline-flex items-center justify-center',
        'shadow-[0_1px_2px_rgba(10,13,18,0.08)]',
        className
      ].filter(Boolean).join(' ')}
      style={{ width: px, height: px }}
      {...props}
    >
      <Image
        src="/Assets/Misc-assets/play-icon.svg"
        alt=""
        width={20}
        height={20}
        priority
      />
    </button>
  );
}

export default PlayButton;


