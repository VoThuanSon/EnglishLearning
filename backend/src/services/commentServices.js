const Comment = require('../models/Comment');

exports.getByCourse = async (courseId) => {
  return await Comment.find({ courseId }).sort({ createdAt: -1 });
};

exports.create = async (data) => {
  return await new Comment(data).save();
};