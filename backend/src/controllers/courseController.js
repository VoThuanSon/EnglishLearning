const courseService = require('../services/courseService');

exports.getCourses = async (req, res) => {
  const list = await courseService.getAll();
  res.json(list);
};

exports.getCourseById = async (req, res) => {
  const item = await courseService.getById(req.params.id);
  res.json(item);
};

exports.createCourse = async (req, res) => {
  const newCourse = await courseService.create(req.body);
  res.status(201).json(newCourse);
};