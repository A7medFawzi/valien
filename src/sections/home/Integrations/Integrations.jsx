import { integrations } from '@/data/integrations';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Marquee from '@/components/ui/Marquee';
import SectionGlow from '@/components/ui/SectionGlow';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Integrations.module.css';

export default function Integrations() {
  const { badge, title, description, cta, caption, columns } = integrations;

  return (
    <section id="integrations" className="section">
      <SectionGlow variant="left" />
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <SectionHeading align="start" badge={badge} title={title} description={description} />
          <Button to={cta.to} halo>
            {cta.label}
          </Button>
        </div>

        <figure className={styles.figure}>
          {/* Generic category icons; the same categories are listed for screen readers below. */}
          <div className={styles.board} aria-hidden="true">
            {columns.map((items, i) => (
              <Marquee
                key={i}
                direction={i % 2 ? 'down' : 'up'}
                duration={18 + i * 4}
                className={styles.column}
              >
                {items.map((item) => (
                  <span key={item.label} className={styles.app} title={item.label}>
                    <Icon name={item.icon} size={28} />
                  </span>
                ))}
              </Marquee>
            ))}
          </div>
          <ul className="visually-hidden">
            {columns.flat().map((item) => (
              <li key={item.label}>{item.label}</li>
            ))}
          </ul>
          <figcaption className={styles.caption}>{caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
