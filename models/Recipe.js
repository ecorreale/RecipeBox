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
  ingredients: {
    type: [Ingredient],
    default: undefined,
  },
  preptime: {
    type: String,
  },
  cooktime: {
    type: String,
  },
  equipment: {
    type: [Equip],
    default: undefined,
  },
  directions: {
    type: [Direction],
    default: undefined,
  },
  serving: {
    type: Number,
  },
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;
