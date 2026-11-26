import styles from './Marquee.module.css';

/**
 * Infinite scrolling strip. Children are rendered twice so the loop is seamless;
 * the copy is hidden from screen readers.
 * - direction: "left" | "right" | "up" | "down"
 * - duration: seconds for one full loop
 */
export default function Marquee({
  direction = 'left',
  duration = 30,
  fade = true,
  className = '',
  children,
}) {
  const vertical = direction === 'up' || direction === 'down';
  return (
    <div
      className={[
        styles.marquee,
        vertical ? styles.vertical : styles.horizontal,
        fade && styles.fade,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ '--duration': `${duration}s` }}
    >
      <div className={`${styles.track} ${styles[direction]}`}>
        <div className={styles.group}>{children}</div>
        <div className={styles.group} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
