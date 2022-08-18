import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { StyledMenuLabel } from '../styles/StyledMenuLabel';
import { StyledMenuIcon } from '../styles/StyledMenuIcon';
import { StyledMenuPrefix } from '../styles/StyledMenuPrefix';
import { useSidebar } from '../hooks/useSidebar';

export interface MenuItemProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> {
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  /**
   * @ignore
   */
  level?: number;
}

const StyledMenuItem = styled.li`
  display: inline-block;
  width: 100%;
`;

const StyledAnchor = styled.a<{ level: number; collapsed?: boolean }>`
  display: flex;
  align-items: center;
  height: 50px;
  padding-right: 20px;
  padding-left: ${({ level, collapsed }) =>
    level === 0 ? 20 : (collapsed ? level : level + 1) * 20}px;
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }
`;

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  icon,
  className,
  prefix,
  suffix,
  level = 0,
  ...rest
}) => {
  const { collapsed, transitionDuration } = useSidebar();

  return (
    <StyledMenuItem className={classnames('menu-item', className)}>
      <StyledAnchor className="menu-anchor" level={level} collapsed={collapsed} {...rest}>
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
      </StyledAnchor>
    </StyledMenuItem>
  );
};
