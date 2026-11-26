/**
 * Company and contact information. Keep all business facts here so the
 * Arabic version can reuse the same data in a later phase.
 *
 * Anything marked `pending: true` is hidden on production (see config/publishing.js).
 */
export const company = {
  name: 'Valien',
  descriptor: 'Software Solutions',
  statement: 'Software built around your business.',
  markets: ['Egypt', 'Saudi Arabia'],
};

export const contact = {
  // TODO: verify this mailbox before production launch.
  email: { value: 'info@valien.tech', pending: true },
  // No approved phone number yet – intentionally omitted.
};

/** Approved social profiles only. None are approved yet, so the social rows are hidden. */
export const socialLinks = [];

/** EVEXA – the independently operated AI-specialised company sharing Valien's vision. */
export const evexa = {
  heading: 'Two Specialties. One Vision.',
  description: 'Explore EVEXA, our AI-specialised company.',
  cta: 'Discover EVEXA',
  url: 'https://evexa.tech/en',
};

/** Seven service areas, used by the footer and the contact form. */
export const serviceAreas = [
  'Business Systems',
  'Web Development',
  'Mobile App Development',
  'E-commerce Solutions',
  'SaaS & Product Development',
  'Branding & Digital Design',
  'Cloud, Integration & Support',
];
