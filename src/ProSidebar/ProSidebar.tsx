import React, { forwardRef, createContext, useEffect, useState } from 'react';
import classNames from 'classnames';

export interface Props {
  collapsed?: boolean;
  rtl?: boolean;
  toggled?: boolean;
  width?: string | number;
  image?: string;
  className?: string;
  children?: React.ReactNode;
  breakPoint?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  onToggle?: (value: boolean) => void;
}

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
  { children, className, width, collapsed, rtl, toggled, image, breakPoint, onToggle, ...rest },
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

  useEffect(() => {
    setSidebarState({ ...sidebarState, collapsed, rtl, toggled });
  }, [collapsed, rtl, toggled]);

  return (
    <SidebarContext.Provider value={sidebarState}>
      <div
        {...rest}
        ref={sidebarRef}
        className={classNames('pro-sidebar', className, breakPoint, { collapsed, rtl, toggled })}
        style={{ width }}
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
