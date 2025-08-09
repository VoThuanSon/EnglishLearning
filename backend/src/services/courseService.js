const Course = require('../models/Course');

exports.getAll = async () => await Course.find();
exports.getById = async (id) => await Course.findById(id);
exports.create = async (data) => await new Course(data).save();