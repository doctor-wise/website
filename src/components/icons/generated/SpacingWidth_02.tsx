import React from 'react';

interface SpacingWidth_02Props {
  size?: number;
  className?: string;
}

export const SpacingWidth_02: React.FC<SpacingWidth_02Props> = ({ 
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
      <path d="M21 21V3M3 21V3M6.5 12H17.5M17.5 15L17.5 9M6.5 15L6.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
