import React from 'react';

interface CurrencyYenProps {
  size?: number;
  className?: string;
}

export const CurrencyYen: React.FC<CurrencyYenProps> = ({ 
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
      <path d="M12 20.5V11.5M12 11.5L18.5001 3.5M12 11.5L5.50014 3.5M18 11.5H6M17 15.5H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
