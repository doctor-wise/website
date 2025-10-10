import React from 'react';

interface ChevronSelectorHorizontalProps {
  size?: number;
  className?: string;
}

export const ChevronSelectorHorizontal: React.FC<ChevronSelectorHorizontalProps> = ({ 
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
      <path d="M9 7L4 12L9 17M15 7L20 12L15 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
