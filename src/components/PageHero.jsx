import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './PageHero.css';

function PageHero({ eyebrow, title, description, image = '/access-homecare-ghana/images/care-cta.jpg' }) {
  return (
    <section className="page-hero">
      <div className="page-hero-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="page-hero-overlay" />
      <div className="page-hero-inner container">
        <div className="page-hero-copy">
          <p className="section-label page-hero-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <Link className="button button-primary page-hero-button" to="/contact">
            Book a Care Consultation <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
