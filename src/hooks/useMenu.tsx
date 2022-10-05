import React from 'react';
import { MenuContext, MenuContextProps } from '../components/Menu';

export const useMenu = (): MenuContextProps => {
  const context = React.useContext(MenuContext);
  if (context === undefined) {
    //TODO: set better error message
    throw new Error('Menu Component is required!');
  }
  return context;
};
