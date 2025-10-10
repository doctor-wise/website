import React from 'react';

interface SpacingHeight_02Props {
  size?: number;
  className?: string;
}

export const SpacingHeight_02: React.FC<SpacingHeight_02Props> = ({ 
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
      <path d="M21 3H3M21 21H3M12 17.5L12 6.50004M15.0001 6.50001L9 6.5M15.0001 17.5L9 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
