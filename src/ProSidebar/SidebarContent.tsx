import React, { forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';

export interface Props {
  className?: string;
  children?: React.ReactNode;
}

const SidebarContent: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, className, ...rest },
  ref,
) => {
  const sidebarContentRef: LegacyRef<HTMLDivElement> =
    (ref as any) || React.createRef<HTMLDivElement>();
  return (
    <div {...rest} ref={sidebarContentRef} className={classNames('pro-sidebar-content', className)}>
      {children}
    </div>
  );
};

export default forwardRef<unknown, Props>(SidebarContent);
