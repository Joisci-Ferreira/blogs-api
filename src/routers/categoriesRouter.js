const express = require('express');

const router = express.Router();

const categoriesController = require('../controllers/categoriesController');
const { validateToken } = require('../middlewares/validations');

router.post('/', validateToken, categoriesController.create);
router.get('/', validateToken, categoriesController.getAll);

module.exports = router;