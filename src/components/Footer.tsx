import React from 'react';
import '../styles/footer.css';
import Logo from '../assets/images/logo.png'; 
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo-container">
        <img src={Logo} alt="HireX Logo" className="logo-img" />
            <h2 className="brand-name">HireXLab</h2>
          </div>
          <p className="brand-description">
          AI-powered hiring made effortless. From screening to scheduling, we automate the hiring journey so you can focus on finding the perfect fit—faster, smarter, and without the manual work.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <a href="/Recruiters" className="footer-link with-arrow">Recruiters  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <path d="M1.25 8.75L8.75 1.25M8.75 1.25H3.125M8.75 1.25V6.875" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </a>
            <a href="/Candidates" className="footer-link with-arrow">Candidates  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <path d="M1.25 8.75L8.75 1.25M8.75 1.25H3.125M8.75 1.25V6.875" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </a>
            <a href="/Pricing" className="footer-link with-arrow">Pricing  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <path d="M1.25 8.75L8.75 1.25M8.75 1.25H3.125M8.75 1.25V6.875" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </a>
            <a href="/about" className="footer-link with-arrow">About  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <path d="M1.25 8.75L8.75 1.25M8.75 1.25H3.125M8.75 1.25V6.875" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </a>
            <a href="/contact" className="footer-link with-arrow">Contact  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <path d="M1.25 8.75L8.75 1.25M8.75 1.25H3.125M8.75 1.25V6.875" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </a>
          </div>
          
          <div className="link-column">
            <a href="https://instagram.com/nexaai" className="footer-link with-arrow">Instagram  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <path d="M1.25 8.75L8.75 1.25M8.75 1.25H3.125M8.75 1.25V6.875" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </a>
            <a href="https://youtube.com/nexaai" className="footer-link with-arrow">YouTube  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <path d="M1.25 8.75L8.75 1.25M8.75 1.25H3.125M8.75 1.25V6.875" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </a>
            <a href="https://twitter.com/nexaai" className="footer-link with-arrow">Twitter  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <path d="M1.25 8.75L8.75 1.25M8.75 1.25H3.125M8.75 1.25V6.875" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </a>
            <a href="https://linkedin.com/company/nexaai" className="footer-link with-arrow"> LinkedIn  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <path d="M1.25 8.75L8.75 1.25M8.75 1.25H3.125M8.75 1.25V6.875" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </a>
          </div>
          
          <div className="contact-info">
            <a href="mailto:support@hirexlab.com" className="contact-link">support@hirexlab.com</a>
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