import styles from './SectionGlow.module.css';

/**
 * Soft blurred color blobs behind a section (the Landeros "glow" look, in Valien mint).
 * Place it as the first child of a `position: relative` section.
 * - variant: "center" | "left" | "right" | "split"
 */
export default function SectionGlow({ variant = 'split' }) {
  return <div className={`${styles.glow} ${styles[variant]}`} aria-hidden="true" />;
}
