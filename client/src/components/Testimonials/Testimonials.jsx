import React from "react";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="sectionTitle">What Our Clients Say</h2>
      <div className="testimonialCarousel">
        <div className="testimonial">
          <p>"Easy Rent made my apartment hunting stress-free. Highly recommended!"</p>
          <h3>- John Doe</h3>
        </div>
        <div className="testimonial">
          <p>"Professional service and great options. Found my dream home in no time!"</p>
          <h3>- Jane Smith</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
