const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favorite_city: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
});

module.exports = mongoose.model('users', UserSchema);
