import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    // If the dropdown clicked is already open, close it; otherwise, open it and close others
    setOpenDropdown((prevDropdown) => (prevDropdown === dropdown ? null : dropdown));
  };

  return (
    <nav className="navbar">
      <div className="logo">ZetyClone</div>
      <ul className="nav-links">
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
  className="nav-item cover-letter"
  onClick={() => handleDropdownToggle('coverLetter')}
>
  <a href="#cover-letter">Cover Letter</a>
  {openDropdown === 'coverLetter' && (
    <div className="dropdown-menu">
      <div className="dropdown-header">
        Cover Letter Maker - Create a cover letter in 5 minutes. Get the job you want.
      </div>
      <ul> {/* Ensure this <ul> is here for dropdown items */}
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
          className="nav-item about"
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
      </ul>
    </nav>
  );
}

export default Navbar;
