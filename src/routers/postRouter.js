const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');
const { validateToken } = require('../middlewares/validations');

router.get('/', validateToken, postController.getAll);

module.exports = router;