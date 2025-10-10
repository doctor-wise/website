import React from 'react';

interface BarChart_05Props {
  size?: number;
  className?: string;
}

export const BarChart_05: React.FC<BarChart_05Props> = ({ 
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
      <path d="M3 17V21M15 8V21M9 13V21M21 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
