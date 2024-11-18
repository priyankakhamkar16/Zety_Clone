// src/components/Account.js

import React, { useState } from 'react';
import '../styles/Account.css';

function Account() {
  const [name, setName] = useState(""); // Initialize as empty string
  const [email, setEmail] = useState(""); // Initialize as empty string
  const [phone, setPhone] = useState(""); // Initialize as empty string
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSaveChanges = () => {
    // Save changes logic (e.g., update the database)
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-pic-container">
        <img 
          src={profilePic || "https://via.placeholder.com/150"} 
          alt="Profile" 
          className="profile-pic" 
        />
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload} 
          className="upload-button"
        />
      </div>

      <div className="profile-details">
        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            placeholder="Enter your name" // Optional placeholder
            onChange={(e) => setName(e.target.value)} 
          />
        </label>
        
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            placeholder="Enter your email" // Optional placeholder
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
        
        <label>
          Phone:
          <input 
            type="text" 
            value={phone} 
            placeholder="Enter your phone number" // Optional placeholder
            onChange={(e) => setPhone(e.target.value)} 
          />
        </label>

        <button onClick={handleSaveChanges} className="save-button">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Account;
