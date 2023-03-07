/**
 * Controller for handling all user documentation into the database
 */

const { response } = require("express");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    console.log('in userController.createUser')
    console.log('req.body: ', req.body);
    const { username, password } = req.body;

    // query the db for a username with the same username
    const userExists = await UserModel.findOne({ username });

    // validate username is not in use
    if (userExists) {
      const err = {
        message: "Error: Username already exists",
        status: 401,
        log: { error: "Username already exists" },
      };
      return next(err);
    }

    // hash user's password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // register a new user to the database with hashed password
    const registeredUser = await UserModel.create({
      username,
      password: hashedPassword,
      favorite_city: "",
      description: "",
    });
    console.log(registeredUser);
    res.locals.user = registeredUser;
    return next();
  } catch (error) {
    const err = {
      message: "Error: Error in userController.createUser",
      status: 500,
      log: { error: error.message },
    };
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
        const err = {
          message: "Error: User not found",
          status: 401,
          log: { error: "User not found" },
        };
        return next(err);
      }

      // compare provided password with stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);

      // if password does not match, return a 401 code
      if (!isMatch) {
        const err = {
          message: "Error: Incorrect password",
          status: 401,
          log: { error: "Incorrect password" },
        };
        return next(err);
      }

      res.locals.user = user;
      return next();
    } catch (error) {
        const err = {
          message: "Error: Error in username or password please try again",
          status: 500,
          log: { error: error.message },
        };
        return next(err);
      }
  };

  userController.deleteUser = async (req, res, next) => {
    try {
      // get userId from the saved session userId
      const { userId } = req.session.userId;

      // query the database for a user with userId
      const user = await UserModel.findOne({ userId });

      // if user is not found, return a 404 error
      if (!user) {
        const err = {
          message: "Error: Cannot find user with this username",
          status: 401,
          log: { error: "Cannot find user with this username" },
        };
        return next(err);
      }

      // delete the user from the database
      await UserModel.deleteOne({ userId });

      // return a success message with a 200 status code
      return res.status(200).json({ message: "user deleted successfully" });
    } catch (error) {
      const err = {
        message: "Error: express error in userController.deleteOne",
        status: 500,
        log: { error: "express error in userController.deleteOne" },
      };
      return next(err);
    }
};

userController.updateUser = async (req, res, next) => {
  try {
    // get userId from the saved session userId
    const { userId } = req.session.userId;

    // find the user by userId
    const user = await UserModel.findOne({ userId });

    // if user is not found, return a 404 error
    if (!user) {
      const err = {
        message: "Error: This user was not found",
        status: 400,
        log: { error: "This user was not found" },
      };
      return next(err);
    }

    // destructure the new username and or password, city, info from request body
    const { newUsername, newPassword, favorite_city, description } = req.body;

    // update the user's username and/or password
    user.username = newUsername ? newUsername : user.username;

    if (newPassword) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      user.password = hashedPassword;
    }

    //update favorite city and description
    user.favorite_city = favorite_city ? favorite_city : user.favorite_city;

    user.description = description ? description : user.description;

    // save the updated user to the database
    await user.save();

    // return a success message with a 200 status code
    return res.status(200).json({ message: "user updated successfully" });
  } catch (error) {
    const err = {
      message: "Error: express error in userController.updateUser",
      status: 500,
      log: { error: error.message },
    };
    return next(err);
  }
};

module.exports = userController;
