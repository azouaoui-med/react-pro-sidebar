import React from 'react';

interface LayoutState {
  rtl?: boolean;
}

interface LayoutContextProps extends LayoutState {
  updateLayoutState: (values: LayoutState) => void;
}

const LayoutContext = React.createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider: React.FC = ({ children }) => {
  const [layoutState, setLayoutState] = React.useState<LayoutState>();

  const updateLayoutState = React.useCallback((values: Partial<LayoutState>) => {
    setLayoutState((prevState) => ({ ...prevState, ...values }));
  }, []);

  const providerValue = React.useMemo(
    () => ({ ...layoutState, updateLayoutState }),
    [layoutState, updateLayoutState],
  );

  return <LayoutContext.Provider value={providerValue}>{children}</LayoutContext.Provider>;
};

export const useLayout = (): LayoutContextProps => {
  const context = React.useContext(LayoutContext);
  if (context === undefined) {
    //TODO: set better error message
    throw new Error('ProSidebarProvider is required!');
  }
  return context;
};
