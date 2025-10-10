import React from 'react';

interface ChevronLeftDoubleProps {
  size?: number;
  className?: string;
}

export const ChevronLeftDouble: React.FC<ChevronLeftDoubleProps> = ({ 
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
      <path d="M18 17L13 12L18 7M11 17L6 12L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
