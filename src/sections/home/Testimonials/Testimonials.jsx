import { testimonials, testimonialsIntro } from '@/data/testimonials';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import Marquee from '@/components/ui/Marquee';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const { reviewCount, reviewerAvatars, ...heading } = testimonialsIntro;

  return (
    <section id="reviews" className="section">
      <div className="container">
        <SectionHeading {...heading} />
      </div>

      <Marquee duration={45} className={styles.marquee}>
        {testimonials.map((t) => (
          <Card as="figure" key={t.name} className={styles.card}>
            <figcaption className={styles.author}>
              <img src={t.avatar} alt="" width="76" height="76" loading="lazy" />
              <div>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.company}>{t.company}</p>
              </div>
              <Icon name={t.source} size={30} className={styles.source} />
            </figcaption>
            <blockquote className={styles.quote}>{t.quote}</blockquote>
          </Card>
        ))}
      </Marquee>

      <div className={`container ${styles.summary}`}>
        <div className={styles.avatars}>
          {reviewerAvatars.map((src) => (
            <img key={src} src={src} alt="" width="32" height="32" loading="lazy" />
          ))}
        </div>
        <p>
          Over <strong>{reviewCount}+</strong> people gave us review
        </p>
      </div>
    </section>
  );
}
