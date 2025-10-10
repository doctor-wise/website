import React from 'react';

interface BarChart_04Props {
  size?: number;
  className?: string;
}

export const BarChart_04: React.FC<BarChart_04Props> = ({ 
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
      <path d="M3 11L3 21M15 11L15 21M9 3L9 21M21 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
