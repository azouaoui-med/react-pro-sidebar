import React from 'react';
import styled from 'styled-components';

interface Props {
  onOverlayClick: () => void;
}

const StyledOverlay = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 100;
`;

export const Overlay: React.FC<Props> = ({ onOverlayClick }) => {
  return (
    <StyledOverlay
      data-testid="overlay-test-id"
      className="overlay"
      onClick={onOverlayClick}
      onKeyPress={onOverlayClick}
      role="button"
      tabIndex={0}
      aria-label="overlay"
    />
  );
};
