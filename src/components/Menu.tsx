import React from 'react';
import classnames from 'classnames';
import { StyledUl } from './StyledUl';

interface Props {
  openCurrent?: boolean;
  className?: string;
}

export const Menu: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <nav className={classnames('menu', className)} {...rest}>
      <StyledUl>{children}</StyledUl>
    </nav>
  );
};
