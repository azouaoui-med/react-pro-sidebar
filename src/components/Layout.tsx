import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { useSidebar } from './sidebarContext';
import { useLayout } from './layoutContext';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  rtl?: boolean;

  /**
   * set to ```true``` when Sidebar component is a direct descendent of Layout
   * @default ```false```
   */
  hasSidebar?: boolean;
}

interface StyledLayoutProps extends LayoutProps {
  fixedSidebar?: boolean;
}

const StyledLayout = styled.div<StyledLayoutProps>`
  min-height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
  ${({ rtl }) => (rtl ? 'direction: rtl' : '')};
  ${({ hasSidebar }) => (hasSidebar ? 'flex-direction: row' : '')};
  ${({ fixedSidebar }) => (fixedSidebar ? 'height: 100%' : '')};
`;

export const Layout: React.FC<LayoutProps> = ({ rtl = false, children, className, ...rest }) => {
  const { fixed: fixedSidebar } = useSidebar();
  const { rtl: layoutRtl, updateLayoutState } = useLayout();

  React.useEffect(() => {
    updateLayoutState({ rtl });
  }, [rtl, updateLayoutState]);

  return (
    <StyledLayout
      data-testid="layout-test-id"
      fixedSidebar={fixedSidebar}
      className={classnames('layout', className)}
      rtl={layoutRtl}
      {...rest}
    >
      {children}
    </StyledLayout>
  );
};
