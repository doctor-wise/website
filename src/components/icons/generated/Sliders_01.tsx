import React from 'react';

interface Sliders_01Props {
  size?: number;
  className?: string;
}

export const Sliders_01: React.FC<Sliders_01Props> = ({ 
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
      <path d="M5 21V14M5 10V3M12 21V12M12 8V3M19 21V16M19 12V3M2 14H8M9 8H15M16 16H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
