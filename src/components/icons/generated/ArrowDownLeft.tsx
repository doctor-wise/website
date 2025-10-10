import React from 'react';

interface ArrowDownLeftProps {
  size?: number;
  className?: string;
}

export const ArrowDownLeft: React.FC<ArrowDownLeftProps> = ({ 
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
      <path d="M17 7L7 17M7 17H17M7 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
