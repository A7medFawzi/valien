import { site } from '@/config/site';

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

/**
 * Sends a contact-form submission.
 *
 * - If VITE_CONTACT_ENDPOINT is set (Formspree, Web3Forms, your own API, ...),
 *   the fields are POSTed there as JSON.
 * - Otherwise the visitor's email client opens with the message pre-filled,
 *   so no message is ever silently lost.
 *
 * Resolves to "sent" or "mailto"; throws if the endpoint rejects the request.
 */
export async function submitContact({ name, email, subject, message }) {
  if (endpoint) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, email, subject, message }),
    });
    if (!res.ok) throw new Error(`Contact endpoint responded with ${res.status}`);
    return 'sent';
  }

  const body = `${message}\n\n— ${name} (${email})`;
  const href = `mailto:${site.email}?subject=${encodeURIComponent(subject || 'New enquiry')}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
  return 'mailto';
}
