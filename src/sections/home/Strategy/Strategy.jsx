import { useState } from 'react';
import {
  ArrowCircleUpRight,
  FacebookLogo,
  Gif,
  Image,
  MonitorPlay,
  Sparkle,
  XLogo,
} from '@phosphor-icons/react';
import { strategy } from '@/data/strategy';
import { site } from '@/config/site';
import { useInterval } from '@/hooks/useInterval';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Reveal from '@/components/ui/Reveal';
import SectionGlow from '@/components/ui/SectionGlow';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Strategy.module.css';

const folderIcons = [XLogo, Sparkle, FacebookLogo, MonitorPlay, Image, Gif];

function GrowthChart({ before, after }) {
  const [showAfter, setShowAfter] = useState(false);
  useInterval(() => setShowAfter((v) => !v), 2200);
  const bars = showAfter ? after : before;

  return (
    <div className={styles.chart} aria-hidden="true">
      <span className={styles.state}>
        <ArrowCircleUpRight size={16} /> {showAfter ? 'After' : 'Before'}
      </span>
      <div className={styles.axis}>
        <i />
        <i />
        <i />
      </div>
      <div className={styles.bars}>
        {bars.map((bar, i) => (
          <div key={i} className={styles.track}>
            <span className={styles.bar} style={{ width: `${bar.value}%` }}>
              <span className={styles.pill}>{bar.label}</span>
            </span>
          </div>
        ))}
      </div>
      <div className={styles.lines}>
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function ContentFolder() {
  return (
    <div className={styles.folderScene} aria-hidden="true">
      <span className={`${styles.paper} ${styles.paperLeft}`} />
      <span className={`${styles.paper} ${styles.paperRight}`} />
      <div className={styles.folder}>
        <span className={styles.folderTab} />
        <div className={styles.folderFront}>
          {folderIcons.map((FolderIcon, i) => (
            <FolderIcon key={i} size={34} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Strategy() {
  const { title, consulting, content } = strategy;

  return (
    <section id="strategy" className="section">
      <SectionGlow variant="split" />
      <div className="container">
        <SectionHeading title={title} />

        <div className={styles.cards}>
          <Reveal>
            <Card className={styles.card}>
              <h3>{consulting.title}</h3>
              <p>{consulting.text}</p>
              <div className={styles.visual}>
                <GrowthChart before={consulting.before} after={consulting.after} />
              </div>
            </Card>
          </Reveal>
          <Reveal delay={120}>
            <Card className={styles.card}>
              <h3>{content.title}</h3>
              <p>{content.text}</p>
              <div className={styles.visual}>
                <ContentFolder />
              </div>
            </Card>
          </Reveal>
        </div>

        <div className={styles.actions}>
          <Button to={site.bookingUrl} icon halo>
            Book A Free Call Now
          </Button>
          <Button to="/contact">Contact Sales Now</Button>
        </div>
      </div>
    </section>
  );
}
