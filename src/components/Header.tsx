// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header: React.FC = () => {
  return (
    <header className="custom-header">
      <div className="logo">
        <span className="logo-icon">N</span>
        <span className="logo-text">HireX Lab</span>
      </div>
      <nav className="nav-links">
        <Link to="#">Job Seekers</Link>
        <Link to="#">Companies</Link>
        <Link to="#">Freelancers</Link>
      </nav>
      <button className="login-btn">
        Login Now ↗
      </button>
    </header>
  );
};

export default Header;
