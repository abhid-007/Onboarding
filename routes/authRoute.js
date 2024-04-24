const express = require('express');
const authController = require('../controllers/authController');

module.exports = router;

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);