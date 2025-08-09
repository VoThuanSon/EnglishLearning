const commentService = require('../services/commentServices');

exports.getCommentsForCourse = async (req, res) => {
  const list = await commentService.getByCourse(req.params.courseId);
  res.json(list);
};

exports.createComment = async (req, res) => {
  const comment = await commentService.create({ ...req.body, courseId: req.params.courseId });
  res.status(201).json(comment);
};