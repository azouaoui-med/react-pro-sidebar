import React from 'react';
import styled from 'styled-components';

interface Props {
  onOverlayClick: () => void;
  overlayColor: string;
}

const StyledOverlay = styled.div<Pick<Props, 'overlayColor'>>`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: ${({ overlayColor }) => overlayColor};
  z-index: 1;
`;

export const Overlay: React.FC<Props> = ({ onOverlayClick, overlayColor }) => {
  return (
    <StyledOverlay
      data-testid="overlay-test-id"
      className="overlay"
      onClick={onOverlayClick}
      onKeyPress={onOverlayClick}
      role="button"
      tabIndex={0}
      aria-label="overlay"
      overlayColor={overlayColor}
    />
  );
};
