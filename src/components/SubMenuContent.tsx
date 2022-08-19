/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import styled from 'styled-components';
import { StyledUl } from '../styles/StyledUl';

interface SubMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  openWhenCollapsed?: boolean;
  firstLevel?: boolean;
  collapsed?: boolean;
  defaultOpen?: boolean;
}

let timer: NodeJS.Timer;

const StyledSubMenuContent = styled.div<SubMenuContentProps>`
  display: none;
  overflow: hidden;
  z-index: 999;
  transition: height 300ms;
  box-sizing: border-box;
  background-color: white;

  ${({ firstLevel, collapsed }) =>
    firstLevel &&
    collapsed &&
    `
     background-color: white;
     box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
     `}

  ${({ defaultOpen }) => defaultOpen && 'height: auto;display: block;'}

  ${({ collapsed, firstLevel, openWhenCollapsed }) =>
    collapsed && firstLevel
      ? `
      margin-left: 5px!important;
      margin-right: 5px!important;
      padding-left: 0px;
      width: 200px;
      border-radius: 4px;
      height: auto!important;
      display: block!important;     
      transition: none!important;     
      visibility: ${openWhenCollapsed ? 'visible' : 'hidden'};
     `
      : `
      position: static!important;
      transform: none!important;
      `};
`;

const duration = 300;
const SubMenuContentFR: React.ForwardRefRenderFunction<HTMLDivElement, SubMenuContentProps> = (
  { children, open, openWhenCollapsed, firstLevel, collapsed, ...rest },
  ref,
) => {
  const SubMenuContentRef = ref as React.MutableRefObject<HTMLDivElement>;

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    clearTimeout(timer);
    if (mounted) {
      if (open) {
        const target = SubMenuContentRef?.current;
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
        const target = SubMenuContentRef?.current;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, SubMenuContentRef]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <StyledSubMenuContent
      ref={ref}
      firstLevel={firstLevel}
      collapsed={collapsed}
      className="sub-menu-content"
      open={open}
      openWhenCollapsed={openWhenCollapsed}
      {...rest}
    >
      <StyledUl>{children}</StyledUl>
    </StyledSubMenuContent>
  );
};

export const SubMenuContent = React.forwardRef(SubMenuContentFR);
