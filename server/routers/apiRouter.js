/**
 * This file handles API calls for userModels
 */
const express =  require('express');
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');

const UsersRouter = express.Router();

// create a new user
UsersRouter.post('/', userController.createUser, sessionController.startSession);

// retrieve an existing user by username and password
UsersRouter.post('/login', userController.getUser, sessionController.startSession);

UsersRouter.post('/update', userController.updateUser);

UsersRouter.delete('/delete', userController.deleteUser);

module.exports = UsersRouter;