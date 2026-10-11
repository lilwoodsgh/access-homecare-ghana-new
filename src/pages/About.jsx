import { HeartHandshake, ShieldCheck, UsersRound, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './Page.css';

const values = [
  ['Compassion', 'We lead with empathy and treat every person with kindness, patience and respect.', HeartHandshake],
  ['Dignity', 'Care should protect independence, privacy, preferences and the right to be heard.', ShieldCheck],
  ['Trust', 'Families deserve dependable communication, professional conduct and consistent support.', UsersRound],
  ['Person-centred care', 'Care plans should reflect the individual rather than forcing everyone into the same routine.', Sparkles],
];

function About() {
  return <>
    <PageHero eyebrow="ABOUT ACCESS HOME CARE" title="Care that respects the person behind the care need." description="Access Home Care is built around a simple belief: people should be able to receive quality support while remaining comfortable, respected and connected to the life they know at home." image="/access-homecare-ghana-new/images/About-care.jpg" />

    <section className="page-section">
      <div className="container page-split">
        <div>
          <p className="section-label">OUR APPROACH</p>
          <h2 className="section-title">Professional support, delivered with humanity.</h2>
          <p className="section-copy" style={{marginTop:20}}>Our approach combines practical assistance with genuine human connection. We focus on understanding routines, preferences, goals and the needs of families before care begins.</p>
          <ul className="page-list">
            {['Individualised support plans', 'Respect for privacy and independence', 'Clear communication with families', 'A focus on safety, comfort and quality of life'].map(item => <li key={item}><Check size={18}/>{item}</li>)}
          </ul>
        </div>
        <img src="/access-homecare-ghana-new/images/About-care.jpg" alt="Caregiver supporting an older adult at home" />
      </div>
    </section>

    <section className="page-section soft">
      <div className="container">
        <div className="page-intro center"><p className="section-label">WHAT GUIDES US</p><h2 className="section-title">Our values are part of every interaction.</h2></div>
        <div className="page-grid">
          {values.map(([title, text, Icon]) => <article className="page-card" key={title}><div className="page-icon"><Icon size={22}/></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="page-intro"><p className="section-label">MISSION & VISION</p><h2 className="section-title">A better experience of care at home.</h2></div>
        <div className="page-grid two">
          <article className="page-card"><h3>Our Mission</h3><p>To provide compassionate, personalised home care that supports individuals and families while promoting dignity, comfort, independence and quality of life.</p></article>
          <article className="page-card"><h3>Our Vision</h3><p>To be a trusted provider of exceptional home care, recognised for compassionate service, professional excellence and the positive difference we make in the lives of the people we serve.</p></article>
        </div>
      </div>
    </section>

    <section className="page-cta"><div className="container page-cta-inner"><div><h2>Let’s understand what care would look like for your family.</h2><p>Start with a conversation about your needs, preferences and the support you are looking for.</p></div><div className="page-cta-actions"><Link to="/contact" className="button button-primary">Book a Consultation</Link><Link to="/services" className="button button-secondary">Explore Services</Link></div></div></section>
  </>;
}
export default About;
