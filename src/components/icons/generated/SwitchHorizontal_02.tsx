import React from 'react';

interface SwitchHorizontal_02Props {
  size?: number;
  className?: string;
}

export const SwitchHorizontal_02: React.FC<SwitchHorizontal_02Props> = ({ 
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
      <path d="M4 17H20M20 17L16 13M20 17L16 21M20 7H4M4 7L8 3M4 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
