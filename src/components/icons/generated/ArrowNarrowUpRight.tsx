import React from 'react';

interface ArrowNarrowUpRightProps {
  size?: number;
  className?: string;
}

export const ArrowNarrowUpRight: React.FC<ArrowNarrowUpRightProps> = ({ 
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
      <path d="M6 18L18 6M18 6H10M18 6V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
