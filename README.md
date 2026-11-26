# Valien – Software Solutions website

Marketing site for Valien, a software engineering and digital design company. Built with **React 18 + Vite 6** and plain **CSS Modules**.
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
│   ├── site.js              # Company info, contact, social links, EVEXA, service areas
│   ├── navigation.js        # Main nav, CTA, footer and legal links
│   └── publishing.js        # Hides "pending" content on production (see below)
├── data/                    # ALL page copy lives here (one file per section)
├── pages/                   # HomePage, ContactPage, NotFoundPage
├── sections/home/           # One folder per home-page section (JSX + CSS Module)
├── components/
│   ├── layout/              # Navbar, Footer, Layout, ScrollManager
│   └── ui/                  # Button, Card, Badge, SectionHeading, Marquee, Icon, PendingTag…
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

**Change text, projects, products, FAQs…** – edit the matching file in `src/data/`.
No component code needs to change.

**Change company info, email, social links** – `src/config/site.js`. Navigation – `src/config/navigation.js`.

**Add, remove or reorder home-page sections** – `src/pages/HomePage.jsx`.

**Change colors, fonts, spacing** – `src/styles/tokens.css`. Components only use these variables.
The layout follows the original template with the Valien palette (black, mint, bright gray);
see `docs/brand.md` for the color mapping and logo usage.

**Add an icon** – icons come from [Phosphor](https://phosphoricons.com). Register a short name
in `src/components/ui/icons.jsx`, then use that name in data files (`icon: 'rocket'`).

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

## Pending content (preview vs production)

Items marked `pending: true` in `src/config` / `src/data` are shown with a yellow
"Pending" tag on local and Vercel **preview** deployments, and hidden on **production**
(controlled by Vercel's `VERCEL_ENV`, see `src/config/publishing.js`). To publish an item,
remove its `pending` flag once it is approved.

Currently pending or missing:

- **Portfolio Projects (25+)** stat – awaiting project attribution approval (`src/data/process.js`)
- **Client logos** – Mr Price and Al-Owaydan logos are pending permission; no original logo files
  yet for Alketab Academy, REEFIYA, Zirconia Lab, Multiforms, Eiffel Stores, Sama Riyadh,
  X-Fire Safety (`src/data/clients.js`)
- **Alketab Academy** project – no approved screenshot or URL (`src/data/projects.js`)
- **Shopit** – name and features need confirmation; Scanly/Shopit have no public URL or logo
  (`src/data/products.js`)
- **info@valien.tech** – unverified (`src/config/site.js`)
- **About page, Client Portal, Privacy Policy, Terms, Cookie Settings** – not built; links hidden
  (`src/config/navigation.js`)
- **Social profiles** – none approved; social rows hidden
- **Testimonials** – section hidden until real quotes are added (`src/data/testimonials.js`)

Search engines: `vercel.json` sends `X-Robots-Tag: noindex` on every host except `valien.tech`
and `www.valien.tech`, so preview URLs (including `valien.vercel.app`) are not indexed.
