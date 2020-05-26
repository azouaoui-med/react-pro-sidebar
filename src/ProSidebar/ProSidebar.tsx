import React, { forwardRef, LegacyRef, createContext, useEffect, useState } from 'react';
import '../scss/styles.scss';
import classNames from 'classnames';

export interface Props {
  collapsed?: boolean;
  rtl?: boolean;
  width?: string | number;
  image?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarContextProps {
  collapsed: boolean;
  rtl: boolean;
}

export const SidebarContext = createContext<SidebarContextProps>({
  collapsed: false,
  rtl: false,
});

const ProSidebar: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, className, width, collapsed, rtl, image, ...rest },
  ref,
) => {
  const [sidebarState, setSidebarState] = useState({
    collapsed: typeof collapsed === 'undefined' ? false : collapsed,
    rtl: typeof rtl === 'undefined' ? false : rtl,
  });

  const sidebarRef: LegacyRef<HTMLDivElement> = (ref as any) || React.createRef<HTMLDivElement>();

  useEffect(() => {
    setSidebarState({ ...sidebarState, collapsed });
  }, [collapsed]);

  useEffect(() => {
    setSidebarState({ ...sidebarState, rtl });
  }, [rtl]);

  return (
    <SidebarContext.Provider value={sidebarState}>
      <div
        {...rest}
        ref={sidebarRef}
        className={classNames('pro-sidebar', className, { collapsed, rtl })}
        style={{ width }}
      >
        {image ? <img src={image} alt="sidebar background" className="sidebar-bg" /> : null}
        <div className="pro-sidebar-inner">{children}</div>
      </div>
    </SidebarContext.Provider>
  );
};

export default forwardRef<unknown, Props>(ProSidebar);
