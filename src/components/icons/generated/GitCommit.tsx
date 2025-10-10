import React from 'react';

interface GitCommitProps {
  size?: number;
  className?: string;
}

export const GitCommit: React.FC<GitCommitProps> = ({ 
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
      <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12M16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12M16 12H22M8 12H2.0002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
