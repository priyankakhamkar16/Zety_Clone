// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Account from './components/Account';
import CoverLetterHelp from './components/CoverLetterHelp';
import CoverLetterBuilder from './components/CoverLetterBuilder';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import HowToWriteCoverLetter from './components/HowToCoverLetter';
import CoverLetter from './components/CoverLetter'; // Import the CoverLetter component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/account" element={<Account />} />
          <Route path="/cover-letter-help" element={<CoverLetterHelp />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/cover-letter-builder" element={<CoverLetterBuilder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-to-write" element={<HowToWriteCoverLetter />} />
          <Route path="/cover-letter" element={<CoverLetter />} /> {/* Add new route */}
          <Route path="/" element={null} /> {/* Updated to remove welcome message */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
