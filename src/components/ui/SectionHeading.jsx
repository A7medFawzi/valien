import Badge from './Badge';
import styles from './SectionHeading.module.css';

/**
 * Title block used at the top of most sections.
 * - align "center" draws decorative lines on both sides of the title
 * - align "start" is left aligned (used in split layouts)
 */
export default function SectionHeading({ badge, title, description, align = 'center', as = 'h2' }) {
  const Heading = as;
  return (
    <header className={`${styles.heading} ${styles[align]}`}>
      {badge && <Badge>{badge}</Badge>}
      <div className={styles.titleRow}>
        {align === 'center' && <span className={styles.line} aria-hidden="true" />}
        <Heading className={styles.title}>{title}</Heading>
        {align === 'center' && <span className={styles.line} aria-hidden="true" />}
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}
