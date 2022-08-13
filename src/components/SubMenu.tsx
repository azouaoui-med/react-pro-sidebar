import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { SubMenuList } from './SubMenuList';
import { createPopper, Instance } from '@popperjs/core';
import { useSidebar } from '../hooks/useSidebar';
import { StyledMenuLabel } from '../styles/StyledMenuLabel';
import { StyledMenuIcon } from '../styles/StyledMenuIcon';
import { StyledMenuPrefix } from '../styles/StyledMenuPrefix';

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
  firstLevel?: boolean;
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

const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
  cursor: pointer;
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
  firstLevel,
  ...rest
}) => {
  const { collapsed, transitionDuration, toggled } = useSidebar();

  const [open, setOpen] = React.useState<boolean>(!!defaultOpen);
  const [openDefault, setOpenDefault] = React.useState<boolean>(!!defaultOpen);
  const [openWhenCollapsed, setOpenWhenCollapsed] = React.useState<boolean>(false);
  const [popperInstance, setPopperInstance] = React.useState<Instance | undefined>();

  const anchorRef = React.useRef<HTMLAnchorElement>(null);
  const subMenuListRef = React.useRef<HTMLDivElement>(null);

  const handleSlideToggle = (): void => {
    if (firstLevel && collapsed) setOpenWhenCollapsed(!openWhenCollapsed);
    else setOpen(!open);
  };

  React.useEffect(() => {
    if (firstLevel && collapsed && subMenuListRef.current && anchorRef.current) {
      const instance = createPopper(anchorRef.current, subMenuListRef.current, {
        placement: 'right',
        strategy: 'fixed',
      });

      setPopperInstance(instance);
    }
  }, [firstLevel, collapsed]);

  React.useEffect(() => {
    if (subMenuListRef.current && anchorRef.current) {
      const ro = new ResizeObserver(() => {
        if (popperInstance) {
          popperInstance.update();
        }
      });

      ro.observe(subMenuListRef.current);
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
    if (collapsed && firstLevel) {
      setOpenWhenCollapsed(false);
      // TODO: if its useful to close first level submenus on collapse sidebar uncomment the code below
      // setOpen(false);
    }
  }, [collapsed, firstLevel, transitionDuration, popperInstance]);

  React.useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!subMenuListRef.current?.contains(event.target as Node) && openWhenCollapsed)
        setOpenWhenCollapsed(false);
    };

    if (collapsed && firstLevel) document.addEventListener('click', handleDocumentClick, false);
    else document.removeEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [collapsed, firstLevel, openWhenCollapsed]);

  React.useEffect(() => {
    if (openSubmenu) setOpenDefault(openSubmenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledSubMenu
      className={classnames('sub-menu', { open: openSubmenu ?? open }, className)}
      {...rest}
    >
      <StyledAnchor ref={anchorRef} onClick={handleSlideToggle} title={title}>
        {icon && <StyledMenuIcon className="menu-icon">{icon}</StyledMenuIcon>}

        {prefix && (
          <StyledMenuPrefix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={firstLevel}
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

        {collapsed && firstLevel ? (
          <StyledExpandIconCollapsed />
        ) : (
          <StyledExpandIcon open={openSubmenu ?? open} />
        )}
      </StyledAnchor>
      <SubMenuList
        ref={subMenuListRef}
        openWhenCollapsed={openWhenCollapsed}
        open={openSubmenu ?? open}
        firstLevel={firstLevel}
        collapsed={collapsed}
        defaultOpen={openDefault}
      >
        {children}
      </SubMenuList>
    </StyledSubMenu>
  );
};
