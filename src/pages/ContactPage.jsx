import React, { useEffect, useState, useRef } from 'react';
import rawHtml from '../content/contact.html?raw';
import { initAnimations } from '../utils/animations';

export default function ContactPage({ navigate }) {
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

    // Contact form submission handling
    const form = root.querySelector('form');
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button');
        if (submitBtn) {
          submitBtn.textContent = 'Sending...';
          submitBtn.disabled = true;
        }
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.backgroundColor = '#22c55e';
          }
        }, 800);
      };
    }

    return () => {
      cleanupAnimations();
    };
  }, []);

  // Update Hamburger animation icon
  useEffect(() => {
    if (!containerRef.current) return;
    const root = containerRef.current;
    const hamburgerBtns = root.querySelectorAll('[data-vln-name="Hamburger"]');
    hamburgerBtns.forEach(btn => {
      const topBar = btn.querySelector('[data-vln-name="Top"]');
      const bottomBar = btn.querySelector('[data-vln-name="Bottom"]');
      if (topBar && bottomBar) {
        if (mobileMenuOpen) {
          topBar.style.transform = 'translateY(3.5px) rotate(45deg)';
          topBar.style.transition = 'transform 0.3s ease';
          bottomBar.style.transform = 'translateY(-3.5px) rotate(-45deg)';
          bottomBar.style.transition = 'transform 0.3s ease';
        } else {
          topBar.style.transform = 'none';
          topBar.style.transition = 'transform 0.3s ease';
          bottomBar.style.transform = 'none';
          bottomBar.style.transition = 'transform 0.3s ease';
        }
      }
    });
  }, [mobileMenuOpen]);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <a
            href="/#services"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              navigate('/#services');
            }}
          >
            Services
          </a>
          <a
            href="/#reviews"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              navigate('/#reviews');
            }}
          >
            Reviews
          </a>
          <a
            href="/#pricing"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              navigate('/#pricing');
            }}
          >
            Pricing
          </a>
          <a
            href="/#projects"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              navigate('/#projects');
            }}
          >
            Projects
          </a>
          <a
            href="/contact"
            className="mobile-nav-drawer-cta"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
            }}
          >
            Contact Us
          </a>
        </div>
      )}

      {/* Main Extracted Contact Page DOM */}
      <div
        id="main"
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: rawHtml }}
      />
    </div>
  );
}
