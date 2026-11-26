import { Check, Stack, X } from '@phosphor-icons/react';
import { approach } from '@/data/approach';
import Logo from '@/components/ui/Logo';
import SectionGlow from '@/components/ui/SectionGlow';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Approach.module.css';

export default function Approach() {
  const { badge, title, description, challenges, valien } = approach;

  return (
    <section id="approach" className="section">
      <SectionGlow variant="center" />
      <div className="container">
        <SectionHeading badge={badge} title={title} description={description} />

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <Stack size={24} aria-hidden="true" />
              {challenges.title}
            </h3>
            <ul className={`${styles.list} ${styles.others}`}>
              {challenges.items.map((item) => (
                <li key={item}>
                  <X size={16} weight="bold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <span className={styles.mark}>
                <Logo variant="mark" tone="mint" />
              </span>
              {valien.title}
            </h3>
            <ul className={`${styles.list} ${styles.us}`}>
              {valien.items.map((item) => (
                <li key={item}>
                  <Check size={16} weight="bold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
