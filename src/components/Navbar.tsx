import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/TSLlogo.png';
import '../styles/navbar.css';

const Header: React.FC = () => {
  return (
    <header className="custom-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={Logo} alt="rechstudiolabs.ai" className="navbar-logo" />
        </div>
        <nav className="navbar-right">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
