import { finalCta } from '@/data/cta';
import cloud from '@/assets/images/hero/cloud.webp';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  const { badge, title, description, cta } = finalCta;

  return (
    <section className="section" aria-labelledby="final-cta-title">
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
          <Badge>{badge}</Badge>
          <h2 id="final-cta-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.description}>{description}</p>
          <Button to={cta.to} icon halo className={styles.button}>
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
