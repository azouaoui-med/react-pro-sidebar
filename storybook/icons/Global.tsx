import React from 'react';
import { IconProps } from './types';

export const Global: React.FC<IconProps> = ({ size = 18, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...rest}
    >
      <path d="M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.05 13zm0-2a10.005 10.005 0 0 1 8.402-8.88A17.9 17.9 0 0 0 7.527 11H2.05zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.88A10.005 10.005 0 0 1 21.95 11zm0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13h5.478zM9.53 13h4.94A15.908 15.908 0 0 1 12 20.592 15.908 15.908 0 0 1 9.53 13zm0-2A15.908 15.908 0 0 1 12 3.408 15.908 15.908 0 0 1 14.47 11H9.53z"></path>
    </svg>
  );
};
