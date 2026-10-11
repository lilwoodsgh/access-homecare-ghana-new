import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { hasPhone, hasWhatsApp, siteConfig } from '../config';
import './Navbar.css';

const logo = '/access-homecare-ghana-new/images/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu} aria-label="Access Home Care Ghana home">
          <img src={logo} alt="Access Home Care Ghana" />
        </NavLink>
        <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'active' : ''}`} aria-label="Primary navigation">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Care Services</NavLink>
          <NavLink to="/testimonials" onClick={closeMenu}>Testimonials</NavLink>
          <NavLink to="/news" onClick={closeMenu}>News</NavLink>
          <NavLink to="/careers" onClick={closeMenu}>Careers</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>Book a Consultation</NavLink>
        </nav>
        {hasPhone ? (
          <a href={`tel:${siteConfig.phoneHref}`} className="navbar-phone"><Phone size={15} /> Call us</a>
        ) : hasWhatsApp ? (
          <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="navbar-phone"><MessageCircle size={15} /> WhatsApp</a>
        ) : (
          <NavLink to="/contact" className="navbar-phone">Care Enquiries</NavLink>
        )}
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="primary-navigation">
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
