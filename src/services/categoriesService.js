const categoriesModel = require('../models/categoriesModel');

const create = async (name) => {
  const creatCategory = await categoriesModel.create(name);

  return creatCategory;
};

const getAll = async () => {
  const categories = await categoriesModel.getAll();

  return categories;
};

const categoriesService = {
  create,
  getAll,
};

module.exports = categoriesService;