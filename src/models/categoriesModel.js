const { Category } = require('../database/models');

const create = async (name) => {
  const categories = await Category.create({ name });

  const creatCategory = {
    id: categories.insertId,
    name,
  };

  return creatCategory;
};

const getAll = async () => {
  const categories = await Category.findAll({
    attributes: ['id', 'name'],
  });

  return categories;
}

const categoriesModel = {
  create,
  getAll,
};

module.exports = categoriesModel;