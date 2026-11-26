import { processSection } from '@/data/process';
import { publishable } from '@/config/publishing';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import PendingTag from '@/components/ui/PendingTag';
import SectionGlow from '@/components/ui/SectionGlow';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Process.module.css';

function Stat({ value, suffix = '', decimals = 0, label, pending, start }) {
  const current = Number(useCountUp(value, { start, decimals }));
  const formatted = current.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return (
    <div className={styles.stat}>
      <p className={styles.statValue}>
        {formatted}
        {suffix}
      </p>
      <p className={styles.statLabel}>{label}</p>
      {pending && <PendingTag />}
    </div>
  );
}

export default function Process() {
  const { badge, title, description, steps, stats } = processSection;
  const [statsRef, statsInView] = useInView();

  return (
    <section id="process" className="section">
      <SectionGlow variant="center" />
      <div className="container">
        <SectionHeading badge={badge} title={title} description={description} />

        <ol className={styles.steps}>
          {steps.map((step, i) => (
            <li key={step.title}>
              <Card interactive className={styles.step}>
                <span className={styles.number}>{i + 1}</span>
                <Icon name={step.icon} size={28} className={styles.icon} />
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
                <span className={styles.stepTag}>Step {i + 1}</span>
              </Card>
            </li>
          ))}
        </ol>

        <div ref={statsRef} className={styles.stats}>
          {publishable(stats).map((stat) => (
            <Stat key={stat.label} {...stat} start={statsInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
