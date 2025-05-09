import React from 'react';
import '../styles//MainSections.css';

const MainSection: React.FC = () => {
  return (
    <div className="main-section">
      <div className="grid-bg"></div>
      <div className="gradient-blur"></div>
      
      <div className="hero-container">
        <h1 className="hero-title">
          Unlock Intelligent, Data-Driven Growth with
          <span className="accent-container">
            <span className="accent-pill"></span>
          </span> 
          Our NexaAI's All-In-One AI Automation Platform
        </h1>
        
        <p className="subheading">
          Leverage the power of AI automation to streamline operations, enhance customer satisfaction, and drive exponential business growth.
        </p>
        
        <div className="cta-container">
          <button className="btn btn-primary">
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 8H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button className="btn btn-secondary">
            <div className="play-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="7.5" stroke="white" strokeOpacity="0.5"/>
                <path d="M10.5 8L6.5 10.5V5.5L10.5 8Z" fill="white"/>
              </svg>
            </div>
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;