import React from 'react';
import { IconProps } from './types';

export const BarChart: React.FC<IconProps> = ({ size = 18, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...rest}
    >
      <path d="M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z"></path>
    </svg>
  );
};
