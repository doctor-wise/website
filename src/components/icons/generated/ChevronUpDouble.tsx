import React from 'react';

interface ChevronUpDoubleProps {
  size?: number;
  className?: string;
}

export const ChevronUpDouble: React.FC<ChevronUpDoubleProps> = ({ 
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
      <path d="M17 18L12 13L7 18M17 11L12 6L7 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
