import React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import classnames from 'classnames';
import { StyledMenuLabel } from '../styles/StyledMenuLabel';
import { StyledMenuIcon } from '../styles/StyledMenuIcon';
import { StyledMenuPrefix } from '../styles/StyledMenuPrefix';
import { useSidebar } from '../hooks/useSidebar';
import { StyledMenuButton } from '../styles/StyledMenuButton';
import { useMenu } from '../hooks/useMenu';
import { StyledMenuSuffix } from '../styles/StyledMenuSuffix';
import { menuClasses } from '../utils/utilityClasses';

export interface MenuItemProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> {
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  routerLink?: React.ReactElement;
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

const StyledRouterLinkWrapper = styled.div`
  position: absolute;
  visibility: hidden;
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
    onClick,
    routerLink,
    rootStyles,
    ...rest
  },
  ref,
) => {
  const { collapsed, transitionDuration, rtl } = useSidebar();
  const { menuItemStyles } = useMenu();

  const routerRef = React.useRef<HTMLAnchorElement>();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    routerRef.current?.click();
    onClick?.(event);
  };

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

  return (
    <StyledMenuItem
      ref={ref}
      className={classnames(
        menuClasses.menuItemRoot,
        { [menuClasses.active]: active },
        { [menuClasses.disabled]: disabled },
        className,
      )}
      menuItemStyles={getMenuItemStyles('root')}
      rootStyles={rootStyles}
    >
      <StyledMenuButton
        className={menuClasses.button}
        data-testid={`${menuClasses.button}-test-id`}
        level={level}
        collapsed={collapsed}
        rtl={rtl}
        disabled={disabled}
        active={active}
        onClick={handleClick}
        rootStyles={getMenuItemStyles('button')}
        {...rest}
      >
        {icon && (
          <StyledMenuIcon
            rtl={rtl}
            className={menuClasses.icon}
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
            className={menuClasses.prefix}
            rtl={rtl}
            rootStyles={getMenuItemStyles('prefix')}
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        <StyledMenuLabel className={menuClasses.label} rootStyles={getMenuItemStyles('label')}>
          {children}
        </StyledMenuLabel>

        {suffix && (
          <StyledMenuSuffix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={level === 0}
            className={menuClasses.suffix}
            rootStyles={getMenuItemStyles('suffix')}
          >
            {suffix}
          </StyledMenuSuffix>
        )}
      </StyledMenuButton>

      {routerLink && (
        <StyledRouterLinkWrapper>
          {React.cloneElement(routerLink, { ref: routerRef })}
        </StyledRouterLinkWrapper>
      )}
    </StyledMenuItem>
  );
};

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(MenuItemFR);
