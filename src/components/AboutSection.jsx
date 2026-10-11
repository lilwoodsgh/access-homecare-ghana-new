import { Link } from 'react-router-dom';
import { Check } from "lucide-react";

import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="About-image-wrapper">
          <img
            src="/access-homecare-ghana/images/About-care.jpg"
            alt="Caregiver providing compassionate home care"
            className="about-image"
          />

          <div className="about-badge">
            <strong>Compassionate</strong>
            <span>Care at Home</span>
          </div>
        </div>

        <div className="about-content">

          <p className="about-eyebrow">
            ABOUT ACCESS HOME CARE
          </p>

          <h2>
            Compassionate Care
            <br />
            Starts With Understanding
          </h2>

          <p className="about-description">
            At Access Home Care, we believe that quality care is about
            more than meeting physical needs. It is about creating an
            environment where every individual feels respected, valued,
            safe and supported.
          </p>

          <p className="about-description">
            Our approach focuses on personalized care that respects
            individual needs, preferences and routines while helping
            people maintain their independence and dignity at home.
          </p>

          <div className="about-features">

            <div className="about-feature">
              <div className="about-check">
                <Check size={17} />
              </div>

              <span>Personalized Care</span>
            </div>

            <div className="about-feature">
              <div className="about-check">
                <Check size={17} />
              </div>

              <span>Compassion & Dignity</span>
            </div>

            <div className="about-feature">
              <div className="about-check">
                <Check size={17} />
              </div>

              <span>Trusted Caregivers</span>
            </div>

            <div className="about-feature">
              <div className="about-check">
                <Check size={17} />
              </div>

              <span>Individualized Support</span>
            </div>

          </div>

          <Link to="/about" className="about-button">
            Learn More About Us
          </Link>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;