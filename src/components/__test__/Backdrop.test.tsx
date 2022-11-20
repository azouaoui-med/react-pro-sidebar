import React from 'react';
import { customRender, screen } from '../../utils/testUtils';
import { sidebarClasses } from '../../utils/utilityClasses';
import { Backdrop } from '../Backdrop';

describe('Backdrop', () => {
  it('should initialize Backdrop correctly', async () => {
    customRender(<Backdrop />);
    const backdropElem = screen.getByTestId(`${sidebarClasses.backdrop}-test-id`);

    expect(backdropElem).toBeInTheDocument();
    expect(backdropElem).toHaveStyle({
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      'background-color': 'rgb(0, 0, 0, 0.3)',
      'z-index': '1',
    });
  });

  it('should render rootStyles', async () => {
    customRender(
      <Backdrop
        rootStyles={{
          backgroundColor: 'red',
          opacity: 0.5,
        }}
      />,
    );
    const backdropElem = screen.getByTestId(`${sidebarClasses.backdrop}-test-id`);
    expect(backdropElem).toHaveStyle({
      'background-color': 'red',
      opacity: 0.5,
    });
  });
});
