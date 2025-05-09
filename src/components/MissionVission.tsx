import React from 'react';
import '../styles/MissionVission.css';
import { ArrowRight } from 'lucide-react';

const MissionVision = () => {
  return (
    <div className="mission-vision-container">
      <div className="card">
        <div className="card-header">Our Mission</div>
        <div className="card-title">
          Empowering Enterprises with Responsible AI
        </div>
        <div className="card-description">
          Empowering businesses of all sizes with intelligent automation, seamless integration, and real-time insights to scale smarter and faster.
        </div>
        <a href="#" className="learn-more">
          Learn more <ArrowRight size={16} className="arrow-icon" />
        </a>
      </div>

      <div className="card">
        <div className="card-header">Our Vision</div>
        <div className="card-title">
          Charting a New Era of Intelligent Business
        </div>
        <div className="card-description">
          Empowering every organization to harness AI for transformative growth through seamless automation and human-centric innovation.
        </div>
        <a href="#" className="learn-more">
          Learn more <ArrowRight size={16} className="arrow-icon" />
        </a>
      </div>

      <button className="get-started-btn">
        Get Started <ArrowRight size={16} className="arrow-icon" />
      </button>
    </div>
  );
};

export default MissionVision;