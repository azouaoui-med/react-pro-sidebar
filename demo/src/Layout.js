import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Switch from 'react-switch';
import { FaTachometerAlt, FaHeart, FaGem, FaList, FaProjectDiagram } from 'react-icons/fa';
import sidebarBg from './bg1.jpg';

function Layout({ setLocale }) {
  const intl = useIntl();
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  return (
    <div className={`app ${rtl ? 'rtl' : ''}`}>
      <aside>
        <ProSidebar image={image ? sidebarBg : false} rtl={rtl} collapsed={collapsed}>
          <Menu iconShape="circle">
            <MenuItem icon={<FaTachometerAlt />}>
              {intl.formatMessage({ id: 'dashboard' })}
            </MenuItem>
            <MenuItem icon={<FaGem />}> {intl.formatMessage({ id: 'components' })}</MenuItem>
            <SubMenu title={intl.formatMessage({ id: 'dropdown' })} icon={<FaList />}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
            </SubMenu>
            <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaProjectDiagram />}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.x`}>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
                <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3.x`}>
                  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3..... </MenuItem>
                  {/* you can have more nested submenus
                  ... */}
                </SubMenu>
              </SubMenu>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </aside>
      <main>
        <header>
          <h1> {intl.formatMessage({ id: 'title' })}</h1>
          <p>{intl.formatMessage({ id: 'description' })}</p>
        </header>
        <div className="block">
          <Switch
            height={16}
            width={30}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={handleCollapsedChange}
            checked={collapsed}
          />
          <span> {intl.formatMessage({ id: 'collapsed' })}</span>
        </div>
        <div className="block">
          <Switch
            height={16}
            width={30}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={handleRtlChange}
            checked={rtl}
          />
          <span> {intl.formatMessage({ id: 'rtl' })}</span>
        </div>
        <div className="block">
          <Switch
            height={16}
            width={30}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={handleImageChange}
            checked={image}
          />
          <span> {intl.formatMessage({ id: 'image' })}</span>
        </div>

        <footer>
          <small>
            © 2020 made with <FaHeart style={{ color: 'red' }} /> by -{' '}
            <a rel="noopener noreferrer" target="_blank" href="https://azouaoui.netlify.com">
              Mohamed Azouaoui
            </a>
          </small>
        </footer>
      </main>
    </div>
  );
}

export default Layout;
