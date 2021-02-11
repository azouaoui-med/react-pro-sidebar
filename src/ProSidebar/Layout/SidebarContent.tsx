import React, { forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';

export type Props = React.HTMLAttributes<HTMLElement> & {
  className?: string;
  children?: React.ReactNode;
};

const SidebarContent: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, className, ...rest },
  ref,
) => {
  const sidebarContentRef: LegacyRef<HTMLDivElement> =
    (ref as any) || React.createRef<HTMLDivElement>();
  return (
    <div ref={sidebarContentRef} className={classNames('pro-sidebar-content', className)} {...rest}>
      {children}
    </div>
  );
};

export default forwardRef<unknown, Props>(SidebarContent);
