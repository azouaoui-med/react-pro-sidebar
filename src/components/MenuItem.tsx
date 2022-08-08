import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { StyledMenuLabel } from './StyledMenuLabel';
import { StyledMenuIcon } from './StyledMenuIcon';
import { StyledMenuPrefix } from './StyledMenuPrefix';
import { useSidebar } from '../hooks/useSidebar';

export interface MenuItemProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> {
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  /**
   * @ignore
   */
  firstLevel?: boolean;
}

const StyledMenuItem = styled.li`
  display: inline-block;
  width: 100%;
`;

const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
`;

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href = '#',
  icon,
  className,
  prefix,
  suffix,
  firstLevel,
  ...rest
}) => {
  const { collapsed, transitionDuration } = useSidebar();

  return (
    <StyledMenuItem className={classnames('menu-item', className)}>
      <StyledAnchor href={href} {...rest}>
        {icon && <StyledMenuIcon className="menu-icon">{icon}</StyledMenuIcon>}

        {prefix && (
          <StyledMenuPrefix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={firstLevel}
            className="menu-prefix"
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        <StyledMenuLabel>{children}</StyledMenuLabel>

        {suffix && (
          <span className="menu-suffix" style={{ margin: '0 5px' }}>
            {suffix}
          </span>
        )}
      </StyledAnchor>
    </StyledMenuItem>
  );
};
