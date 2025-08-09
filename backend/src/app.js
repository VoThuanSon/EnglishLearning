const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const vocabRoutes = require('./routes/vocabRoutes');
const readingRoutes = require('./routes/readingRoutes');
const courseRoutes = require('./routes/courseRoutes');
const registrationRoutes = require('./routes/registrationRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/vocab', vocabRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/registrations', registrationRoutes);
app.use('/api/reading', readingRoutes);

module.exports = app;