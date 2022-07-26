const postModel = require('../models/postModel');

const getAll = async () => {
  const postAll = await postModel.getAll();

  return postAll;
};

const postService = {
  getAll,
};

module.exports = postService;