# Valien – AI Automation Agency website

Marketing site for Valien, built with **React 18 + Vite 6** and plain **CSS Modules**.
Hosted on **Vercel**: every push to `main` goes live, and every pull request gets a preview URL.

## Quick start

Requires Node.js 20.11+.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command                | What it does                         |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the dev server with hot reload |
| `npm run build`        | Production build into `dist/`        |
| `npm run preview`      | Serve the production build locally   |
| `npm run lint`         | ESLint (also runs in CI on every PR) |
| `npm run format`       | Format everything with Prettier      |
| `npm run format:check` | Check formatting without writing     |

## Project structure

```
src/
├── main.jsx                 # Entry point – mounts <App/> and global CSS
├── App.jsx                  # Routes: / , /contact , * (404)
├── config/
│   └── site.js              # Brand name, email, phone, nav/footer/social links
├── data/                    # ALL page copy lives here (one file per section)
├── pages/                   # HomePage, ContactPage, NotFoundPage
├── sections/home/           # One folder per home-page section (JSX + CSS Module)
├── components/
│   ├── layout/              # Navbar, Footer, Layout, ScrollManager
│   └── ui/                  # Button, Card, Badge, SectionHeading, Marquee, Reveal, Icon…
├── hooks/                   # useInView, useCountUp, useInterval, usePageTitle
├── lib/
│   └── contact.js           # Contact-form submission logic
├── styles/
│   ├── tokens.css           # Design tokens: colors, fonts, spacing, radii, shadows
│   ├── fonts.css            # Font loading
│   └── global.css           # Reset + base styles + .container / .section helpers
└── assets/                  # Images, fonts, video (imported → hashed & optimized by Vite)
public/                      # Copied as-is: favicon, apple-touch-icon, og-image
```

`@/` is an alias for `src/` (e.g. `import Button from '@/components/ui/Button'`).

## Common tasks

**Change text, prices, FAQs, testimonials, jobs…** – edit the matching file in `src/data/`.
No component code needs to change.

**Change email / phone / social links / booking link** – `src/config/site.js`.

**Add, remove or reorder home-page sections** – `src/pages/HomePage.jsx`.

**Change colors, fonts, spacing** – `src/styles/tokens.css`. Components only use these variables.

**Add an icon** – icons come from [Phosphor](https://phosphoricons.com). Register a short name
in `src/components/ui/Icon.jsx`, then use that name in data files (`icon: 'rocket'`).

**Add a page** – create it in `src/pages/` and add a `<Route>` in `src/App.jsx`.

## Contact form

`src/lib/contact.js` sends the form:

- If `VITE_CONTACT_ENDPOINT` is set, the form POSTs JSON (`name`, `email`, `subject`, `message`)
  to that URL – e.g. a [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com)
  endpoint, or your own API.
- If it is not set, the visitor's email client opens with the message pre-filled.

Locally: copy `.env.example` to `.env.local`. For the live site, add `VITE_CONTACT_ENDPOINT` in
**Vercel → Project → Settings → Environment Variables**, then redeploy.

## Deployment

Vercel builds the site itself (`npm run build` → `dist/`) using `vercel.json`:

- Pushes to `main` deploy to production; pull requests get their own preview deployment.
- All routes are rewritten to `index.html`, so deep links like `/contact` work on refresh.
- Hashed files in `/assets/` are cached for a year.

`.github/workflows/ci.yml` runs lint, format check and a build on every pull request,
so broken code is caught before it reaches Vercel.

## Content still to replace

Placeholder content from the original template is marked with `TODO` comments
(`grep -rn TODO src`). Before launch, replace:

- Phone number and booking link – `src/config/site.js`
- Social profile URLs – `src/config/site.js`, `src/data/community.js`
- Client logos – `src/data/hero.js`
- Case studies (incl. the "ElevenLabs" entry) – `src/data/projects.js`
- Testimonials and review count – `src/data/testimonials.js`
- Stats (10k+ users, 250k+ hours, 4.8 rating) – `src/data/process.js`
- FAQ answers (several are written for a SaaS product, not an agency) – `src/data/faq.js`
- 2% donation claim – `src/data/pricing.js`, `src/data/faq.js`
- Job openings – `src/data/careers.js`
