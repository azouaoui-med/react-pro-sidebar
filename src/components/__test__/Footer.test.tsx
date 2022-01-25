import React from 'react';
import { customRender, screen } from '../../utils/testUtils';
import { Footer } from '../Footer';

describe('Footer', () => {
  it('basic snapshot ', () => {
    const { container } = customRender(<Footer>Footer</Footer>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should initialize Footer correctly', async () => {
    customRender(<Footer>Footer</Footer>);
    const footerElem = screen.getByText('Footer');

    expect(footerElem).toBeInTheDocument();
    expect(footerElem).toHaveClass('footer');
    expect(footerElem).toHaveStyle({
      height: '64px',
      'min-height': '64px',
    });
  });

  it('should set the height to 50px', async () => {
    customRender(<Footer height="50px">Footer</Footer>);
    const footerElem = screen.getByTestId('footer-test-id');

    expect(footerElem).toHaveStyle({
      height: '50px',
      'min-height': '50px',
    });
  });
});
