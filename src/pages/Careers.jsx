import { HeartHandshake, GraduationCap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './Page.css';

function Careers() {
  return <>
    <PageHero eyebrow="CAREERS" title="Build a career around meaningful care." description="We are interested in people who bring professionalism, empathy, reliability and respect to the work of supporting others at home." />
    <section className="page-section"><div className="container"><div className="page-intro center"><p className="section-label">WORK WITH US</p><h2 className="section-title">People make the difference.</h2><p className="section-copy" style={{marginTop:18}}>As the team grows, this page can become the home for verified vacancies, role descriptions and application instructions.</p></div><div className="page-grid"><article className="page-card"><div className="page-icon"><HeartHandshake size={22}/></div><h3>Compassion</h3><p>We value people who genuinely care about the dignity and wellbeing of others.</p></article><article className="page-card"><div className="page-icon"><GraduationCap size={22}/></div><h3>Professional growth</h3><p>Care requires continuous learning, sound judgement and a commitment to improving practice.</p></article><article className="page-card"><div className="page-icon"><ShieldCheck size={22}/></div><h3>Reliability</h3><p>Families depend on consistency, responsibility, confidentiality and professional conduct.</p></article></div></div></section>
    <section className="page-section soft"><div className="container page-split"><div><p className="section-label">APPLICATIONS</p><h2 className="section-title">Interested in joining the care team?</h2><p className="section-copy" style={{marginTop:18}}>We can publish confirmed openings here once roles, requirements and application channels are finalised. Until then, use the contact page to make an enquiry.</p><Link to="/contact" className="button button-primary" style={{display:'inline-flex',marginTop:25}}>Make a Career Enquiry</Link></div><img src="/access-homecare-ghana-new/images/hero.jpg" alt="Caregiver supporting a client at home"/></div></section>
  </>;
}
export default Careers;
