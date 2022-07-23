const { Category } = require('../database/models');

const create = async (name) => {
  const categories = await Category.create({ name });

  const creatCategory = {
    id: categories.insertId,
    name,
  };

  return creatCategory;
};

const categoriesModel = {
  create,
};

module.exports = categoriesModel;