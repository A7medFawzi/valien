import { Link } from 'react-router-dom';
import { footerLinks, site, socialLinks } from '@/config/site';
import logoWordmark from '@/assets/images/brand/logo-wordmark.webp';
import Icon from '../ui/Icon';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <Link to="/" aria-label={`${site.name} home`}>
            <img
              src={logoWordmark}
              alt={site.name}
              width="96"
              height="40"
              className={styles.logo}
            />
          </Link>
          <ul className={styles.socials}>
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <Icon name={s.icon} size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <ul className={styles.links}>
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.bottom}>
          <p>
            © {year} {site.name}
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
