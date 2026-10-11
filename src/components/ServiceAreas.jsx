import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
} from "lucide-react";

import "./ServiceAreas.css";

const serviceAreas = [
  "Accra",
  "Tema",
  "East Legon",
  "Spintex",
  "Madina",
  "Adenta",
];

function ServiceAreas() {
  return (
    <section className="service-areas">
      <div className="service-areas-container">

        <div className="service-areas-content">

          <p className="service-areas-eyebrow">
            WHERE WE SERVE
          </p>

          <h2>
            Quality Care,
            <br />
            Close to Home
          </h2>

          <p>
            We are committed to bringing dependable and compassionate
            home care closer to the individuals and families who need it.
          </p>

          <Link
            to="/contact"
            className="service-areas-button"
          >
            Contact Our Team
            <ArrowRight size={17} />
          </Link>

        </div>

        <div className="service-areas-list">

          {serviceAreas.map((area) => (
            <div
              className="service-area"
              key={area}
            >
              <div className="service-area-icon">
                <MapPin size={20} />
              </div>

              <span>{area}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ServiceAreas;