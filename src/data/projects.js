import mrPrice from '@/assets/images/projects/mrprice.webp';
import alOwaydan from '@/assets/images/projects/al-owaydan.webp';

export const projectsIntro = {
  badge: 'Our Work',
  title: 'Software in action.',
  description:
    'Explore selected projects that reflect our experience across industries, technologies and business needs.',
};

/**
 * Featured projects. Images are screenshots of the live project websites.
 * `image: null` renders a neutral panel until an approved screenshot is supplied.
 * `url: null` means there is no approved public link yet.
 */
export const projects = [
  {
    client: 'Mr Price',
    category: 'B2B Commerce · Mobile Applications',
    title: 'B2B Commerce Platform & Mobile App',
    summary: 'A connected wholesale commerce platform serving more than 1,000 pharmacies.',
    image: mrPrice,
    imageAlt: 'Mr Price website homepage showing the B2B marketplace and mobile app',
    url: 'https://www.mrprice.app/welcome',
  },
  {
    client: 'Alketab Academy',
    category: 'Education · Business Systems',
    title: 'Digital Learning Ecosystem',
    summary: 'An education and management ecosystem serving more than 30,000 students.',
    image: null, // Missing: approved screenshot
    imageAlt: '',
    url: null, // Missing: approved project URL
  },
  {
    client: 'Al-Owaydan',
    category: 'Corporate Website · Saudi Arabia',
    title: 'Corporate Digital Experience',
    summary: 'A bilingual corporate website for a Saudi workforce solutions provider.',
    image: alOwaydan,
    imageAlt: 'Al-Owaydan corporate website homepage',
    url: 'https://ealowedan.com/',
  },
];
