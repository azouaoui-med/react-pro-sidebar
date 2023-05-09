import React from 'react';

export const useMediaQuery = (breakpoint?: string): boolean => {
  const [matches, setMatches] = React.useState(
    breakpoint === 'always' || window.matchMedia(`(max-width: ${breakpoint})`).matches,
  );

  React.useEffect(() => {
    if (breakpoint && breakpoint !== 'always') {
      const media = window.matchMedia(`(max-width: ${breakpoint})`);

      const handleMatch = () => {
        if (media.matches !== matches) {
          setMatches(media.matches);
        }
      };

      handleMatch();

      window.addEventListener('resize', handleMatch);
      return () => window.removeEventListener('resize', handleMatch);
    }
  }, [matches, breakpoint]);

  return matches;
};
