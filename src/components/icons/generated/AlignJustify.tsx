import React from 'react';

interface AlignJustifyProps {
  size?: number;
  className?: string;
}

export const AlignJustify: React.FC<AlignJustifyProps> = ({ 
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
      <path d="M21 10H3M21 18H3M21 6H3M21 14H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
