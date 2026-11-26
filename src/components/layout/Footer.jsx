import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';
import { company, contact, evexa, serviceAreas, socialLinks } from '@/config/site';
import { footerCompanyLinks, legalLinks, withDestination } from '@/config/navigation';
import { showPending } from '@/config/publishing';
import { products } from '@/data/products';
import evexaLogo from '@/assets/images/evexa/evexa-logo.png';
import Icon from '../ui/Icon';
import Logo from '../ui/Logo';
import PendingTag from '../ui/PendingTag';
import SmartLink from '../ui/SmartLink';
import styles from './Footer.module.css';

const productLinks = products.map((p) => ({ label: p.name, to: p.url || '/#products' }));

function LinkColumn({ title, links }) {
  return (
    <nav aria-label={title} className={styles.column}>
      <h2 className={styles.columnTitle}>{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <SmartLink to={link.to}>{link.label}</SmartLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const showEmail = !contact.email.pending || showPending;
  const legal = withDestination(legalLinks);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" aria-label={`${company.name} home`} className={styles.logo}>
              <Logo tone="mint" />
            </Link>
            <p className={styles.statement}>{company.statement}</p>
          </div>
          {socialLinks.length > 0 && (
            <ul className={styles.socials}>
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <Icon name={s.icon} size={20} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.columns}>
          <LinkColumn
            title="Services"
            links={serviceAreas.map((label) => ({ label, to: '/#services' }))}
          />
          <LinkColumn title="Company" links={withDestination(footerCompanyLinks)} />
          <LinkColumn title="Products" links={productLinks} />
          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Contact</h2>
            <ul>
              {showEmail && (
                <li>
                  <a href={`mailto:${contact.email.value}`}>{contact.email.value}</a>{' '}
                  {contact.email.pending && <PendingTag>Unverified</PendingTag>}
                </li>
              )}
              <li>
                <Link to="/contact">Send us a message</Link>
              </li>
              <li className={styles.markets}>Markets: {company.markets.join(' · ')}</li>
            </ul>
          </div>
        </div>

        {/* EVEXA: compact and secondary to Valien's own identity. */}
        <aside className={styles.evexa} aria-label="EVEXA">
          <img src={evexaLogo} alt="EVEXA" width="120" height="25" className={styles.evexaLogo} />
          <div className={styles.evexaText}>
            <h2>{evexa.heading}</h2>
            <p>{evexa.description}</p>
          </div>
          <a
            href={evexa.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.evexaLink}
          >
            {evexa.cta}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </aside>

        <div className={styles.bottom}>
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          {legal.length > 0 && (
            <ul className={styles.legal}>
              {legal.map((link) => (
                <li key={link.label}>
                  <SmartLink to={link.to}>{link.label}</SmartLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
