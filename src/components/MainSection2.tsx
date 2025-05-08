import React from 'react';
import '../styles//MainSections.css';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
    return (
      <section className="hero-section">
        <div className="background-glow"></div>
        
        <h1 className="hero-title">
          Unlock Intelligent, Data-Driven<br />
          Growth with <span className="highlight-pill">NexaAI's</span> Our<br />
          All-In-One AI Automation Platform
        </h1>
        
        <p className="hero-description">
          Leverage the power of AI automation to streamline operations, enhance customer
          satisfaction, and drive exponential business growth.
        </p>
        
        <div className="cta-buttons">
          <button className="cta-primary">
            Get Started <ArrowRight size={18} />
          </button>
          <button className="cta-secondary">
            Watch Demo <Play size={18} />
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;