import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { SubMenuContent } from './SubMenuContent';
import { createPopper, Instance } from '@popperjs/core';
import { useSidebar } from '../hooks/useSidebar';
import { StyledMenuLabel } from '../styles/StyledMenuLabel';
import { StyledMenuIcon } from '../styles/StyledMenuIcon';
import { StyledMenuPrefix } from '../styles/StyledMenuPrefix';
import { MenuItemProps } from './MenuItem';

export interface SubMenuProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'prefix'> {
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  /**
   * @ignore
   */
  level?: number;
}

interface StyledExpandIconProps {
  open?: boolean;
}

const StyledExpandIcon = styled.span<StyledExpandIconProps>`
  transition: transform 0.3s;
  border-right: 2px solid currentcolor;
  border-bottom: 2px solid currentcolor;
  width: 5px;
  height: 5px;
  transform: rotate(${({ open }) => (open ? '45deg' : '-45deg')});
`;

const StyledExpandIconCollapsed = styled.span`
  width: 5px;
  height: 5px;
  background-color: currentcolor;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledSubMenu = styled.li`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const StyledAnchor = styled.a<{ level: number; collapsed?: boolean }>`
  display: flex;
  align-items: center;
  height: 50px;
  padding-right: 20px;
  padding-left: ${({ level, collapsed }) =>
    level === 0 ? 20 : (collapsed ? level : level + 1) * 20}px;
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }
`;

export const SubMenu: React.FC<SubMenuProps> = ({
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
  ...rest
}) => {
  const { collapsed, transitionDuration, toggled } = useSidebar();

  const [open, setOpen] = React.useState<boolean>(!!defaultOpen);
  const [openDefault, setOpenDefault] = React.useState<boolean>(!!defaultOpen);
  const [openWhenCollapsed, setOpenWhenCollapsed] = React.useState<boolean>(false);
  const [popperInstance, setPopperInstance] = React.useState<Instance | undefined>();

  const childNodes = React.Children.toArray(children).filter(Boolean) as [
    React.ReactElement<SubMenuProps | MenuItemProps>,
  ];

  const anchorRef = React.useRef<HTMLAnchorElement>(null);
  const SubMenuContentRef = React.useRef<HTMLDivElement>(null);

  const handleSlideToggle = (): void => {
    if (level === 0 && collapsed) setOpenWhenCollapsed(!openWhenCollapsed);
    else setOpen(!open);
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
      if (!SubMenuContentRef.current?.contains(event.target as Node) && openWhenCollapsed)
        setOpenWhenCollapsed(false);
    };

    if (collapsed && level === 0) document.addEventListener('click', handleDocumentClick, false);
    else document.removeEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [collapsed, level, openWhenCollapsed]);

  React.useEffect(() => {
    if (openSubmenu) setOpenDefault(openSubmenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledSubMenu
      className={classnames('sub-menu', { open: openSubmenu ?? open }, className)}
      {...rest}
    >
      <StyledAnchor
        ref={anchorRef}
        onClick={handleSlideToggle}
        title={title}
        level={level}
        collapsed={collapsed}
      >
        {icon && <StyledMenuIcon className="menu-icon">{icon}</StyledMenuIcon>}

        {prefix && (
          <StyledMenuPrefix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={level === 0}
            className="menu-prefix"
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        <StyledMenuLabel className="menu-label">{label}</StyledMenuLabel>

        {suffix && (
          <span className="menu-suffix" style={{ margin: '0 5px' }}>
            {suffix}
          </span>
        )}

        {collapsed && level === 0 ? (
          <StyledExpandIconCollapsed />
        ) : (
          <StyledExpandIcon open={openSubmenu ?? open} />
        )}
      </StyledAnchor>
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
