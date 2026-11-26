import styles from './PendingTag.module.css';

/** Marks content that is visible on preview only and hidden on production. */
export default function PendingTag({ children = 'Pending approval' }) {
  return <span className={styles.tag}>{children}</span>;
}
