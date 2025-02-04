const express = require('express');
const Auth = require('../controller/AuthController');

const router = express.Router();

router.post('/login', Auth.login);

module.exports =  router;