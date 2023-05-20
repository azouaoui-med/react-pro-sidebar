import React from 'react';
import { createPopper } from '@popperjs/core';
import { SidebarContext } from '../components/Sidebar';

interface PopperOptions {
  level: number;
  buttonRef: React.RefObject<HTMLAnchorElement>;
  contentRef: React.RefObject<HTMLDivElement>;
}

interface PopperResult {
  popperInstance?: ReturnType<typeof createPopper>;
}

export const usePopper = (options: PopperOptions): PopperResult => {
  const { level, buttonRef, contentRef } = options;

  const { collapsed, toggled, transitionDuration } = React.useContext(SidebarContext);
  const popperInstanceRef = React.useRef<ReturnType<typeof createPopper> | undefined>();

  /**
   * create popper instance only on first level submenu components and when sidebar is collapsed
   */
  React.useEffect(() => {
    if (level === 0 && collapsed && contentRef.current && buttonRef.current) {
      popperInstanceRef.current = createPopper(buttonRef.current, contentRef.current, {
        placement: 'right',
        strategy: 'fixed',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 5],
            },
          },
        ],
      });
    }

    return () => popperInstanceRef.current?.destroy();
  }, [level, collapsed, contentRef, buttonRef]);

  /**
   * update popper instance (position) when buttonRef or contentRef changes
   */
  React.useEffect(() => {
    if (contentRef.current && buttonRef.current) {
      const ro = new ResizeObserver(() => {
        popperInstanceRef.current?.update();
      });

      ro.observe(contentRef.current);
      ro.observe(buttonRef.current);
    }

    setTimeout(() => {
      popperInstanceRef.current?.update();
    }, transitionDuration);
  }, [transitionDuration, toggled, contentRef, buttonRef]);

  return { popperInstance: popperInstanceRef.current };
};
