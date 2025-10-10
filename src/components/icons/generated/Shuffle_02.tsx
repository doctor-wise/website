import React from 'react';

interface Shuffle_02Props {
  size?: number;
  className?: string;
}

export const Shuffle_02: React.FC<Shuffle_02Props> = ({ 
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
      <path d="M21 16V21M21 21H16M21 21L15 15M3 3L9 9M16 3H21M21 3V8M21 3L3 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
