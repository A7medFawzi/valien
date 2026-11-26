export const processSection = {
  badge: 'Our Process',
  title: 'From idea to working software.',
  description: 'A clear development process, built around your requirements and business goals.',
  steps: [
    {
      icon: 'plan',
      title: 'Understand & Plan',
      text: 'We understand your business, define your requirements and establish a clear project scope.',
    },
    {
      icon: 'code',
      title: 'Design & Develop',
      text: 'We design, build and test your software, keeping you involved throughout development.',
    },
    {
      icon: 'rocket',
      title: 'Launch & Support',
      text: 'We launch your solution and provide the agreed support as your business evolves.',
    },
  ],
  stats: [
    // Pending: final project attribution approval.
    { value: 25, suffix: '+', label: 'Portfolio Projects', pending: true },
    // Supplied by the business owner.
    { value: 1000, suffix: '+', label: 'Pharmacies on Mr Price' },
    { value: 30000, suffix: '+', label: 'Students on Alketab' },
  ],
};
