import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  // Swap page-specific stylesheet to prevent cross-page CSS collisions
  useEffect(() => {
    const pageCss = document.getElementById('page-css');
    if (!pageCss) return;
    if (currentPath === '/contact') {
      pageCss.setAttribute('href', '/styles/contact.css');
    } else if (currentPath === '/' || currentPath === '') {
      pageCss.setAttribute('href', '/styles/home.css');
    } else {
      pageCss.setAttribute('href', '/styles/not-found.css');
    }
  }, [currentPath]);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  // Global link click handler for SPA navigation & smooth scrolling
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Internal Hash links
      if (href.startsWith('#') || href.startsWith('./#')) {
        e.preventDefault();
        const hash = href.replace('./#', '#');
        if (window.location.pathname !== '/' && window.location.pathname !== '') {
          window.history.pushState({}, '', '/' + hash);
          setCurrentPath('/');
          setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) {
              const headerOffset = 80;
              const elementPosition = target.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }, 100);
        } else {
          window.history.pushState({}, '', hash);
          const target = document.querySelector(hash);
          if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }
        return;
      }

      // Internal Route links
      if (href === './contact' || href === '/contact') {
        e.preventDefault();
        navigate('/contact');
        return;
      }

      if (href === './' || href === '/') {
        e.preventDefault();
        navigate('/');
        return;
      }

      if (href === './404' || href === '/404') {
        e.preventDefault();
        navigate('/404');
        return;
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  if (currentPath === '/contact') {
    return <ContactPage navigate={navigate} />;
  }

  if (currentPath === '/404') {
    return <NotFoundPage navigate={navigate} />;
  }

  if (currentPath === '/' || currentPath === '') {
    return <HomePage navigate={navigate} />;
  }

  // Any other route falls back to 404
  return <NotFoundPage navigate={navigate} />;
}
