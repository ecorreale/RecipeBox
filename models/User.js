const mongoose = require('mongoose');
const Recipe = require('./Recipe').recipeSchema;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  recipes: [Recipe],
});

const User = mongoose.model('user', userSchema);

module.exports = User;
