import React from 'react';
import '../styles//MainSections.css';

const MainSection: React.FC = () => {
  return (
    <div className="main-section">
      <div className="grid-bg"></div>
      <div className="gradient-blur"></div>
      
      <div className="hero-container">
        <h1 className="hero-title">
        Unlock Intelligent, Data‑Driven , Recruiting Agent with Our HireXLab All‑In‑One Recruiting Platform
        </h1>
        
        <p className="subheading">
        Streamline every step of the hiring process. Say goodbye to manual screening, scheduling chaos, and biased evaluations. Welcome to faster, smarter, automated recruitment.
        </p>
      
      </div>
    </div>
  );
};

export default MainSection;