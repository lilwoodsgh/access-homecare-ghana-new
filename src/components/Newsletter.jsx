import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { hasEmail, siteConfig } from "../config";

import "./Newsletter.css";

function Newsletter() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!hasEmail) {
      setStatus("Subscriptions are not configured yet. Please check back later.");
      return;
    }

    const email = new FormData(event.currentTarget).get("email");
    const body = encodeURIComponent(`Please add ${email} to the home care updates mailing list.`);
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Newsletter subscription")}&body=${body}`;
    setStatus("Your email app should open with the subscription request. Send the email to complete it.");
  };

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

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            required
          />

          <button type="submit">
            Subscribe
            <ArrowRight size={17} />
          </button>
          <p className="newsletter-status" role="status">{status}</p>
        </form>

      </div>
    </section>
  );
}

export default Newsletter;