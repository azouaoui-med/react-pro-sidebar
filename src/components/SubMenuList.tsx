/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import styled from 'styled-components';
import { StyledUl } from './StyledUl';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
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
  background-color: green;
  ${({ collapsed, firstLevel, open }) =>
    collapsed && firstLevel
      ? `
      max-width: 300px;
      height:auto!important;
      display:block!important;     
      transition:none!important;     
      visibility: ${open ? 'visible' : 'hidden'};
     `
      : `
      position:static!important;
      transform:none!important;
      `};
`;

const duration = 300;
const SubMenuListFR: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, open, firstLevel, collapsed, ...rest },
  ref,
) => {
  // const subMenuListRef = React.useRef<HTMLDivElement>(null);
  const subMenuListRef = ref as React.MutableRefObject<HTMLDivElement>;

  // const slideDown = () => {
  //   clearTimeout(timer);
  //   const target = ref?.current;
  //   if (target) {
  //     target.style.display = 'block';
  //     target.style.height = 'auto';
  //     const height = target.offsetHeight;
  //     target.style.height = '0px';
  //     target.offsetHeight;
  //     target.style.height = `${height}px`;

  //     timer = setTimeout(() => {
  //       target.style.height = 'auto';
  //     }, duration);
  //   }
  // };

  // const slideUp = () => {
  //   clearTimeout(timer);
  //   const target = ref?.current;
  //   if (target) {
  //     target.style.height = `${target.offsetHeight}px`;
  //     target.offsetHeight;
  //     target.style.height = '0px';

  //     timer = setTimeout(() => {
  //       target.style.display = 'none';
  //     }, duration);
  //   }
  // };

  React.useEffect(() => {
    if (firstLevel && collapsed) {
      console.log('object');
    } else {
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
    }
    return () => clearTimeout(timer);
  }, [collapsed, firstLevel, open, subMenuListRef]);

  return (
    <StyledSubMenuList
      ref={ref}
      firstLevel={firstLevel}
      collapsed={collapsed}
      className="sub-menu-list"
      open={open}
      {...rest}
    >
      <StyledUl>{children}</StyledUl>
    </StyledSubMenuList>
  );
};

export const SubMenuList = React.forwardRef(SubMenuListFR);
