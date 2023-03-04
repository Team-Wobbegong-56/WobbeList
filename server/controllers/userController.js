/**
 * Controller for handling all user documentation into the database
 */

const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt')

const userController = {};

userController.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

  }
}
