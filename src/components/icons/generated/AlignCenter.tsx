import React from 'react';

interface AlignCenterProps {
  size?: number;
  className?: string;
}

export const AlignCenter: React.FC<AlignCenterProps> = ({ 
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
      <path d="M18 10H6M21 6H3M21 14H3M18 18H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
