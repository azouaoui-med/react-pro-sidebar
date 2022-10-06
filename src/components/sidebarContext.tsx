import React from 'react';

interface SidebarState {
  collapsed?: boolean;
  toggled?: boolean;
  broken?: boolean;
  rtl?: boolean;
  width?: string;
  collapsedWidth?: string;
  transitionDuration?: number;
}

export interface SidebarContextProps extends SidebarState {
  updateSidebarState: (values: SidebarState) => void;
  updateCollapseState: () => void;
  updateToggleState: () => void;
}

interface SidebarProviderProps {
  children?: React.ReactNode;
}

export const SidebarContext = React.createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [sidebarState, setSidebarState] = React.useState<SidebarState>();

  const updateSidebarState = React.useCallback((values: Partial<SidebarState>) => {
    setSidebarState((prevState) => ({ ...prevState, ...values }));
  }, []);

  const updateCollapseState = React.useCallback(() => {
    setSidebarState((prevState) => ({ ...prevState, collapsed: !Boolean(prevState?.collapsed) }));
  }, []);

  const updateToggleState = React.useCallback(() => {
    setSidebarState((prevState) => ({ ...prevState, toggled: !Boolean(prevState?.toggled) }));
  }, []);

  const providerValue = React.useMemo(
    () => ({ ...sidebarState, updateSidebarState, updateCollapseState, updateToggleState }),
    [sidebarState, updateCollapseState, updateSidebarState, updateToggleState],
  );

  return <SidebarContext.Provider value={providerValue}>{children}</SidebarContext.Provider>;
};
