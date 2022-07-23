const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const { validateToken, validateUser } = require('../middlewares/validations');

router.post('/', validateUser, userController.create);
router.get('/', validateToken, userController.getAll);
router.get('/:id', validateToken, userController.findById);

module.exports = router;