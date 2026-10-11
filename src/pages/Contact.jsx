import { useState } from 'react';
import { Mail, MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { hasEmail, hasPhone, hasWhatsApp, siteConfig } from '../config';
import PageHero from '../components/PageHero';
import './Page.css';

function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!hasEmail) {
      setFormStatus('Submissions are not configured yet. Please use another contact method listed here.');
      return;
    }

    const body = Array.from(new FormData(event.currentTarget).entries())
      .map(([field, value]) => `${field}: ${value}`)
      .join('\n');

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent('Care enquiry')}&body=${encodeURIComponent(body)}`;
    setFormStatus('Your email app should open with this enquiry. Send the email there to complete it.');
  };

  return <>
    <PageHero eyebrow="CONTACT ACCESS HOME CARE" title="Let’s talk about the care you need." description="Tell us a little about your situation and a member of the care team can follow up. The contact details below are intentionally kept configurable until the official company information is confirmed." />
    <section className="page-section"><div className="container page-split" style={{alignItems:'start'}}><div><p className="section-label">GET IN TOUCH</p><h2 className="section-title">Start with a conversation.</h2><p className="section-copy" style={{marginTop:18}}>Whether you are planning ahead or need support now, we can begin by understanding your needs.</p><div className="page-list" style={{marginTop:30}}><li><div className="page-icon"><Phone size={19}/></div><span><strong>Phone</strong><br/>{hasPhone ? <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a> : 'Official number to be added before launch.'}</span></li><li><div className="page-icon"><MessageCircle size={19}/></div><span><strong>WhatsApp</strong><br/>{hasWhatsApp ? <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">Chat with the care team</a> : 'Official WhatsApp number to be added before launch.'}</span></li><li><div className="page-icon"><Mail size={19}/></div><span><strong>Email</strong><br/>{hasEmail ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : 'Official email address to be added before launch.'}</span></li><li><div className="page-icon"><MapPin size={19}/></div><span><strong>Location</strong><br/>{siteConfig.location}</span></li></div></div><div className="page-card"><p className="section-label">CARE ENQUIRY</p><h3 style={{fontSize:'1.55rem'}}>Tell us what you need.</h3><form className="page-form" onSubmit={handleSubmit}><div className="form-grid"><div className="field"><label htmlFor="name">Full name</label><input id="name" name="name" autoComplete="name" placeholder="Your name"/></div><div className="field"><label htmlFor="contact">Phone or email</label><input id="contact" name="contact" placeholder="How should we reach you?"/></div><div className="field"><label htmlFor="service">Care service</label><select id="service" name="service" defaultValue=""><option value="" disabled>Select an option</option><option>Personal Care</option><option>Senior Home Care</option><option>24-Hour Home Care</option><option>Live-In & Hourly Care</option><option>Private Duty Nursing</option><option>Specialty Care</option><option>Not sure yet</option></select></div><div className="field"><label htmlFor="preferred">Preferred contact</label><select id="preferred" name="preferred" defaultValue=""><option value="" disabled>Select an option</option><option>Phone</option><option>WhatsApp</option><option>Email</option></select></div><div className="field full"><label htmlFor="message">How can we help?</label><textarea id="message" name="message" placeholder="Briefly tell us about the support you are looking for."/></div></div><button className="button button-primary" type="submit">Send Enquiry <ArrowRight size={17}/></button><p className="note" role="status">{formStatus || "Submissions use your configured email app; connect a form service for direct delivery."}</p></form></div></div></section>
  </>;
}
export default Contact;
