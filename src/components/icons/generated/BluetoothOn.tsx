import React from 'react';

interface BluetoothOnProps {
  size?: number;
  className?: string;
}

export const BluetoothOn: React.FC<BluetoothOnProps> = ({ 
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
      <path d="M6 7L18 17L12 22V2L18 7L6 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
