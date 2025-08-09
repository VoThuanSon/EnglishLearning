const Vocab = require('../models/Vocab');

exports.createVocab = async (data) => {
  return await Vocab.create(data);
};

exports.getAllVocabs = async () => {
  return await Vocab.find().sort({ createdAt: -1 }).populate('user', 'username');
};

exports.getVocabById = async (id) => {
  return await Vocab.findById(id);
};

exports.updateVocab = async (id, data) => {
  return await Vocab.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteVocab = async (id) => {
  return await Vocab.findByIdAndDelete(id);
};
