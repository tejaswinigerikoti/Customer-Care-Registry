const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Route mapping
router.post('/register', registerUser);
router.post('/login', loginUser); // <-- ADD THIS LINE

module.exports = router;