import React from 'react';

interface BluetoothConnectProps {
  size?: number;
  className?: string;
}

export const BluetoothConnect: React.FC<BluetoothConnectProps> = ({ 
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
      <path d="M3 7L15 17L9 22V2L15 7L3 17M18 12H18.01M15 12H15.01M21 12H21.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
