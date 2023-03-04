/* 
  file is entry point of the application
*/

require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
const db = require('./models/db.js');
const reviewRouter = require('./routers/reviewRouter');
import UsersRouter from './routers/apiRouter.js'

const app = express();

// PORT
const PORT = 3000;


app.use(cors());
app.use(express.json());
app.use(cookieParser());

// create axios instance for frontend calls
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api'
})

// static elements
app.use('/client', express.static(path.join(__dirname, '/dist')));

// api calls
app.use('/user', UsersRouter);
app.use('/review', reviewRouter);

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Port
db.once('open', () => {
  app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
});


