import React from 'react';
import classnames from 'classnames';
import { StyledUl } from '../styles/StyledUl';
import styled, { CSSObject } from '@emotion/styled';
import { menuClasses } from '../utils/utilityClasses';

export interface MenuItemStylesParams {
  level: number;
  disabled: boolean;
  active: boolean;
  isSubmenu: boolean;
  open?: boolean;
}

export type ElementStyles = CSSObject | ((params: MenuItemStylesParams) => CSSObject | undefined);

export interface MenuItemStyles {
  root?: ElementStyles;
  button?: ElementStyles;
  label?: ElementStyles;
  prefix?: ElementStyles;
  suffix?: ElementStyles;
  icon?: ElementStyles;
  subMenuContent?: ElementStyles;
  SubMenuExpandIcon?: ElementStyles;
}

export interface RenderExpandIconParams {
  level: number;
  disabled: boolean;
  active: boolean;
  open: boolean;
}

export interface MenuContextProps {
  closeOnClick?: boolean;
  menuItemStyles?: MenuItemStyles;
  renderExpandIcon?: (params: RenderExpandIconParams) => React.ReactNode;
}

export interface MenuProps extends MenuContextProps, React.MenuHTMLAttributes<HTMLMenuElement> {
  rootStyles?: CSSObject;
  children?: React.ReactNode;
}

const StyledMenu = styled.nav<Pick<MenuProps, 'rootStyles'>>`
  &.${menuClasses.root} {
    ${({ rootStyles }) => rootStyles}
  }
`;

export const MenuContext = React.createContext<MenuContextProps | undefined>(undefined);

const MenuFR: React.ForwardRefRenderFunction<HTMLMenuElement, MenuProps> = (
  {
    children,
    className,
    closeOnClick = false,
    rootStyles,
    menuItemStyles,
    renderExpandIcon,
    ...rest
  },
  ref,
) => {
  const providerValue = React.useMemo(
    () => ({ closeOnClick, menuItemStyles, renderExpandIcon }),
    [closeOnClick, menuItemStyles, renderExpandIcon],
  );

  return (
    <MenuContext.Provider value={providerValue}>
      <StyledMenu
        ref={ref}
        className={classnames(menuClasses.root, className)}
        rootStyles={rootStyles}
        {...rest}
      >
        <StyledUl>{children}</StyledUl>
      </StyledMenu>
    </MenuContext.Provider>
  );
};

export const Menu = React.forwardRef<HTMLMenuElement, MenuProps>(MenuFR);
