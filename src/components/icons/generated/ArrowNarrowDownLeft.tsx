import React from 'react';

interface ArrowNarrowDownLeftProps {
  size?: number;
  className?: string;
}

export const ArrowNarrowDownLeft: React.FC<ArrowNarrowDownLeftProps> = ({ 
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
      <path d="M18 6L6 18M6 18H14M6 18V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
