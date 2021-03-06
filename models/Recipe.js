const mongoose = require('mongoose');
const Ingredient = require('./Ingredient.js').ingredientSchema;
const Equip = require('./Equip.js').equipmentSchema;
const Direction = require('./Direction.js').directionSchema;

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  ingredients: [Ingredient],

  prepTime: {
    type: String,
  },

  cookTime: {
    type: String,
  },

  servings: {
    type: String,
  },

  equipment: {
    type: String,
  },

  directions: {
    type: String,
  },
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = { Recipe, recipeSchema };
