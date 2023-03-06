const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  review_type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('reviews', ReviewSchema);
