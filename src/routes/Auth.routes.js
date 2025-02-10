const express = require('express');
const Auth = require('../controller/AuthController');
const authMiddleware = require('../middleware/auth.middleware')

const router = express.Router();

router.post('/login', Auth.login);
router.post('/token', authMiddleware.authMiddleware, Auth.token);

module.exports =  router;