import { finalCta } from '@/data/community';
import { site } from '@/config/site';
import cloud from '@/assets/images/hero/cloud.webp';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  const { title, description, perks, cta } = finalCta;

  return (
    <section className="section">
      <div className="container">
        <div className={styles.panel}>
          <img
            src={cloud}
            alt=""
            className={`${styles.cloud} ${styles.cloudTop}`}
            aria-hidden="true"
          />
          <img
            src={cloud}
            alt=""
            className={`${styles.cloud} ${styles.cloudBottom}`}
            aria-hidden="true"
          />
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <ul className={styles.perks}>
            {perks.map((perk) => (
              <li key={perk.label}>
                <Icon name={perk.icon} size={18} />
                {perk.label}
              </li>
            ))}
          </ul>
          <Button to={site.bookingUrl} icon halo>
            {cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
