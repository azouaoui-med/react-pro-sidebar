import React from 'react';
import classnames from 'classnames';
import { StyledUl } from '../styles/StyledUl';
import { CSSObject } from 'styled-components';

interface RenderMenuItemStylesParams {
  level: number;
  collapsed: boolean;
  disabled: boolean;
  active: boolean;
}

interface RenderExpandIconParams {
  level: number;
  collapsed: boolean;
  disabled: boolean;
  active: boolean;
  open: boolean;
}

export interface MenuProps extends React.MenuHTMLAttributes<HTMLMenuElement> {
  closeOnClick?: boolean;
  renderMenuItemStyles?: (params: RenderMenuItemStylesParams) => CSSObject;
  renderExpandIcon?: (params: RenderExpandIconParams) => React.ReactNode;
  children?: React.ReactNode;
}

interface MenuState {
  closeOnClick?: boolean;
  renderMenuItemStyles?: (params: RenderMenuItemStylesParams) => CSSObject;
  renderExpandIcon?: (params: RenderExpandIconParams) => React.ReactNode;
}

export const MenuContext = React.createContext<MenuContextProps | undefined>(undefined);

export interface MenuContextProps extends MenuState {
  updateMenuState: (values: MenuState) => void;
}

const MenuFR: React.ForwardRefRenderFunction<HTMLMenuElement, MenuProps> = (
  { children, className, closeOnClick = false, renderMenuItemStyles, renderExpandIcon, ...rest },
  ref,
) => {
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
      <nav ref={ref} className={classnames('menu', className)} {...rest}>
        <StyledUl>{children}</StyledUl>
      </nav>
    </MenuContext.Provider>
  );
};

export const Menu = React.forwardRef<HTMLMenuElement, MenuProps>(MenuFR);
