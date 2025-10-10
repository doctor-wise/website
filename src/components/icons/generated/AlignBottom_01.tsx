import React from 'react';

interface AlignBottom_01Props {
  size?: number;
  className?: string;
}

export const AlignBottom_01: React.FC<AlignBottom_01Props> = ({ 
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
      <path d="M3 21H21M12 3V17M12 17L19 10M12 17L5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
