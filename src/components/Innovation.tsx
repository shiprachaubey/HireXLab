

import React from 'react';
import '../styles/innovation.css';
import { ArrowRight } from 'lucide-react';
import People from '../assets/images/people.png';

const Innovation = () => {
  return (
    <div className="innovation-wrapper">
      <section className="innovation-header">
        <h1 className="title">
          <span>Designed for Recruiters.</span>
          <span> Empowering for Candidates.</span>
        </h1>
        <p className="subtitle">
          <span>Streamline hiring and job seeking with AI-powered tools built for results—faster decisions, better matches, and smarter outcomes.</span>
        </p>
      </section>

      <div className="image-section">
        <img src={People} alt="Innovation" className="image" />
        <div className="image-overlay">
          <h2>OUR VISION</h2>
          <p>O redefine the future of hiring by blending intelligence, automation, and human potential—empowering every recruiter to hire smarter and every candidate to grow faster.</p>
        </div>
      </div>

      <section className="cards-section">
        <div className="card">
          <h3 className="card-header">Our Mission</h3>
          <h2 className="card-title">Empowering Enterprises with Responsible AI</h2>
          <p className="card-description">
            Empowering businesses of all sizes with intelligent automation, seamless integration, and real-time insights to scale smarter and faster.
          </p>
          <a href="#" className="learn-more">
            Learn more <ArrowRight size={16} className="arrow-icon" />
          </a>
        </div>

        <div className="card">
          <h3 className="card-header">Our Vision</h3>
          <h2 className="card-title">Charting a New Era of Intelligent Business</h2>
          <p className="card-description">
            Empowering every organization to harness AI for transformative growth through seamless automation and human-centric innovation.
          </p>
          <a href="#" className="learn-more">
            Learn more <ArrowRight size={16} className="arrow-icon" />
          </a>
        </div>
      </section>

     
    </div>
  );
};

export default Innovation;
