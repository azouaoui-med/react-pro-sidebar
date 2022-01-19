import React from 'react';
import { SidebarProvider } from './sidebarContext';

export const ConfigProvider: React.FC = ({ children }) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};
