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

- [v0.x](https://github.com/azouaoui-med/react-pro-sidebar/tree/v0.x)

## Live Preview

- [Demo](https://azouaoui-med.github.io/react-pro-sidebar/iframe.html?id=playground--playground&args=&viewMode=story)

- [Storybook](https://azouaoui-med.github.io/react-pro-sidebar/?path=/docs/sidebar--basic)

## Screenshot

![react-pro-sidebar](https://user-images.githubusercontent.com/25878302/212479928-553c2d37-793b-4bcd-ac53-352f26337955.jpg)

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
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

<Sidebar>
  <Menu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>;
```

## Using React Router

You can make use of the `component` prop to integrate [React Router](https://reactrouter.com/en/main) link

**Example Usage**

```jsx
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

<Sidebar>
  <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link to="/documentation" />}> Documentation</MenuItem>
    <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
    <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
  </Menu>
</Sidebar>;
```

## Customization

We provide for each component `rootStyles` prop that can be used to customize the styles

its recommended using utility classes (`sidebarClasses`, `menuClasses`) for selecting target child nodes

**Example usage**

```jsx
<Sidebar
  rootStyles={{
    [`.${sidebarClasses.container}`]: {
      backgroundColor: 'red',
    },
  }}
>
  // ...
</Sidebar>
```

For `Menu` component, in addition to `rootStyles` you can also use `menuItemStyles` prop for customizing all `MenuItem` & `SubMenu` components and their children

**Type definition**

```jsx
interface MenuItemStyles {
  root?: ElementStyles;
  button?: ElementStyles;
  label?: ElementStyles;
  prefix?: ElementStyles;
  suffix?: ElementStyles;
  icon?: ElementStyles;
  subMenuContent?: ElementStyles;
  SubMenuExpandIcon?: ElementStyles;
}

type ElementStyles = CSSObject | ((params: MenuItemStylesParams) => CSSObject | undefined);
```

**Example usage**

```jsx
<Sidebar>
  <Menu
    menuItemStyles={{
      button: ({ level, active, disabled }) => {
        // only apply styles on first level elements of the tree
        if (level === 0)
          return {
            color: disabled ? '#f5d9ff' : '#d359ff',
            backgroundColor: active ? '#eecef9' : undefined,
          };
      },
    }}
  >
    //...
  </Menu>
</Sidebar>
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
            <td rowspan=13>Sidebar</td>
            <td >defaultCollapsed</td>
            <td><code>boolean</code></td>
            <td>Initial collapsed status</td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td>collapsed</td>
            <td><code>boolean</code></td>
            <td>Sidebar collapsed state</td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td>toggled</td>
            <td><code>boolean</code></td>
            <td>Sidebar toggled state</td>
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
            <td>backgroundColor</td>
            <td><code>string</code></td>
            <td>Set background color for sidebar</td>
            <td><code>rgb(249, 249, 249, 0.7)</code></td>
        </tr>
        <tr>
            <td>image</td>
            <td><code>string</code></td>
            <td>Url of the image to use in the sidebar background, need to apply transparency to background color </td>
            <td>-</td>
        </tr>
        <tr>
            <td>breakPoint</td>
            <td><code>xs</code> | <code>sm</code> | <code>md</code> | <code>lg</code> | <code>xl</code> | <code>xxl</code> | <code>all</code></td>
            <td>Set when the sidebar should trigger responsiveness behavior </td>
            <td>-</td>
        </tr>
        <tr>
            <td>customBreakPoint</td>
            <td><code>string</code></td>
            <td>Set custom breakpoint value, this will override breakPoint prop </td>
            <td>-</td>
        </tr>
        <tr>
            <td>transitionDuration</td>
            <td><code>number</code></td>
            <td>Duration for the transition in milliseconds to be used in collapse and toggle behavior</td>
            <td><code>300</code></td>
        </tr>
        <tr>
            <td>rtl</td>
            <td><code>boolean</code></td>
            <td>RTL direction</td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td>rootStyles</td>
            <td><code>CSSObject</code></td>
            <td>Apply styles to sidebar element</td>
            <td>-</td>
        </tr>
        <tr>
            <td>onBackdropClick</td>
            <td><code>() => void</code></td>
            <td>Callback function to be called when backdrop is clicked</td>
            <td>-</td>
        </tr>
         <tr>
            <td rowspan=5>Menu</td>
            <td>closeOnClick</td>
            <td><code>boolean</code></td>
            <td>If <code>true</code> and sidebar is in collapsed state, submenu popper will automatically close on MenuItem click</td>
            <td><code>false</code></td>
        </tr>
         <tr>
            <td>menuItemStyles</td>
            <td><code>MenuItemStyles</code></td>
            <td>Apply styles to MenuItem and SubMenu components and their children </td>
            <td>-</td>
        </tr>
         <tr>
            <td>renderExpandIcon</td>
            <td><code>(params: { level: number; collapsed: boolean; disabled: boolean; active: boolean; open: boolean; }) => React.ReactNode</code></td>
            <td>Render method for customizing submenu expand icon</td>
            <td>-</td>
        </tr>
          <tr>
            <td>transitionDuration</td>
            <td><code>number</code></td>
            <td>Transition duration in milliseconds to use when sliding submenu content</td>
            <td><code>300</code></td>
        </tr>
        <tr>
            <td>rootStyles</td>
            <td><code>CSSObject</code></td>
            <td>Apply styles from Menu root element</td>
            <td>-</td>
        </tr>
         <tr>
            <td rowspan=7>MenuItem</td>
            <td>icon</td>
            <td><code>ReactNode</code></td>
            <td>Icon for the menu item </td>
            <td>-</td>
        </tr>
         <tr>
            <td>active</td>
            <td><code>boolean</code></td>
            <td>If <code>true</code>, the component is active</td>
            <td><code>false</code></td>
        </tr>
         <tr>
            <td>disabled</td>
            <td><code>boolean</code></td>
            <td>If <code>true</code>, the component is disabled </td>
            <td>-</td>
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
            <td>component</td>
            <td><code>string | ReactElement</code></td>
            <td>A component used for menu button node, can be string (ex: 'div') or a component </td>
            <td>-</td>
        </tr>
        <tr>
            <td>rootStyles</td>
            <td><code>CSSObject</code></td>
            <td>Apply styles to MenuItem element</td>
            <td>-</td>
        </tr>
        <tr>
            <td rowspan=11>SubMenu</td>
            <td>label</td>
            <td><code>string | ReactNode</code></td>
            <td>Label for the submenu </td>
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
            <td>active</td>
            <td><code>boolean</code></td>
            <td>If <code>true</code>, the component is active</td>
            <td><code>false</code></td>
        </tr>
         <tr>
            <td>disabled</td>
            <td><code>boolean</code></td>
            <td>If <code>true</code>, the component is disabled </td>
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
        <tr>
            <td>component</td>
            <td><code>string | React.ReactElement</code></td>
            <td>A component used for menu button node, can be string (ex: 'div') or a component </td>
            <td>-</td>
        </tr>
        <tr>
            <td>rootStyles</td>
            <td><code>CSSObject</code></td>
            <td>Apply styles to SubMenu element</td>
            <td>-</td>
        </tr>
    </tbody>

</table>

## License

MIT © [Mohamed Azouaoui](https://azouaoui.netlify.app)
