import { useState } from 'react';
import { EnvelopeSimple, Plus } from '@phosphor-icons/react';
import { faqIntro, faqs } from '@/data/faq';
import { site } from '@/config/site';
import Button from '@/components/ui/Button';
import styles from './Faq.module.css';

function FaqItem({ id, question, answer, open, onToggle }) {
  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <h3>
        <button
          type="button"
          id={`${id}-q`}
          className={styles.question}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={onToggle}
        >
          {question}
          <Plus size={18} className={styles.toggleIcon} aria-hidden="true" />
        </button>
      </h3>
      <div id={`${id}-a`} role="region" aria-labelledby={`${id}-q`} className={styles.answer}>
        <div>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openItems, setOpenItems] = useState(() => new Set());

  const toggle = (index) =>
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{faqIntro.title}</h2>
          <p className={styles.description}>{faqIntro.description}</p>
          <Button to="/contact">Contact Sales Now</Button>
        </div>

        <div className={styles.grid}>
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              id={`faq-${i}`}
              question={faq.q}
              answer={faq.a}
              open={openItems.has(i)}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        <p className={styles.mail}>
          <EnvelopeSimple size={20} aria-hidden="true" />
          Feel free to mail us for any enquiries: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </section>
  );
}
