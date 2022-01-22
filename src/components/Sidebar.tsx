import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { useSidebar } from './sidebarContext';
import { BreakPoint } from '../types/types';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Overlay } from './Overlay';
import { useLayout } from './layoutContext';

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
   * width of the sidebar
   */
  width?: string;
  collapsedWidth?: string;
  defaultCollapsed?: boolean;
  fixed?: boolean;
  breakPoint?: BreakPoint;
  customBreakPoint?: string;
  backgroundColor?: string;
}

interface StyledSidebarProps extends Omit<SidebarProps, 'backgroundColor'> {
  collapsed?: boolean;
  toggled?: boolean;
  broken?: boolean;
  rtl?: boolean;
}

type StyledInnerSidebarProps = Pick<SidebarProps, 'backgroundColor'>;

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

  ${({ broken, collapsed, collapsedWidth, toggled, width, rtl }) =>
    broken
      ? ` 
        position: fixed;
        height: 100%;
        top: 0;
        z-index: 100;
        ${
          rtl
            ? `
            right: -${width};
            ${collapsed ? `right:-${collapsedWidth};` : ''}
            ${toggled ? 'right:0;' : ''}
            `
            : `
            left: -${width};
            ${collapsed ? `left:-${collapsedWidth};` : ''}
            ${toggled ? 'left:0;' : ''}`
        }

      
        `
      : ''}
`;

const StyledInnerSidebar = styled.div<StyledInnerSidebarProps>`
  height: 100%;
  position: relative;
  z-index: 101;
  ${({ backgroundColor }) => (backgroundColor ? `background-color:${backgroundColor};` : '')}
`;

export const Sidebar: React.FC<SidebarProps> = ({
  width = '250px',
  collapsedWidth = '80px',
  fixed = false,
  defaultCollapsed = false,
  className,
  children,
  breakPoint,
  customBreakPoint,
  backgroundColor,
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

  const { rtl } = useLayout();

  const handleOverlayClick = () => {
    updateSidebarState({ toggled: false });
  };

  React.useEffect(() => {
    updateSidebarState({ fixed, width, collapsedWidth, broken });
  }, [fixed, width, collapsedWidth, broken, updateSidebarState]);

  React.useEffect(() => {
    updateSidebarState({ collapsed: defaultCollapsed, toggled: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledSidebar
      fixed={fixedSidebar}
      collapsed={collapsedSidebar}
      broken={brokenSidebar}
      toggled={toggledSidebar}
      rtl={rtl}
      width={sidebarWidth}
      collapsedWidth={sidebarCollapsedWidth}
      className={classnames('sidebar', className)}
      {...rest}
    >
      <StyledInnerSidebar className="sidebar-inner" backgroundColor={backgroundColor}>
        {children}
      </StyledInnerSidebar>
      {brokenSidebar && toggledSidebar ? <Overlay onOverlayClick={handleOverlayClick} /> : null}
    </StyledSidebar>
  );
};