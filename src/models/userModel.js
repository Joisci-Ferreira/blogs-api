const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const create = async (userData) => {
  const { displayName, email, password, image } = userData;

  const user = await User.findOne({
    where: { email } });

  if (user) {
    return;
  }

  const createUser = await User.create(userData);

  const secret = process.env.JWT_SECRET;

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: createUser }, secret, jwtConfig);

  return token;
};

const getAll = async () => {
  const users = await User.findAll({
     attributes: ['id', 'displayName', 'email', 'image'] });

  return users;
}

const findById = async (id) => {
  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { id },
  });

  if (!user) {
    return;
  }

  return user;
}

const userModel = {
  create,
  getAll,
  findById,
};

module.exports = userModel;