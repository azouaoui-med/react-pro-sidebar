import React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import classnames from 'classnames';
import { useSidebar } from '../hooks/useSidebar';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Backdrop } from './Backdrop';
import { sidebarClasses } from '../utils/utilityClasses';

type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'always';

const BREAK_POINTS: Record<BreakPoint, string> = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
  always: 'always',
};

export interface SidebarProps extends React.HTMLAttributes<HTMLHtmlElement> {
  /**
   * width of the sidebar
   * @default ```250px```
   */
  width?: string;

  /**
   * width of the sidebar when collapsed
   * @default ```80px```
   */
  collapsedWidth?: string;

  /**
   * initial collapsed status
   * @default ```false```
   */
  defaultCollapsed?: boolean;

  /**
   * set when the sidebar should trigger responsiveness behavior
   *
   */
  breakPoint?: BreakPoint;

  /**
   * alternative breakpoint value that will be used to trigger responsiveness
   *
   */
  customBreakPoint?: string;

  /**
   * sidebar background color
   */
  backgroundColor?: string;

  /**
   * duration for the transition in milliseconds to be used in collapse and toggle behavior
   * @default ```300```
   */
  transitionDuration?: number;

  /**
   * sidebar background image
   */
  image?: string;

  rtl?: boolean;

  rootStyles?: CSSObject;

  backdropStyles?: CSSObject;

  children?: React.ReactNode;
}

interface StyledSidebarProps extends Omit<SidebarProps, 'backgroundColor'> {
  collapsed?: boolean;
  toggled?: boolean;
  broken?: boolean;
  rtl?: boolean;
}

type StyledInnerSidebarProps = Pick<SidebarProps, 'backgroundColor'>;

const StyledSidebar = styled.aside<StyledSidebarProps>`
  position: relative;
  border-right: 1px solid #efefef;

  transition: ${({ transitionDuration }) => `width, left, right, ${transitionDuration}ms`};

  width: ${({ width }) => width};
  min-width: ${({ width }) => width};

  &.${sidebarClasses.collapsed} {
    width: ${({ collapsedWidth }) => collapsedWidth};
    min-width: ${({ collapsedWidth }) => collapsedWidth};
  }

  &.${sidebarClasses.rtl} {
    direction: rtl;
  }

  &.${sidebarClasses.broken} {
    position: fixed;
    height: 100%;
    top: 0px;
    z-index: 100;

    ${({ rtl, width }) => (!rtl ? `left: -${width};` : '')}

    &.${sidebarClasses.collapsed} {
      ${({ rtl, collapsedWidth }) => (!rtl ? `left: -${collapsedWidth}; ` : '')}
    }

    &.${sidebarClasses.toggled} {
      ${({ rtl }) => (!rtl ? `left: 0;` : '')}
    }

    &.${sidebarClasses.rtl} {
      right: -${({ width }) => width};

      &.${sidebarClasses.collapsed} {
        right: -${({ collapsedWidth }) => collapsedWidth};
      }

      &.${sidebarClasses.toggled} {
        right: 0;
      }
    }
  }

  ${({ rootStyles }) => rootStyles}
`;

const StyledInnerSidebar = styled.div<StyledInnerSidebarProps>`
  &.${sidebarClasses.container} {
    position: relative;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 3;

    ${({ backgroundColor }) => (backgroundColor ? `background-color:${backgroundColor};` : '')}
  }
`;

const StyledSidebarImage = styled.img`
  &.${sidebarClasses.image} {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
`;

const SidebarFR: React.ForwardRefRenderFunction<HTMLHtmlElement, SidebarProps> = (
  {
    width = '250px',
    collapsedWidth = '80px',
    defaultCollapsed = false,
    className,
    children,
    breakPoint,
    customBreakPoint,
    backgroundColor = 'rgb(249, 249, 249, 0.7)',
    transitionDuration = 300,
    image,
    rtl,
    rootStyles,
    backdropStyles,
    ...rest
  },
  ref,
) => {
  const broken = useMediaQuery(
    customBreakPoint ?? (breakPoint ? BREAK_POINTS[breakPoint] : breakPoint),
  );

  const {
    updateSidebarState,
    collapsed: collapsedContext,
    width: widthContext,
    collapsedWidth: collapsedWidthContext,
    broken: brokenContext,
    toggled: toggledContext,
    transitionDuration: transitionDurationContext,
    rtl: rtlContext,
  } = useSidebar();

  const handleBackdropClick = () => {
    updateSidebarState({ toggled: false });
  };

  React.useEffect(() => {
    updateSidebarState({ width, collapsedWidth, broken, rtl });
  }, [width, collapsedWidth, broken, updateSidebarState, rtl]);

  React.useEffect(() => {
    updateSidebarState({
      collapsed: defaultCollapsed,
      transitionDuration,
      toggled: false,
    });
  }, [defaultCollapsed, transitionDuration, updateSidebarState]);

  return (
    <StyledSidebar
      ref={ref}
      data-testid={`${sidebarClasses.root}-test-id`}
      rtl={rtlContext}
      rootStyles={rootStyles}
      width={widthContext}
      collapsedWidth={collapsedWidthContext}
      transitionDuration={transitionDurationContext ?? 300}
      className={classnames(
        sidebarClasses.root,
        {
          [sidebarClasses.collapsed]: collapsedContext,
          [sidebarClasses.toggled]: toggledContext,
          [sidebarClasses.broken]: brokenContext,
          [sidebarClasses.rtl]: rtlContext,
        },
        className,
      )}
      {...rest}
    >
      <StyledInnerSidebar
        data-testid={`${sidebarClasses.container}-test-id`}
        className={sidebarClasses.container}
        backgroundColor={backgroundColor}
      >
        {children}
      </StyledInnerSidebar>

      {image && (
        <StyledSidebarImage
          data-testid={`${sidebarClasses.image}-test-id`}
          src={image}
          alt="sidebar background"
          className={sidebarClasses.image}
        />
      )}

      {brokenContext && toggledContext && (
        <Backdrop
          onClick={handleBackdropClick}
          onKeyPress={handleBackdropClick}
          rootStyles={backdropStyles}
          className={sidebarClasses.backdrop}
        />
      )}
    </StyledSidebar>
  );
};

export const Sidebar = React.forwardRef<HTMLHtmlElement, SidebarProps>(SidebarFR);
