import React from 'react';

interface Expand_02Props {
  size?: number;
  className?: string;
}

export const Expand_02: React.FC<Expand_02Props> = ({ 
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
      <path d="M3 21L21 3M3 21H9M3 21L3 15M21 3H15M21 3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
