import { ChartPieSlice, Code, GearSix, Sparkle } from '@phosphor-icons/react';
import { brandLogos, hero } from '@/data/hero';
import { site } from '@/config/site';
import cloud from '@/assets/images/hero/cloud.webp';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

/*
 * Isometric 3D blocks. Each block is a stack of thin layers (the sides) plus a top face,
 * so the rounded corners stay intact; heights animate via the --h custom property.
 * Grid order on the rotated 2×2 grid: back, right, left, front.
 */
const blocks = [
  { Icon: Code, min: 40, max: 90, delay: 0 },
  { Icon: ChartPieSlice, min: 30, max: 70, delay: -1.6 },
  { Icon: GearSix, min: 50, max: 110, delay: -3.2 },
  { Icon: Sparkle, min: 70, max: 150, delay: -0.8 },
];
const LAYERS = 24;
const layers = Array.from({ length: LAYERS }, (_, i) => i / LAYERS);

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.background} aria-hidden="true">
        <div className={styles.rays} />
        <div className={styles.arc} />
        <img className={styles.cloud} src={cloud} alt="" width="617" height="400" />
      </div>

      <div className={`container ${styles.content}`}>
        <Badge dot>{hero.eyebrow}</Badge>
        <h1 className={styles.title}>
          {hero.title[0]}
          <br />
          {hero.title[1]}
        </h1>
        <p className={styles.description}>{hero.description}</p>
        <Button to={site.bookingUrl} icon halo className={styles.cta}>
          {hero.cta}
        </Button>

        <div className={styles.stage} aria-hidden="true">
          <div className={styles.grid}>
            {blocks.map(({ Icon, min, max, delay }, i) => (
              <div
                key={i}
                className={styles.block}
                style={{ '--min': `${min}px`, '--max': `${max}px`, '--delay': `${delay}s` }}
              >
                <span className={styles.shadow} />
                {layers.map((k) => (
                  <span key={k} className={styles.layer} style={{ '--k': k }} />
                ))}
                <span className={styles.top}>
                  <Icon size={64} weight="duotone" className={styles.icon} />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.brands}>
          <p>{hero.trustedBy}</p>
          <ul className={styles.logos}>
            {brandLogos.map((logo) => (
              <li key={logo.name}>
                <img src={logo.src} alt={logo.name} height="22" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
