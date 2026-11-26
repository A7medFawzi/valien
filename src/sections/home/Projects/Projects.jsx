import { useState } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { projects, projectsIntro } from '@/data/projects';
import { useInterval } from '@/hooks/useInterval';
import Card from '@/components/ui/Card';
import Logo from '@/components/ui/Logo';
import SectionGlow from '@/components/ui/SectionGlow';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Projects.module.css';

const AUTOPLAY_MS = 4000;

function Slide({ project, active }) {
  const content = (
    <>
      {project.image ? (
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      ) : (
        // No approved screenshot yet: neutral brand panel instead of a fabricated interface.
        <span className={styles.placeholder} aria-hidden="true">
          <Logo variant="mark" tone="mint" />
        </span>
      )}
      <div className={styles.caption}>
        <p className={styles.category}>{project.category}</p>
        <h3>
          {project.title}
          {project.url && <ArrowUpRight size={18} aria-hidden="true" />}
        </h3>
        <p>{project.summary}</p>
      </div>
    </>
  );

  const className = `${styles.slide} ${active ? styles.activeSlide : ''}`;
  if (!project.url) {
    return (
      <div className={className} aria-hidden={!active}>
        {content}
      </div>
    );
  }
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      tabIndex={active ? 0 : -1}
      aria-hidden={!active}
      aria-label={`${project.title} – visit ${project.client} website (opens in a new tab)`}
    >
      {content}
    </a>
  );
}

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
      <SectionGlow variant="split" />
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <SectionHeading align="start" {...projectsIntro} />

            <div className={styles.tabs} role="tablist" aria-label="Featured projects">
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
                  <span className={styles.tabMeta}>{project.category.split(' · ')[0]}</span>
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
                <Slide key={project.client} project={project} active={active === i} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
