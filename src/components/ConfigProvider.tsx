import React from 'react';
import { LayoutProvider } from './layoutContext';
import { SidebarProvider } from './sidebarContext';

export const ConfigProvider: React.FC = ({ children }) => {
  return (
    <LayoutProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </LayoutProvider>
  );
};
