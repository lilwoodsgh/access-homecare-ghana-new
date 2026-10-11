import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { hasPhone, hasWhatsApp, siteConfig } from '../config';
import './ContactActions.css';

function ContactActions() {
  return (
    <>
      <div className="floating-care-actions" aria-label="Care contact options">
        {hasWhatsApp && (
          <a className="floating-action whatsapp" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        )}
        {hasPhone && (
          <a className="floating-action call" href={`tel:${siteConfig.phoneHref}`}>
            <Phone size={18} />
            <span>Call</span>
          </a>
        )}
        {!hasWhatsApp && !hasPhone && (
          <Link className="floating-action consultation" to="/contact">
            <ArrowRight size={18} />
            <span>Care enquiry</span>
          </Link>
        )}
      </div>

      <div className="mobile-care-bar" aria-label="Mobile care actions">
        <Link to="/contact" className="mobile-care-primary">Book a consultation</Link>
        {hasWhatsApp ? (
          <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="mobile-care-secondary">
            <MessageCircle size={18} /> WhatsApp
          </a>
        ) : hasPhone ? (
          <a href={`tel:${siteConfig.phoneHref}`} className="mobile-care-secondary">
            <Phone size={18} /> Call
          </a>
        ) : (
          <Link to="/contact" className="mobile-care-secondary">Contact us</Link>
        )}
      </div>
    </>
  );
}

export default ContactActions;
