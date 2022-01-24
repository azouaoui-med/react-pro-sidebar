import React from 'react';
import { customRender, screen } from '../../utils/testUtils';
import { Layout } from '../Layout';

describe('Layout', () => {
  it('basic snapshot ', () => {
    const { container } = customRender(<Layout>Layout content</Layout>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should initialize Layout correctly', async () => {
    customRender(<Layout>Layout content</Layout>);
    const layoutElem = screen.getByText('Layout content');

    expect(layoutElem).toBeInTheDocument();
    expect(layoutElem).toHaveClass('layout');
    expect(layoutElem).toHaveStyle({
      display: 'flex',
      'flex-direction': 'column',
      'flex-grow': '1',
    });
  });

  it('should render flex-direction: row when hasSidebar is true', async () => {
    customRender(<Layout hasSidebar>Layout content</Layout>);
    const layoutElem = screen.getByTestId('layout-test-id');

    expect(layoutElem).toHaveStyle({
      'flex-direction': 'row',
    });
  });

  it('should render direction:rtl when rtl prop is true', async () => {
    customRender(<Layout rtl>Layout content</Layout>);
    const layoutElem = screen.getByTestId('layout-test-id');

    expect(layoutElem).toHaveStyle({
      direction: 'rtl',
    });
  });
});
