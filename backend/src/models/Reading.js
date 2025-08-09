const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
});

const readingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  paragraph: { type: String, required: true },
  questions: [questionSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Reading', readingSchema);
