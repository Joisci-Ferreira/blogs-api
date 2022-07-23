const categoriesModel = require('../models/categoriesModel');

const create = async (name) => {
  const creatCategory = await categoriesModel.create(name);

  return creatCategory;
};

const categoriesService = {
  create,
};

module.exports = categoriesService;