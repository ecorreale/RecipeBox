const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Include any API routes here

// Serve static files from the React app in production.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  // The "catchall" handler: for any request that doesn't match an api
  // route, send back the React index.html file.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
