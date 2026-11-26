export const servicesIntro = {
  badge: 'Our Services',
  title: 'What we build.',
  description:
    'Software solutions designed around your business requirements, customers and everyday operations.',
};

export const services = {
  web: {
    icon: 'browser',
    title: 'Web Development',
    text: 'Websites and web platforms designed to connect your business with its customers.',
    concepts: [
      'Responsive websites',
      'Corporate platforms',
      'Web applications',
      'Customer portals',
    ],
  },
  mobile: {
    icon: 'mobile',
    title: 'Mobile App Development',
    text: 'Mobile applications built around your users and business needs.',
    concepts: ['iOS', 'Android', 'Mobile interfaces', 'Cross-platform apps'],
  },
  systems: {
    title: 'Business Systems',
    text: 'Custom software that brings your operations, teams and business data together.',
    label: 'Business Software',
    nodes: [
      { icon: 'erp', label: 'ERP' },
      { icon: 'crm', label: 'CRM' },
      { icon: 'inventory', label: 'Inventory' },
      { icon: 'dashboard', label: 'Dashboards' },
    ],
  },
  saas: {
    title: 'SaaS & Product Development',
    text: 'From early-stage ideas to scalable software products, built for real users.',
    fileName: 'workspaces.js',
  },
  commerce: {
    title: 'E-commerce Solutions',
    text: 'Digital commerce platforms built around the way your business sells.',
    header: 'Orders & Products',
    products: ['Product management', 'Order management'],
    search: 'Search products',
    action: 'Order',
  },
  keywords: [
    { icon: 'code', label: 'Custom Software' },
    { icon: 'browser', label: 'Web Platforms' },
    { icon: 'mobile', label: 'Mobile Apps' },
    { icon: 'dashboard', label: 'Business Systems' },
    { icon: 'cart', label: 'E-commerce' },
    { icon: 'stack', label: 'SaaS Products' },
    { icon: 'design', label: 'UI/UX Design' },
    { icon: 'api', label: 'API Integration' },
  ],
};

/**
 * Example code in the SaaS card: creating a workspace for a new tenant in a
 * multi-tenant application. Generic, valid JavaScript – no client code or secrets.
 */
export const sampleCode = `export async function createWorkspace(db, owner, plan) {
  const workspace = await db.workspaces.insert({
    name: \`\${owner.company} workspace\`,
    ownerId: owner.id,
    plan,
  });

  await db.members.insert({
    workspaceId: workspace.id,
    userId: owner.id,
    role: 'admin',
  });

  return workspace;
}`;
