import React from 'react';

interface CornerUpRightProps {
  size?: number;
  className?: string;
}

export const CornerUpRight: React.FC<CornerUpRightProps> = ({ 
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
      <path d="M4 20V18.6C4 15.2397 4 13.5595 4.65396 12.2761C5.2292 11.1471 6.14708 10.2292 7.27606 9.65396C8.55953 9 10.2397 9 13.6 9H20M20 9L15 14M20 9L15 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
