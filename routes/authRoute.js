const express = require('express');
const authController = require('../server/controllers/authController');

const router = express.Router();
module.exports = router;

//API routing
router.post('/signup', authController.signUp);
router.post('/login', authController.login);