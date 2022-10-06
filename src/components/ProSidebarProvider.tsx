import React from 'react';
import { GlobalStyle } from '../styles/globalStyles';
import { SidebarProvider } from './sidebarContext';

interface ProSidebarProviderProps {
  children?: React.ReactNode;
}

export const ProSidebarProvider: React.FC<ProSidebarProviderProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <GlobalStyle />
      {children}
    </SidebarProvider>
  );
};
