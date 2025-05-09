import React from 'react';
import '../styles/results.css';

const Results = () => {
  return (
    <div className="results-container">
      <h1 className="results-title">Real Results from our Clients</h1>
      <p className="results-subtitle">
        Discover how leading businesses optimize performance, automate<br />
        workflows, and achieve transformative growth with NexaAI.
      </p>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="testimonial-content">
            <h2 className="testimonial-title">Transformative Impact with NexaAI's Automation Suite</h2>
            <p className="testimonial-text">
              NexaAI has revolutionized our operations—in just weeks, we
              slashed manual workload by 60% and gained clarity into
              performance metrics we never had before.
            </p>
          </div>
          <div className="testimonial-author">
            <div className="author-image">
              <img src="/api/placeholder/60/60" alt="Sarah Johnson" />
            </div>
            <div className="author-info">
              <h3 className="author-name">Sarah Johnson</h3>
              <p className="author-position">COO, TechFlow Innovations</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-content">
            <h2 className="testimonial-title">Unmatched Insight from NexaAI's Analytics Dashboard</h2>
            <p className="testimonial-text">
              With NexaAI, we moved from gut-feels to data-driven decisions.
              The real-time insights uncovered new growth channels, and our
              campaign ROI improved by 45% in the first month.
            </p>
          </div>
          <div className="testimonial-author">
            <div className="author-image">
              <img src="/api/placeholder/60/60" alt="David Lee" />
            </div>
            <div className="author-info">
              <h3 className="author-name">David Lee</h3>
              <p className="author-position">Head of Marketing, BrightWave Media</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-content">
            <h2 className="testimonial-title">Seamless Integration, Instant Results</h2>
            <p className="testimonial-text">
              Integrating NexaAI into our legacy systems was effortless. Within
              days we automated critical workflows, reduced errors, and freed
              our team to focus on strategic initiatives. Simply outstanding.
            </p>
          </div>
          <div className="testimonial-author">
            <div className="author-image">
              <img src="/api/placeholder/60/60" alt="Priya Kumar" />
            </div>
            <div className="author-info">
              <h3 className="author-name">Priya Kumar</h3>
              <p className="author-position">VP of Operations, Meridian Financial</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-content">
            <h2 className="testimonial-title">Scalable AI That Grows with Us</h2>
            <p className="testimonial-text">
              As a fast-growing startup, we needed an AI partner that could
              scale. NexaAI's modular platform expanded alongside our
              business—delivering enterprise-grade features.
            </p>
          </div>
          <div className="testimonial-author">
            <div className="author-image">
              <img src="/api/placeholder/60/60" alt="Carlos Ramirez" />
            </div>
            <div className="author-info">
              <h3 className="author-name">Carlos Ramirez</h3>
              <p className="author-position">CEO, NovaSolutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;