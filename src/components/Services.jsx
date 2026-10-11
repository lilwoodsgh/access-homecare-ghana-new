import { Link } from 'react-router-dom';
import {
  HeartHandshake,
  Clock3,
  Stethoscope,
  Brain,
  UserRound,
  Accessibility,
} from "lucide-react";

import "./Services.css";

const services = [
  {
    icon: HeartHandshake,
    title: "24 Hour Home Care",
    description:
      "Compassionate care and support available around the clock, helping individuals remain comfortable and safe at home.",
  },
  {
    icon: Clock3,
    title: "Live In & Hourly Care",
    description:
      "Flexible care options designed around individual needs, routines and preferences.",
  },
  {
    icon: Stethoscope,
    title: "Private Duty Nursing",
    description:
      "Professional nursing support delivered with compassion, dignity and personalized attention.",
  },
  {
    icon: Brain,
    title: "Dementia Care",
    description:
      "Specialized support designed to help individuals living with dementia maintain comfort, dignity and quality of life.",
  },
  {
    icon: UserRound,
    title: "Personal Care",
    description:
      "Personalized assistance with everyday activities while respecting each individual's independence and dignity.",
  },
  {
    icon: Accessibility,
    title: "Senior Home Care",
    description:
      "Reliable home care services that help seniors live safely and comfortably in familiar surroundings.",
  },
];

function Services() {
  return (
    <section className="services">
      <div className="services-container">

        <div className="section-heading">
          <p className="section-eyebrow">
            OUR CARE SERVICES
          </p>

          <h2>
            Compassionate Care,
            <br />
            Tailored to You
          </h2>

          <p className="section-description">
            We provide personalized care services designed to support
            individuals and families while promoting comfort, dignity
            and independence at home.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon size={30} strokeWidth={1.8} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link to="/services" className="service-link">
                  Learn More
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="services-action">
          <Link to="/services" className="services-button">
            View All Care Services
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Services;