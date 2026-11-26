import { ChartPieSlice, Code, GearSix, Sparkle } from '@phosphor-icons/react';
import { brandLogos, hero } from '@/data/hero';
import { site } from '@/config/site';
import heroVideo from '@/assets/videos/hero-waves.mp4';
import cloud from '@/assets/images/hero/cloud.webp';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

// Order matters: tiles are laid out on a rotated 2×2 grid (top, right, left, bottom).
const tiles = [Code, ChartPieSlice, GearSix, Sparkle];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.background} aria-hidden="true">
        <video
          className={styles.video}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className={styles.glow} />
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
            {tiles.map((TileIcon, i) => (
              <div key={i} className={styles.tile} style={{ '--i': i }}>
                <TileIcon size={56} weight="duotone" className={styles.tileIcon} />
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
