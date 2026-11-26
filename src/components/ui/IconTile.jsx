import Icon from './Icon';
import styles from './IconTile.module.css';

/** Small rounded square holding an icon (used on feature and job cards). */
export default function IconTile({ name, tone = 'mint', size = 22 }) {
  return (
    <span className={`${styles.tile} ${styles[tone]}`}>
      <Icon name={name} size={size} weight="duotone" />
    </span>
  );
}
