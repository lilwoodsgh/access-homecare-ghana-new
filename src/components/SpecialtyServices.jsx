import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './SpecialtyServices.css';

const specialtyServices = [
  { image: '/access-homecare-ghana/images/hero.jpg', title: '24 Hour Home Care', description: 'Reliable support and compassionate care available around the clock.' },
  { image: '/access-homecare-ghana/images/About-care.jpg', title: 'Intellectual & Developmental Disability Care', description: 'Personalised support that promotes independence, dignity and quality of life.' },
  { image: '/access-homecare-ghana/images/care-cta.jpg', title: 'Alzheimer’s & Dementia Care', description: 'Compassionate care designed around the unique needs of each individual.' },
  { image: '/access-homecare-ghana/images/hero.jpg', title: 'Private Duty Nursing', description: 'Professional nursing support delivered in the comfort of home.' },
  { image: '/access-homecare-ghana/images/About-care.jpg', title: 'Personal Care at Home', description: 'Practical assistance with everyday activities while preserving independence.' },
  { image: '/access-homecare-ghana/images/care-cta.jpg', title: 'Senior Home Care', description: 'Dedicated support helping seniors remain comfortable and safe at home.' },
];

function SpecialtyServices() {
  return (
    <section className="specialty-services">
      <div className="specialty-container">
        <div className="specialty-heading">
          <p className="specialty-eyebrow">SPECIALTY CARE</p>
          <h2>Care designed around<br />your unique needs.</h2>
          <p>From everyday personal support to specialist care, our services are shaped around each person’s routines, preferences and goals.</p>
        </div>

        <div className="specialty-grid">
          {specialtyServices.map((service) => (
            <article className="specialty-card" key={service.title}>
              <div className="specialty-card-image" style={{ backgroundImage: `url("${service.image}")` }} aria-hidden="true" />
              <div className="specialty-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services">Learn More <ArrowRight size={16} /></Link>
              </div>
            </article>
          ))}
        </div>

        <div className="specialty-action"><Link to="/services" className="specialty-button">Explore All Services</Link></div>
      </div>
    </section>
  );
}

export default SpecialtyServices;
