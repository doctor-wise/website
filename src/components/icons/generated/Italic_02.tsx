import React from 'react';

interface Italic_02Props {
  size?: number;
  className?: string;
}

export const Italic_02: React.FC<Italic_02Props> = ({ 
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
      <path d="M13.25 4L7.25 20M16.75 4L10.75 20M19.5 4L9.5 4M14.5 20H4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
