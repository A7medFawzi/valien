import { useEffect } from 'react';

export const HOME_TITLE = 'Software Development Company in Saudi Arabia & Egypt | Valien';

/** Sets document.title as "<title> | Valien", or the home title when no title is given. */
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Valien` : HOME_TITLE;
  }, [title]);
}
