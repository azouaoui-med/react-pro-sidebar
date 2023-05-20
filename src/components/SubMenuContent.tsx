import React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import { StyledUl } from '../styles/StyledUl';
import { menuClasses } from '../utils/utilityClasses';
import { useMenu } from '../hooks/useMenu';

interface SubMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  transitionDuration?: number;
  open?: boolean;
  openWhenCollapsed?: boolean;
  firstLevel?: boolean;
  collapsed?: boolean;
  defaultOpen?: boolean;
  rootStyles?: CSSObject;
  children?: React.ReactNode;
}

const StyledSubMenuContent = styled.div<SubMenuContentProps>`
  display: none;
  overflow: hidden;
  z-index: 999;
  transition: height ${({ transitionDuration }) => transitionDuration}ms;
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
      position: fixed;
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

  ${({ rootStyles }) => rootStyles};
`;

const SubMenuContentFR: React.ForwardRefRenderFunction<HTMLDivElement, SubMenuContentProps> = (
  { children, open, openWhenCollapsed, firstLevel, collapsed, defaultOpen, ...rest },
  ref,
) => {
  const { transitionDuration } = useMenu();
  const [defaultOpenState] = React.useState(defaultOpen);

  return (
    <StyledSubMenuContent
      data-testid={`${menuClasses.subMenuContent}-test-id`}
      ref={ref}
      firstLevel={firstLevel}
      collapsed={collapsed}
      open={open}
      openWhenCollapsed={openWhenCollapsed}
      transitionDuration={transitionDuration}
      defaultOpen={defaultOpenState}
      {...rest}
    >
      <StyledUl>{children}</StyledUl>
    </StyledSubMenuContent>
  );
};

export const SubMenuContent = React.forwardRef(SubMenuContentFR);
