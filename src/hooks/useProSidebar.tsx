import { useLayout } from './useLayout';
import { useSidebar } from './useSidebar';

interface ProSidebarFunction {
  /**
   * a function that enables you to update the sidebar's collapsed status
   */
  collapseSidebar: (collapsed?: boolean) => void;

  /**
   * a function that enables you to update the sidebar's toggled status
   */
  toggleSidebar: (toggled?: boolean) => void;

  broken: boolean;

  collapsed: boolean;

  toggled: boolean;

  rtl: boolean;
}

export const useProSidebar = (): ProSidebarFunction => {
  const { updateSidebarState, collapsed, toggled, broken } = useSidebar();
  const { rtl } = useLayout();

  const collapseSidebar = (value?: boolean) => {
    updateSidebarState({ collapsed: value ?? !collapsed });
  };

  const toggleSidebar = (value?: boolean) => {
    updateSidebarState({ toggled: value ?? !toggled });
  };

  return {
    collapseSidebar,
    toggleSidebar,
    collapsed: !!collapsed,
    broken: !!broken,
    toggled: !!toggled,
    rtl: !!rtl,
  };
};
