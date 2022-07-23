const userService = require('../services/userService');

const create = async (req, res) => {
  const token = await userService.create(req.body);

  if (!token) {
    return res.status(409).json({ message: 'User already registered' }); 
  }

  return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const users = await userService.getAll();

  return res.status(200).json(users);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const user = await userService.findById(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

const userController = {
  create,
  getAll,
  findById,
};

module.exports = userController;