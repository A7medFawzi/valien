import { useEffect } from 'react';
import { site } from '@/config/site';

/** Sets document.title as "<title> – Valien" (or the default title when empty). */
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} – ${site.name}` : `${site.name} – ${site.tagline}`;
  }, [title]);
}
