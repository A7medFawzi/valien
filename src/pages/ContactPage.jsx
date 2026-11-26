import { useState } from 'react';
import { EnvelopeSimple, MapPin } from '@phosphor-icons/react';
import { company, contact, serviceAreas } from '@/config/site';
import { showPending } from '@/config/publishing';
import { submitContact } from '@/lib/contact';
import { usePageTitle } from '@/hooks/usePageTitle';
import cloud from '@/assets/images/hero/cloud.webp';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import PendingTag from '@/components/ui/PendingTag';
import styles from './ContactPage.module.css';

const copy = {
  title: 'Every project starts with a conversation.',
  description:
    "Tell us what you're working on, what you need or what you'd like to improve. We'll help you explore the right next step.",
};

const emptyForm = { name: '', email: '', subject: '', message: '' };

export default function ContactPage() {
  usePageTitle('Contact');
  const showEmail = !contact.email.pending || showPending;
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | mailto | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const result = await submitContact(form);
      setStatus(result);
      if (result === 'sent') setForm(emptyForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.panel}>
          <img src={cloud} alt="" className={styles.cloud} aria-hidden="true" />

          <div className={styles.info}>
            <h1 className={styles.title}>{copy.title}</h1>
            <p className={styles.lead}>{copy.description}</p>

            <div className={styles.cards}>
              {showEmail && (
                <Card className={styles.contactCard}>
                  <span className={styles.cardIcon}>
                    <EnvelopeSimple size={26} aria-hidden="true" />
                  </span>
                  <h2>Email</h2>
                  <p>Prefer email? Write to us directly.</p>
                  <a href={`mailto:${contact.email.value}`}>{contact.email.value}</a>
                  {contact.email.pending && <PendingTag>Email unverified</PendingTag>}
                </Card>
              )}
              <Card className={styles.contactCard}>
                <span className={styles.cardIcon}>
                  <MapPin size={26} aria-hidden="true" />
                </span>
                <h2>Where we work</h2>
                <p>{company.markets.join(' · ')} and businesses in international markets.</p>
              </Card>
            </div>
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            <label>
              Name
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="Jane Smith"
                value={form.name}
                onChange={update}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@company.com"
                value={form.email}
                onChange={update}
              />
            </label>
            <label>
              Service of interest
              <select name="subject" value={form.subject} onChange={update}>
                <option value="">Select a service (optional)</option>
                {serviceAreas.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
                <option value="Other">Something else</option>
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project"
                value={form.message}
                onChange={update}
              />
            </label>

            <Button type="submit" block disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </Button>

            <p className={styles.status} role="status">
              {status === 'sent' &&
                'Thanks! Your message has been sent — we’ll get back to you soon.'}
              {status === 'mailto' && 'Your email app should open with the message ready to send.'}
              {status === 'error' && (
                <>
                  Something went wrong and your message was not sent. Please try again
                  {showEmail && (
                    <>
                      {' '}
                      or email us at{' '}
                      <a href={`mailto:${contact.email.value}`}>{contact.email.value}</a>
                    </>
                  )}
                  .
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
