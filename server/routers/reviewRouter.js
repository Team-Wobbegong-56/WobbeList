const express = require('express');
const reviewController = require('../controllers/reviewController');

const reviewRouter = express.Router();

// Create a new review
reviewRouter.post('/', reviewController.createReview);

// Get all reviews
reviewRouter.get('/', reviewController.getAllReviews);

// Get a specific review
reviewRouter.get('/:reviewId', reviewController.getReview);

// Update a review
reviewRouter.put('/:reviewId', reviewController.updateReview);

// Delete a review
reviewRouter.delete('/:reviewId', reviewController.deleteReview);

// Get all reviews for a specific user
reviewRouter.get('/user/:userId', reviewController.getUserReviews);

// Get all reviews by city
reviewRouter.get('/city/:city', reviewController.getReviewsByCity);

// Get all reviews by city and review type
reviewRouter.get('/city/:city/type/:reviewType', reviewController.getReviewsByCityAndType);

// Get all reviews by city and user
reviewRouter.get('/city/:city/user/:userId', reviewController.getReviewsByCityAndUser);

// Get all reviews by user and review type
reviewRouter.get('/user/:userId/type/:reviewType', reviewController.getReviewsByUserAndType);


module.exports = reviewRouter;