import React from 'react';

interface Percent_01Props {
  size?: number;
  className?: string;
}

export const Percent_01: React.FC<Percent_01Props> = ({ 
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
      <path d="M19 5L5 19M7.5 6.5C7.5 7.05228 7.05228 7.5 6.5 7.5C5.94772 7.5 5.5 7.05228 5.5 6.5C5.5 5.94772 5.94772 5.5 6.5 5.5C7.05228 5.5 7.5 5.94772 7.5 6.5ZM18.5 17.5C18.5 18.0523 18.0523 18.5 17.5 18.5C16.9477 18.5 16.5 18.0523 16.5 17.5C16.5 16.9477 16.9477 16.5 17.5 16.5C18.0523 16.5 18.5 16.9477 18.5 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
