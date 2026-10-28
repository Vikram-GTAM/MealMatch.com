# Meal Match

Marketing website for **Meal Match**, a personalised meal-plan service in Hyderabad, India.
Live site: <https://www.mealmatch.in/>

Visitors can browse the menu, work out a calorie target with the Meal Match Engine
(BMI, BMR and daily calories), and request a meal plan through a sign-up popup.

## Tech stack

- React 19 with Create React App (`react-scripts` 5)
- React Router 6 (single route, `/`)
- `react-icons`
- Plain CSS, one stylesheet per component
- Jest and React Testing Library
- Hosted on Vercel

## Getting started

Requires Node.js 18 or newer and npm.

```bash
npm install
npm start          # dev server at http://localhost:3000
npm test           # run tests in watch mode
npm run build      # production build in /build
```

## Project structure

```
public/
  index.html            Meta tags, canonical URL, Open Graph, JSON-LD
  robots.txt            Crawl rules and sitemap location
  sitemap.xml           Indexable URLs (homepage only)
  manifest.json         Web app manifest
  logo/                 Logos and icon (also used for social previews)
  images/
    menu/               salads/  wraps/  toasts/  smoothies/  (WebP)
    backgrounds/        hero-background.jpg
    _unused/            Images not referenced anywhere
src/
  index.js              App entry (BrowserRouter)
  App.js                Routes; unknown URLs redirect to /
  pages/
    Home/               Assembles the full homepage
    MealMatchPlans/     Subscription plans + Meal Match Engine
  components/
    layout/             Navbar, Footer
    home/               Hero, HowYourMatchWorks, WhyMatch, PersonalisationSection,
                        NutritionTransparency, GoalBasedPlans, TrustSection,
                        FaqSection, CtaBanner
    menu/               SmoothiesSection, SaladsSection, ToastSandwichesSection,
                        WrapsSection, HighProteinSalads (currently unused)
    engine/             MealMatchEngine (calculator and meal matching),
                        MealMatchPopup (lead form), MealMatchEnginePage (currently unused)
vercel.json             Redirects, rewrites, cache and security headers
SEO.md                  SEO plan and work completed
```

Each component lives in its own folder as `index.js` and `index.css`.

## How it works

- **Homepage** (`src/pages/Home`): sections render in order and are reached through
  in-page anchors (`#how-it-works`, `#menu`, `#meal-match-plans`, `#why-match`, `#faq`).
- **Meal Match Engine**: takes age, gender, height, weight, activity level and goal.
  It calculates BMI and BMR (Mifflin-St Jeor), sets a daily calorie target, and matches
  meals to it. The BMI result is general guidance, not medical advice.
- **Lead form** (`MealMatchPopup`): posts name, contact, email and chosen plan to a
  Google Apps Script web app, which writes to a Google Sheet. The URL is the
  `GOOGLE_SCRIPT_URL` constant in `src/components/engine/MealMatchPopup/index.js`.
  The request uses `no-cors`, so the browser cannot read the response.

## Adding or changing content

- **Menu items**: edit the data arrays at the top of the matching file in
  `src/components/menu/`, and the meal list in `MealMatchEngine`.
- **Menu images**: add a WebP (about 900 px wide, under 200 KB) to the matching folder in
  `public/images/menu/` and reference it as `/images/menu/<category>/<file>.webp`.
- **FAQs**: edit `faqData` in `src/components/home/FaqSection/index.js`. The FAQ
  structured data is generated from it automatically.
- **New indexable page**: add a route in `src/App.js`, then add the URL to
  `public/sitemap.xml` with a canonical tag.

## Deployment

The site deploys to Vercel as a Create React App project (build command `npm run build`,
output directory `build`). `vercel.json` handles:

- `mealmatch.in` redirecting permanently to `https://www.mealmatch.in/`
- The legacy WordPress URL `/2025/03/18/hello-world` redirecting to the homepage
- `/favicon.ico` rewriting to the logo icon
- Long cache headers for `/static`, `/images` and `/logo`, plus basic security headers

HTTP to HTTPS redirection is handled by Vercel.

## SEO

See [SEO.md](SEO.md) for keyword targets, completed work and off-site recommendations.
After each deploy that changes the homepage, check Google Search Console for indexing
and redirect reports.
