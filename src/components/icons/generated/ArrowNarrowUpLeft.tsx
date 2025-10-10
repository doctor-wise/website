import React from 'react';

interface ArrowNarrowUpLeftProps {
  size?: number;
  className?: string;
}

export const ArrowNarrowUpLeft: React.FC<ArrowNarrowUpLeftProps> = ({ 
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
      <path d="M18 18L6 6M6 6V14M6 6H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
