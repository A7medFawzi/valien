import { usePageTitle } from '@/hooks/usePageTitle';
import cloud from '@/assets/images/hero/cloud.webp';
import Button from '@/components/ui/Button';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  usePageTitle('Page not found');

  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.panel}>
          <img src={cloud} alt="" className={styles.cloud} aria-hidden="true" />
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Oops! Page not found</h1>
          <p className={styles.text}>
            The page you are looking for either doesn’t exist or is currently not available.
          </p>
          <Button to="/" halo>
            Go back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
