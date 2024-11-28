import React from "react";
import "./howItWorks.scss";

const HowItWorks = () => {
  return (
    <div className="howItWorks">
      <h2 className="sectionTitle">How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Search</h3>
          <p>Find your dream property using our powerful search tool.</p>
        </div>
        <div className="step">
          <h3>2. Visit</h3>
          <p>Schedule a visit to see the property in person.</p>
        </div>
        <div className="step">
          <h3>3. Rent</h3>
          <p>Finalize the paperwork and move in!</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
