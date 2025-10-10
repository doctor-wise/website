import React from 'react';

interface Reflect_02Props {
  size?: number;
  className?: string;
}

export const Reflect_02: React.FC<Reflect_02Props> = ({ 
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
      <path d="M12 3V6M12 10.5V13.5M12 18V21M22 12H15.5M15.5 12L19.5 16M15.5 12L19.5 8M2 12H8.5M8.5 12L4.5 16M8.5 12L4.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
