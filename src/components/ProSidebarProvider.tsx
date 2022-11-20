import React from 'react';
import { SidebarProvider } from './sidebarContext';

interface ProSidebarProviderProps {
  children?: React.ReactNode;
}

export const ProSidebarProvider: React.FC<ProSidebarProviderProps> = ({ children }) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};
