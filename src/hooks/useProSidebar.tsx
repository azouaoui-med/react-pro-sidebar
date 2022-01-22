import { useSidebar } from '../components/sidebarContext';

interface ProSidebarFunction {
  collapseSidebar: (collapsed?: boolean) => void;
  toggleSidebar: (toggled?: boolean) => void;
}

export const useProSidebar = (): ProSidebarFunction => {
  const { updateSidebarState, collapsed, toggled } = useSidebar();

  const collapseSidebar = (value?: boolean) => {
    updateSidebarState({ collapsed: value ?? !collapsed });
  };

  const toggleSidebar = (value?: boolean) => {
    updateSidebarState({ toggled: value ?? !toggled });
  };

  return { collapseSidebar, toggleSidebar };
};
