/**
 * Navigation content. Links with `to: null` have no destination yet and are not rendered
 * (they are listed here so they are easy to enable once the page exists).
 */
export const mainNav = [
  { label: 'Services', to: '/#services' },
  { label: 'Our Work', to: '/#projects' },
  { label: 'Products', to: '/#products' },
  { label: 'About', to: null }, // Pending: no About page or section yet.
];

export const primaryCta = { label: "Let's Talk", to: '/contact' };

export const footerCompanyLinks = [
  { label: 'About Valien', to: null }, // Pending: About page
  { label: 'Our Work', to: '/#projects' },
  { label: 'Our Products', to: '/#products' },
  { label: 'Contact', to: '/contact' },
  { label: 'Client Portal', to: null }, // Pending: portal URL
];

export const legalLinks = [
  { label: 'Privacy Policy', to: null }, // Pending page
  { label: 'Terms & Conditions', to: null }, // Pending page
  { label: 'Cookie Settings', to: null }, // Pending functionality
];

export const withDestination = (links) => links.filter((link) => link.to);
