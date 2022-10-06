import React from 'react';
import styled, { CSSObject } from 'styled-components';
import classnames from 'classnames';
import { SubMenuContent } from './SubMenuContent';
import { createPopper, Instance } from '@popperjs/core';
import { useSidebar } from '../hooks/useSidebar';
import { StyledMenuLabel } from '../styles/StyledMenuLabel';
import { StyledMenuIcon } from '../styles/StyledMenuIcon';
import { StyledMenuPrefix } from '../styles/StyledMenuPrefix';
import { MenuItemProps } from './MenuItem';
import { StyledMenuItemAnchor } from '../styles/StyledMenuItemAnchor';
import { useMenu } from '../hooks/useMenu';
import { StyledMenuSuffix } from '../styles/StyledMenuSuffix';

export interface SubMenuProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> {
  className?: string;
  label?: string | React.ReactNode;
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  active?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  /**
   * @ignore
   */
  level?: number;
}

interface StyledExpandIconProps {
  open?: boolean;
  rtl?: boolean;
}

interface StyledExpandIconWrapperProps {
  collapsed?: boolean;
  level?: number;
  rtl?: boolean;
}

const StyledExpandIconWrapper = styled.span<StyledExpandIconWrapperProps>`
  ${({ collapsed, level, rtl }) =>
    collapsed &&
    level === 0 &&
    `
    position: absolute;
    ${rtl ? 'left: 10px;' : 'right: 10px;'}
    top: 50%;
    transform: translateY(-50%);
    
    `}
`;

const StyledExpandIcon = styled.span<StyledExpandIconProps>`
  display: inline-block;
  transition: transform 0.3s;
  ${({ rtl }) =>
    rtl
      ? `
          border-left: 2px solid currentcolor;
          border-top: 2px solid currentcolor;
        `
      : ` border-right: 2px solid currentcolor;
          border-bottom: 2px solid currentcolor;
        `}

  width: 5px;
  height: 5px;
  transform: rotate(${({ open, rtl }) => (open ? (rtl ? '-135deg' : '45deg') : '-45deg')});
`;

const StyledExpandIconCollapsed = styled.span`
  width: 5px;
  height: 5px;
  background-color: currentcolor;
  border-radius: 50%;
  display: inline-block;
`;

const StyledSubMenu = styled.li<{ menuItemStyles?: CSSObject }>`
  position: relative;
  width: 100%;

  ${({ menuItemStyles }) => menuItemStyles};
`;

