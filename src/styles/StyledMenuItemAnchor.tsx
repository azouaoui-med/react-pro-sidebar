import styled from 'styled-components';

interface StyledMenuItemAnchorProps {
  level: number;
  collapsed?: boolean;
  rtl?: boolean;
}

export const StyledMenuItemAnchor = styled.a<StyledMenuItemAnchorProps>`
  display: flex;
  align-items: center;
  height: 50px;
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
  cursor: pointer;
  ${({ rtl, level, collapsed }) =>
    rtl
      ? `padding-left: 20px;
         padding-right: ${level === 0 ? 20 : (collapsed ? level : level + 1) * 20}px;
         `
      : `padding-right: 20px;
         padding-left: ${level === 0 ? 20 : (collapsed ? level : level + 1) * 20}px;
         `}

  &:hover {
    background-color: #f3f3f3;
  }
`;
