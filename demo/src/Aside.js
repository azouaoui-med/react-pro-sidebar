import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaProjectDiagram,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from 'react-icons/fa';
import sidebarBg from './assets/bg1.jpg';

const Aside = ({ image, collapsed, rtl }) => {
  const intl = useIntl();
  return (
    <aside>
      <ProSidebar image={image ? sidebarBg : false} rtl={rtl} collapsed={collapsed}>
        <SidebarHeader>
          <div
            style={{
              padding: '0 24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {intl.formatMessage({ id: 'sidebarTitle' })}
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaTachometerAlt />}
              suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
            >
              {intl.formatMessage({ id: 'dashboard' })}
            </MenuItem>
            <MenuItem icon={<FaGem />}> {intl.formatMessage({ id: 'components' })}</MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              suffix={<span className="badge yellow">3</span>}
              title={intl.formatMessage({ id: 'withSuffix' })}
              icon={<FaRegLaughWink />}
            >
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
            </SubMenu>
            <SubMenu
              prefix={<span className="badge gray">3</span>}
              title={intl.formatMessage({ id: 'withPrefix' })}
              icon={<FaHeart />}
            >
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
            </SubMenu>
            <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
                <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: 'center' }}>
          <div className="sidebar-btn-wrapper">
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
            >
              <FaGithub />
              <span> {intl.formatMessage({ id: 'viewSource' })}</span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </aside>
  );
};

export default Aside;
