const categoriesService = require('../services/categoriesService');

const create = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const creatCategory = await categoriesService.create(name);

  return res.status(201).json(creatCategory);
};

const getAll = async (_req, res) => {
  const categories = await categoriesService.getAll();

  return res.status(200).json(categories);
};

const categoriesController = {
  create,
  getAll,
};

module.exports = categoriesController;