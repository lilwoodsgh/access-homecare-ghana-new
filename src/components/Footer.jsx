import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { hasEmail, hasPhone, hasWhatsApp, siteConfig } from '../config';

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-container">

          <div className="footer-brand">

            <img
              src="/access-homecare-ghana-new/images/logo.png"
              alt="Access Home Care Ghana"
              className="footer-logo"
            />

            <p>
              Compassionate and dependable home care designed
              to help individuals live safely, comfortably and
              independently at home.
            </p>

            <div className="footer-socials">
              <Link to="/contact" aria-label="Contact Access Home Care">Contact our care team</Link>
            </div>

          </div>

          <div className="footer-column">

            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/news">News</Link>

          </div>

          <div className="footer-column">

            <h3>Services</h3>

            <Link to="/services">24 Hour Care</Link>
            <Link to="/services">Personal Care</Link>
            <Link to="/services">Senior Home Care</Link>
            <Link to="/services">Private Duty Nursing</Link>
            <Link to="/services">Specialty Care</Link>

          </div>

          <div className="footer-column footer-contact">

            <h3>Contact Us</h3>

            <div className="footer-contact-item"><MapPin size={17} /><span>{siteConfig.location}</span></div>
            {hasPhone && <div className="footer-contact-item"><Phone size={17} /><a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a></div>}
            {hasWhatsApp && <div className="footer-contact-item"><MessageCircle size={17} /><a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a></div>}
            {hasEmail && <div className="footer-contact-item"><Mail size={17} /><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>}
            {!hasPhone && !hasWhatsApp && !hasEmail && <div className="footer-contact-item"><span>Official phone, WhatsApp and email details will be added before launch.</span></div>}

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} Access Home Care Ghana.
            All rights reserved.
          </p>

          <div>
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;