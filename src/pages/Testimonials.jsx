import { Quote, HeartHandshake, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './Page.css';

function Testimonials() {
  return <>
    <PageHero eyebrow="FAMILY EXPERIENCE" title="Care should feel reassuring, respectful and personal." description="The strongest measure of home care is the experience of the people and families receiving it. This section is ready for verified client feedback as the service portfolio grows." />
    <section className="page-section"><div className="container"><div className="page-intro center"><p className="section-label">WHAT WE AIM FOR</p><h2 className="section-title">The experience every family should expect.</h2><p className="section-copy" style={{marginTop:18}}>We want families to feel informed, heard and confident that the person they love is receiving thoughtful support.</p></div><div className="page-grid"><article className="page-card"><div className="page-icon"><HeartHandshake size={22}/></div><h3>Compassion</h3><p>Care that recognises the person, not just the task that needs to be completed.</p></article><article className="page-card"><div className="page-icon"><MessageCircle size={22}/></div><h3>Communication</h3><p>Clear communication helps families understand what is happening and what comes next.</p></article><article className="page-card"><div className="page-icon"><Quote size={22}/></div><h3>Trust</h3><p>Dependability, respect and professional conduct are essential to a lasting care relationship.</p></article></div></div></section>
    <section className="page-section soft"><div className="container"><div className="page-card" style={{maxWidth:850,margin:'0 auto',textAlign:'center'}}><p className="section-label">VERIFIED FEEDBACK</p><h2 className="section-title" style={{fontSize:'clamp(1.9rem,3vw,2.7rem)'}}>Client testimonials will be published here as verified feedback becomes available.</h2><p className="section-copy" style={{marginTop:16}}>We will use real family feedback, with permission, rather than publishing invented testimonials.</p></div></div></section>
    <section className="page-cta"><div className="container page-cta-inner"><div><h2>Want to experience our approach first-hand?</h2><p>Start with a no-pressure conversation about your care needs.</p></div><Link to="/contact" className="button button-primary">Book a Consultation</Link></div></section>
  </>;
}
export default Testimonials;
