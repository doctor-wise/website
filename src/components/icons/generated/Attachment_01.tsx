import React from 'react';

interface Attachment_01Props {
  size?: number;
  className?: string;
}

export const Attachment_01: React.FC<Attachment_01Props> = ({ 
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
      <path d="M21.1525 10.8995L12.1369 19.9151C10.0866 21.9653 6.76253 21.9653 4.71228 19.9151C2.66203 17.8648 2.66203 14.5407 4.71228 12.4905L13.7279 3.47486C15.0947 2.10803 17.3108 2.10803 18.6776 3.47486C20.0445 4.8417 20.0445 7.05778 18.6776 8.42461L10.0156 17.0867C9.33216 17.7701 8.22412 17.7701 7.54071 17.0867C6.85729 16.4033 6.85729 15.2952 7.54071 14.6118L15.1421 7.0104" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
