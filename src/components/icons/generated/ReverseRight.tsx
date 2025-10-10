import React from 'react';

interface ReverseRightProps {
  size?: number;
  className?: string;
}

export const ReverseRight: React.FC<ReverseRightProps> = ({ 
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
      <path d="M20 7H10C6.68629 7 4 9.68629 4 13C4 16.3137 6.68629 19 10 19H20M20 7L16 3M20 7L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
