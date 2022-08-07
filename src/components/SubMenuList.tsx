/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import styled from 'styled-components';
import { StyledUl } from './StyledUl';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  openWhenCollapsed?: boolean;
  firstLevel?: boolean;
  collapsed?: boolean;
}

let timer: NodeJS.Timer;

const StyledSubMenuList = styled.div<Props>`
  padding-left: 20px;
  display: none;
  overflow: hidden;
  z-index: 999;
  transition: height 300ms;
  box-sizing: border-box;
  ${({ firstLevel }) => firstLevel && 'background-color: rgb(23, 32, 48);'}

  ${({ collapsed, firstLevel, openWhenCollapsed }) =>
    collapsed && firstLevel
      ? `
      margin-left:3px!important;
      padding-left:0px;
      max-width: 200px;
      border-radius: 4px;
      height:auto!important;
      display:block!important;     
      transition:none!important;     
      visibility: ${openWhenCollapsed ? 'visible' : 'hidden'};
     `
      : `
      position:static!important;
      transform:none!important;
      `};
`;

const duration = 300;
const SubMenuListFR: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, open, openWhenCollapsed, firstLevel, collapsed, ...rest },
  ref,
) => {
  const subMenuListRef = ref as React.MutableRefObject<HTMLDivElement>;

  React.useEffect(() => {
    clearTimeout(timer);

    if (open) {
      const target = subMenuListRef?.current;
      if (target) {
        target.style.display = 'block';
        target.style.height = 'auto';
        const height = target.offsetHeight;
        target.style.height = '0px';
        target.offsetHeight;
        target.style.height = `${height}px`;

        timer = setTimeout(() => {
          target.style.height = 'auto';
        }, duration);
      }
    } else {
      const target = subMenuListRef?.current;
      if (target) {
        target.style.height = `${target.offsetHeight}px`;
        target.offsetHeight;
        target.style.height = '0px';

        timer = setTimeout(() => {
          target.style.display = 'none';
        }, duration);
      }
    }
    return () => clearTimeout(timer);
  }, [open, subMenuListRef]);

  return (
    <StyledSubMenuList
      ref={ref}
      firstLevel={firstLevel}
      collapsed={collapsed}
      className="sub-menu-list"
      open={open}
      openWhenCollapsed={openWhenCollapsed}
      {...rest}
    >
      <StyledUl>{children}</StyledUl>
    </StyledSubMenuList>
  );
};

export const SubMenuList = React.forwardRef(SubMenuListFR);
