const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const UserController = require('../controller/userController');

router.get('/users', authMiddleware, adminMiddleware, UserController.getAllUsers);

router.delete('/users/:id', authMiddleware, adminMiddleware, UserController.deleteUser);

router.get('/users/filter', authMiddleware, adminMiddleware, UserController.filterUsers);

module.exports = router;
