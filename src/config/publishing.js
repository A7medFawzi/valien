/**
 * Publishing gate for content that is not yet approved for the live site.
 *
 * Items marked `pending` in src/data are rendered (with a "Pending" marker) on local
 * development and Vercel preview deployments so they can be reviewed, and are hidden
 * on the production deployment.
 *
 * VITE_SITE_ENV is injected by vite.config.js from Vercel's VERCEL_ENV
 * ("production" | "preview" | "development"); it is "development" locally.
 */
export const siteEnv = import.meta.env.VITE_SITE_ENV || 'development';
export const isProduction = siteEnv === 'production';
export const showPending = !isProduction;

/** Keeps items that are approved, plus pending items outside production. */
export const publishable = (items) => items.filter((item) => !item.pending || showPending);
