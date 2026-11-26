import { useState } from 'react';
import { Pulse } from '@phosphor-icons/react';
import { beyond } from '@/data/beyond';
import { useInterval } from '@/hooks/useInterval';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import Marquee from '@/components/ui/Marquee';
import SectionGlow from '@/components/ui/SectionGlow';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './BeyondDevelopment.module.css';

// Bar lengths alternate between two activity levels; they carry no metrics.
const ACTIVITY = [
  [72, 58, 86],
  [88, 74, 64],
];

/** Cloud & support card: status board for infrastructure, APIs and monitoring. */
function StatusBoard({ rows, states }) {
  const [phase, setPhase] = useState(0);
  useInterval(() => setPhase((p) => 1 - p), 2200);

  return (
    <div className={styles.chart} aria-hidden="true">
      <span className={styles.state}>
        <Pulse size={16} /> {states[phase]}
      </span>
      <div className={styles.axis}>
        <i />
        <i />
        <i />
      </div>
      <div className={styles.bars}>
        {rows.map((row, i) => (
          <div key={row.label} className={styles.track}>
            <span className={styles.bar} style={{ width: `${ACTIVITY[phase][i]}%` }}>
              <span className={styles.pill}>
                <Icon name={row.icon} size={14} />
                {row.label}
              </span>
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

/** Branding & design card: design-tool icons sliding inside the folder. */
function DesignFolder({ icons }) {
  return (
    <div className={styles.folderScene} aria-hidden="true">
      <span className={`${styles.paper} ${styles.paperLeft}`} />
      <span className={`${styles.paper} ${styles.paperRight}`} />
      <div className={styles.folder}>
        <span className={styles.folderTab} />
        <div className={styles.folderFront}>
          {icons.map((row, r) => (
            <Marquee key={r} duration={9} fade={false} className={styles.folderRow}>
              {row.map((name, i) => (
                <Icon key={i} name={name} size={34} />
              ))}
            </Marquee>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BeyondDevelopment() {
  const { title, description, cloud, design, actions } = beyond;

  return (
    <section id="beyond-development" className="section">
      <SectionGlow variant="split" />
      <div className="container">
        <SectionHeading title={title} description={description} />

        <div className={styles.cards}>
          <Card className={styles.card}>
            <h3>{cloud.title}</h3>
            <p>{cloud.text}</p>
            <div className={styles.visual}>
              <StatusBoard rows={cloud.rows} states={cloud.states} />
            </div>
          </Card>
          <Card className={styles.card}>
            <h3>{design.title}</h3>
            <p>{design.text}</p>
            <div className={styles.visual}>
              <DesignFolder icons={design.icons} />
            </div>
          </Card>
        </div>

        <div className={styles.actions}>
          {actions.map((action, i) => (
            <Button key={action.label} to={action.to} icon={action.icon} halo={i === 0}>
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
