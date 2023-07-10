// routes for authentication login and signup

const express = require('express');
const router = express.Router();

const { signup, login, isLoggedIn } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/isLoggedIn', isLoggedIn);

module.exports = router;