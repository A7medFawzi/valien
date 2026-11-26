export const pricingIntro = {
  badge: 'Pricing',
  title: 'Pricing plans',
  description:
    'Our charges are straightforward and equitable, devoid of hidden fees, upgrading to an enhanced plan is always feasible.',
  yearlyDiscount: '30% off',
  // TODO: confirm this commitment before launch
  footnote: 'We donate 2% of your membership to pediatric wellbeing',
};

/** Prices are per month; `yearly` is the per-month price when billed yearly. */
export const plans = [
  {
    name: 'Starter',
    monthly: 750,
    yearly: 700,
    cta: 'Get Started',
    includesLabel: 'Starter plan includes',
    features: [
      'Basic AI tools usage',
      'Limited automation features',
      'Real-time reporting',
      'Basic chatbot integration',
    ],
  },
  {
    name: 'Pro',
    monthly: 1700,
    yearly: 1500,
    popular: true,
    cta: 'Get Started',
    includesLabel: 'Everything in Starter, plus',
    features: [
      'Integrations with 3rd-party tools',
      'Advanced analytics',
      'Premium chatbot features',
      'Cross-platform integrations',
    ],
  },
  {
    name: 'Enterprise',
    monthly: 4700,
    yearly: 3600,
    cta: 'Get Started',
    includesLabel: 'Everything in Pro, plus',
    features: [
      'Dedicated growth manager',
      'Custom reports & dashboards',
      'Fully customized AI solutions',
      'Scalable AI solutions',
    ],
  },
];
