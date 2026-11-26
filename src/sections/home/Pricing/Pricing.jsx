import { useState } from 'react';
import { CheckCircle, HandHeart, Lightning } from '@phosphor-icons/react';
import { plans, pricingIntro } from '@/data/pricing';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import styles from './Pricing.module.css';

const formatPrice = (value) => `$${value.toLocaleString('en-US')}`;

export default function Pricing() {
  const [billing, setBilling] = useState('monthly');
  const { yearlyDiscount, footnote, ...heading } = pricingIntro;

  return (
    <section id="pricing" className="section">
      <div className="container">
        <SectionHeading {...heading} />

        <div className={styles.toggle} role="radiogroup" aria-label="Billing period">
          {['monthly', 'yearly'].map((period) => (
            <button
              key={period}
              type="button"
              role="radio"
              aria-checked={billing === period}
              className={`${styles.option} ${billing === period ? styles.selected : ''}`}
              onClick={() => setBilling(period)}
            >
              {period === 'monthly' ? 'Monthly' : 'Yearly'}
            </button>
          ))}
          <span className={styles.discount}>{yearlyDiscount}</span>
        </div>

        <div className={styles.plans}>
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120} className={styles.planWrap}>
              <article className={`${styles.plan} ${plan.popular ? styles.popular : ''}`}>
                <header className={styles.planHeader}>
                  <h3 className={styles.planName}>
                    {plan.name}
                    {plan.popular && (
                      <span className={styles.popularBadge}>
                        <Lightning size={14} weight="fill" aria-hidden="true" /> Popular
                      </span>
                    )}
                  </h3>
                  <p className={styles.price}>
                    <strong>{formatPrice(plan[billing])}</strong>
                    <span>/month</span>
                  </p>
                  {billing === 'yearly' && <p className={styles.billingNote}>billed yearly</p>}
                  <Button to="/contact">{plan.cta}</Button>
                </header>

                <p className={styles.includes}>{plan.includesLabel}</p>
                <ul className={styles.features}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle size={20} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <p className={styles.footnote}>
          <HandHeart size={22} aria-hidden="true" />
          {footnote}
        </p>
      </div>
    </section>
  );
}
