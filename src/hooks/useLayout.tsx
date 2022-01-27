import React from 'react';
import { LayoutContext, LayoutContextProps } from '../components/layoutContext';

export const useLayout = (): LayoutContextProps => {
  const context = React.useContext(LayoutContext);
  if (context === undefined) {
    //TODO: set better error message
    throw new Error('ProSidebarProvider is required!');
  }
  return context;
};
