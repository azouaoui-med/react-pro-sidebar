import React from 'react';

interface SidebarState {
  fixed?: boolean;
  collapsed?: boolean;
  toggled?: boolean;
  broken?: boolean;
  width?: string;
  collapsedWidth?: string;
}

interface SidebarContextProps extends SidebarState {
  updateSidebarState: (values: SidebarState) => void;
}

const SidebarContext = React.createContext<SidebarContextProps | undefined>(undefined);

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

export const useSidebar = (): SidebarContextProps => {
  const context = React.useContext(SidebarContext);
  if (context === undefined) {
    //TODO: set better error message
    throw new Error('ProSidebarProvider is required!');
  }
  return context;
};