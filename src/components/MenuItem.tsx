import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { StyledMenuLabel } from './StyledMenuLabel';
import { StyledMenuIcon } from './StyledMenuIcon';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: React.ReactNode;
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

export const MenuItem: React.FC<Props> = ({ children, href = '#', icon, className, ...rest }) => {
  return (
    <StyledMenuItem className={classnames('menu-item', className)}>
      <StyledAnchor href={href} {...rest}>
        {icon && <StyledMenuIcon className="menu-icon">{icon}</StyledMenuIcon>}
        <StyledMenuLabel>{children}</StyledMenuLabel>
      </StyledAnchor>
    </StyledMenuItem>
  );
};
