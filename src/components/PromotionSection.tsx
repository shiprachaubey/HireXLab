import React from 'react';
import '../styles/PromotionSection.css';
import chart from '../assets/images/chart.png';
import { ArrowRight } from 'lucide-react';

const PromotionSection: React.FC = () => {
  return (
    <section className="promotion-container">
      <div className="promotion-section">
        <div className="promotion-content">
          <p className="promotion-label">SUMMER DEAL SALES</p>
          
          <h2 className="promotion-title">
            Unlock Exclusive<br />
            Savings on <span className="highlight-text">AI-Driven</span><br />
            Business Automation
          </h2>
          
          <p className="promotion-description">
            Leverage the power of AI automation to streamline operations, enhance<br />
            customer satisfaction, and drive exponential business growth.
          </p>
          
          <button className="promotion-cta">
            Get Started <ArrowRight size={18} />
          </button>
        </div>
        
        <div className="graph-container">
           <img src={chart}alt="Chart" />
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;