import { useState } from 'react';
import { brandLogos } from '@/data/hero';
import { projects, projectsIntro } from '@/data/projects';
import { useInterval } from '@/hooks/useInterval';
import Card from '@/components/ui/Card';
import Marquee from '@/components/ui/Marquee';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Projects.module.css';

const AUTOPLAY_MS = 4000;

export default function Projects() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useInterval(() => setActive((i) => (i + 1) % projects.length), autoplay ? AUTOPLAY_MS : null);

  const select = (index) => {
    setActive(index);
    setAutoplay(false);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <SectionHeading align="start" {...projectsIntro} />

            <div className={styles.tabs} role="tablist" aria-label="Projects">
              {projects.map((project, i) => (
                <button
                  key={project.client}
                  type="button"
                  role="tab"
                  id={`project-tab-${i}`}
                  aria-selected={active === i}
                  aria-controls="project-panel"
                  className={`${styles.tab} ${active === i ? styles.activeTab : ''}`}
                  onClick={() => select(i)}
                >
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </button>
              ))}
            </div>
          </div>

          <Card className={styles.preview}>
            <div
              id="project-panel"
              role="tabpanel"
              aria-labelledby={`project-tab-${active}`}
              className={styles.panel}
            >
              {projects.map((project, i) => (
                <a
                  key={project.client}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.slide} ${active === i ? styles.activeSlide : ''}`}
                  tabIndex={active === i ? 0 : -1}
                  aria-hidden={active !== i}
                >
                  <img src={project.image} alt="" loading="lazy" />
                  <div className={styles.caption}>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>
                </a>
              ))}
            </div>
          </Card>
        </div>

        <Marquee duration={28} className={styles.logos}>
          {brandLogos.map((logo) => (
            <img key={logo.name} src={logo.src} alt={logo.name} height="24" />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
