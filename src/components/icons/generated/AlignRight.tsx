import React from 'react';

interface AlignRightProps {
  size?: number;
  className?: string;
}

export const AlignRight: React.FC<AlignRightProps> = ({ 
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
      <path d="M21 10H8M21 6H4M21 14H4M21 18H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
