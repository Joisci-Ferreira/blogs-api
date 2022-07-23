const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const login = async (loginData) => {
  const { email, password } = loginData;

  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    return;
  }

  const secret = process.env.JWT_SECRET;

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);

  return token;
};

const loginModel = {
  login,
};

module.exports = loginModel;
