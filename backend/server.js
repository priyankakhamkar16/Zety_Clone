const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const Contact = require('./models/Contact');
const Pricing = require('./models/Pricing');

require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

connectDB();

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    io.emit('newContact', { name, email, message });
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving contact', error });
  }
});

app.post('/api/pricing', async (req, res) => {
  const { plan, cardNumber, expiryDate, cvv } = req.body;

  if (!plan || !cardNumber || !expiryDate || !cvv) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newPricing = new Pricing({ plan, cardNumber, expiryDate, cvv });
    await newPricing.save();
    res.status(201).json({ message: 'Pricing plan saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving pricing plan', error });
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
