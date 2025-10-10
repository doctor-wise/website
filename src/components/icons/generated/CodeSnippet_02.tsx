import React from 'react';

interface CodeSnippet_02Props {
  size?: number;
  className?: string;
}

export const CodeSnippet_02: React.FC<CodeSnippet_02Props> = ({ 
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
      <path d="M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
