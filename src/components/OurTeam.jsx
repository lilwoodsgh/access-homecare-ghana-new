import { HeartHandshake, ShieldCheck, MessageCircle } from 'lucide-react';
import './OurTeam.css';

const pillars = [
  ['Compassionate people', 'Care is delivered with patience, empathy and respect for the individual.', HeartHandshake],
  ['Professional standards', 'Safety, responsibility and dependable practice remain central to our approach.', ShieldCheck],
  ['Family partnership', 'Families should feel informed, listened to and included in the care journey.', MessageCircle],
];

function OurTeam() {
  return <section className="our-team"><div className="our-team-container"><div className="our-team-heading"><p className="our-team-eyebrow">THE PEOPLE BEHIND THE CARE</p><h2>A care team built around people.</h2><p>Verified staff profiles, qualifications and leadership information will be added here as the organisation’s official team information is finalised.</p></div><div className="our-team-grid">{pillars.map(([title,text,Icon])=><article className="team-card" key={title}><div className="team-placeholder"><Icon size={30}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}
export default OurTeam;
