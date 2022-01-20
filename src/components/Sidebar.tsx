import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { useSidebar } from './sidebarContext';
import { BreakPoint } from '../types/types';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Overlay } from './Overlay';

const BREAK_POINTS: Record<BreakPoint, string> = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
};

export interface SidebarProps extends React.HTMLAttributes<HTMLHtmlElement> {
  /**
   * set width of the sidebar
   */
  width?: string;
  collapsedWidth?: string;
  collapsed?: boolean;
  toggled?: boolean;
  fixed?: boolean;
  breakPoint?: BreakPoint;
  customBreakPoint?: string;
  onCollapse?: (collapsed: boolean) => void;
  onToggle?: (toggled: boolean) => void;
  onBreakPoint?: (broken: boolean) => void;
}

interface StyledSidebarProps extends SidebarProps {
  broken?: boolean;
}

const StyledSidebar = styled.aside<StyledSidebarProps>`
  width: ${({ width, collapsed, collapsedWidth }) => (collapsed ? collapsedWidth : width)};
  min-width: ${({ width, collapsed, collapsedWidth }) => (collapsed ? collapsedWidth : width)};
  transition: width, left, right, 0.3s;

  ${({ fixed }) =>
    fixed
      ? ` height: 100%;
        overflow: auto;
        ~ .layout {
          height: 100%;
          overflow: auto;
        }`
      : ''}

  ${({ broken, collapsed, collapsedWidth }) =>
    broken
      ? ` 
        position: fixed;
        left: -$sidebar-width;
        height: 100%;
        top: 0;
        z-index: 100;
        ${collapsed ? `left:-${collapsedWidth}` : ''}
        `
      : ''}
`;

export const Sidebar: React.FC<SidebarProps> = ({
  width = '250px',
  collapsedWidth = '80px',
  fixed = false,
  collapsed = false,
  toggled = false,
  className,
  children,
  breakPoint,
  customBreakPoint,
  onCollapse,
  onToggle,
  onBreakPoint,
  ...rest
}) => {
  const breakPointValue: string | undefined =
    customBreakPoint ?? (breakPoint ? BREAK_POINTS[breakPoint] : undefined);

  const broken = useMediaQuery(breakPointValue);

  const {
    updateSidebarState,
    collapsed: collapsedSidebar,
    fixed: fixedSidebar,
    width: sidebarWidth,
    collapsedWidth: sidebarCollapsedWidth,
    broken: brokenSidebar,
    toggled: toggledSidebar,
  } = useSidebar();

  React.useEffect(() => {
    updateSidebarState({ collapsed, fixed, width, collapsedWidth, broken, toggled });
  }, [collapsed, fixed, width, collapsedWidth, broken, toggled, updateSidebarState]);

  React.useEffect(() => {
    onCollapse?.(collapsedSidebar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsedSidebar]);

  React.useEffect(() => {
    onBreakPoint?.(brokenSidebar ?? false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brokenSidebar]);

  return (
    <StyledSidebar
      broken={brokenSidebar}
      width={sidebarWidth}
      collapsed={collapsedSidebar}
      className={classnames('sidebar', className)}
      collapsedWidth={sidebarCollapsedWidth}
      fixed={fixedSidebar}
      toggled={toggledSidebar}
      {...rest}
    >
      {children}
      {brokenSidebar ? <Overlay /> : null}
    </StyledSidebar>
  );
};
