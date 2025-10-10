import React from 'react';

interface GlobeSlated_02Props {
  size?: number;
  className?: string;
}

export const GlobeSlated_02: React.FC<GlobeSlated_02Props> = ({ 
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
      <path d="M2.66116 18.3388L7.25502 13.745M18.2175 2.78249C21.9275 6.49247 21.9275 12.5075 18.2175 16.2175C14.5075 19.9275 8.49246 19.9275 4.78248 16.2175M17 22H7M12 22V19M17.5 9.5C17.5 12.8137 14.8137 15.5 11.5 15.5C8.18629 15.5 5.5 12.8137 5.5 9.5C5.5 6.18629 8.18629 3.5 11.5 3.5C14.8137 3.5 17.5 6.18629 17.5 9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
