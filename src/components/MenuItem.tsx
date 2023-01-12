import React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import classnames from 'classnames';
import { StyledMenuLabel } from '../styles/StyledMenuLabel';
import { StyledMenuIcon } from '../styles/StyledMenuIcon';
import { StyledMenuPrefix } from '../styles/StyledMenuPrefix';
import { useSidebar } from '../hooks/useSidebar';
import { useMenu } from '../hooks/useMenu';
import { StyledMenuSuffix } from '../styles/StyledMenuSuffix';
import { menuClasses } from '../utils/utilityClasses';
import { MenuButton } from './MenuButton';

export interface MenuItemProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> {
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  component?: string | React.ReactElement;
  rootStyles?: CSSObject;
  /**
   * @ignore
   */
  level?: number;
}

interface StyledMenuItemProps extends Pick<MenuItemProps, 'rootStyles'> {
  menuItemStyles?: CSSObject;
}

type MenuItemElement = 'root' | 'button' | 'label' | 'prefix' | 'suffix' | 'icon';

const StyledMenuItem = styled.li<StyledMenuItemProps>`
  display: inline-block;
  width: 100%;
  position: relative;

  ${({ menuItemStyles }) => menuItemStyles};

  ${({ rootStyles }) => rootStyles};
`;

export const MenuItemFR: React.ForwardRefRenderFunction<HTMLLIElement, MenuItemProps> = (
  {
    children,
    icon,
    className,
    prefix,
    suffix,
    level = 0,
    active = false,
    disabled = false,
    component,
    rootStyles,
    ...rest
  },
  ref,
) => {
  const { collapsed, transitionDuration, rtl } = useSidebar();
  const { menuItemStyles } = useMenu();

  const getMenuItemStyles = (element: MenuItemElement): CSSObject | undefined => {
    if (menuItemStyles) {
      const params = { level, disabled, active, isSubmenu: false };
      const {
        root: rootElStyles,
        button: buttonElStyles,
        label: labelElStyles,
        icon: iconElStyles,
        prefix: prefixElStyles,
        suffix: suffixElStyles,
      } = menuItemStyles;

      switch (element) {
        case 'root':
          return typeof rootElStyles === 'function' ? rootElStyles(params) : rootElStyles;

        case 'button':
          return typeof buttonElStyles === 'function' ? buttonElStyles(params) : buttonElStyles;

        case 'label':
          return typeof labelElStyles === 'function' ? labelElStyles(params) : labelElStyles;

        case 'icon':
          return typeof iconElStyles === 'function' ? iconElStyles(params) : iconElStyles;

        case 'prefix':
          return typeof prefixElStyles === 'function' ? prefixElStyles(params) : prefixElStyles;

        case 'suffix':
          return typeof suffixElStyles === 'function' ? suffixElStyles(params) : suffixElStyles;

        default:
          return undefined;
      }
    }
  };

  const sharedClasses = {
    [menuClasses.active]: active,
    [menuClasses.disabled]: disabled,
  };

  return (
    <StyledMenuItem
      ref={ref}
      className={classnames(menuClasses.menuItemRoot, sharedClasses, className)}
      menuItemStyles={getMenuItemStyles('root')}
      rootStyles={rootStyles}
    >
      <MenuButton
        className={classnames(menuClasses.button, sharedClasses)}
        data-testid={`${menuClasses.button}-test-id`}
        level={level}
        collapsed={collapsed}
        rtl={rtl}
        disabled={disabled}
        active={active}
        rootStyles={getMenuItemStyles('button')}
        component={component}
        tabIndex={0}
        {...rest}
      >
        {icon && (
          <StyledMenuIcon
            rtl={rtl}
            className={classnames(menuClasses.icon, sharedClasses)}
            rootStyles={getMenuItemStyles('icon')}
          >
            {icon}
          </StyledMenuIcon>
        )}

        {prefix && (
          <StyledMenuPrefix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={level === 0}
            className={classnames(menuClasses.prefix, sharedClasses)}
            rtl={rtl}
            rootStyles={getMenuItemStyles('prefix')}
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        <StyledMenuLabel
          className={classnames(menuClasses.label, sharedClasses)}
          rootStyles={getMenuItemStyles('label')}
        >
          {children}
        </StyledMenuLabel>

        {suffix && (
          <StyledMenuSuffix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={level === 0}
            className={classnames(menuClasses.suffix, sharedClasses)}
            rootStyles={getMenuItemStyles('suffix')}
          >
            {suffix}
          </StyledMenuSuffix>
        )}
      </MenuButton>
    </StyledMenuItem>
  );
};

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(MenuItemFR);
