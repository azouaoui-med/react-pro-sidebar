import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { useSidebar } from './sidebarContext';
import { render } from 'react-dom';

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
  height?: string;
  fixed?: boolean;
}

interface StyledHeaderProps extends HeaderProps {
  collapsedSidebar?: boolean;
  brokenSidebar?: boolean;
  fixedSidebar?: boolean;
  sidebarWidth?: string;
  sidebarCollapsedWidth?: string;
  mounted: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
  height: ${({ height }) => height};
  min-height: ${({ height }) => height};
  position: relative;
  width: 100%;
  ${({ mounted }) => (mounted ? 'transition: width 0.3s;' : '')}

  ${({ fixed, fixedSidebar, collapsedSidebar, sidebarWidth, sidebarCollapsedWidth, height }) =>
    fixed
      ? `
      position: fixed;
      z-index: 2;
        ~ .layout,
        ~ .content {
          margin-top: ${height};
        }

        ${
          fixedSidebar
            ? `width:calc(100% - ${collapsedSidebar ? sidebarCollapsedWidth : sidebarWidth})`
            : ''
        }
        `
      : ''};

  ${({ brokenSidebar }) => (brokenSidebar ? ' width: 100% !important;transition: none;' : '')}
`;

export const Header: React.FC<HeaderProps> = ({
  height = '64px',
  fixed = false,
  className,
  children,
  ...rest
}) => {
  const [mounted, setMounted] = React.useState(false);

  const {
    collapsed: collapsedSidebar,
    fixed: fixedSidebar,
    width: sidebarWidth,
    collapsedWidth: sidebarCollapsedWidth,
    broken: brokenSidebar,
  } = useSidebar();

  React.useLayoutEffect(() => {
    setMounted(true);
  }, []);

  return (
    <StyledHeader
      mounted={mounted}
      height={height}
      fixed={fixed}
      collapsedSidebar={collapsedSidebar}
      brokenSidebar={brokenSidebar}
      fixedSidebar={fixedSidebar}
      sidebarWidth={sidebarWidth}
      sidebarCollapsedWidth={sidebarCollapsedWidth}
      className={classnames('header', className)}
      {...rest}
    >
      {children}
    </StyledHeader>
  );
};
