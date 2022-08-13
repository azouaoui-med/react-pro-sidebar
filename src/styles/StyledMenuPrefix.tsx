import styled from 'styled-components';

interface StyledMenuPrefixProps {
  firstLevel?: boolean;
  collapsed?: boolean;
  transitionDuration?: number;
  rtl?: boolean;
}

export const StyledMenuPrefix = styled.span<StyledMenuPrefixProps>`
  margin-right: 5px;
  opacity: ${({ firstLevel, collapsed }) => (firstLevel && collapsed ? '0' : '1')};
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms;
`;
