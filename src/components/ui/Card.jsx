import styles from './Card.module.css';

/** Soft, slightly raised surface used by most content blocks. */
export default function Card({
  as: Tag = 'div',
  className = '',
  interactive = false,
  children,
  ...props
}) {
  return (
    <Tag
      className={[styles.card, interactive && styles.interactive, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Tag>
  );
}
