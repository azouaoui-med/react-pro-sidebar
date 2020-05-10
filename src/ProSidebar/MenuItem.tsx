import React, { forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';

export interface Props {
  className?: string;
  icon?: React.ReactNode;
  active?: boolean;
  suffix?: React.ReactNode;
}

const MenuItem: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, className, icon, active, suffix, ...rest },
  ref,
) => {
  const menuItemRef: LegacyRef<HTMLLIElement> = (ref as any) || React.createRef<HTMLLIElement>();

  return (
    <li {...rest} ref={menuItemRef} className={classNames('pro-menu-item', className, { active })}>
      <div className="pro-inner-item" tabIndex={0} role="button">
        {icon ? (
          <span className="pro-icon-wrapper">
            <span className="pro-icon">{icon}</span>
          </span>
        ) : null}

        <span className="pro-item-content">{children}</span>
        {suffix ? <span className="suffix-wrapper">{suffix}</span> : null}
      </div>
    </li>
  );
};

export default forwardRef<unknown, Props>(MenuItem);
