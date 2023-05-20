import React from 'react';
import { useLegacySidebar } from './useLegacySidebar';

interface ProSidebarResult {
  /**
   * a function that enables you to update the sidebar's collapsed status
   */
  collapseSidebar: (collapsed?: boolean) => void;

  /**
   * a function that enables you to update the sidebar's toggled status
   */
  toggleSidebar: (toggled?: boolean) => void;

  /**
   * sidebar breakpoint status
   * value is set to true when screen size reaches the breakpoint
   */
  broken: boolean;

  /**
   * sidebar collapsed status
   */
  collapsed: boolean;

  /**
   * sidebar toggled status
   */
  toggled: boolean;

  /**
   * sidebar rtl status
   */
  rtl: boolean;
}

/**
 * @deprecated
 * `useProSidebar` is deprecated and will be removed in the next major release.
 *  please use Sidebar props instead.
 */
export const useProSidebar = (): ProSidebarResult => {
  const legacySidebarContext = useLegacySidebar();

  if (legacySidebarContext === undefined) {
    throw new Error(
      'useProSidebar must be used within a ProSidebarProvider. Please wrap your component with a ProSidebarProvider to use this hook.',
    );
  }

  const collapseSidebar = React.useCallback(
    (value?: boolean) => {
      if (value === undefined) legacySidebarContext.updateCollapseState();
      else legacySidebarContext.updateSidebarState({ collapsed: value });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [legacySidebarContext.updateCollapseState, legacySidebarContext.updateSidebarState],
  );

  const toggleSidebar = React.useCallback(
    (value?: boolean) => {
      if (value === undefined) legacySidebarContext.updateToggleState();
      else legacySidebarContext.updateSidebarState({ toggled: value });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [legacySidebarContext.updateToggleState, legacySidebarContext.updateSidebarState],
  );

  React.useEffect(() => {
    console.warn(
      'useProSidebar is deprecated and will be removed in the next major release. Please use Sidebar props instead.',
    );
  }, []);

  return {
    collapseSidebar,
    toggleSidebar,
    collapsed: !!legacySidebarContext.collapsed,
    broken: !!legacySidebarContext.broken,
    toggled: !!legacySidebarContext.toggled,
    rtl: !!legacySidebarContext.rtl,
  };
};
