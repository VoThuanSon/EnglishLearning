const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

router.post('/:id/register', registrationController.register);
router.get('/:user/my-courses', registrationController.myCourses);
router.delete('/:id/unregister', registrationController.unregister);

module.exports = router;
