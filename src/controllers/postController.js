const postService = require('../services/postService');

const getAll = async (_req, res) => {
  const postAll = await postService.getAll();

  return res.status(200).json(postAll);
};

const postController = {
  getAll,
};

module.exports = postController;