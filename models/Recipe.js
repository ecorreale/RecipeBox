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

  image: {
    type: String,
  },
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = { Recipe, recipeSchema };
