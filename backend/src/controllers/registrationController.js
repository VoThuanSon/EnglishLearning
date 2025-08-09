const registrationService = require('../services/registrationService');

exports.register = async (req, res) => {
  const registered = await registrationService.register(req.params.id, req.body.user);
  res.status(201).json(registered);
};

exports.myCourses = async (req, res) => {
  const list = await registrationService.getRegistrationsByUser(req.params.user);
  res.json(list);
};
exports.unregister = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await registrationService.unregister(id);
    return res.json(result); 
  } catch (error) {
    console.error('Unregister error:', error.message);

    res.status(error.statusCode || 500).json({
      error: error.message || 'Internal server error',
    });
  }
};