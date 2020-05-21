import React, { useState, forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';
import SlideDown from 'react-slidedown';

export interface Props {
  className?: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const SubMenu: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, icon, className, title, defaultOpen = false, open, prefix, suffix, ...rest },
  ref,
) => {
  const [closed, setClosed] = useState(!defaultOpen);

  const handleToggleSubMenu = () => {
    setClosed(!closed);
  };

  const subMenuRef: LegacyRef<HTMLLIElement> = (ref as any) || React.createRef<HTMLLIElement>();

  return (
    <li
      ref={subMenuRef}
      className={classNames('pro-menu-item pro-sub-menu', className, {
        open: typeof open === 'undefined' ? !closed : open,
      })}
    >
      <div
        {...rest}
        className="pro-inner-item"
        onClick={handleToggleSubMenu}
        onKeyPress={handleToggleSubMenu}
        role="button"
        tabIndex={0}
      >
        {icon ? (
          <span className="pro-icon-wrapper">
            <span className="pro-icon">{icon}</span>
          </span>
        ) : null}
        {prefix ? <span className="prefix-wrapper">{prefix}</span> : null}
        <span className="pro-item-content">{title}</span>
        {suffix ? <span className="suffix-wrapper">{suffix}</span> : null}
        <span className="pro-arrow-wrapper">
          <span className="pro-arrow" />
        </span>
      </div>
      <SlideDown
        closed={typeof open === 'undefined' ? closed : !open}
        className="pro-inner-list-item"
      >
        <ul>{children}</ul>
      </SlideDown>
    </li>
  );
};

export default forwardRef<unknown, Props>(SubMenu);
