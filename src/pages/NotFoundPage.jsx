import React, { useEffect, useState, useRef } from 'react';
import rawHtml from '../content/404.html?raw';
import { initAnimations } from '../utils/animations';

export default function NotFoundPage({ navigate }) {
  const containerRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const root = containerRef.current;

    const cleanupAnimations = initAnimations(root);

    // Mobile Hamburger
    const hamburgerBtns = root.querySelectorAll('[data-vln-name="Hamburger"]');
    hamburgerBtns.forEach(btn => {
      btn.style.cursor = 'pointer';
      btn.onclick = (e) => {
        e.stopPropagation();
        setMobileMenuOpen(prev => !prev);
      };
    });

    // Back to Home button hook
    const backBtns = root.querySelectorAll('a, button, [data-vln-name="Secondary btn"]');
    backBtns.forEach(btn => {
      btn.style.cursor = 'pointer';
    });

    return () => {
      cleanupAnimations();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              navigate('/');
            }}
          >
            Home
          </a>
          <a
            href="/contact"
            className="mobile-nav-drawer-cta"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              navigate('/contact');
            }}
          >
            Contact Us
          </a>
        </div>
      )}

      {/* Main Extracted 404 Page DOM */}
      <div
        id="main"
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: rawHtml }}
      />
    </div>
  );
}
