import styled, { CSSObject } from '@emotion/styled';

interface StyledExpandIconProps {
  open?: boolean;
  rtl?: boolean;
}

interface StyledExpandIconWrapperProps {
  collapsed?: boolean;
  level?: number;
  rtl?: boolean;
  rootStyles?: CSSObject;
}

export const StyledExpandIconWrapper = styled.span<StyledExpandIconWrapperProps>`
  ${({ collapsed, level, rtl }) =>
    collapsed &&
    level === 0 &&
    `
    position: absolute;
    ${rtl ? 'left: 10px;' : 'right: 10px;'}
    top: 50%;
    transform: translateY(-50%);
    
    `}

  ${({ rootStyles }) => rootStyles};
`;

export const StyledExpandIcon = styled.span<StyledExpandIconProps>`
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

export const StyledExpandIconCollapsed = styled.span`
  width: 5px;
  height: 5px;
  background-color: currentcolor;
  border-radius: 50%;
  display: inline-block;
`;
