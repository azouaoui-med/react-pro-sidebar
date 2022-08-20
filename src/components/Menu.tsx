import React from 'react';
import classnames from 'classnames';
import { StyledUl } from '../styles/StyledUl';
import { CSSObject } from 'styled-components';

export type MenuProps = React.MenuHTMLAttributes<HTMLMenuElement> & {
  renderMenuItemStyles?: (params: { level: number; collapsed: boolean }) => CSSObject;
  renderExpandIcon?: (params: {
    level: number;
    collapsed: boolean;
    open: boolean;
  }) => React.ReactNode;
};

interface MenuState {
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
    updateMenuState({ renderMenuItemStyles, renderExpandIcon });
  }, [renderExpandIcon, renderMenuItemStyles, updateMenuState]);

  return (
    <MenuContext.Provider value={providerValue}>
      <nav className={classnames('menu', className)} {...rest}>
        <StyledUl>{children}</StyledUl>
      </nav>
    </MenuContext.Provider>
  );
};
