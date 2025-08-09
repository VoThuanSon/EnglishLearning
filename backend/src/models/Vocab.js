const mongoose = require('mongoose');

const vocabSchema = new mongoose.Schema({
  word: { type: String, required: true },
  meaning: { type: String, required: true },
  example: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vocab', vocabSchema);
