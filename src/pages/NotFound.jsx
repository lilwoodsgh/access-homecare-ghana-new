import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="page-section not-found-page">
      <div className="container not-found-content">
        <p className="section-label">PAGE NOT FOUND</p>
        <h1 className="page-title">We could not find that page.</h1>
        <p className="section-copy">The page may have moved, or the address may be incorrect. You can return home or contact the care team.</p>
        <div className="page-actions">
          <Link to="/" className="button button-primary">Return Home</Link>
          <Link to="/contact" className="button button-secondary">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
