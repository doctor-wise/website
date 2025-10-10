import React from 'react';

interface BluetoothOffProps {
  size?: number;
  className?: string;
}

export const BluetoothOff: React.FC<BluetoothOffProps> = ({ 
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
      <path d="M6 17L12 12V22L17.4398 17.4668M12 7V2L18 7L15.0817 9.43194M21 21L3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
