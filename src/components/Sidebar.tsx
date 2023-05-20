import React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import classnames from 'classnames';
import { useLegacySidebar } from '../hooks/useLegacySidebar';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { sidebarClasses } from '../utils/utilityClasses';
import { StyledBackdrop } from '../styles/StyledBackdrop';

type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'always' | 'all';

const BREAK_POINTS = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
  always: 'always',
  all: 'all',
};

export interface SidebarProps extends React.HTMLAttributes<HTMLHtmlElement> {
  /**
   * sidebar collapsed status
   */
  collapsed?: boolean;

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
   *
   * @deprecated use ```collapsed``` instead
   */
  defaultCollapsed?: boolean;

  /**
   * set when the sidebar should trigger responsiveness behavior
   * @type `xs | sm | md | lg | xl | xxl | all | undefined`
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

  /**
   * sidebar direction
   */
  rtl?: boolean;

  /**
   * sidebar toggled status
   */
  toggled?: boolean;

  /**
   * callback function to be called when backdrop is clicked
   */
  onBackdropClick?: () => void;

  /**
   * callback function to be called when sidebar's broken state changes
   */
  onBreakPoint?: (broken: boolean) => void;

  /**
   * sidebar styles to be applied from the root element
   */
  rootStyles?: CSSObject;

  children?: React.ReactNode;
}

interface StyledSidebarProps extends Omit<SidebarProps, 'backgroundColor'> {
  collapsed?: boolean;
  toggled?: boolean;
  broken?: boolean;
  rtl?: boolean;
}

type StyledSidebarContainerProps = Pick<SidebarProps, 'backgroundColor'>;

const StyledSidebar = styled.aside<StyledSidebarProps>`
  position: relative;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: #efefef;

  transition: ${({ transitionDuration }) => `width, left, right, ${transitionDuration}ms`};

  width: ${({ width }) => width};
  min-width: ${({ width }) => width};

  &.${sidebarClasses.collapsed} {
    width: ${({ collapsedWidth }) => collapsedWidth};
    min-width: ${({ collapsedWidth }) => collapsedWidth};
  }

  &.${sidebarClasses.rtl} {
    direction: rtl;
    border-right-width: none;
    border-left-width: 1px;
    border-right-style: none;
    border-left-style: solid;
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

const StyledSidebarContainer = styled.div<StyledSidebarContainerProps>`
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;

  ${({ backgroundColor }) => (backgroundColor ? `background-color:${backgroundColor};` : '')}
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

interface SidebarContextProps {
  collapsed?: boolean;
  toggled?: boolean;
  rtl?: boolean;
  transitionDuration?: number;
}

export const SidebarContext = React.createContext<SidebarContextProps>({
  collapsed: false,
  toggled: false,
  rtl: false,
  transitionDuration: 300,
});

export const Sidebar = React.forwardRef<HTMLHtmlElement, SidebarProps>(
  (
    {
      collapsed,
      toggled,
      onBackdropClick,
      onBreakPoint,
      width = '250px',
      collapsedWidth = '80px',
      defaultCollapsed,
      className,
      children,
      breakPoint,
      customBreakPoint,
      backgroundColor = 'rgb(249, 249, 249, 0.7)',
      transitionDuration = 300,
      image,
      rtl,
      rootStyles,
      ...rest
    },
    ref,
  ) => {
    const getBreakpointValue = () => {
      if (customBreakPoint) {
        return `(max-width: ${customBreakPoint})`;
      }

      if (breakPoint) {
        if (['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(breakPoint)) {
          return `(max-width: ${BREAK_POINTS[breakPoint]})`;
        }

        if (breakPoint === 'always' || breakPoint === 'all') {
          if (breakPoint === 'always') {
            console.warn(
              'The "always" breakPoint is deprecated and will be removed in future release. ' +
                'Please use the "all" breakPoint instead.',
            );
          }
          return `screen`;
        }

        return `(max-width: ${breakPoint})`;
      }
    };

    const breakpointCallbackFnRef = React.useRef<(broken: boolean) => void>();

    breakpointCallbackFnRef.current = (broken: boolean) => {
      onBreakPoint?.(broken);
    };

    const broken = useMediaQuery(getBreakpointValue());

    const [mounted, setMounted] = React.useState(false);

    const legacySidebarContext = useLegacySidebar();

    const collapsedValue =
      collapsed ?? (!mounted && defaultCollapsed ? true : legacySidebarContext?.collapsed);
    const toggledValue = toggled ?? legacySidebarContext?.toggled;

    const handleBackdropClick = () => {
      onBackdropClick?.();
      legacySidebarContext?.updateSidebarState({ toggled: false });
    };

    React.useEffect(() => {
      breakpointCallbackFnRef.current?.(broken);
    }, [broken]);

    // TODO: remove in next major version
    React.useEffect(() => {
      legacySidebarContext?.updateSidebarState({ broken, rtl, transitionDuration });

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [broken, legacySidebarContext?.updateSidebarState, rtl, transitionDuration]);

    // TODO: remove in next major version
    React.useEffect(() => {
      if (!mounted) {
        legacySidebarContext?.updateSidebarState({
          collapsed: defaultCollapsed,
        });
        setMounted(true);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultCollapsed, mounted, legacySidebarContext?.updateSidebarState]);

    return (
      <SidebarContext.Provider
        value={{ collapsed: collapsedValue, toggled: toggledValue, rtl, transitionDuration }}
      >
        <StyledSidebar
          ref={ref}
          data-testid={`${sidebarClasses.root}-test-id`}
          rtl={rtl}
          rootStyles={rootStyles}
          width={width}
          collapsedWidth={collapsedWidth}
          transitionDuration={transitionDuration}
          className={classnames(
            sidebarClasses.root,
            {
              [sidebarClasses.collapsed]: collapsedValue,
              [sidebarClasses.toggled]: toggledValue,
              [sidebarClasses.broken]: broken,
              [sidebarClasses.rtl]: rtl,
            },
            className,
          )}
          {...rest}
        >
          <StyledSidebarContainer
            data-testid={`${sidebarClasses.container}-test-id`}
            className={sidebarClasses.container}
            backgroundColor={backgroundColor}
          >
            {children}
          </StyledSidebarContainer>

          {image && (
            <StyledSidebarImage
              data-testid={`${sidebarClasses.image}-test-id`}
              src={image}
              alt="sidebar background"
              className={sidebarClasses.image}
            />
          )}

          {broken && toggledValue && (
            <StyledBackdrop
              data-testid={`${sidebarClasses.backdrop}-test-id`}
              role="button"
              tabIndex={0}
              aria-label="backdrop"
              onClick={handleBackdropClick}
              onKeyPress={handleBackdropClick}
              className={sidebarClasses.backdrop}
            />
          )}
        </StyledSidebar>
      </SidebarContext.Provider>
    );
  },
);
