import { clients, trustedBy } from '@/data/clients';
import { publishable, showPending } from '@/config/publishing';
import Marquee from '@/components/ui/Marquee';
import PendingTag from '@/components/ui/PendingTag';
import styles from './TrustedBy.module.css';

/** Client logo marquee. Hidden entirely when no logos are approved for this environment. */
export default function TrustedBy() {
  const visible = publishable(clients);
  if (visible.length === 0) return null;

  // Repeat short lists so the marquee track is wide enough to loop smoothly.
  const track = visible.length < 6 ? [...visible, ...visible, ...visible] : visible;

  return (
    <section className={styles.section} aria-labelledby="trusted-by-title">
      <div className="container">
        <p id="trusted-by-title" className={styles.text}>
          {trustedBy.text}
          {showPending && visible.some((c) => c.pending) && (
            <PendingTag>Logo permission pending</PendingTag>
          )}
        </p>
        <Marquee duration={28} className={styles.logos}>
          {track.map((client, i) => (
            <span
              key={`${client.name}-${i}`}
              className={`${styles.logo} ${client.tone === 'dark' ? styles.dark : ''}`}
            >
              <img src={client.logo} alt={i < visible.length ? client.name : ''} />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
