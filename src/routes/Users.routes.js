const express = require('express');
const userController = require('../controller/UserController');
const auth = require("../middleware/auth.middleware");
const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:username', userController.getUserByUsername);
router.delete('/:username', auth.authMiddleware, userController.deleteByUsername);

module.exports = router;
