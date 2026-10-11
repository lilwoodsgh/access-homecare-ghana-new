import { MessageCircle, ClipboardCheck, FileHeart, HouseHeart } from 'lucide-react';
import './HowCareWorks.css';

const steps = [
  ['01', 'Tell us what you need', 'Share what is happening at home, the support you are looking for and what matters most to your family.', MessageCircle],
  ['02', 'Care assessment', 'We discuss needs, routines, preferences and practical considerations to understand the right level of support.', ClipboardCheck],
  ['03', 'Personalised care plan', 'Together, we shape a care approach around the individual rather than using a one-size-fits-all model.', FileHeart],
  ['04', 'Care begins', 'Once the arrangements are agreed, care can begin with communication and support built around the person.', HouseHeart],
];

function HowCareWorks() {
  return <section className="how-care-works"><div className="container"><div className="how-care-heading"><div><p className="section-label">HOW OUR CARE WORKS</p><h2 className="section-title">A clear path from first conversation to care.</h2></div><p className="section-copy">Good care starts with listening. Our process is designed to make the next step understandable and personal.</p></div><div className="how-care-grid">{steps.map(([number,title,text,Icon])=><article className="how-care-step" key={number}><span className="how-care-number">{number}</span><div className="how-care-icon"><Icon size={22}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}
export default HowCareWorks;
