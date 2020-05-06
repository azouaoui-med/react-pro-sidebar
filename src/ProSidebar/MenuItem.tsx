import React, { forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';

export interface Props {
  className?: string;
  icon?: React.ReactNode;
}

const MenuItem: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, className, icon, ...rest },
  ref,
) => {
  const menuItemRef: LegacyRef<HTMLLIElement> = (ref as any) || React.createRef<HTMLLIElement>();

  return (
    <li {...rest} ref={menuItemRef} className={classNames('pro-menu-item', className)}>
      <div className="pro-inner-item" tabIndex={0} role="button">
        {icon ? (
          <span className="pro-icon-wrapper">
            <span className="pro-icon">{icon}</span>
          </span>
        ) : null}

        <span className="pro-item-content">{children}</span>
      </div>
    </li>
  );
};

export default forwardRef<unknown, Props>(MenuItem);
