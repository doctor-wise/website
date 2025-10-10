'use client';

import React from 'react';
import Image from 'next/image';

interface LogoDefaultProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  alt?: string;
}

const sizeMap = {
  sm: { width: 120, height: 30 },
  md: { width: 160, height: 40 },
  lg: { width: 200, height: 50 },
  xl: { width: 240, height: 60 },
};

export const LogoDefault: React.FC<LogoDefaultProps> = ({ 
  variant = 'light',
  size = 'md', 
  className = '',
  alt = 'Doctor Wise'
}) => {
  const dimensions = sizeMap[size];
  const logoSrc = variant === 'dark' 
    ? '/Assets/logos/Default_dark-mode.svg'
    : '/Assets/logos/Default_bright-mode.svg';

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <Image 
        src={logoSrc}
        alt={alt}
        width={dimensions.width}
        height={dimensions.height}
        priority
        className="block"
        style={{ aspectRatio: '4/1', objectFit: 'contain' }}
      />
    </div>
  );
};