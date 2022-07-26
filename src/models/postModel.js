const { BlogPost, User, Category } = require('../database/models');

const getAll = async () => {
  const postAll = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return postAll;
};

const postModel = {
  getAll,
};

module.exports = postModel;