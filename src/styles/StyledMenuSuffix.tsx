import styled, { CSSObject } from '@emotion/styled';

interface StyledMenuSuffixProps {
  firstLevel?: boolean;
  collapsed?: boolean;
  transitionDuration?: number;
  rootStyles?: CSSObject;
}

export const StyledMenuSuffix = styled.span<StyledMenuSuffixProps>`
  margin-right: 5px;
  margin-left: 5px;
  opacity: ${({ firstLevel, collapsed }) => (firstLevel && collapsed ? '0' : '1')};
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms;

  ${({ rootStyles }) => rootStyles};
`;
