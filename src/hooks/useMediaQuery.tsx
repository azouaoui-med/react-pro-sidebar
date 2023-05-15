import React from 'react';

export const useMediaQuery = (breakpoint?: string): boolean => {
  const [matches, setMatches] = React.useState(
    !!breakpoint && window.matchMedia(breakpoint).matches,
  );

  React.useEffect(() => {
    if (breakpoint) {
      const media = window.matchMedia(breakpoint);

      const handleMatch = () => {
        if (media.matches !== matches) {
          setMatches(media.matches);
        }
      };

      handleMatch();

      media.addEventListener('change', handleMatch);
      return () => media.removeEventListener('change', handleMatch);
    }
  }, [matches, breakpoint]);

  return matches;
};