export const SubMenuFR: React.ForwardRefRenderFunction<HTMLLIElement, SubMenuProps> = (
  {
    children,
    className,
    label,
    icon,
    title,
    prefix,
    suffix,
    open: openSubmenu,
    defaultOpen,
    level = 0,
    active = false,
    disabled = false,
    onOpenChange,
    onClick,
    ...rest
  },
  ref,
) => {
  const { collapsed, transitionDuration, toggled, rtl } = useSidebar();
  const { renderMenuItemStyles, renderExpandIcon, closeOnClick } = useMenu();

  const [open, setOpen] = React.useState<boolean>(!!defaultOpen);
  const [openDefault, setOpenDefault] = React.useState<boolean>(!!defaultOpen);
  const [openWhenCollapsed, setOpenWhenCollapsed] = React.useState<boolean>(false);
  const [popperInstance, setPopperInstance] = React.useState<Instance | undefined>();

  const childNodes = React.Children.toArray(children).filter(Boolean) as [
    React.ReactElement<SubMenuProps | MenuItemProps>,
  ];

  const anchorRef = React.useRef<HTMLAnchorElement>(null);
  const SubMenuContentRef = React.useRef<HTMLDivElement>(null);

  const handleSlideToggle = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    onClick?.(event);
    if (level === 0 && collapsed) setOpenWhenCollapsed(!openWhenCollapsed);
    else if (typeof openSubmenu === 'undefined') {
      onOpenChange?.(!open);
      setOpen(!open);
    } else {
      onOpenChange?.(!openSubmenu);
    }
  };

  React.useEffect(() => {
    if (level === 0 && collapsed && SubMenuContentRef.current && anchorRef.current) {
      const instance = createPopper(anchorRef.current, SubMenuContentRef.current, {
        placement: 'right',
        strategy: 'fixed',
      });

      setPopperInstance(instance);
    }
  }, [level, collapsed]);

  React.useEffect(() => {
    if (SubMenuContentRef.current && anchorRef.current) {
      const ro = new ResizeObserver(() => {
        if (popperInstance) {
          popperInstance.update();
        }
      });

      ro.observe(SubMenuContentRef.current);
      ro.observe(anchorRef.current);
    }

    setTimeout(() => {
      if (popperInstance) {
        popperInstance.update();
      }
    }, transitionDuration);
  }, [popperInstance, transitionDuration, toggled]);

  React.useLayoutEffect(() => {
    setTimeout(() => popperInstance?.update(), transitionDuration);
    if (collapsed && level === 0) {
      setOpenWhenCollapsed(false);
      // TODO: if its useful to close first level submenus on collapse sidebar uncomment the code below
      // setOpen(false);
    }
  }, [collapsed, level, transitionDuration, popperInstance]);

  React.useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        (closeOnClick &&
          !(event.target as HTMLElement).closest('.menu-item')?.classList.contains('sub-menu') &&
          openWhenCollapsed) ||
        (!SubMenuContentRef.current?.contains(event.target as Node) && openWhenCollapsed)
      )
        setOpenWhenCollapsed(false);
    };

    if (collapsed && level === 0) document.addEventListener('click', handleDocumentClick, false);
    else document.removeEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [collapsed, level, closeOnClick, openWhenCollapsed]);

  React.useEffect(() => {
    if (openSubmenu) setOpenDefault(openSubmenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledSubMenu
      ref={ref}
      className={classnames(
        'sub-menu',
        'menu-item',
        { active },
        { disabled },
        { open: openSubmenu ?? open },
        className,
      )}
      menuItemStyles={renderMenuItemStyles?.({ level, collapsed: !!collapsed, disabled, active })}
    >
      <StyledMenuItemAnchor
        ref={anchorRef}
        rtl={rtl}
        title={title}
        level={level}
        collapsed={collapsed}
        className="menu-anchor"
        onClick={handleSlideToggle}
        disabled={disabled}
        active={active}
        {...rest}
      >
        {icon && (
          <StyledMenuIcon rtl={rtl} className="menu-icon">
            {icon}
          </StyledMenuIcon>
        )}

        {prefix && (
          <StyledMenuPrefix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={level === 0}
            className="menu-prefix"
            rtl={rtl}
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        <StyledMenuLabel className="menu-label">{label}</StyledMenuLabel>

        {suffix && (
          <StyledMenuSuffix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={level === 0}
            className="menu-suffix"
          >
            {suffix}
          </StyledMenuSuffix>
        )}

        <StyledExpandIconWrapper
          rtl={rtl}
          className="expand-icon"
          collapsed={collapsed}
          level={level}
        >
          {renderExpandIcon ? (
            renderExpandIcon({
              collapsed: !!collapsed,
              level,
              open: openSubmenu ?? open,
              disabled,
              active,
            })
          ) : collapsed && level === 0 ? (
            <StyledExpandIconCollapsed />
          ) : (
            <StyledExpandIcon rtl={rtl} open={openSubmenu ?? open} />
          )}
        </StyledExpandIconWrapper>
      </StyledMenuItemAnchor>
      <SubMenuContent
        ref={SubMenuContentRef}
        openWhenCollapsed={openWhenCollapsed}
        open={openSubmenu ?? open}
        firstLevel={level === 0}
        collapsed={collapsed}
        defaultOpen={openDefault}
      >
        {childNodes.map((node) =>
          React.cloneElement(node, {
            ...node.props,
            level: level + 1,
          }),
        )}
      </SubMenuContent>
    </StyledSubMenu>
  );
};
export const SubMenu = React.forwardRef<HTMLLIElement, SubMenuProps>(SubMenuFR);
