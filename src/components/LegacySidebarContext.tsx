import React from 'react';

interface SidebarState {
  collapsed?: boolean;
  toggled?: boolean;
  broken?: boolean;
  rtl?: boolean;
  transitionDuration?: number;
}

export interface LegacySidebarContextProps extends SidebarState {
  updateSidebarState: (values: SidebarState) => void;
  updateCollapseState: () => void;
  updateToggleState: () => void;
}

interface SidebarProviderProps {
  children?: React.ReactNode;
}

export const LegacySidebarContext = React.createContext<LegacySidebarContextProps | undefined>(
  undefined,
);

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [sidebarState, setSidebarState] = React.useState<SidebarState>({
    collapsed: false,
    toggled: false,
    broken: false,
    rtl: false,
    transitionDuration: 300,
  });

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

  return (
    <LegacySidebarContext.Provider value={providerValue}>{children}</LegacySidebarContext.Provider>
  );
};
