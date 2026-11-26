import { testimonials, testimonialsIntro } from '@/data/testimonials';
import Card from '@/components/ui/Card';
import Marquee from '@/components/ui/Marquee';
import SectionGlow from '@/components/ui/SectionGlow';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Testimonials.module.css';

/**
 * Client testimonials marquee. Renders nothing until authentic, approved
 * testimonials are added to src/data/testimonials.js.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="reviews" className="section">
      <SectionGlow variant="split" />
      <div className="container">
        <SectionHeading {...testimonialsIntro} />
      </div>

      <Marquee duration={45} className={styles.marquee}>
        {testimonials.map((t) => (
          <Card as="figure" key={t.name} className={styles.card}>
            <figcaption className={styles.author}>
              {t.avatar && <img src={t.avatar} alt="" width="76" height="76" loading="lazy" />}
              <div>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.company}>{t.company}</p>
              </div>
            </figcaption>
            <blockquote className={styles.quote}>{t.quote}</blockquote>
          </Card>
        ))}
      </Marquee>
    </section>
  );
}
