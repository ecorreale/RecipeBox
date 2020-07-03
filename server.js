require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

// Environment Variables
const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;
const NODE_ENV = process.env.NODE_ENV;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI || 'mongodb://localhost/recipebox', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
// Get the connection
const db = mongoose.connection;

// Bind to connection error event (to get notification of errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var corsOptions = {
  origin: BASE_URL,
};

app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

// Include any API routes here
app.use(routes);

// Serve static files from the React app in production.
if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  // The "catchall" handler: for any request that doesn't match an api
  // route, send back the React index.html file.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, function () {
  console.log(`🌎 ==> API server running on port ${PORT}!`);
  console.log('Node Base URL: ' + BASE_URL);
  console.log('NODE_ENV: ' + NODE_ENV);
  console.log('MONGODB_URI: ' + MONGODB_URI);
  console.log('CORS_URL: ' + BASE_URL);
});
