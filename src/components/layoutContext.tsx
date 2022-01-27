import React from 'react';

interface LayoutState {
  rtl?: boolean;
}

export interface LayoutContextProps extends LayoutState {
  updateLayoutState: (values: LayoutState) => void;
}

export const LayoutContext = React.createContext<LayoutContextProps | undefined>(undefined);

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
