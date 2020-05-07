import React, { forwardRef, LegacyRef } from 'react';
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

const ProSidebar: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, className, width, collapsed, rtl, image, ...rest },
  ref,
) => {
  const sidebarRef: LegacyRef<HTMLDivElement> = (ref as any) || React.createRef<HTMLDivElement>();
  return (
    <div
      {...rest}
      ref={sidebarRef}
      className={classNames('pro-sidebar', className, { collapsed, rtl })}
      style={{ width }}
    >
      {image ? <img src={image} alt="sidebar background" className="sidebar-bg" /> : null}
      <div className="pro-sidebar-inner">{children}</div>
    </div>
  );
};

export default forwardRef<unknown, Props>(ProSidebar);
