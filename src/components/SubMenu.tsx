import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { SubMenuList } from './SubMenuList';
import { createPopper, Instance } from '@popperjs/core';
import { useSidebar } from '../hooks/useSidebar';

export interface SubMenuProps extends React.LiHTMLAttributes<HTMLLIElement> {
  className?: string;
  label?: string;
  firstLevel?: boolean;
}

const StyledSubMenu = styled.li`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 20px;
  margin: 5px 10px;
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.5);

  &::after {
    content: '';
    transition: transform 0.3s;
    border-right: 2px solid currentcolor;
    border-bottom: 2px solid currentcolor;
    width: 5px;
    height: 5px;
    transform: rotate(-45deg);
  }
`;

export const SubMenu: React.FC<SubMenuProps> = ({
  children,
  className,
  label,
  firstLevel,
  ...rest
}) => {
  const { collapsed, transitionDuration } = useSidebar();

  const [open, setOpen] = React.useState(false);
  const [openWhenCollapsed, setOpenWhenCollapsed] = React.useState(false);

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

  React.useLayoutEffect(() => {
    setTimeout(() => popperInstance?.update(), transitionDuration);
    if (collapsed && firstLevel) setOpenWhenCollapsed(false);
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

  return (
    <StyledSubMenu className={classnames('sub-menu', className)} {...rest}>
      <StyledAnchor ref={anchorRef} href="#" onClick={handleSlideToggle}>
        {label}
      </StyledAnchor>
      <SubMenuList
        ref={subMenuListRef}
        openWhenCollapsed={openWhenCollapsed}
        open={open}
        firstLevel={firstLevel}
        collapsed={collapsed}
      >
        {children}
      </SubMenuList>
    </StyledSubMenu>
  );
};
