import React from 'react';

interface AlignLeft_01Props {
  size?: number;
  className?: string;
}

export const AlignLeft_01: React.FC<AlignLeft_01Props> = ({ 
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
      <path d="M3 3V21M21 12H7M7 12L14 19M7 12L14 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
