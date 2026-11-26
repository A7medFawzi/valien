import {
  CaretLeft,
  CaretRight,
  MagnifyingGlass,
  Package,
  ShoppingBag,
  Tag,
} from '@phosphor-icons/react';
import { sampleCode, services, servicesIntro } from '@/data/services';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import { getIcon } from '@/components/ui/icons';
import IconTile from '@/components/ui/IconTile';
import Marquee from '@/components/ui/Marquee';
import SectionGlow from '@/components/ui/SectionGlow';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Services.module.css';

/*
 * Business systems diagram (template orbit): a mint band, four system nodes on it
 * (ERP, CRM, inventory, dashboards) and connectors into the central business software.
 * Drawn in a fixed 520×260 viewBox.
 */
const ORBIT = { cx: 260, cy: 300, outer: 230, inner: 150, nodeRadius: 190 };
const LABEL = { x: 260, y: 236 };
const orbitNodes = [-162, -126, -58, -22].map((deg, i) => {
  const rad = (deg * Math.PI) / 180;
  const node = services.systems.nodes[i];
  return {
    Icon: getIcon(node.icon),
    label: node.label,
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
      {orbitNodes.map(({ Icon, label, x, y }, i) => (
        <g key={i} className={styles.orbitNode} style={{ '--i': i }}>
          <circle cx={x} cy={y} r="26" className={styles.orbitNodeHalo} />
          <circle cx={x} cy={y} r="19" className={styles.orbitNodeDot} />
          <Icon x={x - 12} y={y - 12} width="24" height="24" weight="duotone" />
          <text x={x} y={y - 34} textAnchor="middle" className={styles.orbitNodeLabel}>
            {label}
          </text>
        </g>
      ))}
      <foreignObject x={LABEL.x - 80} y={LABEL.y - 22} width="160" height="44">
        <span className={styles.orbitLabel}>{services.systems.label}</span>
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
          Name : <strong>{services.saas.fileName}</strong>
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

function CommerceVisual() {
  const { header, products, search, action } = services.commerce;
  return (
    <div className={styles.chat} aria-hidden="true">
      <div className={styles.chatHeader}>
        <span className={styles.chatAvatar}>
          <ShoppingBag size={22} weight="duotone" />
        </span>
        <span>{header}</span>
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
          <Package size={28} />
          <small>{products[0]}</small>
        </span>
        <span>
          <Tag size={28} />
          <small>{products[1]}</small>
        </span>
      </div>
      <div className={styles.chatInput}>
        <MagnifyingGlass size={20} />
        <span className={styles.prompt}>{search}</span>
        <span className={styles.send}>{action}</span>
      </div>
    </div>
  );
}

function FeatureCard({ service }) {
  return (
    <Card className={styles.feature}>
      <IconTile name={service.icon} />
      <h3>{service.title}</h3>
      <p>{service.text}</p>
      <ul className={styles.concepts}>
        {service.concepts.map((concept) => (
          <li key={concept}>{concept}</li>
        ))}
      </ul>
    </Card>
  );
}

function Panel({ service, children }) {
  return (
    <Card className={styles.panel}>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
      <div className={styles.visual}>{children}</div>
    </Card>
  );
}

export default function Services() {
  const { web, mobile, systems, saas, commerce, keywords } = services;

  return (
    <section id="services" className="section">
      <SectionGlow variant="right" />
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <SectionHeading align="start" {...servicesIntro} />
          <div className={styles.features}>
            <FeatureCard service={web} />
            <FeatureCard service={mobile} />
          </div>
        </div>

        <Panel service={systems}>
          <WorkflowVisual />
        </Panel>
        <Panel service={saas}>
          <CodeVisual />
        </Panel>
        <Panel service={commerce}>
          <CommerceVisual />
        </Panel>
      </div>

      <Marquee duration={40} className={styles.tags}>
        {keywords.map((tag) => (
          <span key={tag.label} className={styles.tag}>
            <Icon name={tag.icon} size={18} />
            {tag.label}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
