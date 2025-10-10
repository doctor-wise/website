import React from 'react';

interface Hash_01Props {
  size?: number;
  className?: string;
}

export const Hash_01: React.FC<Hash_01Props> = ({ 
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
      <path d="M4 8H20M4 16H20M8 3V21M16 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
