
import React from 'react';
import '../styles/hero.css';
import '../styles/trusted-by.css';
import Linkdin from '../assets/svgs/Linkdin';
import Microsoft from '../assets/svgs/Microsoft';
import Amazon from '../assets/svgs/amazon';
import Tunein from '../assets/svgs/tunein';
import Xboxone from '../assets/svgs/Xboxone';
import PayPal from '../assets/svgs/Paypal';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-label">
        <span className="label-new">New</span>
        <span className="label-text">Learn to Automate the Hiring Process →</span>
      </div>

      <h1 className="hero-title">
        Supercharge <span className="highlight">Your</span> <br />
        Recruitment with <span className="highlight">Smart AI</span>
      </h1>

      <p className="hero-subtitle">
        Leverage the power of AI automation to streamline operations, enhance customer satisfaction,
        and drive exponential business growth.
      </p>

      <div className="hero-buttons">
        <button className="btn-primary">Start Free Trial ↗</button>
        <button className="btn-secondary">Watch Demo ⏵</button>
      </div>
    
      {/* <div className="stat-banner">
      <div className="stats">
        <div>
          <strong>4.8+</strong>
          <p>Stars Ratings</p>
        </div>
        <div>
          <strong>24k+</strong>
          <p>Satisfied Customer</p>
        </div>
      </div>

      <div className="ai-box">
        <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M15.5 17.5H6.49998M15.5 17.5C16.2956 17.5 17.0587 17.8161 17.6213 18.3787C18.1839 18.9413 18.5 19.7044 18.5 20.5H3.49998C3.49998 19.7044 3.81605 18.9413 4.37866 18.3787C4.94127 17.8161 5.70433 17.5 6.49998 17.5M15.5 17.5V14.125C15.5 13.504 14.997 13 14.375 13H13.504M6.49998 17.5V14.125C6.49998 13.504 7.00398 13 7.62498 13H8.49698M13.504 13H8.49698M13.504 13C12.9423 12.03 12.6067 10.9457 12.522 9.828M8.49698 13C9.0583 12.0299 9.39362 10.9456 9.47798 9.828M12.522 9.828C13.5299 9.59538 14.4697 9.13341 15.27 8.478M12.522 9.828C11.5205 10.059 10.4795 10.059 9.47798 9.828M9.47798 9.828C8.47038 9.59524 7.53002 9.13327 6.72998 8.478M4.24998 2.986C3.26798 3.129 2.29598 3.303 1.33398 3.506C1.55698 4.81479 2.20756 6.01273 3.18393 6.91238C4.16029 7.81202 5.40736 8.36261 6.72998 8.478M4.24998 2.986V3.25C4.24998 5.358 5.21598 7.24 6.72998 8.478M4.24998 2.986V1.471C6.45598 1.16 8.70998 1 11 1C13.291 1 15.545 1.16 17.75 1.47V2.986M17.75 2.986V3.25C17.75 5.358 16.784 7.24 15.27 8.478M17.75 2.986C18.7273 3.1282 19.6998 3.30163 20.666 3.506C20.443 4.81464 19.7926 6.01246 18.8164 6.91209C17.8403 7.81172 16.5924 8.3624 15.27 8.478" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <div>
          <h3>BEST AI TOOLS</h3>
          <p>Harness the power of AI to optimize every facet of your business</p>
        </div>
      </div>
    </div>

     */}

<section className="trusted-section">
      <div className="trusted-title">
        <h2>Trusted <span className="gradient-text">By</span></h2>
        <p>Trusted by Innovators Worldwide</p>
      </div>

      <div className="trusted-logos">
      <PayPal />
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 29 20" fill="none">
  <path d="M16.4662 15.7837L14.7799 20L13.0937 15.7837C12.6579 14.6946 11.8408 13.7028 10.7194 12.9018C9.59811 12.1009 8.20956 11.5172 6.68483 11.2059L0.779938 10L6.68275 8.79556C8.20749 8.48426 9.59603 7.90059 10.7174 7.09964C11.8387 6.29869 12.6558 5.30687 13.0916 4.21778L14.7799 0L16.4662 4.2163C16.902 5.30539 17.7191 6.29721 18.8404 7.09816C19.9618 7.89911 21.3503 8.48277 22.875 8.79407L28.7799 10L22.8771 11.2044C21.3524 11.5157 19.9638 12.0994 18.8425 12.9004C17.7212 13.7013 16.9041 14.6931 16.4682 15.7822L16.4662 15.7837Z" fill="#888888"/>
