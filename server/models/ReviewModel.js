const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewsSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId, // This is a reference to the User model defined in UserModel.js
    ref: 'users', 
    required: true
  },
  city: {
    type: String,
    required: true
  },
  review_type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('reviews', ReviewsSchema);
