# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Stage 5 contact configuration
Verified contact details are centralized in `src/config.js` and can be supplied with `.env` variables documented in `.env.example`. Do not replace the empty defaults with invented company details.

## Stage 7 — Final QA / launch checklist

Before publishing:
1. Copy `.env.example` to `.env` and enter the verified company phone, WhatsApp, email, location and production site URL.
2. Replace `public/images/logo.png` with the approved final logo if needed.
3. Replace team, testimonial, news and service-area placeholders with verified company information.
4. Update `public/sitemap.xml` and `public/robots.txt` with the final production domain.
5. Connect the Contact page form to the chosen email/CRM/form endpoint.
6. Install dependencies with `npm ci`, then run `npm run lint` and `npm run build`.
7. Test every route directly on the deployed host, including the 404 page and mobile navigation.

## Stage 7 — Final QA / launch checklist

Before publishing:
1. Copy `.env.example` to `.env` and enter the verified company phone, WhatsApp, email, location and production site URL.
2. Replace `public/images/logo.png` with the approved final logo if needed.
3. Replace team, testimonial, news and service-area placeholders with verified company information.
4. Update `public/sitemap.xml` and `public/robots.txt` with the final production domain.
5. Connect the Contact page form to the chosen email/CRM/form endpoint.
6. Install dependencies with `npm ci`, then run `npm run lint` and `npm run build`.
7. Test every route directly on the deployed host, including the 404 page and mobile navigation.
