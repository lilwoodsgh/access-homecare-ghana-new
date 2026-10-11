import { ArrowRight, Phone } from 'lucide-react';
import { hasPhone, siteConfig } from '../config';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">COMPASSION. DIGNITY. TRUST.</p>
          <h1 id="hero-title">Exceptional care, <span>right at home.</span></h1>
          <p className="hero-description">
            Personalised home care that helps individuals live safely, comfortably and independently—with support built around the person, not just the need.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="hero-primary-button">Book a Care Consultation <ArrowRight size={17} /></Link>
            {hasPhone ? (
              <a href={`tel:${siteConfig.phoneHref}`} className="hero-secondary-button"><Phone size={17} /> Talk to Our Care Team</a>
            ) : (
              <Link to="/contact" className="hero-secondary-button"><Phone size={17} /> Talk to Our Care Team</Link>
            )}
          </div>
          <div className="hero-trust-note"><span /> Trusted, compassionate support for families across Ghana.</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
