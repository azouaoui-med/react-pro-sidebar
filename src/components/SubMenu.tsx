import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { SubMenuList } from './SubMenuList';

interface Props extends React.LiHTMLAttributes<HTMLLIElement> {
  className?: string;
  label?: string;
}

const StyledSubMenu = styled.li`
  position: relative;
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

  &::after {
    content: '';
    transition: transform 0.3s;
    border-right: 2px solid currentcolor;
    border-bottom: 2px solid currentcolor;
    width: 5px;
    height: 5px;
    transform: rotate(-45deg);
  }
`;

export const SubMenu: React.FC<Props> = ({ children, className, label, ...rest }) => {
  const [open, setOpen] = React.useState(false);

  const handleSlideToggle = () => {
    setOpen(!open);
  };

  return (
    <StyledSubMenu className={classnames('sub-menu', className)} {...rest}>
      <StyledAnchor href="#" onClick={handleSlideToggle}>
        {label}
      </StyledAnchor>
      <SubMenuList open={open}>{children}</SubMenuList>
    </StyledSubMenu>
  );
};
