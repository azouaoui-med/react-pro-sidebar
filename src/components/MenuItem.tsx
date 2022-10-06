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
  /**
   * @ignore
   */
  level?: number;
}

const StyledMenuItem = styled.li<{ menuItemStyles?: CSSObject }>`
  display: inline-block;
  width: 100%;

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
    ...rest
  },
  ref,
) => {
  const { collapsed, transitionDuration, rtl } = useSidebar();
  const { renderMenuItemStyles } = useMenu();

  return (
    <StyledMenuItem
      ref={ref}
      className={classnames('menu-item', { active }, { disabled }, className)}
      menuItemStyles={renderMenuItemStyles?.({ level, collapsed: !!collapsed, disabled, active })}
    >
      <StyledMenuItemAnchor
        className="menu-anchor"
        level={level}
        collapsed={collapsed}
        rtl={rtl}
        disabled={disabled}
        active={active}
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
    </StyledMenuItem>
  );
};

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(MenuItemFR);
