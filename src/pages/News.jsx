import { ArrowRight, BookOpen, ShieldCheck, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './Page.css';

const articles = [
  ['Understanding Home Care', 'A practical introduction to what home care can include and when families may consider additional support.', BookOpen],
  ['Creating a Safer Home', 'Simple areas families can review when supporting an older adult or someone with changing mobility needs.', ShieldCheck],
  ['Supporting Wellbeing at Home', 'Why emotional wellbeing, routine, dignity and social connection matter alongside practical care.', HeartPulse],
];

function News() {
  return <>
    <PageHero eyebrow="NEWS & INSIGHTS" title="Useful guidance for families navigating care at home." description="Our resource centre is designed to share practical information about home care, safety, wellbeing and family support." />
    <section className="page-section"><div className="container"><div className="page-intro"><p className="section-label">CARE RESOURCES</p><h2 className="section-title">Helpful information, without the jargon.</h2><p className="section-copy" style={{marginTop:18}}>We will use this space for educational articles, care guidance, community updates and information that helps families make informed decisions.</p></div><div className="page-grid">{articles.map(([title,text,Icon])=><article className="page-card" key={title}><div className="page-icon"><Icon size={22}/></div><p className="section-label" style={{marginTop:18,marginBottom:0}}>RESOURCE</p><h3>{title}</h3><p>{text}</p><Link to="/contact" className="button-link" style={{display:'inline-flex',gap:8,alignItems:'center',marginTop:18,color:'var(--primary-color)',fontWeight:800}}>Discuss Your Needs <ArrowRight size={16}/></Link></article>)}</div></div></section>
    <section className="page-cta"><div className="container page-cta-inner"><div><h2>Have a care question that isn’t covered here?</h2><p>Our team can discuss your situation and help you understand the next step.</p></div><Link to="/contact" className="button button-primary">Contact Us</Link></div></section>
  </>;
}
export default News;
