# [React Pro Sidebar](https://azouaoui-med.github.io/react-pro-sidebar)

[![npm][npm-image]][npm-url] [![License](https://badgen.net/npm/license/react-pro-sidebar)](https://www.npmjs.com/package/react-pro-sidebar)

[npm-image]: https://img.shields.io/npm/v/react-pro-sidebar.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-pro-sidebar

React sidebar library with dropdown menus and unlimited number of nested submenus

## Demo

[Live preview](https://azouaoui-med.github.io/react-pro-sidebar)

## Installation

### yarn

```bash
yarn add react-pro-sidebar
```

### npm

```bash
npm install react-pro-sidebar
```

## Usage

```jsx
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

<ProSidebar>
  <Menu iconShape="square">
    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
    <SubMenu title="Components" icon={<FaHeart />}>
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>;
```

If you are using sass then you can import the styles directly into your scss file

```scss
@import '../node_modules/react-pro-sidebar/dist/scss/styles.scss';
```

## Custom Styling

There are sets of sass variables available which you can override to define your own styles

You need to include your override variables before importing the scss file

Your `custom.scss` file should look something like this

```scss
// Your variable overrides
$sidebar-bg-color: #1d1d1d;
$sidebar-color: #adadad;
$highlight-color: #d8d8d8;
$submenu-bg-color: #2b2b2b;
$submenu-bg-color-collapsed: #2b2b2b;
$icon-bg-color: #2b2b2b;
$icon-size: 35px;

@import '../node_modules/react-pro-sidebar/dist/scss/styles.scss';
```

## Using React Router Dom

Here is an example on how to use [react router dom](https://github.com/ReactTraining/react-router) in the menu item

```jsx
import { Link } from 'react-router-dom';

<MenuItem icon={<FaGem />}>
  Dashboard
  <Link to="/" />
</MenuItem>;
```

## API

### ProSidebar

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>collapsed</td>
            <td>boolean</td>
            <td>Set the collapsed status of the sidebar </td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td>rtl</td>
            <td>boolean</td>
            <td>Set RTL direction</td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td>width</td>
            <td>number | string</td>
            <td>Set the width of the sidebar</td>
            <td><code>270px</code></td>
        </tr>
        <tr>
            <td>image</td>
            <td>string</td>
            <td>Set the url of the image to use in the background</td>
            <td><code>-</code></td>
        </tr>
    </tbody>
</table>

### Menu

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
     <tbody>
        <tr>
            <td>iconShape</td>
            <td>string</td>
            <td>Set the shape of the icon : <code>square</code> | <code>round</code> | <code>circle</code> </td>
            <td><code>-</code></td>
        </tr>  
    </tbody>

</table>

### MenuItem

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
     <tbody>
        <tr>
            <td>icon</td>
            <td>ReactNode</td>
            <td>Set the icon for the menu item </td>
            <td><code>-</code></td>
        </tr>  
    </tbody>

</table>

### SubMenu

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
     <tbody>
        <tr>
            <td>icon</td>
            <td>ReactNode</td>
            <td>Set the icon for submenu title </td>
            <td><code>-</code></td>
        </tr>  
        <tr>
            <td>title</td>
            <td>string | ReactNode</td>
            <td>Set the submenu title </td>
            <td><code>-</code></td>
        </tr>  
    </tbody>

</table>

## License

MIT © [Mohamed Azouaoui](https://azouaoui.netlify.com)
