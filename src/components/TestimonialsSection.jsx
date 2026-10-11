import { Quote, Star } from "lucide-react";

import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Family Member",
    role: "Client Family",
    text: "The care and compassion shown by the team made a meaningful difference for our family. We felt supported every step of the way.",
  },
  {
    name: "Family Member",
    role: "Client Family",
    text: "We appreciate the professionalism, patience and genuine kindness shown to our loved one. The experience gave our family peace of mind.",
  },
  {
    name: "Family Member",
    role: "Client Family",
    text: "The team treated our loved one with dignity and respect while providing the support they needed at home.",
  },
];

function TestimonialsSection() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">

        <div className="testimonials-heading">
          <p className="testimonials-eyebrow">
            WHAT FAMILIES SAY
          </p>

          <h2>
            Trusted by the Families
            <br />
            We Care For
          </h2>

          <p>
            The experiences of the people and families we serve
            inspire us to continue providing compassionate,
            dependable care.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.name + testimonial.text}
            >
              <div className="testimonial-top">
                <div className="quote-icon">
                  <Quote size={24} />
                </div>

                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>

              <p className="testimonial-text">
                “{testimonial.text}”
              </p>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;