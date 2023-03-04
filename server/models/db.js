const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://Wobbegadmin:XKWZUf8etMaqlCeW@wobbecluster.cnuohqc.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

module.exports = db;