</svg>
      <Linkdin />
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 29 20" fill="none">
  <path d="M16.4662 15.7837L14.7799 20L13.0937 15.7837C12.6579 14.6946 11.8408 13.7028 10.7194 12.9018C9.59811 12.1009 8.20956 11.5172 6.68483 11.2059L0.779938 10L6.68275 8.79556C8.20749 8.48426 9.59603 7.90059 10.7174 7.09964C11.8387 6.29869 12.6558 5.30687 13.0916 4.21778L14.7799 0L16.4662 4.2163C16.902 5.30539 17.7191 6.29721 18.8404 7.09816C19.9618 7.89911 21.3503 8.48277 22.875 8.79407L28.7799 10L22.8771 11.2044C21.3524 11.5157 19.9638 12.0994 18.8425 12.9004C17.7212 13.7013 16.9041 14.6931 16.4682 15.7822L16.4662 15.7837Z" fill="#888888"/>
</svg>
      <Xboxone />
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 29 20" fill="none">
  <path d="M16.4662 15.7837L14.7799 20L13.0937 15.7837C12.6579 14.6946 11.8408 13.7028 10.7194 12.9018C9.59811 12.1009 8.20956 11.5172 6.68483 11.2059L0.779938 10L6.68275 8.79556C8.20749 8.48426 9.59603 7.90059 10.7174 7.09964C11.8387 6.29869 12.6558 5.30687 13.0916 4.21778L14.7799 0L16.4662 4.2163C16.902 5.30539 17.7191 6.29721 18.8404 7.09816C19.9618 7.89911 21.3503 8.48277 22.875 8.79407L28.7799 10L22.8771 11.2044C21.3524 11.5157 19.9638 12.0994 18.8425 12.9004C17.7212 13.7013 16.9041 14.6931 16.4682 15.7822L16.4662 15.7837Z" fill="#888888"/>
</svg>
      <Amazon />
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 29 20" fill="none">
  <path d="M16.4662 15.7837L14.7799 20L13.0937 15.7837C12.6579 14.6946 11.8408 13.7028 10.7194 12.9018C9.59811 12.1009 8.20956 11.5172 6.68483 11.2059L0.779938 10L6.68275 8.79556C8.20749 8.48426 9.59603 7.90059 10.7174 7.09964C11.8387 6.29869 12.6558 5.30687 13.0916 4.21778L14.7799 0L16.4662 4.2163C16.902 5.30539 17.7191 6.29721 18.8404 7.09816C19.9618 7.89911 21.3503 8.48277 22.875 8.79407L28.7799 10L22.8771 11.2044C21.3524 11.5157 19.9638 12.0994 18.8425 12.9004C17.7212 13.7013 16.9041 14.6931 16.4682 15.7822L16.4662 15.7837Z" fill="#888888"/>
</svg>
      <Tunein />
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 29 20" fill="none">
  <path d="M16.4662 15.7837L14.7799 20L13.0937 15.7837C12.6579 14.6946 11.8408 13.7028 10.7194 12.9018C9.59811 12.1009 8.20956 11.5172 6.68483 11.2059L0.779938 10L6.68275 8.79556C8.20749 8.48426 9.59603 7.90059 10.7174 7.09964C11.8387 6.29869 12.6558 5.30687 13.0916 4.21778L14.7799 0L16.4662 4.2163C16.902 5.30539 17.7191 6.29721 18.8404 7.09816C19.9618 7.89911 21.3503 8.48277 22.875 8.79407L28.7799 10L22.8771 11.2044C21.3524 11.5157 19.9638 12.0994 18.8425 12.9004C17.7212 13.7013 16.9041 14.6931 16.4682 15.7822L16.4662 15.7837Z" fill="#888888"/>
</svg>
      <Xboxone/>
      
      </div>
    </section>
    
    </section>
  );
};

export default HeroSection;
