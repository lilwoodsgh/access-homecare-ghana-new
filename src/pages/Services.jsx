import { Clock3, Home, HeartPulse, Brain, UserRound, UsersRound, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './Page.css';

const services = [
  ['24-Hour Home Care', 'Ongoing support for individuals who need dependable care and supervision throughout the day and night.', Clock3],
  ['Live-In & Hourly Care', 'Flexible care arrangements that can be shaped around routines, schedules and changing needs.', Home],
  ['Private Duty Nursing', 'Professional nursing support for individuals who require clinical care in the comfort of home.', HeartPulse],
  ['Dementia & Alzheimer’s Care', 'Specialised support focused on safety, familiarity, routine, dignity and family reassurance.', Brain],
  ['Personal Care', 'Practical assistance with everyday personal routines while preserving privacy, choice and independence.', UserRound],
  ['Senior Home Care', 'Compassionate support that helps older adults remain comfortable, engaged and supported at home.', UsersRound],
];

function Services() {
  return <>
    <PageHero eyebrow="OUR CARE SERVICES" title="Support designed around real life at home." description="From everyday assistance to ongoing and specialised support, our care services are designed to help individuals live safely, comfortably and with dignity." />
    <section className="page-section">
      <div className="container">
        <div className="page-intro"><p className="section-label">CORE SERVICES</p><h2 className="section-title">Care that adapts to the person.</h2><p className="section-copy" style={{marginTop:18}}>The right service depends on the individual. We begin by understanding the person, their routine and their support needs before recommending an appropriate care arrangement.</p></div>
        <div className="page-grid">
          {services.map(([title,text,Icon]) => <article className="page-card" key={title}><div className="page-icon"><Icon size={22}/></div><h3>{title}</h3><p>{text}</p><ul className="page-list">{['Person-centred approach','Flexible support options'].map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul></article>)}
        </div>
      </div>
    </section>
    <section className="page-section soft"><div className="container page-split"><img src="/access-homecare-ghana-new/images/care-cta.jpg" alt="Caregiver providing supportive care at home"/><div><p className="section-label">SPECIALISED SUPPORT</p><h2 className="section-title">When care needs become more complex.</h2><p className="section-copy" style={{marginTop:18}}>Some families need support around dementia, developmental disabilities, recovery, mobility or other specialised needs. We can discuss the situation and help identify an appropriate care pathway.</p><ul className="page-list">{['Alzheimer’s & dementia support','Intellectual & developmental disability support','Mobility and daily-living assistance','Family and caregiver support'].map(x=><li key={x}><Check size={18}/>{x}</li>)}</ul></div></div></section>
    <section className="page-cta"><div className="container page-cta-inner"><div><h2>Not sure which service is right for you?</h2><p>Tell us what is happening at home and we can start the conversation.</p></div><Link to="/contact" className="button button-primary">Talk to Our Care Team</Link></div></section>
  </>;
}
export default Services;
