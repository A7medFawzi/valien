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
import SectionGlow from '@/components/ui/SectionGlow';
import styles from './Services.module.css';

const orbitIcons = [CalendarCheck, EnvelopeSimple, ChatsCircle, UserFocus];

/*
 * Workflow diagram (Landeros "AI-Automation" orbit): a mint band, four app nodes on it,
 * and curved connectors from every node to the label. Drawn in a fixed 520×280 viewBox.
 */
const ORBIT = { cx: 260, cy: 300, outer: 230, inner: 150, nodeRadius: 190 };
const LABEL = { x: 260, y: 236 };
const orbitNodes = [-162, -126, -58, -22].map((deg, i) => {
  const rad = (deg * Math.PI) / 180;
  return {
    Icon: orbitIcons[i],
    x: ORBIT.cx + ORBIT.nodeRadius * Math.cos(rad),
    y: ORBIT.cy + ORBIT.nodeRadius * Math.sin(rad),
  };
});

function WorkflowVisual() {
  return (
    <svg className={styles.orbit} viewBox="0 30 520 260" aria-hidden="true">
      <circle cx={ORBIT.cx} cy={ORBIT.cy} r={ORBIT.outer} className={styles.orbitBand} />
      <circle cx={ORBIT.cx} cy={ORBIT.cy} r={ORBIT.inner} className={styles.orbitCore} />
      {orbitNodes.map(({ x, y }, i) => (
        <path
          key={i}
          className={styles.orbitLink}
          d={`M ${x} ${y} Q ${(x + LABEL.x) / 2} ${LABEL.y - 10} ${LABEL.x} ${LABEL.y}`}
        />
      ))}
      {orbitNodes.map(({ Icon, x, y }, i) => (
        <g key={i} className={styles.orbitNode} style={{ '--i': i }}>
          <circle cx={x} cy={y} r="26" className={styles.orbitNodeHalo} />
          <circle cx={x} cy={y} r="19" className={styles.orbitNodeDot} />
          <Icon x={x - 12} y={y - 12} width="24" height="24" weight="duotone" />
        </g>
      ))}
      <foreignObject x={LABEL.x - 70} y={LABEL.y - 22} width="140" height="44">
        <span className={styles.orbitLabel}>AI-Automation</span>
      </foreignObject>
    </svg>
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
        <ol className={styles.gutter}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ol>
        <div className={styles.codeWindow}>
          <pre className={styles.code}>
            <code>{lines.concat(lines).join('\n')}</code>
          </pre>
        </div>
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
      <SectionGlow variant="right" />
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
            {features.map((f) => (
              <div key={f.title}>
                <Card className={styles.feature}>
                  <IconTile name={f.icon} />
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Card className={styles.panel}>
            <h3>{workflow.title}</h3>
            <p>{workflow.text}</p>
            <div className={styles.visual}>
              <WorkflowVisual />
            </div>
          </Card>
        </div>

        <div>
          <Card className={styles.panel}>
            <h3>{customModels.title}</h3>
            <p>{customModels.text}</p>
            <div className={styles.visual}>
              <CodeVisual />
            </div>
          </Card>
        </div>

        <div>
          <Card className={styles.panel}>
            <h3>{chatbots.title}</h3>
            <p>{chatbots.text}</p>
            <div className={styles.visual}>
              <ChatVisual />
            </div>
          </Card>
        </div>
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
