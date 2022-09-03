# [React Pro Sidebar](https://www.npmjs.com/package/react-pro-sidebar)

[![npm][version]][npm-url]
[![License][license]][npm-url]
[![Peer][peer]][npm-url]
[![Download][download]][npm-url]
[![Stars][stars]][github-url]

[version]: https://img.shields.io/npm/v/react-pro-sidebar.svg?style=flat-square
[license]: https://img.shields.io/github/license/azouaoui-med/react-pro-sidebar?style=flat-square
[peer]: https://img.shields.io/npm/dependency-version/react-pro-sidebar/peer/react?style=flat-square
[download]: https://img.shields.io/npm/dt/react-pro-sidebar?style=flat-square
[stars]: https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social
[npm-url]: https://www.npmjs.com/package/react-pro-sidebar
[github-url]: https://github.com/azouaoui-med/react-pro-sidebar

React Pro Sidebar provides a set of components for creating high level and customizable side navigation

## Old versions

- [V0.x](https://github.com/azouaoui-med/react-pro-sidebar/tree/v0.x)

## Demo

[Live preview](https://azouaoui-med.github.io/react-pro-sidebar)

## Screenshot

![react-pro-sidebar](https://user-images.githubusercontent.com/25878302/83899865-0c5f8e80-a751-11ea-9689-a7fad94843a1.gif)

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

First you need to make sure that your components are wrapped within a `<ProSidebarProvider>` component

```tsx
import { ProSidebarProvider } from 'react-pro-sidebar';

<ProSidebarProvider>
  <App />
</ProSidebarProvider>;
```

Then in your layout component you can add sidebar navigation

```tsx
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

<Sidebar>
  <Menu>
    <MenuItem>MenuItem</MenuItem>
    <SubMenu label="Submenu">
      <MenuItem>MenuItem 1</MenuItem>
      <MenuItem>MenuItem 2</MenuItem>
    </SubMenu>
  </Menu>
</Sidebar>;
```

## Hook

The library comes with a `useProSidebar` hook that lets you access and handle sidebar state

**Usage**

```tsx
const { toggleSidebar, collapseSidebar, broken, rtl, collapsed, toggled } = useProSidebar();
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
            <td rowspan=9>Sidebar</td>
            <td>collapsed</td>
            <td><code>boolean</code></td>
            <td>collapsed status of the sidebar </td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td>defaultCollapsed</td>
            <td><code>boolean</code></td>
            <td>initial collapsed status</td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td>width</td>
            <td><code>number | string</code></td>
            <td>Width of the sidebar</td>
            <td><code>270px</code></td>
        </tr>
        <tr>
            <td>collapsedWidth</td>
            <td><code>number | string</code></td>
            <td>Width of the sidebar on collapsed state</td>
            <td><code>80px</code></td>
        </tr>
        <tr>
            <td>breakPoint</td>
            <td><code>xs</code> | <code>sm</code> | <code>md</code> | <code>lg</code> | <code>xl</code> | <code>xxl</code> | <code>always</code></td>
            <td>set when the sidebar should trigger responsiveness behavior </td>
            <td>-</td>
        </tr>
        <tr>
            <td>image</td>
            <td><code>string</code></td>
            <td>Url of the image to use in the sidebar background</td>
            <td>-</td>
        </tr>
        <tr>
            <td>transitionDuration</td>
            <td><code>number</code></td>
            <td>duration for the transition in milliseconds to be used in collapse and toggle behavior</td>
            <td><code>300</code></td>
        </tr>
        <tr>
            <td>overlayColor</td>
            <td><code>string</code></td>
            <td>set overlay color</td>
            <td><code>rgb(0, 0, 0, 0.3)</code></td>
        </tr>
        <tr>
            <td>rtl</td>
            <td><code>boolean</code></td>
            <td>RTL direction</td>
            <td><code>false</code></td>
        </tr>
         <tr>
            <td rowspan=3>Menu</td>
            <td>closeOnClick</td>
            <td><code>boolean</code></td>
            <td>if <code>true</code>, submenu popper will close when clicking on MenuItem</td>
            <td><code>false</code></td>
        </tr>  
         <tr>          
            <td>renderMenuItemStyles</td>
            <td><code>(params: { level: number; collapsed: boolean }) => CSSObject</code></td>
            <td>render method for style customization on MenuItem and SubMenu components </td>
            <td>-</td>
        </tr>  
         <tr>          
            <td>renderExpandIcon</td>
            <td><code>(params: { level: number; collapsed: boolean;open: boolean; }) => React.ReactNode</code></td>
            <td>Render method for customizing submenu expand icon</td>
            <td>-</td>
        </tr>         
         <tr>
            <td rowspan=4>MenuItem</td>
            <td>icon</td>
            <td><code>ReactNode</code></td>
            <td>Icon for the menu item </td>
            <td>-</td>
        </tr>  
         <tr>
            <td>active</td>
            <td><code>boolean</code></td>
            <td>Set active menu items </td>
            <td><code>false</code></td>
        </tr>  
         <tr>
            <td>prefix</td>
            <td><code>ReactNode</code></td>
            <td>Add a prefix to the menuItem </td>
            <td>-</td>
        </tr>  
         <tr>
            <td>suffix</td>
            <td><code>ReactNode</code></td>
            <td>Add a suffix to the menuItem </td>
            <td>-</td>
        </tr>          
        <tr>
            <td rowspan=7>SubMenu</td>
            <td>label</td>
            <td><code>string | ReactNode</code></td>
            <td>label for the submenu </td>
            <td>-</td>
        </tr>  
         <tr>
            <td>icon</td>
            <td><code>ReactNode</code></td>
            <td>Icon for submenu</td>
            <td>-</td>
        </tr>  
         <tr>
            <td>defaultOpen</td>
            <td><code>boolean</code></td>
            <td>Set if the submenu is open by default</td>
            <td><code>false</code></td>
        </tr>  
         <tr>
            <td>open</td>
            <td><code>boolean</code></td>
            <td>Set open value if you want to control the state</td>
            <td>-</td>
        </tr>  
        <tr>
            <td>prefix</td>
            <td><code>ReactNode</code></td>
            <td>Add a prefix to the submenu </td>
            <td>-</td>
        </tr>  
        <tr>
            <td>suffix</td>
            <td><code>ReactNode</code></td>
            <td>Add a suffix to the submenu </td>
            <td>-</td>
        </tr>
        <tr>
            <td>onOpenChange</td>
            <td><code>(open: boolean) => void</code></td>
            <td>Callback function called when submenu state changes</td>
            <td>-</td>
        </tr>
    </tbody>
</table>

## License

MIT © [Mohamed Azouaoui](https://azouaoui.netlify.com)
