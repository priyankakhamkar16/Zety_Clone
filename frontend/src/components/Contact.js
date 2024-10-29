// src/components/Contact.js

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { io } from 'socket.io-client';
import '../styles/Contact.css';

const socket = io('http://localhost:5000'); // Adjust if your server is hosted elsewhere

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message); // Show success message
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        alert('Error: ' + data.message); // Show error message
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  // Optional: Listen for new contact submissions
  useEffect(() => {
    socket.on('newContact', (data) => {
      console.log('New contact submitted:', data);
      // Here you can handle new contact notifications
    });

    return () => {
      socket.off('newContact'); // Clean up the event listener on unmount
    };
  }, []);

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Feel free to reach out with any questions or feedback.</p>
      <div className="contact-details">
        <div className="contact-info">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <p>1234 Street Address, City, State, Zip</p>
        </div>
        <div className="contact-info">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p>(123) 456-7890</p>
        </div>
        <div className="contact-info">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>contact@example.com</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
