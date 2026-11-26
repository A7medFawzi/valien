import salesWorkflow from '@/assets/images/projects/sales-workflow.webp';
import healthcareIntake from '@/assets/images/projects/healthcare-intake.webp';
import productTagging from '@/assets/images/projects/product-tagging.webp';

export const projectsIntro = {
  badge: 'Projects',
  title: 'Our Latest Projects',
  description:
    'See how we turn bold ideas into automated AI solutions carefully crafted to optimize, scale, and deliver measurable results.',
};

/** TODO: placeholder case studies – replace with real projects and links. */
export const projects = [
  {
    client: 'ElevenLabs',
    year: 2025,
    title: 'Sales Workflow Optimization',
    summary:
      'We automated lead follow-ups and CRM tasks, reducing manual work by 70% and boosting qualified lead conversion rates.',
    image: salesWorkflow,
    href: 'https://www.behance.net/',
  },
  {
    client: 'MedAssist AI',
    year: 2024,
    title: 'Healthcare Intake Automation',
    summary:
      'Built an intake automation system that cut admin time by 55% and improved patient onboarding efficiency by 38% across all clinics.',
    image: healthcareIntake,
    href: 'https://www.behance.net/',
  },
  {
    client: 'AutoTag Pro',
    year: 2023,
    title: 'E-commerce Product Tagging',
    summary:
      'Created an AI tool that auto-tagged 10K+ SKUs with 92% accuracy, cutting tagging time by 80% and boosting product discoverability by 30%.',
    image: productTagging,
    href: 'https://www.behance.net/',
  },
];
