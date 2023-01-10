import React from 'react';
import { IconProps } from './types';

export const Book: React.FC<IconProps> = ({ size = 18, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...rest}
    >
      <path d="M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zm-5-9V7H8v2h8z"></path>
    </svg>
  );
};
