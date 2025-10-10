import React from 'react';

interface LetterSpacing_02Props {
  size?: number;
  className?: string;
}

export const LetterSpacing_02: React.FC<LetterSpacing_02Props> = ({ 
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
      <path d="M2 18H22M2 18L5 15M2 18L5 21M22 18L19 15M22 18L19 21M7 3H17M12 3V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
