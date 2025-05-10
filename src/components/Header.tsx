import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import '../styles/header.css';

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="custom-header">
        <div className="logo">
          <img src={Logo} alt="HireX Logo" className="logo-img" />
          <span className="logo-text">HireX Lab</span>
        </div>

        <nav className="nav-links desktop-nav">
          <Link to="#">Job Seekers</Link>
          <Link to="#">Companies</Link>
          <Link to="#">Freelancers</Link>
        </nav>

        <button className="login-btn desktop-nav">Login as a Recruiter ↗</button>

        <div className="hamburger" onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>

      {sidebarOpen && (
        <div className="mobile-sidebar">
          <div className="close-btn" onClick={toggleSidebar}>×</div>
          <Link to="#" onClick={toggleSidebar}>Job Seekers</Link>
          <Link to="#" onClick={toggleSidebar}>Companies</Link>
          <Link to="#" onClick={toggleSidebar}>Freelancers</Link>
          <button className="login-btn" onClick={toggleSidebar}>Login as a Recruiter ↗</button>
        </div>
      )}
    </>
  );
};

export default Header;
