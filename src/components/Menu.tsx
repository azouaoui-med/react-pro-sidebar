import React from 'react';
import classnames from 'classnames';
import { StyledUl } from '../styles/StyledUl';
import { CSSObject } from 'styled-components';

export interface MenuProps extends React.MenuHTMLAttributes<HTMLMenuElement> {
  closeOnClick?: boolean;
  renderMenuItemStyles?: (params: { level: number; collapsed: boolean }) => CSSObject;
  renderExpandIcon?: (params: {
    level: number;
    collapsed: boolean;
    open: boolean;
  }) => React.ReactNode;
}

interface MenuState {
  closeOnClick?: boolean;
  renderMenuItemStyles?: (params: { level: number; collapsed: boolean }) => CSSObject;
  renderExpandIcon?: (params: {
    level: number;
    collapsed: boolean;
    open: boolean;
  }) => React.ReactNode;
}

export const MenuContext = React.createContext<MenuContextProps | undefined>(undefined);

export interface MenuContextProps extends MenuState {
  updateMenuState: (values: MenuState) => void;
}

export const Menu: React.FC<MenuProps> = ({
  children,
  className,
  closeOnClick = false,
  renderMenuItemStyles,
  renderExpandIcon,
  ...rest
}) => {
  const [menuState, setMenuState] = React.useState<MenuState>();

  const updateMenuState = React.useCallback((values: Partial<MenuState>) => {
    setMenuState((prevState) => ({ ...prevState, ...values }));
  }, []);

  const providerValue = React.useMemo(
    () => ({ ...menuState, updateMenuState }),
    [menuState, updateMenuState],
  );

  React.useEffect(() => {
    updateMenuState({ renderMenuItemStyles, renderExpandIcon, closeOnClick });
  }, [renderExpandIcon, renderMenuItemStyles, closeOnClick, updateMenuState]);

  return (
    <MenuContext.Provider value={providerValue}>
      <nav className={classnames('menu', className)} {...rest}>
        <StyledUl>{children}</StyledUl>
      </nav>
    </MenuContext.Provider>
  );
};
