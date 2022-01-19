import { useSidebar } from '../components/sidebarContext';

interface ProSidebarFunction {
  collapseSidebar: (collapsed: boolean) => void;
}

export const useProSidebar = (): ProSidebarFunction => {
  const { updateSidebarState } = useSidebar();

  const collapseSidebar = (collapsed: boolean) => {
    updateSidebarState({ collapsed });
  };

  return { collapseSidebar };
};
