'use client';

import React from 'react';
import Image from 'next/image';

interface LogoMarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  alt?: string;
}

const sizeMap = {
  sm: 24,
  md: 32,
  lg: 48,
  xl: 56,
};

export const LogoMark: React.FC<LogoMarkProps> = ({ 
  size = 'md', 
  className = '',
  alt = 'Doctor Wise'
}) => {
  const dimension = sizeMap[size];

  return (
    <div 
      className={`inline-block ${className}`}
      style={{ 
        width: dimension, 
        height: dimension,
        lineHeight: 0,
        fontSize: 0
      }}
    >
      <Image 
        src="/Assets/logos/Logomark.svg"
        alt={alt}
        width={dimension}
        height={dimension}
        priority
        className="block"
      />
    </div>
  );
};