const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const commentController = require('../controllers/commentController');

router.get('/', courseController.getCourses);
router.get('/:id', courseController.getCourseById);
router.post('/', courseController.createCourse);

router.get('/:courseId/comments', commentController.getCommentsForCourse);
router.post('/:courseId/comments', commentController.createComment);

module.exports = router;
