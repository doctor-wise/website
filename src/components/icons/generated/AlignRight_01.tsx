import React from 'react';

interface AlignRight_01Props {
  size?: number;
  className?: string;
}

export const AlignRight_01: React.FC<AlignRight_01Props> = ({ 
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
      <path d="M21 21V3M3 12H17M17 12L10 5M17 12L10 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
