import React from 'react';
import styled, { CSSObject } from 'styled-components';
import classnames from 'classnames';
import { StyledMenuLabel } from '../styles/StyledMenuLabel';
import { StyledMenuIcon } from '../styles/StyledMenuIcon';
import { StyledMenuPrefix } from '../styles/StyledMenuPrefix';
import { useSidebar } from '../hooks/useSidebar';
import { StyledMenuItemAnchor } from '../styles/StyledMenuItemAnchor';
import { useMenu } from '../hooks/useMenu';
import { StyledMenuSuffix } from '../styles/StyledMenuSuffix';

export interface MenuItemProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> {
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  routerLink?: React.ReactElement;
  /**
   * @ignore
   */
  level?: number;
}

const StyledRouterLinkWrapper = styled.div`
  position: absolute;
  visibility: hidden;
`;

const StyledMenuItem = styled.li<{ menuItemStyles?: CSSObject }>`
  display: inline-block;
  width: 100%;
  position: relative;

  ${({ menuItemStyles }) => menuItemStyles};
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
    ...rest
  },
  ref,
) => {
  const { collapsed, transitionDuration, rtl } = useSidebar();
  const { renderMenuItemStyles } = useMenu();

  const routerRef = React.useRef<HTMLAnchorElement>();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    routerRef.current?.click();
    onClick?.(event);
  };

  return (
    <StyledMenuItem
      ref={ref}
      className={classnames('menu-item', { active }, { disabled }, className)}
      menuItemStyles={renderMenuItemStyles?.({ level, collapsed: !!collapsed, disabled, active })}
    >
      <StyledMenuItemAnchor
        className="menu-anchor"
        data-testid="menuitem-anchor-test-id"
        level={level}
        collapsed={collapsed}
        rtl={rtl}
        disabled={disabled}
        active={active}
        onClick={handleClick}
        {...rest}
      >
        {icon && (
          <StyledMenuIcon rtl={rtl} className="menu-icon">
            {icon}
          </StyledMenuIcon>
        )}

        {prefix && (
          <StyledMenuPrefix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={level === 0}
            className="menu-prefix"
            rtl={rtl}
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        <StyledMenuLabel className="menu-label">{children}</StyledMenuLabel>

        {suffix && (
          <StyledMenuSuffix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={level === 0}
            className="menu-suffix"
          >
            {suffix}
          </StyledMenuSuffix>
        )}
      </StyledMenuItemAnchor>
      {routerLink && (
        <StyledRouterLinkWrapper>
          {React.cloneElement(routerLink, { ref: routerRef })}
        </StyledRouterLinkWrapper>
      )}
    </StyledMenuItem>
  );
};

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(MenuItemFR);
