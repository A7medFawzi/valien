/**
 * Site-wide settings: brand, contact details, navigation and social links.
 * Edit this file to change details shown in the navbar, footer and contact page.
 */
export const site = {
  name: 'Valien',
  tagline: 'AI Automation Agency',
  email: 'hello@valien.ai',
  // TODO: replace with the real phone number
  phone: '+1234567890',
  // TODO: replace with the real booking link (Cal.com, Calendly, ...)
  bookingUrl: '/contact',
  jobsUrl: 'https://www.linkedin.com/jobs/',
};

/** Links in the top navigation. `to` values starting with "/#" scroll to a home-page section. */
export const navLinks = [
  { label: 'Services', to: '/#services' },
  { label: 'Reviews', to: '/#reviews' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact Us', to: '/contact' },
];

export const footerLinks = [
  { label: 'Product', to: '/#services' },
  { label: 'Integrations', to: '/#integrations' },
  { label: 'Success Stories', to: '/#process' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Careers', to: '/#careers' },
];

/** TODO: replace with the real profile URLs. */
export const socialLinks = [
  { label: 'X', icon: 'x', href: 'https://x.com/' },
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/' },
  { label: 'Dribbble', icon: 'dribbble', href: 'https://dribbble.com/' },
];
