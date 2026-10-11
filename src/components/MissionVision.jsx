import {
  HeartHandshake,
  Target,
} from "lucide-react";

import "./MissionVision.css";

function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="mission-vision-container">

        <div className="mission-vision-heading">
          <p className="mission-vision-eyebrow">
            OUR COMMITMENT
          </p>

          <h2>
            Care With Purpose,
            <br />
            Compassion With Heart
          </h2>

          <p>
            Everything we do is guided by our commitment to providing
            dependable, compassionate care while treating every person
            with dignity, respect and understanding.
          </p>
        </div>

        <div className="mission-vision-grid">

          <article className="mission-card">
            <div className="mission-icon">
              <HeartHandshake size={34} strokeWidth={1.7} />
            </div>

            <h3>Our Mission</h3>

            <p>
              To provide compassionate, personalized home care that
              supports individuals and families while promoting dignity,
              comfort, independence and quality of life.
            </p>
          </article>

          <article className="vision-card">
            <div className="vision-icon">
              <Target size={34} strokeWidth={1.7} />
            </div>

            <h3>Our Vision</h3>

            <p>
              To be a trusted provider of exceptional home care,
              recognized for compassionate service, professional
              excellence and the positive difference we make in the
              lives of the people we serve.
            </p>
          </article>

        </div>

      </div>
    </section>
  );
}

export default MissionVision;