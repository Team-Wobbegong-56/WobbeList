/**
 * This file handles API calls for userModels
 */
const express =  require('express');
const userController = require('../controllers/userController');

const UsersRouter = express.Router();

// create a new user
UsersRouter.post('/', userController.createUser);

// retrieve an existing user by username and password
UsersRouter.post('/login', userController.getUser);

export default UsersRouter;