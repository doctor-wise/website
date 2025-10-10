import React from 'react';

interface Snowflake_02Props {
  size?: number;
  className?: string;
}

export const Snowflake_02: React.FC<Snowflake_02Props> = ({ 
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
      <path d="M12 8V16M12 8V2M12 8L7 3M12 8L17 3M12 16V22M12 16L7 21M12 16L17 21M16 12H8M16 12H22M16 12L21 7M16 12L21 17M8 12H2M8 12L3 7M8 12L3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
