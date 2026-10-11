# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## GitHub Pages deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which installs locked dependencies, runs lint and build, then publishes `dist` to the `gh-pages` branch. Configure GitHub Pages to deploy from that branch's root directory.

The current base path and sitemap target `https://lilwoodsgh.github.io/access-homecare-ghana-new/`. Update `vite.config.js`, `index.html`, `public/robots.txt`, and `public/sitemap.xml` together if the repository or production domain changes.

Verified contact details are centralized in `src/config.js` and documented in `.env.example`. Local `.env` values are not available to GitHub Actions; configure `VITE_PHONE_NUMBER`, `VITE_WHATSAPP_NUMBER`, `VITE_CONTACT_EMAIL`, and `VITE_LOCATION` as repository Actions variables for the published build. The forms open the visitor's email app using the configured email. A form/CRM service is required for direct submission.

## Final launch checklist

1. Replace the logo and any team, testimonial, news, and service-area placeholders with approved information.
2. Update sitemap and robots URLs when using a custom domain.
3. Run `npm ci`, `npm run lint`, and `npm run build`.
4. Test nested routes, direct refreshes, the 404 page, and mobile navigation on the deployed host.
