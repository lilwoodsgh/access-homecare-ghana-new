import { Link } from 'react-router-dom';
import "./CareCTA.css";

function CareCTA() {
  return (
    <section className="care-cta">
      <div className="care-cta-overlay"></div>

      <div className="care-cta-container">
        <div className="care-cta-content">

          <p className="care-cta-eyebrow">
            COMPASSIONATE CARE, EVERY STEP OF THE WAY
          </p>

          <h2>
            Because Everyone
            <br />
            Deserves Quality Care
          </h2>

          <p>
            Whether you or a loved one needs occasional assistance,
            ongoing support or specialized care, we're here to help
            make life at home safer, more comfortable and more fulfilling.
          </p>

          <div className="care-cta-buttons">
            <Link to="/contact" className="care-cta-primary">
              Get Started
            </Link>

            <Link to="/contact" className="care-cta-secondary">
              Talk to Our Care Team
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CareCTA;