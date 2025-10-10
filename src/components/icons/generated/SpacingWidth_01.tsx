import React from 'react';

interface SpacingWidth_01Props {
  size?: number;
  className?: string;
}

export const SpacingWidth_01: React.FC<SpacingWidth_01Props> = ({ 
  size = 24, 
  className = '' 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M6 12H18M6 12L8 9M6 12L8 15M18 12L16 9M18 12L16 15M21 21V3M3 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
