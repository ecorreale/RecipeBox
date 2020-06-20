const mongoose = require('mongoose');
const Ingredient = require('./Ingredient.js');
const Equip = require('./Equip.js');
const Direction = require('./Direction.js');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [Ingredient],
  preptime: {
    type: String,
  },
  cooktime: {
    type: String,
  },
  equipment: [Equip],
  directions: [Direction],
  serving: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;
