const readingService = require('../services/readingServices');

exports.getAllReadings = async (req, res) => {
  try {
    const readings = await readingService.getAll();
    res.json(readings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReadingById = async (req, res) => {
  try {
    const reading = await readingService.getById(req.params.id);
    if (!reading) return res.status(404).json({ error: 'Reading not found' });
    res.json(reading);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createReading = async (req, res) => {
  try {
    const reading = await readingService.create(req.body);
    res.status(201).json(reading);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteReading = async (req, res) => {
  try {
    await readingService.deleteById(req.params.id);
    res.json({ message: 'Reading deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
