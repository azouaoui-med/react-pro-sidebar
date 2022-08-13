import React from 'react';
import { GlobalStyle } from '../styles/globalStyles';
import { SidebarProvider } from './sidebarContext';

export const ProSidebarProvider: React.FC = ({ children }) => {
  return (
    <SidebarProvider>
      <GlobalStyle />
      {children}
    </SidebarProvider>
  );
};
