import React from 'react';
import styled from 'styled-components';

interface Props {
  onOverlayClick: () => void;
}

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 100;
`;

export const Overlay: React.FC<Props> = ({ onOverlayClick }) => {
  return (
    <StyledOverlay
      className="overlay"
      onClick={onOverlayClick}
      onKeyPress={onOverlayClick}
      role="button"
      tabIndex={0}
      aria-label="overlay"
    />
  );
};
