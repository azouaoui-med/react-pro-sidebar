import React from 'react';
import styled, { CSSObject } from 'styled-components';
import { sidebarClasses } from '../utils/utilityClasses';

interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  rootStyles?: CSSObject;
}

const StyledBackdrop = styled.div<Pick<BackdropProps, 'rootStyles'>>`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.3);

  ${({ rootStyles }) => rootStyles}
`;

export const Backdrop: React.FC<BackdropProps> = ({ rootStyles, ...rest }) => {
  return (
    <StyledBackdrop
      data-testid={`${sidebarClasses.backdrop}-test-id`}
      role="button"
      tabIndex={0}
      aria-label="backdrop"
      rootStyles={rootStyles}
      {...rest}
    />
  );
};
