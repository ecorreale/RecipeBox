const mongoose = require('mongoose');
// const Recipe = require("./Recipe");

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    username: {
      type: String,
      trim: true,
      required: 'Username is Required',
    },
    email: { type: String, trim: true, required: 'email is Required' },

    password: { type: String, trim: true, required: 'password is Required' },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
      },
    ],
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
  })
);

module.exports = User;
