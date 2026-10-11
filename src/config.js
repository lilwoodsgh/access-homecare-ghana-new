// Replace these empty values with Access Home Care's verified details before launch.
// They can also be supplied through Vite environment variables (see .env.example).
const env = import.meta.env;

const cleanPhone = (value = '') => value.replace(/[^0-9+]/g, '');
const whatsappNumber = (env.VITE_WHATSAPP_NUMBER || '').replace(/[^0-9]/g, '');

export const siteConfig = {
  name: 'Access Home Care Ghana',
  tagline: 'Compassion. Dignity. Trust.',
  phone: env.VITE_PHONE_NUMBER || '',
  phoneHref: cleanPhone(env.VITE_PHONE_NUMBER || ''),
  whatsappNumber,
  whatsappHref: whatsappNumber ? `https://wa.me/${whatsappNumber}` : '',
  email: env.VITE_CONTACT_EMAIL || '',
  location: env.VITE_LOCATION || 'Accra, Ghana',
};

export const hasPhone = Boolean(siteConfig.phoneHref);
export const hasWhatsApp = Boolean(siteConfig.whatsappHref);
export const hasEmail = Boolean(siteConfig.email);
