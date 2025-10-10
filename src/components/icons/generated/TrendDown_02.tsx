import React from 'react';

interface TrendDown_02Props {
  size?: number;
  className?: string;
}

export const TrendDown_02: React.FC<TrendDown_02Props> = ({ 
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
      <path d="M7 7L17 17M17 17V7M17 17H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
