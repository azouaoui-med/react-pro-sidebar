# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0-alpha.9] - 2022-11-27

- Fix build

## [1.0.0-alpha.8] - 2022-11-27

- Added rootStyles to all components
- [Sidebar] Added backdropStyles
- [Sidebar] Removed overlayColor prop
- [Menu] Renamed `renderMenuItemStyles` to `menuItemStyles` which now is of type `MenuItemStyles`, the prop now provide a way to apply styles directly to MenuItem/SubMenu component and their children

**Type definition**:

```ts
type ElementStyles = CSSObject | ((params: MenuItemStylesParams) => CSSObject | undefined);

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
```

- updated classnames, the following are the new names:

  - `ps-sidebar-root`
  - `ps-sidebar-container`
  - `ps-sidebar-image`
  - `ps-sidebar-backdrop`
  - `ps-collapsed`
  - `ps-toggled`
  - `ps-rtl`
  - `ps-broken`
  - `ps-menu-root`
  - `ps-menuitem-root`
  - `ps-submenu-root`
  - `ps-menu-button`
  - `ps-menu-prefix`
  - `ps-menu-suffix`
  - `ps-menu-label`
  - `ps-menu-icon`
  - `ps-submenu-content`
  - `ps-submenu-expand-icon`
  - `ps-disabled`
  - `ps-active`
  - `ps-open`

- Added utility classes that can be used to reference used classes

## [1.0.0-alpha.7] - 2022-10-24

- Added support for react router to MenuItem via routerLink prop

## [1.0.0-alpha.6] - 2022-10-14

- Fixed submenu content not displayed when collapsed [issue #124](https://github.com/azouaoui-med/react-pro-sidebar/issues/124)

## [1.0.0-alpha.4] - 2022-10-10

- Build updates
- Upgrade dependencies
- Tests fixes

## [1.0.0-alpha.3] - 2022-10-06

- Fixed children prop typing

## [1.0.0-alpha.2] - 2022-10-05

- Fixed build

## [1.0.0-alpha.1] - 2022-10-05

### Breaking changes

- Removed scss in favor of css-in-js(styled component)
- [Sidebar] Rename ProSidebar to Sidebar

```diff
- import { ProSidebar } from 'react-pro-sidebar';
+ import { Sidebar } from 'react-pro-sidebar';
```

- [Sidebar] Removed `collapsed`, `toggled` and `onToggle` props (`useProSidebar` hook will be used instead)
- [Sidebar] Added `defaultCollapsed` prop
- [Sidebar] Added `always` option to breakPoint prop
- [Sidebar] Added `customBreakPoint` prop
- [Sidebar] Added `backgroundColor` prop
- [Sidebar] Added `transitionDuration` prop
- [Sidebar] Added `overlayColor` prop
- [Menu] removed `iconShape`, `popperArrow`, `subMenuBullets` and `innerSubMenuArrows` props
- [Menu] added `renderMenuItemStyles` prop for customizing `MenuItem` & `SubMenu` components
- [Menu] added `renderExpandIcon` prop
- [Menu] added `closeOnClick` prop (useful when wanting to close popper on menuItem click when collapsed is `true`)
- [MenuItem] added `disabled` props
- [SubMenu] added `disabled` props
- [SubMenu] renamed `title` prop to `label`
- Introduced `ProSidebarProvider` component and `useProSidebar` hook to access and manage sidebar state

## [0.7.1] - 2021-09-23

### Fixed

- Fix submenu items bullets not showing by adding `subMenuBullets` and `innerSubMenuArrows` props to Menu to choose between arrows and bullets

## [0.7.0] - 2021-09-22

### Added

- Add submenu indent variable and update default
- Add exports for all component props
- Add breakpoint-xxl

### updated

- Replace submenu bullets with arrows
- Enable icon use in submenu items

### Fixed

- Fix typescript property collision by Omitting prefix props for li element [@zirho](https://github.com/zirho)

## [0.6.0] - 2021-02-11

### Added

- Add width and collapsedWidth props

### Fixed

- Fix dynamically add Menu items depending on certain conditions from [@sergiovhe](https://github.com/sergiovhe)
- Fix use of styles in ProSidebar component from [@sujaysudheenda](https://github.com/sujaysudheenda)
- Fix default props spreading

## [0.5.0] - 2020-12-14

### Added

- Add onOpenChange callback function for submenu [issue #23](https://github.com/azouaoui-med/react-pro-sidebar/issues/23) from [@QoobIY](https://github.com/QoobIY)

### Fixed

- Fix prop spreading and update types on submenu

## [0.4.4] - 2020-08-16

### Fixed

- Fix SidebarFooter styling [issue #12](https://github.com/azouaoui-med/react-pro-sidebar/issues/12)
- Fix overlapping sidebar image with overlay

## [0.4.3] - 2020-07-06

### Fixed

- Fix css build

## [0.4.2] - 2020-07-05

### Fixed

- Fix slidedown.css path bug [issue #7](https://github.com/azouaoui-med/react-pro-sidebar/issues/7)

## [0.4.1] - 2020-06-12

### Fixed

- Fix Typescript error type [issue #3](https://github.com/azouaoui-med/react-pro-sidebar/issues/3)

## [0.4.0] - 2020-06-05

### Added

- Display arrow when hover on top level submenu title
- Add toggle option for sidebar and break points
- Add popperArrow prop in Menu component to specify whether to display an arrow to point to sub-menu wrapper on sidebar collapsed

### Changed

- Use direction:rtl instead of row-reverse

### Fixed

- Fix react-slidedown css import [issue #1](https://github.com/azouaoui-med/react-pro-sidebar/issues/1) from [@metadan](https://github.com/metadan)
- Fix submenu positioning on sidebar collapsed using popperjs and resize-observer-polyfill for resize event listener.

## [0.3.0] - 2020-05-11

### Added

- Add suffix prop to menuItem and submenu
- Add prefix prop to menuItem and submenu
- Add sidebar layout

  - Add sidebar header component
  - Add sidebar content component
  - Add sidebar footer component

## [0.2.0] - 2020-05-08

### Added

- Add prop to submenu component to set the open value
- Add prop to menuItem component to set the active value

### Fixed

- Fix sidebar height overflow

## [0.1.1] - 2020-05-07

### Fixed

- Fix submenu visibility when collapsed

## [0.1.0] - 2020-05-07

### Added

- Add prop to submenu component to set the default open value

### Changed

- Update readme
  - Merge API tables into one single table use prop instead of name
  - Add description on how to use nested sub-menus

### Fixed

- Fix overflow of the sidebar content

## [0.1.0-beta.1] - 2020-05-06

### Initial Pre release

- Initial pre release of the react pro sidebar library
