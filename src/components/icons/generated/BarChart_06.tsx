import React from 'react';

interface BarChart_06Props {
  size?: number;
  className?: string;
}

export const BarChart_06: React.FC<BarChart_06Props> = ({ 
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
      <path d="M9 8V21M21 17V21M3 3V21M15 13V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
