import React from 'react';
import { SidebarProvider } from './LegacySidebarContext';

interface ProSidebarProviderProps {
  children?: React.ReactNode;
}

/**
 * @deprecated
 * `ProSidebarProvider` is deprecated and will be removed in the next major release.
 */
export const ProSidebarProvider: React.FC<ProSidebarProviderProps> = ({ children }) => {
  console.warn('ProSidebarProvider is deprecated and will be removed in the next major release.');
  return <SidebarProvider>{children}</SidebarProvider>;
};
