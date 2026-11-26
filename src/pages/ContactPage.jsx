import { useState } from 'react';
import { Asterisk, ChatsCircle, Phone } from '@phosphor-icons/react';
import { site } from '@/config/site';
import { submitContact } from '@/lib/contact';
import { usePageTitle } from '@/hooks/usePageTitle';
import cloud from '@/assets/images/hero/cloud.webp';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import styles from './ContactPage.module.css';

const highlights = [
  { label: 'Effortless Assistance', text: 'Connect with our team anytime' },
  { label: 'Book a Demo Today', text: 'Experience our platform in action' },
];

const emptyForm = { name: '', email: '', subject: '', message: '' };

export default function ContactPage() {
  usePageTitle('Contact');
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
            <h1 className={styles.title}>Get in touch with us</h1>
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

            <div className={styles.cards}>
              <Card className={styles.contactCard}>
                <span className={styles.cardIcon}>
                  <ChatsCircle size={26} aria-hidden="true" />
                </span>
                <h2>Reach Out to Us</h2>
                <p>Need assistance? Drop us a message anytime.</p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </Card>
              <Card className={styles.contactCard}>
                <span className={styles.cardIcon}>
                  <Phone size={26} aria-hidden="true" />
                </span>
                <h2>Call Us</h2>
                <p>Need help? Give us a call—we&apos;re here for you.</p>
                <a href={`tel:${site.phone}`}>{site.phone}</a>
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
              Subject of Interest
              <input name="subject" placeholder="Subject" value={form.subject} onChange={update} />
            </label>
            <label>
              Message
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Message goes here..."
                value={form.message}
                onChange={update}
              />
            </label>

            <Button type="submit" block disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Submit'}
            </Button>

            <p className={styles.status} role="status">
              {status === 'sent' &&
                'Thanks! Your message has been sent — we’ll get back to you soon.'}
              {status === 'mailto' && 'Your email app should open with the message ready to send.'}
              {status === 'error' && (
                <>
                  Something went wrong. Please email us at{' '}
                  <a href={`mailto:${site.email}`}>{site.email}</a>.
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
