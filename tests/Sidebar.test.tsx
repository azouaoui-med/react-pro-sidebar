import React from 'react';
import { customRender, screen } from './testUtils';
import { Sidebar } from '../src/components/Sidebar';
import * as mediaQueryHook from '../src/hooks/useMediaQuery';
import { sidebarClasses } from '../src/utils/utilityClasses';

describe('Sidebar', () => {
  it('should initialize Sidebar correctly', () => {
    customRender(<Sidebar>Sidebar</Sidebar>);
    const sidebarElem = screen.getByTestId(`${sidebarClasses.root}-test-id`);
    const SidebarImgElem = screen.queryByTestId(`${sidebarClasses.image}-test-id`);

    expect(sidebarElem).toBeInTheDocument();
    expect(SidebarImgElem).not.toBeInTheDocument();
    expect(sidebarElem).toHaveClass(sidebarClasses.root);
    expect(sidebarElem).toHaveStyle({
      position: 'relative',
      width: '250px',
      'min-width': '250px',
      transition: 'width,left,right,300ms',
    });
  });

  it('should set the width to 300px ', () => {
    customRender(<Sidebar width="300px">Sidebar</Sidebar>);
    const sidebarElem = screen.getByTestId(`${sidebarClasses.root}-test-id`);

    expect(sidebarElem).toHaveStyle({
      width: '300px',
      'min-width': '300px',
    });
  });

  it('should set the width to 80px when defaultCollapsed is true ', () => {
    customRender(<Sidebar defaultCollapsed>Sidebar</Sidebar>);
    const sidebarElem = screen.getByTestId(`${sidebarClasses.root}-test-id`);
    expect(sidebarElem).toHaveClass(sidebarClasses.collapsed);
    expect(sidebarElem).toHaveStyle({
      width: '80px',
      'min-width': '80px',
    });
  });

  it('should have a width of 100px when collapsedWidth is set ', () => {
    customRender(
      <Sidebar collapsedWidth="100px" defaultCollapsed>
        Sidebar
      </Sidebar>,
    );
    const sidebarElem = screen.getByTestId(`${sidebarClasses.root}-test-id`);

    expect(sidebarElem).toHaveStyle({
      width: '100px',
      'min-width': '100px',
    });
  });

  it('should have apply backgroundColor:black on inner sidebar', () => {
    customRender(<Sidebar backgroundColor="black">Sidebar</Sidebar>);
    const innerSidebarElem = screen.getByTestId(`${sidebarClasses.container}-test-id`);

    expect(innerSidebarElem).toHaveStyle({
      'background-color': 'black',
    });
  });

  it('should have set transition duration to 0.5s', () => {
    customRender(<Sidebar transitionDuration={500}>Sidebar</Sidebar>);
    const SidebarElem = screen.getByTestId(`${sidebarClasses.root}-test-id`);

    expect(SidebarElem).toHaveStyle({
      transition: 'width,left,right,500ms',
    });
  });

  it('should display a background image', () => {
    customRender(<Sidebar image="some-url">Sidebar</Sidebar>);
    const SidebarImgElem = screen.getByTestId(`${sidebarClasses.image}-test-id`);

    expect(SidebarImgElem).toBeInTheDocument();
    expect(SidebarImgElem).toHaveAttribute('src', 'some-url');
    expect(SidebarImgElem).toHaveClass(sidebarClasses.image);
  });

  it('should sidebar have a correct positioning when broken', () => {
    jest.spyOn(mediaQueryHook, 'useMediaQuery').mockImplementation(() => true);

    customRender(<Sidebar breakPoint="all">Sidebar</Sidebar>);

    const SidebarElem = screen.getByTestId(`${sidebarClasses.root}-test-id`);

    expect(SidebarElem).toHaveStyle({
      position: 'fixed',
      height: '100%',
      top: '0px',
      left: '-250px',
    });
  });

  it('should sidebar have a correct positioning when broken and collapsed', () => {
    jest.spyOn(mediaQueryHook, 'useMediaQuery').mockImplementation(() => true);

    customRender(
      <Sidebar breakPoint="all" defaultCollapsed>
        Sidebar
      </Sidebar>,
    );

    const SidebarElem = screen.getByTestId(`${sidebarClasses.root}-test-id`);

    expect(SidebarElem).toHaveStyle({
      left: '-80px',
    });
  });

  it('should display overlay position sidebar to the left when broken and toggled', () => {
    jest.spyOn(mediaQueryHook, 'useMediaQuery').mockImplementation(() => true);

    customRender(
      <Sidebar breakPoint="all" toggled>
        Sidebar
      </Sidebar>,
    );
    const SidebarElem = screen.getByTestId(`${sidebarClasses.root}-test-id`);

    expect(screen.getByTestId(`${sidebarClasses.backdrop}-test-id`)).toBeInTheDocument();

    expect(SidebarElem).toHaveStyle({
      left: '0px',
    });
  });

  it('should position and hide sidebar to the right when rtl is true and broken', () => {
    jest.spyOn(mediaQueryHook, 'useMediaQuery').mockImplementation(() => true);

    customRender(
      <Sidebar rtl breakPoint="all">
        Sidebar
      </Sidebar>,
    );
    const SidebarElem = screen.getByTestId(`${sidebarClasses.root}-test-id`);

    expect(SidebarElem).toHaveStyle({
      right: '-250px',
    });
  });

  it('should display and position sidebar to the right when rtl is true and broken and toggled', () => {
    jest.spyOn(mediaQueryHook, 'useMediaQuery').mockImplementation(() => true);

    customRender(
      <Sidebar rtl breakPoint="all" toggled>
        Sidebar
      </Sidebar>,
    );
    const SidebarElem = screen.getByTestId(`${sidebarClasses.root}-test-id`);

    expect(SidebarElem).toHaveStyle({
      right: '0px',
    });
  });
});
