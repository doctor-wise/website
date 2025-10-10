import React from 'react';

interface ArrowsRightProps {
  size?: number;
  className?: string;
}

export const ArrowsRight: React.FC<ArrowsRightProps> = ({ 
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
      <path d="M4 7H15M15 7L11 11M15 7L11 3M4 17H20M20 17L16 21M20 17L16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
