export const integrations = {
  badge: 'System Integrations',
  title: 'Connected by design.',
  description:
    'We connect software with the tools your business already uses, from payment gateways and accounting platforms to third-party services and APIs.',
  caption: 'Your software should work with your business, not in isolation.',
  cta: { label: 'Discuss Your Integrations', to: '/contact' },
  // Generic category icons only – no third-party brand logos (no verified integrations listed).
  columns: [
    [
      { icon: 'payments', label: 'Payment Gateways' },
      { icon: 'shipping', label: 'Shipping Services' },
      { icon: 'accounting', label: 'Accounting Platforms' },
    ],
    [
      { icon: 'database', label: 'Databases' },
      { icon: 'cloud', label: 'Cloud Infrastructure' },
      { icon: 'api', label: 'APIs' },
    ],
    [
      { icon: 'messaging', label: 'Messaging Services' },
      { icon: 'crm', label: 'CRM Systems' },
      { icon: 'erp', label: 'ERP Systems' },
    ],
  ],
};
