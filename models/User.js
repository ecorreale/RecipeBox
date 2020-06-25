const mongoose = require('mongoose');
// const Recipe = require("./Recipe");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
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
  recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
});

const User = mongoose.model('user', userSchema);

module.exports = User;
