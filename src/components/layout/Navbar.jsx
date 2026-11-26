import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { mainNav, primaryCta, withDestination } from '@/config/navigation';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import styles from './Navbar.module.css';

const navLinks = withDestination(mainNav);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Close on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={styles.wrapper}>
      <div className={`${styles.bar} ${open ? styles.open : ''}`}>
        <Link to="/" className={styles.logo} aria-label="Valien home" onClick={close}>
          <Logo variant="mark" tone="mint" />
        </Link>

        <span className={styles.divider} aria-hidden="true" />

        <nav className={styles.nav} aria-label="Main">
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button to={primaryCta.to} className={styles.cta}>
          {primaryCta.label}
        </Button>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav id="mobile-menu" className={styles.mobileMenu} aria-label="Mobile" hidden={!open}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={styles.mobileLink} onClick={close}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button to={primaryCta.to} block onClick={close}>
            {primaryCta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}
