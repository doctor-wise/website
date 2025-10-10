import React from 'react';

interface ChevronRightDoubleProps {
  size?: number;
  className?: string;
}

export const ChevronRightDouble: React.FC<ChevronRightDoubleProps> = ({ 
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
      <path d="M6 17L11 12L6 7M13 17L18 12L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
