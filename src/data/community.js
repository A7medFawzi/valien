import discordLogo from '@/assets/images/community/discord.svg';

export const community = {
  badge: 'Community',
  title: 'Check our community',
  description:
    'Participate in our Discord group to network with other individuals. Here, you’re invited to inquire, discuss, and open support requests.',
  // TODO: replace links and numbers with real ones
  channels: [
    {
      name: 'Discord',
      logo: discordLogo,
      text: 'Join our Discord and connect with social media creators, enthusiasts, share ideas, and grow together.',
      tags: ['15k members', 'Community'],
      href: 'https://discord.com/',
    },
    {
      name: 'X (Twitter)',
      icon: 'x',
      text: 'Follow us on X, where we share our updates and lots of guides and tips from people who already excelled.',
      tags: ['25k followers', 'Community'],
      href: 'https://x.com/',
    },
  ],
};

export const finalCta = {
  title: 'What are you waiting for?',
  description:
    'Ready to unlock the full potential of AI for your business? Let’s build intelligent solutions that save time, cut costs, and accelerate growth.',
  perks: [
    { icon: 'money', label: '100% safe payment' },
    { icon: 'users', label: '10k+ people trust us' },
  ],
  cta: 'Book A Free Call Now',
};
