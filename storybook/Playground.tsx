import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar, CSSObject, menuClasses } from '../src';
import { Switch } from './components/Switch';
import { Icon } from './icons/Icon';

const theme = {
  sidebar: {
    backgroundColor: '#0b2948',
    color: '#8ba1b7',
  },
  menu: {
    menuContent: '#082440',
    hover: {
      backgroundColor: '#0e3052',
      color: '#b6c8d9',
    },
    active: {
      backgroundColor: '#13395e',
      color: '#b6c8d9',
    },
    disabled: {
      color: '#3e5e7e',
    },
  },
};

export const Playground: React.FC = () => {
  const { toggleSidebar, collapseSidebar, broken } = useProSidebar();

  const [isRTL, setIsRTL] = React.useState<boolean>(false);
  const [darkTheme, setDarkTheme] = React.useState<boolean>(false);

  // handle on RTL change event
  const handleRTLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRTL(e.target.checked);
  };

  //handle on dark theme change event
  const handleDarkThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDarkTheme(e.target.checked);
  };

  return (
    <div style={{ display: 'flex', height: '100%', direction: isRTL ? 'rtl' : 'ltr' }}>
      <Sidebar
        rtl={isRTL}
        breakPoint="lg"
        {...(darkTheme
          ? {
              backgroundColor: theme.sidebar.backgroundColor,
              rootStyles: {
                color: theme.sidebar.color,
              },
            }
          : undefined)}
      >
        <div>
          <Menu
            {...(darkTheme
              ? {
                  rootStyles: {
                    [`.${menuClasses.subMenuContent}`]: {
                      backgroundColor: theme.menu.menuContent,
                    },
                  },
                  menuItemStyles: {
                    button: {
                      '&:hover': {
                        backgroundColor: theme.menu.hover.backgroundColor,
                        color: theme.menu.hover.color,
                      },
                    },
                    root: {
                      [`&.${menuClasses.active}`]: {
                        [`.${menuClasses.button}`]: {
                          backgroundColor: theme.menu.active.backgroundColor,
                          color: theme.menu.active.color,
                        },
                      },
                      [`&.${menuClasses.disabled}`]: {
                        [`.${menuClasses.button}`]: {
                          color: theme.menu.disabled.color,
                        },
                      },
                    },
                  },
                }
              : undefined)}
          >
            <SubMenu label="Charts" icon={<Icon name="bar-chart" />}>
              <MenuItem> Pie charts</MenuItem>
              <MenuItem> Line charts</MenuItem>
              <MenuItem> Bar charts</MenuItem>
            </SubMenu>
            <SubMenu label="Maps" icon={<Icon name="global" />}>
              <MenuItem> Google maps</MenuItem>
              <MenuItem> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu label="Theme" icon={<Icon name="ink-bottle" />}>
              <MenuItem> Dark</MenuItem>
              <MenuItem> Light</MenuItem>
            </SubMenu>
            <SubMenu suffix="🔥" label="Components" icon={<Icon name="diamond" />}>
              <MenuItem> Grid</MenuItem>
              <MenuItem> Layout</MenuItem>
              <SubMenu label="Forms">
                <MenuItem> Input</MenuItem>
                <MenuItem> Select</MenuItem>
                <SubMenu label="More">
                  <MenuItem> CheckBox</MenuItem>
                  <MenuItem> Radio</MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>
            <MenuItem active icon={<Icon name="book-2" />}>
              Documentation (active)
            </MenuItem>
            <MenuItem disabled icon={<Icon name="calendar" />}>
              Calendar (disabled)
            </MenuItem>
            <MenuItem icon={<Icon name="shopping-cart" />}> E-commerce</MenuItem>
            <MenuItem icon={<Icon name="service" />}> Examples</MenuItem>
          </Menu>
        </div>
      </Sidebar>

      <main>
        <div style={{ padding: 10 }}>
          <div style={{ display: 'flex', marginBottom: '16px' }}>
            <button
              className="sb-button"
              style={{ margin: '0 8px' }}
              onClick={() => collapseSidebar()}
            >
              Collapse
            </button>

            {broken ? (
              <button className="sb-button" onClick={() => toggleSidebar()}>
                Toggle
              </button>
            ) : null}
          </div>

          <div style={{ padding: '0 8px', marginBottom: 16 }}>
            <Switch id="rtl" checked={isRTL} onChange={handleRTLChange} label="RTL" />
          </div>
          <div style={{ padding: '0 8px' }}>
            <Switch
              id="theme"
              checked={darkTheme}
              onChange={handleDarkThemeChange}
              label="Dark theme"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
