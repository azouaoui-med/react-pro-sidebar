import React from 'react';

interface SidebarState {
  fixed?: boolean;
  collapsed?: boolean;
  toggled?: boolean;
  broken?: boolean;
  width?: string;
  collapsedWidth?: string;
  transitionDuration?: number;
}

export interface SidebarContextProps extends SidebarState {
  updateSidebarState: (values: SidebarState) => void;
}

export const SidebarContext = React.createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider: React.FC = ({ children }) => {
  const [sidebarState, setSidebarState] = React.useState<SidebarState>();

  const updateSidebarState = React.useCallback((values: Partial<SidebarState>) => {
    setSidebarState((prevState) => ({ ...prevState, ...values }));
  }, []);

  const providerValue = React.useMemo(
    () => ({ ...sidebarState, updateSidebarState }),
    [sidebarState, updateSidebarState],
  );

  return <SidebarContext.Provider value={providerValue}>{children}</SidebarContext.Provider>;
};
