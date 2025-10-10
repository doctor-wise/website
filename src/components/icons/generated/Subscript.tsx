import React from 'react';

interface SubscriptProps {
  size?: number;
  className?: string;
}

export const Subscript: React.FC<SubscriptProps> = ({ 
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
      <path d="M3 5L13 15M13 5L3 15M21 19.0001H17C17 17.5001 17.44 17.0001 18.5 16.5001C19.56 16.0001 21 15.3301 21 14.0001C21 13.5301 20.83 13.0701 20.52 12.7101C20.1999 12.3476 19.7649 12.1061 19.2879 12.026C18.811 11.9459 18.321 12.0321 17.9 12.2701C17.48 12.5101 17.16 12.8901 17 13.3401" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
