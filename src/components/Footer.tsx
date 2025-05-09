import React from 'react';
import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo-container">
            <svg width="66" height="48" viewBox="0 0 66 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M65.5 0H45.5L25.5 48H45.5L65.5 0Z" fill="white"/>
              <path d="M20 0H0L20 48H40L20 0Z" fill="white"/>
            </svg>
            <h2 className="brand-name">NexaAI</h2>
          </div>
          <p className="brand-description">
            Leverage next-gen AI to streamline operations, uncover insights,
            and accelerate growth empowering modern enterprises to
            make smarter, faster, and data-driven decisions.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <a href="/solutions" className="footer-link with-arrow">Solutions  </a>
            <a href="/pricing" className="footer-link with-arrow">Pricing</a>
            <a href="/resources" className="footer-link with-arrow">Resources</a>
            <a href="/about" className="footer-link with-arrow">About</a>
            <a href="/contact" className="footer-link with-arrow">Contact</a>
          </div>
          
          <div className="link-column">
            <a href="https://instagram.com/nexaai" className="footer-link with-arrow">Instagram</a>
            <a href="https://youtube.com/nexaai" className="footer-link with-arrow">YouTube</a>
            <a href="https://twitter.com/nexaai" className="footer-link with-arrow">Twitter</a>
            <a href="https://linkedin.com/company/nexaai" className="footer-link with-arrow">LinkedIn</a>
          </div>
          
          <div className="contact-info">
            <a href="mailto:support@nexaai.com" className="contact-link">support@nexaai.com</a>
            <a href="tel:+919876543210" className="contact-link">+91 9876543210</a>
          </div>
        </div>
      </div>

      <div className="hirexlab-container">
        <h1 className="hirexlab-text">HireXlab</h1>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">©2025 All Rights Reserved by NexaAI</p>
        <div className="policy-links">
          <a href="/terms" className="policy-link with-arrow">Terms of Service</a>
          <a href="/privacy" className="policy-link with-arrow">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;