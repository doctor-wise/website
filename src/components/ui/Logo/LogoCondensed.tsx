'use client';

import React from 'react';
import Image from 'next/image';

interface LogoCondensedProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  alt?: string;
}

const sizeMap = {
  sm: { width: 100, height: 30 },
  md: { width: 133, height: 40 },
  lg: { width: 166, height: 50 },
  xl: { width: 200, height: 60 },
};

export const LogoCondensed: React.FC<LogoCondensedProps> = ({ 
  variant = 'light',
  size = 'md', 
  className = '',
  alt = 'Doctor Wise'
}) => {
  const dimensions = sizeMap[size];
  const logoSrc = variant === 'dark' 
    ? '/Assets/logos/Condensed_dark-mode.svg'
    : '/Assets/logos/Condensed_bright-mode.svg';

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <Image 
        src={logoSrc}
        alt={alt}
        width={dimensions.width}
        height={dimensions.height}
        priority
        className="block"
        style={{ aspectRatio: '10/3', objectFit: 'contain' }}
      />
    </div>
  );
};