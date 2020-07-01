const mongoose = require('mongoose');
const Ingredient = require('./Ingredient.js');
const Equip = require('./Equip.js');
const Direction = require('./Direction.js');
// const User = require("./User");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  name: {
    type: String,
    required: true,
  },
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],

  preptime: {
    type: String,
  },
  cooktime: {
    type: String,
  },
  equipment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Equip' }],

  directions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Direction' }],

  serving: {
    type: Number,
  },
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;
