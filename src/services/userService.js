const userModel = require('../models/userModel');

const create = async (userData) => {
  const token = await userModel.create(userData);

  return token;
};

const getAll = async () => {
  const users = await userModel.getAll();

  return users;
};

const findById = async (id) => {
  const user = await userModel.findById(id);

  return user;
};

const userService = {
  create,
  getAll,
  findById,
};

module.exports = userService;