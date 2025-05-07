import React from 'react';
import '../styles/trusted-by.css';
import Linkdin from '../assets/svgs/Linkdin';
import Microsoft from '../assets/svgs/Microsoft';
import Amazon from '../assets/svgs/amazon';
import Tunein from '../assets/svgs/tunein';
import Xboxone from '../assets/svgs/Xboxone';
import PayPal from '../assets/svgs/Paypal';
 // used as separator

const TrustedBy = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-title">
        <h2>Trusted <span className="gradient-text">By</span></h2>
        <p>Trusted by Innovators Worldwide</p>
      </div>

      <div className="trusted-logos">
      <PayPal />
      <Linkdin />
      <Xboxone />
      <Amazon />
      <Tunein />
      <Xboxone/>
      
      </div>
    </section>
  );
};

export default TrustedBy;
