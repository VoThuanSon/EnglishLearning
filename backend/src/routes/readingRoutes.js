const express = require('express');
const router = express.Router();
const readingController = require('../controllers/readingController');
const auth = require('../middlewares/authMiddleware');

router.get('/', readingController.getAllReadings);
router.get('/:id', readingController.getReadingById);
router.post('/', auth, readingController.createReading);
router.delete('/:id', auth, readingController.deleteReading);

module.exports = router;
