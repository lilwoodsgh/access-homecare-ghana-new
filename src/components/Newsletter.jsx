import { ArrowRight, Mail } from "lucide-react";

import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-container">

        <div className="newsletter-icon">
          <Mail size={28} />
        </div>

        <div className="newsletter-content">
          <p className="newsletter-eyebrow">
            STAY CONNECTED
          </p>

          <h2>
            Get Helpful Care Updates
          </h2>

          <p>
            Subscribe to receive helpful home care information,
            health tips, news and updates from Access Home Care Ghana.
          </p>
        </div>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
          />

          <button type="submit">
            Subscribe
            <ArrowRight size={17} />
          </button>
        </form>

      </div>
    </section>
  );
}

export default Newsletter;