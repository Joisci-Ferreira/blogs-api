const categoriesService = require('../services/categoriesService');

const create = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const creatCategory = await categoriesService.create(name);

  return res.status(201).json(creatCategory);
};

const categoriesController = {
  create,
};

module.exports = categoriesController;