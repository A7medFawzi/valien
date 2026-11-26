import fullLogo from '@/assets/images/brand/logo.svg?raw';
import markLogo from '@/assets/images/brand/logo-mark.svg?raw';
import styles from './Logo.module.css';

/**
 * Valien logo as inline SVG, so it inherits `color` from CSS.
 * - variant: "full" (mark + wordmark) | "mark"
 * - tone: "dark" (black) | "mint" | "inherit"
 */
export default function Logo({ variant = 'full', tone = 'dark', className = '', ...props }) {
  return (
    <span
      className={`${styles.logo} ${styles[tone] ?? ''} ${className}`}
      // Local, trusted SVG asset.
      dangerouslySetInnerHTML={{ __html: variant === 'mark' ? markLogo : fullLogo }}
      {...props}
    />
  );
}
