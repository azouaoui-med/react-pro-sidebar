import React from 'react';

export const useMediaQuery = (breakpoint?: string): boolean => {
  const [matches, setMatches] = React.useState(breakpoint === 'always');

  React.useEffect(() => {
    if (breakpoint && breakpoint !== 'always') {
      const media = window.matchMedia(`(max-width: ${breakpoint})`);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
    }
  }, [matches, breakpoint]);

  return matches;
};
