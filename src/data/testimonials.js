import ryan from '@/assets/images/testimonials/ryan-harper.webp';
import mia from '@/assets/images/testimonials/mia-emirt.webp';
import emily from '@/assets/images/testimonials/emily-johnson.webp';
import sophia from '@/assets/images/testimonials/sophia-martin.webp';
import reviewer1 from '@/assets/images/testimonials/reviewer-1.webp';
import reviewer2 from '@/assets/images/testimonials/reviewer-2.webp';
import reviewer3 from '@/assets/images/testimonials/reviewer-3.webp';
import reviewer4 from '@/assets/images/testimonials/reviewer-4.webp';

export const testimonialsIntro = {
  badge: 'Customers',
  title: 'Our customers love us',
  description:
    'Real feedback from teams and individuals who rely on our platform to power their business with real working analytics',
  // TODO: placeholder number
  reviewCount: '15,725',
  reviewerAvatars: [reviewer1, reviewer2, reviewer3, reviewer4],
};

/** TODO: placeholder testimonials – replace with real client quotes. */
export const testimonials = [
  {
    name: 'Ryan Harper',
    company: 'Harper Education',
    avatar: ryan,
    source: 'x',
    quote:
      'Working with this AI agency has been a game-changer for our team. Their smart solutions and actionable insights help us make better decisions every day.',
  },
  {
    name: 'Mia Emirt',
    company: 'Emirt Agency',
    avatar: mia,
    source: 'instagram',
    quote:
      'The perfect partner for AI-driven innovation. They simplified our workflows and gave our marketing team the tools to achieve more with less effort.',
  },
  {
    name: 'Emily Johnson',
    company: 'Johnson Marketing',
    avatar: emily,
    source: 'facebook',
    quote:
      'We’ve seen measurable growth since using their AI solutions. It’s intuitive, fast, and integrates seamlessly with our existing workflows.',
  },
  {
    name: 'Sophia Martin',
    company: 'Martin Agency',
    avatar: sophia,
    source: 'linkedin',
    quote:
      'Finally, AI services designed with users in mind. Everything we need is here: smart automation, insights, and amazing support. Highly recommend!',
  },
];
