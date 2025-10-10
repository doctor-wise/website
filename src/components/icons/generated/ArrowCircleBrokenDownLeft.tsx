import React from 'react';

interface ArrowCircleBrokenDownLeftProps {
  size?: number;
  className?: string;
}

export const ArrowCircleBrokenDownLeft: React.FC<ArrowCircleBrokenDownLeftProps> = ({ 
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
      <path d="M9.00017 9.00005V15.0001M9.00017 15.0001H15.0002M9.00017 15.0001L19 5M21.6606 9.41049C22.5515 12.7467 21.6883 16.4538 19.071 19.0711C15.1658 22.9764 8.83412 22.9764 4.92887 19.0711C1.02363 15.1659 1.02363 8.83422 4.92887 4.92898C7.54616 2.31168 11.2533 1.4485 14.5895 2.33943" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
