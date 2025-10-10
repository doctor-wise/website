import React from 'react';

interface SwitchVertical_02Props {
  size?: number;
  className?: string;
}

export const SwitchVertical_02: React.FC<SwitchVertical_02Props> = ({ 
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
      <path d="M7 4V20M7 20L3 16M7 20L11 16M17 20V4M17 4L13 8M17 4L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
