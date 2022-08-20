import styled from 'styled-components';

interface StyledMenuItemAnchorProps {
  level: number;
  collapsed?: boolean;
}

export const StyledMenuItemAnchor = styled.a<StyledMenuItemAnchorProps>`
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
