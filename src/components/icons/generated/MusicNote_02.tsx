import React from 'react';

interface MusicNote_02Props {
  size?: number;
  className?: string;
}

export const MusicNote_02: React.FC<MusicNote_02Props> = ({ 
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
      <path d="M12 18V5.58885C12 4.73163 12 4.30302 12.1805 4.04489C12.3382 3.81949 12.5817 3.66897 12.8538 3.62877C13.1655 3.58273 13.5488 3.77441 14.3155 4.15777L18 6M12 18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15C10.6569 15 12 16.3431 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
