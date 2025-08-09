const Reading = require('../models/Reading');

exports.getAll = async () => {
  return await Reading.find();
};

exports.getById = async (id) => {
  return await Reading.findById(id);
};

exports.create = async (data) => {
  const reading = new Reading(data);
  return await reading.save();
};

exports.deleteById = async (id) => {
  return await Reading.findByIdAndDelete(id);
};
