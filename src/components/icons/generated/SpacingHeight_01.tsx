import React from 'react';

interface SpacingHeight_01Props {
  size?: number;
  className?: string;
}

export const SpacingHeight_01: React.FC<SpacingHeight_01Props> = ({ 
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
      <path d="M12 18L12 6M12 18L9 16M12 18L15 16M12 6L9 8M12 6L15 8M21 3H3M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
