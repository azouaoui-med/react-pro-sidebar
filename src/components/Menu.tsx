import React from 'react';
import classnames from 'classnames';
import { StyledUl } from '../styles/StyledUl';

export type MenuProps = React.MenuHTMLAttributes<HTMLMenuElement>;

export const Menu: React.FC<MenuProps> = ({ children, className, ...rest }) => {
  return (
    <nav className={classnames('menu', className)} {...rest}>
      <StyledUl>{children}</StyledUl>
    </nav>
  );
};
