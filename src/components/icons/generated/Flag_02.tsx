import React from 'react';

interface Flag_02Props {
  size?: number;
  className?: string;
}

export const Flag_02: React.FC<Flag_02Props> = ({ 
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
      <path d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V4C20 4 19 5 16 5C13 5 11 3 8 3C5 3 4 4 4 4M4 22L4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
