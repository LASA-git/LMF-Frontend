import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
      return;
    }

    const id = hash.replace('#', '');
    let tries = 0;

    const scrollToHash = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      tries += 1;
      if (tries < 20) {
        window.requestAnimationFrame(scrollToHash);
      }
    };

    scrollToHash();
  }, [pathname, hash]);

  return null;
}
