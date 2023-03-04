/**
 * Controller for handling all user documentation into the database
 */

const { response } = require('express');
const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt')

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // query the db for a username with the same username
    const userExists = await UserModel.findOne({ username });

    // validate username is not in use
    if(userExists) {
      return response.status(400).json({ message: 'This username is in use!' });
    }

    // hash user's password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // register a new user to the database with hashed password
    const registeredUser = await UserModel.create({ username, password: hashedPassword });

    response.status(200).json({ message: 'Success!' });
  } catch (error) {
    const err = {
      message: 'Error: express error in userController.createUser',
      statusCode: 500,
      log: { error: error.message }
    }
    return next(err);
  }
};

userController.getUser = async (req, res, next) => {

}

userController.deleteUser = async (req, res, next) => {

}

userController.updateUser = async (req, res, next) => {
  
}

userController.getUser = async
