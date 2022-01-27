import React from 'react';
import { SidebarContext, SidebarContextProps } from '../components/sidebarContext';

export const useSidebar = (): SidebarContextProps => {
  const context = React.useContext(SidebarContext);
  if (context === undefined) {
    //TODO: set better error message
    throw new Error('ProSidebarProvider is required!');
  }
  return context;
};
