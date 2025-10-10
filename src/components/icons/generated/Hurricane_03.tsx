import React from 'react';

interface Hurricane_03Props {
  size?: number;
  className?: string;
}

export const Hurricane_03: React.FC<Hurricane_03Props> = ({ 
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
      <path d="M21 4H3M20 8L6 8M18 12L9 12M15 16L8 16M17 20H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
