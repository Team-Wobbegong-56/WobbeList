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
  try {
    // destructure username and password from request body
    // frontend is giving a post request.
    const { username, password } = req.body;

    // query the database for a user with username
    const user = await UserModel.findOne({ username });

    // if user is not found, return a 404 error
    if (!user) {
      return res.status(404).json({ message: 'user not found'});
    }

    // compare provided password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    // if password does not match, return a 401 code
    if (!isMatch) {
      return res.status(401).json({ message: 'incorrect password' });
    }

    // return the user info with 200 status code
    res.status(200).json({ username });

  } catch (error) {
    const err = {
      message: 'Error: express error in userController.getUser',
      statusCode: 500,
      log: { error: error.message }
    }
    return next(err);
  }
}

userController.deleteUser = async (req, res, next) => {
  try {
    // destructure username from request parameters
    const { username } = req.params;

    // query the database for a user with username
    const user = await UserModel.findOne({ username });

    // if user is not found, return a 404 error
    if (!user) {
    return res.status(404).json({ message: 'user not found'});
    }

    // delete the user from the database
    await UserModel.deleteOne({ username });

    // return a success message with a 200 status code
    res.status(200).json({ message: 'user deleted successfully' });
  } catch (error) {
    const err = {
      message: 'Error: express error in userController.deleteOne',
      statusCode: 500,
      log: { error: error.message }
    }
    return next(err);
  }
}

userController.updateUser = async (req, res, next) => {
  try {
    // destructure username from request parameters
    const { username } = req.params;

    // find the user by username
    const user = await UserModel.findOne({ username });

    // if user is not found, return a 404 error
    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }

    // destructure the new username and password from request body
    const { newUsername, newPassword } = req.body;

    // update the user's username and/or password
    user.username = newUsername || user.username;

    if (newPassword) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      user.password = hashedPassword;
    }

    // save the updated user to the database
    await user.save();

    // return a success message with a 200 status code
    res.status(200).json({ message: 'user updated successfully' });
  } catch (error) {
    const err = {
      message: 'Error: express error in userController.updateUser',
      statusCode: 500,
      log: { error: error.message }
    }
    return next(err);
  }
}


module.exports = userController;