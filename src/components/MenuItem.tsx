import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

const StyledMenuItem = styled.li`
  display: inline-block;
  width: 100%;
`;

const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 20px;
  margin: 5px 10px;
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const MenuItem: React.FC<Props> = ({ children, href = '#', className, ...rest }) => {
  return (
    <StyledMenuItem className={classnames('menu-item', className)}>
      <StyledAnchor href={href} {...rest}>
        {children}
      </StyledAnchor>
    </StyledMenuItem>
  );
};
