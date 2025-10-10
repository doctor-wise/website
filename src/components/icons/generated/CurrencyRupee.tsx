import React from 'react';

interface CurrencyRupeeProps {
  size?: number;
  className?: string;
}

export const CurrencyRupee: React.FC<CurrencyRupeeProps> = ({ 
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
      <path d="M6 3H18M6 8H18M14.5 21L6 13H9C15.667 13 15.667 3 9 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
