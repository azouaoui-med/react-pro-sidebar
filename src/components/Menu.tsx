import React from 'react';
import classnames from 'classnames';
import { StyledUl } from './StyledUl';
import { SubMenuProps } from './SubMenu';

interface Props {
  openCurrent?: boolean;
  className?: string;
}

export const Menu: React.FC<Props> = ({ children, className, ...rest }) => {
  const childNodes = React.Children.toArray(children).filter(Boolean) as [
    React.ReactElement<SubMenuProps>,
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
