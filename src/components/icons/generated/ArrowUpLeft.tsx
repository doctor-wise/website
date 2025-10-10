import React from 'react';

interface ArrowUpLeftProps {
  size?: number;
  className?: string;
}

export const ArrowUpLeft: React.FC<ArrowUpLeftProps> = ({ 
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
      <path d="M17 17L7 7M7 7V17M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
