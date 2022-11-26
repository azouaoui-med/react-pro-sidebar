import styled, { CSSObject } from '@emotion/styled';

interface StyledMenuLabelProps {
  rootStyles?: CSSObject;
}

export const StyledMenuLabel = styled.span<StyledMenuLabelProps>`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ rootStyles }) => rootStyles};
`;
