# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
