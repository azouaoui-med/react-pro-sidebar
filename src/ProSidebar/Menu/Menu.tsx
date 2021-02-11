/* eslint-disable react/no-array-index-key */
import React, { forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';

export type IconShapeType = 'square' | 'round' | 'circle';

export type Props = React.HTMLAttributes<HTMLElement> & {
  className?: string;
  children?: React.ReactNode;
  iconShape?: IconShapeType;
  popperArrow?: boolean;
};

const Menu: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, className, iconShape, popperArrow, ...rest },
  ref,
) => {
  const menuRef: LegacyRef<HTMLElement> = (ref as any) || React.createRef<HTMLElement>();
  return (
    <nav
      ref={menuRef}
      className={classNames('pro-menu', className, {
        [`shaped ${iconShape}`]: ['square', 'round', 'circle'].indexOf(iconShape) >= 0,
      })}
      {...rest}
    >
      <ul>
        {React.Children.toArray(children)
          .filter(Boolean)
          .map((child, index) =>
            React.cloneElement(child as React.ReactElement, {
              key: index,
              firstchild: 1,
              popperarrow: popperArrow === true ? 1 : 0,
            }),
          )}
      </ul>
    </nav>
  );
};

export default forwardRef<unknown, Props>(Menu);
