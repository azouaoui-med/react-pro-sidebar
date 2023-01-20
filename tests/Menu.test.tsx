import React from 'react';
import { customRender, fireEvent, screen, waitFor } from './testUtils';
import { Sidebar } from '../src/components/Sidebar';
import { Menu } from '../src/components/Menu';
import { SubMenu } from '../src/components/SubMenu';
import { menuClasses, sidebarClasses } from '../src/utils/utilityClasses';

describe('Menu', () => {
  it('should display popper on submenu click when collapsed', async () => {
    customRender(
      <Sidebar defaultCollapsed>
        <Menu>
          <SubMenu label="Charts"></SubMenu>
        </Menu>
      </Sidebar>,
    );

    const submenuButton = screen.getByTestId(`${menuClasses.button}-test-id`);
    const submenuContent = screen.queryByTestId(`${menuClasses.subMenuContent}-test-id`);

    expect(submenuButton).toBeInTheDocument();
    expect(submenuContent).toBeInTheDocument();

    fireEvent.click(submenuButton);

    const sidebarElem = screen.getByTestId(`${sidebarClasses.root}-test-id`);
    expect(sidebarElem).toHaveClass(sidebarClasses.root);
    expect(sidebarElem).toHaveStyle({
      width: '80px',
      'min-width': '80px',
    });
    await waitFor(() =>
      expect(submenuContent).toHaveStyle({
        visibility: 'visible',
      }),
    );
  });
});
