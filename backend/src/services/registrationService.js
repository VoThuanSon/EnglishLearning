const Registration = require('../models/registration');

exports.register = async (courseId, user) => {
  const existing = await Registration.findOne({ courseId, user });
  if (existing) {
    return {mes : "You already registered this course"};
  }

  return await new Registration({ courseId, user }).save();
};


exports.getRegistrationsByUser = async (user) => {
  return await Registration.find({ user }).populate('courseId');
};
exports.unregister = async (registrationId) => {
  const deleted = await Registration.findByIdAndDelete(registrationId);
  if (!deleted) {
    const error = new Error('Registration not found');
    error.statusCode = 404;
    throw error;
  }
  return { success: true, message: 'Unregistered successfully' };
};
