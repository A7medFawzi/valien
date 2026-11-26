import { ArrowUpRight, UsersThree } from '@phosphor-icons/react';
import { careers } from '@/data/careers';
import { site } from '@/config/site';
import cloud from '@/assets/images/hero/cloud.webp';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import IconTile from '@/components/ui/IconTile';
import Reveal from '@/components/ui/Reveal';
import SectionGlow from '@/components/ui/SectionGlow';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Careers.module.css';

export default function Careers() {
  const { title, image, quote, quoteAuthor, jobs } = careers;

  return (
    <section id="careers" className="section">
      <SectionGlow variant="center" />
      <div className="container">
        <SectionHeading title={title} />

        <div className={styles.top}>
          <Reveal className={styles.photo}>
            <img src={image} alt="Valien team at work" loading="lazy" />
          </Reveal>
          <Reveal delay={120} className={styles.quoteCard}>
            <img src={cloud} alt="" className={styles.cloud} aria-hidden="true" />
            <blockquote>
              <p className={styles.quote}>“{quote}”</p>
              <footer>{quoteAuthor}</footer>
            </blockquote>
          </Reveal>
        </div>

        <ul className={styles.jobs}>
          {jobs.map((job) => (
            <li key={job.title}>
              <Card
                as="a"
                href={job.href}
                target="_blank"
                rel="noopener noreferrer"
                interactive
                className={styles.job}
              >
                <ArrowUpRight size={20} className={styles.arrow} aria-hidden="true" />
                <div className={styles.jobHeader}>
                  <IconTile name={job.icon} tone="white" />
                  <h3>{job.title}</h3>
                </div>
                <p>{job.text}</p>
                <ul className={styles.tags}>
                  {job.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Button to={site.jobsUrl} icon={UsersThree} halo>
            Check All Job Openings
          </Button>
          <Button to="/contact">Contact Sales Now</Button>
        </div>
      </div>
    </section>
  );
}
