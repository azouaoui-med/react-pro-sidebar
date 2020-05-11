import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import reactLogo from './assets/logo.svg';

const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  const intl = useIntl();
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <h1>
          <img width={80} src={reactLogo} alt="react logo" /> {intl.formatMessage({ id: 'title' })}
        </h1>
        <p>{intl.formatMessage({ id: 'description' })}</p>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=react-pro-sidebar&type=star&count=true&size=small"
          frameBorder="0"
          scrolling="0"
          width="85px"
          height="30px"
        ></iframe>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=react-pro-sidebar&type=fork&count=true&size=small"
          frameBorder="0"
          scrolling="0"
          width="100px"
          height="30px"
        ></iframe>
      </header>
      <div className="block ">
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
  );
};

export default Main;
