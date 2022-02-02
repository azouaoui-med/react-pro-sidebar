import React from 'react';
import { customRender, screen } from '../../utils/testUtils';
import { Header } from '../Header';
import * as hooks from '../../hooks/useSidebar';

describe('Header', () => {
  it('basic snapshot ', () => {
    const { container } = customRender(<Header>Header</Header>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should initialize Header correctly', async () => {
    customRender(<Header>Header</Header>);
    const headerElem = screen.getByText('Header');

    expect(headerElem).toBeInTheDocument();
    expect(headerElem).toHaveClass('header');
    expect(headerElem).toHaveStyle({
      height: '64px',
      'min-height': '64px',
    });
  });

  it('should set the height to 50px', async () => {
    customRender(<Header height="50px">Footer</Header>);
    const headerElem = screen.getByTestId('header-test-id');

    expect(headerElem).toHaveStyle({
      height: '50px',
      'min-height': '50px',
    });
  });

  it('should set have position:fixed when fixed prop is true', async () => {
    customRender(<Header fixed>Footer</Header>);
    const headerElem = screen.getByTestId('header-test-id');

    expect(headerElem).toHaveStyle({
      position: 'fixed',
    });
  });

  it('should have a width of 100% - sidebarWidth when header and sidebar fixed', () => {
    jest.spyOn(hooks, 'useSidebar').mockImplementation(() => ({
      updateSidebarState: jest.fn(),
      collapsed: false,
      fixed: true,
      width: '250px',
      collapsedWidth: '80px',
      broken: false,
      toggled: false,
      transitionDuration: 300,
    }));

    customRender(<Header fixed>Header</Header>);

    const headerElem = screen.getByTestId('header-test-id');

    expect(headerElem).toHaveStyle({
      width: 'calc(100% - 250px)',
    });
  });

  it('should have a width of 100% - sidebarCollapsedWidth when header and sidebar fixed and collapsed', () => {
    jest.spyOn(hooks, 'useSidebar').mockImplementation(() => ({
      updateSidebarState: jest.fn(),
      collapsed: true,
      fixed: true,
      width: '250px',
      collapsedWidth: '80px',
      broken: false,
      toggled: false,
      transitionDuration: 300,
    }));

    customRender(<Header fixed>Header</Header>);

    const headerElem = screen.getByTestId('header-test-id');

    expect(headerElem).toHaveStyle({
      width: 'calc(100% - 80px)',
    });
  });

  it('should have a width of 100% and transition none when sidebar is broken', () => {
    jest.spyOn(hooks, 'useSidebar').mockImplementation(() => ({
      updateSidebarState: jest.fn(),
      collapsed: false,
      fixed: false,
      width: '250px',
      collapsedWidth: '80px',
      broken: true,
      toggled: false,
      transitionDuration: 300,
    }));

    customRender(<Header fixed>Header</Header>);

    const headerElem = screen.getByTestId('header-test-id');

    expect(headerElem).toHaveStyle({
      width: '100%',
      transition: 'none',
    });
  });
});
