import { Asterisk } from '@phosphor-icons/react';
import styles from './Badge.module.css';

/** Small uppercase pill shown above section titles. */
export default function Badge({ children, dot = false }) {
  return (
    <span className={styles.badge}>
      {dot ? (
        <span className={styles.dot} aria-hidden="true" />
      ) : (
        <Asterisk size={12} weight="bold" aria-hidden="true" />
      )}
      {children}
    </span>
  );
}
