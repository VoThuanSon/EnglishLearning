const router = require('express').Router();
const vocabCtrl = require('../controllers/vocabController');
const auth = require('../middlewares/authMiddleware');

router.get('/', vocabCtrl.getAll);
router.get('/:id', vocabCtrl.getOne);
router.post('/', auth, vocabCtrl.create);
router.put('/:id', auth, vocabCtrl.update);
router.delete('/:id', auth, vocabCtrl.remove);

module.exports = router;
