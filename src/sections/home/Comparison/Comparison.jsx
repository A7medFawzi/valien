import { Check, Stack, X } from '@phosphor-icons/react';
import { comparison } from '@/data/comparison';
import { site } from '@/config/site';
import Logo from '@/components/ui/Logo';
import SectionGlow from '@/components/ui/SectionGlow';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import styles from './Comparison.module.css';

export default function Comparison() {
  const { badge, title, description, us, others } = comparison;

  return (
    <section id="comparison" className="section">
      <SectionGlow variant="center" />
      <div className="container">
        <SectionHeading badge={badge} title={title} description={description} />

        <div className={styles.columns}>
          <Reveal className={styles.column}>
            <h3 className={styles.columnTitle}>
              <span className={styles.mark}>
                <Logo variant="mark" tone="mint" />
              </span>
              {site.name}
            </h3>
            <ul className={`${styles.list} ${styles.us}`}>
              {us.map((item) => (
                <li key={item}>
                  <Check size={16} weight="bold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.column} delay={120}>
            <h3 className={styles.columnTitle}>
              <Stack size={24} aria-hidden="true" />
              Others
            </h3>
            <ul className={`${styles.list} ${styles.others}`}>
              {others.map((item) => (
                <li key={item}>
                  <X size={16} weight="bold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
