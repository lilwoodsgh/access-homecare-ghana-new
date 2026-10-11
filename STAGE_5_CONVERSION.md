# Stage 5 — Conversion & Ghana-ready contact layer

## Completed
- Added a single `src/config.js` source of truth for verified phone, WhatsApp, email and location details.
- Added `.env.example` for production contact values.
- Added responsive floating contact actions on desktop.
- Added a persistent mobile consultation/contact bar.
- Removed the fake `+233000000000` phone number from the hero.
- Added conditional phone/WhatsApp/email actions so unverified details are never presented as real.
- Updated the navbar and footer to use the central contact configuration.
- Improved the contact page to use real clickable actions once verified details are supplied.
- Preserved the front-end enquiry form without pretending that submissions are delivered until a backend/email/CRM endpoint is connected.
- Removed remaining obvious placeholder contact data from source files.

## Before launch
Copy `.env.example` to `.env` and provide:
- `VITE_PHONE_NUMBER`
- `VITE_WHATSAPP_NUMBER` (digits only, including Ghana country code 233)
- `VITE_CONTACT_EMAIL`
- `VITE_LOCATION`

Then connect the Contact form to the company's chosen email, CRM, Formspree/Formspark-style service, or custom API endpoint.

## Build verification
A dependency installation was attempted with `npm ci --ignore-scripts --no-audit --no-fund`, but the environment timed out before dependencies were installed. Therefore no successful Vite production build is claimed in this stage.
