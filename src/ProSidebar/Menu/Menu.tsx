/* eslint-disable react/no-array-index-key */
import React, { forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';

export type IconShapeType = 'square' | 'round' | 'circle';

export interface Props {
  className?: string;
  children?: any;
  iconShape?: IconShapeType;
}

const Menu: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, className, iconShape, ...rest },
  ref,
) => {
  const menuRef: LegacyRef<HTMLElement> = (ref as any) || React.createRef<HTMLElement>();

  return (
    <nav
      {...rest}
      ref={menuRef}
      className={classNames('pro-menu', className, {
        [`shaped ${iconShape}`]: ['square', 'round', 'circle'].indexOf(iconShape) >= 0,
      })}
    >
      <ul>
        {React.Children.map(children, (child) => React.cloneElement(child, { firstchild: 1 }))}
      </ul>
    </nav>
  );
};

export default forwardRef<unknown, Props>(Menu);
