import React from 'react';
import { GlobalStyle } from './globalStyles';
import { LayoutProvider } from './layoutContext';
import { SidebarProvider } from './sidebarContext';

export const ProSidebarProvider: React.FC = ({ children }) => {
  return (
    <LayoutProvider>
      <SidebarProvider>
        <GlobalStyle />
        {children}
      </SidebarProvider>
    </LayoutProvider>
  );
};
