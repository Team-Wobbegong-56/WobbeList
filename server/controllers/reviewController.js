const ReviewModel = require('../models/ReviewModel.js');
const UserModel = require('../models/UserModel.js');

const reviewController = {};

//CREATE A REVIEW
reviewController.createReview = async (req, res, next) => {
  try {
    const { user_id, city, review_type, name, rating, address, comments } = req.body;

    // Find the user document corresponding to the given user_id
    const user = await UserModel.findById(user_id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const review = new ReviewModel({
      user_id,
      username: user.username, // Include the user's username in the review
      city,
      review_type,
      name,
      rating,
      address,
      comments,
    });

    const savedReview = await review.save();

    //Send our saved review doc as a JSON obj
    res.json(savedReview);
    console.log('Review saved to the database!');
  } catch (error) {
    // Make a custom error object to be passed into our error handler
    const errObj = {
      message: 'ERROR: Express encountered an unidentified middleware error in reviewController.createReview',
      statusCode: 500,
      log: { error: error.message },
    };

    // Pass our errObj to be handled by our global error handler
    next(errObj);
  }
};

//DELETE A REVIEW
reviewController.deleteReview = async (req, res) => {
  try{
    //destructure the id of the review we are trying to delete
    const { reviewId } = req.params;

    //Find the review doc by ID and remove from DB
    const deletedReview = await ReviewModel.findByIdAndRemove(reviewId);
  
   if(deletedReview === undefined) {
      return res.status(404).json({ERROR: 'Review not found'});
    }

    return res.json({message: 'Review deleted from the database!'})
  } catch(error) {
      // Make a custom error object to be passed into our error handler
      const errObj = {
        message: 'ERROR: Express encountered an unidentified middleware error in reviewController.createReview',
        statusCode: 500,
        log: { error: error.message },
      };
    
      // Pass our errObj to be handled by our global error handler
      next(errObj);
  }
};

//UPDATE A REVIEW
reviewController.updateReview = async (req, res) => {
  try {
    // Get the review ID from the request params
    const { reviewId } = req.params;

    // Find the review document by ID and update it with the new data
    const updatedReview = await ReviewModel.findByIdAndUpdate(reviewId, req.body, {
      new: true, // Return the updated document instead of the old one
      runValidators: true, // Validate the update operation against the schema
    });

    if (!updatedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // Return the updated review as a JSON response
    res.json(updatedReview);
  } catch (error) {
    // Make a custom error object to be passed into our error handler
    const errObj = {
      message: 'ERROR: Express encountered an unidentified middleware error in reviewController.updateReview',
      statusCode: 500,
      log: { error: error.message },
    };

    // Pass our errObj to be handled by our global error handler
    next(errObj);
  }
};

//GET ALL REVIEWS
reviewController.getAllReviews = async (req, res) => {
  try {
    // Find all reviews in the database
    const reviews = await ReviewModel.find({});

    // Return the reviews as a JSON response
    res.json(reviews);
  } catch (error) {
    // Make a custom error object to be passed into our error handler
    const errObj = {
      message: 'ERROR: Express encountered an unidentified middleware error in reviewController.getAllReviews',
      statusCode: 500,
      log: { error: error.message },
    };

    // Pass our errObj to be handled by our global error handler
    next(errObj);
  }
};

//GET A SPECIFIC REVIEW
reviewController.getReview = async (req, res) => {
  try {
    // Get the review ID from the request params
    const { reviewId } = req.params;

    // Find the review document by ID
    const review = await ReviewModel.findById(reviewId);

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // Return the review as a JSON response
    res.json(review);
  } catch (error) {
    // Make a custom error object to be passed into our error handler
    const errObj = {
      message: 'ERROR: Express encountered an unidentified middleware error in reviewController.getReview',
      statusCode: 500,
      log: { error: error.message },
    };

    // Pass our errObj to be handled by our global error handler
    next(errObj);
  }
};


//GET ALL REVIEWS FOR A SPECIFIC USER
reviewController.getUserReviews = async (req, res, next) => {
  try {
    // Get the user ID from the request parameters
    const { userId } = req.params;

    // Find all reviews with the given user ID
    const userReviews = await ReviewModel.find({ user_id: userId });

    // Return the reviews as a JSON response
    res.json(userReviews);
  } catch (error) {
    // Make a custom error object to be passed into our error handler
    const errObj = {
      message: 'ERROR: Express encountered an unidentified middleware error in reviewController.getUserReviews',
      statusCode: 500,
      log: { error: error.message },
    };

    // Pass our errObj to be handled by our global error handler
    next(errObj);
  }
};

//GET ALL REVIEWS BY CITY
reviewController.getReviewsByCity = async (req, res, next) => {
  try {
    // Get the city from the request parameters
    const { city } = req.params;

    // Find all reviews with the given city
    const reviews = await ReviewModel.find({ city: new RegExp(city, "i") });

    // Return the reviews as a JSON response
    res.json(reviews);
  } catch (error) {
    // Make a custom error object to be passed into our error handler
    const errObj = {
      message: 'ERROR: Express encountered an unidentified middleware error in reviewController.getReviewsByCity',
      statusCode: 500,
      log: { error: error.message },
    };

    // Pass our errObj to be handled by our global error handler
    next(errObj);
  }
};


//GET ALL REVIEWS BY CITY BY TYPE
reviewController.getReviewsByCityAndType = async (req, res, next) => {
  try {
    // Get the city and review type from the request parameters
    const city = req.params.city;
    const reviewType = req.params.reviewType;

    // Find all reviews with the given city and review type
    const regexCity = new RegExp(city, "i");
    const regexReviewType = new RegExp(reviewType, "i");
    const reviews = await ReviewModel.find({ city: regexCity, review_type: regexReviewType });

    // Return the reviews as a JSON response
    res.json(reviews);
  } catch (error) {
    // Make a custom error object to be passed into our error handler
    const errObj = {
      message: 'ERROR: Express encountered an unidentified middleware error in reviewController.getReviewsByCityAndType',
      statusCode: 500,
      log: { error: error.message },
    };

    // Pass our errObj to be handled by our global error handler
    next(errObj);
  }
};

//GET ALL REVIEWS BY CITY BY USER
reviewController.getReviewsByCityAndUser = async (req, res, next) => {
  try {
    // Get the city and user ID from the request parameters
    const { city, userId } = req.params;

    // Find all reviews with the given city and user ID
    const reviews = await ReviewModel.find({ city, user_id: userId });

    // Return the reviews as a JSON response
    res.json(reviews);
  } catch (error) {
    // Make a custom error object to be passed into our error handler
    const errObj = {
      message: 'ERROR: Express encountered an unidentified middleware error in reviewController.getReviewsByCityAndUser',
      statusCode: 500,
      log: { error: error.message },
    };

    // Pass our errObj to be handled by our global error handler
    next(errObj);
  }
};

//GET REVIEW BY USER BY TYPE
reviewController.getReviewsByUserAndType = async (req, res, next) => {
  try {
    // Get the user ID and review type from the request parameters
    const { userId, reviewType } = req.params;

    // Find all reviews with the given user ID and review type
    const regexReviewType = new RegExp(reviewType, "i");
    const reviews = await ReviewModel.find({ user_id: userId, review_type: regexReviewType });

    // Return the reviews as a JSON response
    res.json(reviews);
  } catch (error) {
    // Make a custom error object to be passed into our error handler
    const errObj = {
      message: 'ERROR: Express encountered an unidentified middleware error in reviewController.getReviewsByUserAndType',
      statusCode: 500,
      log: { error: error.message },
    };

    // Pass our errObj to be handled by our global error handler
    next(errObj);
  }
};

module.exports = reviewController;
