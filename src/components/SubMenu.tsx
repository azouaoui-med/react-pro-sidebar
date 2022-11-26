import React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import classnames from 'classnames';
import { SubMenuContent } from './SubMenuContent';
import { createPopper, Instance } from '@popperjs/core';
import { useSidebar } from '../hooks/useSidebar';
import { StyledMenuLabel } from '../styles/StyledMenuLabel';
import { StyledMenuIcon } from '../styles/StyledMenuIcon';
import { StyledMenuPrefix } from '../styles/StyledMenuPrefix';
import { MenuItemProps } from './MenuItem';
import { StyledMenuButton } from '../styles/StyledMenuButton';
import { useMenu } from '../hooks/useMenu';
import { StyledMenuSuffix } from '../styles/StyledMenuSuffix';
import { menuClasses } from '../utils/utilityClasses';
import {
  StyledExpandIcon,
  StyledExpandIconCollapsed,
  StyledExpandIconWrapper,
} from '../styles/StyledExpandIcon';

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
  rootStyles?: CSSObject;
  children?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  /**
   * @ignore
   */
  level?: number;
}

interface StyledSubMenuProps extends Pick<SubMenuProps, 'rootStyles'> {
  menuItemStyles?: CSSObject;
}

type MenuItemElement =
  | 'root'
  | 'button'
  | 'label'
  | 'prefix'
  | 'suffix'
  | 'icon'
  | 'subMenuContent'
  | 'SubMenuExpandIcon';

const StyledSubMenu = styled.li<StyledSubMenuProps>`
  position: relative;
  width: 100%;

  ${({ menuItemStyles }) => menuItemStyles};

  ${({ rootStyles }) => rootStyles};
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
    rootStyles,
    onOpenChange,
    onClick,
    ...rest
  },
  ref,
) => {
  const { collapsed, transitionDuration, toggled, rtl } = useSidebar();
  const { renderExpandIcon, closeOnClick, menuItemStyles } = useMenu();

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

    if (typeof openSubmenu === 'undefined' && !(level === 0 && collapsed)) {
      onOpenChange?.(!open);
      setOpen(!open);
    } else {
      onOpenChange?.(!openSubmenu);
    }
  };

  const getSubMenuItemStyles = (element: MenuItemElement): CSSObject | undefined => {
    if (menuItemStyles) {
      const params = { level, disabled, active, isSubmenu: true, open: openSubmenu ?? open };
      const {
        root: rootElStyles,
        button: buttonElStyles,
        label: labelElStyles,
        icon: iconElStyles,
        prefix: prefixElStyles,
        suffix: suffixElStyles,
        subMenuContent: subMenuContentElStyles,
        SubMenuExpandIcon: SubMenuExpandIconElStyles,
      } = menuItemStyles;

      switch (element) {
        case 'root':
          return typeof rootElStyles === 'function' ? rootElStyles(params) : rootElStyles;

        case 'button':
          return typeof buttonElStyles === 'function' ? buttonElStyles(params) : buttonElStyles;

        case 'label':
          return typeof labelElStyles === 'function' ? labelElStyles(params) : labelElStyles;

        case 'icon':
          return typeof iconElStyles === 'function' ? iconElStyles(params) : iconElStyles;

        case 'prefix':
          return typeof prefixElStyles === 'function' ? prefixElStyles(params) : prefixElStyles;

        case 'suffix':
          return typeof suffixElStyles === 'function' ? suffixElStyles(params) : suffixElStyles;

        case 'SubMenuExpandIcon':
          return typeof SubMenuExpandIconElStyles === 'function'
            ? SubMenuExpandIconElStyles(params)
            : SubMenuExpandIconElStyles;

        case 'subMenuContent':
          return typeof subMenuContentElStyles === 'function'
            ? subMenuContentElStyles(params)
            : subMenuContentElStyles;

        default:
          return undefined;
      }
    }
  };

  React.useEffect(() => {
    if (level === 0 && collapsed && SubMenuContentRef.current && anchorRef.current) {
      const instance = createPopper(anchorRef.current, SubMenuContentRef.current, {
        placement: 'right',
        strategy: 'fixed',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 5],
            },
          },
        ],
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
      if (!openWhenCollapsed && anchorRef.current?.contains(event.target as Node))
        setOpenWhenCollapsed(true);
      else if (
        (closeOnClick &&
          !(event.target as HTMLElement).closest('.menu-item')?.classList.contains('sub-menu')) ||
        (!SubMenuContentRef.current?.contains(event.target as Node) && openWhenCollapsed)
      ) {
        setOpenWhenCollapsed(false);
      }
    };
    document.removeEventListener('click', handleDocumentClick);
    if (collapsed && level === 0) document.addEventListener('click', handleDocumentClick, false);

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
        menuClasses.menuItemRoot,
        menuClasses.subMenuRoot,
        { [menuClasses.active]: active },
        { [menuClasses.disabled]: disabled },
        { [menuClasses.open]: openSubmenu ?? open },
        className,
      )}
      menuItemStyles={getSubMenuItemStyles('root')}
      rootStyles={rootStyles}
    >
      <StyledMenuButton
        data-testid={`${menuClasses.button}-test-id`}
        ref={anchorRef}
        rtl={rtl}
        title={title}
        level={level}
        collapsed={collapsed}
        className={menuClasses.button}
        onClick={handleSlideToggle}
        disabled={disabled}
        active={active}
        rootStyles={getSubMenuItemStyles('button')}
        {...rest}
      >
        {icon && (
          <StyledMenuIcon
            rtl={rtl}
            className={menuClasses.icon}
            rootStyles={getSubMenuItemStyles('icon')}
          >
            {icon}
          </StyledMenuIcon>
        )}

        {prefix && (
          <StyledMenuPrefix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={level === 0}
            className={menuClasses.prefix}
            rtl={rtl}
            rootStyles={getSubMenuItemStyles('prefix')}
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        <StyledMenuLabel className={menuClasses.label} rootStyles={getSubMenuItemStyles('label')}>
          {label}
        </StyledMenuLabel>

        {suffix && (
          <StyledMenuSuffix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={level === 0}
            className={menuClasses.suffix}
            rootStyles={getSubMenuItemStyles('suffix')}
          >
            {suffix}
          </StyledMenuSuffix>
        )}

        <StyledExpandIconWrapper
          rtl={rtl}
          className={menuClasses.SubMenuExpandIcon}
          collapsed={collapsed}
          level={level}
          rootStyles={getSubMenuItemStyles('SubMenuExpandIcon')}
        >
          {renderExpandIcon ? (
            renderExpandIcon({
              level,
              disabled,
              active,
              open: openSubmenu ?? open,
            })
          ) : collapsed && level === 0 ? (
            <StyledExpandIconCollapsed />
          ) : (
            <StyledExpandIcon rtl={rtl} open={openSubmenu ?? open} />
          )}
        </StyledExpandIconWrapper>
      </StyledMenuButton>

      <SubMenuContent
        ref={SubMenuContentRef}
        openWhenCollapsed={openWhenCollapsed}
        open={openSubmenu ?? open}
        firstLevel={level === 0}
        collapsed={collapsed}
        defaultOpen={openDefault}
        className={menuClasses.subMenuContent}
        rootStyles={getSubMenuItemStyles('subMenuContent')}
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
