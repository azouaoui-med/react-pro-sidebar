# [React Pro Sidebar](https://www.npmjs.com/package/react-pro-sidebar)

[![npm][version]][npm-url]
[![License][license]][npm-url]
[![Peer][peer]][npm-url]
[![Download][download]][npm-url]
[![Stars][stars]][github-url]

[version]: https://img.shields.io/npm/v/react-pro-sidebar.svg?style=flat-square
[license]: https://img.shields.io/github/license/azouaoui-med/react-pro-sidebar?style=flat-square
[peer]: https://img.shields.io/npm/dependency-version/react-pro-sidebar/peer/react?style=flat-square
[download]: https://img.shields.io/npm/dm/react-pro-sidebar?style=flat-square
[stars]: https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social
[npm-url]: https://www.npmjs.com/package/react-pro-sidebar
[github-url]: https://github.com/azouaoui-med/react-pro-sidebar

React sidebar library with dropdown menus and unlimited number of nested submenus

## Demo

[Live preview](https://azouaoui-med.github.io/react-pro-sidebar)

## Screenshot

![react-pro-sidebar](https://user-images.githubusercontent.com/25878302/81577624-8f373880-93a1-11ea-9156-81ff986237cf.gif)

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

If you are using sass then you can import the `styles.scss` directly into your scss file

```scss
@import '../node_modules/react-pro-sidebar/dist/scss/styles.scss';
```

## Sidebar Layout

You can take advantage of the sidebar layout components to organize the content of your sidebar

```jsx
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';

<ProSidebar>
  <SidebarHeader>
    {/**
     *  You can add a header for the sidebar ex: logo
     */}
  </SidebarHeader>
  <SidebarContent>
    {/**
     *  You can add the content of the sidebar ex: menu, profile details, ...
     */}
  </SidebarContent>
  <SidebarFooter>
    {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
  </SidebarFooter>
</ProSidebar>;
```

> Note : `SidebarContent` component will stretch and fill the remaining space

## Custom Styling

There are sets of sass variables available which you can override to define your own styles

You need to include your override variables before importing the scss file

Your `custom.scss` file should look something like this

```scss
// Your variable overrides
$sidebar-bg-color: #1d1d1d;
$sidebar-color: #adadad;
$sidebar-width: 270px;
$sidebar-collapsed-width: 80px;
$highlight-color: #d8d8d8;
$submenu-bg-color: #2b2b2b;
$submenu-bg-color-collapsed: #2b2b2b;
$icon-bg-color: #2b2b2b;
$icon-size: 35px;

@import '../node_modules/react-pro-sidebar/dist/scss/styles.scss';
```

## Using nested sub-menus

You can have as many nested menu-items and sub-menus as you like, and the syntax is very simple

```jsx
<Menu iconShape="square">
  <SubMenu title="Components" icon={<FaGem />}>
    <MenuItem>Component 1</MenuItem>
    <SubMenu title="Sub Component 1" icon={<FaHeart />}>
      {/* you can have more nested submenus ... */}
    </SubMenu>
  </SubMenu>
</Menu>
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

<table>
    <thead>
        <tr>
            <th>Component</th>
            <th>Prop</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=7>ProSidebar</td>
            <td>collapsed</td>
            <td>boolean</td>
            <td>collapsed status of the sidebar </td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td>rtl</td>
            <td>boolean</td>
            <td>RTL direction</td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td>toggled</td>
            <td>string</td>
            <td>toggle status of the sidebar</td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td>onToggle</td>
            <td><code>(value:boolean)=>{}</code></td>
            <td>Callback function called when toggled status changes, happens when overlay is clicked</td>
            <td>-</td>
        </tr>
        <tr>
            <td>breakPoint</td>
            <td><code>xs</code> | <code>sm</code> | <code>md</code> | <code>lg</code> | <code>xl</code></td>
            <td>set break point for responsiveness</td>
            <td>-</td>
        </tr>
        <tr>
            <td>width</td>
            <td>number | string</td>
            <td>Width of the sidebar</td>
            <td><code>270px</code></td>
        </tr>
        <tr>
            <td>image</td>
            <td>string</td>
            <td>Url of the image to use in the sidebar background</td>
            <td>-</td>
        </tr>
         <tr>
            <td rowspan=1>Menu</td>
            <td>iconShape</td>
            <td><code>'square'</code> | <code>'round'</code> | <code>'circle'</code></td>
            <td>Shape of the menu icons </td>
            <td>-</td>
        </tr>  
         <tr>
            <td rowspan=4>MenuItem</td>
            <td>icon</td>
            <td>ReactNode</td>
            <td>Icon for the menu item </td>
            <td>-</td>
        </tr>  
         <tr>
            <td>active</td>
            <td>boolean</td>
            <td>Set active menu items </td>
            <td><code>false</code></td>
        </tr>  
         <tr>
            <td>prefix</td>
            <td>ReactNode</td>
            <td>Add a prefix to the menuItem </td>
            <td>-</td>
        </tr>  
         <tr>
            <td>suffix</td>
            <td>ReactNode</td>
            <td>Add a suffix to the menuItem </td>
            <td>-</td>
        </tr>          
        <tr>
            <td rowspan=6>SubMenu</td>
            <td>title</td>
            <td>string | ReactNode</td>
            <td>Title for the submenu </td>
            <td>-</td>
        </tr>  
         <tr>
            <td>icon</td>
            <td>ReactNode</td>
            <td>Icon for submenu</td>
            <td>-</td>
        </tr>  
         <tr>
            <td>defaultOpen</td>
            <td>boolean</td>
            <td>Set if the submenu is open by default</td>
            <td><code>false</code></td>
        </tr>  
         <tr>
            <td>open</td>
            <td>boolean</td>
            <td>Set open value if you want to control the state</td>
            <td>-</td>
        </tr>  
        <tr>
            <td>prefix</td>
            <td>ReactNode</td>
            <td>Add a prefix to the submenu </td>
            <td>-</td>
        </tr>  
        <tr>
            <td>suffix</td>
            <td>ReactNode</td>
            <td>Add a suffix to the submenu </td>
            <td>-</td>
        </tr>          
    </tbody>
</table>

## License

MIT © [Mohamed Azouaoui](https://azouaoui.netlify.com)
