export const beyond = {
  title: 'Beyond development.',
  description:
    'The design, infrastructure and ongoing support that complete your digital experience.',
  cloud: {
    title: 'Cloud, Integration & Support',
    text: 'Keep your software connected, maintained and ready for what comes next.',
    // Status board in the card: rows animate between two activity levels (no metrics).
    rows: [
      { icon: 'cloud', label: 'Cloud infrastructure' },
      { icon: 'api', label: 'API connections' },
      { icon: 'monitor', label: 'System monitoring' },
    ],
    states: ['Monitoring', 'Maintained'],
  },
  design: {
    title: 'Branding & Digital Design',
    text: 'Distinctive visual identities and digital experiences designed with purpose.',
    // Visual identity, typography, colour systems, UI/UX and design systems.
    icons: [
      ['pen', 'typography', 'palette', 'swatches', 'brush'],
      ['layout', 'designSystem', 'pen', 'typography', 'palette'],
    ],
  },
  actions: [
    { label: 'Discuss Your Project', to: '/contact', icon: true },
    { label: 'View Our Work', to: '/#projects' },
  ],
};
