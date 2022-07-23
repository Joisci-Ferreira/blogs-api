const loginService = require('../services/loginService');

const login = async (req, res) => {
  const token = await loginService.login(req.body);

  if (!token) {
    return res.status(400).json({ message: 'Invalid fields' }); 
  }

  return res.status(200).json({ token });
};

const loginController = {
  login,
};

module.exports = loginController;