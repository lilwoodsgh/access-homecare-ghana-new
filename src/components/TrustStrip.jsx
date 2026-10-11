import { HeartHandshake, Home, ShieldCheck, UsersRound } from 'lucide-react';
import './TrustStrip.css';

const trustPoints = [
  { icon: HeartHandshake, title: 'Person-centred care', text: 'Support shaped around each individual.' },
  { icon: Home, title: 'Care at home', text: 'Comfort and familiarity where it matters.' },
  { icon: ShieldCheck, title: 'Safety & dignity', text: 'Respectful care with safety at the centre.' },
  { icon: UsersRound, title: 'Family partnership', text: 'Clear communication with those who matter.' },
];

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Why families choose Access Home Care">
      <div className="trust-container">
        {trustPoints.map(({ icon: Icon, title, text }) => (
          <div className="trust-item" key={title}>
            <div className="trust-icon"><Icon size={20} strokeWidth={1.8} /></div>
            <div><strong>{title}</strong><span>{text}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default TrustStrip;
