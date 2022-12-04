import React from 'react';
import { createPopper } from '@popperjs/core';
import { useSidebar } from './useSidebar';

interface PopperOptions {
  level: number;
  buttonRef: React.RefObject<HTMLAnchorElement>;
  contentRef: React.RefObject<HTMLDivElement>;
}

interface PopperResult {
  popperInstance?: ReturnType<typeof createPopper>;
}

export const usePopper = (options: PopperOptions): PopperResult => {
  const [popperInstance, setPopperInstance] = React.useState<ReturnType<typeof createPopper>>();
  const { collapsed, transitionDuration, toggled } = useSidebar();

  const { level, buttonRef, contentRef } = options;

  React.useEffect(() => {
    if (level === 0 && collapsed && contentRef.current && buttonRef.current) {
      const instance = createPopper(buttonRef.current, contentRef.current, {
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

      setPopperInstance(instance);
    }
  }, [level, collapsed, contentRef, buttonRef]);

  React.useEffect(() => {
    if (contentRef.current && buttonRef.current) {
      const ro = new ResizeObserver(() => {
        popperInstance?.update();
      });

      ro.observe(contentRef.current);
      ro.observe(buttonRef.current);
    }

    setTimeout(() => {
      popperInstance?.update();
    }, transitionDuration);
  }, [popperInstance, transitionDuration, toggled, contentRef, buttonRef]);

  return { popperInstance };
};
