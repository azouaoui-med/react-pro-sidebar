import React from 'react';
import styled, { CSSObject } from 'styled-components';
import classnames from 'classnames';
import { StyledMenuLabel } from '../styles/StyledMenuLabel';
import { StyledMenuIcon } from '../styles/StyledMenuIcon';
import { StyledMenuPrefix } from '../styles/StyledMenuPrefix';
import { useSidebar } from '../hooks/useSidebar';
import { StyledMenuItemAnchor } from '../styles/StyledMenuItemAnchor';
import { useMenu } from '../hooks/useMenu';

export interface MenuItemProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> {
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  active?: boolean;
  /**
   * @ignore
   */
  level?: number;
}

const StyledMenuItem = styled.li<{ menuItemStyles?: CSSObject }>`
  display: inline-block;
  width: 100%;

  &.active > .menu-anchor {
    background-color: #e2eef9;
  }

  ${({ menuItemStyles }) => menuItemStyles};
`;

export const MenuItemFR: React.ForwardRefRenderFunction<HTMLLIElement, MenuItemProps> = (
  { children, icon, className, prefix, suffix, level = 0, active, ...rest },
  ref,
) => {
  const { collapsed, transitionDuration } = useSidebar();
  const { renderMenuItemStyles } = useMenu();

  return (
    <StyledMenuItem
      ref={ref}
      className={classnames('menu-item', { active }, className)}
      menuItemStyles={renderMenuItemStyles?.({ level, collapsed: !!collapsed })}
    >
      <StyledMenuItemAnchor className="menu-anchor" level={level} collapsed={collapsed} {...rest}>
        {icon && <StyledMenuIcon className="menu-icon">{icon}</StyledMenuIcon>}

        {prefix && (
          <StyledMenuPrefix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={level === 0}
            className="menu-prefix"
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        <StyledMenuLabel className="menu-label">{children}</StyledMenuLabel>

        {suffix && (
          <span className="menu-suffix" style={{ margin: '0 5px' }}>
            {suffix}
          </span>
        )}
      </StyledMenuItemAnchor>
    </StyledMenuItem>
  );
};

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(MenuItemFR);
