const ReviewModel = require('../models/ReviewModel.js');

const reviewController = {};

reviewController.createReview = async (req, res) => {
  try {
    const { user_id, city, review_type, name, rating, address, comments } = req.body;
    const review = new ReviewModel({
      user_id,
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
    
  }

};

reviewController.updateReview = async (req, res) => {
  
};


module.exports = reviewController;