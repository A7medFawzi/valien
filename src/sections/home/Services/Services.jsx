import {
  Asterisk,
  CalendarCheck,
  CaretLeft,
  CaretRight,
  ChatsCircle,
  EnvelopeSimple,
  ImageSquare,
  MagnifyingGlass,
  Paperclip,
  Sparkle,
  UserFocus,
} from '@phosphor-icons/react';
import { sampleCode, services } from '@/data/services';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import IconTile from '@/components/ui/IconTile';
import Marquee from '@/components/ui/Marquee';
import Reveal from '@/components/ui/Reveal';
import styles from './Services.module.css';

const orbitIcons = [CalendarCheck, EnvelopeSimple, ChatsCircle, UserFocus];

function WorkflowVisual() {
  return (
    <div className={styles.orbit} aria-hidden="true">
      <div className={styles.orbitRing} />
      <div className={styles.orbitCore} />
      {orbitIcons.map((OrbitIcon, i) => (
        <span key={i} className={styles.orbitNode} style={{ '--i': i }}>
          <OrbitIcon size={24} weight="duotone" />
        </span>
      ))}
      <span className={styles.orbitLabel}>AI-Automation</span>
    </div>
  );
}

function CodeVisual() {
  const lines = sampleCode.split('\n');
  return (
    <div className={styles.editor} aria-hidden="true">
      <div className={styles.editorBar}>
        <span className={styles.fileName}>
          Name : <strong>AI_development.py</strong>
        </span>
        <span className={styles.search}>
          <MagnifyingGlass size={14} />
        </span>
        <span className={styles.arrows}>
          <CaretLeft size={12} />
          <CaretRight size={12} />
        </span>
      </div>
      <div className={styles.editorBody}>
        <pre className={styles.code}>
          <code>{lines.concat(lines).join('\n')}</code>
        </pre>
      </div>
    </div>
  );
}

function ChatVisual() {
  return (
    <div className={styles.chat} aria-hidden="true">
      <div className={styles.chatHeader}>
        <span className={styles.chatAvatar}>
          <Sparkle size={22} weight="duotone" />
        </span>
        <span>Creating Content Now</span>
        <span className={styles.typing}>
          <i />
          <i />
          <i />
        </span>
      </div>
      <span className={styles.skeleton} />
      <span className={styles.skeleton} />
      <div className={styles.chatImages}>
        <span>
          <ImageSquare size={30} />
        </span>
        <span>
          <ImageSquare size={30} />
        </span>
      </div>
      <div className={styles.chatInput}>
        <Paperclip size={20} />
        <span className={styles.prompt}>Create a banner</span>
        <span className={styles.send}>Create</span>
      </div>
    </div>
  );
}

export default function Services() {
  const { title, highlights, features, workflow, customModels, chatbots, tags } = services;

  return (
    <section id="services" className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <h2 className={styles.title}>{title}</h2>
          <ul className={styles.highlights}>
            {highlights.map((h) => (
              <li key={h.label}>
                <Asterisk size={16} aria-hidden="true" />
                <span>
                  <strong>{h.label}:</strong> {h.text}
                </span>
              </li>
            ))}
          </ul>
          <div className={styles.features}>
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <Card className={styles.feature}>
                  <IconTile name={f.icon} />
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <Card className={styles.panel}>
            <h3>{workflow.title}</h3>
            <p>{workflow.text}</p>
            <div className={styles.visual}>
              <WorkflowVisual />
            </div>
          </Card>
        </Reveal>

        <Reveal>
          <Card className={styles.panel}>
            <h3>{customModels.title}</h3>
            <p>{customModels.text}</p>
            <div className={styles.visual}>
              <CodeVisual />
            </div>
          </Card>
        </Reveal>

        <Reveal delay={120}>
          <Card className={styles.panel}>
            <h3>{chatbots.title}</h3>
            <p>{chatbots.text}</p>
            <div className={styles.visual}>
              <ChatVisual />
            </div>
          </Card>
        </Reveal>
      </div>

      <Marquee duration={40} className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag.label} className={styles.tag}>
            <Icon name={tag.icon} size={18} />
            {tag.label}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
