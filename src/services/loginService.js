const loginModel = require('../models/loginModel');

const login = async (loginData) => {
  const token = await loginModel.login(loginData);

  return token;
};

const loginService = {
  login,
};

module.exports = loginService;