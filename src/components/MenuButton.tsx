import { css, CSSObject, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import classNames from 'classnames';
import React from 'react';
import { menuClasses } from '../utils/utilityClasses';

interface MenuButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> {
  level: number;
  collapsed?: boolean;
  rtl?: boolean;
  disabled?: boolean;
  active?: boolean;
  rootStyles?: CSSObject;
  component?: string | React.ReactElement;
  children?: React.ReactNode;
}

export const menuButtonStyles = (props: MenuButtonProps) => {
  const { rtl, level, collapsed, rootStyles, disabled, active } = props;
  return css`
    display: flex;
    align-items: center;
    height: 50px;
    text-decoration: none;
    color: inherit;
    box-sizing: border-box;
    cursor: pointer;

    ${rtl
      ? `padding-left: 20px;
             padding-right: ${level === 0 ? 20 : (collapsed ? level : level + 1) * 20}px;
            `
      : `padding-right: 20px;
             padding-left: ${level === 0 ? 20 : (collapsed ? level : level + 1) * 20}px;
           `}

    &:hover {
      background-color: #f3f3f3;
    }

    ${disabled &&
    ` 
      pointer-events: none;
      cursor: default;
      color:#adadad;
        `}

    ${active && 'background-color: #e2eef9;'}
  
      ${rootStyles ? rootStyles : ''}
  `;
};

export const StyledMenuButton = styled.a<MenuButtonProps>`
  ${(props) => menuButtonStyles(props)}
`;

export const MenuButtonRef: React.ForwardRefRenderFunction<HTMLAnchorElement, MenuButtonProps> = (
  { level, collapsed, rtl, disabled, active, rootStyles, className, component, children, ...rest },
  ref,
) => {
  if (component) {
    const cssStyles = menuButtonStyles({
      level,
      collapsed,
      rtl,
      disabled,
      active,
      rootStyles,
    });

    if (typeof component === 'string') {
      const ButtonComponent = jsx(
        component,
        {
          className: classNames(menuClasses.button, className),
          'data-testid': `${menuClasses.button}-test-id`,
          tabIndex: 0,
          css: cssStyles,
          ...rest,
          ref,
        },
        children,
      );
      return ButtonComponent;
    } else {
      const { className: classNameProp, ...props } = component.props;

      const ButtonComponent = jsx(
        component.type,
        {
          className: classNames(menuClasses.button, className, classNameProp),
          'data-testid': `${menuClasses.button}-test-id`,
          tabIndex: 0,
          css: cssStyles,
          ...rest,
          ...props,
          ref,
        },
        children,
      );
      return ButtonComponent;
    }
  } else {
    return (
      <StyledMenuButton
        ref={ref}
        className={classNames(menuClasses.button, className)}
        data-testid={`${menuClasses.button}-test-id`}
        level={level}
        collapsed={collapsed}
        rtl={rtl}
        disabled={disabled}
        active={active}
        rootStyles={rootStyles}
        tabIndex={0}
        {...rest}
      >
        {children}
      </StyledMenuButton>
    );
  }
};

export const MenuButton = React.forwardRef<HTMLAnchorElement, MenuButtonProps>(MenuButtonRef);
