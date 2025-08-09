const vocabService = require('../services/vocabService');

exports.create = async (req, res) => {
  try {
    const vocab = await vocabService.createVocab({ ...req.body, user: req.user.id });
    res.status(201).json(vocab);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  const list = await vocabService.getAllVocabs();
  res.json(list);
};

exports.getOne = async (req, res) => {
  const item = await vocabService.getVocabById(req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
};

exports.update = async (req, res) => {
  const updated = await vocabService.updateVocab(req.params.id, req.body);
  res.json(updated);
};

exports.remove = async (req, res) => {
  await vocabService.deleteVocab(req.params.id);
  res.json({ message: 'Deleted' });
};
