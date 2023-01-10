import React from 'react';
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  menuClasses,
  MenuItemStyles,
} from '../src';
import { Switch } from './components/Switch';
import { SidebarHeader } from './components/SidebarHeader';
import { Diamond } from './icons/Diamond';
import { BarChart } from './icons/BarChart';
import { Global } from './icons/Global';
import { InkBottle } from './icons/InkBottle';
import { Book } from './icons/Book';
import { Calendar } from './icons/Calendar';
import { ShoppingCart } from './icons/ShoppingCart';
import { Service } from './icons/Service';
import { SidebarFooter } from './components/SidebarFooter';
import { Badge } from './components/Badge';
import { Typography } from './components/Typography';
import { PackageBadges } from './components/PackageBadges';

type Theme = 'light' | 'dark';

const themes = {
  light: {
    sidebar: {
      backgroundColor: '#fff',
      color: '#607489',
    },
    menu: {
      menuContent: '#fbfcfd',
      icon: '#0098e5',
      hover: {
        backgroundColor: '#e6f2fd',
        color: '#44596e',
      },
      active: {
        backgroundColor: '#13395e',
        color: '#b6c8d9',
      },
      disabled: {
        color: '#3e5e7e',
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: '#0b2948',
      color: '#8ba1b7',
    },
    menu: {
      menuContent: '#082440',
      icon: '#59d0ff',
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
  },
};

export const Playground: React.FC = () => {
  const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();

  const [isRTL, setIsRTL] = React.useState<boolean>(false);
  const [theme, setTheme] = React.useState<Theme>('light');

  // handle on RTL change event
  const handleRTLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRTL(e.target.checked);
  };

  // handle on theme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: {
      backgroundColor: themes[theme].menu.menuContent,
    },
    button: {
      [`&.${menuClasses.active}`]: {
        backgroundColor: themes[theme].menu.active.backgroundColor,
        color: themes[theme].menu.active.color,
      },
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      '&:hover': {
        backgroundColor: themes[theme].menu.hover.backgroundColor,
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div style={{ display: 'flex', height: '100%', direction: isRTL ? 'rtl' : 'ltr' }}>
      <Sidebar
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        rtl={isRTL}
        breakPoint="lg"
        backgroundColor={themes[theme].sidebar.backgroundColor}
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <SidebarHeader style={{ marginBottom: '24px', marginTop: '16px' }} />
          <div style={{ flex: 1, marginBottom: '32px' }}>
            <div style={{ padding: '0 24px', marginBottom: '8px' }}>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                General
              </Typography>
            </div>
            <Menu menuItemStyles={menuItemStyles}>
              <SubMenu
                label="Charts"
                icon={<BarChart />}
                suffix={
                  <Badge variant="danger" shape="circle">
                    6
                  </Badge>
                }
              >
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
              </SubMenu>
              <SubMenu label="Maps" icon={<Global />}>
                <MenuItem> Google maps</MenuItem>
                <MenuItem> Open street maps</MenuItem>
              </SubMenu>
              <SubMenu label="Theme" icon={<InkBottle />}>
                <MenuItem> Dark</MenuItem>
                <MenuItem> Light</MenuItem>
              </SubMenu>
              <SubMenu label="Components" icon={<Diamond />}>
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
              <SubMenu label="E-commerce" icon={<ShoppingCart />}>
                <MenuItem> Product</MenuItem>
                <MenuItem> Orders</MenuItem>
                <MenuItem> Credit card</MenuItem>
              </SubMenu>
            </Menu>

            <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                Extra
              </Typography>
            </div>

            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={<Calendar />} suffix={<Badge variant="success">New</Badge>}>
                Calendar
              </MenuItem>
              <MenuItem icon={<Book />}>Documentation</MenuItem>
              <MenuItem icon={<Service />}> Examples</MenuItem>
            </Menu>
          </div>
          <SidebarFooter collapsed={collapsed} />
        </div>
      </Sidebar>

      <main>
        <div style={{ padding: '16px 24px', color: '#44596e' }}>
          <div style={{ marginBottom: '16px' }}>
            {broken && (
              <button className="sb-button" onClick={() => toggleSidebar()}>
                Toggle
              </button>
            )}
          </div>
          <div style={{ marginBottom: '48px' }}>
            <Typography variant="h4" fontWeight={600}>
              React Pro Sidebar
            </Typography>
            <Typography variant="body2">
              React Pro Sidebar provides a set of components for creating high level and
              customizable side navigation
            </Typography>
            <PackageBadges />
          </div>

          <div style={{ padding: '0 8px' }}>
            <div style={{ marginBottom: 16 }}>
              <Switch
                id="collapse"
                checked={collapsed}
                onChange={() => collapseSidebar()}
                label="Collapse"
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <Switch id="rtl" checked={isRTL} onChange={handleRTLChange} label="RTL" />
            </div>

            <div style={{ marginBottom: 16 }}>
              <Switch
                id="theme"
                checked={theme === 'dark'}
                onChange={handleThemeChange}
                label="Dark theme"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
