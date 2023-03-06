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
    const user = res.locals.user; //updated to res.locals
    const id = user._id.valueOf() //need valueOf?
    console.log('new Session arg: ', id)

    // create new session with user_id as the userId
    const session = new Session({ cookieId: id }); //changed this and below from userId to cookieId
    await session.save();
    console.log('session created') //did not get here

    // set a cookie with the session ID
    res.cookie('userId', session.cookieId.valueOf(), /*{ maxAge: 86400000}*/); //removed maxAge
    console.log({ sessionId: session.cookieId });
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