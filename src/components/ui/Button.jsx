import { ChatsCircle } from '@phosphor-icons/react';
import SmartLink from './SmartLink';
import styles from './Button.module.css';

/**
 * Pill button. Renders a link when `to` is given, otherwise a <button>.
 * - variant: "dark" (default) | "light"
 * - halo: adds the soft outer ring used on primary calls to action
 * - icon: `true` for the default "let's talk" icon, or any Phosphor icon component
 */
export default function Button({
  to,
  variant = 'dark',
  halo = false,
  icon = false,
  block = false,
  className = '',
  children,
  ...props
}) {
  const classes = [
    styles.button,
    styles[variant],
    halo && styles.halo,
    block && styles.block,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const IconComponent = icon === true ? ChatsCircle : icon;
  const content = (
    <>
      {IconComponent && <IconComponent size={20} className={styles.icon} aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <SmartLink to={to} className={classes} {...props}>
        {content}
      </SmartLink>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
