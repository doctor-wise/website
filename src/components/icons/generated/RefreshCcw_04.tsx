import React from 'react';

interface RefreshCcw_04Props {
  size?: number;
  className?: string;
}

export const RefreshCcw_04: React.FC<RefreshCcw_04Props> = ({ 
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
      <path d="M17 18.8746C19.1213 17.3291 20.5 14.8255 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5H11.5M12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 9.17446 4.87867 6.67093 7 5.1254M11 22.4L13 20.4L11 18.4M13 5.6L11 3.6L13 1.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
