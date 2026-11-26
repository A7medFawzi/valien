import sugarformsLogo from '@/assets/images/products/sugarforms-logo.svg';

export const productsIntro = {
  badge: 'Built by Valien',
  title: 'Real needs. Practical products.',
  description:
    'Beyond client projects, we develop our own software products to solve everyday business challenges.',
  cta: 'Explore Product',
};

/**
 * Valien's own products. Product names are configurable here
 * (e.g. Scanly may launch as DIYAVO). `url: null` hides the outbound button;
 * `featuresPending: true` hides the feature list on production until confirmed.
 */
export const products = [
  {
    name: 'Scanly', // May be renamed to DIYAVO before launch.
    category: 'Hospitality Technology',
    description: 'A digital guest experience for restaurants and cafés.',
    features: ['Digital menus', 'QR-based experiences', 'Menu management', 'Digital ordering'],
    logo: null, // Missing: original product logo
    url: null, // Missing: approved public URL
  },
  {
    name: 'Shopit', // Name requires confirmation.
    category: 'Commerce Technology',
    description: 'A simpler way to launch and manage an online store.',
    features: [
      'Online storefronts',
      'Product management',
      'Store customisation',
      'Order management',
    ],
    featuresPending: true, // Features require confirmation against the current product.
    logo: null,
    url: null,
  },
  {
    name: 'Sugarforms',
    category: 'Developer Tools',
    description: 'Build forms visually. Work with code.',
    features: ['Visual form builder', 'Form customisation', 'Code export', 'Form management'],
    logo: sugarformsLogo,
    url: 'https://sugarforms.com/',
  },
];
