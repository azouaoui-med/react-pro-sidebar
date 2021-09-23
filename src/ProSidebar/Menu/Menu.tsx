/* eslint-disable react/no-array-index-key */
import React, { forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';

export type IconShape = 'square' | 'round' | 'circle';

export type Props = React.HTMLAttributes<HTMLElement> & {
  className?: string;
  children?: React.ReactNode;
  iconShape?: IconShape;
  popperArrow?: boolean;
  subMenuBullets?: boolean;
  innerSubMenuArrows?: boolean;
};

const Menu: React.ForwardRefRenderFunction<unknown, Props> = (
  {
    children,
    className,
    iconShape,
    popperArrow = false,
    subMenuBullets = false,
    innerSubMenuArrows = true,
    ...rest
  },
  ref,
) => {
  const menuRef: LegacyRef<HTMLElement> = (ref as any) || React.createRef<HTMLElement>();
  return (
    <nav
      ref={menuRef}
      className={classNames('pro-menu', className, {
        [`shaped ${iconShape}`]: ['square', 'round', 'circle'].indexOf(iconShape) >= 0,
        'submenu-bullets': subMenuBullets,
        'inner-submenu-arrows': innerSubMenuArrows,
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
