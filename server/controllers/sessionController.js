const Session = require('../models/sessionModel');

const sessionController = {};

// middleware function to start a new session
sessionController.startSession = async (req, res, next) => {
  try { 
    // const userId = req.cookies.userId;

    // // check to see if user already has a session cookie
    // if (userId) {
    //   return res.status(200).json({ sessionId: userId });
    // }

    // Retrieve the user from req.locals.user
    const user = res.locals.user;
    const id = user._id.valueOf();

    // create new session with user_id as the userId
    const session = new Session({ cookieId: id });
    await session.save();

    // set a cookie with the session ID
    res.cookie('userId', session.cookieId, { maxAge: 86400000});

    return res.status(200).json({ sessionId: session.cookieId });
  } catch (error) {
    const err = {
      message: 'Error: express error in userController.updateUser',
      statusCode: 500,
      log: { error: error.message }
    }
    return next(err);
  }
}



module.exports = sessionController;