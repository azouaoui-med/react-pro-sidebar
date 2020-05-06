import React, { useState, forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';
import SlideDown from 'react-slidedown';

export interface Props {
  className?: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
}

const SubMenu: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, icon, className, title, ...rest },
  ref,
) => {
  const [height, setHeight] = useState<number | string>(0);
  const [closed, setClosed] = useState(true);

  const handleToggleSubMenu = () => {
    setHeight(height === 0 ? 'auto' : 0);
    setClosed(!closed);
  };

  const subMenuRef: LegacyRef<HTMLLIElement> = (ref as any) || React.createRef<HTMLLIElement>();

  return (
    <li
      ref={subMenuRef}
      className={classNames('pro-menu-item pro-sub-menu', className, { open: height !== 0 })}
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
        <span className="pro-item-content">{title}</span>
        <span className="pro-arrow-wrapper">
          <span className="pro-arrow" />
        </span>
      </div>
      <SlideDown closed={closed} className="pro-inner-list-item">
        <ul>{children}</ul>
      </SlideDown>
    </li>
  );
};

export default forwardRef<unknown, Props>(SubMenu);
