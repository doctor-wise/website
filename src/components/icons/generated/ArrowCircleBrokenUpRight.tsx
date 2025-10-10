import React from 'react';

interface ArrowCircleBrokenUpRightProps {
  size?: number;
  className?: string;
}

export const ArrowCircleBrokenUpRight: React.FC<ArrowCircleBrokenUpRightProps> = ({ 
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
      <path d="M2.33944 14.5895C1.44852 11.2533 2.3117 7.54618 4.92899 4.92888C8.83424 1.02364 15.1659 1.02364 19.0711 4.92888C22.9764 8.83413 22.9764 15.1658 19.0711 19.071C16.4538 21.6883 12.7467 22.5515 9.41051 21.6606M15.0002 15.0001V9.00005M15.0002 9.00005H9.0002M15.0002 9.00005L5.00001 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
