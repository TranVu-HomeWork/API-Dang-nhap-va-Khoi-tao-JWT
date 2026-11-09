const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authLimiter = require('../middlewares/rateLimitMiddleware');

router.post('/register', authLimiter, userController.register);

module.exports = router;