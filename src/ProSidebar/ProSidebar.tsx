import React, { forwardRef, createContext, useEffect, useState } from 'react';
import classNames from 'classnames';

export type Props = React.HTMLAttributes<HTMLElement> & {
  collapsed?: boolean;
  rtl?: boolean;
  toggled?: boolean;
  width?: string | number;
  collapsedWidth?: string | number;
  image?: string;
  className?: string;
  children?: React.ReactNode;
  breakPoint?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  onToggle?: (value: boolean) => void;
  style?: React.CSSProperties;
};

export interface SidebarContextProps {
  collapsed: boolean;
  rtl: boolean;
  toggled: boolean;
}

export const SidebarContext = createContext<SidebarContextProps>({
  collapsed: false,
  rtl: false,
  toggled: false,
});

const ProSidebar: React.ForwardRefRenderFunction<unknown, Props> = (
  {
    children,
    className,
    width,
    collapsedWidth,
    collapsed,
    rtl,
    toggled,
    image,
    breakPoint,
    onToggle,
    style = {},
    ...rest
  },
  ref,
) => {
  const [sidebarState, setSidebarState] = useState({
    collapsed: typeof collapsed === 'undefined' ? false : collapsed,
    rtl: typeof rtl === 'undefined' ? false : rtl,
    toggled: typeof toggled === 'undefined' ? false : toggled,
  });

  const sidebarRef: React.RefObject<HTMLDivElement> =
    (ref as any) || React.createRef<HTMLDivElement>();

  const handleToggleSidebar = () => {
    const toggleValue = sidebarState.toggled;
    setSidebarState({ ...sidebarState, toggled: !toggleValue });
    if (onToggle) {
      onToggle(!toggleValue);
    }
  };

  const widthStyle = width ? { width, minWidth: width } : {};
  const collapsedWidthStyle = collapsedWidth
    ? { width: collapsedWidth, minWidth: collapsedWidth }
    : {};
  const finalWidth = collapsed ? collapsedWidthStyle : widthStyle;

  useEffect(() => {
    setSidebarState({ ...sidebarState, collapsed, rtl, toggled });
  }, [collapsed, rtl, toggled]);

  return (
    <SidebarContext.Provider value={sidebarState}>
      <div
        ref={sidebarRef}
        className={classNames('pro-sidebar', className, breakPoint, { collapsed, rtl, toggled })}
        style={{ ...finalWidth, ...style }}
        {...rest}
      >
        <div className="pro-sidebar-inner">
          {image ? <img src={image} alt="sidebar background" className="sidebar-bg" /> : null}
          <div className="pro-sidebar-layout">{children}</div>
        </div>
        <div
          className="overlay"
          onClick={handleToggleSidebar}
          onKeyPress={handleToggleSidebar}
          role="button"
          tabIndex={0}
          aria-label="overlay"
        />
      </div>
    </SidebarContext.Provider>
  );
};

export default forwardRef<unknown, Props>(ProSidebar);
