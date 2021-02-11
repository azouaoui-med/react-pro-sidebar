import React, { forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';

export type Props = React.LiHTMLAttributes<HTMLLIElement> & {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  active?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  firstchild?: boolean;
  popperarrow?: boolean;
};

const MenuItem: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, className, icon, active, prefix, suffix, firstchild, popperarrow, ...rest },
  ref,
) => {
  const menuItemRef: LegacyRef<HTMLLIElement> = (ref as any) || React.createRef<HTMLLIElement>();

  return (
    <li ref={menuItemRef} className={classNames('pro-menu-item', className, { active })} {...rest}>
      <div className="pro-inner-item" tabIndex={0} role="button">
        {icon ? (
          <span className="pro-icon-wrapper">
            <span className="pro-icon">{icon}</span>
          </span>
        ) : null}

        {prefix ? <span className="prefix-wrapper">{prefix}</span> : null}
        <span className="pro-item-content">{children}</span>
        {suffix ? <span className="suffix-wrapper">{suffix}</span> : null}
      </div>
    </li>
  );
};

export default forwardRef<unknown, Props>(MenuItem);
