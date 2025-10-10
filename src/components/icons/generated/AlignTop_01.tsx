import React from 'react';

interface AlignTop_01Props {
  size?: number;
  className?: string;
}

export const AlignTop_01: React.FC<AlignTop_01Props> = ({ 
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
      <path d="M21 3H3M12 21V7M12 7L5 14M12 7L19 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
