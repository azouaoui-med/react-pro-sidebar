import React from 'react';
import classnames from 'classnames';
import { StyledUl } from '../styles/StyledUl';
import { SubMenuProps } from './SubMenu';
import { MenuItemProps } from './MenuItem';

export type MenuProps = React.MenuHTMLAttributes<HTMLMenuElement>;

export const Menu: React.FC<MenuProps> = ({ children, className, ...rest }) => {
  const childNodes = React.Children.toArray(children).filter(Boolean) as [
    React.ReactElement<SubMenuProps | MenuItemProps>,
  ];

  return (
    <nav className={classnames('menu', className)} {...rest}>
      <StyledUl>
        {childNodes.map((node) =>
          React.cloneElement(node, {
            ...node.props,
            firstLevel: true,
          }),
        )}
      </StyledUl>
    </nav>
  );
};
