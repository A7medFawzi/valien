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
          <Button to="/contact" halo>
            {cta}
          </Button>
        </div>

        <figure className={styles.figure}>
          <div className={styles.board} aria-hidden="true">
            {columns.map((apps, i) => (
              <Marquee
                key={i}
                direction={i % 2 ? 'down' : 'up'}
                duration={18 + i * 4}
                className={styles.column}
              >
                {apps.map((app) => (
                  <span key={app} className={styles.app}>
                    <Icon name={app} size={28} />
                  </span>
                ))}
              </Marquee>
            ))}
          </div>
          <figcaption className={styles.caption}>{caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
