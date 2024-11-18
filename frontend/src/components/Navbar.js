import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown((prevDropdown) => (prevDropdown === dropdown ? null : dropdown));
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const handleLoginClick = () => navigate('/login');
  const handleSignupClick = () => navigate('/signup');

  return (
    <nav className="navbar">
      <div className="navbar-logo">ZetyClone</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <a href="#tools">Tools</a>
        </li>
        <li className="nav-item">
          <a href="#resume">Resume</a>
        </li>
        <li className="nav-item">
          <a href="#cv">CV</a>
        </li>
        <li
          className="nav-item dropdown"
          onClick={() => handleDropdownToggle('coverLetter')}
        >
          <a href="#cover-letter">Cover Letter</a>
          {openDropdown === 'coverLetter' && (
            <div className="dropdown-menu">
              <div className="dropdown-header">
                Cover Letter Maker - Create a cover letter in 5 minutes. Get the job you want.
              </div>
              <ul>
                <li className="dropdown-item">
                  <Link to="/cover-letter-builder">Build Cover Letter</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/cover-letter">Cover Letter Format</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/how-to-write">How to Write a Cover Letter</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/cover-letter-help">Cover Letter Help</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/cover-letter-builder">Create a Cover Letter Now</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="nav-item dropdown"
          onClick={() => handleDropdownToggle('about')}
        >
          <a href="#about">About</a>
          {openDropdown === 'about' && (
            <div className="dropdown-menu">
              <div className="dropdown-header">
                Learn more about ZetyClone and our services.
              </div>
              <ul>
                <li className="dropdown-item">
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="nav-item">
          <Link to="/account">My Account</Link>
        </li>
        <li className="navbar-buttons">
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
          <button className="signup-btn" onClick={handleSignupClick}>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
