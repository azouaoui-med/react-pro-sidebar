import React from 'react';
import { customRender, screen, fireEvent } from '../../utils/testUtils';
import { Overlay } from '../Overlay';

describe('Overlay', () => {
  it('basic snapshot ', () => {
    const handleOverlayClick = jest.fn();
    const { container } = customRender(
      <Overlay onOverlayClick={handleOverlayClick}>Overlay</Overlay>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should initialize Overlay correctly', async () => {
    const handleOverlayClick = jest.fn();
    customRender(<Overlay onOverlayClick={handleOverlayClick} />);
    const overlayElem = screen.getByTestId('overlay-test-id');

    expect(overlayElem).toBeInTheDocument();
    expect(overlayElem).toHaveClass('overlay');
    expect(overlayElem).toHaveStyle({
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      'background-color': 'rgb(0, 0, 0, 0.3)',
      'z-index': '100',
    });
  });

  it('should call onOverlayClick when clicked', async () => {
    const handleOverlayClick = jest.fn();
    customRender(<Overlay onOverlayClick={handleOverlayClick} />);
    const overlayElem = screen.getByTestId('overlay-test-id');
    fireEvent.click(overlayElem);

    expect(handleOverlayClick).toHaveBeenCalledTimes(1);
  });
});
